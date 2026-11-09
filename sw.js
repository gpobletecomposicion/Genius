// Genius: funciona sin conexión. Sube VERSION cada vez que publiques cambios.
const VERSION = "genius-v4";
const FILES = [
  "./", "./index.html", "./modelos.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png", "./icons/favicon.png",
  "./fonts/albert-sans-latin-400-normal.woff2", "./fonts/albert-sans-latin-500-normal.woff2",
  "./fonts/albert-sans-latin-600-normal.woff2", "./fonts/albert-sans-latin-700-normal.woff2",
  "./fonts/albert-sans-latin-800-normal.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, {cache: "reload"})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Página: primero la red (para tomar cambios), si no hay conexión usa la copia guardada.
// Datos, íconos y fuentes: primero la copia guardada (se renuevan al subir VERSION).
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; })));
});
