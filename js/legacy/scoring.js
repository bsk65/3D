// js/scoring.js — Pointtælling og rundelogik

export const SCORE_VALUES   = [11, 10, 8, 5, 'M'];
export const WARN_THRESHOLD = 8;

export function parseScores(str) {
  if (!str) return [];
  return str.split(';').map(t => t.split(',').map(v => v === 'M' ? 'M' : Number(v)));
}

export function serializeScores(arr) {
  return arr.map(t => t.map(v => v === null ? 'M' : v).join(',')).join(';');
}

export function scoreVal(v) {
  if (v === 'M' || v === null || v === undefined) return 0;
  return Number(v);
}

export function calcTotal(scores) {
  return scores.flat().reduce((s, v) => s + scoreVal(v), 0);
}

export function calcAverage(scores) {
  const all = scores.flat().filter(v => v !== null && v !== undefined);
  if (!all.length) return null;
  return (all.reduce((s, v) => s + scoreVal(v), 0) / all.length).toFixed(1);
}

export function calcTargetAverage(shooters, tIdx) {
  const vals = shooters.flatMap(s => {
    const row = s.scores[tIdx] || [];
    return row.filter(v => v !== null && v !== undefined).map(scoreVal);
  });
  if (!vals.length) return null;
  return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
}

export function calcDistribution(scores) {
  const d = { 11: 0, 10: 0, 8: 0, 5: 0, M: 0 };
  scores.flat().forEach(v => {
    if (v === 'M') d.M++;
    else if (v !== null && v !== undefined && d[Number(v)] !== undefined) d[Number(v)]++;
  });
  return d;
}

export function findWinner(shooters) {
  if (!shooters.length) return null;
  return shooters.reduce((best, s) =>
    calcTotal(s.scores) > calcTotal(best.scores) ? s : best, shooters[0]);
}

export function isBelowThreshold(scores, threshold) {
  const all = scores.flat().filter(v => v !== null && v !== undefined);
  if (!all.length) return false;
  return (all.reduce((s, v) => s + scoreVal(v), 0) / all.length) < threshold;
}

export function makeShooter(id, name, isGuest) {
  return { id, name, isGuest: !!isGuest, scores: [] };
}

export function normalizeScores(shooter, n) {
  while (shooter.scores.length < n) shooter.scores.push([null, null]);
}

export function countScored(shooters, n) {
  let c = 0;
  for (let t = 0; t < n; t++) {
    if (shooters.every(s => {
      const r = s.scores[t] || [null, null];
      return r[0] !== null && r[1] !== null;
    })) c++;
  }
  return c;
}

export function serializeRound(round) {
  return {
    name:        round.name,
    courseId:    round.courseId    || null,
    courseName:  round.courseName  || null,
    numTargets:  round.numTargets,
    startTarget: round.startTarget || 1,
    created:     round.created,
    completed:   round.completed   || null,
    gpsRoute:    round.gpsRoute    || null,
    gpsDuration: round.gpsDuration || null,
    gpsDistance: round.gpsDistance || null,
    traversalOrder: round.traversalOrder,
    traversalPos:   round.traversalPos,
    shooters: round.shooters.map(s => ({
      id: s.id, name: s.name, isGuest: s.isGuest || false,
      scores: serializeScores(s.scores)
    }))
  };
}

export function deserializeRound(data) {
  return {
    ...data,
    shooters: (data.shooters || []).map(s => ({
      ...s,
      scores: parseScores(s.scores)
    }))
  };
}
