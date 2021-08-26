var cacheName = 'loh-xiao';
var filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/img/Background.png',
    '/img/Loh Xiao.jpg',
    '/img/whatsapp.png',
    '/img/icons/icon1.png',
    '/img/icons/icon2.png',
    '/img/icons/icon3.png',
    '/img/icons/icon4.png',
    '/img/icons/icon5.png',
    '/img/icons/icon6.png',
    '/img/icons/icon7.png',
    '/img/icons/icon8.png'
];
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});
/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});