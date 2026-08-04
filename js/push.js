// js/push.js — Web push-notifikationer (meetup-invitationer).
// Registrerer sw.js, beder om Notification-tilladelse, gemmer FCM-token på
// brugerens users/{uid}-dokument, og viser en toast ved push mens appen er åben.
// Selve afsendelsen sker server-side i functions/index.js (onMeetupCreated).

import { db, doc, updateDoc, messaging, messagingReady, getToken, onMessage } from './firebase-init.js'
import { state } from './state.js'
import { showToast } from './utils.js'
import { fetchMeetups, renderMeetupsList, updateMeetupBadge } from './meetups.js'

// Offentlig VAPID-nøgle fra Firebase Console → Project Settings → Cloud
// Messaging → Web configuration → Generate key pair. Ikke hemmelig.
const VAPID_KEY = 'BOJHqC2HeXd9Ru6EjuL7HEuAZuZ2MM86LPqPfVbeQsm8M8-wgT_u3QPWYFs0XN0vfMz_FS3rDgjXgCXXm0GkmZs'
const SW_URL = '/3D/sw.js'

export async function registerServiceWorker(){
  if(!('serviceWorker' in navigator))return null
  try{
    return await navigator.serviceWorker.register(SW_URL,{scope:import.meta.env.BASE_URL})
  }catch(e){console.warn('SW-registrering fejlede',e);return null}
}

export function shouldShowPushBanner(){
  return 'Notification' in window && Notification.permission==='default'
}

export async function enablePushNotifications(){
  // Notification.requestPermission() SKAL kaldes så tæt på klikket som muligt —
  // især Android Chrome kan stille-fejle (permission forbliver 'default') hvis
  // der ligger en await (fx messagingReady) før kaldet, da "user activation"
  // kan nå at udløbe. Derfor kaldes den allerførst, før noget andet async.
  let perm
  try{
    perm=await Notification.requestPermission()
  }catch(e){console.warn('Notification.requestPermission fejlede',e);showToast('Kunne ikke bede om tilladelse: '+e.message,'error');return false}
  if(perm==='denied'){showToast('Notifikationer blokeret i browseren — skal ændres i browserens side-indstillinger','error');return false}
  if(perm!=='granted')return false
  try{
    const supported=await messagingReady
    if(!supported||!messaging){showToast('Push-notifikationer understøttes ikke i denne browser','error');return false}
    const reg=await registerServiceWorker()
    if(!reg){showToast('Kunne ikke registrere service worker','error');return false}
    const token=await getToken(messaging,{vapidKey:VAPID_KEY,serviceWorkerRegistration:reg})
    if(!token){showToast('Kunne ikke hente push-token','error');return false}
    await updateDoc(doc(db,'users',state.user.uid),{fcmToken:token})
    return true
  }catch(e){console.warn('Push-opsætning fejlede',e);showToast('Push-fejl: '+e.message,'error');return false}
}

// Kaldes ved hver login — fornyer/gemmer token stille hvis tilladelse allerede er givet
// (tokens kan rotere over tid).
export function refreshPushTokenIfGranted(){
  if('Notification' in window && Notification.permission==='granted')enablePushNotifications()
}

export function listenForegroundPush(){
  messagingReady.then(supported=>{
    if(!supported||!messaging)return
    onMessage(messaging,payload=>{
      const d=payload.data||{}
      showToast(d.body||'Ny besked','info')
      fetchMeetups().then(()=>{renderMeetupsList();updateMeetupBadge()}).catch(()=>{})
    })
  })
}
