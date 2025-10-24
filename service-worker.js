self.addEventListener('install', event => {
  console.log('Service Worker installing...');
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated!');
});

self.addEventListener('fetch', event => {
  // 目前不快取，直接使用網路資源
});
