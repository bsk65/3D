// js/scoring.js — Ren scoringslogik (ingen DOM/Firebase-afhængigheder).
//
// Scores gemmes som 2D-array pr. skytte: scores[targetIndex] = [pil1, pil2]
// med værdier 11 | 10 | 8 | 5 | 'M' | null. Serialiseres til Firestore som
// streng: "11,10;8,5;M,M".

export const SCORE_VALUES = [11, 10, 8, 5, 'M']

// Numerisk værdi af et enkelt skud. 'M' (miss) og null/undefined tæller som 0.
export function scoreVal(v) { return (v === 'M' || v == null) ? 0 : Number(v) }

// Parser en serialiseret score-streng til 2D-array.
export function parseScores(str) {
  if (!str) return []
  return str.split(';').map(t => t.split(',').map(v => v === 'M' ? 'M' : v === '-' ? null : Number(v)))
}

// Serialiserer et 2D score-array til streng (null → '-').
export function serializeScores(arr) {
  return arr.map(t => t.map(v => v == null ? '-' : v).join(',')).join(';')
}

// Total point for en skytte (M/null = 0).
export function calcTotal(scores) {
  return scores.flat().reduce((s, v) => s + scoreVal(v), 0)
}

// Snit af faktisk skudte pile, afrundet til 1 decimal. null hvis intet skudt.
export function calcAverage(scores) {
  const all = scores.flat().filter(v => v != null)
  if (!all.length) return null
  return (all.reduce((s, v) => s + scoreVal(v), 0) / all.length).toFixed(1)
}

// Snit for ét mål på tværs af alle skytter. null hvis ingen har skudt målet.
export function calcTargetAverage(shooters, tIdx) {
  const vals = shooters.flatMap(s => (s.scores[tIdx]||[]).filter(v => v != null).map(scoreVal))
  if (!vals.length) return null
  return (vals.reduce((a,b) => a+b, 0) / vals.length).toFixed(1)
}

// Antal forekomster af hver scorezone.
export function calcDistribution(scores) {
  const d = {11:0, 10:0, 8:0, 5:0, M:0}
  scores.flat().forEach(v => {
    if (v === 'M') d.M++
    else if (v != null && d[Number(v)] !== undefined) d[Number(v)]++
  })
  return d
}

// Skytten med højeste total. null for tom liste.
export function findWinner(shooters) {
  if (!shooters.length) return null
  return shooters.reduce((b, s) => calcTotal(s.scores) > calcTotal(b.scores) ? s : b, shooters[0])
}

// Er skyttens snit under en grænse? false hvis intet er skudt.
export function isBelowThreshold(scores, threshold) {
  const all = scores.flat().filter(v => v != null)
  if (!all.length) return false
  return (all.reduce((s,v) => s + scoreVal(v), 0) / all.length) < threshold
}

// Opretter et tomt skytte-objekt.
export function makeShooter(id, name, isGuest) { return { id, name, isGuest: !!isGuest, scores: [] } }

// Udfylder scores-array med [null,null] op til n mål.
export function normalizeScores(s, n) {
  while (s.scores.length < n) s.scores.push([null, null])
}

// Antal mål hvor ALLE skytter har skudt begge pile.
export function countScored(shooters, n) {
  let c = 0
  for (let t = 0; t < n; t++) {
    if (shooters.every(s => { const r = s.scores[t]||[null,null]; return r[0]!=null && r[1]!=null })) c++
  }
  return c
}

// Serialiserer en hel runde til Firestore-form (scores → strenge).
export function serializeRound(round) {
  return {
    id: round.id||null,
    name: round.name, courseId: round.courseId||null, courseName: round.courseName||null,
    numTargets: round.numTargets, startTarget: round.startTarget||1,
    created: round.created, completed: round.completed||null,
    gpsRoute: round.gpsRoute||null, gpsDuration: round.gpsDuration||null, gpsDistance: round.gpsDistance||null,
    traversalOrder: round.traversalOrder, traversalPos: round.traversalPos||0,
    shooters: round.shooters.map(s => ({ id:s.id, name:s.name, isGuest:s.isGuest||false,
      scores: serializeScores(s.scores) }))
  }
}

// Modsatte af serializeRound (strenge → scores-array).
export function deserializeRound(data) {
  return { ...data, shooters: (data.shooters||[]).map(s => ({ ...s, scores: parseScores(s.scores) })) }
}

// Cirkulær rækkefølge af målindeks fra et startmål.
export function buildOrder(start,total){return Array.from({length:total},(_,i)=>(start+i)%total)}
