// js/gps.js — GPS sporing og rutehåndtering

let watchId = null;
let trackingActive = false;
let paused = false;
let routePoints = []; // [{lat, lng, ts}]
let startTime = null;
let totalDistance = 0;
let lastPoint = null;
let timerInterval = null;
let onUpdateCallback = null;

/** Parse GPS route string "lat,lng;lat,lng;..." → [{lat,lng}] */
export function parseRoute(str) {
  if (!str) return [];
  return str.split(';').map(p => {
    const [lat, lng] = p.split(',').map(Number);
    return { lat, lng };
  });
}

/** Serialize route to string */
export function serializeRoute(points) {
  return points.map(p => `${p.lat},${p.lng}`).join(';');
}

/** Calculate distance between two lat/lng points (meters) */
function haversine(p1, p2) {
  const R = 6371000;
  const dLat = (p2.lat - p1.lat) * Math.PI / 180;
  const dLng = (p2.lng - p1.lng) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Format seconds to MM:SS */
export function formatDuration(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/** Format distance */
export function formatDistance(meters) {
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(2)} km`;
}

/** Start GPS tracking */
export function startTracking(onUpdate) {
  if (!navigator.geolocation) return false;
  onUpdateCallback = onUpdate;
  routePoints = [];
  totalDistance = 0;
  lastPoint = null;
  startTime = Date.now();
  paused = false;
  trackingActive = true;

  watchId = navigator.geolocation.watchPosition(
    (pos) => {
      if (!trackingActive || paused) return;
      const p = { lat: pos.coords.latitude, lng: pos.coords.longitude, ts: Date.now() };
      if (lastPoint) totalDistance += haversine(lastPoint, p);
      lastPoint = p;
      routePoints.push(p);
      if (onUpdateCallback) {
        onUpdateCallback({
          lat: p.lat,
          lng: p.lng,
          distance: totalDistance,
          elapsed: Math.round((Date.now() - startTime) / 1000)
        });
      }
    },
    (err) => console.warn('GPS error:', err.message),
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
  );

  // Timer tick
  timerInterval = setInterval(() => {
    if (!trackingActive || paused) return;
    if (onUpdateCallback) {
      onUpdateCallback({
        lat: lastPoint?.lat,
        lng: lastPoint?.lng,
        distance: totalDistance,
        elapsed: Math.round((Date.now() - startTime) / 1000)
      });
    }
  }, 1000);

  return true;
}

/** Pause/resume tracking */
export function togglePause() {
  paused = !paused;
  return paused;
}

/** Stop tracking and return results */
export function stopTracking() {
  trackingActive = false;
  paused = false;
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
  clearInterval(timerInterval);
  timerInterval = null;

  const duration = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
  return {
    route: serializeRoute(routePoints),
    distance: Math.round(totalDistance),
    duration,
  };
}

/** Get current position once */
export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => reject(err),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}

/** Find nearest target by GPS distance */
export function findNearestTarget(targets, currentPos) {
  if (!targets?.length || !currentPos) return 0;
  let minDist = Infinity, nearestIdx = 0;
  targets.forEach((t, i) => {
    if (!t.gps) return;
    const d = haversine(currentPos, t.gps);
    if (d < minDist) { minDist = d; nearestIdx = i; }
  });
  return nearestIdx;
}

export { routePoints, totalDistance };
