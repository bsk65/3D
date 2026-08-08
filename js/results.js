// js/results.js — Resultatvisning: distributions-/resultatopbygning, runde-
// popup (med GPS-rutekort), afsendelse af resultater pr. mail og rundelisten
// på Resultater-fanen.
//
// renderResults/renderRoundsList/showRoundPopup kaldes direkte af main.js
// (finishRound/onLogin/tryOpenPendingRound/showVisitResults) og eksporteres
// derfor normalt. sendResults er en self-registrerende window.*-handler.
// renderRoundsList kalder analyseRound (stadig i main.js, flytter med
// analyse.js senere) via window.analyseRound — samme bro-mønster som
// courses.js bruger for window.populateCourseDropdown.

import { state } from './state.js'
import { esc, showToast } from './utils.js'
import { lsSave } from './storage.js'
import { scoreVal, calcTotal, calcDistribution, findWinner, parseScores, arrowsPerTarget, scoreValuesFor } from './scoring.js'
import { parseRoute, formatDuration, formatDistance } from './gps.js'
import { db, doc, deleteDoc } from './firebase-init.js'
import { removeVisitFromCourse } from './courses.js'

// ─── RESULTS ──────────────────────────────────────────────────────────────────
// Selve kort-indholdet (bruges både i det lille grid og i den forstørrede
// tap-visning, så de to altid viser præcis de samme tal).
function distCardContent(s,round,apt){
  const d=calcDistribution(s.scores,round.ruleset)
  const total=calcTotal(s.scores)
  const allArr=s.scores.flat().filter(v=>v!=null)
  const avgAll=allArr.length?(allArr.reduce((a,v)=>a+scoreVal(v),0)/allArr.length).toFixed(2):'—'
  let pilRows=''
  if(apt>=2){
    const arr1=s.scores.map(t=>(t||[])[0]).filter(v=>v!=null)
    const arr2=s.scores.map(t=>(t||[])[1]).filter(v=>v!=null)
    const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
    const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
    pilRows=`<div class="dist-row"><span>Snit pil 1</span><span>${avg1}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${avg2}</span></div>`
  }
  return `<div class="dist-name">${esc(s.name)}</div><div class="dist-row dist-row-total"><span>Total</span><span>${total} pt</span></div>${pilRows}<div class="dist-row dist-row-border"><span>Samlet snit</span><span>${avgAll}</span></div>${Object.entries(d).map(([k,v])=>`<div class="dist-row"><span>${k}</span><span>${v}x</span></div>`).join('')}`
}

// Runden bag det senest tegnede dist-grid — bruges af showDistCardEnlarged
// til at slå deltageren op igen ved tap, uafhængigt af window._lastRound
// (som andre visninger, fx showRoundPopup, også skriver til).
let _distRound=null

function buildDistribution(round){
  _distRound=round
  const apt=arrowsPerTarget(round.ruleset)
  return '<div class="dist-grid">'+round.shooters.map((s,i)=>
    `<div class="dist-card" onclick="window.showDistCardEnlarged(${i})">${distCardContent(s,round,apt)}</div>`
  ).join('')+'</div>'
}

// Åbner et deltager-kort i fuld skærmstørrelse (tap på et lille dist-card).
window.showDistCardEnlarged=function(idx){
  if(!_distRound)return
  const s=_distRound.shooters[idx];if(!s)return
  const body=document.getElementById('dist-enlarge-body');if(!body)return
  body.innerHTML=distCardContent(s,_distRound,arrowsPerTarget(_distRound.ruleset))
  document.getElementById('dist-enlarge-ov').classList.remove('hidden')
}

export function renderResults(round){
  const winner=findWinner(round.shooters)
  document.getElementById('win-wrap').innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${esc(winner?.name||'—')}</div><div class="win-score">${winner?calcTotal(winner.scores):0} point</div>`
  document.getElementById('res-table').innerHTML=buildResultsTable(round)
  document.getElementById('res-dist').innerHTML=buildDistribution(round)
}

function buildResultsTable(round){
  const startT=(round.startTarget||1)-1
  const apt=arrowsPerTarget(round.ruleset)
  let h=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${round.shooters.map(s=>`<th>${s.name}</th>`).join('')}</tr>`
  for(let t=0;t<round.numTargets;t++){
    const isStart=t===startT
    h+=`<tr><td class="tc">${isStart?`<span class="start-target-dot"></span>`:''}${t+1}</td>`
    round.shooters.forEach(s=>{
      const r=s.scores[t]||Array(apt).fill(null)
      const sum=r.reduce((a,v)=>a+(v!=null&&v!=='M'?Number(v):0),0)
      h+=`<td>${r.map(v=>v==null?'—':v).join('/')}<br><small>${sum}</small></td>`
    })
    h+='</tr>'
  }
  h+=`<tr class="tr-tot"><td class="tc">Total</td>${round.shooters.map(s=>`<td>${calcTotal(s.scores)}</td>`).join('')}</tr></table></div>`
  return h
}

function buildSummaryCards(round){
  const zones=scoreValuesFor(round.ruleset)
  const apt=arrowsPerTarget(round.ruleset)
  return round.shooters.map(s=>{
    const total=calcTotal(s.scores)
    const allArr=s.scores.flat().filter(v=>v!=null)
    const totalArrows=allArr.length
    const avgAll=totalArrows?(allArr.reduce((a,v)=>a+scoreVal(v),0)/totalArrows).toFixed(2):'—'
    const dist=calcDistribution(s.scores,round.ruleset)
    let pilRow=''
    if(apt>=2){
      const arr1=s.scores.map(t=>(t||[])[0]).filter(v=>v!=null)
      const arr2=s.scores.map(t=>(t||[])[1]).filter(v=>v!=null)
      const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
      const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
      pilRow=`<div class="summary-stats-row2">
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${avg1}</div>
          <div class="summary-stat-lbl">SNIT PIL 1</div>
        </div>
        <div class="summary-stat-box-sm">
          <div class="summary-stat-val-sm">${avg2}</div>
          <div class="summary-stat-lbl">SNIT PIL 2</div>
        </div>
      </div>`
    }
    return `<div class="summary-card">
      <div class="summary-card-name">${esc(s.name)}</div>
      <div class="summary-stats-row3">
        <div class="summary-stat-box">
          <div class="summary-stat-val">${total}</div>
          <div class="summary-stat-lbl">POINT</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${totalArrows}</div>
          <div class="summary-stat-lbl">PILE</div>
        </div>
        <div class="summary-stat-box">
          <div class="summary-stat-val">${avgAll}</div>
          <div class="summary-stat-lbl">SNT/PIL</div>
        </div>
      </div>
      ${pilRow}
      <div class="summary-zones-row">
        ${zones.map(z=>`<div><div class="summary-zone-key">${z}</div><div class="summary-zone-val">${dist[z]||0}</div></div>`).join('')}
      </div>
    </div>`
  }).join('')
}

function buildActualResults(round){
  const apt=arrowsPerTarget(round.ruleset)
  const data=round.shooters.map(s=>{
    const shot=s.scores.filter(t=>{const r=t||Array(apt).fill(null);return r.length>=apt&&r.slice(0,apt).every(v=>v!==null)})
    if(!shot.length||shot.length===round.numTargets)return null
    const flat=shot.flat().filter(v=>v!==null)
    const total=flat.reduce((a,v)=>a+scoreVal(v),0)
    const arrows=flat.length
    const avgPil=arrows?(total/arrows).toFixed(2):0
    const avgMaal=shot.length?(total/shot.length).toFixed(1):0
    return {name:s.name,shot:shot.length,total,avgPil,avgMaal}
  }).filter(Boolean)
  if(!data.length)return ''
  const cards=data.map(d=>`<div class="actual-card"><div class="actual-card-name">${d.name}</div><div class="actual-card-sub">${d.shot} af ${round.numTargets} mål</div><div class="actual-card-total">${d.total}</div><div class="actual-card-total-lbl">POINT</div><div class="actual-card-avgs"><div><div class="actual-avg-val">${d.avgPil}</div><div class="actual-avg-lbl">SNT/PIL</div></div><div><div class="actual-avg-val">${d.avgMaal}</div><div class="actual-avg-lbl">SNT/MÅL</div></div></div></div>`).join('')
  return `<div class="actual-results-wrap"><div class="actual-results-title">Kun skudte mål</div><div class="actual-results-cards">${cards}</div></div>`
}

// ─── ROUNDS LIST ──────────────────────────────────────────────────────────────
export function renderRoundsList(){
  const el=document.getElementById('rounds-list')
  if(!state.rounds.length){el.innerHTML='<div class="empty"><div class="empty-icon">📊</div>Ingen runder endnu</div>';return}
  el.innerHTML=''
  state.rounds.forEach(r=>{
    const shooters=(r.shooters||[]).map(s=>({...s,scores:parseScores(s.scores)}))
    const winner=shooters.length?findWinner(shooters):null
    const _c=r.created,date=_c?.toDate?_c.toDate().toLocaleDateString('da-DK'):_c?.seconds?new Date(_c.seconds*1000).toLocaleDateString('da-DK'):typeof _c==='number'?new Date(_c).toLocaleDateString('da-DK'):'—'
    const card=document.createElement('div');card.className='rcard'
    const rulesetTag=r.ruleset&&r.ruleset!=='WA'?` · <span class="rcard-ruleset-tag">${esc(r.ruleset)}</span>`:''
    card.innerHTML=`<div class="rcard-info"><div class="rcard-name">${esc(r.name||'Runde')}</div><div class="rcard-meta"><span class="rcard-date">${esc(date)}</span> · ${esc(r.courseName||r.numTargets+' mål')}${rulesetTag}</div><div class="rcard-win">🏆 ${esc(winner?.name||'—')} (${winner?calcTotal(winner.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser">📈</button><button class="del-btn" data-id="${esc(r.id)}">✕</button>`
    card.querySelector('.rcard-info').onclick=()=>showRoundPopup({...r,shooters})
    card.querySelector('.rcard-analyse').onclick=()=>window.analyseRound(r.id)
    card.querySelector('.del-btn').onclick=e=>{
      const btn=e.currentTarget,key=`r-${r.id}`
      if(!state.deleteConfirm[key]){
        state.deleteConfirm[key]=true;btn.classList.add('conf');btn.textContent='Slet?'
        setTimeout(()=>{delete state.deleteConfirm[key];btn.classList.remove('conf');btn.textContent='✕'},3000)
      }else{
        delete state.deleteConfirm[key]
        state.rounds=state.rounds.filter(x=>x.id!==r.id);lsSave();renderRoundsList()
        if(state.user)deleteDoc(doc(db,'users',state.user.uid,'rounds',r.id)).catch(e=>console.warn(e))
        if(state.user&&r.courseId)deleteDoc(doc(db,'bane_stats',r.courseId,'runder',r.id)).catch(e=>console.warn(e))
        if(r.courseId)removeVisitFromCourse(r.courseId,r.id).catch(e=>console.warn(e))
      }
    }
    el.appendChild(card)
  })
}

export function showRoundPopup(round){window._lastRound=round;
  let pop=document.getElementById('round-popup')
  if(!pop){
    pop=document.createElement('div');pop.id='round-popup';pop.className='rpop'
    pop.innerHTML=`<div class="rpop-box"><button class="rpop-close" onclick="this.closest('.rpop').classList.add('hidden')">✕</button><div id="rpop-body"></div></div>`
    document.body.appendChild(pop)
  }
  pop.classList.remove('hidden')
  if(state.rpopMap){state.rpopMap.remove();state.rpopMap=null}
  const gpsRoute=round.gpsRoute||round.route||null
  const gpsDuration=round.gpsDuration||round.duration||null
  const gpsDistance=round.gpsDistance||round.distance||null
  const durStr=gpsDuration?formatDuration(gpsDuration):null
  const distStr=gpsDistance?formatDistance(gpsDistance):null
  const gpsHtml=(distStr||durStr)?`<div class="rpop-gps-row">${distStr?`<div class="rpop-gps-box"><div class="rpop-gps-val">${distStr}</div><div class="rpop-gps-lbl">DISTANCE</div></div>`:''}${durStr?`<div class="rpop-gps-box"><div class="rpop-gps-val">${durStr}</div><div class="rpop-gps-lbl">TID</div></div>`:''}</div>${gpsRoute?`<div id="rpop-map"></div>`:''}`:'';
  document.getElementById('rpop-body').innerHTML=`<h3 class="rpop-title">${esc(round.name)}</h3>${gpsHtml}`+buildSummaryCards(round)+buildResultsTable(round)+buildActualResults(round)+`<button class="btn btn-gold rpop-send-btn" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>`
  if(gpsRoute){const pts=parseRoute(gpsRoute);if(pts.length)setTimeout(()=>{const mapEl=document.getElementById('rpop-map');if(!mapEl)return;state.rpopMap=window.L.map(mapEl);window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Esri',maxZoom:19}).addTo(state.rpopMap);const poly=window.L.polyline(pts.map(p=>[p.lat,p.lng]),{color:'#e8a020',weight:3}).addTo(state.rpopMap);state.rpopMap.fitBounds(poly.getBounds(),{padding:[20,20]})},50)}
}

window.sendResults=async function(round){
  if(!round){showToast('Ingen runde at sende','error');return}
  const date=new Date().toLocaleDateString('da-DK')
  let body='3D Bueskydning - Resultater\n'
  body+='Dato: '+date+'\n'
  if(round.courseName)body+='Bane: '+round.courseName+'\n'
  body+='\n--- RESULTATER ---\n'
  const sorted=[...round.shooters].sort((a,b)=>calcTotal(b.scores)-calcTotal(a.scores))
  sorted.forEach((s,i)=>{body+='\n'+(i+1)+'. '+s.name+': '+calcTotal(s.scores)+' point'})
  body+='\n\n--- DETALJERET ---\n'
  const apt=arrowsPerTarget(round.ruleset)
  round.shooters.forEach(s=>{
    body+='\n'+s.name+':\n'
    for(let t=0;t<round.numTargets;t++){
      const r=s.scores[t]||Array(apt).fill(null)
      const sum=r.reduce((a,v)=>a+(v!=null&&v!=='M'?Number(v):0),0)
      body+='  Mål '+(t+1)+': '+r.map(v=>v??'-').join('+')+' = '+sum+'\n'
    }
    const allArr=s.scores.flat().filter(v=>v!=null)
    const avgAll=allArr.length?(allArr.reduce((a,v)=>a+scoreVal(v),0)/allArr.length).toFixed(2):'—'
    const dist=calcDistribution(s.scores,round.ruleset)
    body+='  Total: '+calcTotal(s.scores)+' point\n'
    if(apt>=2){
      const arr1=s.scores.map(t=>(t||[])[0]).filter(v=>v!=null)
      const arr2=s.scores.map(t=>(t||[])[1]).filter(v=>v!=null)
      const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
      const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
      body+='  Snit pil 1: '+avg1+' | Snit pil 2: '+avg2+' | Samlet snit: '+avgAll+'\n'
    }else{
      body+='  Samlet snit: '+avgAll+'\n'
    }
    body+='  Fordeling: '+Object.entries(dist).map(([k,v])=>k+':'+v+'x').join('  ')+'\n'
  })
  if(round.id)body+=`\n\nSe resultater i appen:\nhttps://bsk65.github.io/3D/?round=${round.id}\n(Kræver login med din bruger)`
  const emails=round.shooters.map(s=>state.friends.find(f=>f.id===s.id)?.email).filter(Boolean)
  const subject='3D Bueskydning - '+round.name
  const mailto='mailto:'+emails.join(',')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)
  window.location.href=mailto
}
