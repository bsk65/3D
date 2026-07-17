// Modul-tests: verificerer at logikken opfører sig ens når den importeres
// DIREKTE fra de nye ES-moduler (ikke via main.js). Fastfryser modul-API'et
// under omprogrammeringen og udvider det oprindelige sikkerhedsnet.
// scoring.js/gps.js/stats.js er rene (ingen DOM/Firebase). meetups.js
// importerer firebase-init.js ved import, så firebase-mock skal loades først.
import './firebase-mock.js'
import { describe, it, expect } from 'vitest'
import {
  SCORE_VALUES, scoreVal, parseScores, serializeScores, calcTotal, calcAverage,
  calcTargetAverage, calcDistribution, findWinner, isBelowThreshold, makeShooter,
  normalizeScores, countScored, serializeRound, deserializeRound, buildOrder
} from '../js/scoring.js'
import {
  parseRoute, haversine, formatDuration, formatDistance, findNearestTarget,
  toggleGpsPause, stopTracking
} from '../js/gps.js'
import { calcAnalyseStats } from '../js/stats.js'
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

  it('isBelowThreshold og findWinner', () => {
    expect(isBelowThreshold([[5, 5]], 8)).toBe(true)
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
