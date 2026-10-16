// Offline support for the Mood & Stress Diary.
// When you change any file, increase VERSION so phones pick up the update.
const VERSION = 'mood-diary-v1';
const FILES = [
  './',
  'index.html',
  'manifest.json',
  'logo.png',
  'privacy.html',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-48.png',
  'fonts/lato-latin-400-normal.woff2',
  'fonts/lato-latin-700-normal.woff2',
  'fonts/lato-latin-900-normal.woff2',
  'fonts/cormorant-garamond-latin-600-italic.woff2',
  'fonts/cormorant-garamond-latin-700-italic.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  // Pages: try the network first so updates show up, fall back to the saved copy offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })
        .catch(() => caches.match(req, {ignoreSearch: true}).then(hit => hit || caches.match('index.html')))
    );
    return;
  }

  // Everything else: saved copy first, network if missing
  event.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
