// js/main.js — Indgangspunkt

import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, 
         signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, signOut } from 'firebase/auth'
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, collection, doc, setDoc, getDoc, getDocs, deleteDoc,
         updateDoc, addDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage'

// ─── FIREBASE SETUP ───────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",
  authDomain: "archery-app-70e20.firebaseapp.com",
  projectId: "archery-app-70e20",
  storageBucket: "archery-app-70e20.firebasestorage.app",
  messagingSenderId: "1025324581093",
  appId: "1:1025324581093:web:03b41dbee9cc81c6eb540c"
}

const app  = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({tabManager: persistentMultipleTabManager()})
})
const storage = getStorage(app)


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
  deleteConfirm:{}, editFriendId:null, finishTap:0, abortTap:0
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
    await setDoc(doc(db,'users',cred.user.uid),{name,email,yam:name,'e-mail':email,created:serverTimestamp()})
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
          console.log('Henter profil for uid:', user.uid)
          ;[profileSnap, adminSnap] = await Promise.all([
            getDoc(doc(db,'users',user.uid)),
            getDoc(doc(db,'admins',user.uid))
          ])
          console.log('Profil:', profileSnap.exists(), profileSnap.data?.())
          break
        }catch(e){
          console.error('Profil fejl attempt', attempt, e.code, e.message)
          if(attempt<2) await new Promise(r=>setTimeout(r,2000*(attempt+1)))
          else{ state.profile={name:user.email,email:user.email}; state.isAdmin=false }
        }
      }
      if(profileSnap?.exists()){const d=profileSnap.data();state.profile={name:d.name||d.yam||user.email,email:d.email||d['e-mail']||user.email}}
      else if(!state.profile) state.profile={name:user.email,email:user.email}
      state.isAdmin=adminSnap?.exists()||false
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
      console.log('Runder fra Firestore:',newRounds.length)
    }
  }).catch(e=>console.warn('Hent runder:',e))

  // Hent baner fra Firestore
  console.log('Henter baner, user uid:', state.user?.uid)
  getDocs(collection(db,'courses')).then(snap=>{
    console.log('Baner hentet:', snap.docs.length, snap.docs.map(d=>d.id))
    const firestoreCourses = snap.docs.map(d=>{
      const data=d.data()
      return {id:d.id,name:data.name||data.yam||'—',numTargets:data.numTargets||data.antalMål||24,
        location:data.location||data.beliggenhed||'',targets:data.targets||data.mål||[],visits:data.visits||data.besøg||[]}
    })
    if(firestoreCourses.length){
      state.courses = firestoreCourses
      lsSave()
      renderCoursesList()
      populateCourseDropdown()
    }
  }).catch(err=>console.warn('courses:',err))

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
    if(c){tc.value=c.numTargets;tc.disabled=true}else{tc.disabled=false}
    updateStartTargetDropdown(c?c.numTargets:Number(tc.value))
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
  list.innerHTML=all.map(f=>`<div class="ac-item" onclick="selectFriend('${f.id}','${(f.name||'').replace(/'/g,"\\'")}','${(f.email||'').replace(/'/g,"\\'")}');document.getElementById('friend-search').value='';document.getElementById('ac-list').classList.add('hidden');">${f.name}${f.email?` <span style='font-size:11px;opacity:.6'>${f.email}</span>`:''}</div>`).join('')
  list.classList.remove('hidden')
}

window.selectFriend=function(id,name,email){
  if(!state.friends.find(f=>f.id===id)){state.friends.push({id,name,email});lsSave();renderFriendsList();renderQuickFriends()}
  window.addParticipant(id,name)
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
  if(target?.imageUrl||target?.photo){imgEl.src=target.imageUrl||target.photo;imgEl.classList.remove('hidden')}else imgEl.classList.add('hidden')
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
  try{await setDoc(doc(db,'users',state.user.uid,'active','round'),serializeRound(state.round))}catch(e){console.warn(e)}
}

// ─── RESUME ───────────────────────────────────────────────────────────────────
async function tryResumeRound(){
  try{
    const snap=await getDoc(doc(db,'users',state.user.uid,'active','round'))
    if(!snap.exists())return
    const data=snap.data()
    const age=Date.now()-(data.created?.toMillis?data.created.toMillis():(data.created||0))
    if(age>24*60*60*1000){await deleteDoc(doc(db,'users',state.user.uid,'active','round'));return}
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
  // Gem runde i Firestore
  setDoc(doc(db,'users',state.user.uid,'rounds',roundId),{...roundData,created:serverTimestamp()}).catch(e=>console.warn('Gem runde fejl:',e))

  const finished=state.round
  window._lastRound=finished
  state.round=null

  if(finished.courseId){
    const winner=findWinner(finished.shooters)
    addCourseVisit(finished.courseId,{
      roundId,date:new Date().toLocaleDateString('da-DK'),
      participants:finished.shooters.map(shooter=>shooter.name),
      winner:winner?.name,winnerScore:winner?calcTotal(winner.scores):0,
      gpsRoute:gpsData.route||null,gpsDuration:gpsData.duration||null,gpsDistance:gpsData.distance||null
    }).catch(console.warn)
  }
  deleteDoc(doc(db,'users',state.user.uid,'active','round')).catch(()=>{})
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
  deleteDoc(doc(db,'users',state.user.uid,'active','round')).catch(()=>{})
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
    const dist=calcDistribution(s.scores)
    const flat=s.scores.flat().filter(v=>v!=null)
    const totalArrows=flat.length
    const avg=totalArrows?(flat.reduce((a,v)=>a+scoreVal(v),0)/totalArrows).toFixed(2):0
    return `<div class="dist-card">
      <div class="dist-name">${s.name}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px;">
        <div style="text-align:center;background:var(--surface2);border-radius:8px;padding:6px;">
          <div style="font-size:10px;color:var(--muted);">SNT/PIL</div>
          <div style="font-size:20px;font-weight:700;color:var(--acc);">${avg}</div>
        </div>
        <div style="text-align:center;background:var(--surface2);border-radius:8px;padding:6px;">
          <div style="font-size:10px;color:var(--muted);">PILE</div>
          <div style="font-size:20px;font-weight:700;color:var(--acc);">${totalArrows}</div>
        </div>
      </div>
      ${Object.entries(dist).map(([k,v])=>`<div class="dist-row"><span>${k}</span><span>${v}x</span></div>`).join('')}
    </div>`
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
        if(state.user)deleteDoc(doc(db,'users',state.user.uid,'rounds',r.id)).catch(e=>console.warn(e))
        if(r.courseId)removeVisitFromCourse(r.courseId,r.id).catch(e=>console.warn(e))
        if(state.user)deleteDoc(doc(db,'users',state.user.uid,'rounds',r.id)).catch(e=>console.warn(e))
        if(state.user)deleteDoc(doc(db,'users',state.user.uid,'rounds',r.id)).catch(e=>console.warn(e))
        // Slet fra Firestore
        if(state.user)deleteDoc(doc(db,'users',state.user.uid,'rounds',r.id)).catch(e=>console.warn(e))
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
  document.getElementById('rpop-body').innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${round.name}</h3>`+buildResultsTable(round)+buildDistribution(round)+`<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>`
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
  const visits=course.visits||course.besøg||[]
  if(!visits.length){el.innerHTML='<div class="empty"><div class="empty-icon">📍</div>Ingen besøg endnu</div>';return}
  el.innerHTML=''
  visits.forEach((v,idx)=>{
    const card=document.createElement('div');card.className='visit-card'
    card.style.cursor='pointer'
    card.onclick=(e)=>{if(!e.target.closest('.btn-icon'))window.showVisitResults(v.roundId)}
    const durStr=v.gpsDuration?formatDuration(v.gpsDuration):null
    const distStr=v.gpsDistance?formatDistance(v.gpsDistance):null
    card.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;"><span style="font-weight:700;font-size:13px;">${v.date}</span><div style="display:flex;gap:6px;">${v.gpsRoute?`<button class="btn-icon" onclick="showRouteOnMap(parseRoute('${v.gpsRoute}'))">🗺️</button>`:''}<button class="btn-icon" style="color:var(--danger);" onclick="deleteVisit(${idx})">✕</button></div></div><div style="font-size:12px;color:var(--muted);">${(v.participants||[]).join(', ')}</div>${v.winner?`<div style="font-size:12px;color:var(--acc);font-weight:600;">🏆 ${v.winner} (${v.winnerScore} pt)</div>`:''}${distStr||durStr?`<div style="display:flex;gap:8px;margin-top:8px;">${distStr?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${distStr}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:''}${durStr?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${durStr}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:''}</div>`:''}`
    el.appendChild(card)
  })
}


window.showVisitResults=function(roundId){
  const round=state.rounds.find(r=>r.id===roundId)
  if(!round){alert('Runden er ikke gemt lokalt');return}
  const shooters=(round.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
  showRoundPopup({...round,shooters})
}

window.deleteVisit=async function(idx){
  if(!confirm('Slet dette besøg?'))return
  const ref2=doc(db,'courses',state.currentCourse.id)
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
  const targets=course.targets||[]
  let html=`
    <div class="card" style="margin-bottom:12px;">
      <div class="card-title">Baneinfo</div>
      <div class="fg"><label class="lbl">Banenavn</label><input type="text" id="edit-cname" value="${course.name}" /></div>
      <div class="fg"><label class="lbl">Lokation</label><input type="text" id="edit-cloc" value="${course.location||''}" /></div>
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
}

window.saveCourseEdit=async function(){
  const name=document.getElementById('edit-cname').value.trim()
  const loc=document.getElementById('edit-cloc').value.trim()
  if(!name)return
  await updateDoc(doc(db,'courses',state.currentCourse.id),{name,yam:name,location:loc,beliggenhed:loc})
  state.currentCourse.name=name;state.currentCourse.location=loc
  document.getElementById('course-detail-title').textContent=name;alert('Gemt!')
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
  alert(`Mål ${targets.length} tilføjet!`)
}

window.deleteTargetFromCourse=async function(idx){
  if(!state.currentCourse?.targets)return
  if(!confirm(`Slet mål ${idx+1}?`))return
  const targets=[...state.currentCourse.targets]
  targets.splice(idx,1)
  // Renumber
  targets.forEach((t,i)=>t.number=i+1)
  await updateDoc(doc(db,'courses',state.currentCourse.id),{targets,numTargets:targets.length})
  state.currentCourse.targets=targets
  state.currentCourse.numTargets=targets.length
  renderCourseEditForm(state.currentCourse)
}

window.setTargetGps=async function(idx){
  if(!state.currentCourse?.targets)return
  try{
    const pos=await getCurrentPosition()
    state.currentCourse.targets[idx].gps=pos
    await updateDoc(doc(db,'courses',state.currentCourse.id),{targets:state.currentCourse.targets})
    renderCourseEditForm(state.currentCourse)
    alert(`GPS sat for mål ${idx+1}!`)
  }catch(e){alert('GPS fejl: '+e.message)}
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
    alert('Foto gemt!')
  }catch(e){alert('Upload fejl: '+e.message)}
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
    alert('Foto gemt!')
  }catch(e){alert('Upload fejl: '+e.message)}
}

window.saveAllTargets=async function(){
  if(!state.currentCourse?.targets)return
  await updateDoc(doc(db,'courses',state.currentCourse.id),{targets:state.currentCourse.targets})
  alert('Alle mål gemt!')
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
  await deleteDoc(doc(db,'courses',state.currentCourse.id))
  document.getElementById('courses-list-view').classList.remove('hidden')
  document.getElementById('course-detail-view').classList.add('hidden')
}

window.doCreateCourse=async function(){
  const name=document.getElementById('new-course-name').value.trim()
  const loc=document.getElementById('new-course-loc').value.trim()
  const num=Number(document.getElementById('new-course-targets').value)||24
  if(!name)return
  const targets=Array.from({length:num},(_,i)=>({number:i+1,name:'',emoji:'',imageUrl:'',distance:null,gps:null}))
  await addDoc(collection(db,'courses'),{name,yam:name,numTargets:num,antalMål:num,location:loc,beliggenhed:loc,targets,mål:targets,created:serverTimestamp(),visits:[],besøg:[]})
  document.getElementById('create-course-modal').classList.add('hidden')
  document.getElementById('new-course-name').value=''
}

async function addCourseVisit(courseId,visitData){
  try{
    const ref2=doc(db,'courses',courseId);const snap=await getDoc(ref2)
    if(!snap.exists())return
    const visits=[visitData,...(snap.data().visits||snap.data().besøg||[])].slice(0,50)
    await updateDoc(ref2,{visits,besøg:visits})
  }catch(e){console.warn(e)}
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
    const snap=await getDocs(collection(db,'users'))
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
    const snap=await getDocs(collection(db,'users'))
    const user=snap.docs.find(d=>d.data().email===email||d.data()['e-mail']===email)
    if(!user){alert('Bruger ikke fundet');return}
    await setDoc(doc(db,'admins',user.id),{email,created:serverTimestamp()})
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
  const filter=['all','lastround'].includes(filterVal)?0:Number(filterVal)
  const bane=document.getElementById('analyse-bane')?.value||'all'
  const antalInput=Number(document.getElementById('analyse-antal')?.value)||0
  const allRounds=state.rounds.map(r=>({...r,shooters:(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))}))
  let filtered=bane==='all'?allRounds:allRounds.filter(r=>r.courseId===bane)
  const antal=antalInput||filter
  const rounds=antal?filtered.slice(0,antal):filtered
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
      if(t[0]!=null){if(t[0]==='M')distP1.M++;else{distP1[Number(t[0])]=(distP1[Number(t[0])]||0)+1;p1t+=Number(t[0]);p1n++}}
      if(t[1]!=null){if(t[1]==='M')distP2.M++;else{distP2[Number(t[1])]=(distP2[Number(t[1])]||0)+1;p2t+=Number(t[1]);p2n++}}
    })
  })
  const p1avg=p1n?(p1t/p1n).toFixed(2):0
  const p2avg=p2n?(p2t/p2n).toFixed(2):0
  const pilAvg=(p1n+p2n)?((p1t+p2t)/(p1n+p2n)).toFixed(2):0
  const numTargets=rounds[0]?.numTargets||24
  const targetAvgs=Array.from({length:numTargets},(_,ti)=>{
    let tot=0,cnt=0
    rounds.forEach(r=>{const s=getMe(r);if(!s)return;const row=s.scores[ti]||[null,null];row.forEach(v=>{if(v!=null&&v!=='M'){tot+=Number(v);cnt++}})})
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
          <div style="font-size:24px;font-weight:700;color:#2aaa5a;">Mål ${bestTarget.i+1}</div>
          <div style="font-size:13px;color:var(--muted);">⌀ ${bestTarget.v.toFixed(2)}</div>
        </div>
        <div style="background:rgba(204,51,51,0.15);border-radius:8px;padding:10px;">
          <div style="font-size:11px;color:var(--muted);">SVÆRESTE</div>
          <div style="font-size:24px;font-weight:700;color:var(--danger);">Mål ${worstTarget.i+1}</div>
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
    const r=28
    let pie=''
    if(tot===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="var(--surface2)"/>`}
    else if(v2===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="${colors[z]}"/>`}
    else if(v1===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="#5a3a8a"/>`}
    else{
      const pct=v1/tot,angle=pct*2*Math.PI
      const x1=r+r*Math.sin(0),y1=r-r*Math.cos(0)
      const x2=r+r*Math.sin(angle),y2=r-r*Math.cos(angle)
      const large=angle>Math.PI?1:0
      pie=`<path d="M${r},${r} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z" fill="${colors[z]}"/>
           <path d="M${r},${r} L${x2},${y2} A${r},${r} 0 ${1-large},1 ${x1},${y1} Z" fill="#5a3a8a"/>`
    }
    html+=`<div style="text-align:center;">
      <svg viewBox="0 0 ${r*2} ${r*2}" style="width:52px;height:52px;">${pie}</svg>
      <div style="font-weight:700;font-size:14px;color:${colors[z]}">${z}</div>
      <div style="font-size:10px;color:var(--muted);">${v1}/${v2}</div>
    </div>`
  })
  html+=`</div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:8px;font-size:11px;color:var(--muted);">
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--acc);margin-right:4px;vertical-align:middle;"></span>PIL 1</span>
      <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#5a3a8a;margin-right:4px;vertical-align:middle;"></span>PIL 2</span>
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
  const showTargetGraph=bane!=='all'||filterVal==='lastround'
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
    const dotsLargeSvg=validTA.map(({v,i})=>`<circle cx="${toX(i)}" cy="${toY(v)}" r="4" fill="var(--acc)"/><text x="${toX(i)}" y="${toY(v)-8}" text-anchor="middle" font-size="9" fill="var(--text)">${v.toFixed(1)}</text>`).join('')
    html+=`<div class="card" style="margin-bottom:16px;">
      <div style="font-family:var(--fd);font-size:13px;color:var(--muted);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
        <span>GENNEMSNIT PR. MÅL</span>
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
    </div>
    <div id="graph-fs" class="fs-ov hidden" onclick="this.classList.add('hidden')" style="align-items:center;justify-content:center;padding:20px;">
      <div style="background:var(--card);border-radius:16px;padding:16px;width:100%;max-width:600px;" onclick="event.stopPropagation()">
        <div style="font-family:var(--fd);font-size:14px;color:var(--muted);margin-bottom:8px;">GENNEMSNIT PR. MÅL</div>
        <svg viewBox="0 0 ${w} ${h}" style="width:100%;overflow:visible;">
          <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
          <line x1="${padL}" y1="${h-padB}" x2="${w-padR}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
          ${ticksSvg}
          <polyline points="${pts}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
          ${dotsLargeSvg}
          <text x="${padL}" y="${h-5}" font-size="9" fill="var(--muted)">1</text>
          <text x="${w-padR}" y="${h-5}" text-anchor="end" font-size="9" fill="var(--muted)">${numTargets}</text>
        </svg>
        <button class="btn btn-dark" style="width:100%;margin-top:12px;" onclick="document.getElementById('graph-fs').classList.add('hidden')">Luk</button>
      </div>
    </div>`
  }

  el.innerHTML=html
}

window.sendResults=async function(round){
  if(!round){alert('Ingen runde at sende');return}
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
    body+='  Total: '+calcTotal(s.scores)+' point\n'
  })
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
