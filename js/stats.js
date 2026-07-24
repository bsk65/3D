// js/stats.js — Analysestatistik (ren beregning, ingen DOM/Firebase).

import { scoreVal, calcTotal } from './scoring.js'

// Beregner nøgletal for analysevisningen ud fra et sæt runder set fra én skytte:
// totalscorer, snit pr. pil-position, scorezone-fordeling og bedste/sværeste mål.
// Falder tilbage til første skytte hvis userId ikke findes i en runde.
export function calcAnalyseStats(rounds,userId){
  const getMe=r=>r.shooters.find(x=>x.id===userId)||r.shooters?.[0]
  const myScores=rounds.map(r=>{const s=getMe(r);return s?calcTotal(s.scores):null}).filter(v=>v!==null)
  let p1t=0,p1n=0,p2t=0,p2n=0
  const distP1={11:0,10:0,8:0,5:0,M:0},distP2={11:0,10:0,8:0,5:0,M:0}
  rounds.forEach(r=>{
    const s=getMe(r);if(!s)return
    s.scores.forEach(t=>{
      if(t[0]!=null){if(t[0]==='M'){distP1.M++;p1n++}else{distP1[Number(t[0])]=(distP1[Number(t[0])]||0)+1;p1t+=Number(t[0]);p1n++}}
      if(t[1]!=null){if(t[1]==='M'){distP2.M++;p2n++}else{distP2[Number(t[1])]=(distP2[Number(t[1])]||0)+1;p2t+=Number(t[1]);p2n++}}
    })
  })
  const p1avg=p1n?(p1t/p1n).toFixed(2):0,p2avg=p2n?(p2t/p2n).toFixed(2):0
  const pilAvg=(p1n+p2n)?((p1t+p2t)/(p1n+p2n)).toFixed(2):0
  const numTargets=rounds[0]?.numTargets||24
  const targetAvgs=Array.from({length:numTargets},(_,ti)=>{
    let tot=0,cnt=0
    rounds.forEach(r=>{const s=getMe(r);if(!s)return;const row=s.scores[ti]||[null,null];row.forEach(v=>{if(v!=null){tot+=scoreVal(v);cnt++}})})
    return cnt?(tot/cnt):null
  })
  const validAvgs=targetAvgs.map((v,i)=>({v,i})).filter(x=>x.v!==null)
  const bestTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v>b.v?a:b):null
  const worstTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v<b.v?a:b):null
  return {myScores,p1avg,p2avg,pilAvg,distP1,distP2,bestTarget,worstTarget}
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
