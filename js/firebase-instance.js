// js/firebase-instance.js — singleton Firebase init

let _app = null, _db = null, _auth = null, _storage = null;

// Brug IndexedDB til at huske login-session
async function enablePersistence(auth) {
  try {
    const { browserLocalPersistence, setPersistence } = await import(
      https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js
    );
    await setPersistence(auth, browserLocalPersistence);
  } catch(e) { /* ignorer */ }
}

// Waits until the firebase modules are loaded by the inline script in index.html
async function waitForModules() {
  if (window.__firebaseModules) return window.__firebaseModules;
  return new Promise(resolve => {
    document.addEventListener('firebase-modules-ready', () => resolve(window.__firebaseModules), { once: true });
  });
}

export async function initApp() {
  if (_app) return { app: _app, db: _db, auth: _auth, storage: _storage };

  const { initializeApp, getAuth, getFirestore, getStorage } = await waitForModules();

  const firebaseConfig = {
    apiKey: "AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",
    authDomain: "archery-app-70e20.firebaseapp.com",
    projectId: "bueskydning-app-70e20",
    storageBucket: "archery-app-70e20.firebasestorage.app",
    messagingSenderId: "1025324581093",
    appId: "1:1025324581093:web:03b41dbee9cc81c6eb540c"
  };

  try {
    _app = initializeApp(firebaseConfig);
    _db = getFirestore(_app);
    _auth = getAuth(_app);
    _storage = getStorage(_app);
    await enablePersistence(_auth);
    // Aktiver offline persistence for Firestore
    // (ignorerer fejl hvis allerede aktiv)
  } catch (err) {
    console.error('Firebase init error:', err);
    throw err;
  }

  return { app: _app, db: _db, auth: _auth, storage: _storage };
}

export function getDB() { return _db; }
export function getAuth() { return _auth; }
export function getStorage() { return _storage; }
