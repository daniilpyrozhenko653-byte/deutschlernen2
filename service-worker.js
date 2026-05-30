const CACHE_NAME = 'langcards-v1'; // Меняйте номер при каждом обновлении
const urlsToCache = [
  './',
  './index.html',
  'index.html',
  '/',
  '/index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cache => cache !== CACHE_NAME).map(cache => caches.delete(cache))
      );
    })
  );
  self.clients.claim();
});

// Обработка сообщения от страницы для принудительного обновления
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
    self.clients.matchAll({ type: 'window' }).then(clients => {
      clients.forEach(client => client.postMessage({ action: 'reload' }));
    });
  }
});
