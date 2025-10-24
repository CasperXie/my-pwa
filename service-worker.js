const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './style.css'
  // 可以把你的 JS 或其他資源也加進來
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
