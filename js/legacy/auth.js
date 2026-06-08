// js/auth.js
import { auth, db } from './firebase-instance.js'
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, signOut, onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'

const ERRORS = {
  'auth/user-not-found':     'Bruger ikke fundet.',
  'auth/wrong-password':     'Forkert kodeord.',
  'auth/invalid-credential': 'Ugyldig email eller kodeord.',
  'auth/email-already-in-use': 'Email er allerede i brug.',
  'auth/weak-password':      'Kodeordet er for svagt (min. 6 tegn).',
  'auth/invalid-email':      'Ugyldig email-adresse.',
  'auth/too-many-requests':  'For mange forsøg. Prøv igen senere.',
}

function errMsg(code) {
  return ERRORS[code] || 'Der opstod en fejl.'
}

export function showAuthErr(msg, type = 'error') {
  const el = document.getElementById('auth-err')
  el.textContent = msg
  el.style.color = type === 'ok' ? 'var(--success)' : ''
  el.style.borderColor = type === 'ok' ? 'var(--success)' : ''
  el.classList.remove('hidden')
}

export function showAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0) === (tab === 'login'))
  })
  document.getElementById('login-form').classList.toggle('hidden', tab !== 'login')
  document.getElementById('signup-form').classList.toggle('hidden', tab !== 'signup')
  document.getElementById('auth-err').classList.add('hidden')
}

export async function doLogin() {
  const email = document.getElementById('login-email').value.trim()
  const pw    = document.getElementById('login-password').value
  if (!email || !pw) { showAuthErr('Udfyld alle felter.'); return }
  const btn = document.querySelector('#login-form .btn')
  btn.disabled = true; btn.textContent = '...'
  try {
    await signInWithEmailAndPassword(auth, email, pw)
  } catch (err) {
    showAuthErr(errMsg(err.code))
  } finally {
    btn.disabled = false; btn.textContent = 'LOG IND'
  }
}

export async function doSignup() {
  const name  = document.getElementById('signup-name').value.trim()
  const email = document.getElementById('signup-email').value.trim()
  const pw    = document.getElementById('signup-password').value
  if (!name || !email || !pw) { showAuthErr('Udfyld alle felter.'); return }
  const btn = document.querySelector('#signup-form .btn')
  btn.disabled = true; btn.textContent = '...'
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pw)
    await setDoc(doc(db, 'brugere', cred.user.uid), {
      name, email, yam: name, 'e-mail': email,
      created: serverTimestamp(), skabt: serverTimestamp()
    })
  } catch (err) {
    showAuthErr(errMsg(err.code))
  } finally {
    btn.disabled = false; btn.textContent = 'OPRET KONTO'
  }
}

export async function doForgot() {
  const email = document.getElementById('login-email').value.trim()
  if (!email) { showAuthErr('Indtast din email først.'); return }
  try {
    await sendPasswordResetEmail(auth, email)
    showAuthErr('Nulstillingsmail sendt!', 'ok')
  } catch (err) {
    showAuthErr(errMsg(err.code))
  }
}

export async function doLogout() {
  try { await signOut(auth) } catch (err) { console.error(err) }
}

export function initAuthListener(onLogin, onLogout) {
  onAuthStateChanged(auth, async user => {
    if (user) {
      let profile = { name: user.email, email: user.email }
      try {
        const snap = await getDoc(doc(db, 'brugere', user.uid))
        if (snap.exists()) {
          const d = snap.data()
          profile = {
            name:  d.name  || d.yam      || user.email,
            email: d.email || d['e-mail'] || user.email,
          }
        }
      } catch (e) { console.error(e) }
      onLogin(user, profile)
    } else {
      onLogout()
    }
  })
}
