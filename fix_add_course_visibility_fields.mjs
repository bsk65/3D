// Backfilder hidden/skjult og approvedUsers/godkendteBrugere på alle bane-dokumenter,
// der mangler dem, så den nye synligheds-forespørgsel (where hidden==false) også
// finder eksisterende (offentlige) baner.
// Kør: MIGRATE_EMAIL=din@admin.mail MIGRATE_PASSWORD=xxx node fix_add_course_visibility_fields.mjs
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore'

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
  console.error('Sæt MIGRATE_EMAIL og MIGRATE_PASSWORD som miljøvariabler (en admin-konto) før du kører scriptet.')
  process.exit(1)
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

await signInWithEmailAndPassword(auth, email, password)

const snap = await getDocs(collection(db, 'courses'))
let updated = 0
for (const d of snap.docs) {
  const data = d.data()
  const patch = {}
  if (data.hidden === undefined) patch.hidden = false
  if (data.skjult === undefined) patch.skjult = false
  if (data.approvedUsers === undefined) patch.approvedUsers = []
  if (data.godkendteBrugere === undefined) patch.godkendteBrugere = []
  if (Object.keys(patch).length) {
    await updateDoc(doc(db, 'courses', d.id), patch)
    console.log(`Opdateret: ${data.name || d.id}`)
    updated++
  }
}
console.log(`Færdig. ${updated} bane(r) opdateret.`)
process.exit(0)
