// Diagnose-script (læser IKKE og ændrer IKKE noget) — viser alle bane_stats-runder
// for en given bane, så vi kan se hvad der reelt trækker "andres snit" ned.
// Kør: MIGRATE_EMAIL=din@mail.dk MIGRATE_PASSWORD=xxx node check_bane_stats.mjs "frøbjerg"
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

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
const searchTerm = (process.argv[2] || '').toLowerCase()
if (!email || !password) {
  console.error('Sæt MIGRATE_EMAIL og MIGRATE_PASSWORD som miljøvariabler før du kører scriptet.')
  process.exit(1)
}
if (!searchTerm) {
  console.error('Angiv et søgeord for banenavnet, fx: node check_bane_stats.mjs "frøbjerg"')
  process.exit(1)
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
await signInWithEmailAndPassword(auth, email, password)

const coursesSnap = await getDocs(collection(db, 'courses'))
const matches = coursesSnap.docs.filter(d => {
  const data = d.data()
  const name = (data.name || data.yam || '').toLowerCase()
  return name.includes(searchTerm)
})

if (!matches.length) {
  console.log(`Ingen baner matcher "${searchTerm}".`)
  process.exit(0)
}

for (const courseDoc of matches) {
  const cdata = courseDoc.data()
  console.log(`\n=== ${cdata.name || cdata.yam} (id: ${courseDoc.id}, ${cdata.numTargets || cdata.antalMål} mål) ===`)
  const runderSnap = await getDocs(collection(db, 'bane_stats', courseDoc.id, 'runder'))
  if (runderSnap.empty) {
    console.log('  Ingen runder registreret for denne bane.')
    continue
  }
  const rows = []
  runderSnap.forEach(d => {
    const r = d.data()
    const denom = r.arrowsShot || (r.numTargets * 2)
    const avg = denom ? (r.score / denom) : null
    rows.push({
      id: d.id,
      score: r.score,
      numTargets: r.numTargets,
      arrowsShot: r.arrowsShot ?? '(mangler)',
      kon: r.kon,
      bueklasse: r.bueklasse,
      avg: avg !== null ? avg.toFixed(2) : '—'
    })
  })
  rows.sort((a,b) => a.kon===b.kon ? (a.bueklasse||'').localeCompare(b.bueklasse||'') : (a.kon||'').localeCompare(b.kon||''))
  console.table(rows)
  const avgs = rows.map(r => Number(r.avg)).filter(v => !isNaN(v))
  if (avgs.length) {
    console.log(`Snit af snit (alle runder, alle klasser): ${(avgs.reduce((a,b)=>a+b,0)/avgs.length).toFixed(2)}`)
  }
}
process.exit(0)
