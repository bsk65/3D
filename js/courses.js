// js/courses.js — Banelogik: hent/vis baneliste, banedetalje (kort/besøg/rediger),
// mål-CRUD, godkendte-brugere (approved-users) til skjulte baner, opret/slet bane.
// Bruger Leaflet via window.L (globalt script, ikke ES-modul).
//
// fetchCourses/renderCoursesList/updateTargetInFirestore/compressImage/
// removeVisitFromCourse kaldes direkte af main.js og eksporteres derfor normalt.
// Resten er HTML onclick-handlere der selv-registrerer sig på window.* ved import.
//
// populateCourseDropdown (opsætnings-UI for runde-start) bor stadig i main.js og
// eksponeres via window.populateCourseDropdown, så dette modul kan kalde den uden
// cirkulær import (samme mønster som friends.js bruger window.addParticipant).

import { state } from './state.js'
import { esc, showToast, showConfirm } from './utils.js'
import { lsSave } from './storage.js'
import { parseScores, findWinner, calcTotal } from './scoring.js'
import { getCurrentPosition } from './gps.js'
import { db, storage, collection, doc, getDoc, getDocs, setDoc, updateDoc,
         deleteDoc, addDoc, serverTimestamp, query, where,
         ref, uploadString, getDownloadURL } from './firebase-init.js'

// ─── COURSES ──────────────────────────────────────────────────────────────────
export function mapCourseDoc(d){
  const data=d.data()
  return {id:d.id,name:data.name||data.yam||'—',numTargets:data.numTargets||data.antalMål||24,
    location:data.location||data.beliggenhed||'',targets:data.targets||data.mål||[],visits:data.visits||data.besøg||[],
    private:data.private??data.privat??false,hidden:data.hidden??data.skjult??false,
    approvedUsers:data.approvedUsers||data.godkendteBrugere||[]}
}

export async function fetchCourses(){
  try{
    const email=(state.user?.email||'').toLowerCase()
    let snaps
    if(state.isAdmin){
      snaps=[await getDocs(collection(db,'courses'))]
    }else{
      const qs=[getDocs(query(collection(db,'courses'),where('hidden','==',false)))]
      if(email)qs.push(getDocs(query(collection(db,'courses'),where('hidden','==',true),where('approvedUsers','array-contains',email))))
      snaps=await Promise.all(qs)
    }
    const byId=new Map()
    snaps.forEach(s=>s.docs.forEach(d=>byId.set(d.id,d)))
    const firestoreCourses=[...byId.values()].map(mapCourseDoc)
    if(firestoreCourses.length){
      state.courses = firestoreCourses
      lsSave()
      renderCoursesList()
      window.populateCourseDropdown()
    }
  }catch(err){console.warn('courses:',err)}
}

export function renderCoursesList(){
  const el=document.getElementById('courses-list')
  if(!state.courses.length){el.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}
  el.innerHTML=''
  state.courses.forEach(c=>{
    const card=document.createElement('div');card.className='ccard'
    card.innerHTML=`<div class="ccard-name">${esc(c.name)}${c.private?' <span class="ccard-private-note">(Banen er kun for medlemmer)</span>':''}</div><div class="ccard-meta">${c.numTargets} mål · ${esc(c.location||'—')}</div>`
    card.onclick=()=>openCourseDetail(c);el.appendChild(card)
  })
}

function openCourseDetail(course){
  state.currentCourse=course
  document.getElementById('courses-list-view').classList.add('hidden')
  document.getElementById('course-detail-view').classList.remove('hidden')
  document.getElementById('course-detail-title').textContent=course.name+(course.private?' (Banen er kun for medlemmer)':'')
  window.switchSubtab('map');initCourseMap(course);renderVisits(course);renderCourseEditForm(course)
}

function initCourseMap(course){
  const mapEl=document.getElementById('course-map')
  if(state.courseMap){state.courseMap.remove();state.courseMap=null}
  state.courseMap=window.L.map(mapEl)
  window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Esri',maxZoom:19}).addTo(state.courseMap)
  const bounds=[];
  (course.targets||[]).forEach((t,i)=>{
    const tgps=t.gps||t.GPS;if(!tgps||!tgps.lat||!tgps.lng)return;bounds.push([tgps.lat,tgps.lng])
    window.L.marker([(t.gps||t.GPS).lat,(t.gps||t.GPS).lng],{icon:window.L.divIcon({className:'',
      html:`<div class="map-marker-num">${i+1}</div>`,
      iconSize:[28,28],iconAnchor:[14,14]})}).addTo(state.courseMap)
      .bindPopup(`<b>${i+1}. ${t.name||'Mål'}</b>${t.emoji?`<br>${t.emoji}`:''}${t.imageUrl||t.photo?`<br><img src="${t.imageUrl||t.photo}" class="popup-target-img"/>`:''}`)
  })
  if(bounds.length)state.courseMap.fitBounds(bounds,{padding:[20,20]})
  else state.courseMap.setView([55.7,12.5],10)
}

function renderVisits(course){
  const el=document.getElementById('visits-list')
  const myRounds=state.rounds
    .filter(r=>r.courseId===course.id)
    .map(r=>{
      const shooters=(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
      const winner=findWinner(shooters)
      return {
        roundId:r.id,
        date:r.completed?new Date(r.completed).toLocaleDateString('da-DK'):(r.created?new Date(r.created).toLocaleDateString('da-DK'):'—'),
        participants:shooters.map(s=>s.name),
        winner:winner?.name,
        winnerScore:winner?calcTotal(winner.scores):0
      }
    })
  if(!myRounds.length){el.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}
  el.innerHTML=''
  myRounds.forEach(v=>{
    const card=document.createElement('div');card.className='visit-card'
    // Bemærk: card.style.cursor='pointer' fjernet — .visit-card sætter allerede
    // cursor:pointer i css/style.css, den inline sætning var en no-op.
    card.onclick=(e)=>{if(!e.target.closest('.btn-icon'))window.showVisitResults(v.roundId)}
    card.innerHTML=`<div class="visit-card-head"><span class="visit-card-date">${esc(v.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${esc(v.roundId)}')" title="Se resultat">📊</button></div><div class="visit-card-participants">${(v.participants||[]).map(esc).join(', ')}</div>${v.winner?`<div class="visit-card-winner">🏆 ${esc(v.winner)} (${v.winnerScore} pt)</div>`:''}`
    el.appendChild(card)
  })
}

function renderCourseEditForm(course){
  const targets=course.targets||[]
  let html=`
    <div class="card edit-info-card">
      <div class="card-title">Baneinfo</div>
      <div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${course.name}" /></div>
      <div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${course.location||''}" /></div>
      <div class="fg"><label class="lbl">Synlighed</label>
        <select id="edit-cvisibility" onchange="document.getElementById('edit-capproved-wrap').style.display=this.value==='hidden'?'':'none'">
          <option value="public" ${!course.private?'selected':''}>Offentlig</option>
          <option value="private" ${course.private&&!course.hidden?'selected':''}>Privat</option>
          <option value="hidden" ${course.hidden?'selected':''}>Skjult (kun godkendte)</option>
        </select>
      </div>
      <div class="trow-sub edit-visibility-hint">Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.</div>
      <div id="edit-capproved-wrap" style="display:${course.hidden?'':'none'};">
        <div class="ac-wrap fg">
          <input type="text" id="edit-capproved-search" placeholder="Søg registreret bruger…" autocomplete="off" oninput="searchApprovedUsers('edit',this.value)" />
          <div id="edit-capproved-ac" class="ac-list hidden"></div>
        </div>
        <div id="edit-capproved-chips" class="edit-approved-chips-wrap"></div>
        <input type="text" id="edit-capproved-manual" placeholder="…eller indtast email direkte" />
        <button type="button" class="btn btn-dark edit-approved-add-btn" onclick="addApprovedEmailManual('edit')">Tilføj</button>
      </div>
      <button class="btn btn-gold edit-save-btn" onclick="saveCourseEdit()">Gem baneinfo</button>
    </div>
    <div class="card">
      <div class="card-title targets-card-title">
        <span>Mål (${targets.length})</span>
        <button class="btn-icon add-target-btn" onclick="addTargetToCurrentCourse()">＋</button>
      </div>
      <div id="targets-edit-list">`

  targets.forEach((t,i)=>{
    html+=`<div class="fg target-edit-block">
      <div class="target-edit-head">
        <span class="target-edit-title">Mål ${i+1}</span>
        <div class="target-edit-actions">
          <button class="btn-icon" onclick="setTargetGps(${i})" title="Sæt GPS">📍</button>
          <button class="btn-icon target-delete-btn" onclick="deleteTargetFromCourse(${i})">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">Navn</label>
        <input type="text" value="${t.name||''}" onchange="updateTargetField(${i},'name',this.value)" class="target-edit-input" /></div>
      <div class="target-edit-row">
        <div class="fg target-edit-col"><label class="lbl">Emoji</label>
          <input type="text" value="${t.emoji||''}" onchange="updateTargetField(${i},'emoji',this.value)" class="target-edit-input" /></div>
        <div class="fg target-edit-col"><label class="lbl">Afstand (m)</label>
          <input type="number" value="${t.distance||''}" onchange="updateTargetField(${i},'distance',this.value)" class="target-edit-input" /></div>
      </div>
      ${t.gps||t.GPS?
        `<div class="target-gps-info">📍 GPS: ${(t.gps||t.GPS).lat.toFixed(5)}, ${(t.gps||t.GPS).lng.toFixed(5)}</div>`:
        `<div class="target-gps-missing">Ingen GPS</div>`
      }
      ${t.imageUrl||t.photo?
        `<img src="${t.imageUrl||t.photo}" class="target-photo-preview" />`:''
      }
      <label class="btn btn-dark target-upload-label">
        📷 Upload foto
        <input type="file" accept="image/*" class="target-file-input" onchange="uploadTargetPhoto(${i},this)" />
      </label>
      <button class="btn btn-gold target-save-btn" onclick="saveAllTargets()">💾 Gem alle mål</button>
    </div>`
  })

  html+=`</div></div>`
  document.getElementById('course-edit-form').innerHTML=html
  state.approvedDraft.edit=[...(course.approvedUsers||[])]
  renderApprovedChips('edit')
}

window.saveCourseEdit=async function(){
  const name=document.getElementById('edit-cname').value.trim().slice(0,100)
  const loc=document.getElementById('edit-cloc').value.trim().slice(0,100)
  const visibility=document.getElementById('edit-cvisibility').value
  const isPrivate=visibility!=='public',isHidden=visibility==='hidden'
  const approvedUsers=isHidden?[...state.approvedDraft.edit]:[]
  if(!name)return
  await updateDoc(doc(db,'courses',state.currentCourse.id),{name,yam:name,location:loc,beliggenhed:loc,
    private:isPrivate,privat:isPrivate,hidden:isHidden,skjult:isHidden,approvedUsers,godkendteBrugere:approvedUsers})
  state.currentCourse.name=name;state.currentCourse.location=loc;state.currentCourse.private=isPrivate
  state.currentCourse.hidden=isHidden;state.currentCourse.approvedUsers=approvedUsers
  const idx=state.courses.findIndex(c=>c.id===state.currentCourse.id)
  if(idx>-1)state.courses[idx]={...state.courses[idx],name,location:loc,private:isPrivate,hidden:isHidden,approvedUsers}
  lsSave();renderCoursesList()
  document.getElementById('course-detail-title').textContent=name+(isPrivate?' (Banen er kun for medlemmer)':'');showToast('Gemt!','success')
}

window.updateTargetField=function(idx,field,value){
  if(!state.currentCourse?.targets)return
  state.currentCourse.targets[idx][field]=value
}

window.addTargetToCurrentCourse=async function(){
  if(!state.currentCourse)return
  const targets=[...(state.currentCourse.targets||[])]
  targets.push({number:targets.length+1,name:'',emoji:'',imageUrl:'',distance:null,gps:null})
  await updateDoc(doc(db,'courses',state.currentCourse.id),{targets})
  state.currentCourse.targets=targets
  renderCourseEditForm(state.currentCourse)
  showToast(`Mål ${targets.length} tilføjet!`,'success')
}

window.deleteTargetFromCourse=function(idx){
  if(!state.currentCourse?.targets)return
  showConfirm(`Slet mål ${idx+1}?`,async()=>{
    try{
      const targets=[...state.currentCourse.targets]
      targets.splice(idx,1)
      targets.forEach((t,i)=>t.number=i+1)
      await updateDoc(doc(db,'courses',state.currentCourse.id),{targets,numTargets:targets.length})
      state.currentCourse.targets=targets
      state.currentCourse.numTargets=targets.length
      renderCourseEditForm(state.currentCourse)
    }catch(e){showToast('Fejl: Kunne ikke slette mål','error')}
  })
}

window.setTargetGps=async function(idx){
  if(!state.currentCourse?.targets)return
  try{
    const pos=await getCurrentPosition()
    state.currentCourse.targets[idx].gps=pos
    await updateDoc(doc(db,'courses',state.currentCourse.id),{targets:state.currentCourse.targets})
    renderCourseEditForm(state.currentCourse)
    showToast(`GPS sat for mål ${idx+1}!`,'success')
  }catch(e){showToast('GPS fejl: '+e.message,'error')}
}

window.uploadTargetPhoto=async function(idx,input){
  const file=input.files[0];if(!file)return
  try{
    const b64=await compressImage(file)
    const imgRef=ref(storage,`courses/${state.currentCourse.id}/target_${idx}.jpg`)
    await uploadString(imgRef,b64,'base64',{contentType:'image/jpeg'})
    const url=await getDownloadURL(imgRef)
    state.currentCourse.targets[idx].imageUrl=url
    await updateDoc(doc(db,'courses',state.currentCourse.id),{targets:state.currentCourse.targets})
    renderCourseEditForm(state.currentCourse)
    showToast('Foto gemt!','success')
  }catch(e){showToast('Upload fejl: '+e.message,'error')}
}

window.saveAllTargets=async function(){
  if(!state.currentCourse?.targets)return
  await updateDoc(doc(db,'courses',state.currentCourse.id),{targets:state.currentCourse.targets})
  showToast('Alle mål gemt!','success')
}

window.switchSubtab=function(name){
  document.querySelectorAll('.stab').forEach(b=>b.classList.toggle('active',b.dataset.stab===name))
  document.querySelectorAll('.stab-c').forEach(el=>{el.classList.toggle('active',el.id===`stab-${name}`);el.classList.toggle('hidden',el.id!==`stab-${name}`)})
  if(name==='map'&&state.courseMap)setTimeout(()=>state.courseMap.invalidateSize(),100)
}

window.toggleMyPos=async function(){
  const sw=document.getElementById('mypos-sw');sw.classList.toggle('on')
  if(sw.classList.contains('on')){
    try{const pos=await getCurrentPosition();window.L.circle([pos.lat,pos.lng],{radius:10,color:'#2a7ae8',fillOpacity:0.7}).addTo(state.courseMap);state.courseMap.panTo([pos.lat,pos.lng])}
    catch(e){showToast('GPS ikke tilgængeligt','error');sw.classList.remove('on')}
  }
}

window.doDeleteCourse=function(){
  if(!state.currentCourse)return
  const id=state.currentCourse.id,name=state.currentCourse.name
  showConfirm(`Slet banen "${name}"?`,async()=>{
    try{
      await deleteDoc(doc(db,'courses',id))
      state.courses=state.courses.filter(c=>c.id!==id)
      state.currentCourse=null
      lsSave();renderCoursesList();window.populateCourseDropdown()
      document.getElementById('courses-list-view').classList.remove('hidden')
      document.getElementById('course-detail-view').classList.add('hidden')
      showToast('Bane slettet','success')
    }catch(e){showToast('Fejl: Kunne ikke slette bane','error')}
  })
}

const approvedIds={new:'new-course-approved',edit:'edit-capproved'}

function renderApprovedChips(mode){
  const emails=state.approvedDraft[mode]
  document.getElementById(`${approvedIds[mode]}-chips`).innerHTML=emails.length?emails.map(e=>
    `<span class="approved-chip">${esc(e)}<span class="approved-chip-remove" onclick="removeApprovedEmail('${mode}','${esc(e)}')">✕</span></span>`
  ).join(''):'<span class="approved-empty">Ingen godkendt endnu</span>'
}

function addApprovedEmailToDraft(mode,raw){
  const email=raw.trim().toLowerCase()
  if(!email||!email.includes('@'))return
  if(!state.approvedDraft[mode].includes(email))state.approvedDraft[mode].push(email)
  renderApprovedChips(mode)
}

window.removeApprovedEmail=function(mode,email){
  state.approvedDraft[mode]=state.approvedDraft[mode].filter(e=>e!==email)
  renderApprovedChips(mode)
}

window.addApprovedEmailManual=function(mode){
  const input=document.getElementById(`${approvedIds[mode]}-manual`)
  addApprovedEmailToDraft(mode,input.value)
  input.value=''
}

window.searchApprovedUsers=async function(mode,val){
  const list=document.getElementById(`${approvedIds[mode]}-ac`)
  if(!val.trim()){list.classList.add('hidden');return}
  let users=[]
  try{
    const snap=await getDocs(collection(db,'users'))
    users=snap.docs.map(d=>d.data())
      .map(u=>({name:u.name||u.yam||u.email||'—',email:(u.email||u['e-mail']||'').toLowerCase()}))
      .filter(u=>u.email&&(u.name.toLowerCase().includes(val.toLowerCase())||u.email.includes(val.toLowerCase())))
  }catch(e){console.warn(e)}
  if(!users.length){list.classList.add('hidden');return}
  list.innerHTML=users.map(u=>`<div class="ac-item" data-email="${esc(u.email)}">${esc(u.name)} <span style='font-size:11px;opacity:.6'>${esc(u.email)}</span></div>`).join('')
  list.querySelectorAll('.ac-item').forEach(el=>el.addEventListener('click',()=>{
    addApprovedEmailToDraft(mode,el.dataset.email)
    document.getElementById(`${approvedIds[mode]}-search`).value=''
    list.classList.add('hidden')
  }))
  list.classList.remove('hidden')
}

window.openCreateCourseModal=function(){
  state.approvedDraft.new=[]
  renderApprovedChips('new')
  document.getElementById('new-course-visibility').value='public'
  document.getElementById('new-course-approved-wrap').style.display='none'
  document.getElementById('create-course-modal').classList.remove('hidden')
}

window.doCreateCourse=async function(){
  const name=document.getElementById('new-course-name').value.trim().slice(0,100)
  const loc=document.getElementById('new-course-loc').value.trim().slice(0,100)
  const visibility=document.getElementById('new-course-visibility').value
  const isPrivate=visibility!=='public',isHidden=visibility==='hidden'
  const approvedUsers=isHidden?[...state.approvedDraft.new]:[]
  const _nct=document.getElementById('new-course-targets')
  const num=(_nct.value==='custom'?Number(document.getElementById('new-course-targets-custom').value):Number(_nct.value))||24
  if(!name)return
  const targets=Array.from({length:num},(_,i)=>({number:i+1,name:'',emoji:'',imageUrl:'',distance:null,gps:null}))
  try{
    const docRef=await addDoc(collection(db,'courses'),{name,yam:name,numTargets:num,antalMål:num,location:loc,beliggenhed:loc,targets,mål:targets,
      private:isPrivate,privat:isPrivate,hidden:isHidden,skjult:isHidden,approvedUsers,godkendteBrugere:approvedUsers,
      created:serverTimestamp(),visits:[],besøg:[]})
    state.courses.unshift({id:docRef.id,name,numTargets:num,location:loc,targets,visits:[],private:isPrivate,hidden:isHidden,approvedUsers})
    lsSave();renderCoursesList();window.populateCourseDropdown()
    document.getElementById('create-course-modal').classList.add('hidden')
    document.getElementById('new-course-name').value=''
    document.getElementById('new-course-visibility').value='public'
    document.getElementById('new-course-approved-wrap').style.display='none'
    showToast('Bane oprettet!','success')
  }catch(e){showToast('Fejl: Kunne ikke oprette bane','error')}
}

export async function updateTargetInFirestore(courseId,targetIndex,targetData){
  const ref2=doc(db,'courses',courseId);const snap=await getDoc(ref2)
  if(!snap.exists())return
  const d=snap.data();const targets=[...(d.targets||d.mål||[])]
  while(targets.length<=targetIndex)targets.push({})
  targets[targetIndex]={...targets[targetIndex],...targetData}
  await updateDoc(ref2,{targets,mål:targets})
}

export function compressImage(file){
  return new Promise((res,rej)=>{
    const reader=new FileReader()
    reader.onload=e=>{
      const img=new Image()
      img.onload=()=>{
        const MAX=400;let w=img.width,h=img.height
        if(w>h){if(w>MAX){h=h*MAX/w;w=MAX}}else{if(h>MAX){w=w*MAX/h;h=MAX}}
        const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h
        canvas.getContext('2d').drawImage(img,0,0,w,h)
        res(canvas.toDataURL('image/jpeg',0.65).split(',')[1])
      }
      img.onerror=rej;img.src=e.target.result
    }
    reader.onerror=rej;reader.readAsDataURL(file)
  })
}

export async function removeVisitFromCourse(courseId, roundId){
  const ref2=doc(db,'courses',courseId)
  const snap=await getDoc(ref2)
  if(!snap.exists())return
  const visits=(snap.data().visits||[]).filter(v=>v.roundId!==roundId)
  await updateDoc(ref2,{visits})
  const course=state.courses.find(c=>c.id===courseId)
  if(course)course.visits=visits
}
