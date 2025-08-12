const CACHE_NAME = 'qoqa-cv-showcase-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/lovable-uploads/06fcd206-f975-4969-a39c-b2bff95d7e95.png',
  '/lovable-uploads/02abbbeb-0bd2-43a1-a8f3-d47f1233f0ad.png',
  '/lovable-uploads/175e41be-9995-45f5-89c6-7e6cd86a1c28.png',
  '/lovable-uploads/2d0241b1-106b-4062-b1fe-b852224a97ad.png',
  '/lovable-uploads/324776d0-fb94-4d85-8898-db6b9e43e36c.png',
  '/lovable-uploads/3b28a478-a367-4887-982d-5a7810e41404.png',
  '/lovable-uploads/4096bb79-c957-4742-a9fc-203c9e0dc898.png',
  '/lovable-uploads/41a0554c-f258-4b05-9c17-aec38f4b476f.png',
  '/lovable-uploads/61d33138-a7a5-4667-9284-4e9768e00109.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});