// js/auth.js — login / signup / logout / forgot-password

import { initApp, getAuth } from './firebase-instance.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc, setDoc, serverTimestamp, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getDB } from './firebase-instance.js';

// i18n error messages
const AUTH_ERRORS = {
  'auth/user-not-found': { da: 'Bruger ikke fundet.', en: 'User not found.' },
  'auth/wrong-password': { da: 'Forkert kodeord.', en: 'Wrong password.' },
  'auth/invalid-credential': { da: 'Ugyldig email eller kodeord.', en: 'Invalid email or password.' },
  'auth/email-already-in-use': { da: 'Email er allerede i brug.', en: 'Email already in use.' },
  'auth/weak-password': { da: 'Kodeordet er for svagt (min. 6 tegn).', en: 'Password too weak (min. 6 chars).' },
  'auth/invalid-email': { da: 'Ugyldig email-adresse.', en: 'Invalid email address.' },
  'auth/too-many-requests': { da: 'For mange forsøg. Prøv igen senere.', en: 'Too many attempts. Try again later.' },
};

function getErrorMsg(code, lang = 'da') {
  const entry = AUTH_ERRORS[code];
  if (entry) return entry[lang] || entry.da;
  return lang === 'en' ? 'An error occurred.' : 'Der opstod en fejl.';
}

export function initAuth({ onLogin, onLogout, getLang }) {
  // Tab switching
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const which = tab.dataset.tab;
      document.getElementById('login-form').classList.toggle('hidden', which !== 'login');
      document.getElementById('signup-form').classList.toggle('hidden', which !== 'signup');
      clearError();
    });
  });

  // Login
  document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    const pw = document.getElementById('login-password').value;
    if (!email || !pw) { showError(getLang() === 'en' ? 'Fill in all fields.' : 'Udfyld alle felter.'); return; }
    setLoading('login-btn', true);
    try {
      await initApp();
      await signInWithEmailAndPassword(getAuth(), email, pw);
    } catch (err) {
      showError(getErrorMsg(err.code, getLang()));
    } finally {
      setLoading('login-btn', false);
    }
  });

  // Signup
  document.getElementById('signup-btn').addEventListener('click', async () => {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const pw = document.getElementById('signup-password').value;
    if (!name || !email || !pw) { showError(getLang() === 'en' ? 'Fill in all fields.' : 'Udfyld alle felter.'); return; }
    setLoading('signup-btn', true);
    try {
      await initApp();
      const cred = await createUserWithEmailAndPassword(getAuth(), email, pw);
      const db = getDB();
      await setDoc(doc(db, 'brugere', cred.user.uid), {
        name, email, created: serverTimestamp()
      });
    } catch (err) {
      showError(getErrorMsg(err.code, getLang()));
    } finally {
      setLoading('signup-btn', false);
    }
  });

  // Forgot password
  document.getElementById('forgot-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    if (!email) { showError(getLang() === 'en' ? 'Enter your email first.' : 'Indtast din email først.'); return; }
    try {
      await initApp();
      await sendPasswordResetEmail(getAuth(), email);
      showError(getLang() === 'en' ? 'Reset email sent!' : 'Nulstillingsmail sendt!', 'success');
    } catch (err) {
      showError(getErrorMsg(err.code, getLang()));
    }
  });

  // Logout
  document.getElementById('user-btn')?.addEventListener('click', async () => {
    try {
      await signOut(getAuth());
    } catch (err) {
      console.error('Logout error:', err);
    }
  });

  // Auth state listener
  initApp().then(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        // Ensure user doc exists
        try {
          const db = getDB();
          const userDoc = await getDoc(doc(db, 'brugere', user.uid));
          let profile = { name: user.displayName || user.email, email: user.email };
          if (userDoc.exists()) profile = userDoc.data();
          onLogin(user, profile);
        } catch (err) {
          console.error('Error loading user profile:', err);
          onLogin(user, { name: user.email, email: user.email });
        }
      } else {
        onLogout();
      }
    });
  });
}

function showError(msg, type = 'error') {
  const el = document.getElementById('auth-error');
  el.textContent = msg;
  el.className = type === 'success' ? 'error-msg' : 'error-msg';
  el.style.borderColor = type === 'success' ? 'var(--success)' : '';
  el.style.color = type === 'success' ? 'var(--success)' : '';
  el.classList.remove('hidden');
}

function clearError() {
  document.getElementById('auth-error').classList.add('hidden');
}

function setLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  btn.disabled = loading;
  btn.textContent = loading ? '...' : (btnId === 'login-btn' ? 'Log ind' : 'Opret konto');
}
