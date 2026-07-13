// js/main.js — Indgangspunkt

import { auth, db, storage, onAuthStateChanged,
         signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, signOut,
         collection, doc, setDoc, getDoc, getDocs, deleteDoc,
         updateDoc, addDoc, serverTimestamp, query, where,
         ref, uploadString, getDownloadURL, deleteObject } from './firebase-init.js'
import { state } from './state.js'
import { esc, showToast, showConfirm } from './utils.js'

// Re-eksporterer esc så den eksisterende testsuite (import fra main.js) stadig virker.
export { esc }


// ─── LOCAL STORAGE ────────────────────────────────────────────────────────────
import { lsLoad, lsSave } from './storage.js'

// ─── SCORING HELPERS ──────────────────────────────────────────────────────────
// Ren scoringslogik ligger i ./scoring.js. Re-eksporteres her så testsuiten
// (import fra main.js) fortsat virker.
import { SCORE_VALUES, scoreVal, parseScores, serializeScores, calcTotal,
         calcAverage, calcTargetAverage, calcDistribution, findWinner,
         isBelowThreshold, makeShooter, normalizeScores, countScored,
         serializeRound, deserializeRound, buildOrder } from './scoring.js'
export { scoreVal, parseScores, serializeScores, calcTotal, calcAverage,
         calcTargetAverage, calcDistribution, findWinner, isBelowThreshold,
         makeShooter, normalizeScores, countScored, serializeRound,
         deserializeRound, buildOrder }

// ─── GPS ──────────────────────────────────────────────────────────────────────
// GPS-logik ligger i ./gps.js. De rene/test-dækkede funktioner re-eksporteres
// herfra så testsuiten (import fra main.js) fortsat virker.
import { parseRoute, haversine, formatDuration, formatDistance, findNearestTarget,
         startTracking, stopTracking, getCurrentPosition, toggleGpsPause } from './gps.js'
export { parseRoute, haversine, formatDuration, formatDistance, findNearestTarget }

window.toggleGpsPause = toggleGpsPause

// ─── STATE ────────────────────────────────────────────────────────────────────
// state importeres fra ./state.js (delt singleton).

let wakeLock=null
async function acquireWakeLock(){try{if('wakeLock' in navigator)wakeLock=await navigator.wakeLock.request('screen')}catch(e){}}
function releaseWakeLock(){if(wakeLock){wakeLock.release();wakeLock=null}}

// ─── AUTH HELPERS ─────────────────────────────────────────────────────────────
const AUTH_ERRORS = {
  'auth/user-not-found':       'Bruger ikke fundet.',
  'auth/wrong-password':       'Forkert kodeord.',
  'auth/invalid-credential':   'Ugyldig email eller kodeord.',
  'auth/email-already-in-use': 'Email er allerede i brug.',
  'auth/weak-password':        'Kodeordet er for svagt (min. 6 tegn).',
  'auth/invalid-email':        'Ugyldig email-adresse.',
  'auth/too-many-requests':    'For mange forsøg. Prøv igen senere.',
  'auth/network-request-failed': 'Netværksfejl. Tjek din forbindelse.',
}
function authErrMsg(code){ return AUTH_ERRORS[code] || 'Der opstod en fejl. Prøv igen.' }

function showAuthErr(msg,type='error'){
  const el=document.getElementById('auth-err')
  el.textContent=msg; el.style.color=type==='ok'?'var(--success)':''; el.classList.remove('hidden')
}

window.showAuthTab = function(tab){
  document.querySelectorAll('.auth-tab').forEach((t,i)=>t.classList.toggle('active',(i===0)===(tab==='login')))
  document.getElementById('login-form').classList.toggle('hidden',tab!=='login')
  document.getElementById('signup-form').classList.toggle('hidden',tab!=='signup')
  document.getElementById('auth-err').classList.add('hidden')
}

window.doLogin = async function(){
  const email=document.getElementById('login-email').value.trim()
  const pw=document.getElementById('login-password').value
  if(!email||!pw){showAuthErr('Udfyld alle felter.');return}
  const btn=document.querySelector('#login-form .btn')
  btn.disabled=true; btn.textContent='...'
  try{ await signInWithEmailAndPassword(auth,email,pw) }
  catch(err){ showAuthErr(authErrMsg(err.code)) }
  finally{ btn.disabled=false; btn.textContent='LOG IND' }
}

window.doSignup = async function(){
  const name=document.getElementById('signup-name').value.trim()
  const email=document.getElementById('signup-email').value.trim()
  const pw=document.getElementById('signup-password').value
  const kon=document.getElementById('signup-kon').value
  const bueklasse=document.getElementById('signup-bueklasse').value
  if(!name||!email||!pw||!kon||!bueklasse){showAuthErr('Udfyld alle felter.');return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showAuthErr('Ugyldig email-adresse.');return}
  if(pw.length<6){showAuthErr('Adgangskoden skal være mindst 6 tegn.');return}
  const btn=document.querySelector('#signup-form .btn')
  btn.disabled=true; btn.textContent='...'
  try{
    const cred=await createUserWithEmailAndPassword(auth,email,pw)
    await setDoc(doc(db,'users',cred.user.uid),{name,email,yam:name,'e-mail':email,kon,bueklasse,created:serverTimestamp()})
  }catch(err){showAuthErr(authErrMsg(err.code))}
  finally{btn.disabled=false;btn.textContent='OPRET KONTO'}
}

window.doForgot = async function(){
  const email=document.getElementById('login-email').value.trim()
  if(!email){showAuthErr('Indtast din email først.');return}
  try{await sendPasswordResetEmail(auth,email);showAuthErr('Nulstillingsmail sendt!','ok')}
  catch(err){showAuthErr(authErrMsg(err.code))}
}

window.doLogout = async function(){
  try{await signOut(auth)}catch(e){}
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', ()=>{
  // Init warn slider
  const warnEl=document.getElementById('warn-enabled-sw')
  if(warnEl){
    const sv=localStorage.getItem('warnEnabled')
    state.warnEnabled=sv===null?true:sv==='true'
    warnEl.classList.toggle('on',state.warnEnabled)
    warnEl.addEventListener('click',()=>{
      state.warnEnabled=!state.warnEnabled
      warnEl.classList.toggle('on',state.warnEnabled)
      localStorage.setItem('warnEnabled',state.warnEnabled)
    })
  }

  onAuthStateChanged(auth, async user=>{
    if(user){
      state.user=user
      // Prøv at hente profil — retry hvis offline ved opstart
      let profileSnap, adminSnap
      // Sørg for Firestore netværk er aktivt
      for(let attempt=0; attempt<3; attempt++){
        try{
          ;[profileSnap, adminSnap] = await Promise.all([
            getDoc(doc(db,'users',user.uid)),
            getDoc(doc(db,'admins',user.uid))
          ])
          break
        }catch(e){
          console.error('Profil fejl attempt', attempt, e.code, e.message)
          if(attempt<2) await new Promise(r=>setTimeout(r,2000*(attempt+1)))
          else{ state.profile={name:user.email,email:user.email}; state.isAdmin=false }
        }
      }
      if(profileSnap?.exists()){const d=profileSnap.data();state.profile={name:d.name||d.yam||user.email,email:d.email||d['e-mail']||user.email,kon:d.kon||null,bueklasse:d.bueklasse||null}}
      else if(!state.profile) state.profile={name:user.email,email:user.email}
      state.isAdmin=adminSnap?.exists()||false
      state.isSuperAdmin=state.isAdmin&&user.email==='bsklausen@proton.me'
      onLogin()
    } else {
      onLogout()
    }
  })

  // PWA
  let deferredPrompt=null
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault();deferredPrompt=e
    document.getElementById('pwa-banner').style.display='flex'
  })
  document.getElementById('pwa-install-btn')?.addEventListener('click',async()=>{
    if(!deferredPrompt)return
    deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null
    document.getElementById('pwa-banner').style.display='none'
  })
  document.getElementById('pwa-dismiss-btn')?.addEventListener('click',()=>{
    document.getElementById('pwa-banner').style.display='none'
  })

  updateStartTargetDropdown(24)
  document.getElementById('target-count').addEventListener('change',e=>{
    const v=e.target.value,cIn=document.getElementById('target-count-custom')
    cIn.style.display=v==='custom'?'':'none'
    if(v!=='custom')updateStartTargetDropdown(Number(v))
  })
  document.getElementById('target-count-custom').addEventListener('input',e=>{
    const n=Number(e.target.value);if(n>0)updateStartTargetDropdown(n)
  })

  document.getElementById('photo-input')?.addEventListener('change',async e=>{
    const file=e.target.files[0];if(!file)return
    try{
      const b64=await compressImage(file)
      const tIdx=curTargetIdx()
      const imgRef=ref(storage,`courses/${state.round.courseId}/target_${tIdx}.jpg`)
      await uploadString(imgRef,b64,'base64',{contentType:'image/jpeg'})
      const url=await getDownloadURL(imgRef)
      await updateTargetInFirestore(state.round.courseId,tIdx,{imageUrl:url})
      if(state.course?.targets)state.course.targets[tIdx].imageUrl=url
      updateTopBar()
    }catch(e){showToast('Upload fejl: '+e.message,'error')}
  })

  document.querySelectorAll('.modal').forEach(m=>{
    m.addEventListener('click',e=>{if(e.target===m)m.classList.add('hidden')})
  })
})

// ─── PROFIL MODAL ─────────────────────────────────────────────────────────────
window.saveProfilModal=async function(){
  const kon=document.getElementById('profil-kon').value
  const bueklasse=document.getElementById('profil-bueklasse').value
  const errEl=document.getElementById('profil-err')
  if(!kon||!bueklasse){errEl.textContent='Vælg både køn og bueklasse.';errEl.classList.remove('hidden');return}
  errEl.classList.add('hidden')
  try{
    await updateDoc(doc(db,'users',state.user.uid),{kon,bueklasse})
    state.profile.kon=kon;state.profile.bueklasse=bueklasse
    document.getElementById('profil-modal').classList.add('hidden')
  }catch(e){errEl.textContent='Fejl ved gem. Prøv igen.';errEl.classList.remove('hidden')}
}

function initGraphPinch(svgEl){
  let scale=1,ox=0,oy=0
  let initDist=0,initScale=1,initOx=0,initOy=0,pinchCx=0,pinchCy=0
  let panStartX=0,panStartY=0,panStartOx=0,panStartOy=0
  const apply=()=>{
    svgEl.style.transformOrigin='0 0'
    svgEl.style.transform=scale>1?`translate(${ox}px,${oy}px) scale(${scale})`:''
  }
  svgEl.addEventListener('touchstart',e=>{
    e.preventDefault()
    if(e.touches.length===2){
      const t=e.touches,rect=svgEl.getBoundingClientRect()
      initDist=Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY)
      initScale=scale;initOx=ox;initOy=oy
      pinchCx=(t[0].clientX+t[1].clientX)/2-rect.left
      pinchCy=(t[0].clientY+t[1].clientY)/2-rect.top
    }else if(e.touches.length===1){
      panStartX=e.touches[0].clientX;panStartY=e.touches[0].clientY
      panStartOx=ox;panStartOy=oy
    }
  },{passive:false})
  svgEl.addEventListener('touchmove',e=>{
    e.preventDefault()
    if(e.touches.length===2){
      const t=e.touches,dist=Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY)
      const newScale=Math.min(8,Math.max(1,initScale*dist/initDist))
      const elemX=(pinchCx-initOx)/initScale,elemY=(pinchCy-initOy)/initScale
      ox=pinchCx-elemX*newScale;oy=pinchCy-elemY*newScale;scale=newScale;apply()
    }else if(e.touches.length===1&&scale>1){
      ox=panStartOx+e.touches[0].clientX-panStartX
      oy=panStartOy+e.touches[0].clientY-panStartY;apply()
    }
  },{passive:false})
  svgEl.addEventListener('touchend',()=>{if(scale<1.05){scale=1;ox=0;oy=0;apply()}},{passive:true})
  let lastTap=0
  svgEl.addEventListener('touchend',()=>{
    const now=Date.now();if(now-lastTap<300){scale=1;ox=0;oy=0;apply()};lastTap=now
  },{passive:true})
}

function analyseRound(id){
  state.pendingAnalyseRound=id
  document.getElementById('analyse-filter').value='specific'
  window.switchTab('analyse')
}

function tryOpenPendingRound(){
  if(!state.pendingRound)return
  const r=state.rounds.find(x=>x.id===state.pendingRound)
  if(!r)return
  state.pendingRound=null
  const shooters=(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
  setTimeout(()=>showRoundPopup({...r,shooters}),300)
}

// ─── LOGIN/LOGOUT ─────────────────────────────────────────────────────────────
function onLogin(){
  document.getElementById('hdr-name').textContent=state.profile.name
  document.getElementById('auth-screen').classList.remove('active')
  document.getElementById('app-screen').classList.add('active')

  // Prompt eksisterende brugere der mangler køn/bueklasse
  if(!state.profile.kon||!state.profile.bueklasse){
    setTimeout(()=>document.getElementById('profil-modal').classList.remove('hidden'),800)
  }

  // Admin badge — allerede hentet i Promise.all
  document.getElementById('admin-badge').classList.toggle('hidden',!state.isAdmin)
  document.querySelectorAll('.admin-only').forEach(el=>el.classList.toggle('hidden',!state.isAdmin))

  // Load lokale data øjeblikkeligt
  const local=lsLoad()
  state.friends=local.friends||[]
  state.rounds=local.rounds||[]
  getDocs(collection(db,'users',state.user.uid,'friends')).then(snap=>{
    if(!snap.docs.length)return
    const fsF=snap.docs.map(d=>({...d.data(),id:d.id}))
    const localIds=new Set(state.friends.map(f=>f.id))
    const newF=fsF.filter(f=>!localIds.has(f.id))
    if(newF.length){state.friends=[...state.friends,...newF];lsSave();renderFriendsList();renderQuickFriends()}
  }).catch(e=>console.warn('Hent venner:',e))
  renderFriendsList()
  renderQuickFriends()
  renderRoundsList()
  state.pendingRound=new URLSearchParams(window.location.search).get('round')||null
  if(state.pendingRound)tryOpenPendingRound()

  // Load baner fra localStorage øjeblikkeligt
  const localCourses = lsLoad().courses || []
  state.courses = localCourses
  renderCoursesList()
  populateCourseDropdown()
  autoSelectNearestCourse()

  // Hent runder fra Firestore
  getDocs(collection(db,'users',state.user.uid,'rounds')).then(snap=>{
    if(!snap.docs.length)return
    const fsRounds=snap.docs.map(d=>({...d.data(),id:d.id}))
    const localIds=new Set(state.rounds.map(r=>r.id))
    const newRounds=fsRounds.filter(r=>!localIds.has(r.id))
    if(newRounds.length){
      state.rounds=[...state.rounds,...newRounds].sort((a,b)=>{
        const ta=a.completed||a.created||0
        const tb=b.completed||b.created||0
        return (typeof tb==='number'?tb:tb.toMillis?.()??0)-(typeof ta==='number'?ta:ta.toMillis?.()??0)
      })
      lsSave(); renderRoundsList()
      if(state.pendingRound)tryOpenPendingRound()
    }
  }).catch(e=>console.warn('Hent runder:',e))

  // Hent baner fra Firestore
  fetchCourses()

  tryResumeRound()
}

function onLogout(){
  state.user=null;state.profile=null;state.round=null
  releaseWakeLock()
  document.getElementById('app-screen').classList.remove('active')
  document.getElementById('auth-screen').classList.add('active')
}

// ─── i18n ─────────────────────────────────────────────────────────────────────
window.toggleLang=function(){
  window.appLang=window.appLang==='da'?'en':'da'
  document.getElementById('lang-btn').textContent=window.appLang.toUpperCase()
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
window.switchTab=function(tab){
  document.querySelectorAll('.tab').forEach(el=>{el.classList.remove('active');el.classList.add('hidden')})
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'))
  const _t=document.getElementById(`tab-${tab}`);if(_t){_t.classList.add('active');_t.classList.remove('hidden')}
  document.querySelector(`.nav-btn[data-tab="${tab}"]`)?.classList.add('active')
  if(tab==='friends')renderAdminSection()
  if(tab==='analyse')window.renderAnalyse()
  if(tab==='courses'&&state.courseMap)setTimeout(()=>state.courseMap.invalidateSize(),100)
}

// ─── SETUP ────────────────────────────────────────────────────────────────────
function autoSelectNearestCourse(){
  if(!navigator.geolocation||!state.courses.length)return
  navigator.geolocation.getCurrentPosition(pos=>{
    const p={lat:pos.coords.latitude,lng:pos.coords.longitude}
    let minD=Infinity,best=null
    state.courses.forEach(c=>{
      (c.targets||[]).forEach(t=>{
        const tgps=t.gps||t.GPS
        if(!tgps||!tgps.lat)return
        const d=haversine(p,tgps)
        if(d<minD){minD=d;best=c.id}
      })
    })
    if(best&&minD<500){const sel=document.getElementById('course-sel');sel.value=best;sel.dispatchEvent(new Event('change'))}
  },()=>{},{enableHighAccuracy:true,timeout:5000})
}

function populateCourseDropdown(){
  const sel=document.getElementById('course-sel')
  const cur=sel.value
  sel.innerHTML='<option value="">-- Ingen bane --</option>'
  state.courses.forEach(c=>{
    const o=document.createElement('option');o.value=c.id;o.textContent=`${c.name} (${c.numTargets} mål)`;sel.appendChild(o)
  })
  if(cur)sel.value=cur
  sel.onchange=()=>{
    const c=state.courses.find(x=>x.id===sel.value)
    const tc=document.getElementById('target-count')
    const tcc=document.getElementById('target-count-custom')
    if(c){
      const hasOpt=!!tc.querySelector(`option[value="${c.numTargets}"]`)
      if(hasOpt){tc.value=String(c.numTargets);tcc.style.display='none'}
      else{tc.value='custom';tcc.value=c.numTargets;tcc.style.display=''}
      tc.disabled=true;tcc.disabled=true
    }else{tc.disabled=false;tcc.disabled=false;if(tc.value!=='custom')tcc.style.display='none'}
    updateStartTargetDropdown(c?c.numTargets:(tc.value==='custom'?Number(tcc.value):Number(tc.value)))
  }
}

function updateStartTargetDropdown(n){
  const sel=document.getElementById('start-target');sel.innerHTML=''
  for(let i=1;i<=n;i++){const o=document.createElement('option');o.value=i;o.textContent=i;sel.appendChild(o)}
}

window.addParticipant=function(id,name){
  if(document.getElementById(`chip-${id}`))return
  const div=document.createElement('div');div.className='pchip';div.id=`chip-${id}`
  div.innerHTML=`<span class="pchip-name">🎯 ${esc(name)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`
  document.getElementById('p-list').appendChild(div)
}

function getParticipants(){
  return Array.from(document.querySelectorAll('.pchip')).map(c=>({
    id:c.id.replace('chip-',''),
    name:c.querySelector('.pchip-name').textContent.replace('🎯 ','').trim(),
    isGuest:c.id.startsWith('chip-guest-')
  }))
}

function renderQuickFriends(){
  const el=document.getElementById('qfriends');el.innerHTML=''
  state.friends.forEach(f=>{
    const btn=document.createElement('button');btn.className='qfbtn';btn.textContent=f.name
    btn.onclick=()=>window.addParticipant(f.id,f.name);el.appendChild(btn)
  })
}

window.searchFriends=async function(val){
  const list=document.getElementById('ac-list')
  if(!val.trim()){list.classList.add('hidden');return}
  const local=state.friends.filter(f=>f.name.toLowerCase().includes(val.toLowerCase()))
  let remote=[]
  try{
    const snap=await getDocs(collection(db,'users'))
    remote=snap.docs.map(d=>({id:d.id,...d.data()}))
      .filter(u=>(u.name||u.yam||'').toLowerCase().includes(val.toLowerCase())&&u.id!==state.user?.uid&&!local.find(l=>l.id===u.id))
      .map(u=>({id:u.id,name:u.name||u.yam||u.email||'—',email:u.email||u['e-mail']||''}))
  }catch(e){console.warn(e)}
  const all=[...local,...remote]
  if(!all.length){list.classList.add('hidden');return}
  list.innerHTML=all.map(f=>`<div class="ac-item" data-id="${esc(f.id)}" data-name="${esc(f.name||'')}" data-email="${esc(f.email||'')}">${esc(f.name)}${f.email?` <span style='font-size:11px;opacity:.6'>${esc(f.email)}</span>`:''}</div>`).join('')
  list.querySelectorAll('.ac-item').forEach(el=>el.addEventListener('click',()=>{
    selectFriend(el.dataset.id,el.dataset.name,el.dataset.email)
    document.getElementById('friend-search').value=''
    document.getElementById('ac-list').classList.add('hidden')
  }))
  list.classList.remove('hidden')
}

window.selectFriend=function(id,name,email){
  if(!state.friends.find(f=>f.id===id)){state.friends.push({id,name,email});lsSave();renderFriendsList();renderQuickFriends()}
  window.addParticipant(id,name)
}

// ─── START ROUND ──────────────────────────────────────────────────────────────
window.startRound=async function(){
  const name=(document.getElementById('round-name').value.trim()||'Min Skydning').slice(0,80)
  const courseId=document.getElementById('course-sel').value
  const _tc=document.getElementById('target-count')
  const numTargets=(_tc.value==='custom'?Number(document.getElementById('target-count-custom').value):Number(_tc.value))||24
  const startAt=Number(document.getElementById('start-target').value)-1
  const gpsAuto=document.getElementById('gps-auto-sw').classList.contains('on')
  const gpsTrack=document.getElementById('gps-track-sw').classList.contains('on')
  state.warnThreshold=Number(document.getElementById('warn-thresh').value)||8

  const parts=[{id:state.user.uid,name:state.profile.name,isGuest:false},...getParticipants().filter(p=>p.id!==state.user.uid)]
  state.course=courseId?(state.courses.find(c=>c.id===courseId)||null):null

  const shooters=parts.map(p=>{const s=makeShooter(p.id,p.name,p.isGuest);normalizeScores(s,numTargets);return s})
  let startIdx=startAt
  if(gpsAuto&&state.course?.targets){try{startIdx=findNearestTarget(state.course.targets,await getCurrentPosition())}catch(e){}}

  state.round={id:'r_'+Date.now(),name,courseId:courseId||null,courseName:state.course?.name||null,numTargets,startTarget:startIdx+1,
    shooters,created:Date.now(),traversalOrder:buildOrder(startIdx,numTargets),traversalPos:0}

  if(gpsTrack){
    state.gpsTracking=startTracking(updateGpsBar)
    document.getElementById('gps-bar').classList.toggle('hidden',!state.gpsTracking)
    acquireWakeLock()
  }

  showActivePanel();renderShooters();updateTopBar();resetScroll()
  saveActiveRound()
}

function curTargetIdx(){return state.round.traversalOrder[state.round.traversalPos]}

// ─── PANELS ───────────────────────────────────────────────────────────────────
window.showSetupPanel=function showSetupPanel(){document.getElementById('setup-panel').classList.remove('hidden');document.getElementById('active-panel').classList.add('hidden');document.getElementById('results-panel').classList.add('hidden')}
window.showActivePanel=function showActivePanel(){document.getElementById('setup-panel').classList.add('hidden');document.getElementById('active-panel').classList.remove('hidden');document.getElementById('results-panel').classList.add('hidden')}
window.showResultsPanel=function showResultsPanel(){document.getElementById('setup-panel').classList.add('hidden');document.getElementById('active-panel').classList.add('hidden');document.getElementById('results-panel').classList.remove('hidden')}

// ─── SHOOTING ─────────────────────────────────────────────────────────────────
function updateTopBar(){
  if(!state.round)return
  const tIdx=curTargetIdx(),n=state.round.numTargets
  document.getElementById('tnum-big').textContent=tIdx+1
  document.getElementById('tnum-suf').textContent=' af '+n
  document.getElementById('round-badge').textContent=state.round.name
  const target=state.course?.targets?.[tIdx]
  document.getElementById('anim-name').textContent=target?.name||`Mål ${tIdx+1}`
  const scored=countScored(state.round.shooters,n)
  document.getElementById('pbar').style.width=`${(scored/n)*100}%`
  const allVals=state.round.shooters.flatMap(s=>s.scores.flat().filter(v=>v!=null))
  const sum=allVals.reduce((a,v)=>a+scoreVal(v),0)
  document.getElementById('stat-avg').textContent=allVals.length?(sum/allVals.length).toFixed(1):'—'
  document.getElementById('stat-tot').textContent=sum
  document.getElementById('stat-rem').textContent=n-scored
  const imgEl=document.getElementById('anim-img')
  if(target?.imageUrl||target?.photo){
    imgEl.classList.add('hidden')
    imgEl.onload=()=>imgEl.classList.remove('hidden')
    imgEl.onerror=()=>imgEl.classList.add('hidden')
    imgEl.src=target.imageUrl||target.photo
  }else{imgEl.src='';imgEl.classList.add('hidden')}
  document.getElementById('edit-target-btn').classList.toggle('hidden',!(state.isAdmin&&state.round.courseId))
  document.getElementById('next-btn').textContent=state.round.traversalPos===n-1?'AFSLUT →':'NÆSTE →'
  const tAvg=calcTargetAverage(state.round.shooters,tIdx)
  document.getElementById('target-avg').textContent=tAvg!==null?`Gns. dette mål: ${tAvg}`:''
}

function renderShooters(){
  if(!state.round)return
  const tIdx=curTargetIdx(),el=document.getElementById('shooters-list');el.innerHTML=''
  state.round.shooters.forEach((s,si)=>{
    const total=calcTotal(s.scores),warn=isBelowThreshold(s.scores,state.warnThreshold),row=s.scores[tIdx]||[null,null]
    const card=document.createElement('div');card.className='shooter-card'
    const p1arr=s.scores.map(t=>t[0]).filter(v=>v!=null)
    const p2arr=s.scores.map(t=>t[1]).filter(v=>v!=null)
    const allArr=[...p1arr,...p2arr]
    const p1avg=p1arr.length?(p1arr.reduce((a,v)=>a+scoreVal(v),0)/p1arr.length).toFixed(2):'—'
    const p2avg=p2arr.length?(p2arr.reduce((a,v)=>a+scoreVal(v),0)/p2arr.length).toFixed(2):'—'
    const allAvg=allArr.length?(allArr.reduce((a,v)=>a+scoreVal(v),0)/allArr.length).toFixed(2):'—'
    card.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${warn?'<span class="warn-dot"></span>':''}
        <span class="sh-name">${s.name}</span>
        <div style="display:flex;gap:4px;">
          <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${total}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P1</div><div class="sh-mini-val" style="font-size:12px;">${p1avg}</div></div>
          <div class="sh-mini" style="border:1px solid var(--acc);"><div class="sh-mini-lbl">SNT</div><div class="sh-mini-val" style="font-size:12px;color:var(--acc);">${allAvg}</div></div>
          <div class="sh-mini"><div class="sh-mini-lbl">P2</div><div class="sh-mini-val" style="font-size:12px;">${p2avg}</div></div>
        </div>
      </div>
      <div class="arrows-row">${[0,1].map(ai=>`
        <div class="arrow-grp"><div class="arrow-lbl">🎯 PIL ${ai+1}</div>
          <div class="score-btns">${SCORE_VALUES.map(v=>`
            <button class="sbtn ${row[ai]===v?`sel-${v}`:''}" data-v="${v}"
              onclick="setScore(${si},${tIdx},${ai},'${v}')">${v}</button>`).join('')}
          </div></div>`).join('')}
      </div>`
    el.appendChild(card)
  })
}

window.setScore=function(si,ti,ai,val){
  const v=val==='M'?'M':Number(val)
  state.round.shooters[si].scores[ti][ai]=v
  saveActiveRound();renderShooters();updateTopBar()
}

function updateGpsBar({lat,lng,distance,elapsed}){
  document.getElementById('gps-time').textContent=formatDuration(elapsed)
  document.getElementById('gps-dist').textContent=formatDistance(distance)
  if(lat&&lng)document.getElementById('gps-coord').textContent=`${lat.toFixed(5)}, ${lng.toFixed(5)}`
}

async function saveActiveRound(){
  if(!state.round||!state.user)return
  try{await setDoc(doc(db,'users',state.user.uid,'active','round'),serializeRound(state.round))}catch(e){console.warn(e)}
}

// ─── RESUME ───────────────────────────────────────────────────────────────────
async function tryResumeRound(){
  try{
    const snap=await getDoc(doc(db,'users',state.user.uid,'active','round'))
    if(!snap.exists())return
    const data=snap.data()
    if(data.id&&state.rounds.some(r=>r.id===data.id)){await deleteDoc(doc(db,'users',state.user.uid,'active','round'));return}
    const age=Date.now()-(data.created?.toMillis?data.created.toMillis():(data.created||0))
    if(age>24*60*60*1000){await deleteDoc(doc(db,'users',state.user.uid,'active','round'));return}
    showConfirm('Genoptag den igangværende runde?',()=>{
      state.round=deserializeRound(data)
      state.round.traversalOrder=data.traversalOrder||buildOrder(0,state.round.numTargets)
      state.round.traversalPos=data.traversalPos||0
      if(state.round.courseId)state.course=state.courses.find(c=>c.id===state.round.courseId)||null
      showActivePanel();renderShooters();updateTopBar();resetScroll()
    })
  }catch(e){console.warn(e)}
}

// ─── NAV BUTTONS ──────────────────────────────────────────────────────────────
function resetScroll(){const el=document.getElementById('app-main');if(!el)return;el.scrollTop=0;requestAnimationFrame(()=>{el.scrollTop=0;setTimeout(()=>{el.scrollTop=0},100)})}

window.prevTarget=function(){
  if(!state.round||state.round.traversalPos<=0)return
  state.round.traversalPos--;saveActiveRound();renderShooters();updateTopBar();resetScroll()
}

window.nextTarget=function(){
  if(!state.round)return
  if(state.round.traversalPos<state.round.numTargets-1){
    state.round.traversalPos++;saveActiveRound();renderShooters();updateTopBar();resetScroll()
  }else window.finishRound()
}

window.skipToTarget=function(){
  if(!state.round)return
  document.getElementById('skip-input').max=state.round.numTargets
  document.getElementById('skip-modal').classList.remove('hidden')
}

window.doSkip=function(){
  const n=Number(document.getElementById('skip-input').value)
  if(!state.round||n<1||n>state.round.numTargets)return
  const pos=state.round.traversalOrder.indexOf(n-1)
  if(pos!==-1)state.round.traversalPos=pos
  document.getElementById('skip-modal').classList.add('hidden')
  renderShooters();updateTopBar()
}

// ─── FINISH/ABORT ─────────────────────────────────────────────────────────────
window.finishRound=async function(){
  state.finishTap++
  const btn=document.getElementById('finish-btn')
  if(state.finishTap===1){
    btn.textContent='✓ BEKRÆFT'
    setTimeout(()=>{state.finishTap=0;btn.textContent='✓ AFSLUT NU'},3000)
    return
  }
  state.finishTap=0;btn.textContent='✓ AFSLUT NU'
  let gpsData={}
  if(state.gpsTracking){gpsData=stopTracking();state.gpsTracking=false}
  releaseWakeLock()

  const roundId=state.round.id||'r_'+Date.now()
  const roundData={...serializeRound(state.round),completed:Date.now(),...gpsData,id:roundId}
  state.rounds.unshift({...roundData,created:Date.now()})
  lsSave();renderRoundsList()
  // Gem runde i Firestore
  setDoc(doc(db,'users',state.user.uid,'rounds',roundId),{...roundData,created:serverTimestamp()}).catch(()=>showToast('Runde gemt lokalt (netværksfejl)','error'))
  // Gem runde direkte hos medskytter med bruger-konto (ikke gæster)
  state.round.shooters.filter(s=>!s.isGuest&&s.id!==state.user.uid).forEach(s=>{
    setDoc(doc(db,'users',s.id,'rounds',roundId),{...roundData,created:serverTimestamp()}).catch(()=>{})
  })

  const finished=state.round
  // Gem anonym statistik til baneoversigt
  if(finished.courseId&&state.profile?.kon&&state.profile?.bueklasse){
    const me=finished.shooters.find(x=>x.id===state.user?.uid)||finished.shooters?.[0]
    if(me){
      const arrowsShot=me.scores.flat().filter(v=>v!=null).length
      setDoc(doc(db,'bane_stats',finished.courseId,'runder',roundId),{score:calcTotal(me.scores),arrowsShot,kon:state.profile.kon,bueklasse:state.profile.bueklasse,numTargets:finished.numTargets,dato:serverTimestamp()}).catch(e=>console.warn('bane_stats fejl:',e))
    }
  }
  window._lastRound=finished
  state.round=null

  await deleteDoc(doc(db,'users',state.user.uid,'active','round')).catch(()=>{})
  renderResults(finished);showResultsPanel()
}

window.abortRound=async function(){
  state.abortTap++
  const btn=document.getElementById('abort-btn')
  if(state.abortTap===1){
    btn.textContent='🗑 BEKRÆFT'
    setTimeout(()=>{state.abortTap=0;btn.textContent='🗑 AFBRYD'},3000)
    return
  }
  state.abortTap=0;btn.textContent='🗑 AFBRYD'
  if(state.gpsTracking){stopTracking();state.gpsTracking=false}
  releaseWakeLock()
  await deleteDoc(doc(db,'users',state.user.uid,'active','round')).catch(()=>{})
  state.round=null;showSetupPanel()
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function buildDistribution(round){
  return '<div class="dist-grid">'+round.shooters.map(s=>{
    const d=calcDistribution(s.scores)
    const total=calcTotal(s.scores)
    const arr1=s.scores.map(t=>(t||[null,null])[0]).filter(v=>v!=null)
    const arr2=s.scores.map(t=>(t||[null,null])[1]).filter(v=>v!=null)
    const allArr=s.scores.flat().filter(v=>v!=null)
    const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
    const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
    const avgAll=allArr.length?(allArr.reduce((a,v)=>a+scoreVal(v),0)/allArr.length).toFixed(2):'—'
    return `<div class="dist-card"><div class="dist-name">${esc(s.name)}</div><div class="dist-row" style="font-weight:700;border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Total</span><span>${total} pt</span></div><div class="dist-row"><span>Snit pil 1</span><span>${avg1}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${avg2}</span></div><div class="dist-row" style="border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Samlet snit</span><span>${avgAll}</span></div>${Object.entries(d).map(([k,v])=>`<div class="dist-row"><span>${k}</span><span>${v}x</span></div>`).join('')}</div>`
  }).join('')+'</div>'
}

function renderResults(round){
  const winner=findWinner(round.shooters)
  document.getElementById('win-wrap').innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${esc(winner?.name||'—')}</div><div class="win-score">${winner?calcTotal(winner.scores):0} point</div>`
  document.getElementById('res-table').innerHTML=buildResultsTable(round)
  document.getElementById('res-dist').innerHTML=buildDistribution(round)
}

function buildResultsTable(round){
  const startT=(round.startTarget||1)-1
  let h=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${round.shooters.map(s=>`<th>${s.name}</th>`).join('')}</tr>`
  for(let t=0;t<round.numTargets;t++){
    const isStart=t===startT
    h+=`<tr><td class="tc">${isStart?`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--acc);margin-right:4px;vertical-align:middle;"></span>`:''}${t+1}</td>`
    round.shooters.forEach(s=>{
      const r=s.scores[t]||[null,null]
      const sum=(r[0]!=null&&r[0]!=='M'?Number(r[0]):0)+(r[1]!=null&&r[1]!=='M'?Number(r[1]):0)
      h+=`<td>${r.map(v=>v==null?'—':v).join('/')}<br><small>${sum}</small></td>`
    })
    h+='</tr>'
  }
  h+=`<tr class="tr-tot"><td class="tc">Total</td>${round.shooters.map(s=>`<td>${calcTotal(s.scores)}</td>`).join('')}</tr></table></div>`
  return h
}

function buildSummaryCards(round){
  const zones=['11','10','8','5','M']
  const zColors={'11':'#1a7a3a','10':'#1a5aaa','8':'#d4700a','5':'#7a3aaa','M':'#cc3333'}
  return round.shooters.map(s=>{
    const total=calcTotal(s.scores)
    const arr1=s.scores.map(t=>(t||[null,null])[0]).filter(v=>v!=null)
    const arr2=s.scores.map(t=>(t||[null,null])[1]).filter(v=>v!=null)
    const allArr=s.scores.flat().filter(v=>v!=null)
    const totalArrows=allArr.length
    const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
    const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
    const avgAll=totalArrows?(allArr.reduce((a,v)=>a+scoreVal(v),0)/totalArrows).toFixed(2):'—'
    const dist=calcDistribution(s.scores)
    return `<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:10px;">
      <div style="font-size:15px;font-weight:700;margin-bottom:10px;">${esc(s.name)}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;margin-bottom:8px;">
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${total}</div>
          <div style="font-size:10px;color:var(--muted);">POINT</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${totalArrows}</div>
          <div style="font-size:10px;color:var(--muted);">PILE</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${avgAll}</div>
          <div style="font-size:10px;color:var(--muted);">SNT/PIL</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;text-align:center;margin-bottom:10px;">
        <div style="background:var(--card);border-radius:8px;padding:6px;">
          <div style="font-size:18px;font-weight:700;color:var(--acc);">${avg1}</div>
          <div style="font-size:10px;color:var(--muted);">SNIT PIL 1</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:6px;">
          <div style="font-size:18px;font-weight:700;color:var(--acc);">${avg2}</div>
          <div style="font-size:10px;color:var(--muted);">SNIT PIL 2</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;text-align:center;border-top:1px solid var(--card);padding-top:8px;">
        ${zones.map(z=>`<div><div style="font-size:20px;font-weight:700;color:var(--text);">${z}</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${dist[z]||0}</div></div>`).join('')}
      </div>
    </div>`
  }).join('')
}

function buildActualResults(round){
  const data=round.shooters.map(s=>{
    const shot=s.scores.filter(t=>{const r=t||[null,null];return r[0]!==null&&r[1]!==null})
    if(!shot.length||shot.length===round.numTargets)return null
    const flat=shot.flat().filter(v=>v!==null)
    const total=flat.reduce((a,v)=>a+scoreVal(v),0)
    const arrows=flat.length
    const avgPil=arrows?(total/arrows).toFixed(2):0
    const avgMaal=shot.length?(total/shot.length).toFixed(1):0
    return {name:s.name,shot:shot.length,total,avgPil,avgMaal}
  }).filter(Boolean)
  if(!data.length)return ''
  const cards=data.map(d=>`<div style="flex:1;min-width:130px;background:var(--surface2);border-radius:10px;padding:12px 10px;text-align:center;"><div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:2px;">${d.name}</div><div style="font-size:11px;color:var(--muted);margin-bottom:6px;">${d.shot} af ${round.numTargets} mål</div><div style="font-size:30px;font-weight:700;color:var(--acc);line-height:1.1;">${d.total}</div><div style="font-size:12px;color:var(--muted);margin-bottom:8px;">POINT</div><div style="display:flex;justify-content:center;gap:12px;"><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${d.avgPil}</div><div style="font-size:11px;color:var(--muted);">SNT/PIL</div></div><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${d.avgMaal}</div><div style="font-size:11px;color:var(--muted);">SNT/MÅL</div></div></div></div>`).join('')
  return `<div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--surface2);"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Kun skudte mål</div><div style="display:flex;gap:8px;flex-wrap:wrap;">${cards}</div></div>`
}

// ─── ROUNDS LIST ──────────────────────────────────────────────────────────────
function renderRoundsList(){
  const el=document.getElementById('rounds-list')
  if(!state.rounds.length){el.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}
  el.innerHTML=''
  state.rounds.forEach(r=>{
    const shooters=(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
    const winner=shooters.length?findWinner(shooters):null
    const _c=r.created,date=_c?.toDate?_c.toDate().toLocaleDateString('da-DK'):_c?.seconds?new Date(_c.seconds*1000).toLocaleDateString('da-DK'):typeof _c==='number'?new Date(_c).toLocaleDateString('da-DK'):'—'
    const card=document.createElement('div');card.className='rcard'
    card.innerHTML=`<div class="rcard-info"><div class="rcard-name">${esc(r.name||'Runde')}</div><div class="rcard-meta"><span class="rcard-date">${esc(date)}</span> · ${esc(r.courseName||r.numTargets+' mål')}</div><div class="rcard-win">🏆 ${esc(winner?.name||'—')} (${winner?calcTotal(winner.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser" style="font-size:16px;">📈</button><button class="del-btn" data-id="${esc(r.id)}">✕</button>`
    card.querySelector('.rcard-info').onclick=()=>showRoundPopup({...r,shooters})
    card.querySelector('.rcard-analyse').onclick=()=>analyseRound(r.id)
    card.querySelector('.del-btn').onclick=e=>{
      const btn=e.currentTarget,key=`r-${r.id}`
      if(!state.deleteConfirm[key]){
        state.deleteConfirm[key]=true;btn.classList.add('conf');btn.textContent='Slet?'
        setTimeout(()=>{delete state.deleteConfirm[key];btn.classList.remove('conf');btn.textContent='✕'},3000)
      }else{
        delete state.deleteConfirm[key]
        state.rounds=state.rounds.filter(x=>x.id!==r.id);lsSave();renderRoundsList()
        if(state.user)deleteDoc(doc(db,'users',state.user.uid,'rounds',r.id)).catch(e=>console.warn(e))
        if(state.user&&r.courseId)deleteDoc(doc(db,'bane_stats',r.courseId,'runder',r.id)).catch(e=>console.warn(e))
        if(r.courseId)removeVisitFromCourse(r.courseId,r.id).catch(e=>console.warn(e))
      }
    }
    el.appendChild(card)
  })
}

function showRoundPopup(round){window._lastRound=round;
  let pop=document.getElementById('round-popup')
  if(!pop){
    pop=document.createElement('div');pop.id='round-popup';pop.className='rpop'
    pop.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`
    document.body.appendChild(pop)
  }
  pop.classList.remove('hidden')
  if(state.rpopMap){state.rpopMap.remove();state.rpopMap=null}
  const gpsRoute=round.gpsRoute||round.route||null
  const gpsDuration=round.gpsDuration||round.duration||null
  const gpsDistance=round.gpsDistance||round.distance||null
  const durStr=gpsDuration?formatDuration(gpsDuration):null
  const distStr=gpsDistance?formatDistance(gpsDistance):null
  const gpsHtml=(distStr||durStr)?`<div style="display:flex;gap:8px;margin-bottom:12px;">${distStr?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${distStr}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:''}${durStr?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${durStr}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:''}</div>${gpsRoute?`<div id="rpop-map" style="height:200px;border-radius:8px;margin-bottom:12px;overflow:hidden;"></div>`:''}`:'';
  document.getElementById('rpop-body').innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${esc(round.name)}</h3>${gpsHtml}`+buildSummaryCards(round)+buildResultsTable(round)+buildActualResults(round)+`<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>`
  if(gpsRoute){const pts=parseRoute(gpsRoute);if(pts.length)setTimeout(()=>{const mapEl=document.getElementById('rpop-map');if(!mapEl)return;state.rpopMap=window.L.map(mapEl);window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Esri',maxZoom:19}).addTo(state.rpopMap);const poly=window.L.polyline(pts.map(p=>[p.lat,p.lng]),{color:'#e8a020',weight:3}).addTo(state.rpopMap);state.rpopMap.fitBounds(poly.getBounds(),{padding:[20,20]})},50)}
}

// ─── COURSES ──────────────────────────────────────────────────────────────────
function mapCourseDoc(d){
  const data=d.data()
  return {id:d.id,name:data.name||data.yam||'—',numTargets:data.numTargets||data.antalMål||24,
    location:data.location||data.beliggenhed||'',targets:data.targets||data.mål||[],visits:data.visits||data.besøg||[],
    private:data.private??data.privat??false,hidden:data.hidden??data.skjult??false,
    approvedUsers:data.approvedUsers||data.godkendteBrugere||[]}
}

async function fetchCourses(){
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
      populateCourseDropdown()
    }
  }catch(err){console.warn('courses:',err)}
}

function renderCoursesList(){
  const el=document.getElementById('courses-list')
  if(!state.courses.length){el.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}
  el.innerHTML=''
  state.courses.forEach(c=>{
    const card=document.createElement('div');card.className='ccard'
    card.innerHTML=`<div class="ccard-name">${esc(c.name)}${c.private?' <span style="font-weight:400;color:var(--muted);">(Banen er kun for medlemmer)</span>':''}</div><div class="ccard-meta">${c.numTargets} mål · ${esc(c.location||'—')}</div>`
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
      html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${i+1}</div>`,
      iconSize:[28,28],iconAnchor:[14,14]})}).addTo(state.courseMap)
      .bindPopup(`<b>${i+1}. ${t.name||'Mål'}</b>${t.emoji?`<br>${t.emoji}`:''}${t.imageUrl||t.photo?`<br><img src="${t.imageUrl||t.photo}" style="max-width:140px;border-radius:4px;"/>`:''}`)
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
    card.style.cursor='pointer'
    card.onclick=(e)=>{if(!e.target.closest('.btn-icon'))window.showVisitResults(v.roundId)}
    card.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${esc(v.date)}</span><button class="btn-icon" onclick="window.showVisitResults('${esc(v.roundId)}')" title="Se resultat">📊</button></div><div style="font-size:12px;color:var(--muted);">${(v.participants||[]).map(esc).join(', ')}</div>${v.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${esc(v.winner)} (${v.winnerScore} pt)</div>`:''}`
    el.appendChild(card)
  })
}

window.showVisitResults=function(roundId){
  const round=state.rounds.find(r=>r.id===roundId)
  if(!round){showToast('Runden er ikke gemt lokalt','error');return}
  const shooters=(round.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
  window.switchTab('results')
  showRoundPopup({...round,shooters})
}

window.showRouteOnMap=function(points){
  if(!state.courseMap||!points.length)return
  if(state.courseMapLayer)state.courseMap.removeLayer(state.courseMapLayer)
  state.courseMapLayer=window.L.polyline(points.map(p=>[p.lat,p.lng]),{color:'#e8a020',weight:3,dashArray:'8,4'}).addTo(state.courseMap)
  state.courseMap.fitBounds(state.courseMapLayer.getBounds(),{padding:[20,20]})
  window.switchSubtab('map')
}

window.parseRoute=parseRoute

function renderCourseEditForm(course){
  const targets=course.targets||[]
  let html=`
    <div class="card" style="margin-bottom:12px;">
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
      <div class="trow-sub" style="margin-top:-6px;">Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.</div>
      <div id="edit-capproved-wrap" style="display:${course.hidden?'':'none'};">
        <div class="ac-wrap fg">
          <input type="text" id="edit-capproved-search" placeholder="Søg registreret bruger…" autocomplete="off" oninput="searchApprovedUsers('edit',this.value)" />
          <div id="edit-capproved-ac" class="ac-list hidden"></div>
        </div>
        <div id="edit-capproved-chips" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;"></div>
        <input type="text" id="edit-capproved-manual" placeholder="…eller indtast email direkte" />
        <button type="button" class="btn btn-dark" style="width:100%;margin-top:6px;" onclick="addApprovedEmailManual('edit')">Tilføj</button>
      </div>
      <button class="btn btn-gold" style="width:100%" onclick="saveCourseEdit()">Gem baneinfo</button>
    </div>
    <div class="card">
      <div class="card-title" style="display:flex;justify-content:space-between;align-items:center;">
        <span>Mål (${targets.length})</span>
        <button class="btn-icon" onclick="addTargetToCurrentCourse()" style="font-size:20px;">＋</button>
      </div>
      <div id="targets-edit-list">`
  
  targets.forEach((t,i)=>{
    html+=`<div class="fg" style="border-bottom:1px solid var(--surface2);padding-bottom:12px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-weight:700;color:var(--acc);">Mål ${i+1}</span>
        <div style="display:flex;gap:6px;">
          <button class="btn-icon" onclick="setTargetGps(${i})" title="Sæt GPS">📍</button>
          <button class="btn-icon" onclick="deleteTargetFromCourse(${i})" style="color:var(--danger)">🗑</button>
        </div>
      </div>
      <div class="fg"><label class="lbl">Navn</label>
        <input type="text" value="${t.name||''}" onchange="updateTargetField(${i},'name',this.value)" style="padding:6px 10px;" /></div>
      <div style="display:flex;gap:8px;">
        <div class="fg" style="flex:1"><label class="lbl">Emoji</label>
          <input type="text" value="${t.emoji||''}" onchange="updateTargetField(${i},'emoji',this.value)" style="padding:6px 10px;" /></div>
        <div class="fg" style="flex:1"><label class="lbl">Afstand (m)</label>
          <input type="number" value="${t.distance||''}" onchange="updateTargetField(${i},'distance',this.value)" style="padding:6px 10px;" /></div>
      </div>
      ${t.gps||t.GPS?
        `<div style="font-size:12px;color:var(--muted);">📍 GPS: ${(t.gps||t.GPS).lat.toFixed(5)}, ${(t.gps||t.GPS).lng.toFixed(5)}</div>`:
        `<div style="font-size:12px;color:var(--danger);">Ingen GPS</div>`
      }
      ${t.imageUrl||t.photo?
        `<img src="${t.imageUrl||t.photo}" style="max-width:100%;max-height:100px;border-radius:8px;margin-top:6px;object-fit:cover;" />`:''
      }
      <label class="btn btn-dark" style="margin-top:6px;display:inline-block;font-size:12px;padding:4px 10px;cursor:pointer;">
        📷 Upload foto
        <input type="file" accept="image/*" style="display:none;" onchange="uploadTargetPhoto(${i},this)" />
      </label>
      <button class="btn btn-gold" style="margin-top:6px;font-size:12px;padding:4px 10px;" onclick="saveAllTargets()">💾 Gem alle mål</button>
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
      lsSave();renderCoursesList();populateCourseDropdown()
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
    `<span style="display:inline-flex;align-items:center;gap:6px;padding:5px 10px;background:var(--surface2);border:1px solid var(--bord);border-radius:16px;font-size:12px;">${esc(e)}<span style="cursor:pointer;color:var(--danger);font-weight:700;" onclick="removeApprovedEmail('${mode}','${esc(e)}')">✕</span></span>`
  ).join(''):'<span style="font-size:12px;color:var(--muted);">Ingen godkendt endnu</span>'
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
    lsSave();renderCoursesList();populateCourseDropdown()
    document.getElementById('create-course-modal').classList.add('hidden')
    document.getElementById('new-course-name').value=''
    document.getElementById('new-course-visibility').value='public'
    document.getElementById('new-course-approved-wrap').style.display='none'
    showToast('Bane oprettet!','success')
  }catch(e){showToast('Fejl: Kunne ikke oprette bane','error')}
}

async function updateTargetInFirestore(courseId,targetIndex,targetData){
  const ref2=doc(db,'courses',courseId);const snap=await getDoc(ref2)
  if(!snap.exists())return
  const d=snap.data();const targets=[...(d.targets||d.mål||[])]
  while(targets.length<=targetIndex)targets.push({})
  targets[targetIndex]={...targets[targetIndex],...targetData}
  await updateDoc(ref2,{targets,mål:targets})
}

function compressImage(file){
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

window.openEditTarget=function(){
  const tIdx=curTargetIdx(),target=state.course?.targets?.[tIdx]
  document.getElementById('edit-tname').value=target?.name||''
  document.getElementById('edit-panel').classList.remove('hidden')
}

window.saveEditTarget=async function(){
  const name=document.getElementById('edit-tname').value.trim(),tIdx=curTargetIdx()
  if(state.round.courseId){await updateTargetInFirestore(state.round.courseId,tIdx,{name});if(state.course?.targets)state.course.targets[tIdx].name=name}
  document.getElementById('edit-panel').classList.add('hidden');updateTopBar()
}

window.editGps=async function(){
  try{const pos=await getCurrentPosition(),tIdx=curTargetIdx();await updateTargetInFirestore(state.round.courseId,tIdx,{gps:pos});if(state.course?.targets)state.course.targets[tIdx].gps=pos;showToast('GPS gemt!','success')}
  catch(e){showToast('GPS fejl: '+e.message,'error')}
}

// ─── FRIENDS ──────────────────────────────────────────────────────────────────
function renderFriendsList(){
  const el=document.getElementById('friends-list')
  if(!state.friends.length){el.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}
  el.innerHTML=''
  state.friends.forEach(f=>{
    const card=document.createElement('div');card.className='fcard'
    card.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${esc(f.name)}</div><div class="fmeta">${[f.email,f.phone,f.club,f.bowType].filter(Boolean).map(esc).join(' · ')}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del" style="color:var(--danger);">🗑</button></div>`
    card.querySelector('.frd-edit').addEventListener('click',()=>openFriendModal(f))
    card.querySelector('.frd-del').addEventListener('click',()=>doDeleteFriend(f.id,f.name))
    el.appendChild(card)
  })
}

window.openFriendModal=function(friend){
  state.editFriendId=friend?.id||null
  document.getElementById('friend-modal-title').textContent=friend?'Rediger ven':'Tilføj ven'
  document.getElementById('f-name').value=friend?.name||''
  document.getElementById('f-email').value=friend?.email||''
  document.getElementById('f-phone').value=friend?.phone||''
  document.getElementById('f-club').value=friend?.club||''
  document.getElementById('f-bow').value=friend?.bowType||''
  document.getElementById('friend-modal').classList.remove('hidden')
}

window.saveFriendModal=function(){
  const data={
    name:    document.getElementById('f-name').value.trim().slice(0,80),
    email:   document.getElementById('f-email').value.trim().slice(0,100),
    phone:   document.getElementById('f-phone').value.trim().slice(0,30),
    club:    document.getElementById('f-club').value.trim().slice(0,80),
    bowType: document.getElementById('f-bow').value
  }
  if(!data.name)return
  if(state.editFriendId){const idx=state.friends.findIndex(f=>f.id===state.editFriendId);if(idx!==-1)state.friends[idx]={...data,id:state.editFriendId};else state.friends.push({...data,id:state.editFriendId})}
  else state.friends.push({...data,id:'f_'+Date.now()})
  const fid=state.editFriendId||('f_'+Date.now())
  if(!state.editFriendId)state.friends[state.friends.length-1].id=fid
  const fdata=state.friends.find(f=>f.id===(state.editFriendId||fid))
  if(fdata&&state.user)setDoc(doc(db,'users',state.user.uid,'friends',fdata.id),fdata).catch(e=>console.warn(e))
  lsSave();document.getElementById('friend-modal').classList.add('hidden');renderFriendsList();renderQuickFriends()
}

window.doDeleteFriend=function(id,name){
  showConfirm(`Slet ${name}?`,()=>{
    state.friends=state.friends.filter(f=>f.id!==id);lsSave();renderFriendsList();renderQuickFriends()
    if(state.user)deleteDoc(doc(db,'users',state.user.uid,'friends',id)).catch(e=>console.warn(e))
  })
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
let _allUsers=[]
async function renderAdminSection(){
  if(!state.isAdmin)return
  document.getElementById('admin-section').classList.remove('hidden')
  try{
    await renderAdminsList()
  }catch(e){console.warn(e)}
  if(!state.isSuperAdmin)return
  document.getElementById('users-section').classList.remove('hidden')
  try{
    const snap=await getDocs(collection(db,'users'))
    _allUsers=snap.docs.map(u=>({uid:u.id,...u.data()})).sort((a,b)=>(a.name||a.yam||'').localeCompare(b.name||b.yam||'','da'))
    renderUsersList()
  }catch(e){console.warn(e)}
}
async function renderAdminsList(){
  const el=document.getElementById('admins-list');if(!el)return
  el.innerHTML='<div style="font-size:12px;color:var(--text-muted);">Henter admins…</div>'
  const snap=await getDocs(collection(db,'admins'))
  if(snap.empty){el.innerHTML='<div style="font-size:12px;color:var(--text-muted);">Ingen admins fundet</div>';return}
  el.innerHTML='<div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;font-family:var(--font-display);">NUVÆRENDE ADMINISTRATORER</div>'
  snap.docs.forEach(d=>{
    const row=document.createElement('div')
    row.style.cssText='display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border,#333);'
    const email=d.data().email||d.id
    const isMe=d.id===state.user?.uid
    row.innerHTML=`<span style="font-size:13px;">${esc(email)}${isMe?' <span style="font-size:11px;color:var(--text-muted);">(dig)</span>':''}</span>`
    if(state.isSuperAdmin&&!isMe){
      const btn=document.createElement('button')
      btn.className='btn btn-dark btn-sm'
      btn.style.cssText='padding:2px 8px;font-size:11px;'
      btn.textContent='Fjern'
      btn.onclick=()=>doRemoveAdmin(d.id,email)
      row.appendChild(btn)
    }
    el.appendChild(row)
  })
}
const _bowLabels={langbue:'Langbue',trad:'Traditionel',recurve:'Recurve',compound:'Compound',barbue:'Barbue','buejæger':'Buejæger','trad-buejæger':'Trad. buejæger',rytterbue:'Rytterbue'}
function renderUsersList(filter=''){
  const el=document.getElementById('users-list');el.innerHTML=''
  const q=filter.toLowerCase()
  const users=q?_allUsers.filter(d=>(d.name||d.yam||'').toLowerCase().includes(q)||(d.email||d['e-mail']||'').toLowerCase().includes(q)):_allUsers
  document.getElementById('users-count').textContent=`${_allUsers.length} brugere`
  const summaryEl=document.getElementById('users-summary')
  const counts={}
  _allUsers.forEach(d=>{const b=d.bueklasse||'Ukendt';counts[b]=(counts[b]||0)+1})
  const chips=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<span style="display:inline-block;background:var(--card-bg,#222);border:1px solid var(--border,#444);border-radius:12px;padding:2px 8px;font-size:11px;margin:2px 2px 2px 0;white-space:nowrap;"><b>${v}</b> ${esc(_bowLabels[k]||k)}</span>`).join('')
  summaryEl.innerHTML=`<div style="margin-bottom:8px;">${chips}</div>`
  users.forEach(d=>{
    const row=document.createElement('div');row.className='urow'
    const date=d.created?.toDate?d.created.toDate().toLocaleDateString('da-DK'):'—'
    const bow=d.bueklasse||'';const kon=d.kon==='m'?'♂':d.kon==='k'?'♀':''
    row.innerHTML=`<span class="un">${esc(d.name||d.yam||'—')}</span><span class="ue">${esc(d.email||d['e-mail']||'')}</span><span class="ubow">${esc(bow)}${kon?` ${esc(kon)}`:''}</span><span class="ud">${esc(date)}</span>`
    el.appendChild(row)
  })
}
window.filterUsers=function(v){renderUsersList(v)}

window.doAddAdmin=async function(){
  const email=document.getElementById('admin-email').value.trim();if(!email)return
  try{
    const snap=await getDocs(collection(db,'users'))
    const user=snap.docs.find(d=>d.data().email===email||d.data()['e-mail']===email)
    if(!user){showToast('Bruger ikke fundet','error');return}
    await setDoc(doc(db,'admins',user.id),{email,created:serverTimestamp()})
    showToast(`${user.data().name||email} er nu admin`,'success')
    document.getElementById('admin-email').value=''
    await renderAdminsList()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}
window.doRemoveAdmin=async function(uid,email){
  if(!state.isSuperAdmin)return
  if(!confirm(`Fjern ${email} som administrator?`))return
  try{
    await deleteDoc(doc(db,'admins',uid))
    showToast(`${email} er fjernet som admin`,'success')
    await renderAdminsList()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

// ─── QR ───────────────────────────────────────────────────────────────────────
window.showQR=function(){
  document.getElementById('qr-modal').classList.remove('hidden')
  const el=document.getElementById('qr-canvas');el.innerHTML=''
  if(typeof window.QRCode!=='undefined')new window.QRCode(el,{text:window.location.href,width:200,height:200,colorDark:'#1a3a1a',colorLight:'#fff'})
}

// ─── MODALS ───────────────────────────────────────────────────────────────────

// calcAnalyseStats ligger nu i ./stats.js; re-eksporteres for testsuiten.
import { calcAnalyseStats } from './stats.js'
export { calcAnalyseStats }

function buildCompareHtml(st1,lbl1,st2,lbl2){
  const zones=['11','10','8','5','M']
  const zColors={'11':'#1a7a3a','10':'#1a5aaa','8':'#d4700a','5':'#7a3aaa','M':'#cc3333'}
  const sc1=st1.myScores[0]||0,sc2=st2.myScores[0]||0,diff=Math.abs(sc1-sc2)
  const sep='<div style="border-top:1px solid var(--surface2);margin:10px 0;"></div>'
  const pilRow=(st,lbl,col)=>`<div style="font-size:11px;color:${col};margin-bottom:4px;">${esc(lbl)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:10px;color:var(--muted);">PIL 1</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${st.p1avg}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:10px;color:var(--muted);">SNT/PIL</div><div style="font-size:20px;font-weight:700;color:#f0c030;">${st.pilAvg}</div>
      </div>
      <div><div style="font-size:10px;color:var(--muted);">PIL 2</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${st.p2avg}</div></div>
    </div>`
  const targetRow=(st,lbl,col)=>st.bestTarget&&st.worstTarget?`<div style="font-size:11px;color:${col};margin-bottom:6px;">${esc(lbl)}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
      <div style="background:rgba(42,170,90,0.15);border-radius:8px;padding:8px;">
        <div style="font-size:10px;color:var(--muted);">BEDSTE</div>
        <div style="font-size:22px;font-weight:700;color:#2aaa5a;">Mål ${st.bestTarget.i+1}</div>
        <div style="font-size:12px;color:var(--muted);">⌀ ${st.bestTarget.v.toFixed(2)}</div>
      </div>
      <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:8px;">
        <div style="font-size:10px;color:var(--muted);">SVÆRESTE</div>
        <div style="font-size:22px;font-weight:700;color:var(--danger);">Mål ${st.worstTarget.i+1}</div>
        <div style="font-size:12px;color:var(--muted);">⌀ ${st.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:''
  let h=''
  h+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">SAMMENLIGNING</div>
    <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;text-align:center;">
      <div>
        <div style="font-size:11px;color:var(--acc);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(lbl1)}</div>
        <div style="font-size:36px;font-weight:700;color:var(--acc);">${sc1}</div>
        <div style="font-size:11px;color:var(--muted);">POINT</div>
      </div>
      <div style="font-size:18px;color:var(--muted);font-weight:700;">VS</div>
      <div>
        <div style="font-size:11px;color:#f0c030;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(lbl2)}</div>
        <div style="font-size:36px;font-weight:700;color:#f0c030;">${sc2}</div>
        <div style="font-size:11px;color:var(--muted);">POINT</div>
      </div>
    </div>
    <div style="text-align:center;margin-top:10px;font-size:13px;color:var(--muted);">${sc1>sc2?`${esc(lbl1)} vandt med ${diff} point`:sc2>sc1?`${esc(lbl2)} vandt med ${diff} point`:'Uafgjort!'}</div>
  </div>`
  h+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">PIL STATISTIK</div>
    ${pilRow(st1,lbl1,'var(--acc)')}${sep}${pilRow(st2,lbl2,'#f0c030')}
  </div>`
  if(st1.bestTarget||st2.bestTarget){
    h+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">BEDSTE OG SVÆRESTE MÅL</div>
      ${targetRow(st1,lbl1,'var(--acc)')}${sep}${targetRow(st2,lbl2,'#f0c030')}
    </div>`
  }
  h+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:10px;">FORDELING PR. SCOREZONE</div>
    <div style="display:grid;grid-template-columns:minmax(0,1fr) repeat(5,minmax(0,1fr));gap:4px 6px;align-items:center;font-size:13px;">
      <div></div>
      ${zones.map(z=>`<div style="text-align:center;font-weight:700;color:${zColors[z]};">${z}</div>`).join('')}
      <div style="font-size:11px;color:var(--acc);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(lbl1)}</div>
      ${zones.map(z=>`<div style="text-align:center;font-weight:700;">${(st1.distP1[z]||0)+(st1.distP2[z]||0)}</div>`).join('')}
      <div style="font-size:11px;color:#f0c030;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(lbl2)}</div>
      ${zones.map(z=>`<div style="text-align:center;font-weight:700;">${(st2.distP1[z]||0)+(st2.distP2[z]||0)}</div>`).join('')}
    </div>
  </div>`
  return h
}

window.renderAnalyse=function(){
  const el=document.getElementById('analyse-content')
  if(!el)return
  const baneEl=document.getElementById('analyse-bane')
  if(baneEl&&baneEl.options.length<=1){
    const brugteBaner=[...new Set(state.rounds.map(r=>r.courseId).filter(Boolean))]
    brugteBaner.forEach(id=>{
      const c=state.courses.find(x=>x.id===id)
      if(c&&!Array.from(baneEl.options).find(o=>o.value===id)){
        const o=document.createElement('option');o.value=id;o.textContent=c.name;baneEl.appendChild(o)
      }
    })
  }
  const filterVal=document.getElementById('analyse-filter')?.value||'all'
  const filter=filterVal==='all'?0:filterVal==='lastround'?1:filterVal==='specific'?0:Number(filterVal)
  const bane=document.getElementById('analyse-bane')?.value||'all'
  const antalInput=Number(document.getElementById('analyse-antal')?.value)||0
  const rundeWrap=document.getElementById('analyse-runde-wrap')
  const rundeEl=document.getElementById('analyse-runde')
  const rundeWrap2=document.getElementById('analyse-runde-wrap-2')
  const rundeEl2=document.getElementById('analyse-runde-2')
  const rundeLbl=document.getElementById('analyse-runde-lbl')
  const isCompare=filterVal==='compare'
  if(rundeWrap)rundeWrap.style.display=(filterVal==='specific'||isCompare)?'':'none'
  if(rundeWrap2)rundeWrap2.style.display=isCompare?'':'none'
  if(rundeLbl)rundeLbl.style.display=isCompare?'':'none'
  const fmtRD=r=>{const _c=r.created;return _c?.toDate?_c.toDate().toLocaleDateString('da-DK'):_c?.seconds?new Date(_c.seconds*1000).toLocaleDateString('da-DK'):typeof _c==='number'?new Date(_c).toLocaleDateString('da-DK'):'—'}
  if((filterVal==='specific'||isCompare)&&rundeEl){
    const currentIds=new Set(Array.from(rundeEl.options).map(o=>o.value).filter(Boolean))
    state.rounds.forEach(r=>{if(!currentIds.has(r.id)){const o=document.createElement('option');o.value=r.id;o.textContent=`${fmtRD(r)} — ${r.name||'Runde'}`;rundeEl.appendChild(o)}})
    if(state.pendingAnalyseRound){rundeEl.value=state.pendingAnalyseRound;state.pendingAnalyseRound=null}
  }
  if(isCompare&&rundeEl2){
    const currentIds2=new Set(Array.from(rundeEl2.options).map(o=>o.value).filter(Boolean))
    state.rounds.forEach(r=>{if(!currentIds2.has(r.id)){const o=document.createElement('option');o.value=r.id;o.textContent=`${fmtRD(r)} — ${r.name||'Runde'}`;rundeEl2.appendChild(o)}})
  }
  if(isCompare){
    const sel1=rundeEl?.value,sel2=rundeEl2?.value
    if(!sel1||!sel2){el.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}
    const allR=state.rounds.map(r=>({...r,shooters:(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))}))
    const r1=allR.find(r=>r.id===sel1),r2=allR.find(r=>r.id===sel2)
    if(!r1||!r2){el.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}
    const lbl1=`${r1.name||'Runde'} (${fmtRD(r1)})`,lbl2=`${r2.name||'Runde'} (${fmtRD(r2)})`
    el.innerHTML=buildCompareHtml(calcAnalyseStats([r1],state.user?.uid),lbl1,calcAnalyseStats([r2],state.user?.uid),lbl2)
    return
  }
  const allRounds=state.rounds.map(r=>({...r,shooters:(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))}))
  let filtered=bane==='all'?allRounds:allRounds.filter(r=>r.courseId===bane)
  if(filterVal==='specific'){const sel=rundeEl?.value;filtered=sel?filtered.filter(r=>r.id===sel):[]}
  const antal=antalInput||filter
  const rounds=antal&&filterVal!=='specific'?filtered.slice(0,antal):filtered
  if(!rounds.length){el.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}
  const getMe=r=>r.shooters.find(x=>x.id===state.user?.uid)||r.shooters?.[0]
  const myScores=rounds.map(r=>{const s=getMe(r);return s?calcTotal(s.scores):null}).filter(v=>v!==null)
  const avg=myScores.length?(myScores.reduce((a,b)=>a+b,0)/myScores.length).toFixed(1):0
  const best=myScores.length?Math.max(...myScores):0
  const worst=myScores.length?Math.min(...myScores):0
  let p1t=0,p1n=0,p2t=0,p2n=0
  const distP1={11:0,10:0,8:0,5:0,M:0}
  const distP2={11:0,10:0,8:0,5:0,M:0}
  rounds.forEach(r=>{
    const s=getMe(r);if(!s)return
    s.scores.forEach(t=>{
      if(t[0]!=null){if(t[0]==='M'){distP1.M++;p1n++}else{distP1[Number(t[0])]=(distP1[Number(t[0])]||0)+1;p1t+=Number(t[0]);p1n++}}
      if(t[1]!=null){if(t[1]==='M'){distP2.M++;p2n++}else{distP2[Number(t[1])]=(distP2[Number(t[1])]||0)+1;p2t+=Number(t[1]);p2n++}}
    })
  })
  const p1avg=p1n?(p1t/p1n).toFixed(2):0
  const p2avg=p2n?(p2t/p2n).toFixed(2):0
  const pilAvg=(p1n+p2n)?((p1t+p2t)/(p1n+p2n)).toFixed(2):0
  const numTargets=rounds[0]?.numTargets||24
  const targetAvgs=Array.from({length:numTargets},(_,pos)=>{
    let tot=0,cnt=0
    rounds.forEach(r=>{const s=getMe(r);if(!s)return;const order=r.traversalOrder||Array.from({length:r.numTargets||numTargets},(_,i)=>i);const tIdx=order[pos];if(tIdx===undefined)return;const row=s.scores[tIdx]||[null,null];row.forEach(v=>{if(v!=null){tot+=scoreVal(v);cnt++}})})
    return cnt?(tot/cnt):null
  })
  const validAvgs=targetAvgs.map((v,i)=>({v,i})).filter(x=>x.v!==null)
  const bestTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v>b.v?a:b):null
  const worstTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v<b.v?a:b):null
  const colors={'11':'#1a7a3a','10':'#1a5aaa','8':'#d4700a','5':'#7a3aaa','M':'#cc3333'}
  const zones=['11','10','8','5','M']
  let html=''

  // Nøgletal
  html+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">RUNDER</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${rounds.length}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">SNIT/RUNDE</div><div style="font-size:28px;font-weight:700;color:var(--acc);">${avg}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">BEDSTE</div><div style="font-size:28px;font-weight:700;color:#2aaa5a;">${best}</div></div>
    <div class="card" style="text-align:center;padding:12px;"><div style="font-size:11px;color:var(--muted);">LAVESTE</div><div style="font-size:28px;font-weight:700;color:var(--danger);">${worst}</div></div>
  </div>`

  // Pil statistik
  html+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">PIL STATISTIK</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
      <div><div style="font-size:11px;color:var(--muted);">PIL 1</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${p1avg}</div></div>
      <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
        <div style="font-size:11px;color:var(--muted);">SNT/PIL</div>
        <div style="font-size:22px;font-weight:700;color:#f0c030;">${pilAvg}</div>
      </div>
      <div><div style="font-size:11px;color:var(--muted);">PIL 2</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${p2avg}</div></div>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">
      ${Number(p1avg)>Number(p2avg)?'Bedst med PIL 1 🏹':Number(p2avg)>Number(p1avg)?'Bedst med PIL 2 🏹':'Begge pile er lige gode 🎯'}
    </div>
  </div>`

  // Bedste/dårligste mål
  if(bestTarget&&worstTarget&&bestTarget.i!==worstTarget.i){
    html+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">BEDSTE OG SVÆRESTE MÅL</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:center;">
        <div style="background:rgba(42,170,90,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">BEDSTE</div>
          <div style="font-size:24px;font-weight:700;color:#2aaa5a;">Skud nr. ${bestTarget.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${bestTarget.v.toFixed(2)}</div>
        </div>
        <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">SVÆRESTE</div>
          <div style="font-size:24px;font-weight:700;color:var(--danger);">Skud nr. ${worstTarget.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${worstTarget.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`
  }

  // Lagkagediagrammer
  html+=`<div class="card" style="margin-bottom:16px;">
    <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">FORDELING PR. SCOREZONE</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">`
  zones.forEach(z=>{
    const v1=distP1[z]||0,v2=distP2[z]||0,tot=v1+v2
    const r=30
    let pie=''
    if(tot===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="var(--surface2)"/>`}
    else if(v2===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="#ffd700"/>`}
    else if(v1===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="#00cc44"/>`}
    else{
      const pct=v1/tot,angle=pct*2*Math.PI
      const x1=r,y1=0
      const x2=r-r*Math.sin(angle),y2=r-r*Math.cos(angle)
      const large=angle>Math.PI?1:0
      pie=`<path d="M${r},${r} L${x1},${y1} A${r},${r} 0 ${large},0 ${x2},${y2} Z" fill="#ffd700"/>
           <path d="M${r},${r} L${x2},${y2} A${r},${r} 0 ${1-large},0 ${x1},${y1} Z" fill="#00cc44"/>`
    }
    html+=`<div style="text-align:center;">
      <div style="font-weight:700;font-size:20px;color:#ffd700;margin-bottom:2px;">${z}</div>
      <svg viewBox="0 0 ${r*2} ${r*2}" style="width:56px;height:56px;">${pie}</svg>
      <div style="font-size:14px;color:var(--muted);margin-top:2px;">${v1}/${v2}</div>
      <div style="font-size:15px;font-weight:700;color:var(--text);">${tot}</div>
    </div>`
  })
  html+=`</div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:11px;color:var(--muted);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffd700;margin-right:4px;vertical-align:middle;"></span>PIL 1</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00cc44;margin-right:4px;vertical-align:middle;"></span>PIL 2</span>
    </div>
  </div>`

  // Udviklingsgraf
  if(myScores.length>1){
    const w=340,h=120,pad=30,mn=Math.min(...myScores)-5,mx=Math.max(...myScores)+5
    const pts=myScores.slice().reverse().map((v,i)=>{
      const x=pad+(i/(myScores.length-1))*(w-2*pad),y=h-pad-((v-mn)/(mx-mn))*(h-2*pad)
      return `${x},${y}`
    }).join(' ')
    html+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 ${w} ${h}" style="width:100%;overflow:visible;">
        <polyline points="${pts}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${myScores.slice().reverse().map((v,i)=>{const x=pad+(i/(myScores.length-1))*(w-2*pad),y=h-pad-((v-mn)/(mx-mn))*(h-2*pad);return `<circle cx="${x}" cy="${y}" r="4" fill="var(--acc)"/><text x="${x}" y="${y-8}" text-anchor="middle" font-size="10" fill="var(--text)">${v}</text>`}).join('')}
        <text x="${pad}" y="${h-5}" font-size="10" fill="var(--muted)">ældst</text>
        <text x="${w-pad}" y="${h-5}" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`
  }

  // Per-mål graf - kun ved specifik bane eller seneste runde
  const showTargetGraph=bane!=='all'||filterVal==='lastround'||filterVal==='specific'
  const validTA=targetAvgs.map((v,i)=>({v,i})).filter(x=>x.v!==null)
  if(validTA.length>1&&showTargetGraph){
    const w=340,h=160,padL=42,padB=25,padT=15,padR=15
    const mn=Math.floor(Math.min(...validTA.map(x=>x.v)))
    const mx=Math.ceil(Math.max(...validTA.map(x=>x.v)))
    const range=mx-mn||1
    const toX=idx2=>padL+(numTargets>1?(idx2/(numTargets-1))*(w-padL-padR):0)
    const toY=val=>padT+(h-padT-padB)*(1-(val-mn)/range)
    const pts=validTA.map(({v,i})=>toX(i)+','+toY(v)).join(' ')
    const ticks=[]
    for(let t=mn;t<=mx;t++){if((mx-mn)<=6||t%Math.ceil((mx-mn)/5)===0)ticks.push(t)}
    const ticksSvg=ticks.map(t=>`<line x1="${padL-4}" y1="${toY(t)}" x2="${padL}" y2="${toY(t)}" stroke="var(--muted)" stroke-width="1"/><text x="${padL-6}" y="${toY(t)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${t}</text><line x1="${padL}" y1="${toY(t)}" x2="${w-padR}" y2="${toY(t)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join('')
    const dotsSvg=validTA.map(({v,i})=>`<circle cx="${toX(i)}" cy="${toY(v)}" r="3" fill="var(--acc)"/>`).join('')
    const dotsLargeSvg=validTA.map(({v,i})=>`<circle cx="${toX(i)}" cy="${toY(v)}" r="4" fill="var(--acc)"/><text x="${toX(i)}" y="${toY(v)-8}" text-anchor="middle" font-size="9" fill="#fff">${v.toFixed(1)}</text>`).join('')
    // Bredere fullscreen-version: min 30px pr. mål
    const wFS=Math.max(w,numTargets*30)
    const toXFS=idx2=>padL+(numTargets>1?(idx2/(numTargets-1))*(wFS-padL-padR):0)
    const ptsFS=validTA.map(({v,i})=>toXFS(i)+','+toY(v)).join(' ')
    const ticksSvgFS=ticks.map(t=>`<line x1="${padL-4}" y1="${toY(t)}" x2="${padL}" y2="${toY(t)}" stroke="var(--muted)" stroke-width="1"/><text x="${padL-6}" y="${toY(t)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${t}</text><line x1="${padL}" y1="${toY(t)}" x2="${wFS-padR}" y2="${toY(t)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join('')
    const dotsLargeSvgFS=validTA.map(({v,i})=>`<circle cx="${toXFS(i)}" cy="${toY(v)}" r="5" fill="var(--acc)"/><text x="${toXFS(i)}" y="${toY(v)-10}" text-anchor="middle" font-size="10" fill="#fff">${v.toFixed(1)}</text>`).join('')
    html+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
        <span>GENNEMSNIT PR. SKUDRÆKKEFØLGE</span>
        <button class="btn-icon" onclick="document.getElementById('graph-fs').classList.remove('hidden')" style="font-size:16px;">⤢</button>
      </div>
      <svg viewBox="0 0 ${w} ${h}" style="width:100%;overflow:visible;">
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
        <line x1="${padL}" y1="${h-padB}" x2="${w-padR}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
        ${ticksSvg}
        <polyline points="${pts}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round"/>
        ${dotsSvg}
        <text x="${padL}" y="${h-5}" font-size="9" fill="var(--muted)">1</text>
        <text x="${w-padR}" y="${h-5}" text-anchor="end" font-size="9" fill="var(--muted)">${numTargets}</text>
      </svg>
      <div style="font-size:10px;color:var(--muted);text-align:center;margin-top:2px;">Skudrækkefølge — 1 = første mål skudt</div>
    </div>
    <div id="graph-fs" class="fs-ov hidden" onclick="this.classList.add('hidden')" style="align-items:center;justify-content:center;padding:16px;">
      <div style="background:var(--card);border-radius:16px;padding:16px;width:100%;max-width:90vw;overflow:hidden;" onclick="event.stopPropagation()">
        <div style="font-family:var(--fd);font-size:14px;color:var(--muted);margin-bottom:8px;">GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset</div>
        <svg id="graph-fs-svg" viewBox="0 0 ${wFS} ${h}" style="width:100%;display:block;touch-action:none;overflow:visible;">
          <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
          <line x1="${padL}" y1="${h-padB}" x2="${wFS-padR}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
          ${ticksSvgFS}
          <polyline points="${ptsFS}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
          ${dotsLargeSvgFS}
          <text x="${padL}" y="${h-5}" font-size="9" fill="var(--muted)">1</text>
          <text x="${toXFS(numTargets-1)}" y="${h-5}" text-anchor="end" font-size="9" fill="var(--muted)">${numTargets}</text>
        </svg>
        <button class="btn btn-dark" style="width:100%;margin-top:12px;" onclick="document.getElementById('graph-fs').classList.add('hidden')">Luk</button>
      </div>
    </div>`
  }

  el.innerHTML=html
  const gfsSvg=document.getElementById('graph-fs-svg')
  if(gfsSvg)initGraphPinch(gfsSvg)

  // Sammenligning med andre skytter på samme bane
  if(bane!=='all'&&state.profile?.kon&&state.profile?.bueklasse){
    const konNavn=state.profile.kon==='herre'?'Herre':'Dame'
    const klasseNavn={langbue:'Langbue',trad:'Traditionel',recurve:'Recurve',compound:'Compound',barbue:'Barbue','buejæger':'Buejæger','trad-buejæger':'Trad. buejæger',rytterbue:'Rytterbue'}[state.profile.bueklasse]||state.profile.bueklasse
    const compEl=document.createElement('div')
    compEl.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Henter...</div></div>`
    el.appendChild(compEl)
    getDocs(collection(db,'bane_stats',bane,'runder')).then(snap=>{
      const alle=snap.docs.map(d=>d.data())
      const sammeKlasse=alle.filter(d=>d.kon===state.profile.kon&&d.bueklasse===state.profile.bueklasse)
      if(!sammeKlasse.length){
        compEl.innerHTML=`<div class="card" style="margin-bottom:16px;"><div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div><div style="color:var(--muted);font-size:13px;text-align:center;padding:8px;">Ingen andre ${konNavn} ${klasseNavn}-skytter har skudt denne bane endnu.</div></div>`
        return
      }
      const validEntries=sammeKlasse.filter(d=>(d.arrowsShot||d.numTargets*2)>0)
      const andresSnit=validEntries.length?(validEntries.reduce((s,d)=>s+d.score/(d.arrowsShot||d.numTargets*2),0)/validEntries.length).toFixed(2):'—'
      const diff=andresSnit!=='—'?Number(pilAvg)-Number(andresSnit):null
      const diffStr=diff!==null?(diff>0?'+':'')+diff.toFixed(2):'—'
      const diffColor=diff===null?'var(--muted)':diff>0?'#2aaa5a':diff<0?'var(--danger)':'var(--muted)'
      compEl.innerHTML=`<div class="card" style="margin-bottom:16px;">
        <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:12px;">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
          <div><div style="font-size:11px;color:var(--muted);">DIT SNT/PIL</div><div style="font-size:22px;font-weight:700;color:var(--acc);">${pilAvg}</div></div>
          <div style="border-left:1px solid var(--surface2);border-right:1px solid var(--surface2);">
            <div style="font-size:11px;color:var(--muted);">DIFFERENCE</div>
            <div style="font-size:22px;font-weight:700;color:${diffColor};">${diffStr}</div>
          </div>
          <div><div style="font-size:11px;color:var(--muted);">ANDRES SNT/PIL</div><div style="font-size:22px;font-weight:700;color:var(--txt);">${andresSnit}</div></div>
        </div>
        <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center;">Baseret på ${sammeKlasse.length} runde${sammeKlasse.length!==1?'r':''} fra andre skytter</div>
      </div>`
    }).catch(()=>{compEl.remove()})
  }
}

window.sendResults=async function(round){
  if(!round){showToast('Ingen runde at sende','error');return}
  const date=new Date().toLocaleDateString('da-DK')
  let body='3D Bueskydning - Resultater\n'
  body+='Dato: '+date+'\n'
  if(round.courseName)body+='Bane: '+round.courseName+'\n'
  body+='\n--- RESULTATER ---\n'
  const sorted=[...round.shooters].sort((a,b)=>calcTotal(b.scores)-calcTotal(a.scores))
  sorted.forEach((s,i)=>{body+='\n'+(i+1)+'. '+s.name+': '+calcTotal(s.scores)+' point'})
  body+='\n\n--- DETALJERET ---\n'
  round.shooters.forEach(s=>{
    body+='\n'+s.name+':\n'
    for(let t=0;t<round.numTargets;t++){
      const r=s.scores[t]||[null,null]
      const sum=(r[0]!=null&&r[0]!=='M'?Number(r[0]):0)+(r[1]!=null&&r[1]!=='M'?Number(r[1]):0)
      body+='  Mål '+(t+1)+': '+r.map(v=>v??'-').join('+')+' = '+sum+'\n'
    }
    const arr1=s.scores.map(t=>(t||[null,null])[0]).filter(v=>v!=null)
    const arr2=s.scores.map(t=>(t||[null,null])[1]).filter(v=>v!=null)
    const allArr=s.scores.flat().filter(v=>v!=null)
    const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
    const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
    const avgAll=allArr.length?(allArr.reduce((a,v)=>a+scoreVal(v),0)/allArr.length).toFixed(2):'—'
    const dist=calcDistribution(s.scores)
    body+='  Total: '+calcTotal(s.scores)+' point\n'
    body+='  Snit pil 1: '+avg1+' | Snit pil 2: '+avg2+' | Samlet snit: '+avgAll+'\n'
    body+='  Fordeling: '+Object.entries(dist).map(([k,v])=>k+':'+v+'x').join('  ')+'\n'
  })
  if(round.id)body+=`\n\nSe resultater i appen:\nhttps://bsk65.github.io/3D/?round=${round.id}\n(Kræver login med din bruger)`
  const emails=round.shooters.map(s=>state.friends.find(f=>f.id===s.id)?.email).filter(Boolean)
  const subject='3D Bueskydning - '+round.name
  const mailto='mailto:'+emails.join(',')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)
  window.location.href=mailto
}


async function removeVisitFromCourse(courseId, roundId){
  const ref2=doc(db,'courses',courseId)
  const snap=await getDoc(ref2)
  if(!snap.exists())return
  const visits=(snap.data().visits||[]).filter(v=>v.roundId!==roundId)
  await updateDoc(ref2,{visits})
  const course=state.courses.find(c=>c.id===courseId)
  if(course)course.visits=visits
}

window.openGuestModal=function(){document.getElementById('guest-name').value='';document.getElementById('guest-modal').classList.remove('hidden')}
window.addGuest=function(){const name=document.getElementById('guest-name').value.trim();if(!name)return;window.addParticipant(`guest-${Date.now()}`,name,true);document.getElementById('guest-modal').classList.add('hidden')}
// clean-v1 
// analyse2 
// rounds-fs 
// delete-round-fix 
// course-edit 
// visit-stats 
// stats-course 
// finish-fix 
// save-rounds 
// syntax-fix 
// delete-rounds  // delete-rounds 
// graph-yaxis 
// minimal-fix 
// pie-colors 
