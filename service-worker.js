self.addEventListener('install', event => {
  console.log('Service Worker installing...');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated!');
});

self.addEventListener('fetch', event => {
  // 暫時不快取，直接走網路
});
