// js/auth.js — Login/opret/nulstil/logud + auth-fejlbeskeder.
// Registrerer window.doLogin/doSignup/doForgot/doLogout/showAuthTab som
// HTML onclick-handlere (side-effekt ved import). Selve auth-state-lytteren
// (onAuthStateChanged) ligger i main.js, da den driver onLogin/onLogout.

import { auth, db, doc, setDoc, serverTimestamp,
         signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, signOut } from './firebase-init.js'

const AUTH_ERRORS = {
  'auth/user-not-found':       'Bruger ikke fundet.',
  'auth/wrong-password':       'Forkert kodeord.',
  'auth/invalid-credential':   'Ugyldig email eller kodeord.',
  'auth/email-already-in-use': 'Email er allerede i brug.',
  'auth/weak-password':        'Kodeordet er for svagt (min. 6 tegn).',
  'auth/invalid-email':        'Ugyldig email-adresse.',
  'auth/too-many-requests':    'For mange forsøg. Prøv igen senere.',
  'auth/network-request-failed': 'Netværksfejl. Tjek din forbindelse.',
}
function authErrMsg(code){ return AUTH_ERRORS[code] || 'Der opstod en fejl. Prøv igen.' }

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
  catch(err){ showAuthErr(authErrMsg(err.code)) }
  finally{ btn.disabled=false; btn.textContent='LOG IND' }
}

window.doSignup = async function(){
  const name=document.getElementById('signup-name').value.trim()
  const email=document.getElementById('signup-email').value.trim()
  const pw=document.getElementById('signup-password').value
  const kon=document.getElementById('signup-kon').value
  const bueklasse=document.getElementById('signup-bueklasse').value
  if(!name||!email||!pw||!kon||!bueklasse){showAuthErr('Udfyld alle felter.');return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showAuthErr('Ugyldig email-adresse.');return}
  if(pw.length<6){showAuthErr('Adgangskoden skal være mindst 6 tegn.');return}
  const btn=document.querySelector('#signup-form .btn')
  btn.disabled=true; btn.textContent='...'
  try{
    const cred=await createUserWithEmailAndPassword(auth,email,pw)
    await setDoc(doc(db,'users',cred.user.uid),{name,email,yam:name,'e-mail':email,kon,bueklasse,created:serverTimestamp()})
  }catch(err){showAuthErr(authErrMsg(err.code))}
  finally{btn.disabled=false;btn.textContent='OPRET KONTO'}
}

window.doForgot = async function(){
  const email=document.getElementById('login-email').value.trim()
  if(!email){showAuthErr('Indtast din email først.');return}
  try{await sendPasswordResetEmail(auth,email);showAuthErr('Nulstillingsmail sendt!','ok')}
  catch(err){showAuthErr(authErrMsg(err.code))}
}

window.doLogout = async function(){
  try{await signOut(auth)}catch(e){}
}
