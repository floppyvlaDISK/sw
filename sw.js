const CACHE_VER = 'v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VER).then(cache => {
      return cache.addAll([
        './index.html',
        './images-list.js',
        './render-gallery.js',
        './gallery/bountyHunters.jpg',
        './gallery/myLittleVader.jpg',
        './gallery/snowTroopers.jpg',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(matchResponse => {
      return matchResponse || fetch(event.request).then(fetchResponse => {
        return caches.open(CACHE_VER).then(cache => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
  );
});