// sw.js — Service Worker til offline/PWA
const CACHE_NAME = 'archery-v3';
const BASE = '/3D';

const STATIC_ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/css/style.css',
  BASE + '/js/app.js',
  BASE + '/js/auth.js',
  BASE + '/js/firebase-instance.js',
  BASE + '/js/scoring.js',
  BASE + '/js/courses.js',
  BASE + '/js/gps.js',
  BASE + '/js/friends.js',
  BASE + '/logo.png',
  BASE + '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(STATIC_ASSETS.map(url =>
        cache.add(url).catch(() => {}) // ignorer fejl lydløst
      ))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Spring over alt der ikke er http/https (chrome-extensions osv.)
  if (!url.startsWith('http')) return;

  // Spring over Firebase — altid netværk
  if (url.includes('firebaseapp.com') ||
      url.includes('googleapis.com') ||
      url.includes('gstatic.com/firebasejs') ||
      url.includes('firestore') ||
      url.includes('identitytoolkit')) return;

  // Spring over POST requests — kan ikke caches
  if (event.request.method !== 'GET') return;

  // Map tiles — cache + netværk
  if (url.includes('arcgisonline.com')) {
    event.respondWith(
      caches.match(event.request).then(cached => cached ||
        fetch(event.request).then(res => {
          if (res.ok) caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
          return res;
        }).catch(() => new Response('', { status: 503 }))
      )
    );
    return;
  }

  // Navigation
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(BASE + '/index.html'))
    );
    return;
  }

  // Alt andet — cache først
  event.respondWith(
    caches.match(event.request).then(cached => cached ||
      fetch(event.request).then(res => {
        if (res.ok) caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
        return res;
      }).catch(() => new Response('Offline', { status: 503 }))
    )
  );
});
