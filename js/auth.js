// js/auth.js — Login, signup, logout, glemt kodeord

const AUTH_ERRORS = {
  'auth/user-not-found':     { da: 'Bruger ikke fundet.',              en: 'User not found.' },
  'auth/wrong-password':     { da: 'Forkert kodeord.',                 en: 'Wrong password.' },
  'auth/invalid-credential': { da: 'Ugyldig email eller kodeord.',     en: 'Invalid email or password.' },
  'auth/email-already-in-use':{ da: 'Email er allerede i brug.',       en: 'Email already in use.' },
  'auth/weak-password':      { da: 'Kodeordet er for svagt (min. 6).', en: 'Password too weak (min. 6).' },
  'auth/invalid-email':      { da: 'Ugyldig email-adresse.',           en: 'Invalid email address.' },
  'auth/too-many-requests':  { da: 'For mange forsøg. Prøv igen.',     en: 'Too many attempts. Try again.' },
};

function authErrMsg(code) {
  const e = AUTH_ERRORS[code];
  return e ? e[window.appLang || 'da'] : 'Der opstod en fejl.';
}

function showAuthErr(msg, type) {
  const el = document.getElementById('auth-err');
  el.textContent = msg;
  el.style.borderColor = type === 'ok' ? 'var(--success)' : '';
  el.style.color       = type === 'ok' ? 'var(--success)' : '';
  el.classList.remove('hidden');
}

function clearAuthErr() {
  document.getElementById('auth-err').classList.add('hidden');
}

function showAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0) === (tab === 'login'));
  });
  document.getElementById('login-form').classList.toggle('hidden', tab !== 'login');
  document.getElementById('signup-form').classList.toggle('hidden', tab !== 'signup');
  clearAuthErr();
}

async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pw    = document.getElementById('login-password').value;
  if (!email || !pw) { showAuthErr('Udfyld alle felter.'); return; }
  const btn = document.querySelector('#login-form .btn');
  btn.disabled = true; btn.textContent = '...';
  try {
    await auth.signInWithEmailAndPassword(email, pw);
  } catch (err) {
    showAuthErr(authErrMsg(err.code));
  } finally {
    btn.disabled = false; btn.textContent = 'LOG IND';
  }
}

async function doSignup() {
  const name  = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pw    = document.getElementById('signup-password').value;
  if (!name || !email || !pw) { showAuthErr('Udfyld alle felter.'); return; }
  const btn = document.querySelector('#signup-form .btn');
  btn.disabled = true; btn.textContent = '...';
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pw);
    await db.collection('brugere').doc(cred.user.uid).set({
      name, email,
      yam: name,
      'e-mail': email,
      skabt: firebase.firestore.FieldValue.serverTimestamp(),
      created: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (err) {
    showAuthErr(authErrMsg(err.code));
  } finally {
    btn.disabled = false; btn.textContent = 'OPRET KONTO';
  }
}

async function doForgot() {
  const email = document.getElementById('login-email').value.trim();
  if (!email) { showAuthErr('Indtast din email først.'); return; }
  try {
    await auth.sendPasswordResetEmail(email);
    showAuthErr('Nulstillingsmail sendt!', 'ok');
  } catch (err) {
    showAuthErr(authErrMsg(err.code));
  }
}

async function doLogout() {
  try { await auth.signOut(); } catch (err) { console.error('Logout:', err); }
}
