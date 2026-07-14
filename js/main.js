// js/main.js — Indgangspunkt
//
// Al opstarts-/auth-flow-lim (DOMContentLoaded, login/logout, bane-dropdown,
// resterende window.*-handlere) er udtrukket til ./app-init.js. Denne fil er
// nu udelukkende: (1) side-effekt-import af app-init.js, og (2) re-eksport
// af de funktioner som testsuiten (tests/logic.test.js) importerer direkte
// fra '../js/main.js'. Se REWRITE_STATUS.md for hele opsplitnings-historikken.
import './app-init.js'

// ─── SCORING / GPS / STATS — re-eksport til testsuiten ────────────────────────
import { esc } from './utils.js'
export { esc }

import { scoreVal, parseScores, serializeScores, calcTotal,
         calcAverage, calcTargetAverage, calcDistribution, findWinner,
         isBelowThreshold, makeShooter, normalizeScores, countScored,
         serializeRound, deserializeRound, buildOrder } from './scoring.js'
export { scoreVal, parseScores, serializeScores, calcTotal, calcAverage,
         calcTargetAverage, calcDistribution, findWinner, isBelowThreshold,
         makeShooter, normalizeScores, countScored, serializeRound,
         deserializeRound, buildOrder }

import { parseRoute, haversine, formatDuration, formatDistance, findNearestTarget } from './gps.js'
export { parseRoute, haversine, formatDuration, formatDistance, findNearestTarget }

import { calcAnalyseStats } from './stats.js'
export { calcAnalyseStats }

// clean-v1
// analyse2
// rounds-fs
// delete-round-fix
// course-edit
// visit-stats
// stats-course
// finish-fix
// save-rounds
// syntax-fix
// delete-rounds  // delete-rounds
// graph-yaxis
// minimal-fix
// pie-colors
