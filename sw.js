// sw.js — minimal service worker, kun til PWA-installation
// Caching er deaktiveret for at undgå konflikter med Firebase

const CACHE_NAME = 'archery-v4';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Ingen fetch-håndtering — al trafik går direkte til netværket
// Dette sikrer at Firebase altid kan forbinde
