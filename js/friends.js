// js/friends.js — Venneliste: visning, søgning, tilføj/rediger/slet.
// Venner er primær-lokale (localStorage via lsSave) med Firestore som backup.
// Registrerer window.searchFriends/selectFriend/openFriendModal/saveFriendModal/
// doDeleteFriend som HTML-handlere ved import. renderFriendsList og
// renderQuickFriends eksporteres, da main.js kalder dem (login/sync).
//
// addParticipant/getParticipants (runde-opsætning) forbliver i main.js;
// dette modul kalder window.addParticipant.

import { state } from './state.js'
import { esc, showConfirm } from './utils.js'
import { lsSave } from './storage.js'
import { db, doc, setDoc, deleteDoc, collection, getDocs } from './firebase-init.js'

// Fuld venneliste på Venner-fanen.
export function renderFriendsList(){
  const el=document.getElementById('friends-list')
  if(!state.friends.length){el.innerHTML='<div class="empty"><div class="empty-icon">👥</div>Ingen venner endnu</div>';return}
  el.innerHTML=''
  state.friends.forEach(f=>{
    const card=document.createElement('div');card.className='fcard'
    card.innerHTML=`<div class="favatar">🎯</div><div class="finfo"><div class="fname">${esc(f.name)}</div><div class="fmeta">${[f.email,f.phone,f.club,f.bowType].filter(Boolean).map(esc).join(' · ')}</div></div><div class="factions"><button class="btn-icon frd-edit">✏️</button><button class="btn-icon frd-del">🗑</button></div>`
    card.querySelector('.frd-edit').addEventListener('click',()=>openFriendModal(f))
    card.querySelector('.frd-del').addEventListener('click',()=>doDeleteFriend(f.id,f.name))
    el.appendChild(card)
  })
}

// Hurtig-knapper til at tilføje venner som deltagere i opsætningen.
export function renderQuickFriends(){
  const el=document.getElementById('qfriends');el.innerHTML=''
  state.friends.forEach(f=>{
    const btn=document.createElement('button');btn.className='qfbtn';btn.textContent=f.name
    btn.onclick=()=>window.addParticipant(f.id,f.name);el.appendChild(btn)
  })
}

// Autocomplete-søgning i lokale venner + registrerede brugere i Firestore.
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

// Vælger en ven fra søgning: gemmer lokalt + Firestore-backup (hvis ny) og tilføjer som deltager.
window.selectFriend=function(id,name,email){
  if(!state.friends.find(f=>f.id===id)){
    const f={id,name,email}
    state.friends.push(f);lsSave();renderFriendsList();renderQuickFriends()
    if(state.user)setDoc(doc(db,'users',state.user.uid,'friends',id),f).catch(e=>console.warn(e))
  }
  window.addParticipant(id,name)
}

// Åbner tilføj/rediger-modal for en ven.
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

// Gemmer ven (opret/rediger) lokalt og som backup i Firestore.
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

// Sletter en ven lokalt og i Firestore-backup.
window.doDeleteFriend=function(id,name){
  showConfirm(`Slet ${name}?`,()=>{
    state.friends=state.friends.filter(f=>f.id!==id);lsSave();renderFriendsList();renderQuickFriends()
    if(state.user)deleteDoc(doc(db,'users',state.user.uid,'friends',id)).catch(e=>console.warn(e))
  })
}
