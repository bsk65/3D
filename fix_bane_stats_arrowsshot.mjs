// Retter gamle bane_stats-dokumenter, der mangler arrowsShot-feltet.
// Uden arrowsShot bliver "andres snit"-sammenligningen regnet forkert for runder
// hvor skytten sprang mål over (de blev talt som 0/miss i nævneren).
// Dette script logger ind på DIN konto, læser dine egne gemte runder (users/{uid}/rounds),
// beregner det faktiske antal skudte pile pr. runde, og opdaterer det tilhørende
// bane_stats/{courseId}/runder/{roundId}-dokument med arrowsShot.
// Rører kun ved runder hvor du selv er skytte — andre brugeres data kan ikke læses/rettes herfra.
// Kør: MIGRATE_EMAIL=din@mail.dk MIGRATE_PASSWORD=xxx node fix_bane_stats_arrowsshot.mjs
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
  console.error('Sæt MIGRATE_EMAIL og MIGRATE_PASSWORD som miljøvariabler (din egen konto) før du kører scriptet.')
  process.exit(1)
}

function parseScores(str) {
  if (!str) return []
  return str.split(';').map(t => t.split(',').map(v => v === 'M' ? 'M' : v === '-' ? null : Number(v)))
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const cred = await signInWithEmailAndPassword(auth, email, password)
const uid = cred.user.uid

const roundsSnap = await getDocs(collection(db, 'users', uid, 'rounds'))
let updated = 0, skipped = 0, missing = 0

for (const rd of roundsSnap.docs) {
  const round = rd.data()
  const roundId = round.id || rd.id
  if (!round.courseId) { skipped++; continue }
  const me = (round.shooters || []).find(s => s.id === uid)
  if (!me) { skipped++; continue }
  const scores = parseScores(me.scores)
  const arrowsShot = scores.flat().filter(v => v != null).length
  if (!arrowsShot) { skipped++; continue }

  const statsRef = doc(db, 'bane_stats', round.courseId, 'runder', roundId)
  try {
    await updateDoc(statsRef, { arrowsShot })
    console.log(`Opdateret: ${round.courseName || round.courseId} / ${roundId} → arrowsShot=${arrowsShot}`)
    updated++
  } catch (e) {
    console.warn(`Ingen bane_stats-dokument fundet for runde ${roundId} (${e.message})`)
    missing++
  }
}

console.log(`Færdig. ${updated} opdateret, ${skipped} sprunget over, ${missing} uden bane_stats-dokument.`)
process.exit(0)
