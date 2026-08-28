# Çek/Senet — kurulum

Bu klasördeki 6 dosya bir web uygulamasıdır. Bir kere internete koyulur,
sonra istediğin kadar telefona kurulur.

    index.html      uygulamanın kendisi
    sw.js           internetsiz açılmasını sağlar
    manifest.json   uygulama adı ve ikonu
    icon-180.png    ana ekran ikonu
    icon-192.png
    icon-512.png

Hepsi **aynı klasörde, yan yana** durmalı. Dosya adlarını değiştirme.

---

## 1. Adım — dosyaları internete koy (bir kere, senin bilgisayarından)

GitHub Pages ücretsiz, süresiz ve reklamsız. Hesabın yoksa github.com'dan aç.

1. github.com → sağ üstteki **+** → **New repository**
2. Repository name: `ceksenet` — **Public** seç — **Create repository**
3. Açılan sayfada **uploading an existing file** bağlantısına tıkla
4. Bu klasördeki **6 dosyanın hepsini** birden sürükle bırak → **Commit changes**
5. Üstteki **Settings** → sol menüden **Pages**
6. Source: **Deploy from a branch**, Branch: **main**, klasör: **/ (root)** → **Save**
7. 1-2 dakika bekle, sayfayı yenile. Yeşil kutuda adresin yazacak:

       https://KULLANICIADIN.github.io/ceksenet/

Bu adresi bir yere kaydet. Kurulum bundan ibaret.

## 2. Adım — arkadaşının telefonuna kur

Adresi ona WhatsApp'tan gönder. Telefonunda:

1. Bağlantıya dokunsun, **Safari'de** açılsın (Chrome'da olmaz)
2. Alttaki **paylaş** simgesi (yukarı oklu kare)
3. Listeyi aşağı kaydırıp **Ana Ekrana Ekle**
4. **Ekle**

Ana ekranda yeşil ikonuyla çıkar. Artık normal bir uygulama gibi açılır,
Safari çubuğu görünmez, internet olmadan da çalışır.

Aynı adresi kaç kişiye verirsen ver, herkesin kaydı kendi telefonunda ayrı durur.
Birbirlerinin kayıtlarını görmezler.

## 3. Adım — ilk ayarlar (arkadaşın yapacak)

1. Üstteki **"Kayıt defteri"** yazısına dokunup kendi işletme adını yazsın
2. **Cari** sekmesinden müşterilerini ve firmalarını girsin
   (bankalar hazır geliyor, eksik varsa Banka sekmesinden ekler)
3. Artık **Yeni** sekmesinden tahsilat/ödeme işleyebilir

---

## Önemli: adresi bir daha değiştirme

Kayıtlar telefonda, **adrese bağlı** olarak saklanır. Repository adını veya
adresi sonradan değiştirirsen uygulama boş açılır — kayıtlar silinmez ama
görünmez. Bu yüzden adı en baştan doğru koy ve bir daha dokunma.

Adres değiştirmek zorunda kalırsan: eski adreste **Yedek al**, yeni adreste
**Yedekten geri yükle**.

## Uygulamayı güncellemek

Yeni bir sürüm hazırlarsan:

1. `sw.js` dosyasındaki `const SURUM = "ceksenet-v1";` satırını `v2` yap
2. Değişen dosyaları GitHub'da aynı yere yükle (Add file → Upload files)

Telefonlar birkaç dakika içinde yeni sürümü kendiliğinden alır. Kayıtlar durur.

## Yedek

Uygulamadaki **Yedek** düğmesi → **Yedek al ve Dosyalar'a kaydet** →
paylaşım penceresinden **Dosyalar'a Kaydet → iCloud Drive**.

Ayda bir yapması yeterli; unutursa Kasa ekranında uyarı çıkar.
Telefon kaybolsa bile yeni telefonda uygulamayı kurup yedeği geri yükler.
