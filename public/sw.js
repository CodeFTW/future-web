const CACHE_STATIC_FILES = 'static-files';

self.addEventListener('install', () => {
    console.log('Installing web app');

    const requestImgCodeFTW = `${registration.scope}img/codeFTW.png`;

    // Add codeFTW logo to cache storage
    caches.open(CACHE_STATIC_FILES).then(cache => {
        fetch(requestImgCodeFTW).then(response => cache.put(requestImgCodeFTW, response));
    });
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const promiseResponse = caches.open(CACHE_STATIC_FILES)
        .then(cache => cache.match(request))
        .then(responseCache => responseCache || fetch(request));
    event.respondWith(promiseResponse);
});
