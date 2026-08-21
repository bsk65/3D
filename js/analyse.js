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
import { scoreVal, calcTotal, parseScores, arrowsPerTarget, scoreValuesFor, DEFAULT_RULESET } from './scoring.js'
import { calcAnalyseStats, stdDev, linReg, calcRoundPositionAvgs } from './stats.js'
import { db, collection, getDocs } from './firebase-init.js'
import { getViewableUsers, fetchViewedRounds } from './sharing.js'

// Pinch-to-zoom/pan af fullscreen-grafen. `viewportEl` er det faste,
// touch-lyttende "vindue" (overflow:hidden) — `contentEl` er selve SVG'en
// der bliver transformeret. At adskille dem sikrer at HELE grafen zoomer
// uniformt: rører man ved en linje/prik direkte, ville browseren ellers
// (på nogle mobiler) forsøge sin egen native zoom af netop det element,
// hvilket så ud som om "kun linjen" blev større. Derfor har alle grafiske
// SVG-børn pointer-events:none — kun viewportEl må modtage touch-events.
function initGraphPinch(viewportEl,contentEl){
  let scale=1,ox=0,oy=0
  let initDist=0,initScale=1,initOx=0,initOy=0,pinchCx=0,pinchCy=0
  let panStartX=0,panStartY=0,panStartOx=0,panStartOy=0
  const apply=()=>{
    contentEl.style.transformOrigin='0 0'
    contentEl.style.transform=scale>1?`translate(${ox}px,${oy}px) scale(${scale})`:''
  }
  viewportEl.addEventListener('touchstart',e=>{
    e.preventDefault()
    if(e.touches.length===2){
      const t=e.touches,rect=viewportEl.getBoundingClientRect()
      initDist=Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY)
      initScale=scale;initOx=ox;initOy=oy
      pinchCx=(t[0].clientX+t[1].clientX)/2-rect.left
      pinchCy=(t[0].clientY+t[1].clientY)/2-rect.top
    }else if(e.touches.length===1){
      panStartX=e.touches[0].clientX;panStartY=e.touches[0].clientY
      panStartOx=ox;panStartOy=oy
    }
  },{passive:false})
  viewportEl.addEventListener('touchmove',e=>{
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
  viewportEl.addEventListener('touchend',()=>{if(scale<1.05){scale=1;ox=0;oy=0;apply()}},{passive:true})
  let lastTap=0
  viewportEl.addEventListener('touchend',()=>{
    const now=Date.now();if(now-lastTap<300){scale=1;ox=0;oy=0;apply()};lastTap=now
  },{passive:true})
}

// Holder styr på resize/orientationchange- og gesturestart-lyttere så de kan
// fjernes igen ved luk — ellers ville hver åbning af fullscreen-grafen lægge
// endnu et sæt lyttere oveni (memory-leak over tid).
let _fsResizeHandler=null
let _fsGestureHandler=null
function closeGraphFs(){
  const ov=document.getElementById('graph-fs')
  if(ov)ov.classList.add('hidden')
  if(_fsResizeHandler){window.removeEventListener('resize',_fsResizeHandler);window.removeEventListener('orientationchange',_fsResizeHandler);_fsResizeHandler=null}
  if(_fsGestureHandler){document.removeEventListener('gesturestart',_fsGestureHandler);_fsGestureHandler=null}
}
window.closeGraphFs=closeGraphFs

function analyseRound(id){
  state.pendingAnalyseRound=id
  // Runden kommer altid fra egen resultatliste (results.js) — nulstil evt.
  // valgt "Må jeg kigge med?"-seer, ellers ville opslaget i renderAnalyse
  // lede efter runde-id'et i den forkerte persons runder.
  state.viewingUid=null;state.viewingName=null
  document.getElementById('analyse-filter').value='specific'
  window.switchTab('analyse')
}

// Skifter hvis resultater analyse-fanen viser: null/'' = mig selv, ellers en
// uid fra getViewableUsers() (personer der har accepteret ens "Må jeg kigge
// med?"-anmodning, se js/sharing.js). Henter og cacher runderne on-demand.
window.setAnalyseViewer=async function(uid){
  state.viewingUid=uid||null
  const target=uid?getViewableUsers().find(u=>u.uid===uid):null
  state.viewingName=target?.name||null
  if(uid&&!state.viewedRounds[uid]){
    await fetchViewedRounds(uid)
  }
  window.renderAnalyse()
}
// results.js' renderRoundsList kalder analyseRound via window (bro-mønster,
// undgår cirkulær import — samme som window.populateCourseDropdown).
window.analyseRound = analyseRound

// Vælger hvilken person runde 1 hhv. runde 2 hentes fra i "Sammenlign
// runder"-tilstand — uafhængigt af hinanden og af den øverste seer-vælger, så
// man fx kan sammenligne EN AF SINE EGNE runder mod EN AF en vens runder på
// samme bane (før var begge runder altid fra samme kilde, den øverste
// seer-vælger). uid=''→null (mig selv). undefined (state.compareUid1/2's
// startværdi) betyder "følger endnu den øverste seer-vælger" — sat første
// gang isCompare-blokken kører, se renderAnalyse.
window.setCompareKilde=async function(which,uid){
  uid=uid||null
  if(which===1)state.compareUid1=uid;else state.compareUid2=uid
  if(uid&&!state.viewedRounds[uid]){
    await fetchViewedRounds(uid)
  }
  window.renderAnalyse()
}

// Farve pr. scorezone i sammenlign-tilstandens fordelingstabel — dækker alle
// tre regelsæts værdier (WA/HDH-IAA: 11/10/8/5/M, DGS: 5/3/-1/M); ukendte
// fremtidige zoner falder tilbage til --muted.
const CMP_ZONE_COLORS={'11':'#1a7a3a','10':'#1a5aaa','8':'#d4700a','5':'#7a3aaa','M':'#cc3333','3':'#0a8a8a','-1':'#5a5a6a'}

function buildCompareHtml(st1,lbl1,st2,lbl2){
  const sc1=st1.myScores[0]||0,sc2=st2.myScores[0]||0,diff=Math.abs(sc1-sc2)
  const sep='<div class="cmp-sep"></div>'
  const pilRow=(st,lbl,col)=>`<div style="font-size:11px;color:${col};margin-bottom:4px;">${esc(lbl)}</div>
    ${st.pilEligible?`<div class="cmp-pil-grid">
      <div><div class="cmp-pil-lbl">PIL 1</div><div class="cmp-pil-val">${st.p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">SNT/PIL</div><div class="cmp-pil-val-mid">${st.pilAvg}</div>
      </div>
      <div><div class="cmp-pil-lbl">PIL 2</div><div class="cmp-pil-val">${st.p2avg}</div></div>
    </div>`:`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="cmp-pil-lbl">SNT/PIL</div><div class="cmp-pil-val-mid">${st.overallPilAvg}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${st.pilRuleset?`${st.pilRuleset} skydes med 1 pil pr. mål — PIL 1/PIL 2 er derfor ikke relevant`:'Ikke relevant'}</div>`}`
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
  // Zoner = foreningen af begge runders faktiske regelsæt-værdier — dækker
  // korrekt både to runder med samme regelsæt og (sjældnere) to forskellige.
  const cmpZones=[...new Set([
    ...(st1.pilRuleset?scoreValuesFor(st1.pilRuleset):Object.keys(st1.distAll)),
    ...(st2.pilRuleset?scoreValuesFor(st2.pilRuleset):Object.keys(st2.distAll))
  ])]
  h+=`<div class="card card-mb16">
    <div class="cmp-section-title">FORDELING PR. SCOREZONE</div>
    <div class="cmp-dist-grid">
      <div></div>
      ${cmpZones.map(z=>`<div style="text-align:center;font-weight:700;color:${CMP_ZONE_COLORS[z]||'var(--muted)'};">${z}</div>`).join('')}
      <div class="cmp-dist-lbl-a">${esc(lbl1)}</div>
      ${cmpZones.map(z=>`<div class="cmp-dist-val">${st1.distAll[z]||0}</div>`).join('')}
      <div class="cmp-dist-lbl-b">${esc(lbl2)}</div>
      ${cmpZones.map(z=>`<div class="cmp-dist-val">${st2.distAll[z]||0}</div>`).join('')}
    </div>
  </div>`
  return h
}

window.renderAnalyse=function(){
  const el=document.getElementById('analyse-content')
  if(!el)return
  // Hvis resultater vises: mig selv (state.rounds) eller en godkendt "Må jeg
  // kigge med?"-relation (state.viewedRounds, hentet on-demand af setAnalyseViewer).
  const viewingUid=state.viewingUid||state.user?.uid
  const sourceRounds=state.viewingUid?(state.viewedRounds[state.viewingUid]||[]):state.rounds
  const viewableUsers=getViewableUsers()

  const filterVal=document.getElementById('analyse-filter')?.value||'all'
  const isCompare=filterVal==='compare'
  // Sammenlign-tilstand: runde 1 og runde 2 kan hver have deres egen kilde
  // (mig selv eller en godkendt seer-relation), uafhængigt af hinanden og af
  // den øverste seer-vælger — så man fx kan sammenligne en af sine EGNE
  // runder mod en af en vens runder på samme bane. undefined (startværdien,
  // se state.js) betyder "følger stadig den øverste seer-vælger"; sættes til
  // en konkret værdi (inkl. null="mig selv") først når man selv vælger i
  // kilde-dropdownen (window.setCompareKilde).
  const compareUid1=state.compareUid1!==undefined?state.compareUid1:state.viewingUid
  const compareUid2=state.compareUid2!==undefined?state.compareUid2:state.viewingUid
  const compareRounds1=compareUid1?(state.viewedRounds[compareUid1]||[]):state.rounds
  const compareRounds2=compareUid2?(state.viewedRounds[compareUid2]||[]):state.rounds

  const viewerWrap=document.getElementById('analyse-viewer-wrap')
  const viewerEl=document.getElementById('analyse-viewer')
  if(viewerEl){
    while(viewerEl.options.length>1)viewerEl.remove(1)
    viewableUsers.forEach(u=>{const o=document.createElement('option');o.value=u.uid;o.textContent=u.name;viewerEl.appendChild(o)})
    viewerEl.value=state.viewingUid&&viewableUsers.some(u=>u.uid===state.viewingUid)?state.viewingUid:''
    if(viewerWrap)viewerWrap.classList.toggle('hidden',!viewableUsers.length)
  }
  const fillKildeSelect=(selEl,uid)=>{
    if(!selEl)return
    while(selEl.options.length>1)selEl.remove(1)
    viewableUsers.forEach(u=>{const o=document.createElement('option');o.value=u.uid;o.textContent=u.name;selEl.appendChild(o)})
    selEl.value=uid&&viewableUsers.some(u=>u.uid===uid)?uid:''
    selEl.classList.toggle('hidden',!isCompare||!viewableUsers.length)
  }
  fillKildeSelect(document.getElementById('analyse-kilde-1'),compareUid1)
  fillKildeSelect(document.getElementById('analyse-kilde-2'),compareUid2)

  const baneEl=document.getElementById('analyse-bane')
  if(baneEl){
    const prevBaneSel=baneEl.value
    while(baneEl.options.length>1)baneEl.remove(1)
    // I sammenlign-tilstand skal banelisten dække begge runders (potentielt
    // forskellige) kilder — ellers ville en bane kun den ene person har
    // skudt, ikke kunne vælges.
    const baneSourceRounds=isCompare?[...compareRounds1,...compareRounds2]:sourceRounds
    const brugteBaner=[...new Set(baneSourceRounds.map(r=>r.courseId).filter(Boolean))]
    brugteBaner.forEach(id=>{
      const c=state.courses.find(x=>x.id===id)
      if(c){const o=document.createElement('option');o.value=id;o.textContent=c.name;baneEl.appendChild(o)}
    })
    if(brugteBaner.includes(prevBaneSel))baneEl.value=prevBaneSel
  }
  if(state.pendingAnalyseRound&&baneEl&&!state.viewingUid){
    const pendingRound=state.rounds.find(r=>r.id===state.pendingAnalyseRound)
    if(pendingRound?.courseId&&Array.from(baneEl.options).some(o=>o.value===pendingRound.courseId)){
      baneEl.value=pendingRound.courseId
    }
  }
  const filter=filterVal==='all'?0:filterVal==='lastround'?1:filterVal==='specific'?0:Number(filterVal)
  const bane=document.getElementById('analyse-bane')?.value||'all'
  const antalInput=Number(document.getElementById('analyse-antal')?.value)||0
  const rundeWrap=document.getElementById('analyse-runde-wrap')
  const rundeEl=document.getElementById('analyse-runde')
  const rundeWrap2=document.getElementById('analyse-runde-wrap-2')
  const rundeEl2=document.getElementById('analyse-runde-2')
  const rundeLbl=document.getElementById('analyse-runde-lbl')
  if(rundeWrap)rundeWrap.style.display=(filterVal==='specific'||isCompare)?'':'none'
  if(rundeWrap2)rundeWrap2.style.display=isCompare?'':'none'
  if(rundeLbl)rundeLbl.style.display=isCompare?'':'none'
  const fmtRD=r=>{const _c=r.created;return _c?.toDate?_c.toDate().toLocaleDateString('da-DK'):_c?.seconds?new Date(_c.seconds*1000).toLocaleDateString('da-DK'):typeof _c==='number'?new Date(_c).toLocaleDateString('da-DK'):'—'}
  const rulesetFilterEarly=document.getElementById('analyse-ruleset')?.value||'all'
  const populateRundeSelect=(selectEl,placeholder,roundsSource)=>{
    let relevant=bane==='all'?roundsSource:roundsSource.filter(r=>r.courseId===bane)
    if(rulesetFilterEarly!=='all')relevant=relevant.filter(r=>(r.ruleset||'WA')===rulesetFilterEarly)
    const prevSel=selectEl.value
    selectEl.innerHTML=`<option value="">${placeholder}</option>`
    relevant.forEach(r=>{const o=document.createElement('option');o.value=r.id;o.textContent=`${fmtRD(r)} — ${r.name||'Runde'}`;selectEl.appendChild(o)})
    if(relevant.some(r=>r.id===prevSel))selectEl.value=prevSel
  }
  if((filterVal==='specific'||isCompare)&&rundeEl){
    populateRundeSelect(rundeEl,'Vælg runde...',isCompare?compareRounds1:sourceRounds)
    if(state.pendingAnalyseRound){rundeEl.value=state.pendingAnalyseRound;state.pendingAnalyseRound=null}
  }
  if(isCompare&&rundeEl2){
    populateRundeSelect(rundeEl2,'Vælg runde 2...',compareRounds2)
  }
  if(isCompare){
    const sel1=rundeEl?.value,sel2=rundeEl2?.value
    if(!sel1||!sel2){el.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Vælg to runder ovenfor</div>';return}
    const mapR=r=>({...r,shooters:(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))})
    const r1=compareRounds1.map(mapR).find(r=>r.id===sel1),r2=compareRounds2.map(mapR).find(r=>r.id===sel2)
    if(!r1||!r2){el.innerHTML='<div class="empty">Kunne ikke finde runderne</div>';return}
    const name1=compareUid1?(viewableUsers.find(u=>u.uid===compareUid1)?.name||'—'):(state.profile?.name||'Mig')
    const name2=compareUid2?(viewableUsers.find(u=>u.uid===compareUid2)?.name||'—'):(state.profile?.name||'Mig')
    const lbl1=`${name1}: ${r1.name||'Runde'} (${fmtRD(r1)})`,lbl2=`${name2}: ${r2.name||'Runde'} (${fmtRD(r2)})`
    el.innerHTML=buildCompareHtml(calcAnalyseStats([r1],compareUid1||state.user?.uid),lbl1,calcAnalyseStats([r2],compareUid2||state.user?.uid),lbl2)
    return
  }
  const allRounds=sourceRounds.map(r=>({...r,shooters:(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))}))
  // To uafhængige filtre: "gennemført" (alle mål skudt, uanset startpunkt) og
  // "startet ved mål 1" (gør skud-nr.-X sammenligneligt med det fysiske mål,
  // uanset om runden blev gennemført til ende). Kan bruges hver for sig eller
  // sammen.
  const completedOnly=document.getElementById('analyse-completed-only')?.checked||false
  const startAt1Only=document.getElementById('analyse-startat1-only')?.checked||false
  // "Gennemført" = alle mål runden selv var sat op med, har en registreret
  // score. Tjekkes direkte pr. fysisk målindeks i scores-arrayet — IKKE via
  // traversalOrder/skudrækkefølge (calcRoundPositionAvgs), da et hul eller en
  // afvigelse i den rækkefølge-mapping ellers kan give falsk "ikke
  // gennemført" for en runde der reelt er fuldt udskudt. Sammenlignes bevidst
  // heller ikke med banens nuværende antal mål — en bane kan have fået
  // tilføjet/fjernet mål siden runden blev skudt.
  const isCompletedRound=r=>{
    const s=r.shooters?.find(x=>x.id===viewingUid)||r.shooters?.[0]
    if(!s)return false
    const nt=r.numTargets||24
    for(let ti=0;ti<nt;ti++){
      const row=s.scores[ti]||[null,null]
      if(row[0]==null&&row[1]==null)return false
    }
    return true
  }
  const isStartAt1Round=r=>r.startTarget===1
  const rulesetFilter=rulesetFilterEarly
  let filtered=bane==='all'?allRounds:allRounds.filter(r=>r.courseId===bane)
  if(rulesetFilter!=='all')filtered=filtered.filter(r=>(r.ruleset||'WA')===rulesetFilter)
  if(completedOnly)filtered=filtered.filter(isCompletedRound)
  if(startAt1Only)filtered=filtered.filter(isStartAt1Round)
  if(filterVal==='specific'){const sel=rundeEl?.value;filtered=sel?filtered.filter(r=>r.id===sel):[]}
  const antal=antalInput||filter
  const rounds=antal&&filterVal!=='specific'?filtered.slice(0,antal):filtered
  if(!rounds.length){el.innerHTML='<div class="empty"><div class="empty-icon">📈</div>Ingen runder endnu</div>';return}
  const getMe=r=>r.shooters.find(x=>x.id===viewingUid)||r.shooters?.[0]
  const myScores=rounds.map(r=>{const s=getMe(r);return s?calcTotal(s.scores):null}).filter(v=>v!==null)
  const avg=myScores.length?(myScores.reduce((a,b)=>a+b,0)/myScores.length).toFixed(1):0
  const best=myScores.length?Math.max(...myScores):0
  const worst=myScores.length?Math.min(...myScores):0
  // Samlet snit/pil på tværs af ALLE runder i udvalget, uanset regelsæt eller
  // pilEligible — bruges til "sammenlign med andre skytter" nedenfor, som
  // altid skal kunne vise et tal (i modsætning til PIL1-vs-PIL2-kortet, der
  // kræver ét fælles regelsæt).
  const allArrowsFlat=rounds.flatMap(r=>{const s=getMe(r);return s?s.scores.flat().filter(v=>v!=null):[]})
  const overallPilAvg=allArrowsFlat.length?(allArrowsFlat.reduce((a,v)=>a+scoreVal(v),0)/allArrowsFlat.length).toFixed(2):0
  // PIL 1 vs PIL 2-sammenligning og fordeling pr. scorezone kræver ÉN fælles
  // pointskala — kun meningsfuldt hvis ALLE runder i udvalget deler samme
  // regelsæt (uanset hvilket) OG det regelsæt har mindst 2 pile pr. mål. Ved
  // en blanding af regelsæt (fx WA+DGS, forskellige scorezoner) er der ingen
  // fælles skala, så sektionen vises ikke (se pilEligible-brug nedenfor).
  // Samme logik som stats.js' calcAnalyseStats (bruges kun i sammenlign-
  // tilstand) — hovedvisningen har sin egen kopi her, hold dem i sync.
  const rulesetsInPlay=new Set(rounds.map(r=>r.ruleset||DEFAULT_RULESET))
  const pilRuleset=rulesetsInPlay.size===1?[...rulesetsInPlay][0]:null
  const pilEligible=!!pilRuleset&&arrowsPerTarget(pilRuleset)>=2
  let p1t=0,p1n=0,p2t=0,p2n=0
  const zoneValues=pilEligible?scoreValuesFor(pilRuleset):[]
  const distP1={},distP2={}
  zoneValues.forEach(z=>{distP1[z]=0;distP2[z]=0})
  rounds.forEach(r=>{
    const s=getMe(r);if(!s)return
    if(!pilEligible)return
    s.scores.forEach(t=>{
      if(t[0]!=null){if(distP1[t[0]]!==undefined)distP1[t[0]]++;p1t+=scoreVal(t[0]);p1n++}
      if(t[1]!=null){if(distP2[t[1]]!==undefined)distP2[t[1]]++;p2t+=scoreVal(t[1]);p2n++}
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
  let html=''

  if(state.viewingUid){
    html+=`<div class="viewing-banner">👁 Viser resultater for ${esc(state.viewingName||'—')}</div>`
  }

  // Nøgletal
  html+=`<div class="stats-grid2">
    <div class="card stat-card"><div class="stat-lbl">RUNDER</div><div class="stat-val-28">${rounds.length}</div></div>
    <div class="card stat-card"><div class="stat-lbl">SNIT/RUNDE</div><div class="stat-val-28">${avg}</div></div>
    <div class="card stat-card"><div class="stat-lbl">BEDSTE</div><div class="stat-val-28-good">${best}</div></div>
    <div class="card stat-card"><div class="stat-lbl">LAVESTE</div><div class="stat-val-28-bad">${worst}</div></div>
  </div>`

  // Liste over hvilke runder (med dato) der reelt indgår i analysen — så man
  // kan se præcis hvad et filter/afkrydsningsfelt inkluderer/udelukker.
  html+=`<details class="card card-mb16 rounds-included-card">
    <summary class="section-title-mb8 rounds-included-summary">RUNDER I DENNE ANALYSE (${rounds.length})</summary>
    <div class="rounds-included-list">
      ${rounds.map(r=>`<div class="rounds-included-row"><span class="rounds-included-date">${fmtRD(r)}</span><span class="rounds-included-name">${esc(r.name||'Runde')}${bane==='all'?` · ${esc(r.courseName||'')}`:''}${r.ruleset&&r.ruleset!=='WA'?` · <span class="rcard-ruleset-tag">${esc(r.ruleset)}</span>`:''}</span></div>`).join('')}
    </div>
  </details>`

  // Pil statistik — PIL 1 vs PIL 2 kræver ét fælles regelsæt med ≥2 pile pr.
  // mål (se pilEligible ovenfor). Note forklarer HVORFOR hvis skjult: enten
  // fordi udvalget blander flere regelsæt, eller fordi det ene regelsæt der
  // er valgt kun har 1 pil pr. mål.
  // Ved ét regelsæt med kun 1 pil/mål (fx HDH-IAA) giver PIL1-vs-PIL2 ingen
  // mening, men SNT/PIL (samlet snit pr. pil) er stadig et relevant tal —
  // vis det i stedet for blot at skjule hele kortet.
  const singleArrowRuleset=pilRuleset&&!pilEligible
  const pilNote=pilRuleset
    ?`${pilRuleset} skydes med 1 pil pr. mål — PIL 1/PIL 2-sammenligning er derfor ikke relevant`
    :`Vælg et specifikt forbund i filteret ovenfor for at se pil-fordeling (runderne i dette udvalg bruger forskellige regelsæt)`
  html+=`<div class="card card-mb16">
    <div class="section-title-mb8">PIL STATISTIK</div>
    ${pilEligible?`<div class="cmp-pil-grid">
      <div><div class="stat-lbl">PIL 1</div><div class="stat-val-22">${p1avg}</div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">SNT/PIL</div>
        <div class="stat-val-22-mid">${pilAvg}</div>
      </div>
      <div><div class="stat-lbl">PIL 2</div><div class="stat-val-22">${p2avg}</div></div>
    </div>
    <div class="pil-best-note">
      ${Number(p1avg)>Number(p2avg)?'Bedst med PIL 1 🏹':Number(p2avg)>Number(p1avg)?'Bedst med PIL 2 🏹':'Begge pile er lige gode 🎯'}
    </div>`:singleArrowRuleset?`<div class="cmp-pil-grid">
      <div></div>
      <div class="cmp-pil-mid">
        <div class="stat-lbl">SNT/PIL</div>
        <div class="stat-val-22-mid">${overallPilAvg}</div>
      </div>
      <div></div>
    </div>
    <div class="pil-best-note">${pilNote}</div>`:`<div class="pil-best-note">${pilNote}</div>`}
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

  // Lagkagediagrammer — splitter pr. pil-position (PIL 1/PIL 2), samme
  // begrænsning som PIL STATISTIK-kortet ovenfor.
  html+=`<div class="card card-mb16">
    <div class="section-title-mb12">FORDELING PR. SCOREZONE</div>`
  if(pilEligible){
    html+=`<div class="pie-grid">`
    zoneValues.forEach(z=>{
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
      </div>`
  }else{
    html+=`<div class="pil-best-note">${pilNote}</div>`
  }
  html+=`</div>`

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

  // Per-mål graf — vises altid når der er nok data, uanset om der er valgt
  // en specifik bane eller "alle runder".
  const validTA=targetAvgs.map((v,i)=>({v,i})).filter(x=>x.v!==null)
  if(validTA.length>1){
    const w=340,h=160,padL=42,padB=25,padT=15,padR=15
    const {slope,intercept}=linReg(validTA.map(({v,i})=>({x:i,y:v})))
    // Y-aksen skal dække BÅDE de faktiske mål-gennemsnit OG trendlinjens
    // to endepunkter — ellers kan en stejl trend (fx få, spredte datapunkter)
    // få den stiplede linje til at ende uden for grafens tegneflade.
    const trendVals=[intercept,intercept+slope*(numTargets-1)]
    const mn=Math.floor(Math.min(...validTA.map(x=>x.v),...trendVals))
    const mx=Math.ceil(Math.max(...validTA.map(x=>x.v),...trendVals))
    const range=mx-mn||1
    const ticks=[]
    for(let t=mn;t<=mx;t++){if((mx-mn)<=6||t%Math.ceil((mx-mn)/5)===0)ticks.push(t)}
    const stdDevVal=stdDev(validTA.map(x=>x.v))

    // Bygger SVG-indholdet for en given pixel-bredde/-højde — bruges både til
    // kort-versionen og fullscreen (hvor bredde/højde genberegnes ud fra den
    // faktiske skærmstørrelse ved åbning og ved rotation, se openGraphFs).
    // pointer-events:none på alle grafik-elementer sikrer at touch altid
    // rammer viewport-elementet (se initGraphPinch) i stedet for fx en enkelt
    // prik eller linje.
    const mkGraphSvg=(width,height,{dotR=3,valFont=9,showVals=false}={})=>{
      const toXw=idx2=>padL+(numTargets>1?(idx2/(numTargets-1))*(width-padL-padR):0)
      const toYh=val=>padT+(height-padT-padB)*(1-(val-mn)/range)
      const pts=validTA.map(({v,i})=>toXw(i)+','+toYh(v)).join(' ')
      const ticksSvg=ticks.map(t=>`<line x1="${padL-4}" y1="${toYh(t)}" x2="${padL}" y2="${toYh(t)}" stroke="var(--muted)" stroke-width="1" pointer-events="none"/><text x="${padL-6}" y="${toYh(t)+4}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${t}</text><line x1="${padL}" y1="${toYh(t)}" x2="${width-padR}" y2="${toYh(t)}" stroke="var(--surface2)" stroke-width="0.5" stroke-dasharray="3,3" pointer-events="none"/>`).join('')
      const dotsSvg=validTA.map(({v,i})=>showVals
        ?`<circle cx="${toXw(i)}" cy="${toYh(v)}" r="${dotR}" fill="var(--acc)" pointer-events="none"/><text x="${toXw(i)}" y="${toYh(v)-dotR-5}" text-anchor="middle" font-size="${valFont}" fill="#fff" pointer-events="none">${v.toFixed(1)}</text>`
        :`<circle cx="${toXw(i)}" cy="${toYh(v)}" r="${dotR}" fill="var(--acc)" pointer-events="none"/>`
      ).join('')
      const trendSvg=`<line x1="${toXw(0)}" y1="${toYh(intercept)}" x2="${toXw(numTargets-1)}" y2="${toYh(intercept+slope*(numTargets-1))}" stroke="#f0c030" stroke-width="1.5" stroke-dasharray="6,4" pointer-events="none"/>`
      return `<line x1="${padL}" y1="${padT}" x2="${padL}" y2="${height-padB}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        <line x1="${padL}" y1="${height-padB}" x2="${width-padR}" y2="${height-padB}" stroke="var(--surface2)" stroke-width="1" pointer-events="none"/>
        ${ticksSvg}
        <polyline points="${pts}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" pointer-events="none"/>
        ${trendSvg}
        ${dotsSvg}
        <text x="${padL}" y="${height-5}" font-size="9" fill="var(--muted)" pointer-events="none">1</text>
        <text x="${toXw(numTargets-1)}" y="${height-5}" text-anchor="end" font-size="9" fill="var(--muted)" pointer-events="none">${numTargets}</text>`
    }
    // Bredere fullscreen-startværdi (min 30px pr. mål) — openGraphFs
    // genberegner den faktiske bredde/højde ud fra skærmen ved åbning.
    const wFS=Math.max(w,numTargets*30)

    html+=`<div class="card card-mb16">
      <div class="graph-header-row">
        <span>GENNEMSNIT PR. SKUDRÆKKEFØLGE</span>
        <button class="btn-icon graph-fs-btn" onclick="window.openGraphFs()">⤢</button>
      </div>
      <svg viewBox="0 0 ${w} ${h}" class="graph-svg">${mkGraphSvg(w,h,{dotR:3})}</svg>
      <div class="graph-caption">Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend</div>
    </div>
    <div class="card card-mb16">
      <div class="section-title-mb8">KONSISTENS (SPREDNING)</div>
      <div class="spredning-row">
        <div class="stat-val-28">${stdDevVal.toFixed(2)}</div>
        <div class="spredning-note">Standardafvigelse i point (samme skala som scoren, 0-11) — ikke et 0-1-tal. Tæt på 0 = meget ensartet gennem runden; jo højere tal, jo større udsving mellem de bedste og sværeste mål.</div>
      </div>
    </div>
    <div id="graph-fs" class="fs-ov hidden graph-fs-overlay" onclick="window.closeGraphFs()">
      <div class="graph-fs-box" id="graph-fs-box" onclick="event.stopPropagation()">
        <div class="graph-fs-title">GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset</div>
        <div id="graph-fs-viewport" class="graph-fs-viewport">
          <svg id="graph-fs-svg" viewBox="0 0 ${wFS} ${h}" class="graph-fs-svg">${mkGraphSvg(wFS,h,{dotR:5,valFont:10,showVals:true})}</svg>
        </div>
        <button class="btn btn-dark graph-fs-close-btn" onclick="window.closeGraphFs()">Luk</button>
      </div>
    </div>`

    // Genberegner fullscreen-grafens pixel-mål ud fra den faktiske skærm ved
    // åbning og ved rotation/resize — retter at grafen før ikke blev større
    // ved at vende skærmen (den brugte en fast viewBox-højde uafhængigt af
    // skærmens faktiske størrelse).
    window.openGraphFs=function(){
      const ov=document.getElementById('graph-fs')
      if(!ov)return
      ov.classList.remove('hidden')
      const svg=document.getElementById('graph-fs-svg')
      const box=document.getElementById('graph-fs-box')
      const viewport=document.getElementById('graph-fs-viewport')
      const redraw=()=>{
        const boxW=Math.min(window.innerWidth*0.96,900)
        const boxH=Math.min(window.innerHeight*0.9,700)
        const availW=Math.max(200,boxW-32)
        const availH=Math.max(140,boxH-90)
        const wFS2=Math.max(availW,numTargets*30)
        svg.setAttribute('viewBox',`0 0 ${wFS2} ${availH}`)
        svg.innerHTML=mkGraphSvg(wFS2,availH,{dotR:5,valFont:10,showVals:true})
        if(box)box.style.width=boxW+'px'
        if(viewport){viewport.style.width=availW+'px';viewport.style.height=availH+'px'}
      }
      redraw()
      if(_fsResizeHandler){window.removeEventListener('resize',_fsResizeHandler);window.removeEventListener('orientationchange',_fsResizeHandler)}
      _fsResizeHandler=redraw
      window.addEventListener('resize',_fsResizeHandler)
      window.addEventListener('orientationchange',_fsResizeHandler)
      if(_fsGestureHandler)document.removeEventListener('gesturestart',_fsGestureHandler)
      _fsGestureHandler=e=>e.preventDefault()
      document.addEventListener('gesturestart',_fsGestureHandler,{passive:false})
      // viewport-elementet lever så længe analyse-fanen ikke gen-renderes —
      // initGraphPinch må derfor kun bindes én gang, ellers stables der flere
      // touch-lyttere oveni hinanden ved gentagne åbn/luk af fullscreen.
      if(viewport&&!viewport.dataset.pinchInit){
        initGraphPinch(viewport,svg)
        viewport.dataset.pinchInit='1'
      }
    }
  }

  // Konsistens over tid på denne bane — så man kan se om spredningen
  // (ensartetheden i skydningen) forbedres fra runde til runde.
  if(bane!=='all'){
    const toTime=r=>{const c=r.created;return c?.toDate?c.toDate().getTime():c?.seconds?c.seconds*1000:typeof c==='number'?c:0}
    const consistencyPts=allRounds
      .filter(r=>r.courseId===bane)
      .filter(r=>!completedOnly||isCompletedRound(r))
      .filter(r=>!startAt1Only||isStartAt1Round(r))
      .map(r=>{const posAvgs=calcRoundPositionAvgs(r,viewingUid);return posAvgs.length>1?{t:toTime(r),cv:stdDev(posAvgs)}:null})
      .filter(Boolean)
      .sort((a,b)=>a.t-b.t)
    if(consistencyPts.length>1){
      const w2=340,h2=120,pad2=30
      const cvVals=consistencyPts.map(p=>p.cv)
      const mn2=Math.min(...cvVals),mx2=Math.max(...cvVals),range2=(mx2-mn2)||1
      const xy=(p,i)=>({x:pad2+(i/(consistencyPts.length-1))*(w2-2*pad2),y:h2-pad2-((p.cv-mn2)/range2)*(h2-2*pad2)})
      const pts2=consistencyPts.map((p,i)=>{const{x,y}=xy(p,i);return `${x},${y}`}).join(' ')
      const dots2=consistencyPts.map((p,i)=>{const{x,y}=xy(p,i);return `<circle cx="${x}" cy="${y}" r="4" fill="#f0c030"/><text x="${x}" y="${y-8}" text-anchor="middle" font-size="10" fill="var(--text)">${p.cv.toFixed(2)}</text>`}).join('')
      html+=`<div class="card card-mb16">
        <div class="section-title-mb8">KONSISTENS OVER TID · denne bane</div>
        <svg viewBox="0 0 ${w2} ${h2}" class="graph-svg">
          <polyline points="${pts2}" fill="none" stroke="#f0c030" stroke-width="2.5" stroke-linejoin="round"/>
          ${dots2}
          <text x="${pad2}" y="${h2-5}" font-size="10" fill="var(--muted)">ældst</text>
          <text x="${w2-pad2}" y="${h2-5}" text-anchor="end" font-size="10" fill="var(--muted)">nyest</text>
        </svg>
        <div class="graph-caption">Spredning pr. runde (samme point-skala som ovenfor) — faldende kurve = mere ensartet skydning over tid</div>
      </div>`
    }
  }

  el.innerHTML=html

  // Sammenligning med andre skytter på samme bane — kun relevant for mine egne
  // runder, da den er bundet til mit eget køn/bueklasse (state.profile).
  if(!state.viewingUid&&bane!=='all'&&state.profile?.kon&&state.profile?.bueklasse){
    const konNavn=state.profile.kon==='herre'?'Herre':'Dame'
    const klasseNavn={langbue:'Langbue',trad:'Traditionel',recurve:'Recurve',compound:'Compound',barbue:'Barbue','buejæger':'Buejæger','trad-buejæger':'Trad. buejæger',rytterbue:'Rytterbue'}[state.profile.bueklasse]||state.profile.bueklasse
    const compEl=document.createElement('div')
    compEl.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div><div class="comp-loading-msg">Henter...</div></div>`
    el.appendChild(compEl)
    getDocs(collection(db,'bane_stats',bane,'runder')).then(snap=>{
      const alle=snap.docs.map(d=>d.data())
      // Kun sammenligne inden for samme forbund når et specifikt er valgt —
      // forskellige regelsæts snit/pil er ikke sammenlignelige på tværs (fx
      // WA's 0-11-skala vs. DGS' -1-5-skala). Ved "Alle forbund" bevares
      // den oprindelige, regelsæt-blinde opførsel (ældre bane_stats-data har
      // ikke et ruleset-felt og antages WA, jf. DEFAULT_RULESET-fallback).
      let sammeKlasse=alle.filter(d=>d.kon===state.profile.kon&&d.bueklasse===state.profile.bueklasse)
      if(rulesetFilter!=='all')sammeKlasse=sammeKlasse.filter(d=>(d.ruleset||DEFAULT_RULESET)===rulesetFilter)
      if(!sammeKlasse.length){
        compEl.innerHTML=`<div class="card card-mb16"><div class="section-title-mb8">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div><div class="comp-loading-msg">Ingen andre ${konNavn} ${klasseNavn}-skytter har skudt denne bane endnu.</div></div>`
        return
      }
      const validEntries=sammeKlasse.filter(d=>(d.arrowsShot||d.numTargets*2)>0)
      const andresSnit=validEntries.length?(validEntries.reduce((s,d)=>s+d.score/(d.arrowsShot||d.numTargets*2),0)/validEntries.length).toFixed(2):'—'
      const diff=andresSnit!=='—'?Number(overallPilAvg)-Number(andresSnit):null
      const diffStr=diff!==null?(diff>0?'+':'')+diff.toFixed(2):'—'
      const diffColor=diff===null?'var(--muted)':diff>0?'#2aaa5a':diff<0?'var(--danger)':'var(--muted)'
      compEl.innerHTML=`<div class="card card-mb16">
        <div class="section-title-mb12">SAMMENLIGNING · ${konNavn} ${klasseNavn}</div>
        <div class="cmp-pil-grid">
          <div><div class="stat-lbl">DIT SNT/PIL</div><div class="stat-val-22">${overallPilAvg}</div></div>
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
