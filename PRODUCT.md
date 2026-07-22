# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pembaca utama People adalah masyarakat umum Indonesia yang ingin mengenal
tokoh-tokoh Islam dan memahami hubungan di antara mereka tanpa harus membaca
sebuah basis data atau karya ilmiah mentah.

Pembaca datang untuk membaca, memahami, dan berpindah secara alami dari seorang
tokoh menuju tokoh, peristiwa, tempat, karya, sumber, atau hubungan lain yang
relevan. Produk tidak mengasumsikan pembaca telah memiliki dasar studi Islam
yang mendalam.

## Product Purpose

People adalah proyek pertama Islampedia: ensiklopedia tokoh Islam yang
menggabungkan pengetahuan terstruktur, hubungan yang dapat ditelusuri, dan
penyajian editorial yang artistik.

Tujuan awalnya adalah mengumpulkan tokoh-tokoh Islam dan hubungan keturunan di
antara mereka. Model pengetahuan harus dapat berkembang untuk mencakup hubungan
keluarga, guru–murid, persahabatan, keterlibatan dalam peristiwa, tempat, karya,
dan entitas pengetahuan lain.

Keberhasilan awal berarti satu halaman tokoh dapat membuat pembaca umum:

- memahami siapa tokoh tersebut dan kedudukannya dalam kisah yang lebih besar;
- menelusuri hubungan dan rujukan tanpa kehilangan konteks;
- membedakan fakta yang kuat, perbedaan riwayat, dan hal yang belum pasti; dan
- merasakan pengalaman membaca yang khidmat, autentik, indah, serta ringan.

Tokoh pertama yang menjadi proof of taste adalah Nabi Muhammad ﷺ.

## Positioning

People bukan wiki generik, katalog biografi, graph viewer, atau aplikasi CRUD.
Pembeda utamanya adalah satu knowledge layer yang konsisten dapat diterjemahkan
menjadi pengalaman editorial dan art direction yang berbeda untuk setiap tokoh,
tanpa mengorbankan sumber, hubungan, atau tingkat kepastian informasi.

## Operating Context

Mayoritas penggunaan awal adalah membaca halaman panjang di web. Pembaca dapat
masuk melalui sebuah halaman tokoh, mengikuti narasi, membuka rujukan, lalu
berpindah melalui hubungan yang bermakna.

Bahasa utama versi awal adalah Bahasa Indonesia. Bentuk penyajian dapat berupa
artikel, cerita visual, timeline, kartu relasi, atau komposisi editorial lain.
Pohon relasi terutama merupakan bentuk data; graph interaktif dengan pan, zoom,
dan drag bukan kebutuhan awal.

## Capabilities and Constraints

- Setiap tokoh memiliki halaman yang dapat saling terhubung.
- Knowledge layer menyimpan tokoh, alias, kategori, periode, sumber, relasi, dan
  tingkat kepastian relasi.
- Relasi dimodelkan sebagai edge generik yang memiliki asal, target, jenis,
  kepastian, rujukan, dan catatan editorial.
- Target relasi harus dapat berkembang melampaui tokoh ke peristiwa, tempat,
  karya, dan entitas lain.
- Fakta reusable berasal dari SQLite dan dibaca saat build; art direction,
  komposisi, serta animasi halaman berasal dari file Astro, CSS, TypeScript, dan
  aset.
- Output utama adalah HTML statis melalui Astro. JavaScript sisi klien dijaga
  sekecil mungkin.
- Stack awal adalah Astro, TypeScript, SQLite, Drizzle, vanilla CSS, dan Motion
  JS.
- Tahap awal tidak membutuhkan login, CMS, CRUD admin, SPA besar, database
  server, graph database, Svelte, GSAP, Tailwind, atau shadcn.
- Implementasi dimulai dari satu halaman yang sangat baik; abstraksi baru dibuat
  setelah pola terbukti.

## Brand Commitments

Nama produk adalah **People**, bagian dari **Islampedia**.

Produk harus terasa resmi, dapat dipercaya, khidmat, dan memiliki keberanian
artistik. Isi tetap menjadi pusat pengalaman. Setiap halaman boleh mempunyai art
direction sendiri selama keterbacaan, ketepatan, dan identitas People tetap
terjaga.

Pengalaman visual harus full-art dan premium: tipografi kuat, gambar berskala
besar, scrolling storytelling, serta animasi yang halus dan mantap. Kualitas
tersebut harus memperkuat isi dan rasa hormat kepada subjek, bukan menjadikan
halaman sebagai pertunjukan efek.

Setiap tokoh akan memiliki design direction dan `DESIGN.md` lokal di folder
kontennya. Dokumen tersebut mewarisi identitas induk People, kemudian menetapkan
dunia visual yang khusus untuk kehidupan dan narasi tokoh tersebut.

People tidak boleh terasa seperti Wikipedia, dashboard, template SaaS, atau
kumpulan komponen generik.

## Evidence on Hand

Belum ada korpus tokoh, naskah editorial final, citra resmi, identitas visual
final, atau klaim eksternal yang dapat dipakai sebagai bukti. Future work tidak
boleh mengarang kutipan, sanad, penilaian hadis, peristiwa, hubungan, atau
atribusi sumber untuk mengisi kekosongan desain.

Metode editorial berlandaskan manhaj salafiyyun: merujuk Al-Qur'an dan Sunnah
yang sahih sesuai pemahaman salafus shalih, serta mengacu pada penjelasan ulama
yang berada dalam kerangka tersebut. Setiap klaim historis atau genealogis harus
dapat ditelusuri ke sumbernya. Perbedaan riwayat dan tingkat kepastian tidak
diratakan menjadi satu klaim pasti.

Daftar sumber primer, ulama rujukan, standar penerimaan literatur, format
sitasi, dan proses peninjauan ilmiah masih perlu ditetapkan sebelum publikasi.

## Product Principles

1. **Amanah sebelum dramatisasi.** Keindahan penyajian tidak boleh melampaui atau
   mengubah kekuatan dalil dan sumber.
2. **Hubungan memberi konteks.** Setiap tautan antartokoh harus membantu pembaca
   memahami kedudukan, perjalanan, atau pengaruh—bukan sekadar menambah koneksi.
3. **Perbedaan diterangkan, bukan disembunyikan.** Kepastian, perbedaan riwayat,
   dan batas pengetahuan tampil dengan bahasa yang dapat dipahami pembaca umum.
4. **Satu knowledge layer, banyak ekspresi.** Fakta tetap konsisten; art direction
   boleh merespons karakter dan kisah setiap tokoh.
5. **Mulai dari kedalaman.** Satu pengalaman baca yang autentik dan lengkap lebih
   bernilai daripada banyak halaman dangkal atau arsitektur prematur.

## Accessibility & Inclusion

Pengalaman utama harus tetap dapat dibaca dan dinavigasi tanpa animasi atau
JavaScript sisi klien. Struktur HTML semantik, navigasi keyboard, fokus yang
terlihat, kontras teks yang memadai, dukungan `prefers-reduced-motion`, dan
tipografi yang nyaman untuk bacaan panjang adalah persyaratan dasar.

Penggunaan gelar kehormatan dan istilah Arab harus konsisten, dapat dipahami
pembaca umum, dan tidak bergantung pada dekorasi visual untuk menyampaikan
makna.
