// js/auth.js — Login/opret/nulstil/logud + auth-fejlbeskeder.
// Registrerer window.doLogin/doSignup/doForgot/doLogout/showAuthTab som
// HTML onclick-handlere (side-effekt ved import). Selve auth-state-lytteren
// (onAuthStateChanged) ligger i main.js, da den driver onLogin/onLogout.

import { auth, db, doc, setDoc, serverTimestamp,
         signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, signOut } from './firebase-init.js'
import { t } from './i18n.js'

const AUTH_ERROR_KEYS = {
  'auth/user-not-found':       'auth.errUserNotFound',
  'auth/wrong-password':       'auth.errWrongPassword',
  'auth/invalid-credential':   'auth.errInvalidCredential',
  'auth/email-already-in-use': 'auth.errEmailInUse',
  'auth/weak-password':        'auth.errWeakPassword',
  'auth/invalid-email':        'auth.errInvalidEmail',
  'auth/too-many-requests':    'auth.errTooManyRequests',
  'auth/network-request-failed': 'auth.errNetwork',
}
function authErrMsg(code){ return AUTH_ERROR_KEYS[code] ? t(AUTH_ERROR_KEYS[code]) : t('auth.errGeneric') }

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
  if(!email||!pw){showAuthErr(t('auth.errFillAllFields'));return}
  const btn=document.querySelector('#login-form .btn')
  btn.disabled=true; btn.textContent='...'
  try{ await signInWithEmailAndPassword(auth,email,pw) }
  catch(err){ showAuthErr(authErrMsg(err.code)) }
  finally{ btn.disabled=false; btn.textContent=t('auth.loginBtn') }
}

window.doSignup = async function(){
  const name=document.getElementById('signup-name').value.trim()
  const email=document.getElementById('signup-email').value.trim()
  const pw=document.getElementById('signup-password').value
  const kon=document.getElementById('signup-kon').value
  const bueklasse=document.getElementById('signup-bueklasse').value
  if(!name||!email||!pw||!kon||!bueklasse){showAuthErr(t('auth.errFillAllFields'));return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showAuthErr(t('auth.errInvalidEmail'));return}
  if(pw.length<6){showAuthErr(t('auth.errPasswordTooShort'));return}
  const btn=document.querySelector('#signup-form .btn')
  btn.disabled=true; btn.textContent='...'
  try{
    const cred=await createUserWithEmailAndPassword(auth,email,pw)
    await setDoc(doc(db,'users',cred.user.uid),{name,email,yam:name,'e-mail':email,kon,bueklasse,created:serverTimestamp()})
  }catch(err){showAuthErr(authErrMsg(err.code))}
  finally{btn.disabled=false;btn.textContent=t('auth.signupBtn')}
}

window.doForgot = async function(){
  const email=document.getElementById('login-email').value.trim()
  if(!email){showAuthErr(t('auth.errEnterEmailFirst'));return}
  try{await sendPasswordResetEmail(auth,email);showAuthErr(t('auth.resetEmailSent'),'ok')}
  catch(err){showAuthErr(authErrMsg(err.code))}
}

window.doLogout = async function(){
  try{await signOut(auth)}catch(e){}
}
