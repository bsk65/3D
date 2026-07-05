// Rydder visits-feltet fra alle kursus-dokumenter i Firestore.
// Runder er nu private og gemmes ikke på kursus-dokumentet.
// Kør: node fix_clear_course_visits.mjs
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, updateDoc, doc, deleteField } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",
  authDomain: "archery-app-70e20.firebaseapp.com",
  projectId: "archery-app-70e20",
  storageBucket: "archery-app-70e20.firebasestorage.app",
  messagingSenderId: "1025324581093",
  appId: "1:1025324581093:web:03b41dbee9cc81c6eb540c"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const snap = await getDocs(collection(db, 'courses'))
let cleared = 0
for (const d of snap.docs) {
  const data = d.data()
  const hasVisits = (data.visits && data.visits.length > 0) || (data.besøg && data.besøg.length > 0)
  if (hasVisits) {
    await updateDoc(doc(db, 'courses', d.id), { visits: deleteField(), besøg: deleteField() })
    console.log(`Ryddet: ${data.name || d.id}`)
    cleared++
  }
}
console.log(`Færdig. ${cleared} bane(r) ryddet.`)
process.exit(0)
