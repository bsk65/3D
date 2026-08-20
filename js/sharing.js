// js/sharing.js — "Må jeg kigge med?": anmod om at se en vens færdige runder.
// Firestore-primær (ingen localStorage) — samme tankegang som meetups.js:
// et delt forhold mellem to konti, ikke lokal reference som venner/runder.
// Dokument-id i shareRequests er deterministisk (ownerUid_viewerUid), så
// firestore.rules kan slå status op med get()/exists() ved læsning af
// users/{ownerUid}/rounds — se rules-kommentaren der.
//
// Registrerer window.requestViewAccess/acceptShareRequest/declineShareRequest/
// endSharing/cancelShareRequest som HTML-handlere ved import.
// fetchShareRequests/renderSharingSection/getViewableUsers/fetchViewedRounds/
// updateShareBadge/markShareRequestsSeen eksporteres — kaldes fra app-init.js
// (login-flow, switchTab) og analyse.js.

import { state } from './state.js'
import { esc, showToast, showConfirm } from './utils.js'
import { lsSave } from './storage.js'
import { db, collection, doc, getDoc, setDoc, updateDoc, deleteDoc, getDocs, query, where, serverTimestamp } from './firebase-init.js'

const STATUS_LABELS = { afventer:'Afventer godkendelse', accepteret:'Godkendt ✅', afvist:'Afvist ❌' }
const SEEN_KEY = 'archery_share_requests_seen'

function reqId(ownerUid,viewerUid){ return `${ownerUid}_${viewerUid}` }

// ─── HENT ───────────────────────────────────────────────────────────────────
// Firestore har ikke OR — to simple queries merges client-side (ejer ELLER seer),
// samme mønster som fetchMeetups.
export async function fetchShareRequests(){
  if(!state.user)return
  try{
    const [asOwner,asViewer]=await Promise.all([
      getDocs(query(collection(db,'shareRequests'),where('ownerUid','==',state.user.uid))),
      getDocs(query(collection(db,'shareRequests'),where('viewerUid','==',state.user.uid)))
    ])
    const map=new Map()
    asOwner.docs.forEach(d=>map.set(d.id,{id:d.id,...d.data()}))
    asViewer.docs.forEach(d=>map.set(d.id,{id:d.id,...d.data()}))
    state.shareRequests=[...map.values()]
  }catch(e){console.warn('Hent delingsanmodninger:',e)}
}

// ─── BADGE (uset-tæller på Venner-fanens ikon) ─────────────────────────────
// Kun NYE indkommende anmodninger (nogen har bedt om at måtte se ens egne
// resultater) tæller som "notifikation" — hverken egne udestående anmodninger
// eller allerede accepterede/afviste forhold, jf. brugerens ønske om besked
// "når man bliver anmodet om at dele resultater".
export function getUnseenShareRequestCount(shareRequests,ownerUid,lastSeenAt){
  return shareRequests.filter(r=>{
    if(r.ownerUid!==ownerUid||r.status!=='afventer')return false
    const t=r.createdAt?.toMillis?.()??(typeof r.createdAt==='number'?r.createdAt:0)
    return t>lastSeenAt
  }).length
}

export function updateShareBadge(){
  const el=document.getElementById('share-badge');if(!el)return
  const lastSeen=Number(localStorage.getItem(SEEN_KEY)||0)
  const n=getUnseenShareRequestCount(state.shareRequests,state.user?.uid,lastSeen)
  el.classList.toggle('hidden',n===0)
  el.textContent=n
}

export function markShareRequestsSeen(){
  localStorage.setItem(SEEN_KEY,String(Date.now()))
  updateShareBadge()
}

// Liste over personer man selv (som seer) er godkendt til at se — bruges af
// analyse.js's seer-dropdown.
export function getViewableUsers(){
  if(!state.user)return []
  return state.shareRequests
    .filter(r=>r.viewerUid===state.user.uid&&r.status==='accepteret')
    .map(r=>({uid:r.ownerUid,name:r.ownerName}))
    .sort((a,b)=>a.name.localeCompare(b.name,'da'))
}

// Henter en anden brugers færdige runder (kun tilladt af firestore.rules hvis
// et accepteret shareRequests-dokument findes, og kun runder afsluttet efter
// godkendelsen — se canViewSharedRound i firestore.rules).
// Kan IKKE gøres som én collection-query: Firestore's regel-motor understøtter
// get()-opslag i et andet dokument (her: shareRequests) pålideligt for
// enkelt-dokument-læsninger, men ikke for list/query-forespørgsler — der
// afviser Firestore forespørgslen med "Missing or insufficient permissions"
// uanset filter, også selvom et filter beviseligt ikke kunne ramme noget
// dokument der fejler reglen (afprøvet). Derfor slås runde-id'erne op via et
// separat indeks (roundIndex på selve users/{uid}-dokumentet, som enhver
// logget ind bruger allerede må læse, se onLogin i app-init.js), og hver
// kvalificerende runde hentes bagefter enkeltvis med getDoc — det virker,
// fordi canViewSharedRound-reglen evalueres korrekt for enkelt-læsninger.
export async function fetchViewedRounds(uid){
  try{
    const req=state.shareRequests.find(r=>r.ownerUid===uid&&r.viewerUid===state.user?.uid&&r.status==='accepteret')
    const cutoff=(req?.acceptedAt||req?.updatedAt)?.toMillis?.()??0
    const profileSnap=await getDoc(doc(db,'users',uid))
    const idx=profileSnap.data()?.roundIndex||[]
    const ids=idx.filter(e=>(e.completed||0)>cutoff).map(e=>e.id)
    const docs=await Promise.all(ids.map(id=>getDoc(doc(db,'users',uid,'rounds',id)).catch(()=>null)))
    const rounds=docs.filter(d=>d?.exists()).map(d=>({...d.data(),id:d.id})).sort((a,b)=>{
      const ta=a.completed||a.created||0
      const tb=b.completed||b.created||0
      return (typeof tb==='number'?tb:tb.toMillis?.()??0)-(typeof ta==='number'?ta:ta.toMillis?.()??0)
    })
    state.viewedRounds[uid]=rounds
    return rounds
  }catch(e){console.warn('Hent delte runder:',e);state.viewedRounds[uid]=[];return []}
}

// ─── VISNING (Venner-fanen) ─────────────────────────────────────────────────
export function renderSharingSection(){
  const el=document.getElementById('sharing-list');if(!el)return
  const me=state.user?.uid
  const incoming=state.shareRequests.filter(r=>r.ownerUid===me&&r.status==='afventer')
  const granted=state.shareRequests.filter(r=>r.ownerUid===me&&r.status==='accepteret')
  const viewing=state.shareRequests.filter(r=>r.viewerUid===me&&r.status==='accepteret')
  if(!incoming.length&&!granted.length&&!viewing.length){
    el.innerHTML='<div class="share-empty">Anmod om at se en vens resultater ved at trykke "🔎 Må jeg kigge med?" på personen i din venneliste ovenfor.</div>'
    return
  }
  let html=''
  if(incoming.length){
    html+=`<div class="share-group-title">Anmodninger om at se dine resultater</div>`
    incoming.forEach(r=>{
      html+=`<div class="share-card">
        <div class="share-name">${esc(r.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-gold btn-sm" onclick="acceptShareRequest('${r.id}')">Accepter</button>
          <button class="btn btn-dark btn-sm" onclick="declineShareRequest('${r.id}')">Afvis</button>
        </div>
      </div>`
    })
  }
  if(granted.length){
    html+=`<div class="share-group-title">Du deler resultater med</div>`
    granted.forEach(r=>{
      html+=`<div class="share-card">
        <div class="share-name">${esc(r.viewerName)}</div>
        <div class="share-actions">
          <button class="btn btn-red btn-sm" onclick="endSharing('${r.id}')">Afslut deling</button>
        </div>
      </div>`
    })
  }
  if(viewing.length){
    html+=`<div class="share-group-title">Du kan se resultater for</div>`
    viewing.forEach(r=>{
      html+=`<div class="share-card">
        <div class="share-name">${esc(r.ownerName)}</div>
        <div class="share-actions">
          <button class="btn btn-dark btn-sm" onclick="window.switchTab('analyse');window.setAnalyseViewer('${r.ownerUid}')">Se i Analyse</button>
        </div>
      </div>`
    })
  }
  el.innerHTML=html
}

// ─── HANDLINGER ─────────────────────────────────────────────────────────────
// Kun venner med en reel Firebase-konto kan anmodes. Manuelt tilføjede venner
// (indtastning uden søgning) har typisk et lokalt genereret id i stedet for
// personens rigtige uid — requestViewAccess falder i så fald tilbage til at
// slå kontoen op via vennens gemte e-mail, se nedenfor.
window.requestViewAccess=async function(ownerUid,ownerName){
  if(!state.user)return
  if(ownerUid===state.user.uid){showToast('Du kan ikke anmode om at se dine egne resultater','error');return}
  try{
    let ownerExists=(await getDoc(doc(db,'users',ownerUid))).exists()
    if(!ownerExists){
      // Vennens gemte id matcher ingen konto — sker for venner tilføjet manuelt
      // ("Tilføj ven" uden at vælge fra søgeresultaterne), som får et lokalt
      // genereret id i stedet for personens rigtige uid. Prøv at finde kontoen
      // via vennens gemte e-mail, og "helbred" venne-posten så fremtidige
      // opslag rammer direkte.
      const friend=state.friends.find(f=>f.id===ownerUid)
      if(friend?.email){
        const usersSnap=await getDocs(collection(db,'users'))
        const match=usersSnap.docs.find(d=>{
          const u=d.data();const ue=(u.email||u['e-mail']||'').toLowerCase()
          return ue&&ue===friend.email.toLowerCase()
        })
        if(match){
          ownerUid=match.id;ownerExists=true
          friend.id=ownerUid;lsSave()
          setDoc(doc(db,'users',state.user.uid,'friends',ownerUid),friend).catch(e=>console.warn(e))
        }
      }
    }
    if(!ownerExists){showToast(`${ownerName} er ikke registreret i appen`,'error');return}
    await setDoc(doc(db,'shareRequests',reqId(ownerUid,state.user.uid)),{
      ownerUid, ownerName,
      viewerUid:state.user.uid, viewerName:state.profile?.name||'—',
      status:'afventer', createdAt:serverTimestamp(), updatedAt:serverTimestamp()
    })
    showToast('Anmodning sendt','success')
    await fetchShareRequests();renderSharingSection();window.renderFriendsList?.()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

window.cancelShareRequest=async function(id){
  try{
    await deleteDoc(doc(db,'shareRequests',id))
    state.shareRequests=state.shareRequests.filter(r=>r.id!==id)
    renderSharingSection();window.renderFriendsList?.()
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

window.acceptShareRequest=async function(id){
  try{
    // acceptedAt er ankerpunktet firestore.rules bruger til kun at give adgang
    // til runder afsluttet EFTER denne godkendelse — ikke hele historikken.
    await updateDoc(doc(db,'shareRequests',id),{status:'accepteret',acceptedAt:serverTimestamp(),updatedAt:serverTimestamp()})
    const r=state.shareRequests.find(x=>x.id===id);if(r)r.status='accepteret'
    renderSharingSection();updateShareBadge()
    showToast('Deling accepteret','success')
  }catch(e){showToast('Fejl: '+e.message,'error')}
}

window.declineShareRequest=function(id){
  showConfirm('Afvis denne anmodning?',async()=>{
    try{
      await updateDoc(doc(db,'shareRequests',id),{status:'afvist',updatedAt:serverTimestamp()})
      const r=state.shareRequests.find(x=>x.id===id);if(r)r.status='afvist'
      renderSharingSection();updateShareBadge()
    }catch(e){showToast('Fejl: '+e.message,'error')}
  })
}

window.endSharing=function(id){
  showConfirm('Afslut denne deling? Personen mister med det samme adgang til dine resultater.',async()=>{
    try{
      await deleteDoc(doc(db,'shareRequests',id))
      state.shareRequests=state.shareRequests.filter(r=>r.id!==id)
      renderSharingSection()
      showToast('Deling afsluttet','success')
    }catch(e){showToast('Fejl: '+e.message,'error')}
  })
}
