const CACHE_NAME = 'deutschlernen-v1';
const urlsToCache = [
  './',
  './index.html',
  // Если у вас есть дополнительные внешние файлы (CSS, JS), добавьте их
  // Например: './style.css', './script.js'
  // Если все стили и скрипты внутри HTML, достаточно только index.html
];

// Устанавливаем кеш
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Отвечаем из кеша, если есть, иначе идём в сеть
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Обновляем кеш при активации нового сервис‑воркера
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))
  );
});
