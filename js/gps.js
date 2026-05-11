// js/gps.js — GPS sporing og rutehåndtering

let _watchId = null, _tracking = false, _paused = false;
let _route = [], _startTime = null, _totalDist = 0, _lastPoint = null;
let _timerInterval = null, _onUpdate = null;

export function parseRoute(str) {
  if (!str) return [];
  return str.split(';').map(p => { const [lat, lng] = p.split(',').map(Number); return { lat, lng }; });
}

export function serializeRoute(pts) {
  return pts.map(p => `${p.lat},${p.lng}`).join(';');
}

function haversine(a, b) {
  const R = 6371000, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
  const x = Math.sin(dLat/2)**2 + Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
}

export function formatDuration(s) {
  return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;
}

export function formatDistance(m) {
  return m < 1000 ? `${Math.round(m)} m` : `${(m/1000).toFixed(2)} km`;
}

export function startTracking(onUpdate) {
  if (!navigator.geolocation) return false;
  _onUpdate = onUpdate; _route = []; _totalDist = 0; _lastPoint = null;
  _startTime = Date.now(); _paused = false; _tracking = true;

  _watchId = navigator.geolocation.watchPosition(pos => {
    if (!_tracking || _paused) return;
    const p = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    if (_lastPoint) _totalDist += haversine(_lastPoint, p);
    _lastPoint = p; _route.push(p);
    _onUpdate && _onUpdate({ lat: p.lat, lng: p.lng, distance: _totalDist, elapsed: Math.round((Date.now()-_startTime)/1000) });
  }, err => console.warn('GPS:', err.message), { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 });

  _timerInterval = setInterval(() => {
    if (_tracking && !_paused && _onUpdate)
      _onUpdate({ lat: _lastPoint?.lat, lng: _lastPoint?.lng, distance: _totalDist, elapsed: Math.round((Date.now()-_startTime)/1000) });
  }, 1000);
  return true;
}

export function toggleGpsPause() {
  _paused = !_paused; return _paused;
}

export function stopTracking() {
  _tracking = false; _paused = false;
  if (_watchId !== null) { navigator.geolocation.clearWatch(_watchId); _watchId = null; }
  clearInterval(_timerInterval); _timerInterval = null;
  return { route: serializeRoute(_route), distance: Math.round(_totalDist), duration: _startTime ? Math.round((Date.now()-_startTime)/1000) : 0 };
}

export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) { reject(new Error('GPS ikke understøttet')); return; }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => reject(err), { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}

export function findNearestTarget(targets, pos) {
  if (!targets?.length || !pos) return 0;
  let minD = Infinity, idx = 0;
  targets.forEach((t, i) => { if (!t.gps) return; const d = haversine(pos, t.gps); if (d < minD) { minD = d; idx = i; } });
  return idx;
}
