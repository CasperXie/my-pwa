self.addEventListener('install', event => {
  console.log('Service Worker installing...');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated!');
});

self.addEventListener('fetch', event => {
  // 可加快取策略，這裡先用網路直取
});
