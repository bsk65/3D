// js/main.js — Indgangspunkt

import { auth, db, storage, onAuthStateChanged,
         collection, doc, setDoc, getDoc, getDocs, deleteDoc,
         updateDoc, serverTimestamp,
         ref, uploadString, getDownloadURL, deleteObject } from './firebase-init.js'
import { state } from './state.js'
import { esc, showToast, showConfirm } from './utils.js'
import { renderFriendsList, renderQuickFriends } from './friends.js'
import { fetchCourses, renderCoursesList, updateTargetInFirestore, compressImage,
         removeVisitFromCourse } from './courses.js'
import { renderAdminSection } from './admin.js'
import { renderResults, renderRoundsList, showRoundPopup } from './results.js'
import './analyse.js'

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

// ─── AUTH ─────────────────────────────────────────────────────────────────────
// Login/opret/nulstil/logud + fejlbeskeder ligger i ./auth.js, som registrerer
// sine window.*-handlere ved import. Auth-state-lytteren forbliver herunder.
import './auth.js'

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

// courses.js kalder denne via window (undgår cirkulær import), da baneopsætning
// (course-sel-dropdown) hører til runde-opsætnings-UI'en her i main.js.
window.populateCourseDropdown = populateCourseDropdown

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

// ─── RESULTATER / RUNDELISTE ────────────────────────────────────────────────
// buildDistribution/renderResults/buildResultsTable/buildSummaryCards/
// buildActualResults/renderRoundsList/showRoundPopup/sendResults ligger nu i
// ./results.js.

// ─── COURSES ──────────────────────────────────────────────────────────────────
// Bane-CRUD, banedetalje (kort/besøg/rediger), mål-CRUD og godkendte-brugere
// ligger i ./courses.js. showVisitResults/showRouteOnMap og target-redigering
// under en aktiv runde (herunder) bruger tæt runde-state og forbliver her.
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

// ─── ADMIN ────────────────────────────────────────────────────────────────────
// Admin-panel (adminliste, brugerliste, tilføj/fjern admin) ligger i
// ./admin.js. renderAdminSection kaldes herfra af switchTab('friends').

// ─── QR ───────────────────────────────────────────────────────────────────────
window.showQR=function(){
  document.getElementById('qr-modal').classList.remove('hidden')
  const el=document.getElementById('qr-canvas');el.innerHTML=''
  if(typeof window.QRCode!=='undefined')new window.QRCode(el,{text:window.location.href,width:200,height:200,colorDark:'#1a3a1a',colorLight:'#fff'})
}

// calcAnalyseStats ligger nu i ./stats.js; re-eksporteres for testsuiten.
import { calcAnalyseStats } from './stats.js'
export { calcAnalyseStats }

// buildCompareHtml/renderAnalyse/initGraphPinch/analyseRound ligger nu i
// ./analyse.js. sendResults ligger i ./results.js.

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
