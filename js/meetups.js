// js/meetups.js — "Skal vi skyde sammen": foreslå/tilmeld/afvis fælles skydninger.
// Firestore-primær (ingen localStorage) — meetups er delt data mellem brugere,
// ikke lokal reference som venner/runder (samme tankegang som courses.js).
// Registrerer window.openMeetupModal/toggleMeetupPool/toggleSelectAllMeetup/
// saveMeetup/joinMeetup/declineMeetup/openProposeTimeModal/saveProposeTime/
// acceptProposedTime/cancelMeetup som HTML-handlere ved import.
// fetchMeetups/renderMeetupsList/getUnseenMeetupCount/markMeetupsSeen/
// updateMeetupBadge eksporteres — kaldes fra app-init.js (login-flow, switchTab).

import { state } from './state.js'
import { esc, showToast, showConfirm } from './utils.js'
import { db, collection, doc, addDoc, updateDoc, getDocs, query, where, serverTimestamp } from './firebase-init.js'

const SEEN_KEY = 'archery_meetups_seen'
const STATUS_LABELS = { afventer:'Afventer', tilmeldt:'Tilmeldt ✅', 'foreslået':'Foreslår andet tidspunkt 🕓', afvist:'Afbud ❌' }

// Datoer gemmes/sammenlignes som ISO (yyyy-mm-dd, fra <input type="date">) — kun til visning omskrives til dansk format (dd-mm-yyyy).
function formatDate(iso){
  if(!iso)return ''
  const [y,m,d]=iso.split('-')
  return y&&m&&d?`${d}-${m}-${y}`:iso
}

let _selectedInvitees = new Map() // uid -> {uid,name} — fladt sæt, fælles for begge pools
let _pool = 'venner'
let _allUsersCache = null
let _proposeMeetupId = null
let _selectedCourseId = null

// ─── HENT ───────────────────────────────────────────────────────────────────
// Firestore har ikke OR — to simple queries merges client-side (creator ELLER inviteret).
export async function fetchMeetups(){
  if(!state.user)return
  try{
    const queries=[
      getDocs(query(collection(db,'meetups'),where('creatorUid','==',state.user.uid))),
      getDocs(query(collection(db,'meetups'),where('invitedUids','array-contains',state.user.uid)))
    ]
    // Super-admin ser alle aftaler (jf. firestore.rules) — også dem hun/han hverken
    // har oprettet eller er inviteret til, markeret separat i renderMeetupCard.
    if(state.isSuperAdmin)queries.push(getDocs(collection(db,'meetups')))
    const results=await Promise.all(queries)
    const map=new Map()
    results.forEach(snap=>snap.docs.forEach(d=>map.set(d.id,{id:d.id,...d.data()})))
    state.meetups=[...map.values()].sort((a,b)=>`${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
  }catch(e){console.warn('Hent meetups:',e)}
}

// ─── BADGE (uset-tæller på Venner-fanens ikon) ─────────────────────────────
export function getUnseenMeetupCount(meetups,lastSeenAt){
  return meetups.filter(m=>{
    const t=m.updatedAt?.toMillis?.()??(typeof m.updatedAt==='number'?m.updatedAt:0)
    return t>lastSeenAt
  }).length
}

export function updateMeetupBadge(){
  const el=document.getElementById('meetup-badge');if(!el)return
  const lastSeen=Number(localStorage.getItem(SEEN_KEY)||0)
  const n=getUnseenMeetupCount(state.meetups,lastSeen)
  el.classList.toggle('hidden',n===0)
  el.textContent=n
}

export function markMeetupsSeen(){
  localStorage.setItem(SEEN_KEY,String(Date.now()))
  updateMeetupBadge()
}

// ─── LISTEVISNING ───────────────────────────────────────────────────────────
// Alle aftaler (aflyste og gennemførte) forsvinder fra listen, når den planlagte
// dato er passeret (permanent sletning i Firestore sker separat via TTL-policy).
export function renderMeetupsList(){
  const el=document.getElementById('meetups-list');if(!el)return
  const today=new Date().toISOString().slice(0,10)
  const visible=state.meetups.filter(m=>m.date>=today)
  if(!visible.length){el.innerHTML='<div class="empty"><div class="empty-icon">🏹</div>Ingen planlagte skydninger endnu</div>';return}
  el.innerHTML=''
  visible.forEach(m=>el.appendChild(renderMeetupCard(m)))
}

function renderMeetupCard(m){
  const card=document.createElement('div')
  card.className='meetup-card'+(m.status==='aflyst'?' meetup-cancelled':'')
  const isCreator=m.creatorUid===state.user?.uid
  const me=(m.participants||[]).find(p=>p.uid===state.user?.uid)
  const notMine=state.isSuperAdmin&&!isCreator&&!me

  const partRows=(m.participants||[]).map(p=>{
    const proposed=p.status==='foreslået'&&p.proposedDate?` → ${esc(formatDate(p.proposedDate))} ${esc(p.proposedTime||'')}`:''
    return `<div class="meetup-partrow"><span>${esc(p.name)}</span><span class="meetup-status meetup-status-${esc(p.status)}">${esc(STATUS_LABELS[p.status]||p.status)}${proposed}</span></div>`
  }).join('')

  const commentRows=(m.comments||[]).map(c=>`<div class="meetup-comment"><b>${esc(c.name)}:</b> ${esc(c.text)}</div>`).join('')

  let actions=''
  if(m.status!=='aflyst'){
    if(me){
      if(me.status!=='tilmeldt')actions+=`<button class="btn btn-gold btn-sm" onclick="joinMeetup('${m.id}')">Tilmeld</button>`
      actions+=`<button class="btn btn-dark btn-sm" onclick="openProposeTimeModal('${m.id}')">Foreslå andet tidspunkt</button>`
      if(me.status!=='afvist')actions+=`<button class="btn btn-dark btn-sm" onclick="declineMeetup('${m.id}')">Afbud</button>`
    }
    if(isCreator){
      ;(m.participants||[]).filter(p=>p.status==='foreslået'&&p.proposedDate).forEach(p=>{
        actions+=`<button class="btn btn-gold btn-sm" onclick="acceptProposedTime('${m.id}','${p.uid}')">Accepter ${esc(formatDate(p.proposedDate))} ${esc(p.proposedTime||'')} (${esc(p.name)})</button>`
      })
      actions+=`<button class="btn btn-dark btn-sm" onclick="cancelMeetup('${m.id}')">Aflys</button>`
    }
  }

  card.innerHTML=`
    ${m.status==='aflyst'?'<div class="meetup-cancelled-banner">❌ Aflyst</div>':''}
    ${notMine?'<div class="meetup-notinvited-banner">👁 Du er ikke inviteret — vises kun for superadmin</div>':''}
    <div class="meetup-head">
      <div class="meetup-title">${esc(m.courseName)}</div>
      <div class="meetup-when">${esc(formatDate(m.date))} kl. ${esc(m.time)}</div>
      <div class="meetup-creator">Oprettet af ${esc(m.creatorName)}</div>
    </div>
    <div class="meetup-participants">${partRows}</div>
    <div class="meetup-actions">${actions}</div>
    <div class="meetup-comments">${commentRows}</div>
    <div class="meetup-comment-add">
      <input type="text" placeholder="Skriv en kommentar…" class="meetup-comment-input" maxlength="300" />
      <button class="btn btn-dark btn-sm meetup-comment-send">Send</button>
    </div>
  `
  const input=card.querySelector('.meetup-comment-input')
  card.querySelector('.meetup-comment-send').addEventListener('click',()=>{
    postMeetupComment(m.id,input.value)
    input.value=''
  })
  return card
}

// ─── OPRET-MODAL: bane/dato/tid ────────────────────────────────────────────
window.openMeetupModal=function(){
  if(!state.courses.length){showToast('Ingen baner tilgængelige','error');return}
  _selectedInvitees=new Map()
  _pool='venner'
  _allUsersCache=null
  _selectedCourseId=null
  document.getElementById('mu-course-display').value=''
  document.getElementById('mu-course-list').classList.add('hidden')
  renderCourseList()
  document.getElementById('mu-date').value=''
  document.getElementById('mu-time').value=''
  document.querySelectorAll('.mu-pool-tab').forEach(b=>b.classList.toggle('active',b.dataset.pool==='venner'))
  renderInviteePool()
  renderSelectedChips()
  document.getElementById('meetup-modal').classList.remove('hidden')
}

// Bane-vælger: samme autocomplete-liste-mønster som søgning i friends.js
// (klik på en linje vælger og lukker listen automatisk — ingen "Udført"-knap
// som ved en native <select> på iOS).
window.toggleMeetupCourseList=function(){
  document.getElementById('mu-course-list').classList.toggle('hidden')
}

function renderCourseList(){
  const list=document.getElementById('mu-course-list')
  list.innerHTML=''
  state.courses.forEach(c=>{
    const item=document.createElement('div');item.className='ac-item';item.textContent=c.name||c.yam||''
    item.addEventListener('click',()=>{
      _selectedCourseId=c.id
      document.getElementById('mu-course-display').value=c.name||c.yam||''
      list.classList.add('hidden')
    })
    list.appendChild(item)
  })
}

window.toggleMeetupPool=function(pool){
  _pool=pool
  document.querySelectorAll('.mu-pool-tab').forEach(b=>b.classList.toggle('active',b.dataset.pool===pool))
  renderInviteePool()
}

// Henter listen for den aktuelt viste pool ('venner' eller 'alle registrerede').
async function getPoolPeople(){
  if(_pool==='venner')return state.friends.map(f=>({uid:f.id,name:f.name}))
  if(!_allUsersCache){
    try{
      const snap=await getDocs(collection(db,'users'))
      _allUsersCache=snap.docs.map(d=>({uid:d.id,name:d.data().name||d.data().yam||d.data().email||'—'}))
    }catch(e){console.warn(e);_allUsersCache=[]}
  }
  return _allUsersCache.filter(u=>u.uid!==state.user?.uid)
}

async function renderInviteePool(){
  const el=document.getElementById('mu-invitee-list');if(!el)return
  const people=await getPoolPeople()
  el.innerHTML=''
  if(!people.length){
    el.innerHTML=`<div class="empty"><div class="empty-icon">👤</div>${_pool==='venner'?'Du har ingen venner endnu':'Ingen andre registrerede brugere'}</div>`
    return
  }
  people.forEach(p=>{
    const row=document.createElement('label');row.className='mu-invitee-row'
    const cb=document.createElement('input');cb.type='checkbox';cb.checked=_selectedInvitees.has(p.uid)
    cb.addEventListener('change',()=>toggleInviteeMeetup(p.uid,p.name))
    const span=document.createElement('span');span.textContent=p.name
    row.appendChild(cb);row.appendChild(span)
    el.appendChild(row)
  })
}

function toggleInviteeMeetup(uid,name){
  if(_selectedInvitees.has(uid))_selectedInvitees.delete(uid)
  else _selectedInvitees.set(uid,{uid,name})
  renderSelectedChips()
  renderInviteePool()
}

// "Vælg alle" virker kun på den aktuelt viste pool — trykkes igen når alle er
// valgt, fravælges kun den poolens folk (de andre pools valg røres ikke).
window.toggleSelectAllMeetup=async function(){
  const people=await getPoolPeople()
  if(!people.length)return
  const allSelected=people.every(p=>_selectedInvitees.has(p.uid))
  if(allSelected)people.forEach(p=>_selectedInvitees.delete(p.uid))
  else people.forEach(p=>_selectedInvitees.set(p.uid,p))
  renderSelectedChips()
  renderInviteePool()
}

function renderSelectedChips(){
  const el=document.getElementById('mu-selected-chips');if(!el)return
  el.innerHTML=''
  if(!_selectedInvitees.size){el.innerHTML='<div class="mu-chips-empty">Ingen modtagere valgt endnu</div>';return}
  ;[..._selectedInvitees.values()].forEach(p=>{
    const chip=document.createElement('div');chip.className='pchip'
    const name=document.createElement('span');name.className='pchip-name';name.textContent=p.name
    const rm=document.createElement('button');rm.className='pchip-rm';rm.textContent='✕'
    rm.addEventListener('click',()=>toggleInviteeMeetup(p.uid,p.name))
    chip.appendChild(name);chip.appendChild(rm)
    el.appendChild(chip)
  })
}

window.saveMeetup=async function(){
  const course=state.courses.find(c=>c.id===_selectedCourseId)
  const date=document.getElementById('mu-date').value
  const time=document.getElementById('mu-time').value
  if(!course){showToast('Vælg en bane','error');return}
  if(!date||!time){showToast('Vælg dato og tid','error');return}
  if(!_selectedInvitees.size){showToast('Vælg mindst én modtager','error');return}
  const invitedUids=[..._selectedInvitees.keys()]
  const participants=[..._selectedInvitees.values()].map(p=>({uid:p.uid,name:p.name,status:'afventer',proposedDate:null,proposedTime:null}))
  const expireAt=new Date(`${date}T${time}`)
  expireAt.setDate(expireAt.getDate()+1)
  const data={
    courseId:course.id, courseName:course.name||course.yam||'',
    date, time,
    creatorUid:state.user.uid, creatorName:state.profile?.name||'—',
    pool:_pool, invitedUids, participants, comments:[],
    status:'åben', createdAt:serverTimestamp(), updatedAt:serverTimestamp(), expireAt
  }
  try{
    await addDoc(collection(db,'meetups'),data)
    document.getElementById('meetup-modal').classList.add('hidden')
    showToast('Forslag sendt','success')
    await fetchMeetups();renderMeetupsList();updateMeetupBadge()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

// ─── DELTAGER-HANDLINGER (læs-modificér-skriv hele arrayet, ét updateDoc) ──
async function setParticipantStatus(meetupId,status){
  const m=state.meetups.find(x=>x.id===meetupId);if(!m||!state.user)return
  const participants=(m.participants||[]).map(p=>p.uid===state.user.uid?{...p,status,proposedDate:null,proposedTime:null}:p)
  try{
    await updateDoc(doc(db,'meetups',m.id),{participants,updatedAt:serverTimestamp()})
    m.participants=participants;m.updatedAt=Date.now()
    renderMeetupsList()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

// Afbud er ikke endeligt — join virker uanset nuværende status (også fra 'afvist').
window.joinMeetup=function(meetupId){setParticipantStatus(meetupId,'tilmeldt')}
window.declineMeetup=function(meetupId){setParticipantStatus(meetupId,'afvist')}

window.openProposeTimeModal=function(meetupId){
  _proposeMeetupId=meetupId
  document.getElementById('mu-propose-date').value=''
  document.getElementById('mu-propose-time').value=''
  document.getElementById('meetup-propose-modal').classList.remove('hidden')
}

window.saveProposeTime=async function(){
  const date=document.getElementById('mu-propose-date').value
  const time=document.getElementById('mu-propose-time').value
  if(!date||!time){showToast('Vælg dato og tid','error');return}
  const m=state.meetups.find(x=>x.id===_proposeMeetupId);if(!m||!state.user)return
  const participants=(m.participants||[]).map(p=>p.uid===state.user.uid?{...p,status:'foreslået',proposedDate:date,proposedTime:time}:p)
  try{
    await updateDoc(doc(db,'meetups',m.id),{participants,updatedAt:serverTimestamp()})
    m.participants=participants;m.updatedAt=Date.now()
    document.getElementById('meetup-propose-modal').classList.add('hidden')
    renderMeetupsList()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

// Kun opretter: accepterer et foreslået tidspunkt, nulstiller alle ANDRE
// deltageres status til 'afventer' så de skal bekræfte det nye tidspunkt igen.
window.acceptProposedTime=async function(meetupId,uid){
  const m=state.meetups.find(x=>x.id===meetupId);if(!m||m.creatorUid!==state.user?.uid)return
  const proposer=(m.participants||[]).find(p=>p.uid===uid)
  if(!proposer?.proposedDate||!proposer?.proposedTime)return
  const newDate=proposer.proposedDate,newTime=proposer.proposedTime
  const participants=m.participants.map(p=>p.uid===uid
    ?{...p,status:'tilmeldt',proposedDate:null,proposedTime:null}
    :{...p,status:'afventer',proposedDate:null,proposedTime:null})
  try{
    await updateDoc(doc(db,'meetups',m.id),{date:newDate,time:newTime,participants,updatedAt:serverTimestamp()})
    m.date=newDate;m.time=newTime;m.participants=participants;m.updatedAt=Date.now()
    renderMeetupsList()
    showToast('Nyt tidspunkt accepteret','success')
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

window.cancelMeetup=function(meetupId){
  const m=state.meetups.find(x=>x.id===meetupId);if(!m||m.creatorUid!==state.user?.uid)return
  showConfirm('Aflys denne skydning?',async()=>{
    try{
      await updateDoc(doc(db,'meetups',m.id),{status:'aflyst',updatedAt:serverTimestamp()})
      m.status='aflyst';m.updatedAt=Date.now()
      renderMeetupsList()
    }catch(e){showToast('Fejl: '+e.message,'error')}
  })
}

async function postMeetupComment(meetupId,text){
  text=(text||'').trim().slice(0,300)
  if(!text||!state.user)return
  const m=state.meetups.find(x=>x.id===meetupId);if(!m)return
  const comment={uid:state.user.uid,name:state.profile?.name||'—',text,createdAt:new Date()}
  const comments=[...(m.comments||[]),comment]
  try{
    await updateDoc(doc(db,'meetups',m.id),{comments,updatedAt:serverTimestamp()})
    m.comments=comments;m.updatedAt=Date.now()
    renderMeetupsList()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}
