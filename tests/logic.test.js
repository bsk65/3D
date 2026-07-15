// Baseline-tests: fastfryser den nuværende opførsel af beregningslogikken i js/main.js,
// FØR en eventuel omprogrammering går i gang. Formålet er ikke at teste "korrekthed"
// i abstrakt forstand, men at have et referencepunkt en ny implementering skal matche.
import './firebase-mock.js'
import { describe, it, expect } from 'vitest'
import {
  esc, scoreVal, parseScores, serializeScores, calcTotal, calcAverage,
  calcTargetAverage, calcDistribution, findWinner, isBelowThreshold,
  makeShooter, normalizeScores, countScored, serializeRound, deserializeRound,
  parseRoute, haversine, formatDuration, formatDistance, findNearestTarget,
  buildOrder, calcAnalyseStats
} from '../js/main.js'

describe('esc', () => {
  it('escaper HTML-specialtegn', () => {
    expect(esc(`<b>"quote" & 'apos'</b>`)).toBe('&lt;b&gt;&quot;quote&quot; &amp; &#39;apos&#39;&lt;/b&gt;')
  })
  it('haandterer null/undefined som tom streng', () => {
    expect(esc(null)).toBe('')
    expect(esc(undefined)).toBe('')
  })
  it('konverterer tal til streng', () => {
    expect(esc(5)).toBe('5')
  })
})

describe('scoreVal', () => {
  it("'M' og null/undefined tæller som 0", () => {
    expect(scoreVal('M')).toBe(0)
    expect(scoreVal(null)).toBe(0)
    expect(scoreVal(undefined)).toBe(0)
  })
  it('konverterer talværdier', () => {
    expect(scoreVal(10)).toBe(10)
    expect(scoreVal('8')).toBe(8)
    expect(scoreVal(0)).toBe(0)
  })
})

describe('parseScores / serializeScores', () => {
  it('parser tom/manglende streng til tom array', () => {
    expect(parseScores('')).toEqual([])
    expect(parseScores(null)).toEqual([])
  })
  it('parser "M" og "-" korrekt', () => {
    expect(parseScores('11,10;8,5;M,M')).toEqual([[11, 10], [8, 5], ['M', 'M']])
    expect(parseScores('11,-;M,5')).toEqual([[11, null], ['M', 5]])
  })
  it('serialize er den omvendte af parse', () => {
    expect(serializeScores([[11, 10], [8, 5], ['M', 'M']])).toBe('11,10;8,5;M,M')
    expect(serializeScores([[11, null], ['M', 5]])).toBe('11,-;M,5')
  })
})

describe('calcTotal', () => {
  it('summerer alle skud, M tæller 0', () => {
    expect(calcTotal([[11, 10], [8, 5], ['M', 'M']])).toBe(34)
  })
  it('tom runde giver 0', () => {
    expect(calcTotal([])).toBe(0)
    expect(calcTotal([[null, null]])).toBe(0)
  })
})

describe('calcAverage', () => {
  it('beregner snit af skudte pile (M=0), afrundet til 1 decimal', () => {
    expect(calcAverage([[11, 10], [8, 5]])).toBe('8.5')
    expect(calcAverage([['M', 10]])).toBe('5.0')
  })
  it('giver null hvis intet er skudt', () => {
    expect(calcAverage([[null, null]])).toBeNull()
  })
})

describe('calcTargetAverage', () => {
  it('beregner snit for et enkelt mål på tværs af skytter', () => {
    const shooters = [{ scores: [[11, 10]] }, { scores: [[8, 5]] }]
    expect(calcTargetAverage(shooters, 0)).toBe('8.5')
  })
  it('giver null hvis ingen har skudt målet endnu', () => {
    expect(calcTargetAverage([{ scores: [[null, null]] }], 0)).toBeNull()
  })
})

describe('calcDistribution', () => {
  it('tæller forekomster af hver værdi', () => {
    expect(calcDistribution([[11, 10], [8, 5], ['M', 'M']])).toEqual({ 11: 1, 10: 1, 8: 1, 5: 1, M: 2 })
  })
  it('starter på nul for uskudte mål', () => {
    expect(calcDistribution([[null, null]])).toEqual({ 11: 0, 10: 0, 8: 0, 5: 0, M: 0 })
  })
})

describe('findWinner', () => {
  it('finder skytten med højeste totalscore', () => {
    const shooters = [{ scores: [[11, 10]] }, { scores: [[8, 5]] }]
    expect(findWinner(shooters)).toBe(shooters[0])
  })
  it('giver null for tom liste', () => {
    expect(findWinner([])).toBeNull()
  })
})

describe('isBelowThreshold', () => {
  it('sammenligner snit mod grænse', () => {
    expect(isBelowThreshold([[5, 5]], 8)).toBe(true)
    expect(isBelowThreshold([[11, 11]], 8)).toBe(false)
  })
  it('giver false hvis intet er skudt', () => {
    expect(isBelowThreshold([[null, null]], 8)).toBe(false)
  })
})

describe('makeShooter', () => {
  it('opretter skytte-objekt med tomme scores', () => {
    expect(makeShooter('u1', 'Bob')).toEqual({ id: 'u1', name: 'Bob', isGuest: false, scores: [] })
    expect(makeShooter('g1', 'Gæst', true)).toEqual({ id: 'g1', name: 'Gæst', isGuest: true, scores: [] })
  })
})

describe('normalizeScores', () => {
  it('udfylder scores-array med [null,null] op til n mål', () => {
    const s = { scores: [[11, 10]] }
    normalizeScores(s, 3)
    expect(s.scores).toEqual([[11, 10], [null, null], [null, null]])
  })
})

describe('countScored', () => {
  it('tæller kun mål hvor ALLE skytter har skudt begge pile', () => {
    const shooters = [
      { scores: [[11, 10], [null, null]] },
      { scores: [[8, 5], [11, 10]] }
    ]
    expect(countScored(shooters, 2)).toBe(1)
  })
})

describe('serializeRound / deserializeRound', () => {
  const round = {
    id: 'r1', name: 'Testrunde', courseId: 'c1', courseName: 'Frøbjerg',
    numTargets: 2, startTarget: 1, created: 123, completed: null,
    gpsRoute: null, gpsDuration: null, gpsDistance: null,
    traversalOrder: [0, 1], traversalPos: 0,
    shooters: [{ id: 'u1', name: 'Bjarne', isGuest: false, scores: [[11, 10], ['M', 5]] }]
  }
  it('serialiserer scores til strenge', () => {
    const s = serializeRound(round)
    expect(s.shooters[0].scores).toBe('11,10;M,5')
    expect(s.id).toBe('r1')
    expect(s.startTarget).toBe(1)
  })
  it('deserializeRound er den omvendte af serializeRound', () => {
    const s = serializeRound(round)
    const d = deserializeRound(s)
    expect(d.shooters[0].scores).toEqual([[11, 10], ['M', 5]])
  })
})

describe('parseRoute', () => {
  it('parser "lat,lng;lat,lng" til punkter', () => {
    expect(parseRoute('55.1,10.2;55.2,10.3')).toEqual([{ lat: 55.1, lng: 10.2 }, { lat: 55.2, lng: 10.3 }])
  })
  it('tom streng giver tom liste', () => {
    expect(parseRoute('')).toEqual([])
  })
})

describe('haversine', () => {
  it('giver 0 for identisk punkt', () => {
    expect(haversine({ lat: 0, lng: 0 }, { lat: 0, lng: 0 })).toBe(0)
  })
  it('beregner afstand i meter (1 breddegrad ≈ 111195 m)', () => {
    expect(haversine({ lat: 0, lng: 0 }, { lat: 1, lng: 0 })).toBeCloseTo(111194.92664455874, 5)
  })
  it('konkret bane-eksempel (~1279 m)', () => {
    expect(haversine({ lat: 55.4, lng: 10.4 }, { lat: 55.41, lng: 10.41 })).toBeCloseTo(1278.6763572344707, 5)
  })
})

describe('formatDuration', () => {
  it('formaterer sekunder som mm:ss', () => {
    expect(formatDuration(5)).toBe('00:05')
    expect(formatDuration(65)).toBe('01:05')
  })
  it('minutter over 59 udvides ikke til timer', () => {
    expect(formatDuration(3661)).toBe('61:01')
  })
})

describe('formatDistance', () => {
  it('viser meter under 1000', () => {
    expect(formatDistance(500)).toBe('500 m')
    expect(formatDistance(999)).toBe('999 m')
  })
  it('viser km med 2 decimaler fra 1000 m', () => {
    expect(formatDistance(1000)).toBe('1.00 km')
    expect(formatDistance(2530)).toBe('2.53 km')
  })
})

describe('findNearestTarget', () => {
  it('finder nærmeste mål med gps', () => {
    const targets = [{ gps: { lat: 0, lng: 0 } }, { gps: { lat: 1, lng: 0 } }]
    expect(findNearestTarget(targets, { lat: 0.9, lng: 0 })).toBe(1)
  })
  it('springer mål uden gps over', () => {
    const targets = [{}, { gps: { lat: 5, lng: 5 } }]
    expect(findNearestTarget(targets, { lat: 5, lng: 5 })).toBe(1)
  })
  it('giver 0 uden mål eller position', () => {
    expect(findNearestTarget([], { lat: 0, lng: 0 })).toBe(0)
    expect(findNearestTarget(null, { lat: 0, lng: 0 })).toBe(0)
    expect(findNearestTarget([{ gps: { lat: 0, lng: 0 } }], null)).toBe(0)
  })
})

describe('buildOrder', () => {
  it('bygger cirkulær rækkefølge fra startmål', () => {
    expect(buildOrder(0, 5)).toEqual([0, 1, 2, 3, 4])
    expect(buildOrder(2, 5)).toEqual([2, 3, 4, 0, 1])
  })
})

describe('calcAnalyseStats', () => {
  it('beregner snit pr. pil, pr. skudposition og bedste/dårligste mål', () => {
    const rounds = [{ numTargets: 2, shooters: [{ id: 'u1', scores: [[11, 10], [8, 5]] }] }]
    const result = calcAnalyseStats(rounds, 'u1')
    expect(result.myScores).toEqual([34])
    expect(result.p1avg).toBe('9.50')
    expect(result.p2avg).toBe('7.50')
    expect(result.pilAvg).toBe('8.50')
    expect(result.distP1).toEqual({ 11: 1, 10: 0, 8: 1, 5: 0, M: 0 })
    expect(result.distP2).toEqual({ 11: 0, 10: 1, 8: 0, 5: 1, M: 0 })
    expect(result.bestTarget).toEqual({ v: 10.5, i: 0 })
    expect(result.worstTarget).toEqual({ v: 6.5, i: 1 })
  })
  it('falder tilbage til første skytte hvis userId ikke findes', () => {
    const rounds = [{ numTargets: 1, shooters: [{ id: 'anden', scores: [[11, 10]] }] }]
    const result = calcAnalyseStats(rounds, 'findes-ikke')
    expect(result.myScores).toEqual([21])
  })
})
