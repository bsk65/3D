// js/admin.js — Admin-panel: adminliste, brugerliste (kun super-admin),
// tilføj/fjern admin. Admin-check er doc.exists() på admins/{uid} (sat i
// main.js' auth-state-lytter, ligger stadig der).
//
// renderAdminSection kaldes af main.js' switchTab('friends') og eksporteres
// derfor normalt. filterUsers/doAddAdmin/doRemoveAdmin er HTML onclick-
// handlere der selv-registrerer sig på window.* ved import.

import { state } from './state.js'
import { esc, showToast } from './utils.js'
import { db, collection, doc, getDocs, setDoc, deleteDoc, serverTimestamp } from './firebase-init.js'

let _allUsers=[]

export async function renderAdminSection(){
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
  el.innerHTML='<div class="admin-hint">Henter admins…</div>'
  const snap=await getDocs(collection(db,'admins'))
  if(snap.empty){el.innerHTML='<div class="admin-hint">Ingen admins fundet</div>';return}
  el.innerHTML='<div class="admin-list-label">NUVÆRENDE ADMINISTRATORER</div>'
  snap.docs.forEach(d=>{
    const row=document.createElement('div')
    row.className='admin-row'
    const email=d.data().email||d.id
    const isMe=d.id===state.user?.uid
    row.innerHTML=`<span class="admin-row-email">${esc(email)}${isMe?' <span class="admin-you-tag">(dig)</span>':''}</span>`
    if(state.isSuperAdmin&&!isMe){
      const btn=document.createElement('button')
      btn.className='btn btn-dark btn-sm admin-remove-btn'
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
  const chips=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<span class="bow-chip"><b>${v}</b> ${esc(_bowLabels[k]||k)}</span>`).join('')
  summaryEl.innerHTML=`<div class="bow-chips-wrap">${chips}</div>`
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
