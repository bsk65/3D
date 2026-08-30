// Modul-tests: verificerer at logikken opfører sig ens når den importeres
// DIREKTE fra de nye ES-moduler (ikke via main.js). Fastfryser modul-API'et
// under omprogrammeringen og udvider det oprindelige sikkerhedsnet.
// scoring.js/gps.js/stats.js er rene (ingen DOM/Firebase). meetups.js
// importerer firebase-init.js ved import, så firebase-mock skal loades først.
import './firebase-mock.js'
import { describe, it, expect } from 'vitest'
import {
  SCORE_VALUES, scoreVal, parseScores, serializeScores, calcTotal, calcAverage,
  calcTargetAverage, calcDistribution, findWinner, isAtOrAboveThreshold, makeShooter,
  normalizeScores, countScored, serializeRound, deserializeRound, buildOrder,
  killZoneValuesFor
} from '../js/scoring.js'
import {
  parseRoute, haversine, formatDuration, formatDistance, findNearestTarget,
  toggleGpsPause, stopTracking
} from '../js/gps.js'
import { calcAnalyseStats, calcDistanceInsights } from '../js/stats.js'
import { getUnseenMeetupCount } from '../js/meetups.js'

describe('scoring.js modul', () => {
  it('SCORE_VALUES er de gyldige scorezoner i fast rækkefølge', () => {
    expect(SCORE_VALUES).toEqual([11, 10, 8, 5, 'M'])
  })

  it('scoreVal og calcTotal matcher via modulet', () => {
    expect(scoreVal('M')).toBe(0)
    expect(calcTotal([[11, 10], ['M', 5]])).toBe(26)
  })

  it('parse/serialize er hinandens omvendte (round-trip)', () => {
    const s = '11,10;8,-;M,5'
    expect(serializeScores(parseScores(s))).toBe(s)
  })

  it('calcDistribution ignorerer værdier uden for zonerne', () => {
    // 7 er ikke en gyldig zone og skal ikke tælles nogen steder
    expect(calcDistribution([[7, 11]])).toEqual({ 11: 1, 10: 0, 8: 0, 5: 0, M: 0 })
  })

  it('calcAverage/calcTargetAverage giver null uden skud', () => {
    expect(calcAverage([[null, null]])).toBeNull()
    expect(calcTargetAverage([{ scores: [[null, null]] }], 0)).toBeNull()
  })

  it('isAtOrAboveThreshold og findWinner', () => {
    expect(isAtOrAboveThreshold([[5, 5]], 8)).toBe(false)
    expect(isAtOrAboveThreshold([[11, 11]], 8)).toBe(true)
    const a = { scores: [[5, 5]] }, b = { scores: [[11, 11]] }
    expect(findWinner([a, b])).toBe(b)
  })

  it('makeShooter + normalizeScores + countScored spiller sammen', () => {
    const s = makeShooter('u1', 'Test')
    expect(s).toEqual({ id: 'u1', name: 'Test', isGuest: false, scores: [] })
    normalizeScores(s, 2)
    expect(s.scores).toEqual([[null, null], [null, null]])
    s.scores[0] = [11, 10]
    expect(countScored([s], 2)).toBe(1)
  })

  it('serializeRound bevarer gps- og traversal-felter og round-tripper', () => {
    const round = {
      id: 'r1', name: 'R', numTargets: 2, startTarget: 2,
      created: 1, gpsRoute: '55.1,10.2', gpsDuration: 60, gpsDistance: 120,
      traversalOrder: [1, 0], traversalPos: 1,
      shooters: [{ id: 'u1', name: 'A', scores: [[11, 10], ['M', 5]] }]
    }
    const s = serializeRound(round)
    expect(s.gpsRoute).toBe('55.1,10.2')
    expect(s.gpsDuration).toBe(60)
    expect(s.startTarget).toBe(2)
    expect(s.traversalOrder).toEqual([1, 0])
    expect(s.shooters[0].scores).toBe('11,10;M,5')
    expect(deserializeRound(s).shooters[0].scores).toEqual([[11, 10], ['M', 5]])
  })

  it('deserializeRound tåler manglende shooters', () => {
    expect(deserializeRound({ id: 'x' }).shooters).toEqual([])
  })

  it('buildOrder wraparound', () => {
    expect(buildOrder(3, 4)).toEqual([3, 0, 1, 2])
  })

  it('killZoneValuesFor giver de to højeste scorezoner pr. regelsæt', () => {
    expect(killZoneValuesFor('WA')).toEqual([11, 10])
    expect(killZoneValuesFor('HDH-IAA')).toEqual([11, 10])
    expect(killZoneValuesFor('DGS')).toEqual([5, 3])
    expect(killZoneValuesFor('DGS-1')).toEqual([5, 3])
  })
})

describe('gps.js modul', () => {
  it('parseRoute parser flere punkter', () => {
    expect(parseRoute('55.1,10.2;55.2,10.3')).toEqual([
      { lat: 55.1, lng: 10.2 }, { lat: 55.2, lng: 10.3 }
    ])
  })

  it('haversine symmetrisk og 0 for samme punkt', () => {
    const a = { lat: 55.4, lng: 10.4 }, b = { lat: 55.41, lng: 10.41 }
    expect(haversine(a, a)).toBe(0)
    expect(haversine(a, b)).toBeCloseTo(haversine(b, a), 9)
  })

  it('formatDuration/formatDistance grænseværdier', () => {
    expect(formatDuration(0)).toBe('00:00')
    expect(formatDistance(999)).toBe('999 m')
    expect(formatDistance(1000)).toBe('1.00 km')
  })

  it('findNearestTarget vælger nærmeste med gps', () => {
    const targets = [{ gps: { lat: 0, lng: 0 } }, { gps: { lat: 10, lng: 10 } }]
    expect(findNearestTarget(targets, { lat: 9, lng: 9 })).toBe(1)
  })

  it('toggleGpsPause skifter tilstand frem og tilbage', () => {
    const first = toggleGpsPause()
    const second = toggleGpsPause()
    expect(typeof first).toBe('boolean')
    expect(second).toBe(!first)
  })

  it('stopTracking uden aktiv sporing giver nul-resultat', () => {
    expect(stopTracking()).toEqual({ route: '', distance: 0, duration: 0 })
  })
})

describe('stats.js modul', () => {
  it('samler flere runder og finder bedste/sværeste mål', () => {
    const rounds = [
      { numTargets: 2, shooters: [{ id: 'u1', scores: [[11, 10], [5, 'M']] }] },
      { numTargets: 2, shooters: [{ id: 'u1', scores: [[10, 8], [8, 5]] }] }
    ]
    const r = calcAnalyseStats(rounds, 'u1')
    expect(r.myScores).toEqual([26, 31])
    // Mål 0 har snit (11+10+10+8)/4 = 9.75; mål 1 har (5+0+8+5)/4 = 4.5
    expect(r.bestTarget.i).toBe(0)
    expect(r.worstTarget.i).toBe(1)
  })
})

describe('calcDistanceInsights (stats.js)', () => {
  // 5 mål ved 5 m (bånd 0-10) + 5 mål ved 15 m (bånd 10-20) — 10 skud pr.
  // bånd, nok til at overskride MIN_BUCKET_SHOTS-grænsen i stats.js.
  const courses = [{
    id: 'c1',
    targets: [
      { distance: 5 }, { distance: 5 }, { distance: 5 }, { distance: 5 }, { distance: 5 },
      { distance: 15 }, { distance: 15 }, { distance: 15 }, { distance: 15 }, { distance: 15 }
    ]
  }]
  const roundAllKillsThenMisses = {
    id: 'r1', courseId: 'c1', ruleset: 'WA',
    shooters: [{ id: 'u1', scores: [
      [11, 11], [11, 11], [11, 11], [11, 11], [11, 11], // 0-10 m: alle kills
      [5, 5], [5, 5], [5, 5], [5, 5], [5, 5]             // 10-20 m: ingen kills
    ] }]
  }

  it('grupperer skud i afstandsbånd og tæller kill-zone-ramte (top 2 scorezoner)', () => {
    const r = calcDistanceInsights([roundAllKillsThenMisses], 'u1', courses)
    expect(r.hasData).toBe(true)
    expect(r.buckets.find(b => b.key === '0to10')).toMatchObject({ shots: 10, kills: 10, killPct: 100, avgPerArrow: 11 })
    expect(r.buckets.find(b => b.key === '10to20')).toMatchObject({ shots: 10, kills: 0, killPct: 0, avgPerArrow: 5 })
    expect(r.killLabel).toBe('11/10')
  })

  it('finder svageste gruppe og beregner et pointpotentiale når snittet er lavere end gennemsnittet', () => {
    const r = calcDistanceInsights([roundAllKillsThenMisses], 'u1', courses)
    expect(r.weakest.key).toBe('10to20')
    expect(r.overall.avgPerArrow).toBe(8) // (10*11 + 10*5) / 20
    expect(r.pointPotential).toBe(30)     // (8-5) snit-forskel × 10 skud i gruppen / 1 runde
  })

  it('springer runder uden kendt bane eller mål-afstande over', () => {
    const round = { id: 'r2', courseId: 'ukendt-bane', ruleset: 'WA', shooters: [{ id: 'u1', scores: [[11, 10]] }] }
    const r = calcDistanceInsights([round], 'u1', courses)
    expect(r.hasData).toBe(false)
    expect(r.buckets).toEqual([])
  })

  it('behandler tom streng som mål-afstand ligesom manglende (null)', () => {
    const coursesWithEmpty = [{ id: 'c1', targets: [{ distance: '' }, { distance: 15 }] }]
    const round = { id: 'r3', courseId: 'c1', ruleset: 'WA', shooters: [{ id: 'u1', scores: [[11, 10], [5, 5]] }] }
    const r = calcDistanceInsights([round], 'u1', coursesWithEmpty)
    expect(r.buckets.some(b => b.key === '0to10')).toBe(false)
    expect(r.buckets.find(b => b.key === '10to20').shots).toBe(2)
  })

  it('kræver mindst 4 runder inden for de seneste 8 uger for at vise en udviklingstendens', () => {
    const now = Date.now()
    const mkRound = (daysAgo, avg) => ({
      id: `r-${daysAgo}`, courseId: 'ingen', ruleset: 'WA', completed: now - daysAgo * 86400000,
      shooters: [{ id: 'u1', scores: [[avg, avg]] }]
    })
    expect(calcDistanceInsights([mkRound(1, 5), mkRound(2, 5)], 'u1', []).trend).toBeNull()

    // 2 gamle runder (snit 5) + 2 nye runder (snit 10) => tendens +100%
    const trend = calcDistanceInsights([mkRound(50, 5), mkRound(40, 5), mkRound(5, 10), mkRound(1, 10)], 'u1', []).trend
    expect(trend).not.toBeNull()
    expect(trend.pctChange).toBeCloseTo(100, 5)
    expect(trend.rounds).toBe(4)
  })
})

describe('meetups.js modul', () => {
  it('getUnseenMeetupCount er 0 for tom liste', () => {
    expect(getUnseenMeetupCount([], 0)).toBe(0)
  })

  it('tæller kun aftaler nyere end sidst-set-tidspunktet', () => {
    const lastSeen = 1000
    const meetups = [
      { id: 'a', updatedAt: 500 },
      { id: 'b', updatedAt: 1500 },
      { id: 'c', updatedAt: 2000 }
    ]
    expect(getUnseenMeetupCount(meetups, lastSeen)).toBe(2)
  })

  it('håndterer Firestore Timestamp-objekter via toMillis()', () => {
    const meetups = [{ id: 'a', updatedAt: { toMillis: () => 5000 } }]
    expect(getUnseenMeetupCount(meetups, 1000)).toBe(1)
    expect(getUnseenMeetupCount(meetups, 6000)).toBe(0)
  })
})
