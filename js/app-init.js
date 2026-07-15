// js/app-init.js — DOMContentLoaded/auth-flow entrypoint-lim.
// Udtrukket fra main.js: alt der udelukkende drejer sig om opstart
// (DOMContentLoaded, login/logout, bane-dropdown-opsætning) og de sidste
// små window-onclick-handlere der ikke hørte hjemme i et af de øvrige
// moduler. Importeres som ren side-effekt fra main.js.
import { auth, db, storage, onAuthStateChanged, collection, doc, getDoc,
         getDocs, updateDoc, ref, uploadString, getDownloadURL } from './firebase-init.js'
import { state } from './state.js'
import { showToast } from './utils.js'
import { renderFriendsList, renderQuickFriends } from './friends.js'
import { fetchCourses, renderCoursesList, updateTargetInFirestore, compressImage } from './courses.js'
import { renderAdminSection } from './admin.js'
import { renderRoundsList } from './results.js'
import './analyse.js'
import { tryOpenPendingRound, tryResumeRound, curTargetIdx, updateTopBar,
         releaseWakeLock } from './round.js'
import { parseRoute, haversine, toggleGpsPause } from './gps.js'
import { lsLoad, lsSave } from './storage.js'

// auth.js registrerer sine egne window.*-handlere (login/opret/nulstil/logud)
// ved import. Auth-state-lytteren (onAuthStateChanged) bor herunder.
import './auth.js'

window.toggleGpsPause = toggleGpsPause
window.parseRoute = parseRoute

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

  // PWA install (Android/Chrome m.fl. — udløses af beforeinstallprompt)
  const PWA_DISMISS_KEY='archery_pwa_dismissed'
  const pwaDismissed=localStorage.getItem(PWA_DISMISS_KEY)==='1'
  let deferredPrompt=null
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault();deferredPrompt=e
    if(!pwaDismissed)document.getElementById('pwa-banner').classList.remove('hidden')
  })
  document.getElementById('pwa-install-btn')?.addEventListener('click',async()=>{
    if(!deferredPrompt)return
    deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null
    document.getElementById('pwa-banner').classList.add('hidden')
  })
  document.getElementById('pwa-dismiss-btn')?.addEventListener('click',()=>{
    document.getElementById('pwa-banner').classList.add('hidden')
    localStorage.setItem(PWA_DISMISS_KEY,'1')
  })

  // iOS Safari sender aldrig beforeinstallprompt — vis manuel vejledning i stedet
  const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream
  const isStandalone=window.navigator.standalone===true||window.matchMedia('(display-mode: standalone)').matches
  if(isIOS&&!isStandalone&&!pwaDismissed){
    document.getElementById('ios-install-banner')?.classList.remove('hidden')
  }
  document.getElementById('ios-dismiss-btn')?.addEventListener('click',()=>{
    document.getElementById('ios-install-banner').classList.add('hidden')
    localStorage.setItem(PWA_DISMISS_KEY,'1')
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
// (course-sel-dropdown) hører til runde-opsætnings-UI'en her.
window.populateCourseDropdown = populateCourseDropdown

function updateStartTargetDropdown(n){
  const sel=document.getElementById('start-target');sel.innerHTML=''
  for(let i=1;i<=n;i++){const o=document.createElement('option');o.value=i;o.textContent=i;sel.appendChild(o)}
}

// ─── QR ───────────────────────────────────────────────────────────────────────
window.showQR=function(){
  document.getElementById('qr-modal').classList.remove('hidden')
  const el=document.getElementById('qr-canvas');el.innerHTML=''
  if(typeof window.QRCode!=='undefined')new window.QRCode(el,{text:window.location.href,width:200,height:200,colorDark:'#1a3a1a',colorLight:'#fff'})
}

// ─── GÆST ─────────────────────────────────────────────────────────────────────
window.openGuestModal=function(){document.getElementById('guest-name').value='';document.getElementById('guest-modal').classList.remove('hidden')}
window.addGuest=function(){const name=document.getElementById('guest-name').value.trim();if(!name)return;window.addParticipant(`guest-${Date.now()}`,name,true);document.getElementById('guest-modal').classList.add('hidden')}
