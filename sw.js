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

// Push-notifikationer (meetup-invitationer, sendt via Cloud Function).
// Rå Push API — ingen firebase-messaging-compat.js, da FCM's webpush-levering
// under motorhjelmen bare er et standard Push-event med en data-payload.
self.addEventListener('push', (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch(e) {}
  const data = payload.data || payload;
  const title = data.title || '3D Bueskydning';
  event.waitUntil(self.registration.showNotification(title, {
    body: data.body || '',
    icon: '/3D/icons/icon-192.png',
    badge: '/3D/icons/icon-192.png',
    data: { url: data.url || '/3D/' }
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/3D/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(wins => {
      for (const c of wins) if (c.url.includes(url) && 'focus' in c) return c.focus();
      return clients.openWindow ? clients.openWindow(url) : null;
    })
  );
});
