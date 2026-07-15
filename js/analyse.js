// js/analyse.js — Analyse-fanen: nøgletal, pil-/mål-statistik, grafer
// (udvikling + pr. skudrækkefølge m. pinch-to-zoom) og sammenligning mod
// andre skytter på samme bane (bane_stats). Samt "analyser denne runde"
// (analyseRound), kaldt fra results.js' renderRoundsList via window-bro.
//
// window.renderAnalyse er en self-registrerende HTML onclick/onchange-handler
// (kaldes også af main.js' switchTab('analyse') via window). analyseRound
// eksporteres normalt fra main.js'/results.js' synspunkt hvis nødvendigt, men
// bruges primært via window.analyseRound (samme bro-mønster som
// window.populateCourseDropdown/window.showVisitResults).

import { state } from './state.js'
import { esc } from './utils.js'
import { scoreVal, calcTotal, parseScores } from './scoring.js'
import { calcAnalyseStats } from './stats.js'
import { db, collection, getDocs } from './firebase-init.js'

function initGraphPinch(svgEl){
  let scale=1,ox=0,oy=0
  let initDist=0,initScale=1,initOx=0,initOy=0,pinchCx=0,pinchCy=0
  let panStartX=0,panStartY=0,panStartOx=0,panStartOy=0
  const apply=()=>{
    svgEl.style.transformOrigin='0 0'
    svgEl.style.transform=scale>1?`translate(${ox}px,${oy}px) scale(${scale})`:''
  }
  svgEl.addEventListener('touchstart',e=>{
    e.preventDefault()
    if(e.touches.length===2){
      const t=e.touches,rect=svgEl.getBoundingClientRect()
      initDist=Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY)
      initScale=scale;initOx=ox;initOy=oy
      pinchCx=(t[0].clientX+t[1].clientX)/2-rect.left
      pinchCy=(t[0].clientY+t[1].clientY)/2-rect.top
    }else if(e.touches.length===1){
      panStartX=e.touches[0].clientX;panStartY=e.touches[0].clientY
      panStartOx=ox;panStartOy=oy
    }
  },{passive:false})
  svgEl.addEventListener('touchmove',e=>{
    e.preventDefault()
    if(e.touches.length===2){
      const t=e.touches,dist=Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY)
      const newScale=Math.min(8,Math.max(1,initScale*dist/initDist))
      const elemX=(pinchCx-initOx)/initScale,elemY=(pinchCy-initOy)/initScale
      ox=pinchCx-elemX*newScale;oy=pinchCy-elemY*newScale;scale=newScale;apply()
    }else if(e.touches.length===1&&scale>1){
      ox=panStartOx+e.touches[0].clientX-panStartX
      oy=panStartOy+e.touches[0].clientY-panStartY;apply()
    }
  },{passive:false})
  svgEl.addEventListener('touchend',()=>{if(scale<1.05){scale=1;ox=0;oy=0;apply()}},{passive:true})
  let lastTap=0
  svgEl.addEventListener('touchend',()=>{
    const now=Date.now();if(now-lastTap<300){scale=1;ox=0;oy=0;apply()};lastTap=now
  },{passive:true})
}

function analyseRound(id){
  state.pendingAnalyseRound=id
  document.getElementById('analyse-filter').value='specific'
  window.switchTab('analyse')
}
// results.js' renderRoundsList kalder analyseRound via window (bro-mønster,
// undgår cirkulær import — samme som window.populateCourseDropdown).
window.analyseRound = analyseRound

function buildCompareHtml(st1,lbl1,st2,lbl2){
  const zones=['11','10','8','5','M']
  const zColors={'11':'#1a7a3a','10':'#1a5aaa','8':'#d4700a','5':'#7a3aaa','M':'#cc3333'}
  const sc1=st1.myScores[0]||0,sc2=st2.myScores[0]||0,diff=Math.abs(sc1-sc2)
  const sep='<div class="cmp-sep"></div>'
  const pilRow=(st,lbl,col)=>`<div style="font-size:11px;color:${col};margin-bottom:4px;">${esc(lbl)}</div>
    <div class="cmp-pil-grid">
      <div><div class="cmp-pil-lbl">PIL 1</div><div class="cmp-pil-val">${st.p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">SNT/PIL</div><div class="cmp-pil-val-mid">${st.pilAvg}</div>
      </div>
      <div><div class="cmp-pil-lbl">PIL 2</div><div class="cmp-pil-val">${st.p2avg}</div></div>
    </div>`
  const targetRow=(st,lbl,col)=>st.bestTarget&&st.worstTarget?`<div style="font-size:11px;color:${col};margin-bottom:6px;">${esc(lbl)}</div>
    <div class="cmp-target-grid">
      <div class="cmp-target-best">
        <div class="cmp-pil-lbl">BEDSTE</div>
        <div class="cmp-target-best-val">Mål ${st.bestTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${st.bestTarget.v.toFixed(2)}</div>
      </div>
      <div class="cmp-target-worst">
        <div class="cmp-pil-lbl">SVÆRESTE</div>
        <div class="cmp-target-worst-val">Mål ${st.worstTarget.i+1}</div>
        <div class="cmp-target-sub">⌀ ${st.worstTarget.v.toFixed(2)}</div>
      </div>
    </div>`:''
  let h=''
  h+=`<div class="card card-mb16">
    <div class="cmp-section-title">SAMMENLIGNING</div>
    <div class="cmp-score-grid">
      <div>
        <div class="cmp-score-lbl-a">${esc(lbl1)}</div>
        <div class="cmp-score-val-a">${sc1}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
      <div class="cmp-vs">VS</div>
      <div>
        <div class="cmp-score-lbl-b">${esc(lbl2)}</div>
        <div class="cmp-score-val-b">${sc2}</div>
        <div class="cmp-score-unit">POINT</div>
      </div>
    </div>
    <div class="cmp-winner-line">${sc1>sc2?`${esc(lbl1)} vandt med ${diff} point`:sc2>sc1?`${esc(lbl2)} vandt med ${diff} point`:'Uafgjort!'}</div>
  </div>`
  h+=`<div class="card card-mb16">
    <div class="cmp-section-title">PIL STATISTIK</div>
    ${pilRow(st1,lbl1,'var(--acc)')}${sep}${pilRow(st2,lbl2,'#f0c030')}
  </div>`
  if(st1.bestTarget||st2.bestTarget){
    h+=`<div class="card card-mb16">
      <div class="cmp-section-title">BEDSTE OG SVÆRESTE MÅL</div>
      ${targetRow(st1,lbl1,'var(--acc)')}${sep}${targetRow(st2,lbl2,'#f0c030')}
    </div>`
  }
  h+=`<div class="card card-mb16">
    <div class="cmp-section-title">FORDELING PR. SCOREZONE</div>
    <div class="cmp-dist-grid">
      <div></div>
      ${zones.map(z=>`<div style="text-align:center;font-weight:700;color:${zColors[z]};">${z}</div>`).join('')}
      <div class="cmp-dist-lbl-a">${esc(lbl1)}</div>
      ${zones.map(z=>`<div class="cmp-dist-val">${(st1.distP1[z]||0)+(st1.distP2[z]||0)}</div>`).join('')}
      <div class="cmp-dist-lbl-b">${esc(lbl2)}</div>
      ${zones.map(z=>`<div class="cmp-dist-val">${(st2.distP1[z]||0)+(st2.distP2[z]||0)}</div>`).join('')}
    </div>
  </div>`
  return h
}

window.renderAnalyse=function(){
  const el=document.getElementById('analyse-content')
  if(!el)return
  const baneEl=document.getElementById('analyse-bane')
  if(baneEl&&baneEl.options.length<=1){
    const brugteBaner=[...new Set(state.rounds.map(r=>r.courseId).filter(Boolean))]
    brugteBaner.forEach(id=>{
      const c=state.courses.find(x=>x.id===id)
      if(c&&!Array.from(baneEl.options).find(o=>o.value===id)){
        const o=document.createElement('option');o.value=id;o.textContent=c.name;baneEl.appendChild(o)
      }
    })
  }
  if(state.pendingAnalyseRound&&baneEl){
    const pendingRound=state.rounds.find(r=>r.id===state.pendingAnalyseRound)
    if(pendingRound?.courseId&&Array.from(baneEl.options).some(o=>o.value===pendingRound.courseId)){
      baneEl.value=pendingRound.courseId
    }
  }
  const filterVal=document.getElementById('analyse-filter')?.value||'all'
  const filter=filterVal==='all'?0:filterVal==='lastround'?1:filterVal==='specific'?0:Number(filterVal)
  const bane=document.getElementById('analyse-bane')?.value||'all'
  const antalInput=Number(document.getElementById('analyse-antal')?.value)||0
  const rundeWrap=document.getElementById('analyse-runde-wrap')
  const rundeEl=document.getElementById('analyse-runde')
  const rundeWrap2=document.getElementById('analyse-runde-wrap-2')
  const rundeEl2=document.getElementById('analyse-runde-2')
  const rundeLbl=document.getElementById('analyse-runde-lbl')
  const isCompare=filterVal==='compare'
  if(rundeWrap)rundeWrap.style.display=(filterVal==='specific'||isCompare)?'':'none'
  if(rundeWrap2)rundeWrap2.style.display=isCompare?'':'none'
  if(rundeLbl)rundeLbl.style.display=isCompare?'':'none'
  const fmtRD=r=>{const _c=r.created;return _c?.toDate?_c.toDate().toLocaleDateString('da-DK'):_c?.seconds?new Date(_c.seconds*1000).toLocaleDateString('da-DK'):typeof _c==='number'?new Date(_c).toLocaleDateString('da-DK'):'—'}
  const populateRundeSelect=(selectEl,placeholder)=>{
    const relevant=bane==='all'?state.rounds:state.rounds.filter(r=>r.courseId===bane)
    const prevSel=selectEl.value
    selectEl.innerHTML=`<option value="">${placeholder}</option>`
    relevant.forEach(r=>{const o=document.createElement('option');o.value=r.id;o.textContent=`${fmtRD(r)} — ${r.name||'Runde'}`;selectEl.appendChild(o)})
    if(relevant.some(r=>r.id===prevSel))selectEl.value=prevSel
  }
  if((filterVal==='specific'||isCompare)&&rundeEl){
    populateRundeSelect(rundeEl,'Vælg runde...')
    if(state.pendingAnalyseRound){rundeEl.value=state.pendingAnalyseRound;state.pendingAnalyseRound=null}
  }
  if(isCompare&&rundeEl2){
    populateRundeSelect(rundeEl2,'Vælg runde 2...')
  }
  if(isCompare){
    const sel1=rundeEl?.value,sel2=rundeEl2?.value
    if(!sel1||!sel2){el.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}
    const allR=state.rounds.map(r=>({...r,shooters:(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))}))
    const r1=allR.find(r=>r.id===sel1),r2=allR.find(r=>r.id===sel2)
    if(!r1||!r2){el.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}
    const lbl1=`${r1.name||'Runde'} (${fmtRD(r1)})`,lbl2=`${r2.name||'Runde'} (${fmtRD(r2)})`
    el.innerHTML=buildCompareHtml(calcAnalyseStats([r1],state.user?.uid),lbl1,calcAnalyseStats([r2],state.user?.uid),lbl2)
    return
  }
  const allRounds=state.rounds.map(r=>({...r,shooters:(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))}))
  let filtered=bane==='all'?allRounds:allRounds.filter(r=>r.courseId===bane)
  if(filterVal==='specific'){const sel=rundeEl?.value;filtered=sel?filtered.filter(r=>r.id===sel):[]}
  const antal=antalInput||filter
  const rounds=antal&&filterVal!=='specific'?filtered.slice(0,antal):filtered
  if(!rounds.length){el.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}
  const getMe=r=>r.shooters.find(x=>x.id===state.user?.uid)||r.shooters?.[0]
  const myScores=rounds.map(r=>{const s=getMe(r);return s?calcTotal(s.scores):null}).filter(v=>v!==null)
  const avg=myScores.length?(myScores.reduce((a,b)=>a+b,0)/myScores.length).toFixed(1):0
  const best=myScores.length?Math.max(...myScores):0
  const worst=myScores.length?Math.min(...myScores):0
  let p1t=0,p1n=0,p2t=0,p2n=0
  const distP1={11:0,10:0,8:0,5:0,M:0}
  const distP2={11:0,10:0,8:0,5:0,M:0}
  rounds.forEach(r=>{
    const s=getMe(r);if(!s)return
    s.scores.forEach(t=>{
      if(t[0]!=null){if(t[0]==='M'){distP1.M++;p1n++}else{distP1[Number(t[0])]=(distP1[Number(t[0])]||0)+1;p1t+=Number(t[0]);p1n++}}
      if(t[1]!=null){if(t[1]==='M'){distP2.M++;p2n++}else{distP2[Number(t[1])]=(distP2[Number(t[1])]||0)+1;p2t+=Number(t[1]);p2n++}}
    })
  })
  const p1avg=p1n?(p1t/p1n).toFixed(2):0
  const p2avg=p2n?(p2t/p2n).toFixed(2):0
  const pilAvg=(p1n+p2n)?((p1t+p2t)/(p1n+p2n)).toFixed(2):0
  const numTargets=rounds[0]?.numTargets||24
  const targetAvgs=Array.from({length:numTargets},(_,pos)=>{
    let tot=0,cnt=0
    rounds.forEach(r=>{const s=getMe(r);if(!s)return;const order=r.traversalOrder||Array.from({length:r.numTargets||numTargets},(_,i)=>i);const tIdx=order[pos];if(tIdx===undefined)return;const row=s.scores[tIdx]||[null,null];row.forEach(v=>{if(v!=null){tot+=scoreVal(v);cnt++}})})
    return cnt?(tot/cnt):null
  })
  const validAvgs=targetAvgs.map((v,i)=>({v,i})).filter(x=>x.v!==null)
  const bestTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v>b.v?a:b):null
  const worstTarget=validAvgs.length?validAvgs.reduce((a,b)=>a.v<b.v?a:b):null
  const colors={'11':'#1a7a3a','10':'#1a5aaa','8':'#d4700a','5':'#7a3aaa','M':'#cc3333'}
  const zones=['11','10','8','5','M']
  let html=''

  // Nøgletal
  html+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">RUNDER</div><div class="stat-val-28">${rounds.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">SNIT/RUNDE</div><div class="stat-val-28">${avg}</div></div>
    <div class="card stat-card"><div class="stat-lbl">BEDSTE</div><div class="stat-val-28-good">${best}</div></div>
    <div class="card stat-card"><div class="stat-lbl">LAVESTE</div><div class="stat-val-28-bad">${worst}</div></div>
  </div>`

  // Pil statistik
  html+=`<div class="card card-mb16">
    <div class="section-title-mb8">PIL STATISTIK</div>
    <div class="cmp-pil-grid">
      <div><div class="stat-lbl">PIL 1</div><div class="stat-val-22">${p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">SNT/PIL</div>
        <div class="stat-val-22-mid">${pilAvg}</div>
      </div>
      <div><div class="stat-lbl">PIL 2</div><div class="stat-val-22">${p2avg}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(p1avg)>Number(p2avg)?'Bedst med PIL 1 🏹':Number(p2avg)>Number(p1avg)?'Bedst med PIL 2 🏹':'Begge pile er lige gode 🎯'}
    </div>
  </div>`

  // Bedste/dårligste mål
  if(bestTarget&&worstTarget&&bestTarget.i!==worstTarget.i){
    html+=`<div class="card card-mb16">
      <div class="section-title-mb8">BEDSTE OG SVÆRESTE MÅL</div>
      <div class="cmp-target-grid">
        <div class="target-best-box">
          <div class="stat-lbl">BEDSTE</div>
          <div class="target-best-val">Skud nr. ${bestTarget.i+1}</div>
          <div class="target-sub-13">⌀ ${bestTarget.v.toFixed(2)}</div>
        </div>
        <div class="target-worst-box">
          <div class="stat-lbl">SVÆRESTE</div>
          <div class="target-worst-val">Skud nr. ${worstTarget.i+1}</div>
          <div class="target-sub-13">⌀ ${worstTarget.v.toFixed(2)}</div>
        </div>
      </div>
    </div>`
  }

  // Lagkagediagrammer
  html+=`<div class="card card-mb16">
    <div class="section-title-mb12">FORDELING PR. SCOREZONE</div>
    <div class="pie-grid">`
  zones.forEach(z=>{
    const v1=distP1[z]||0,v2=distP2[z]||0,tot=v1+v2
    const r=30
    let pie=''
    if(tot===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="var(--surface2)"/>`}
    else if(v2===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="#ffd700"/>`}
    else if(v1===0){pie=`<circle cx="${r}" cy="${r}" r="${r}" fill="#00cc44"/>`}
    else{
      const pct=v1/tot,angle=pct*2*Math.PI
      const x1=r,y1=0
      const x2=r-r*Math.sin(angle),y2=r-r*Math.cos(angle)
      const large=angle>Math.PI?1:0
      pie=`<path d="M${r},${r} L${x1},${y1} A${r},${r} 0 ${large},0 ${x2},${y2} Z" fill="#ffd700"/>
           <path d="M${r},${r} L${x2},${y2} A${r},${r} 0 ${1-large},0 ${x1},${y1} Z" fill="#00cc44"/>`
    }
    html+=`<div class="pie-cell">
      <div class="pie-zone-label">${z}</div>
      <svg viewBox="0 0 ${r*2} ${r*2}" class="pie-svg">${pie}</svg>
      <div class="pie-count">${v1}/${v2}</div>
      <div class="pie-total">${tot}</div>
    </div>`
  })
  html+=`</div>
    <div class="pie-legend">
      <span><span class="pie-legend-dot-1"></span>PIL 1</span>
      <span><span class="pie-legend-dot-2"></span>PIL 2</span>
    </div>
  </div>`

  // Udviklingsgraf
  if(myScores.length>1){
    const w=340,h=120,pad=30,mn=Math.min(...myScores)-5,mx=Math.max(...myScores)+5
    const pts=myScores.slice().reverse().map((v,i)=>{
      const x=pad+(i/(myScores.length-1))*(w-2*pad),y=h-pad-((v-mn)/(mx-mn))*(h-2*pad)
      return `${x},${y}`
    }).join(' ')
    html+=`<div class="card card-mb16">
      <div class="section-title-mb8">UDVIKLING (RUNDER)</div>
      <svg viewBox="0 0 ${w} ${h}" class="graph-svg">
        <polyline points="${pts}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
        ${myScores.slice().reverse().map((v,i)=>{const x=pad+(i/(myScores.length-1))*(w-2*pad),y=h-pad-((v-mn)/(mx-mn))*(h-2*pad);return `<circle cx="${x}" cy="${y}" r="4" fill="var(--acc)"/><text x="${x}" y="${y-8}" text-anchor="middle" font-size="10" fill="var(--text)">${v}</text>`}).join('')}
        <text x="${pad}" y="${h-5}" font-size="10" fill="var(--muted)">ældst</text>
        <text x="${w-pad}" y="${h-5}" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
      </svg>
    </div>`
  }

  // Per-mål graf - kun ved specifik bane eller seneste runde
  const showTargetGraph=bane!=='all'||filterVal==='lastround'||filterVal==='specific'
  const validTA=targetAvgs.map((v,i)=>({v,i})).filter(x=>x.v!==null)
  if(validTA.length>1&&showTargetGraph){
    const w=340,h=160,padL=42,padB=25,padT=15,padR=15
    const mn=Math.floor(Math.min(...validTA.map(x=>x.v)))
    const mx=Math.ceil(Math.max(...validTA.map(x=>x.v)))
    const range=mx-mn||1
    const toX=idx2=>padL+(numTargets>1?(idx2/(numTargets-1))*(w-padL-padR):0)
    const toY=val=>padT+(h-padT-padB)*(1-(val-mn)/range)
    const pts=validTA.map(({v,i})=>toX(i)+','+toY(v)).join(' ')
    const ticks=[]
    for(let t=mn;t<=mx;t++){if((mx-mn)<=6||t%Math.ceil((mx-mn)/5)===0)ticks.push(t)}
    const ticksSvg=ticks.map(t=>`<line x1="${padL-4}" y1="${toY(t)}" x2="${padL}" y2="${toY(t)}" stroke="var(--muted)" stroke-width="1"/><text x="${padL-6}" y="${toY(t)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${t}</text><line x1="${padL}" y1="${toY(t)}" x2="${w-padR}" y2="${toY(t)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join('')
    const dotsSvg=validTA.map(({v,i})=>`<circle cx="${toX(i)}" cy="${toY(v)}" r="3" fill="var(--acc)"/>`).join('')
    const dotsLargeSvg=validTA.map(({v,i})=>`<circle cx="${toX(i)}" cy="${toY(v)}" r="4" fill="var(--acc)"/><text x="${toX(i)}" y="${toY(v)-8}" text-anchor="middle" font-size="9" fill="#fff">${v.toFixed(1)}</text>`).join('')
    // Bredere fullscreen-version: min 30px pr. mål
    const wFS=Math.max(w,numTargets*30)
    const toXFS=idx2=>padL+(numTargets>1?(idx2/(numTargets-1))*(wFS-padL-padR):0)
    const ptsFS=validTA.map(({v,i})=>toXFS(i)+','+toY(v)).join(' ')
    const ticksSvgFS=ticks.map(t=>`<line x1="${padL-4}" y1="${toY(t)}" x2="${padL}" y2="${toY(t)}" stroke="var(--muted)" stroke-width="1"/><text x="${padL-6}" y="${toY(t)+4}" text-anchor="end" font-size="9" fill="var(--muted)">${t}</text><line x1="${padL}" y1="${toY(t)}" x2="${wFS-padR}" y2="${toY(t)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3"/>`).join('')
    const dotsLargeSvgFS=validTA.map(({v,i})=>`<circle cx="${toXFS(i)}" cy="${toY(v)}" r="5" fill="var(--acc)"/><text x="${toXFS(i)}" y="${toY(v)-10}" text-anchor="middle" font-size="10" fill="#fff">${v.toFixed(1)}</text>`).join('')
    html+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>GENNEMSNIT PR. SKUDRÆKKEFØLGE</span>
        <button class="btn-icon graph-fs-btn" onclick="document.getElementById('graph-fs').classList.remove('hidden')">⤢</button>
      </div>
      <svg viewBox="0 0 ${w} ${h}" class="graph-svg">
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
        <line x1="${padL}" y1="${h-padB}" x2="${w-padR}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
        ${ticksSvg}
        <polyline points="${pts}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round"/>
        ${dotsSvg}
        <text x="${padL}" y="${h-5}" font-size="9" fill="var(--muted)">1</text>
        <text x="${w-padR}" y="${h-5}" text-anchor="end" font-size="9" fill="var(--muted)">${numTargets}</text>
      </svg>
      <div class="graph-caption">Skudrækkefølge — 1 = første mål skudt</div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="this.classList.add('hidden')">
      <div class="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset</div>
        <svg id="graph-fs-svg" viewBox="0 0 ${wFS} ${h}" class="graph-fs-svg">
          <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
          <line x1="${padL}" y1="${h-padB}" x2="${wFS-padR}" y2="${h-padB}" stroke="var(--surface2)" stroke-width="1"/>
          ${ticksSvgFS}
          <polyline points="${ptsFS}" fill="none" stroke="var(--acc)" stroke-width="2.5" stroke-linejoin="round"/>
          ${dotsLargeSvgFS}
          <text x="${padL}" y="${h-5}" font-size="9" fill="var(--muted)">1</text>
          <text x="${toXFS(numTargets-1)}" y="${h-5}" text-anchor="end" font-size="9" fill="var(--muted)">${numTargets}</text>
        </svg>
        <button class="btn btn-dark graph-fs-close-btn" onclick="document.getElementById('graph-fs').classList.add('hidden')">Luk</button>
      </div>
    </div>`
  }

  el.innerHTML=html
  const gfsSvg=document.getElementById('graph-fs-svg')
  if(gfsSvg)initGraphPinch(gfsSvg)

  // Sammenligning med andre skytter på samme bane
  if(bane!=='all'&&state.profile?.kon&&state.profile?.bueklasse){
    const konNavn=state.profile.kon==='herre'?'Herre':'Dame'
    const klasseNavn={langbue:'Langbue',trad:'Traditionel',recurve:'Recurve',compound:'Compound',barbue:'Barbue','buejæger':'Buejæger','trad-buejæger':'Trad. buejæger',rytterbue:'Rytterbue'}[state.profile.bueklasse]||state.profile.bueklasse
    const compEl=document.createElement('div')
    compEl.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div><div class="comp-loading-msg">Henter...</div></div>`
    el.appendChild(compEl)
    getDocs(collection(db,'bane_stats',bane,'runder')).then(snap=>{
      const alle=snap.docs.map(d=>d.data())
      const sammeKlasse=alle.filter(d=>d.kon===state.profile.kon&&d.bueklasse===state.profile.bueklasse)
      if(!sammeKlasse.length){
        compEl.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div><div class="comp-loading-msg">Ingen andre ${konNavn} ${klasseNavn}-skytter har skudt denne bane endnu.</div></div>`
        return
      }
      const validEntries=sammeKlasse.filter(d=>(d.arrowsShot||d.numTargets*2)>0)
      const andresSnit=validEntries.length?(validEntries.reduce((s,d)=>s+d.score/(d.arrowsShot||d.numTargets*2),0)/validEntries.length).toFixed(2):'—'
      const diff=andresSnit!=='—'?Number(pilAvg)-Number(andresSnit):null
      const diffStr=diff!==null?(diff>0?'+':'')+diff.toFixed(2):'—'
      const diffColor=diff===null?'var(--muted)':diff>0?'#2aaa5a':diff<0?'var(--danger)':'var(--muted)'
      compEl.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">DIT SNT/PIL</div><div class="stat-val-22">${pilAvg}</div></div>
          <div class="cmp-pil-mid">
            <div class="stat-lbl">DIFFERENCE</div>
            <div style="font-size:22px;font-weight:700;color:${diffColor};">${diffStr}</div>
          </div>
          <div><div class="stat-lbl">ANDRES SNT/PIL</div><div class="stat-val-22-txt">${andresSnit}</div></div>
        </div>
        <div class="pil-best-note">Baseret på ${sammeKlasse.length} runde${sammeKlasse.length!==1?'r':''} fra andre skytter</div>
      </div>`
    }).catch(()=>{compEl.remove()})
  }
}
