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
      'Panduan ringkas untuk menilai legalitas, komunikasi, alur layanan, dan bukti pendampingan sebelum memutuskan daftar Umrah.',
    category: 'Edukasi Jamaah',
    publishedAt: '2026-07-01',
    readTime: '4 menit baca',
    ctaTitle: 'Sudah punya shortlist travel?',
    ctaText:
      'Lihat paket aktif Mazaya Travel atau mulai dari konsultasi WhatsApp bila masih ingin mencocokkan jadwal, budget, dan kesiapan dokumen.',
    sections: [
      {
        heading: 'Mulai dari legalitas yang bisa diverifikasi',
        paragraphs: [
          'Sebelum membahas harga, cek dulu identitas usaha dan legalitas dasarnya. Travel yang amanah memudahkan calon jamaah melihat nama perusahaan, status izin, dan data pendukung lain tanpa membuat proses verifikasi terasa rumit.',
          'Bila legalitas sulit ditemukan atau penjelasannya berubah-ubah, calon jamaah sebaiknya menahan keputusan. Verifikasi awal ini penting untuk membantu keluarga merasa lebih tenang sebelum masuk tahap pembayaran.',
        ],
      },
      {
        heading: 'Perhatikan cara travel menjelaskan proses',
        paragraphs: [
          'Travel yang baik tidak hanya menjual jadwal keberangkatan. Mereka juga menjelaskan alur daftar, kebutuhan dokumen, kemungkinan timeline, dan siapa yang akan mendampingi jamaah selama proses berjalan.',
          'Bahasa yang rapi dan mudah dipahami sering menjadi tanda bahwa operasionalnya juga lebih tertata. Ini sangat membantu calon jamaah baru yang belum pernah berangkat sebelumnya.',
        ],
      },
      {
        heading: 'Lihat bukti layanan, bukan janji besar',
        paragraphs: [
          'Dokumentasi, testimoni, dan detail paket yang mudah dipindai biasanya lebih berguna daripada klaim yang terlalu besar. Calon jamaah butuh sinyal nyata bahwa travel terbiasa mendampingi perjalanan dengan tenang dan jelas.',
          'Gunakan halaman dokumentasi, testimoni, dan FAQ sebagai bahan banding sebelum menghubungi admin. Dengan begitu, pertanyaan saat konsultasi bisa lebih spesifik dan tidak mengulang hal dasar.',
        ],
      },
    ],
  },
  {
    slug: 'dokumen-awal-yang-perlu-disiapkan-untuk-umrah',
    title: 'Dokumen Awal yang Perlu Disiapkan untuk Pendaftaran Umrah',
    excerpt:
      'Daftar dokumen dasar yang umumnya ditanyakan lebih awal agar proses konsultasi dan pendaftaran terasa lebih ringan.',
    category: 'Persiapan',
    publishedAt: '2026-06-28',
    readTime: '3 menit baca',
    ctaTitle: 'Ingin cek kesiapan berkas sambil lihat jadwal?',
    ctaText:
      'Buka halaman paket aktif untuk melihat pilihan keberangkatan, lalu lanjutkan ke WhatsApp bila ingin memastikan dokumen apa yang paling relevan untuk kondisi Anda.',
    sections: [
      {
        heading: 'Siapkan identitas dasar lebih dulu',
        paragraphs: [
          'Pada tahap awal, calon jamaah biasanya diminta menyiapkan data identitas dasar seperti nama lengkap dan dokumen pendukung yang mudah diverifikasi. Ini membantu tim travel memberi arahan yang lebih tepat sejak awal.',
          'Menyiapkan dokumen dasar lebih cepat bukan berarti semua berkas harus lengkap di hari pertama. Tujuannya agar proses konsultasi menjadi efisien dan calon jamaah tidak bingung saat mulai daftar.',
        ],
      },
      {
        heading: 'Pisahkan dokumen wajib dan dokumen lanjutan',
        paragraphs: [
          'Ada dokumen yang memang dibutuhkan lebih cepat, dan ada juga yang menyusul mengikuti tahap proses atau kebijakan paket. Memahami perbedaan ini penting supaya jamaah tidak merasa terbebani di awal.',
          'Saat konsultasi, mintalah daftar prioritas: mana yang perlu segera disiapkan, mana yang bisa menyusul. Struktur seperti ini membuat langkah pendaftaran terasa lebih manusiawi dan terarah.',
        ],
      },
      {
        heading: 'Simpan salinan digital yang rapi',
        paragraphs: [
          'Untuk kebutuhan online, salinan digital yang jelas dan mudah dibaca akan sangat membantu. File yang rapi mempercepat pengecekan awal dan mengurangi risiko bolak-balik kirim dokumen.',
          'Jika belum yakin format file seperti apa yang aman dikirim, tanyakan dulu ke admin. Lebih baik jelas di awal daripada salah unggah dan mengulang proses.',
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
      'Lihat paket Umrah yang tersedia lalu pilih detail yang paling dekat dengan target keberangkatan Anda. Jika masih ragu, konsultasi singkat sering lebih cepat daripada menunda terlalu lama.',
    sections: [
      {
        heading: 'Daftar lebih awal memberi ruang keputusan',
        paragraphs: [
          'Saat daftar terlalu mepet, pilihan paket biasanya semakin sempit. Kursi, hotel, atau opsi jadwal bisa berubah lebih cepat sehingga calon jamaah kehilangan ruang untuk membandingkan dengan tenang.',
          'Mendaftar lebih awal tidak selalu berarti harus langsung bayar penuh. Yang lebih penting adalah membuka komunikasi lebih cepat agar Anda tahu posisi seat, timeline, dan langkah persiapan yang realistis.',
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
      'Pertanyaan inti yang membantu calon jamaah mendapat gambaran jelas tentang paket, proses daftar, dan pendampingan.',
    category: 'Konsultasi',
    publishedAt: '2026-06-20',
    readTime: '5 menit baca',
    ctaTitle: 'Siap lanjut tanya yang spesifik?',
    ctaText:
      'Gunakan daftar pertanyaan ini saat membuka detail paket atau ketika menghubungi tim lewat WhatsApp agar konsultasi lebih fokus dan tidak melebar ke hal yang belum perlu.',
    sections: [
      {
        heading: 'Tanyakan hal yang memengaruhi keputusan',
        paragraphs: [
          'Prioritaskan pertanyaan tentang jadwal, durasi, kota keberangkatan, harga, status seat, dan apa saja yang termasuk dalam paket. Ini adalah informasi yang paling cepat memengaruhi keputusan awal.',
          'Dengan urutan ini, konsultasi menjadi lebih efisien dan Anda bisa segera tahu apakah paket tersebut memang masuk kriteria atau tidak.',
        ],
      },
      {
        heading: 'Pastikan alur daftar dipahami',
        paragraphs: [
          'Selain detail paket, tanyakan bagaimana alur setelah mengisi form, siapa yang menghubungi, dan dokumen apa yang biasanya diminta lebih dulu. Banyak calon jamaah merasa lebih tenang setelah mengetahui langkah berikutnya.',
          'Alur yang jelas membantu mengurangi rasa takut salah langkah, terutama untuk user yang baru pertama kali memakai website pendaftaran.',
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
    category: 'Trust',
    publishedAt: '2026-06-15',
    readTime: '3 menit baca',
    ctaTitle: 'Ingin lihat bukti trust dulu?',
    ctaText:
      'Cek halaman legalitas Mazaya Travel untuk verifikasi dasar, lalu lanjutkan ke paket bila sudah merasa cukup yakin dengan fondasi trust-nya.',
    sections: [
      {
        heading: 'Legalitas membantu menyaring risiko awal',
        paragraphs: [
          'Banyak calon jamaah tertarik dulu pada harga atau jadwal. Padahal legalitas adalah lapisan dasar yang membantu menyaring risiko sejak awal sebelum masuk ke keputusan yang lebih detail.',
          'Saat data legal tersedia dan mudah dipahami, keluarga juga punya pegangan yang lebih kuat untuk ikut menilai pilihan travel.',
        ],
      },
      {
        heading: 'Trust lebih kuat jika bukti mudah diakses',
        paragraphs: [
          'Halaman legalitas yang rapi membuat proses verifikasi terasa wajar, bukan seperti mencari informasi tersembunyi. Ini memberi sinyal bahwa travel siap dinilai secara terbuka.',
          'Dalam konteks website, halaman ini juga membantu user discovery yang datang dari Google dan belum mengenal brand sama sekali.',
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
      'Tips memindai halaman detail paket agar calon jamaah cepat menangkap informasi penting tanpa tersesat di terlalu banyak detail.',
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
