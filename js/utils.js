// js/utils.js — Generelle UI-uafhængige hjælpere (HTML-escape, toast, bekræftelse).

// Escaper HTML-specialtegn så brugerinput trygt kan indsættes i innerHTML.
export function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}

// Viser en kortvarig toast-notifikation nederst på skærmen.
export function showToast(msg,type='info'){
  const t=document.createElement('div')
  t.className=`toast toast-${type}`
  t.textContent=msg
  document.body.appendChild(t)
  requestAnimationFrame(()=>t.classList.add('toast-show'))
  setTimeout(()=>{t.classList.remove('toast-show');setTimeout(()=>t.remove(),300)},3500)
}

// Viser bekræftelses-modal og kalder onConfirm hvis brugeren accepterer.
export function showConfirm(msg,onConfirm){
  const modal=document.getElementById('confirm-modal')
  document.getElementById('confirm-msg').textContent=msg
  modal.classList.remove('hidden')
  const cleanup=()=>{modal.classList.add('hidden');window._confirmAccept=null;window._confirmReject=null}
  window._confirmAccept=()=>{cleanup();onConfirm()}
  window._confirmReject=()=>{cleanup()}
}
