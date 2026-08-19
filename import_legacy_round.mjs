// Importerer en runde eksporteret fra et andet scoringssystem (Bueskydning
// Danmark-appens JSON-eksport, "3DRes_...json") ind i denne brugers egen
// rounds-samling i Firestore, så den dukker op i appen som en almindelig
// afsluttet runde.
//
// Kør: node import_legacy_round.mjs "sti/til/eksport.json"
// Scriptet spørger interaktivt om din e-mail/kodeord til appen (undgår at
// specialtegn i kodeordet bliver fejlfortolket af cmd/PowerShell ved brug af
// set/$env:). Vil du hellere bruge miljøvariabler, virker MIGRATE_EMAIL/
// MIGRATE_PASSWORD stadig som genvej og springer spørgsmålene over.
//
// Scoreskalaen i eksportformatet (11/10/8/5/0) matcher vores WA-regelsæt
// 1:1 — 0 mappes til 'M' (bom). Findes der en bane i vores courses-samling
// med (delvist) samme navn, kobles runden automatisk til den.
import { readFileSync } from 'fs'
import { createInterface } from 'readline/promises'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6jfZeueaQfBhlI5Mz6766c3k--gCwIjc",
  authDomain: "archery-app-70e20.firebaseapp.com",
  projectId: "archery-app-70e20",
  storageBucket: "archery-app-70e20.firebasestorage.app",
  messagingSenderId: "1025324581093",
  appId: "1:1025324581093:web:03b41dbee9cc81c6eb540c"
}

const filePath = process.argv[2]
if (!filePath) {
  console.error('Brug: node import_legacy_round.mjs "sti/til/eksport.json"')
  process.exit(1)
}

const rl = createInterface({ input: process.stdin, output: process.stdout })
const email = process.env.MIGRATE_EMAIL || await rl.question('E-mail til appen: ')
const password = process.env.MIGRATE_PASSWORD || await rl.question('Kodeord til appen: ')
rl.close()
if (!email || !password) {
  console.error('Både e-mail og kodeord skal udfyldes.')
  process.exit(1)
}

const raw = JSON.parse(readFileSync(filePath, 'utf8'))
if (!Array.isArray(raw.players) || !raw.players.length) {
  console.error('Filen indeholder ingen spillere (players-feltet mangler eller er tomt).')
  process.exit(1)
}

function serializeScores(arr) { return arr.map(t => t.map(v => v == null ? '-' : v).join(',')).join(';') }
function buildOrder(start, total) { return Array.from({ length: total }, (_, i) => (start + i) % total) }

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const cred = await signInWithEmailAndPassword(auth, email, password)
const uid = cred.user.uid

const validPlayers = raw.players.filter(p => Array.isArray(p.eventresult) && p.eventresult.length)
if (!validPlayers.length) {
  console.error('Filen indeholder ingen spillere med skudresultater.')
  process.exit(1)
}

// Match spilleren i filen mod den e-mail der logges ind med. Er der kun én
// spiller i filen (typisk for en enkelt-eksport), bruges den uanset e-mail,
// da eksport-systemets konto-e-mail ofte er en anden end app-loginnet. Ved
// flere spillere uden e-mail-match spørges der interaktivt, hvem der er dig.
let self = validPlayers.find(p => (p.email || '').toLowerCase() === email.toLowerCase())
if (!self && validPlayers.length === 1) self = validPlayers[0]
if (!self) {
  const rl2 = createInterface({ input: process.stdin, output: process.stdout })
  console.log('Fandt ingen spiller med den e-mail. Hvem af disse er dig?')
  validPlayers.forEach((p, i) => console.log(`  ${i + 1}) ${p.name}`))
  const answer = await rl2.question('Nummer: ')
  rl2.close()
  self = validPlayers[Number(answer) - 1]
  if (!self) { console.error('Ugyldigt valg.'); process.exit(1) }
}

// Antal mål/pile beregnes på tværs af ALLE spillere (ikke kun dig), så
// gæste-skytternes resultater ikke bliver afskåret hvis de fx har skudt et
// mål mere end dig.
const numTargets = Math.max(...validPlayers.flatMap(p => p.eventresult.map(r => r.targetid)))
const arrowsPerTgt = Math.max(...validPlayers.flatMap(p => p.eventresult.map(r => r.arrownr)))
function scoresFor(p) {
  const s = Array.from({ length: numTargets }, () => Array(arrowsPerTgt).fill(null))
  for (const r of p.eventresult) s[r.targetid - 1][r.arrownr - 1] = r.points === 0 ? 'M' : r.points
  return s
}

// Prøv at koble runden til en eksisterende bane med (delvist) samme navn.
let courseId = null
let courseName = raw.name || raw.eventname || null
if (courseName) {
  const coursesSnap = await getDocs(collection(db, 'courses'))
  const key = courseName.split(' - ')[0].trim().toLowerCase()
  const matches = coursesSnap.docs.filter(d => (d.data().name || '').toLowerCase().includes(key))
  if (matches.length === 1) { courseId = matches[0].id; courseName = matches[0].data().name }
}

// Brug det navn brugeren faktisk hedder i appen i dag, ikke navnet fra det
// gamle system, så skytten fremstår konsistent med alle andre runder.
const ownDoc = await getDoc(doc(db, 'users', uid))
const shooterName = ownDoc.data()?.name || ownDoc.data()?.yam || self.name || 'Importeret'

const completedMs = raw.eventinsstmp || Date.parse(raw.eventdate) || Date.now()
const roundId = 'imp_' + (self.objectId || raw.eventobjectId || Date.now())

// De øvrige spillere i filen tilføjes som gæster (samme model som "Tilføj
// gæst" i selve appen) — de har ingen konto her, men deres resultater fra
// den historiske runde bevares alligevel.
const otherShooters = validPlayers.filter(p => p !== self).map((p, i) => ({
  id: `guest-import-${i}`, name: p.name || `Gæst ${i + 1}`, isGuest: true, scores: serializeScores(scoresFor(p))
}))

const roundData = {
  id: roundId, name: courseName || 'Importeret runde', courseId, courseName,
  numTargets, startTarget: 1, ruleset: 'WA',
  completed: completedMs, gpsRoute: null, gpsDuration: null, gpsDistance: null,
  traversalOrder: buildOrder(0, numTargets), traversalPos: numTargets,
  shooters: [{ id: uid, name: shooterName, isGuest: false, scores: serializeScores(scoresFor(self)) }, ...otherShooters],
  shooterIds: [uid]
}

// created sættes til den historiske dato (ikke serverTimestamp/nu) — kortet i
// runde-listen viser created som dato, og skal derfor matche completed.
await setDoc(doc(db, 'users', uid, 'rounds', roundId), { ...roundData, created: completedMs })
const total = scoresFor(self).flat().reduce((s, v) => s + (v === 'M' || v == null ? 0 : v), 0)
const others = otherShooters.length ? ` + ${otherShooters.map(s => s.name).join(', ')} som gæster` : ''
console.log(`Importeret: ${roundData.name} (${new Date(completedMs).toLocaleDateString('da-DK')}) — ${numTargets} mål, din total ${total} point${others}, id=${roundId}`)
process.exit(0)
