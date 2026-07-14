// js/round.js — Kernen: aktiv runde. Opsætning/start, skydevisning (top-bar +
// skytte-kort + score-knapper), navigation mellem mål, afslut/afbryd, gem/
// genoptag aktiv runde (Firestore users/{uid}/aktiv/runde, max 24t), samt
// target-redigering under en aktiv runde.
//
// tryOpenPendingRound/tryResumeRound/curTargetIdx/updateTopBar/releaseWakeLock
// kaldes direkte af main.js (DOMContentLoaded/onLogin/onLogout) og
// eksporteres derfor normalt. Resten er self-registrerende window.*-handlere.

import { state } from './state.js'
import { esc, showToast, showConfirm } from './utils.js'
import { lsSave } from './storage.js'
import { SCORE_VALUES, scoreVal, calcTotal, calcTargetAverage, isBelowThreshold,
         makeShooter, normalizeScores, countScored, serializeRound,
         deserializeRound, buildOrder, parseScores } from './scoring.js'
import { findNearestTarget, getCurrentPosition, startTracking, stopTracking,
         formatDuration, formatDistance } from './gps.js'
import { db, doc, setDoc, getDoc, deleteDoc, serverTimestamp } from './firebase-init.js'
import { renderRoundsList, renderResults, showRoundPopup } from './results.js'
import { updateTargetInFirestore } from './courses.js'

// ─── WAKE LOCK ────────────────────────────────────────────────────────────────
let wakeLock=null
async function acquireWakeLock(){try{if('wakeLock' in navigator)wakeLock=await navigator.wakeLock.request('screen')}catch(e){}}
export function releaseWakeLock(){if(wakeLock){wakeLock.release();wakeLock=null}}

// ─── PENDING ROUND (åbnet via ?round=id-link) ────────────────────────────────
export function tryOpenPendingRound(){
  if(!state.pendingRound)return
  const r=state.rounds.find(x=>x.id===state.pendingRound)
  if(!r)return
  state.pendingRound=null
  const shooters=(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
  setTimeout(()=>showRoundPopup({...r,shooters}),300)
}

function getParticipants(){
  return Array.from(document.querySelectorAll('.pchip')).map(c=>({
    id:c.id.replace('chip-',''),
    name:c.querySelector('.pchip-name').textContent.replace('🎯 ','').trim(),
    isGuest:c.id.startsWith('chip-guest-')
  }))
}

window.addParticipant=function(id,name){
  if(document.getElementById(`chip-${id}`))return
  const div=document.createElement('div');div.className='pchip';div.id=`chip-${id}`
  div.innerHTML=`<span class="pchip-name">🎯 ${esc(name)}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`
  document.getElementById('p-list').appendChild(div)
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

export function curTargetIdx(){return state.round.traversalOrder[state.round.traversalPos]}

// ─── PANELS ───────────────────────────────────────────────────────────────────
window.showSetupPanel=function showSetupPanel(){document.getElementById('setup-panel').classList.remove('hidden');document.getElementById('active-panel').classList.add('hidden');document.getElementById('results-panel').classList.add('hidden')}
window.showActivePanel=function showActivePanel(){document.getElementById('setup-panel').classList.add('hidden');document.getElementById('active-panel').classList.remove('hidden');document.getElementById('results-panel').classList.add('hidden')}
window.showResultsPanel=function showResultsPanel(){document.getElementById('setup-panel').classList.add('hidden');document.getElementById('active-panel').classList.add('hidden');document.getElementById('results-panel').classList.remove('hidden')}

// ─── SHOOTING ─────────────────────────────────────────────────────────────────
export function updateTopBar(){
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
export async function tryResumeRound(){
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

// ─── BESØG/RUTE PÅ KORT (viser en tidligere runde igen) ──────────────────────
// Ikke reelt "aktiv runde"-logik, men flyttet hertil frem for at blive i
// main.js — begge peger ind i runde/bane-visning (showRoundPopup/courseMap).
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

// ─── TARGET-REDIGERING UNDER AKTIV RUNDE ─────────────────────────────────────
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
