/* Çek/Senet — çevrimdışı çalışma.
   Uygulamayı güncellediğinde SURUM numarasını artır; telefonlar yeni sürümü çeker. */
const SURUM = "ceksenet-v4";
const DOSYALAR = ["./", "./index.html", "./manifest.json",
                  "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SURUM).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== SURUM).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Önce önbellekten aç (internet yokken de açılsın),
   arka planda yenisini indirip önbelleği tazele. */
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(bulunan => {
      const ag = fetch(e.request).then(cevap => {
        if(cevap && cevap.status === 200 && cevap.type === "basic"){
          const kopya = cevap.clone();
          caches.open(SURUM).then(c => c.put(e.request, kopya));
        }
        return cevap;
      }).catch(() => bulunan);
      return bulunan || ag;
    })
  );
});
