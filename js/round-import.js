// js/round-import.js — Selvbetjent import af historiske runder fra
// Bueskydning Danmark-appens JSON-eksport ("3DRes_...json") direkte i
// browseren. Samme feltmapping som import_legacy_round.mjs (repo-roden,
// bruges når man importerer på en andens vegne via terminal), men her
// skrives der direkte til den allerede loggede-ind brugers egen session —
// ingen login-håndtering nødvendig.
//
// Scoreskalaen i eksportformatet (11/10/8/5/0) matcher vores WA-regelsæt
// 1:1 — 0 mappes til 'M' (bom). Findes der en bane i state.courses med
// (delvist) samme navn, kobles runden automatisk til den. Har filen flere
// spillere og ingen af dem matcher brugerens egen e-mail, spørges der via
// #import-player-modal hvem der er brugeren selv — resten importeres som
// gæster på runden.
//
// Registrerer window.pickImportPlayer/cancelImportPlayer som
// HTML-handlere samt en change-listener på #import-round-input ved import.

import { state } from './state.js'
import { esc, showToast } from './utils.js'
import { lsSave } from './storage.js'
import { serializeScores, buildOrder } from './scoring.js'
import { db, doc, setDoc } from './firebase-init.js'
import { renderRoundsList } from './results.js'

function scoresFor(p, numTargets, arrowsPerTgt) {
  const s = Array.from({ length: numTargets }, () => Array(arrowsPerTgt).fill(null))
  for (const r of p.eventresult) s[r.targetid - 1][r.arrownr - 1] = r.points === 0 ? 'M' : r.points
  return s
}

async function saveImportedRound(raw, self, validPlayers) {
  const numTargets = Math.max(...validPlayers.flatMap(p => p.eventresult.map(r => r.targetid)))
  const arrowsPerTgt = Math.max(...validPlayers.flatMap(p => p.eventresult.map(r => r.arrownr)))

  let courseId = null
  let courseName = raw.name || raw.eventname || null
  if (courseName) {
    const key = courseName.split(' - ')[0].trim().toLowerCase()
    const matches = state.courses.filter(c => (c.name || '').toLowerCase().includes(key))
    if (matches.length === 1) { courseId = matches[0].id; courseName = matches[0].name }
  }

  const otherShooters = validPlayers.filter(p => p !== self).map((p, i) => ({
    id: `guest-import-${Date.now()}-${i}`, name: p.name || `Gæst ${i + 1}`, isGuest: true,
    scores: serializeScores(scoresFor(p, numTargets, arrowsPerTgt))
  }))

  const completedMs = raw.eventinsstmp || Date.parse(raw.eventdate) || Date.now()
  const roundId = 'imp_' + (self.objectId || raw.eventobjectId || Date.now())

  const roundData = {
    id: roundId, name: courseName || 'Importeret runde', courseId, courseName,
    numTargets, startTarget: 1, ruleset: 'WA',
    completed: completedMs, gpsRoute: null, gpsDuration: null, gpsDistance: null,
    traversalOrder: buildOrder(0, numTargets), traversalPos: numTargets,
    shooters: [{ id: state.user.uid, name: state.profile?.name || 'Mig', isGuest: false,
      scores: serializeScores(scoresFor(self, numTargets, arrowsPerTgt)) }, ...otherShooters],
    shooterIds: [state.user.uid]
  }

  // created sættes til den historiske dato (ikke "nu") så rundekortet viser
  // den rigtige dato — samme grund som i import_legacy_round.mjs.
  await setDoc(doc(db, 'users', state.user.uid, 'rounds', roundId), { ...roundData, created: completedMs })

  state.rounds = state.rounds.filter(r => r.id !== roundId)
  state.rounds.unshift({ ...roundData, created: completedMs })
  state.rounds.sort((a, b) => {
    const ta = a.completed || a.created || 0, tb = b.completed || b.created || 0
    return (typeof tb === 'number' ? tb : tb.toMillis?.() ?? 0) - (typeof ta === 'number' ? ta : ta.toMillis?.() ?? 0)
  })
  lsSave(); renderRoundsList()
  showToast(`Runde importeret: ${roundData.name}`, 'success')
}

let _pendingImport = null // { raw, validPlayers } mens spiller-valg-modalen er åben

function closeImportPlayerModal() {
  document.getElementById('import-player-modal')?.classList.add('hidden')
  _pendingImport = null
}
window.cancelImportPlayer = closeImportPlayerModal

window.pickImportPlayer = async function (idx) {
  if (!_pendingImport) return
  const { raw, validPlayers } = _pendingImport
  const self = validPlayers[idx]
  closeImportPlayerModal()
  try { await saveImportedRound(raw, self, validPlayers) }
  catch (e) { console.warn('Import fejl:', e); showToast('Fejl ved import: ' + e.message, 'error') }
}

function openImportPlayerModal(raw, validPlayers) {
  _pendingImport = { raw, validPlayers }
  const list = document.getElementById('import-player-list')
  list.innerHTML = validPlayers.map((p, i) => `<div class="ac-item" onclick="pickImportPlayer(${i})">${esc(p.name || '—')}</div>`).join('')
  document.getElementById('import-player-modal').classList.remove('hidden')
}

const importInputEl = document.getElementById('import-round-input')
if (!importInputEl) console.warn('round-import.js: #import-round-input findes ikke i DOM')

importInputEl?.addEventListener('change', async e => {
  const file = e.target.files[0]
  e.target.value = ''
  if (!file) { showToast('Ingen fil valgt', 'error'); return }
  if (!state.user) { showToast('Log ind først', 'error'); return }
  try {
    const raw = JSON.parse(await file.text())
    const validPlayers = (raw.players || []).filter(p => Array.isArray(p.eventresult) && p.eventresult.length)
    if (!validPlayers.length) { showToast('Filen indeholder ingen spillere med resultater', 'error'); return }
    const myEmail = (state.profile?.email || '').toLowerCase()
    let self = validPlayers.find(p => (p.email || '').toLowerCase() === myEmail)
    if (!self && validPlayers.length === 1) self = validPlayers[0]
    if (!self) { openImportPlayerModal(raw, validPlayers); return }
    await saveImportedRound(raw, self, validPlayers)
  } catch (err) {
    console.warn('Import fejl:', err)
    showToast('Kunne ikke læse filen: ' + (err?.message || err), 'error')
  }
})
