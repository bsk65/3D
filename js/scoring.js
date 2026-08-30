// js/scoring.js — Ren scoringslogik (ingen DOM/Firebase-afhængigheder).
//
// Scores gemmes som 2D-array pr. skytte: scores[targetIndex] = [pil1, ...]
// med værdier fra rundens regelsæt (se RULESETS herunder, fx 11|10|8|5|'M'
// for WA, 5|3|-1|'M' for DGS) eller null. Rækkens længde = antal pile pr.
// mål for regelsættet (2 for WA/DGS, 1 for HDH-IAA). Serialiseres til
// Firestore som streng: "11,10;8,5;M,M" (WA) hhv. "11;8;M" (HDH-IAA).

export const SCORE_VALUES = [11, 10, 8, 5, 'M']

// Regelsæt-registry: hvert forbund har sit eget antal pile pr. mål OG sine
// egne scorezoner (værdier faldende, 'M' for miss). Et nyt forbund tilføjes
// ved at lægge én linje til her — resten af koden er skrevet mod
// arrowsPerTarget()/scoreValuesFor(), ikke mod hardkodede tal/zoner.
// boostThreshold: fornuftig standard-grænse for "Positiv forstærkning"
// (den grønne, blinkende prik der vises når snittet når grænsen) for
// regelsættets skala — forhindrer at fx DGS' 5-3-(-1)-skala arver WA's
// urealistiske standard på 8 (som DGS aldrig kan nå).
export const RULESETS = {
  WA:        { label: 'WA',       arrowsPerTarget: 2, scoreValues: [11, 10, 8, 5, 'M'], boostThreshold: 8 },
  'HDH-IAA': { label: 'HDH-IAA',  arrowsPerTarget: 1, scoreValues: [11, 10, 8, 5, 'M'], boostThreshold: 8 },
  DGS:       { label: 'DGS',      arrowsPerTarget: 2, scoreValues: [5, 3, -1, 'M'],      boostThreshold: 4 },
  // Nøglen holdes sprogneutral (som WA/HDH-IAA/DGS) da den gemmes direkte som
  // round.ruleset og vises rå som rundekort-tag — selve "1 pil"-forklaringen
  // findes kun i opsætnings-dropdown'ens data-i18n-tekst (index.src.html).
  'DGS-1':   { label: 'DGS-1',    arrowsPerTarget: 1, scoreValues: [5, 3, -1, 'M'],      boostThreshold: 4 }
}
export const DEFAULT_RULESET = 'WA'
export function arrowsPerTarget(ruleset) { return RULESETS[ruleset]?.arrowsPerTarget ?? 2 }
export function scoreValuesFor(ruleset) { return RULESETS[ruleset]?.scoreValues ?? SCORE_VALUES }
export function boostThresholdFor(ruleset) { return RULESETS[ruleset]?.boostThreshold ?? 8 }
// "Kill zone" = de to højeste scorezoner for regelsættet (11+10 for WA/HDH-IAA,
// 5+3 for DGS) — bruges af afstands-analysen i stats.js til at vurdere
// træfsikkerhed pr. afstandsgruppe. Ét sted at justere definitionen senere.
export function killZoneValuesFor(ruleset) { return scoreValuesFor(ruleset).slice(0, 2) }

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

// Antal forekomster af hver scorezone (zonerne bestemmes af rundens regelsæt).
export function calcDistribution(scores, ruleset) {
  const d = {}
  scoreValuesFor(ruleset).forEach(z => { d[z] = 0 })
  scores.flat().forEach(v => { if (v != null && d[v] !== undefined) d[v]++ })
  return d
}

// Skytten med højeste total. null for tom liste.
export function findWinner(shooters) {
  if (!shooters.length) return null
  return shooters.reduce((b, s) => calcTotal(s.scores) > calcTotal(b.scores) ? s : b, shooters[0])
}

// Er skyttens snit lig med eller over en grænse ("Positiv forstærkning")?
// false hvis intet er skudt endnu.
export function isAtOrAboveThreshold(scores, threshold) {
  const all = scores.flat().filter(v => v != null)
  if (!all.length) return false
  return (all.reduce((s,v) => s + scoreVal(v), 0) / all.length) >= threshold
}

// Opretter et tomt skytte-objekt.
export function makeShooter(id, name, isGuest) { return { id, name, isGuest: !!isGuest, scores: [] } }

// Udfylder scores-array med tomme mål-rækker (længde = pile pr. mål) op til n mål.
export function normalizeScores(s, n, arrowsPerTgt=2) {
  while (s.scores.length < n) s.scores.push(Array(arrowsPerTgt).fill(null))
}

// Antal mål hvor ALLE skytter har skudt samtlige pile for det mål.
export function countScored(shooters, n, arrowsPerTgt=2) {
  let c = 0
  for (let t = 0; t < n; t++) {
    if (shooters.every(s => { const r = s.scores[t]||[]; return r.length>=arrowsPerTgt && r.slice(0,arrowsPerTgt).every(v=>v!=null) })) c++
  }
  return c
}

// Serialiserer en hel runde til Firestore-form (scores → strenge).
export function serializeRound(round) {
  return {
    id: round.id||null,
    name: round.name, courseId: round.courseId||null, courseName: round.courseName||null,
    numTargets: round.numTargets, startTarget: round.startTarget||1,
    ruleset: round.ruleset||DEFAULT_RULESET,
    created: round.created, completed: round.completed||null,
    gpsRoute: round.gpsRoute||null, gpsDuration: round.gpsDuration||null, gpsDistance: round.gpsDistance||null,
    traversalOrder: round.traversalOrder, traversalPos: round.traversalPos||0,
    shooters: round.shooters.map(s => ({ id:s.id, name:s.name, isGuest:s.isGuest||false,
      scores: serializeScores(s.scores) }))
  }
}

// Modsatte af serializeRound (strenge → scores-array).
export function deserializeRound(data) {
  return { ...data, ruleset: data.ruleset||DEFAULT_RULESET, shooters: (data.shooters||[]).map(s => ({ ...s, scores: parseScores(s.scores) })) }
}

// Cirkulær rækkefølge af målindeks fra et startmål.
export function buildOrder(start,total){return Array.from({length:total},(_,i)=>(start+i)%total)}
