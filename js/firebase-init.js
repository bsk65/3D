// js/firebase-init.js — Firebase singleton + centraliserede SDK-genexports.
// Alle app-moduler importerer Firebase herfra i stedet for direkte fra 'firebase/*',
// så konfiguration og initialisering kun findes ét sted.

import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged,
         signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, signOut } from 'firebase/auth'
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
         collection, collectionGroup, doc, setDoc, getDoc, getDocs, deleteDoc,
         updateDoc, addDoc, serverTimestamp, query, where } from 'firebase/firestore'
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage'

// ─── FIREBASE SETUP ───────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",
  authDomain: "archery-app-70e20.firebaseapp.com",
  projectId: "archery-app-70e20",
  storageBucket: "archery-app-70e20.firebasestorage.app",
  messagingSenderId: "1025324581093",
  appId: "1:1025324581093:web:03b41dbee9cc81c6eb540c"
}

const app  = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({tabManager: persistentMultipleTabManager()})
})
const storage = getStorage(app)

export { app, auth, db, storage }

// Re-eksporter de SDK-funktioner appen bruger, så resten af koden kun
// afhænger af dette modul (ikke af 'firebase/*' direkte).
export { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,
         sendPasswordResetEmail, signOut }
export { collection, collectionGroup, doc, setDoc, getDoc, getDocs, deleteDoc,
         updateDoc, addDoc, serverTimestamp, query, where }
export { ref, uploadString, getDownloadURL, deleteObject }
