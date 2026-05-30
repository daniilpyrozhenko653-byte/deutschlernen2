const CACHE_NAME = 'deutschlernen-v3';
// Кешируем не только главную страницу, но и все возможные варианты URL
const urlsToCache = [
  './',
  './index.html',
  'index.html',
  '/',
  '/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  // Немедленно активируем нового воркера
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        // Отдаём из кеша, если есть
        return response;
      }
      // Иначе пробуем загрузить из сети
      return fetch(event.request).then(networkResponse => {
        // Кешируем только успешные ответы с типом 'basic' (локальные)
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // Полная офлайн-ситуация: возвращаем главную страницу (или любой fallback)
        return caches.match('./index.html');
      });
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
  // Немедленно взять под контроль все открытые страницы
  self.clients.claim();
});
