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
import { scoreVal, calcTotal, calcDistribution, findWinner, parseScores } from './scoring.js'
import { parseRoute, formatDuration, formatDistance } from './gps.js'
import { db, doc, deleteDoc } from './firebase-init.js'
import { removeVisitFromCourse } from './courses.js'

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function buildDistribution(round){
  return '<div class="dist-grid">'+round.shooters.map(s=>{
    const d=calcDistribution(s.scores)
    const total=calcTotal(s.scores)
    const arr1=s.scores.map(t=>(t||[null,null])[0]).filter(v=>v!=null)
    const arr2=s.scores.map(t=>(t||[null,null])[1]).filter(v=>v!=null)
    const allArr=s.scores.flat().filter(v=>v!=null)
    const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
    const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
    const avgAll=allArr.length?(allArr.reduce((a,v)=>a+scoreVal(v),0)/allArr.length).toFixed(2):'—'
    return `<div class="dist-card"><div class="dist-name">${esc(s.name)}</div><div class="dist-row" style="font-weight:700;border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Total</span><span>${total} pt</span></div><div class="dist-row"><span>Snit pil 1</span><span>${avg1}</span></div><div class="dist-row"><span>Snit pil 2</span><span>${avg2}</span></div><div class="dist-row" style="border-bottom:1px solid var(--surface2);padding-bottom:4px;margin-bottom:4px;"><span>Samlet snit</span><span>${avgAll}</span></div>${Object.entries(d).map(([k,v])=>`<div class="dist-row"><span>${k}</span><span>${v}x</span></div>`).join('')}</div>`
  }).join('')+'</div>'
}

export function renderResults(round){
  const winner=findWinner(round.shooters)
  document.getElementById('win-wrap').innerHTML=`<div class="win-trophy">🏆</div><div class="win-name">${esc(winner?.name||'—')}</div><div class="win-score">${winner?calcTotal(winner.scores):0} point</div>`
  document.getElementById('res-table').innerHTML=buildResultsTable(round)
  document.getElementById('res-dist').innerHTML=buildDistribution(round)
}

function buildResultsTable(round){
  const startT=(round.startTarget||1)-1
  let h=`<div class="tbl-wrap"><table class="rtbl"><tr><th>Mål</th>${round.shooters.map(s=>`<th>${s.name}</th>`).join('')}</tr>`
  for(let t=0;t<round.numTargets;t++){
    const isStart=t===startT
    h+=`<tr><td class="tc">${isStart?`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--acc);margin-right:4px;vertical-align:middle;"></span>`:''}${t+1}</td>`
    round.shooters.forEach(s=>{
      const r=s.scores[t]||[null,null]
      const sum=(r[0]!=null&&r[0]!=='M'?Number(r[0]):0)+(r[1]!=null&&r[1]!=='M'?Number(r[1]):0)
      h+=`<td>${r.map(v=>v==null?'—':v).join('/')}<br><small>${sum}</small></td>`
    })
    h+='</tr>'
  }
  h+=`<tr class="tr-tot"><td class="tc">Total</td>${round.shooters.map(s=>`<td>${calcTotal(s.scores)}</td>`).join('')}</tr></table></div>`
  return h
}

function buildSummaryCards(round){
  const zones=['11','10','8','5','M']
  const zColors={'11':'#1a7a3a','10':'#1a5aaa','8':'#d4700a','5':'#7a3aaa','M':'#cc3333'}
  return round.shooters.map(s=>{
    const total=calcTotal(s.scores)
    const arr1=s.scores.map(t=>(t||[null,null])[0]).filter(v=>v!=null)
    const arr2=s.scores.map(t=>(t||[null,null])[1]).filter(v=>v!=null)
    const allArr=s.scores.flat().filter(v=>v!=null)
    const totalArrows=allArr.length
    const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
    const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
    const avgAll=totalArrows?(allArr.reduce((a,v)=>a+scoreVal(v),0)/totalArrows).toFixed(2):'—'
    const dist=calcDistribution(s.scores)
    return `<div style="background:var(--surface2);border-radius:10px;padding:12px;margin-bottom:10px;">
      <div style="font-size:15px;font-weight:700;margin-bottom:10px;">${esc(s.name)}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;margin-bottom:8px;">
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${total}</div>
          <div style="font-size:10px;color:var(--muted);">POINT</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${totalArrows}</div>
          <div style="font-size:10px;color:var(--muted);">PILE</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:8px;">
          <div style="font-size:28px;font-weight:700;color:var(--acc);line-height:1.1;">${avgAll}</div>
          <div style="font-size:10px;color:var(--muted);">SNT/PIL</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;text-align:center;margin-bottom:10px;">
        <div style="background:var(--card);border-radius:8px;padding:6px;">
          <div style="font-size:18px;font-weight:700;color:var(--acc);">${avg1}</div>
          <div style="font-size:10px;color:var(--muted);">SNIT PIL 1</div>
        </div>
        <div style="background:var(--card);border-radius:8px;padding:6px;">
          <div style="font-size:18px;font-weight:700;color:var(--acc);">${avg2}</div>
          <div style="font-size:10px;color:var(--muted);">SNIT PIL 2</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;text-align:center;border-top:1px solid var(--card);padding-top:8px;">
        ${zones.map(z=>`<div><div style="font-size:20px;font-weight:700;color:var(--text);">${z}</div><div style="font-size:20px;font-weight:700;color:var(--acc);">${dist[z]||0}</div></div>`).join('')}
      </div>
    </div>`
  }).join('')
}

function buildActualResults(round){
  const data=round.shooters.map(s=>{
    const shot=s.scores.filter(t=>{const r=t||[null,null];return r[0]!==null&&r[1]!==null})
    if(!shot.length||shot.length===round.numTargets)return null
    const flat=shot.flat().filter(v=>v!==null)
    const total=flat.reduce((a,v)=>a+scoreVal(v),0)
    const arrows=flat.length
    const avgPil=arrows?(total/arrows).toFixed(2):0
    const avgMaal=shot.length?(total/shot.length).toFixed(1):0
    return {name:s.name,shot:shot.length,total,avgPil,avgMaal}
  }).filter(Boolean)
  if(!data.length)return ''
  const cards=data.map(d=>`<div style="flex:1;min-width:130px;background:var(--surface2);border-radius:10px;padding:12px 10px;text-align:center;"><div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:2px;">${d.name}</div><div style="font-size:11px;color:var(--muted);margin-bottom:6px;">${d.shot} af ${round.numTargets} mål</div><div style="font-size:30px;font-weight:700;color:var(--acc);line-height:1.1;">${d.total}</div><div style="font-size:12px;color:var(--muted);margin-bottom:8px;">POINT</div><div style="display:flex;justify-content:center;gap:12px;"><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${d.avgPil}</div><div style="font-size:11px;color:var(--muted);">SNT/PIL</div></div><div><div style="font-size:16px;font-weight:700;color:var(--acc);">${d.avgMaal}</div><div style="font-size:11px;color:var(--muted);">SNT/MÅL</div></div></div></div>`).join('')
  return `<div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--surface2);"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Kun skudte mål</div><div style="display:flex;gap:8px;flex-wrap:wrap;">${cards}</div></div>`
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
    card.innerHTML=`<div class="rcard-info"><div class="rcard-name">${esc(r.name||'Runde')}</div><div class="rcard-meta"><span class="rcard-date">${esc(date)}</span> · ${esc(r.courseName||r.numTargets+' mål')}</div><div class="rcard-win">🏆 ${esc(winner?.name||'—')} (${winner?calcTotal(winner.scores):0} pt)</div></div><button class="btn-icon rcard-analyse" title="Analyser" style="font-size:16px;">📈</button><button class="del-btn" data-id="${esc(r.id)}">✕</button>`
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
  const gpsHtml=(distStr||durStr)?`<div style="display:flex;gap:8px;margin-bottom:12px;">${distStr?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${distStr}</div><div style="font-size:11px;color:var(--muted);">DISTANCE</div></div>`:''}${durStr?`<div style="flex:1;text-align:center;background:var(--surface2);border-radius:8px;padding:8px;"><div style="font-size:20px;font-weight:700;color:var(--acc);">${durStr}</div><div style="font-size:11px;color:var(--muted);">TID</div></div>`:''}</div>${gpsRoute?`<div id="rpop-map" style="height:200px;border-radius:8px;margin-bottom:12px;overflow:hidden;"></div>`:''}`:'';
  document.getElementById('rpop-body').innerHTML=`<h3 style="font-family:var(--fd);color:var(--acc);margin-bottom:12px;">${esc(round.name)}</h3>${gpsHtml}`+buildSummaryCards(round)+buildResultsTable(round)+buildActualResults(round)+`<button class="btn btn-gold" style="width:100%;margin-top:12px;" onclick="window.sendResults(window._lastRound)">📧 Send resultater</button>`
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
  round.shooters.forEach(s=>{
    body+='\n'+s.name+':\n'
    for(let t=0;t<round.numTargets;t++){
      const r=s.scores[t]||[null,null]
      const sum=(r[0]!=null&&r[0]!=='M'?Number(r[0]):0)+(r[1]!=null&&r[1]!=='M'?Number(r[1]):0)
      body+='  Mål '+(t+1)+': '+r.map(v=>v??'-').join('+')+' = '+sum+'\n'
    }
    const arr1=s.scores.map(t=>(t||[null,null])[0]).filter(v=>v!=null)
    const arr2=s.scores.map(t=>(t||[null,null])[1]).filter(v=>v!=null)
    const allArr=s.scores.flat().filter(v=>v!=null)
    const avg1=arr1.length?(arr1.reduce((a,v)=>a+scoreVal(v),0)/arr1.length).toFixed(2):'—'
    const avg2=arr2.length?(arr2.reduce((a,v)=>a+scoreVal(v),0)/arr2.length).toFixed(2):'—'
    const avgAll=allArr.length?(allArr.reduce((a,v)=>a+scoreVal(v),0)/allArr.length).toFixed(2):'—'
    const dist=calcDistribution(s.scores)
    body+='  Total: '+calcTotal(s.scores)+' point\n'
    body+='  Snit pil 1: '+avg1+' | Snit pil 2: '+avg2+' | Samlet snit: '+avgAll+'\n'
    body+='  Fordeling: '+Object.entries(dist).map(([k,v])=>k+':'+v+'x').join('  ')+'\n'
  })
  if(round.id)body+=`\n\nSe resultater i appen:\nhttps://bsk65.github.io/3D/?round=${round.id}\n(Kræver login med din bruger)`
  const emails=round.shooters.map(s=>state.friends.find(f=>f.id===s.id)?.email).filter(Boolean)
  const subject='3D Bueskydning - '+round.name
  const mailto='mailto:'+emails.join(',')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)
  window.location.href=mailto
}
