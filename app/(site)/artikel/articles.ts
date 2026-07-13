export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: string
  ctaTitle: string
  ctaText: string
  sections: Array<{
    heading: string
    paragraphs: string[]
  }>
}

export const articles: Article[] = [
  {
    slug: 'cara-memilih-travel-umrah-yang-amanah',
    title: 'Cara Memilih Travel Umrah yang Amanah Sebelum Bayar DP',
    excerpt:
      'Catatan singkat untuk melihat legalitas, komunikasi, alur layanan, dan bukti pendampingan sebelum membayar DP.',
    category: 'Edukasi Jamaah',
    publishedAt: '2026-07-01',
    readTime: '4 menit baca',
    ctaTitle: 'Sudah punya shortlist travel?',
    ctaText:
      'Lihat paket aktif Mazaya Travel atau hubungi kami lewat WhatsApp bila masih ingin memastikan jadwal, biaya, dan dokumen awal.',
    sections: [
      {
        heading: 'Mulai dari legalitas yang bisa diverifikasi',
        paragraphs: [
          'Sebelum membahas harga, cek dulu identitas usaha dan legalitas dasarnya. Travel yang amanah memudahkan calon jamaah melihat nama perusahaan, status izin, dan data pendukung lain tanpa membuat proses verifikasi terasa rumit.',
          'Bila legalitas sulit ditemukan atau penjelasannya berubah-ubah, calon jamaah sebaiknya menahan diri dulu. Pemeriksaan awal seperti ini membantu keluarga merasa lebih tenang sebelum masuk tahap pembayaran.',
        ],
      },
      {
        heading: 'Perhatikan cara travel menjelaskan proses',
        paragraphs: [
          'Travel yang baik tidak hanya menjual jadwal keberangkatan. Mereka juga menjelaskan alur daftar, kebutuhan dokumen, kemungkinan timeline, dan siapa yang akan mendampingi jamaah selama proses berjalan.',
          'Penjelasan yang sabar dan tidak berbelit sering menjadi tanda bahwa operasionalnya juga dijaga. Ini membantu calon jamaah baru yang belum pernah berangkat sebelumnya.',
        ],
      },
      {
        heading: 'Lihat bukti layanan, bukan janji besar',
        paragraphs: [
          'Dokumentasi, testimoni, dan detail paket yang terbuka biasanya lebih berguna daripada klaim yang terlalu besar. Calon jemaah butuh bukti bahwa travel terbiasa mendampingi perjalanan dengan baik.',
          'Gunakan halaman dokumentasi, testimoni, dan FAQ sebagai bahan banding sebelum menghubungi admin. Dengan begitu, pertanyaan saat konsultasi bisa lebih spesifik dan tidak mengulang hal dasar.',
        ],
      },
    ],
  },
  {
    slug: 'dokumen-awal-yang-perlu-disiapkan-untuk-umrah',
    title: 'Dokumen Awal yang Perlu Disiapkan untuk Pendaftaran Umrah',
    excerpt:
      'Dokumen dasar yang biasanya ditanyakan pada awal konsultasi dan pendaftaran Umrah.',
    category: 'Persiapan',
    publishedAt: '2026-06-28',
    readTime: '3 menit baca',
    ctaTitle: 'Ingin cek kesiapan berkas sambil lihat jadwal?',
    ctaText:
      'Buka halaman paket aktif untuk melihat pilihan keberangkatan, lalu hubungi kami bila ingin memastikan dokumen awal yang perlu disiapkan.',
    sections: [
      {
        heading: 'Siapkan identitas dasar lebih dulu',
        paragraphs: [
          'Pada tahap awal, calon jamaah biasanya diminta menyiapkan data identitas dasar seperti nama lengkap dan dokumen pendukung. Data ini membantu tim travel membaca kebutuhan awal dengan lebih tepat.',
          'Menyiapkan dokumen dasar lebih cepat bukan berarti semua berkas harus lengkap di hari pertama. Tujuannya agar proses konsultasi menjadi efisien dan calon jamaah tidak bingung saat mulai daftar.',
        ],
      },
      {
        heading: 'Pisahkan dokumen wajib dan dokumen lanjutan',
        paragraphs: [
          'Ada dokumen yang memang dibutuhkan lebih cepat, dan ada juga yang menyusul mengikuti tahap proses atau kebijakan paket. Memahami perbedaan ini penting supaya jamaah tidak merasa terbebani di awal.',
          'Saat konsultasi, mintalah daftar prioritas: mana yang perlu segera disiapkan, mana yang bisa menyusul. Cara ini membuat pendaftaran awal terasa lebih ringan.',
        ],
      },
      {
        heading: 'Simpan salinan digital yang rapi',
        paragraphs: [
          'Untuk kebutuhan online, salinan digital yang jelas dan mudah dibaca akan sangat membantu. File yang rapi mempercepat pengecekan awal dan mengurangi risiko bolak-balik kirim dokumen.',
          'Jika belum yakin format file seperti apa yang aman dikirim, tanyakan dulu ke admin. Lebih baik memastikan dari awal daripada salah unggah dan mengulang proses.',
        ],
      },
    ],
  },
  {
    slug: 'kapan-waktu-terbaik-daftar-paket-umrah',
    title: 'Kapan Waktu Terbaik Daftar Paket Umrah?',
    excerpt:
      'Penjelasan sederhana tentang kenapa calon jamaah sebaiknya tidak menunggu terlalu mepet saat memilih paket keberangkatan.',
    category: 'Perencanaan',
    publishedAt: '2026-06-24',
    readTime: '4 menit baca',
    ctaTitle: 'Mau bandingkan jadwal yang masih relevan?',
    ctaText:
      'Lihat paket Umrah yang tersedia, lalu buka detail yang paling dekat dengan rencana keberangkatan Anda. Jika masih ragu, silakan hubungi kami lebih dulu.',
    sections: [
      {
        heading: 'Daftar lebih awal memberi ruang untuk menimbang',
        paragraphs: [
          'Saat daftar terlalu mepet, pilihan paket biasanya semakin sempit. Kursi, hotel, atau opsi jadwal bisa berubah lebih cepat sehingga calon jamaah kehilangan ruang untuk membandingkan dengan tenang.',
          'Mendaftar lebih awal tidak selalu berarti harus langsung bayar penuh. Yang lebih penting adalah membuka komunikasi lebih cepat agar Anda tahu posisi kursi, perkiraan waktu, dan persiapan yang realistis.',
        ],
      },
      {
        heading: 'Waktu cukup membantu keluarga ikut menilai',
        paragraphs: [
          'Banyak keputusan Umrah dibicarakan bersama pasangan atau keluarga. Dengan waktu yang cukup, proses verifikasi travel, legalitas, dan jadwal keberangkatan bisa dilakukan tanpa tekanan berlebihan.',
          'Ini penting terutama untuk jamaah pertama kali, karena keputusan biasanya tidak hanya soal harga tetapi juga rasa aman selama proses berjalan.',
        ],
      },
      {
        heading: 'Gunakan informasi seat dan status paket',
        paragraphs: [
          'Perhatikan status aktif, sold out, dan sisa seat bila tersedia. Informasi ini membantu Anda melihat apakah sebuah paket masih layak dipertimbangkan atau perlu segera dikonfirmasi ke admin.',
          'Jika seat tidak ditampilkan penuh, jadikan WhatsApp sebagai langkah klarifikasi, bukan langkah pertama untuk mencari semua informasi dasar.',
        ],
      },
    ],
  },
  {
    slug: 'apa-yang-perlu-ditanyakan-saat-konsultasi-umrah',
    title: 'Apa yang Perlu Ditanyakan Saat Konsultasi Umrah?',
    excerpt:
      'Pertanyaan inti yang biasanya perlu ditanyakan sebelum memilih paket dan mengisi pendaftaran.',
    category: 'Konsultasi',
    publishedAt: '2026-06-20',
    readTime: '5 menit baca',
    ctaTitle: 'Siap lanjut tanya yang spesifik?',
    ctaText:
      'Gunakan daftar pertanyaan ini saat membuka detail paket atau saat menghubungi tim Mazaya, supaya percakapan tetap fokus pada hal yang memang perlu Anda pastikan.',
    sections: [
      {
        heading: 'Tanyakan hal yang memengaruhi keputusan',
        paragraphs: [
          'Prioritaskan pertanyaan tentang jadwal, durasi, kota keberangkatan, harga, status kursi, dan apa saja yang termasuk dalam paket. Informasi seperti ini biasanya paling dibutuhkan di awal.',
          'Dengan urutan ini, percakapan menjadi lebih terarah dan Anda bisa melihat apakah paket tersebut dekat dengan kebutuhan keluarga.',
        ],
      },
      {
        heading: 'Tanyakan alur pendaftaran sejak awal',
        paragraphs: [
          'Selain detail paket, tanyakan bagaimana alur setelah mengisi form, siapa yang akan menghubungi, dan dokumen apa yang biasanya diminta lebih dulu. Calon jamaah biasanya lebih tenang ketika alurnya dijelaskan sejak awal.',
          'Penjelasan alur membantu mengurangi rasa takut salah isi, terutama untuk calon jamaah yang baru pertama kali memakai form pendaftaran online.',
        ],
      },
      {
        heading: 'Jangan lupa tanya dukungan selama proses',
        paragraphs: [
          'Konsultasi yang baik tidak berhenti di harga. Tanyakan juga bagaimana pendampingan sebelum berangkat, bagaimana komunikasi berjalan, dan bagaimana travel membantu saat ada kebutuhan klarifikasi.',
          'Pertanyaan ini penting karena rasa aman sering datang dari kualitas pendampingan, bukan hanya dari brosur paket.',
        ],
      },
    ],
  },
  {
    slug: 'mengapa-halaman-legalitas-penting-sebelum-daftar',
    title: 'Mengapa Halaman Legalitas Penting Sebelum Daftar?',
    excerpt:
      'Alasan kenapa calon jamaah dan keluarga perlu melihat legalitas lebih dulu sebelum fokus ke promo atau harga.',
    category: 'Legalitas',
    publishedAt: '2026-06-15',
    readTime: '3 menit baca',
    ctaTitle: 'Ingin cek legalitas dulu sebelum memilih paket?',
    ctaText:
      'Cek halaman legalitas Mazaya Travel untuk verifikasi dasar, lalu lanjutkan ke paket bila Anda ingin menilai pilihan keberangkatan dengan lebih yakin.',
    sections: [
      {
        heading: 'Legalitas membantu menyaring risiko awal',
        paragraphs: [
          'Banyak calon jamaah tertarik dulu pada harga atau jadwal. Padahal legalitas adalah lapisan dasar yang membantu menyaring risiko sejak awal sebelum masuk ke keputusan yang lebih detail.',
          'Saat data legal tersedia dan mudah dipahami, keluarga juga punya pegangan yang lebih kuat untuk ikut menilai pilihan travel.',
        ],
      },
      {
        heading: 'Rasa aman lebih mudah tumbuh saat bukti terbuka',
        paragraphs: [
          'Halaman legalitas yang rapi membuat proses verifikasi terasa wajar, bukan seperti mencari informasi tersembunyi. Ini memberi sinyal bahwa travel siap dinilai secara terbuka.',
          'Bagi calon jemaah yang baru mengenal sebuah travel, halaman legalitas membantu memberikan pegangan awal sebelum membahas harga atau promo.',
        ],
      },
      {
        heading: 'Gabungkan legalitas dengan bukti operasional',
        paragraphs: [
          'Legalitas saja belum cukup. Gabungkan dengan dokumentasi, testimoni, dan detail paket agar user mendapat gambaran yang utuh antara izin usaha dan pengalaman layanan nyata.',
          'Urutan ideal biasanya sederhana: cek legalitas, lihat paket, lalu konsultasi dengan pertanyaan yang lebih spesifik.',
        ],
      },
    ],
  },
  {
    slug: 'cara-membaca-detail-paket-umrah-dengan-cepat',
    title: 'Cara Membaca Detail Paket Umrah dengan Cepat',
    excerpt:
      'Panduan sederhana agar calon jemaah bisa memahami informasi paling penting di halaman detail paket tanpa bingung oleh terlalu banyak rincian.',
    category: 'Panduan Paket',
    publishedAt: '2026-06-10',
    readTime: '4 menit baca',
    ctaTitle: 'Mau praktik langsung di paket aktif?',
    ctaText:
      'Buka halaman paket untuk mempraktikkan cara baca cepat ini, lalu simpan WhatsApp sebagai jalur lanjutan bila masih ada bagian yang butuh penjelasan.',
    sections: [
      {
        heading: 'Mulai dari ringkasan yang paling penting',
        paragraphs: [
          'Pada detail paket, lihat dulu nama paket, tanggal keberangkatan, durasi, dan status kursi. Empat informasi ini biasanya sudah cukup untuk menilai apakah sebuah paket layak masuk shortlist.',
          'Bila empat poin ini cocok, baru lanjut ke harga, fasilitas, dan persyaratan. Pola baca seperti ini membuat keputusan terasa lebih ringan.',
        ],
      },
      {
        heading: 'Pisahkan informasi inti dan informasi pelengkap',
        paragraphs: [
          'Harga, fasilitas utama, dan CTA adalah inti. Hotel spesifik, maskapai, atau catatan tambahan adalah pelengkap yang penting, tetapi sebaiknya dibaca setelah Anda tahu paket tersebut memang sesuai kebutuhan awal.',
          'Cara ini membantu menghindari kelelahan informasi, terutama saat membuka beberapa paket sekaligus di ponsel.',
        ],
      },
      {
        heading: 'Gunakan CTA sebagai langkah berikutnya, bukan tekanan',
        paragraphs: [
          'CTA terbaik pada halaman paket bukan yang memaksa, tetapi yang jelas. Setelah membaca detail, user cukup diberi dua pilihan wajar: daftar jika sudah siap, atau konsultasi bila masih butuh arahan.',
          'Pendekatan ini menjaga pengalaman tetap tenang dan sesuai dengan kebutuhan jamaah yang sering datang untuk mencari kepastian lebih dulu.',
        ],
      },
    ],
  },
]

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]))
