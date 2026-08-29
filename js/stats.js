// js/stats.js — Analysestatistik (ren beregning, ingen DOM/Firebase).

import { scoreVal, calcTotal, arrowsPerTarget, scoreValuesFor, killZoneValuesFor, DEFAULT_RULESET } from './scoring.js'

// Beregner nøgletal for analysevisningen ud fra et sæt runder set fra én skytte:
// totalscorer, snit pr. pil-position, scorezone-fordeling og bedste/sværeste mål.
// Falder tilbage til første skytte hvis userId ikke findes i en runde.
export function calcAnalyseStats(rounds,userId){
  const getMe=r=>r.shooters.find(x=>x.id===userId)||r.shooters?.[0]
  const myScores=rounds.map(r=>{const s=getMe(r);return s?calcTotal(s.scores):null}).filter(v=>v!==null)

  // PIL 1 vs PIL 2-sammenligning og fordeling pr. scorezone kræver ÉN fælles
  // pointskala — kun meningsfuldt hvis ALLE runder i udvalget deler samme
  // regelsæt (uanset hvilket) OG det regelsæt har mindst 2 pile pr. mål.
  // Ved en blanding af regelsæt (fx WA+DGS, forskellige scorezoner) er der
  // ingen fælles skala, så pilEligible bliver false og kalderen skal vise
  // en forklarende note i stedet for tallene.
  const rulesetsInPlay=new Set(rounds.map(r=>r.ruleset||DEFAULT_RULESET))
  const pilRuleset=rulesetsInPlay.size===1?[...rulesetsInPlay][0]:null
  const pilEligible=!!pilRuleset&&arrowsPerTarget(pilRuleset)>=2

  let p1t=0,p1n=0,p2t=0,p2n=0
  const zoneValues=pilEligible?scoreValuesFor(pilRuleset):[]
  const distP1={},distP2={}
  zoneValues.forEach(z=>{distP1[z]=0;distP2[z]=0})
  // distAll: samlet fordeling for de faktiske runder i udvalget (ingen
  // forudbestemte zone-nøgler — bruges hvor en rundes totale fordeling skal
  // vises uden PIL1-vs-PIL2-opdeling, fx sammenlign-tilstands "fordeling
  // pr. scorezone", som blot er en total, ikke et reelt split).
  const distAll={}
  // Samlet snit/pil på tværs af ALLE positioner — beregnes uafhængigt af
  // pilEligible, så et 1-pil-regelsæt (fx HDH-IAA) stadig kan vise et
  // meningsfuldt SNT/PIL-tal, selvom PIL1-vs-PIL2-opdelingen ikke giver mening.
  let allArrowT=0,allArrowN=0
  rounds.forEach(r=>{
    const s=getMe(r);if(!s)return
    s.scores.forEach(t=>{
      t.forEach(v=>{if(v!=null){distAll[v]=(distAll[v]||0)+1;allArrowT+=scoreVal(v);allArrowN++}})
    })
    if(!pilEligible)return
    s.scores.forEach(t=>{
      if(t[0]!=null){if(distP1[t[0]]!==undefined)distP1[t[0]]++;p1t+=scoreVal(t[0]);p1n++}
      if(t[1]!=null){if(distP2[t[1]]!==undefined)distP2[t[1]]++;p2t+=scoreVal(t[1]);p2n++}
    })
  })
  const p1avg=p1n?(p1t/p1n).toFixed(2):0,p2avg=p2n?(p2t/p2n).toFixed(2):0
  const pilAvg=(p1n+p2n)?((p1t+p2t)/(p1n+p2n)).toFixed(2):0
  const overallPilAvg=allArrowN?(allArrowT/allArrowN).toFixed(2):0
  const numTargets=rounds[0]?.numTargets||24
  const targetAvgs=Array.from({length:numTargets},(_,ti)=>{
    let tot=0,cnt=0
    rounds.forEach(r=>{const s=getMe(r);if(!s)return;const row=s.scores[ti]||[null,null];row.forEach(v=>{if(v!=null){tot+=scoreVal(v);cnt++}})})
    return cnt?(tot/cnt):null
  })
  const validAvgs=targetAvgs.map((v,i)=>({v,i})).filter(x=>x.v!==null)
  const bestTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v>b.v?a:b):null
  const worstTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v<b.v?a:b):null
  return {myScores,p1avg,p2avg,pilAvg,overallPilAvg,distP1,distP2,distAll,bestTarget,worstTarget,pilRuleset,pilEligible}
}

// Standardafvigelse (population) — bruges som mål for hvor ensartet skytten
// har skudt (fx pr. skudposition gennem en runde, eller pr. runde over tid).
export function stdDev(values){
  if(!values.length)return 0
  const m=values.reduce((a,b)=>a+b,0)/values.length
  return Math.sqrt(values.reduce((a,b)=>a+(b-m)**2,0)/values.length)
}

// Simpel lineær regression (mindste kvadraters metode) — bruges til
// trendlinjen i udviklingsgraferne.
export function linReg(points){
  const n=points.length
  if(n<2)return {slope:0,intercept:points[0]?.y||0}
  const sx=points.reduce((a,p)=>a+p.x,0),sy=points.reduce((a,p)=>a+p.y,0)
  const sxy=points.reduce((a,p)=>a+p.x*p.y,0),sxx=points.reduce((a,p)=>a+p.x*p.x,0)
  const denom=n*sxx-sx*sx
  const slope=denom?(n*sxy-sx*sy)/denom:0
  return {slope,intercept:(sy-slope*sx)/n}
}

// Pr.-position gennemsnit (P1+P2 kombineret) for ÉN runde — samme opbygning
// som targetAvgs ovenfor, men skaleret til brug pr. runde (fx til at
// sammenligne konsistens på tværs af runder over tid på samme bane).
export function calcRoundPositionAvgs(round,userId){
  const s=round.shooters?.find(x=>x.id===userId)||round.shooters?.[0]
  if(!s)return []
  const nt=round.numTargets||24
  const order=round.traversalOrder||Array.from({length:nt},(_,i)=>i)
  const out=[]
  for(let pos=0;pos<nt;pos++){
    const tIdx=order[pos];if(tIdx===undefined)continue
    const row=s.scores[tIdx]||[null,null]
    let tot=0,cnt=0
    row.forEach(v=>{if(v!=null){tot+=scoreVal(v);cnt++}})
    if(cnt)out.push(tot/cnt)
  }
  return out
}

// Faste afstandsbånd (meter) til afstands-analysen herunder — banernes
// maks-afstand er 30 m, så bånd i 10-meter-spring op til 30 m er dækkende.
const DISTANCE_BUCKETS=[
  {key:'0to10',min:0,max:10},
  {key:'10to20',min:10,max:20},
  {key:'20to30',min:20}
]
function bucketFor(d){return DISTANCE_BUCKETS.find(b=>(b.min==null||d>=b.min)&&(b.max==null||d<b.max))}

// Round-timestamp (Firestore Timestamp/{seconds}/number) → ms. Samme mønster
// som bruges inline flere steder (results.js/analyse.js) — samlet her da
// afstands-trenden er den eneste beregning i stats.js der har brug for det.
function toMs(c){return c?.toDate?c.toDate().getTime():c?.seconds?c.seconds*1000:typeof c==='number'?c:null}

const MIN_BUCKET_SHOTS=10       // for lidt data i én afstandsgruppe giver et misvisende tal
const TREND_WINDOW_DAYS=56      // "de sidste 8 uger"
const MIN_TREND_ROUNDS=4        // for få runder i vinduet til at vise en meningsfuld tendens

// Afstands-analyse: hvilke afstande rammer skytten bedst/dårligst på, en
// udviklingstendens over de seneste 8 uger, og et estimeret pointpotentiale
// hvis den svageste afstandsgruppe kom op på skyttens eget snit. Kræver at
// runderne er spillet på en bane MED udfyldte mål-afstande — courses leveres
// separat (fra state.courses), da en runde kun kender sit courseId.
export function calcDistanceInsights(rounds,userId,courses){
  const getMe=r=>r.shooters.find(x=>x.id===userId)||r.shooters?.[0]
  const buckets={};DISTANCE_BUCKETS.forEach(b=>{buckets[b.key]={...b,shots:0,kills:0,scoreSum:0}})
  const bucketedRoundIds=new Set()
  // De faktiske scoreværdier der tælles som "kill" (fx "11/10" for WA/HDH-IAA,
  // "5/3" for DGS) — vises i stedet for det abstrakte "kill zone"-begreb, så
  // det er tydeligt hvad tallet dækker over. Kun ét sæt vises, hvis udvalget
  // reelt kun bruger ét regelsæt (matcher appens øvrige pilEligible-mønster).
  const killLabels=new Set()

  rounds.forEach(r=>{
    const course=courses.find(c=>c.id===r.courseId)
    if(!course||!course.targets?.length)return
    const s=getMe(r);if(!s)return
    const kill=killZoneValuesFor(r.ruleset||DEFAULT_RULESET)
    s.scores.forEach((row,tIdx)=>{
      const dist=course.targets[tIdx]?.distance
      if(dist==null||dist==='')return
      const b=bucketFor(dist);if(!b)return
      row.forEach(v=>{
        if(v==null)return
        buckets[b.key].shots++;buckets[b.key].scoreSum+=scoreVal(v)
        if(kill.includes(v))buckets[b.key].kills++
        bucketedRoundIds.add(r.id)
        killLabels.add(kill.join('/'))
      })
    })
  })
  const killLabel=killLabels.size===1?[...killLabels][0]:null

  const activeBuckets=Object.values(buckets).filter(b=>b.shots>0).map(b=>({
    ...b,killPct:b.kills/b.shots*100,avgPerArrow:b.scoreSum/b.shots
  }))
  const totalShots=activeBuckets.reduce((a,b)=>a+b.shots,0)
  const totalKills=activeBuckets.reduce((a,b)=>a+b.kills,0)
  const totalScore=activeBuckets.reduce((a,b)=>a+b.scoreSum,0)
  const overall=totalShots?{killPct:totalKills/totalShots*100,avgPerArrow:totalScore/totalShots}:null
  const eligible=activeBuckets.filter(b=>b.shots>=MIN_BUCKET_SHOTS)
  const weakest=eligible.length?eligible.reduce((a,b)=>b.killPct<a.killPct?b:a):null

  let pointPotential=null
  if(weakest&&overall&&weakest.avgPerArrow<overall.avgPerArrow&&bucketedRoundIds.size){
    const avgShotsPerRound=weakest.shots/bucketedRoundIds.size
    const gain=(overall.avgPerArrow-weakest.avgPerArrow)*avgShotsPerRound
    if(gain>=0.5)pointPotential=Math.round(gain)
  }

  // Udvikling: snit/pil for hver runde i det 8-ugers-vindue, delt i ældste/
  // nyeste halvdel — bruger ALLE runder i udvalget (ikke kun bane-koblede
  // med afstande), da tendensen ikke er afstands-specifik.
  const cutoff=Date.now()-TREND_WINDOW_DAYS*86400000
  const windowRounds=rounds.map(r=>{
    const ms=toMs(r.completed)??toMs(r.created)
    const s=getMe(r);if(!s||ms==null||ms<cutoff)return null
    const arr=s.scores.flat().filter(v=>v!=null)
    if(!arr.length)return null
    return {ms,avgPerArrow:arr.reduce((a,v)=>a+scoreVal(v),0)/arr.length}
  }).filter(Boolean).sort((a,b)=>a.ms-b.ms)

  let trend=null
  if(windowRounds.length>=MIN_TREND_ROUNDS){
    const mid=Math.ceil(windowRounds.length/2)
    const oldHalf=windowRounds.slice(0,mid),newHalf=windowRounds.slice(mid)
    const avg=arr=>arr.reduce((a,x)=>a+x.avgPerArrow,0)/arr.length
    const oldAvg=avg(oldHalf),newAvg=avg(newHalf)
    if(oldAvg>0)trend={pctChange:(newAvg-oldAvg)/oldAvg*100,weeks:TREND_WINDOW_DAYS/7,rounds:windowRounds.length}
  }

  return {buckets:activeBuckets,overall,weakest,pointPotential,trend,killLabel,
    roundsUsed:bucketedRoundIds.size,roundsTotal:rounds.length,hasData:activeBuckets.length>0}
}
