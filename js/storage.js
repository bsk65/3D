// js/storage.js — localStorage-cache af venner, runder og baner.
// Primær lagring for friends/rounds er lokal; Firestore er backup/sync.

import { state } from './state.js'
import { showToast } from './utils.js'

const LS = 'archery_v5'
const LS_OLD = 'archery_v4'

// Læser cachet data. Migrerer fra tidligere version (archery_v4) hvis nødvendigt.
export function lsLoad() {
  try {
    const n = JSON.parse(localStorage.getItem(LS) || 'null')
    if (n) return n
    // Migrer fra gammel app - inkl. baner
    const o = JSON.parse(localStorage.getItem(LS_OLD) || '{}')
    return { friends: o.friends || [], rounds: o.rounds || [], courses: o.courses || [] }
  } catch(e) { return { friends: [], rounds: [], courses: [] } }
}

// Gemmer nuværende state (venner, seneste 200 runder, baner) til localStorage.
export function lsSave() {
  try {
    localStorage.setItem(LS, JSON.stringify({
      friends: state.friends,
      rounds:  state.rounds.slice(0, 200),
      courses: state.courses
    }))
  } catch(e) {
    if (e?.name === 'QuotaExceededError') {
      showToast('Lokalt lager er fuldt — nogle data blev ikke gemt', 'error')
    }
  }
}
