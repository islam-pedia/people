export type Chapter = {
  id: string
  place: string
  period: string
  title: string
  body: string[]
  source: string
}

export type Relation = {
  name: string
  arabic?: string
  relation: string
  context: string
}

export const chapters: Chapter[] = [
  {
    id: "makkah",
    place: "Makkah",
    period: "Tahun Gajah",
    title: "Lahir dari nasab yang dikenal kaumnya",
    body: [
      "Muhammad bin Abdullah bin Abdul Muthalib berasal dari Bani Hasyim, salah satu keluarga Quraisy. Ayah beliau wafat sebelum kelahirannya; ibunya, Aminah binti Wahb, wafat ketika beliau masih kecil.",
      "Pengasuhan kemudian berpindah kepada kakeknya, Abdul Muthalib, lalu kepada pamannya, Abu Thalib. Rangkaian keluarga ini menjadi jalur pertama untuk memahami kehidupan beliau sebelum kenabian.",
    ],
    source:
      "Rujukan awal: Sirah Ibn Hisyam; al-Bidayah wa al-Nihayah, Ibn Katsir.",
  },
  {
    id: "wahyu",
    place: "Jabal Nur",
    period: "610 M",
    title: "Sebuah perintah yang membuka zaman baru",
    body: [
      "Pada usia empat puluh tahun, wahyu pertama turun ketika beliau berada di Gua Hira. Lima ayat awal Surah al-‘Alaq membuka masa kerasulan dan seruan untuk beribadah hanya kepada Allah.",
      "Khadijah binti Khuwailid menjadi orang pertama yang membenarkan dan menenangkan beliau. Dari rumah terdekat, dakwah bergerak perlahan menuju masyarakat Makkah.",
    ],
    source: "QS al-‘Alaq 96:1–5; Sahih al-Bukhari, Kitab Bad’ al-Wahy.",
  },
  {
    id: "hijrah",
    place: "Makkah → Madinah",
    period: "622 M / 1 H",
    title: "Perjalanan yang mengubah arah umat",
    body: [
      "Setelah tekanan terhadap kaum Muslimin semakin berat, Nabi ﷺ berhijrah dari Makkah menuju Madinah bersama Abu Bakr al-Shiddiq. Al-Qur’an mengabadikan keadaan keduanya di dalam gua ketika pertolongan Allah menyertai mereka.",
      "Hijrah bukan hanya perpindahan tempat. Di Madinah, kaum Muslimin memperoleh ruang untuk beribadah, hidup bersama, dan membangun masyarakat yang dituntun oleh wahyu.",
    ],
    source: "QS al-Tawbah 9:40; Sahih al-Bukhari, Kitab Manaqib al-Ansar.",
  },
  {
    id: "madinah",
    place: "Madinah",
    period: "1–11 H",
    title: "Wahyu hadir di tengah kehidupan bersama",
    body: [
      "Tahun-tahun Madinah memperlihatkan kerasulan dalam kehidupan yang utuh: ibadah, keluarga, persaudaraan, perjanjian, peperangan, perdamaian, pengajaran, dan kepemimpinan.",
      "Dari sini hubungan antartokoh menjadi penting. Keluarga, Muhajirin, Ansar, para penulis wahyu, dan generasi sahabat membawa pengetahuan tentang perkataan serta perbuatan beliau kepada umat setelahnya.",
    ],
    source:
      "Rujukan tematik: Sahih al-Bukhari; Sahih Muslim; Sirah Ibn Hisyam.",
  },
]

export const relations: Relation[] = [
  {
    name: "Abdullah",
    arabic: "عبد الله",
    relation: "Ayah",
    context: "Putra Abdul Muthalib; wafat sebelum kelahiran Nabi ﷺ.",
  },
  {
    name: "Aminah binti Wahb",
    arabic: "آمنة بنت وهب",
    relation: "Ibu",
    context: "Berasal dari Bani Zuhrah; wafat ketika Nabi ﷺ masih kecil.",
  },
  {
    name: "Khadijah binti Khuwailid",
    arabic: "خديجة بنت خويلد",
    relation: "Istri",
    context: "Orang pertama yang beriman dan penopang awal dakwah.",
  },
  {
    name: "Fatimah al-Zahra",
    arabic: "فاطمة الزهراء",
    relation: "Putri",
    context: "Putri Nabi ﷺ dan istri Ali bin Abi Thalib.",
  },
  {
    name: "Abu Bakr al-Shiddiq",
    arabic: "أبو بكر الصديق",
    relation: "Sahabat",
    context: "Menemani hijrah dan menjadi khalifah pertama setelah beliau.",
  },
  {
    name: "Ali bin Abi Thalib",
    arabic: "علي بن أبي طالب",
    relation: "Sepupu & menantu",
    context: "Dibesarkan dekat dengan Nabi ﷺ dan menikah dengan Fatimah.",
  },
]

export const references = [
  {
    title: "Al-Qur’an",
    detail: "QS 21:107 · QS 33:21 · QS 33:40 · QS 9:40 · QS 96:1–5",
  },
  {
    title: "Sahih al-Bukhari",
    detail: "Bad’ al-Wahy · Manaqib · Manaqib al-Ansar · al-Maghazi",
  },
  {
    title: "Sahih Muslim",
    detail: "Kitab al-Fada’il dan riwayat-riwayat terkait sirah",
  },
  {
    title: "Sirah Ibn Hisyam",
    detail:
      "Riwayat sirah yang disusun dari karya Ibn Ishaq dengan penelitian lanjutan",
  },
  {
    title: "Ibn Katsir",
    detail: "Al-Bidayah wa al-Nihayah dan al-Fusul fi Sirat al-Rasul",
  },
]
