// js/gps.js — GPS-sporing, afstandsberegning og formatering.
// Afhænger kun af browserens geolocation-API; ingen DOM/Firebase/state.

// Intern sporingstilstand.
let _watchId=null, _tracking=false, _paused=false, _route=[], _startTime=null, _totalDist=0, _lastPoint=null, _timerInterval=null, _onUpdate=null

// Parser "lat,lng;lat,lng" til en liste af punkter.
export function parseRoute(str) {
  if (!str) return []
  return str.split(';').map(p => { const [lat,lng] = p.split(',').map(Number); return {lat,lng} })
}

// Afstand mellem to lat/lng-punkter i meter (haversine).
export function haversine(a,b) {
  const R=6371000, dLat=(b.lat-a.lat)*Math.PI/180, dLng=(b.lng-a.lng)*Math.PI/180
  const x=Math.sin(dLat/2)**2+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2
  return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))
}

// Sekunder → mm:ss.
export function formatDuration(s) { return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}` }
// Meter → "500 m" / "1.23 km".
export function formatDistance(m) { return m<1000 ? `${Math.round(m)} m` : `${(m/1000).toFixed(2)} km` }

// Starter GPS-sporing. onUpdate kaldes ~1x/sek med {lat,lng,distance,elapsed}.
export function startTracking(onUpdate) {
  if (!navigator.geolocation) return false
  _onUpdate=onUpdate; _route=[]; _totalDist=0; _lastPoint=null; _startTime=Date.now(); _paused=false; _tracking=true
  _watchId = navigator.geolocation.watchPosition(pos => {
    if (!_tracking||_paused) return
    const p = {lat:pos.coords.latitude, lng:pos.coords.longitude}
    if (_lastPoint) _totalDist += haversine(_lastPoint,p)
    _lastPoint=p; _route.push(p)
    _onUpdate && _onUpdate({lat:p.lat,lng:p.lng,distance:_totalDist,elapsed:Math.round((Date.now()-_startTime)/1000)})
  }, e=>console.warn(e), {enableHighAccuracy:true,maximumAge:5000,timeout:10000})
  _timerInterval = setInterval(()=>{
    if(_tracking&&!_paused&&_onUpdate) _onUpdate({lat:_lastPoint?.lat,lng:_lastPoint?.lng,distance:_totalDist,elapsed:Math.round((Date.now()-_startTime)/1000)})
  },1000)
  return true
}

// Pauser/genoptager sporing. Returnerer ny pause-tilstand.
export function toggleGpsPause() { _paused=!_paused; return _paused }

// Stopper sporing og returnerer {route, distance, duration}.
export function stopTracking() {
  _tracking=false; _paused=false
  if(_watchId!==null){navigator.geolocation.clearWatch(_watchId);_watchId=null}
  clearInterval(_timerInterval); _timerInterval=null
  return {route:_route.map(p=>`${p.lat},${p.lng}`).join(';'), distance:Math.round(_totalDist), duration:_startTime?Math.round((Date.now()-_startTime)/1000):0}
}

// Enkelt-aflæsning af nuværende position som Promise<{lat,lng}>.
export function getCurrentPosition() {
  return new Promise((res,rej)=>{
    if(!navigator.geolocation){rej(new Error('GPS ikke understøttet'));return}
    navigator.geolocation.getCurrentPosition(p=>res({lat:p.coords.latitude,lng:p.coords.longitude}),rej,{enableHighAccuracy:true,timeout:10000})
  })
}

// Indeks på nærmeste mål (med gps) ift. en position. 0 hvis intet passer.
export function findNearestTarget(targets,pos) {
  if(!targets?.length||!pos) return 0
  let minD=Infinity,idx=0
  targets.forEach((t,i)=>{if(!t.gps)return;const d=haversine(pos,t.gps);if(d<minD){minD=d;idx=i}})
  return idx
}
