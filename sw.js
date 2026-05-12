// sw.js — minimal service worker, kun til PWA installation
// Ingen caching der kan blokere Firebase forbindelsen

const CACHE_NAME = 'archery-v5';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Ingen fetch handler - al trafik går direkte til netværket
