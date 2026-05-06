// js/scoring.js — Pointtælling og rundelogik

export const SCORE_VALUES = [11, 10, 8, 5, 'M'];
export const SCORE_NUMERIC = { 11: 11, 10: 10, 8: 8, 5: 5, M: 0 };
export const WARN_THRESHOLD_DEFAULT = 8;

/** Parse Firestore score string "11,10;8,M" → [[11,10],[8,'M']] */
export function parseScores(str) {
  if (!str) return [];
  return str.split(';').map(target =>
    target.split(',').map(v => v === 'M' ? 'M' : Number(v))
  );
}

/** Serialise scores to Firestore format */
export function serializeScores(arr) {
  return arr.map(target => target.join(',')).join(';');
}

/** Calculate numeric value of a score entry */
export function scoreVal(v) {
  if (v === 'M' || v === null || v === undefined) return 0;
  return Number(v);
}

/** Total score for one shooter across all targets */
export function calcTotal(scores2d) {
  return scores2d.flat().reduce((s, v) => s + scoreVal(v), 0);
}

/** Average per arrow across all scored targets */
export function calcAverage(scores2d) {
  const all = scores2d.flat().filter(v => v !== null && v !== undefined);
  if (!all.length) return 0;
  return (all.reduce((s, v) => s + scoreVal(v), 0) / all.length).toFixed(1);
}

/** Average per arrow for a specific target index */
export function calcTargetAverage(shooters, targetIdx) {
  const vals = shooters.flatMap(s => {
    const row = s.scores[targetIdx] || [];
    return row.filter(v => v !== null && v !== undefined).map(v => scoreVal(v));
  });
  if (!vals.length) return null;
  return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
}

/** Distribution: count 11/10/8/5/M for one shooter */
export function calcDistribution(scores2d) {
  const dist = { 11: 0, 10: 0, 8: 0, 5: 0, M: 0 };
  scores2d.flat().forEach(v => {
    if (v === 'M') dist.M++;
    else if (v !== null && v !== undefined) {
      const n = Number(v);
      if (dist[n] !== undefined) dist[n]++;
    }
  });
  return dist;
}

/** Find the winner (highest total) */
export function findWinner(shooters) {
  if (!shooters.length) return null;
  return shooters.reduce((best, s) => {
    const t = calcTotal(s.scores);
    return t > calcTotal(best.scores) ? s : best;
  }, shooters[0]);
}

/** Check if a shooter's running average is below threshold */
export function isBelowThreshold(scores2d, threshold = WARN_THRESHOLD_DEFAULT) {
  const all = scores2d.flat().filter(v => v !== null && v !== undefined);
  if (!all.length) return false;
  const avg = all.reduce((s, v) => s + scoreVal(v), 0) / all.length;
  return avg < threshold;
}

/** Build initial shooter object */
export function makeShooter(id, name, isGuest = false) {
  return { id, name, isGuest, scores: [] }; // scores: array of [arrow1, arrow2] per target
}

/** Ensure shooter has score arrays for all targets */
export function normalizeShooterScores(shooter, numTargets) {
  while (shooter.scores.length < numTargets) {
    shooter.scores.push([null, null]);
  }
}

/** Count how many targets have been fully scored (both arrows entered) */
export function countScoredTargets(shooters, numTargets) {
  let count = 0;
  for (let t = 0; t < numTargets; t++) {
    const allScored = shooters.every(s => {
      const row = s.scores[t] || [null, null];
      return row[0] !== null && row[1] !== null;
    });
    if (allScored) count++;
  }
  return count;
}

/** Serialize full round to Firestore-compatible object */
export function serializeRound(round) {
  return {
    name: round.name,
    courseId: round.courseId || null,
    courseName: round.courseName || null,
    numTargets: round.numTargets,
    startTarget: round.startTarget || 1,
    created: round.created,
    completed: round.completed || null,
    shooters: round.shooters.map(s => ({
      id: s.id,
      name: s.name,
      isGuest: s.isGuest || false,
      scores: serializeScores(s.scores.map(row => row.map(v => v === null ? 'M' : v)))
    })),
    gpsRoute: round.gpsRoute || null,
    gpsDuration: round.gpsDuration || null,
    gpsDistance: round.gpsDistance || null,
  };
}

/** Deserialize round from Firestore */
export function deserializeRound(data) {
  return {
    ...data,
    shooters: (data.shooters || []).map(s => ({
      ...s,
      scores: parseScores(s.scores).map(row => row.map(v => v === 'M' ? 'M' : Number(v)))
    }))
  };
}
