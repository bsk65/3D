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
