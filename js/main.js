// js/main.js — Indgangspunkt

import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged, 
         signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, signOut } from 'firebase/auth'
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
         collection, doc, setDoc, getDoc, getDocs, deleteDoc,
         onSnapshot, updateDoc, addDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage'

// ─── FIREBASE SETUP ───────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",
  authDomain: "archery-app-70e20.firebaseapp.com",
  projectId: "bueskydning-app-70e20",
  storageBucket: "archery-app-70e20.firebasestorage.app",
  messagingSenderId: "1025324581093",
  appId: "1:1025324581093:web:03b41dbee9cc81c6eb540c"
}

const app  = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
})
const storage = getStorage(app)

setPersistence(auth, browserLocalPersistence).catch(console.error)

// ─── LOCAL STORAGE ────────────────────────────────────────────────────────────
const LS = 'archery_v5'
const LS_OLD = 'archery_v4'

function lsLoad() {
  try {
    const n = JSON.parse(localStorage.getItem(LS) || 'null')
    if (n) return n
    // Migrer fra gammel app - inkl. baner
    const o = JSON.parse(localStorage.getItem(LS_OLD) || '{}')
    return { friends: o.friends || [], rounds: o.rounds || [], courses: o.courses || [] }
  } catch(e) { return { friends: [], rounds: [], courses: [] } }
}

function lsSave() {
  try {
    localStorage.setItem(LS, JSON.stringify({
      friends: state.friends,
      rounds:  state.rounds.slice(0, 200),
      courses: state.courses
    }))
  } catch(e) {}
}

// ─── SCORING HELPERS ──────────────────────────────────────────────────────────
const SCORE_VALUES = [11, 10, 8, 5, 'M']

function scoreVal(v) { return (v === 'M' || v == null) ? 0 : Number(v) }

function parseScores(str) {
  if (!str) return []
  return str.split(';').map(t => t.split(',').map(v => v === 'M' ? 'M' : Number(v)))
}

function serializeScores(arr) {
  return arr.map(t => t.map(v => v == null ? 'M' : v).join(',')).join(';')
}

function calcTotal(scores) {
  return scores.flat().reduce((s, v) => s + scoreVal(v), 0)
}

function calcAverage(scores) {
  const all = scores.flat().filter(v => v != null)
  if (!all.length) return null
  return (all.reduce((s, v) => s + scoreVal(v), 0) / all.length).toFixed(1)
}

function calcTargetAverage(shooters, tIdx) {
  const vals = shooters.flatMap(s => (s.scores[tIdx]||[]).filter(v => v != null).map(scoreVal))
  if (!vals.length) return null
  return (vals.reduce((a,b) => a+b, 0) / vals.length).toFixed(1)
}

function calcDistribution(scores) {
  const d = {11:0, 10:0, 8:0, 5:0, M:0}
  scores.flat().forEach(v => {
    if (v === 'M') d.M++
    else if (v != null && d[Number(v)] !== undefined) d[Number(v)]++
  })
  return d
}

function findWinner(shooters) {
  if (!shooters.length) return null
  return shooters.reduce((b, s) => calcTotal(s.scores) > calcTotal(b.scores) ? s : b, shooters[0])
}

function isBelowThreshold(scores, threshold) {
  const all = scores.flat().filter(v => v != null)
  if (!all.length) return false
  return (all.reduce((s,v) => s + scoreVal(v), 0) / all.length) < threshold
}

function makeShooter(id, name, isGuest) { return { id, name, isGuest: !!isGuest, scores: [] } }

function normalizeScores(s, n) {
  while (s.scores.length < n) s.scores.push([null, null])
}

function countScored(shooters, n) {
  let c = 0
  for (let t = 0; t < n; t++) {
    if (shooters.every(s => { const r = s.scores[t]||[null,null]; return r[0]!=null && r[1]!=null })) c++
  }
  return c
}

function serializeRound(round) {
  return {
    name: round.name, courseId: round.courseId||null, courseName: round.courseName||null,
    numTargets: round.numTargets, startTarget: round.startTarget||1,
    created: round.created, completed: round.completed||null,
    gpsRoute: round.gpsRoute||null, gpsDuration: round.gpsDuration||null, gpsDistance: round.gpsDistance||null,
    traversalOrder: round.traversalOrder, traversalPos: round.traversalPos||0,
    shooters: round.shooters.map(s => ({ id:s.id, name:s.name, isGuest:s.isGuest||false,
      scores: serializeScores(s.scores) }))
  }
}

function deserializeRound(data) {
  return { ...data, shooters: (data.shooters||[]).map(s => ({ ...s, scores: parseScores(s.scores) })) }
}

// ─── GPS ──────────────────────────────────────────────────────────────────────
let _watchId=null, _tracking=false, _paused=false, _route=[], _startTime=null, _totalDist=0, _lastPoint=null, _timerInterval=null, _onUpdate=null

function parseRoute(str) {
  if (!str) return []
  return str.split(';').map(p => { const [lat,lng] = p.split(',').map(Number); return {lat,lng} })
}

function haversine(a,b) {
  const R=6371000, dLat=(b.lat-a.lat)*Math.PI/180, dLng=(b.lng-a.lng)*Math.PI/180
  const x=Math.sin(dLat/2)**2+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2
  return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))
}

function formatDuration(s) { return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}` }
function formatDistance(m) { return m<1000 ? `${Math.round(m)} m` : `${(m/1000).toFixed(2)} km` }

function startTracking(onUpdate) {
  if (!navigator.geolocation) return false
  _onUpdate=onUpdate; _route=[]; _totalDist=0; _lastPoint=null; _startTime=Date.now(); _paused=false; _tracking=true
  _watchId = navigator.geolocation.watchPosition(pos => {
    if (!_tracking||_paused) return
    const p = {lat:pos.coords.latitude, lng:pos.coords.longitude}
    if (_lastPoint) _totalDist += haversine(_lastPoint,p)
    _lastPoint=p; _route.push(p)
    _onUpdate && _onUpdate({lat:p.lat,lng:p.lng,distance:_totalDist,elapsed:Math.round((Date.now()-_startTime)/1000)})
  }, e=>console.warn(e), {enableHighAccuracy:true,maximumAge:5000,timeout:10000})
  _timerInterval = setInterval(()=>{
    if(_tracking&&!_paused&&_onUpdate) _onUpdate({lat:_lastPoint?.lat,lng:_lastPoint?.lng,distance:_totalDist,elapsed:Math.round((Date.now()-_startTime)/1000)})
  },1000)
  return true
}

window.toggleGpsPause = function toggleGpsPause() { _paused=!_paused; return _paused }

function stopTracking() {
  _tracking=false; _paused=false
  if(_watchId!==null){navigator.geolocation.clearWatch(_watchId);_watchId=null}
  clearInterval(_timerInterval); _timerInterval=null
  return {route:_route.map(p=>`${p.lat},${p.lng}`).join(';'), distance:Math.round(_totalDist), duration:_startTime?Math.round((Date.now()-_startTime)/1000):0}
}

function getCurrentPosition() {
  return new Promise((res,rej)=>{
    if(!navigator.geolocation){rej(new Error('GPS ikke understøttet'));return}
    navigator.geolocation.getCurrentPosition(p=>res({lat:p.coords.latitude,lng:p.coords.longitude}),rej,{enableHighAccuracy:true,timeout:10000})
  })
}

function findNearestTarget(targets,pos) {
  if(!targets?.length||!pos) return 0
  let minD=Infinity,idx=0
  targets.forEach((t,i)=>{if(!t.gps)return;const d=haversine(pos,t.gps);if(d<minD){minD=d;idx=i}})
  return idx
}

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  user:null, profile:null, isAdmin:false,
  friends:[], courses:[], rounds:[], round:null, course:null,
  currentCourse:null, courseMap:null, courseMapLayer:null,
  gpsTracking:false, warnThreshold:8,
  deleteConfirm:{}, editFriendId:null, finishTap:0, abortTap:0,
  unsubCourses:null
}

let wakeLock=null
async function acquireWakeLock(){try{if('wakeLock' in navigator)wakeLock=await navigator.wakeLock.request('screen')}catch(e){}}
function releaseWakeLock(){if(wakeLock){wakeLock.release();wakeLock=null}}

// ─── AUTH HELPERS ─────────────────────────────────────────────────────────────
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
  catch(err){ showAuthErr(err.code==='auth/invalid-credential'?'Ugyldig email eller kodeord.':'Der opstod en fejl: '+err.code) }
  finally{ btn.disabled=false; btn.textContent='LOG IND' }
}

window.doSignup = async function(){
  const name=document.getElementById('signup-name').value.trim()
  const email=document.getElementById('signup-email').value.trim()
  const pw=document.getElementById('signup-password').value
  if(!name||!email||!pw){showAuthErr('Udfyld alle felter.');return}
  const btn=document.querySelector('#signup-form .btn')
  btn.disabled=true; btn.textContent='...'
  try{
    const cred=await createUserWithEmailAndPassword(auth,email,pw)
    await setDoc(doc(db,'brugere',cred.user.uid),{name,email,yam:name,'e-mail':email,created:serverTimestamp()})
  }catch(err){showAuthErr('Fejl: '+err.code)}
  finally{btn.disabled=false;btn.textContent='OPRET KONTO'}
}

window.doForgot = async function(){
  const email=document.getElementById('login-email').value.trim()
  if(!email){showAuthErr('Indtast din email først.');return}
  try{await sendPasswordResetEmail(auth,email);showAuthErr('Nulstillingsmail sendt!','ok')}
  catch(err){showAuthErr('Fejl: '+err.code)}
}

window.doLogout = async function(){
  try{await signOut(auth)}catch(e){}
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', ()=>{
  onAuthStateChanged(auth, async user=>{
    if(user){
      state.user=user
      try{
        const [profileSnap, adminSnap] = await Promise.all([
          getDoc(doc(db,'brugere',user.uid)),
          getDoc(doc(db,'administratorer',user.uid))
        ])
        if(profileSnap.exists()){const d=profileSnap.data();state.profile={name:d.name||d.yam||user.email,email:d.email||d['e-mail']||user.email}}
        else state.profile={name:user.email,email:user.email}
        state.isAdmin = adminSnap.exists()
      }catch(e){state.profile={name:user.email,email:user.email};state.isAdmin=false}
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

  if('serviceWorker' in navigator) navigator.serviceWorker.register('/3D/sw.js').catch(()=>{})

  updateStartTargetDropdown(24)
  document.getElementById('target-count').addEventListener('change',e=>updateStartTargetDropdown(Number(e.target.value)))

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
    }catch(e){alert('Upload fejl: '+e.message)}
  })

  document.querySelectorAll('.modal').forEach(m=>{
    m.addEventListener('click',e=>{if(e.target===m)m.classList.add('hidden')})
  })
})

// ─── LOGIN/LOGOUT ─────────────────────────────────────────────────────────────
function onLogin(){
  document.getElementById('hdr-name').textContent=state.profile.name
  document.getElementById('auth-screen').classList.remove('active')
  document.getElementById('app-screen').classList.add('active')

  // Admin badge — allerede hentet i Promise.all
  document.getElementById('admin-badge').classList.toggle('hidden',!state.isAdmin)
  document.querySelectorAll('.admin-only').forEach(el=>el.classList.toggle('hidden',!state.isAdmin))

  // Load lokale data øjeblikkeligt
  const local=lsLoad()
  state.friends=local.friends||[]
  state.rounds=local.rounds||[]
  renderFriendsList()
  renderQuickFriends()
  renderRoundsList()

  // Load baner fra localStorage øjeblikkeligt
  const localCourses = lsLoad().courses || []
  state.courses = localCourses
  renderCoursesList()
  populateCourseDropdown()

  // Synkroniser baner fra Firestore i baggrunden
  if(state.unsubCourses)state.unsubCourses()
  state.unsubCourses=onSnapshot(collection(db,'kurser'),snap=>{
    const firestoreCourses = snap.docs.map(d=>{
      const data=d.data()
      return {id:d.id,name:data.name||data.yam||'—',numTargets:data.numTargets||data.antalMål||24,
        location:data.location||data.beliggenhed||'',targets:data.targets||data.mål||[],visits:data.visits||data.besøg||[]}
    })
    state.courses = firestoreCourses.length ? firestoreCourses : state.courses
    lsSave()
    renderCoursesList()
    populateCourseDropdown()
  },err=>console.warn('courses:',err))

  tryResumeRound()
}

function onLogout(){
  if(state.unsubCourses){state.unsubCourses();state.unsubCourses=null}
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
  document.querySelectorAll('.tab').forEach(el=>el.classList.remove('active'))
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'))
  document.getElementById(`tab-${tab}`)?.classList.add('active')
  document.querySelector(`.nav-btn[data-tab="${tab}"]`)?.classList.add('active')
  if(tab==='friends')renderAdminSection()
  if(tab==='courses'&&state.courseMap)setTimeout(()=>state.courseMap.invalidateSize(),100)
}

// ─── SETUP ────────────────────────────────────────────────────────────────────
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
    updateStartTargetDropdown(c?c.numTargets:Number(document.getElementById('target-count').value))
  }
}

function updateStartTargetDropdown(n){
  const sel=document.getElementById('start-target');sel.innerHTML=''
  for(let i=1;i<=n;i++){const o=document.createElement('option');o.value=i;o.textContent=i;sel.appendChild(o)}
}

window.addParticipant=function(id,name){
  if(document.getElementById(`chip-${id}`))return
  const div=document.createElement('div');div.className='pchip';div.id=`chip-${id}`
  div.innerHTML=`<span class="pchip-name">🎯 ${name}</span><button class="pchip-rm" onclick="this.closest('.pchip').remove()">✕</button>`
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

window.searchFriends=function(val){
  const list=document.getElementById('ac-list')
  if(!val.trim()){list.classList.add('hidden');return}
  const m=state.friends.filter(f=>f.name.toLowerCase().includes(val.toLowerCase()))
  if(!m.length){list.classList.add('hidden');return}
  list.innerHTML=m.map(f=>`<div class="ac-item" onclick="addParticipant('${f.id}','${f.name.replace(/'/g,"\\'")}');document.getElementById('friend-search').value='';document.getElementById('ac-list').classList.add('hidden');">${f.name}</div>`).join('')
  list.classList.remove('hidden')
}

// ─── START ROUND ──────────────────────────────────────────────────────────────
window.startRound=async function(){
  const name=document.getElementById('round-name').value.trim()||'Min Skydning'
  const courseId=document.getElementById('course-sel').value
  const numTargets=Number(document.getElementById('target-count').value)||24
  const startAt=Number(document.getElementById('start-target').value)-1
  const gpsAuto=document.getElementById('gps-auto-sw').classList.contains('on')
  const gpsTrack=document.getElementById('gps-track-sw').classList.contains('on')
  state.warnThreshold=Number(document.getElementById('warn-thresh').value)||8

  const parts=[{id:state.user.uid,name:state.profile.name,isGuest:false},...getParticipants().filter(p=>p.id!==state.user.uid)]
  state.course=courseId?(state.courses.find(c=>c.id===courseId)||null):null

  const shooters=parts.map(p=>{const s=makeShooter(p.id,p.name,p.isGuest);normalizeScores(s,numTargets);return s})
  let startIdx=startAt
  if(gpsAuto&&state.course?.targets){try{startIdx=findNearestTarget(state.course.targets,await getCurrentPosition())}catch(e){}}

  state.round={name,courseId:courseId||null,courseName:state.course?.name||null,numTargets,startTarget:startIdx+1,
    shooters,created:Date.now(),traversalOrder:buildOrder(startIdx,numTargets),traversalPos:0}

  if(gpsTrack){
    state.gpsTracking=startTracking(updateGpsBar)
    document.getElementById('gps-bar').classList.toggle('hidden',!state.gpsTracking)
    acquireWakeLock()
  }

  showActivePanel();renderShooters();updateTopBar()
  saveActiveRound()
}

function buildOrder(start,total){return Array.from({length:total},(_,i)=>(start+i)%total)}
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
  if(target?.imageUrl){imgEl.src=target.imageUrl;imgEl.classList.remove('hidden')}else imgEl.classList.add('hidden')
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
    card.innerHTML=`
      <div class="sh-head"><span style="font-size:18px;">🎯</span>${warn?'<span class="warn-dot"></span>':''}
        <span class="sh-name">${s.name}</span>
        <div class="sh-mini"><div class="sh-mini-lbl">RUNDE</div><div class="sh-mini-val">${total}</div></div>
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
  try{await setDoc(doc(db,'brugere',state.user.uid,'aktiv','runde'),serializeRound(state.round))}catch(e){console.warn(e)}
}

// ─── RESUME ───────────────────────────────────────────────────────────────────
async function tryResumeRound(){
  try{
    const snap=await getDoc(doc(db,'brugere',state.user.uid,'aktiv','runde'))
    if(!snap.exists())return
    const data=snap.data()
    const age=Date.now()-(data.created?.toMillis?data.created.toMillis():(data.created||0))
    if(age>24*60*60*1000){await deleteDoc(doc(db,'brugere',state.user.uid,'aktiv','runde'));return}
    if(confirm('Genoptag den igangværende runde?')){
      state.round=deserializeRound(data)
      state.round.traversalOrder=data.traversalOrder||buildOrder(0,state.round.numTargets)
      state.round.traversalPos=data.traversalPos||0
      if(state.round.courseId)state.course=state.courses.find(c=>c.id===state.round.courseId)||null
      showActivePanel();renderShooters();updateTopBar()
    }
  }catch(e){console.warn(e)}
}

// ─── NAV BUTTONS ──────────────────────────────────────────────────────────────
window.prevTarget=function(){
  if(!state.round||state.round.traversalPos<=0)return
  state.round.traversalPos--;saveActiveRound();renderShooters();updateTopBar()
  document.getElementById('scroll-area').scrollTop=0
}

window.nextTarget=function(){
  if(!state.round)return
  if(state.round.traversalPos<state.round.numTargets-1){
    state.round.traversalPos++;saveActiveRound();renderShooters();updateTopBar()
    document.getElementById('scroll-area').scrollTop=0
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

  const roundId='r_'+Date.now()
  const roundData={...serializeRound(state.round),completed:Date.now(),...gpsData,id:roundId}
  state.rounds.unshift({...roundData,created:{toDate:()=>new Date(),toMillis:()=>Date.now()}})
  lsSave();renderRoundsList()

  if(state.round.courseId){
    const winner=findWinner(state.round.shooters)
    addCourseVisit(state.round.courseId,{
      roundId,date:new Date().toLocaleDateString('da-DK'),
      participants:state.round.shooters.map(s=>s.name),
      winner:winner?.name,winnerScore:winner?calcTotal(winner.scores):0,
      gpsRoute:gpsData.route||null,gpsDuration:gpsData.duration||null,gpsDistance:gpsData.distance||null
    }).catch(console.warn)
  }
  deleteDoc(doc(db,'brugere',state.user.uid,'aktiv','runde')).catch(()=>{})

  const finished=state.round;state.round=null
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
  deleteDoc(doc(db,'brugere',state.user.uid,'aktiv','runde')).catch(()=>{})
  state.round=null;showSetupPanel()
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function renderResults(round){
  const winner=findWinner(round.shooters)
  document.getElementById('win-wrap').innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${winner?.name||'—'}</div><div class="win-score">${winner?calcTotal(winner.scores):0} point</div>`
  document.getElementById('res-table').innerHTML=buildResultsTable(round)
  document.getElementById('res-dist').innerHTML=buildDistribution(round)
}

function buildResultsTable(round){
  let h=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${round.shooters.map(s=>`<th>${s.name}</th>`).join('')}</tr>`
  for(let t=0;t<round.numTargets;t++){
    h+=`<tr><td class="tc">${t+1}</td>`
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

function buildDistribution(round){
  return '<div class="dist-grid">'+round.shooters.map(s=>{
    const d=calcDistribution(s.scores)
    return `<div class="dist-card"><div class="dist-name">${s.name}</div>${Object.entries(d).map(([k,v])=>`<div class="dist-row"><span>${k}</span><span>${v}x</span></div>`).join('')}</div>`
  }).join('')+'</div>'
}

// ─── ROUNDS LIST ──────────────────────────────────────────────────────────────
function renderRoundsList(){
  const el=document.getElementById('rounds-list')
  if(!state.rounds.length){el.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}
  el.innerHTML=''
  state.rounds.forEach(r=>{
    const shooters=(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
    const winner=shooters.length?findWinner(shooters):null
    const date=r.created?.toDate?r.created.toDate().toLocaleDateString('da-DK'):(r.created?new Date(r.created).toLocaleDateString('da-DK'):'—')
    const card=document.createElement('div');card.className='rcard'
    card.innerHTML=`<div class="rcard-info"><div class="rcard-name">${r.name||'Runde'}</div><div class="rcard-meta">${date} · ${r.courseName||r.numTargets+' mål'}</div><div class="rcard-win">🏆 ${winner?.name||'—'} (${winner?calcTotal(winner.scores):0} pt)</div></div><button class="del-btn" data-id="${r.id}">✕</button>`
    card.querySelector('.rcard-info').onclick=()=>showRoundPopup({...r,shooters})
    card.querySelector('.del-btn').onclick=e=>{
      const btn=e.currentTarget,key=`r-${r.id}`
      if(!state.deleteConfirm[key]){
        state.deleteConfirm[key]=true;btn.classList.add('conf');btn.textContent='Slet?'
        setTimeout(()=>{delete state.deleteConfirm[key];btn.classList.remove('conf');btn.textContent='✕'},3000)
      }else{
        delete state.deleteConfirm[key]
        state.rounds=state.rounds.filter(x=>x.id!==r.id);lsSave();renderRoundsList()
      }
    }
    el.appendChild(card)
  })
}

function showRoundPopup(round){
  let pop=document.getElementById('round-popup')
  if(!pop){
    pop=document.createElement('div');pop.id='round-popup';pop.className='rpop'
    pop.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`
    document.body.appendChild(pop)
  }
  pop.classList.remove('hidden')
  document.getElementById('rpop-body').innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${round.name}</h3>`+buildResultsTable(round)+buildDistribution(round)
}

// ─── COURSES ──────────────────────────────────────────────────────────────────
function renderCoursesList(){
  const el=document.getElementById('courses-list')
  if(!state.courses.length){el.innerHTML='<div class="empty"><div class="empty-icon">🗺️</div>Ingen baner endnu</div>';return}
  el.innerHTML=''
  state.courses.forEach(c=>{
    const card=document.createElement('div');card.className='ccard'
    card.innerHTML=`<div class="ccard-name">${c.name}</div><div class="ccard-meta">${c.numTargets} mål · ${c.location||'—'}</div>`
    card.onclick=()=>openCourseDetail(c);el.appendChild(card)
  })
}

function openCourseDetail(course){
  state.currentCourse=course
  document.getElementById('courses-list-view').classList.add('hidden')
  document.getElementById('course-detail-view').classList.remove('hidden')
  document.getElementById('course-detail-title').textContent=course.name
  window.switchSubtab('map');initCourseMap(course);renderVisits(course);renderCourseEditForm(course)
}

function initCourseMap(course){
  const mapEl=document.getElementById('course-map')
  if(state.courseMap){state.courseMap.remove();state.courseMap=null}
  state.courseMap=window.L.map(mapEl)
  window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Esri',maxZoom:19}).addTo(state.courseMap)
  const bounds=[];
  (course.targets||[]).forEach((t,i)=>{
    if(!t.gps)return;bounds.push([t.gps.lat,t.gps.lng])
    window.L.marker([t.gps.lat,t.gps.lng],{icon:window.L.divIcon({className:'',
      html:`<div style="background:#e8a020;color:#000;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;border:2px solid #fff;">${i+1}</div>`,
      iconSize:[28,28],iconAnchor:[14,14]})}).addTo(state.courseMap)
      .bindPopup(`<b>${i+1}. ${t.name||'Mål'}</b>${t.emoji?`<br>${t.emoji}`:''}${t.imageUrl?`<br><img src="${t.imageUrl}" style="max-width:140px;border-radius:4px;"/>`:''}`)
  })
  if(bounds.length)state.courseMap.fitBounds(bounds,{padding:[20,20]})
  else state.courseMap.setView([55.7,12.5],10)
}

function renderVisits(course){
  const el=document.getElementById('visits-list')
  const visits=course.visits||course.besøg||[]
  if(!visits.length){el.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}
  el.innerHTML=''
  visits.forEach((v,idx)=>{
    const card=document.createElement('div');card.className='visit-card'
    card.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${v.date}</span><div style="display:flex;gap:6px;">${v.gpsRoute?`<button class="btn-icon" onclick="showRouteOnMap(parseRoute('${v.gpsRoute}'))">🗺️</button>`:''}<button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${idx})">✕</button></div></div><div style="font-size:12px;color:var(--muted);">${(v.participants||[]).join(', ')}</div>${v.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${v.winner} (${v.winnerScore} pt)</div>`:''}`
    el.appendChild(card)
  })
}

window.deleteVisit=async function(idx){
  if(!confirm('Slet dette besøg?'))return
  const ref2=doc(db,'kurser',state.currentCourse.id)
  const snap=await getDoc(ref2)
  if(!snap.exists())return
  const visits=[...(snap.data().visits||snap.data().besøg||[])];visits.splice(idx,1)
  await updateDoc(ref2,{visits,besøg:visits})
  state.currentCourse.visits=visits;renderVisits(state.currentCourse)
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
  document.getElementById('course-edit-form').innerHTML=`<div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${course.name}" /></div><div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${course.location||''}" /></div><button class="btn btn-gold" onclick="saveCourseEdit()">Gem ændringer</button>`
}

window.saveCourseEdit=async function(){
  const name=document.getElementById('edit-cname').value.trim()
  const loc=document.getElementById('edit-cloc').value.trim()
  if(!name)return
  await updateDoc(doc(db,'kurser',state.currentCourse.id),{name,yam:name,location:loc,beliggenhed:loc})
  state.currentCourse.name=name;state.currentCourse.location=loc
  document.getElementById('course-detail-title').textContent=name;alert('Gemt!')
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
    catch(e){alert('GPS ikke tilgængeligt');sw.classList.remove('on')}
  }
}

window.doDeleteCourse=async function(){
  if(!state.currentCourse||!confirm(`Slet banen "${state.currentCourse.name}"?`))return
  await deleteDoc(doc(db,'kurser',state.currentCourse.id))
  document.getElementById('courses-list-view').classList.remove('hidden')
  document.getElementById('course-detail-view').classList.add('hidden')
}

window.doCreateCourse=async function(){
  const name=document.getElementById('new-course-name').value.trim()
  const loc=document.getElementById('new-course-loc').value.trim()
  const num=Number(document.getElementById('new-course-targets').value)||24
  if(!name)return
  const targets=Array.from({length:num},(_,i)=>({number:i+1,name:'',emoji:'',imageUrl:'',distance:null,gps:null}))
  await addDoc(collection(db,'kurser'),{name,yam:name,numTargets:num,antalMål:num,location:loc,beliggenhed:loc,targets,mål:targets,created:serverTimestamp(),visits:[],besøg:[]})
  document.getElementById('create-course-modal').classList.add('hidden')
  document.getElementById('new-course-name').value=''
}

async function addCourseVisit(courseId,visitData){
  try{
    const ref2=doc(db,'kurser',courseId);const snap=await getDoc(ref2)
    if(!snap.exists())return
    const visits=[visitData,...(snap.data().visits||snap.data().besøg||[])].slice(0,50)
    await updateDoc(ref2,{visits,besøg:visits})
  }catch(e){console.warn(e)}
}

async function updateTargetInFirestore(courseId,targetIndex,targetData){
  const ref2=doc(db,'kurser',courseId);const snap=await getDoc(ref2)
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
  try{const pos=await getCurrentPosition(),tIdx=curTargetIdx();await updateTargetInFirestore(state.round.courseId,tIdx,{gps:pos});if(state.course?.targets)state.course.targets[tIdx].gps=pos;alert('GPS gemt!')}
  catch(e){alert('GPS fejl: '+e.message)}
}

// ─── FRIENDS ──────────────────────────────────────────────────────────────────
function renderFriendsList(){
  const el=document.getElementById('friends-list')
  if(!state.friends.length){el.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}
  el.innerHTML=''
  state.friends.forEach(f=>{
    const card=document.createElement('div');card.className='fcard'
    card.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${f.name}</div><div class="fmeta">${[f.email,f.phone,f.club,f.bowType].filter(Boolean).join(' · ')}</div></div><div class="factions"><button class="btn-icon" onclick='openFriendModal(${JSON.stringify(f)})'>✏️</button><button class="btn-icon" style="color:var(--danger);" onclick="doDeleteFriend('${f.id}','${f.name.replace(/'/g,"\\'")}')">🗑</button></div>`
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
  const data={name:document.getElementById('f-name').value.trim(),email:document.getElementById('f-email').value.trim(),phone:document.getElementById('f-phone').value.trim(),club:document.getElementById('f-club').value.trim(),bowType:document.getElementById('f-bow').value}
  if(!data.name)return
  if(state.editFriendId){const idx=state.friends.findIndex(f=>f.id===state.editFriendId);if(idx!==-1)state.friends[idx]={...data,id:state.editFriendId};else state.friends.push({...data,id:state.editFriendId})}
  else state.friends.push({...data,id:'f_'+Date.now()})
  lsSave();document.getElementById('friend-modal').classList.add('hidden');renderFriendsList();renderQuickFriends()
}

window.doDeleteFriend=function(id,name){
  if(!confirm(`Slet ${name}?`))return
  state.friends=state.friends.filter(f=>f.id!==id);lsSave();renderFriendsList();renderQuickFriends()
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
async function renderAdminSection(){
  if(!state.isAdmin)return
  document.getElementById('admin-section').classList.remove('hidden')
  try{
    const snap=await getDocs(collection(db,'brugere'))
    const el=document.getElementById('users-list');el.innerHTML=''
    snap.docs.forEach(u=>{
      const d=u.data(),row=document.createElement('div');row.className='urow'
      const date=d.created?.toDate?d.created.toDate().toLocaleDateString('da-DK'):'—'
      row.innerHTML=`<span class="un">${d.name||d.yam||'—'}</span><span class="ue">${d.email||d['e-mail']||''}</span><span class="ud">${date}</span>`
      el.appendChild(row)
    })
  }catch(e){console.warn(e)}
}

window.doAddAdmin=async function(){
  const email=document.getElementById('admin-email').value.trim();if(!email)return
  try{
    const snap=await getDocs(collection(db,'brugere'))
    const user=snap.docs.find(d=>d.data().email===email||d.data()['e-mail']===email)
    if(!user){alert('Bruger ikke fundet');return}
    await setDoc(doc(db,'administratorer',user.id),{email,created:serverTimestamp()})
    alert(`${user.data().name||email} er nu admin`)
    document.getElementById('admin-email').value=''
  }catch(e){alert('Fejl: '+e.message)}
}

// ─── QR ───────────────────────────────────────────────────────────────────────
window.showQR=function(){
  document.getElementById('qr-modal').classList.remove('hidden')
  const el=document.getElementById('qr-canvas');el.innerHTML=''
  if(typeof window.QRCode!=='undefined')new window.QRCode(el,{text:window.location.href,width:200,height:200,colorDark:'#1a3a1a',colorLight:'#fff'})
}

// ─── MODALS ───────────────────────────────────────────────────────────────────
window.openGuestModal=function(){document.getElementById('guest-name').value='';document.getElementById('guest-modal').classList.remove('hidden')}
window.addGuest=function(){const name=document.getElementById('guest-name').value.trim();if(!name)return;window.addParticipant(`guest-${Date.now()}`,name,true);document.getElementById('guest-modal').classList.add('hidden')}
