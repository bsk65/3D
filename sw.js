// sw.js — Service Worker til offline/PWA

const CACHE_NAME = 'archery-v2';
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
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        STATIC_ASSETS.map(url =>
          cache.add(url).catch(err => console.warn('Cache miss:', url, err))
        )
      );
    })
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
  const { request } = event;

  // Skip Firebase API calls — always network
  if (request.url.includes('firebaseapp.com') ||
      request.url.includes('googleapis.com') ||
      request.url.includes('firestore.googleapis.com') ||
      request.url.includes('gstatic.com/firebasejs')) {
    return;
  }

  // Map tiles — cache then network
  if (request.url.includes('arcgisonline.com')) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
    return;
  }

  // Navigation — network first, fall back to index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match(BASE + '/index.html'))
    );
    return;
  }

  // Everything else — cache first
  event.respondWith(
    caches.match(request).then(cached => {
      return cached || fetch(request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => new Response('Offline', { status: 503 }));
    })
  );
});
