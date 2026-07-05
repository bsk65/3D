// Sletter kendte test-runder fra bane_stats for Frøbjerg 3D Buebane, som havde
// urealistisk lave snit (formentlig testdata fra udviklingen, ikke rigtige skydninger).
// Kør: MIGRATE_EMAIL=din@mail.dk MIGRATE_PASSWORD=xxx node fix_delete_bad_bane_stats.mjs
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",
  authDomain: "archery-app-70e20.firebaseapp.com",
  projectId: "archery-app-70e20",
  storageBucket: "archery-app-70e20.firebasestorage.app",
  messagingSenderId: "1025324581093",
  appId: "1:1025324581093:web:03b41dbee9cc81c6eb540c"
}

const email = process.env.MIGRATE_EMAIL
const password = process.env.MIGRATE_PASSWORD
if (!email || !password) {
  console.error('Sæt MIGRATE_EMAIL og MIGRATE_PASSWORD som miljøvariabler før du kører scriptet.')
  process.exit(1)
}

const courseId = '1776787812362' // Frøbjerg 3D Buebane
const badRoundIds = ['r_1780908228833', 'r_1780908282773']

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
await signInWithEmailAndPassword(auth, email, password)

for (const roundId of badRoundIds) {
  await deleteDoc(doc(db, 'bane_stats', courseId, 'runder', roundId))
  console.log(`Slettet: bane_stats/${courseId}/runder/${roundId}`)
}
console.log('Færdig.')
process.exit(0)
