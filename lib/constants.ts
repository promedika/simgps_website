// Data acuan tunggal dari Aplikasi SIMGPS.pdf (PT Global Promedika Service)

/** Domain kanonik; di Vercel set NEXT_PUBLIC_SITE_URL kalau domain berbeda. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simgps.id";

export const COMPANY = {
  name: "PT Global Promedika Service",
  short: "GPS",
  website: "https://www.globalpromedika.co.id",
  waNumber: "6281234567890",
  waDefaultMessage: "Halo GPS, saya tertarik dengan SIMGPS dan ingin minta demo.",
  instagram1: "https://instagram.com/globalpromedikaservices",
  instagram2: "https://instagram.com/globalpromedika",
  playStoreUrl: "https://play.google.com/store/apps/details?id=id.co.globalpromedika.simgps",
  playStoreAltUrl: "https://play.google.com/store/apps/dev?id=5123456789012345678",
  address: "Jl. Penjernihan I No.38, RW.8, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210",
  mapsUrl: "https://maps.google.com/?q=Jl.+Penjernihan+I+No.38+Jakarta+Pusat",
  phone: "+62 (021) 555-8899",
  email: "info@globalpromedika.co.id",
  virtualTourUrl: "https://virtual-tour-rs.vercel.app/",
};

export function waLink(message: string = COMPANY.waDefaultMessage): string {
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(message)}`;
}

// href diawali "/" agar tautan tetap benar saat dibuka dari halaman artikel
export const NAV_LINKS = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Fitur", href: "/#fitur" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Virtual Tour", href: "/#virtual-tour" },
  { label: "Classroom", href: "/#classroom" },
  { label: "Artikel", href: "/#artikel" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontak", href: "/#kontak" },
];

export const STATS = [
  { value: "120+", label: "Fasilitas Kesehatan" },
  { value: "25.000+", label: "Aset Terkelola" },
  { value: "98%", label: "Kepatuhan Kalibrasi" },
  { value: "24/7", label: "Dukungan Teknis" },
] as const;

export const PAIN_POINTS = [
  {
    icon: "FileWarning",
    problem: "Data aset tersebar di banyak file Excel",
    solution: "Satu basis data aset yang dipakai bersama seluruh unit.",
  },
  {
    icon: "CalendarClock",
    problem: "Jadwal kalibrasi terlewat sampai alat kedaluwarsa",
    solution: "Pengingat otomatis 3 bulan sebelum masa kalibrasi habis.",
  },
  {
    icon: "Hourglass",
    problem: "Laporan ASPAK disiapkan manual berhari-hari",
    solution: "Rekap siap unggah ke ASPAK, tinggal cetak atau unduh.",
  },
  {
    icon: "PhoneOff",
    problem: "Keluhan alat rusak hilang di grup chat",
    solution: "Tiap keluhan jadi tiket bernomor yang terpantau sampai selesai.",
  },
] as const;

export const FAQS = [
  {
    q: "Apakah SIMGPS bisa langsung terhubung dengan ASPAK?",
    a: "Bisa. Data aset dan status kalibrasi direkap dalam format siap unggah ke ASPAK Kemenkes, sehingga tim tidak perlu menyusun ulang laporan secara manual.",
  },
  {
    q: "Berapa jumlah pengguna yang bisa dibuat?",
    a: "Tidak dibatasi. Satu instansi bisa membuat akun untuk seluruh unit — IPSRS, penunjang medis, logistik, hingga manajemen — tanpa biaya tambahan per pengguna.",
  },
  {
    q: "Berapa lama proses implementasi di rumah sakit kami?",
    a: "Bergantung jumlah aset. Umumnya 2–6 minggu, mencakup survei lapangan, penempelan QR Code, input data, pembuatan akun, dan pelatihan pengguna.",
  },
  {
    q: "Apakah data kami aman dan tetap milik instansi?",
    a: "Ya. Data tersimpan di server dengan akses berjenjang sesuai peran pengguna, dan sepenuhnya tetap menjadi milik instansi Anda.",
  },
  {
    q: "Apakah tersedia aplikasi untuk teknisi di lapangan?",
    a: "Tersedia aplikasi Android di Google Play Store untuk pemindaian QR Code, pengecekan riwayat alat, dan pelaporan keluhan langsung dari lokasi.",
  },
  {
    q: "Bisakah fitur disesuaikan dengan alur kerja kami?",
    a: "Bisa. Modul dan alur persetujuan dapat disesuaikan mengikuti prosedur yang sudah berjalan di fasilitas kesehatan Anda.",
  },
] as const;

export const STEPS = [
  {
    no: "01",
    title: "Pre-Implementasi",
    who: "Teknisi",
    points: [
      "Survei & pekerjaan lapangan di fasilitas kesehatan",
      "Penempelan Stiker & QR Code pada setiap alat",
      "Membuat rekapan data aset lengkap",
      "Input data aset ke sistem SIMGPS",
    ],
  },
  {
    no: "02",
    title: "Implementasi",
    who: "Tim IT",
    points: [
      "Pembuatan akun untuk seluruh pengguna",
      "QC (Quality Control) sistem sebelum go-live",
      "Upload data ke ASPAK secara terintegrasi",
    ],
  },
  {
    no: "03",
    title: "Penggunaan",
    who: "Tim IT & Pengguna",
    points: [
      "Pembagian akun ke seluruh pengguna terkait",
      "Training penggunaan sistem untuk tim faskes",
      "SIMGPS siap dipakai sehari-hari",
    ],
  },
] as const;

export const FEATURES = [
  {
    icon: "Boxes",
    title: "Inventori Aset",
    desc: "Catat & kelola semua aset faskes dalam satu sistem — dari alat medis sampai barang habis pakai.",
    points: [
      "Daftar Alat Medis (monitor pasien, ventilator, dll)",
      "Daftar Alat Non-Medis (AC, komputer, dll)",
      "Sparepart & Disposable (suku cadang, barang habis pakai)",
      "Tools & Meter (alat ukur & perlengkapan teknisi)",
    ],
  },
  {
    icon: "ShieldCheck",
    title: "Kalibrasi",
    desc: "Status kalibrasi setiap alat terupdate otomatis, tidak ada lagi alat yang lolos jadwal.",
    points: [
      "Terkalibrasi — alat sudah dikalibrasi & tercatat",
      "Wajib Kalibrasi — 3 bulan sebelum expired, sistem beri tanda",
      "Expired — alat yang tanggal kalibrasinya sudah lewat",
      "Belum Update — status kalibrasi belum diperbarui",
    ],
  },
  {
    icon: "Wrench",
    title: "Maintenance",
    desc: "Rawat alat secara terjadwal, bukan menunggu rusak.",
    points: [
      "Penjadwalan Maintenance dengan interval yang bisa disesuaikan",
      "Laporan Maintenance & lembar kerja bisa diunduh PDF",
      "Notifikasi otomatis saat maintenance sudah waktunya",
    ],
  },
  {
    icon: "Ticket",
    title: "Complain & Repair",
    desc: "Setiap keluhan alat langsung jadi tiket yang bisa dipantau sampai selesai.",
    points: [
      "User lapor masalah via SIMGPS, sistem otomatis buat tiket",
      "Seluruh proses perbaikan terekam & bisa dipantau",
      "Tracking status: Open → In Progress → Done",
    ],
  },
  {
    icon: "ArrowRightLeft",
    title: "Mutasi Alat",
    desc: "Tahu persis lokasi tiap alat, kapan pun dipindahkan.",
    points: [
      "Catat perpindahan alat antar ruangan, lantai, atau gedung",
      "Tracking lokasi terbaru dari setiap alat",
    ],
  },
  {
    icon: "ClipboardCheck",
    title: "Stock Opname",
    desc: "Audit aset jadi cepat, data selalu sesuai kondisi lapangan.",
    points: [
      "Pengecekan jumlah alat di fasilitas kesehatan",
      "Pastikan data inventori sesuai kondisi di lapangan",
    ],
  },
  {
    icon: "QrCode",
    title: "Scanner & Booklet",
    desc: "Cukup scan, semua info alat langsung tampil.",
    points: [
      "Scan QR Code untuk akses cepat jadwal kalibrasi & status maintenance",
      "List Kalibrasi Booklet — cetak atau simpan dalam format booklet",
    ],
  },
] as const;

export const BENEFITS = [
  { no: "01", title: "Fitur & Layanan Lebih Lengkap", desc: "Satu sistem untuk inventori, kalibrasi, maintenance, hingga tiket perbaikan." },
  { no: "02", title: "Sistem Teruji & Stabil", desc: "Sudah digunakan dan terbukti stabil di fasilitas kesehatan." },
  { no: "03", title: "Custom Request Sesuai Kebutuhan", desc: "Fitur bisa disesuaikan dengan kebutuhan spesifik faskes Anda." },
  { no: "04", title: "Unlimited User", desc: "Tidak ada batasan jumlah pengguna dalam satu instansi." },
  { no: "05", title: "Masa Pakai Sistem Panjang", desc: "Investasi jangka panjang, bukan solusi sementara." },
  { no: "06", title: "Disesuaikan Kebutuhan Lapangan", desc: "Implementasi fleksibel mengikuti kondisi nyata di lapangan." },
] as const;

export const CLASSROOM_MODULES = [
  "Inventori Asset",
  "Kalibrasi",
  "Maintenance",
  "Inspection",
  "Complain & Repair",
  "Mutasi Alat",
  "Stock Opname",
  "Scanner & Booklet",
] as const;

// ponytail: foto ilustrasi Pexels (bebas pakai); ganti `img` ke /images/gallery/*.webp saat screenshot asli tersedia
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const GALLERY_ITEMS = [
  {
    title: "Pendataan Alat Ruang Tindakan",
    category: "Inventori Aset",
    desc: "Seluruh alat di kamar operasi tercatat lengkap dengan merek, tahun, dan lokasi penempatan.",
    img: px(247786),
  },
  {
    title: "Pemantauan Alat Unit Gawat Darurat",
    category: "Monitoring",
    desc: "Status kesiapan alat prioritas terpantau harian oleh penanggung jawab ruangan.",
    img: px(263402),
  },
  {
    title: "Riwayat Kalibrasi Alat Penunjang",
    category: "Kalibrasi",
    desc: "Jadwal dan sertifikat kalibrasi tersimpan rapi per alat, lengkap dengan pengingat masa berlaku.",
    img: px(305566),
  },
  {
    title: "Verifikasi Alat Laboratorium",
    category: "Laboratorium",
    desc: "Pemeriksaan berkala alat lab terdokumentasi beserta hasil dan petugas pelaksananya.",
    img: px(356040),
  },
  {
    title: "Tiket Perbaikan oleh Teknisi",
    category: "Maintenance",
    desc: "Keluhan alat rusak masuk sebagai tiket bernomor dan terpantau sampai selesai dikerjakan.",
    img: px(4021775),
  },
  {
    title: "Stock Opname Bersama Tim Ruangan",
    category: "Stock Opname",
    desc: "Pemeriksaan fisik aset memakai pemindaian QR Code, hasilnya langsung terekap.",
    img: px(6129507),
  },
] as const;

export const BANNERS = [
  {
    tag: "Inventori Aset",
    title: "Seluruh alat medis tercatat dalam satu basis data",
    desc: "Merek, tahun pengadaan, lokasi, sampai riwayat perbaikan tersimpan rapi dan bisa dibuka semua unit.",
    cta: "Lihat fitur lengkap",
    href: "#fitur",
    img: px(4386466),
  },
  {
    tag: "Kalibrasi Terjadwal",
    title: "Pengingat kalibrasi jauh sebelum masa berlaku habis",
    desc: "Notifikasi otomatis tiga bulan sebelum jatuh tempo, lengkap dengan arsip sertifikat per alat.",
    cta: "Pelajari cara kerjanya",
    href: "#cara-kerja",
    img: px(3825529),
  },
  {
    tag: "Laporan ASPAK",
    title: "Rekap siap unggah ke ASPAK tanpa menyusun ulang",
    desc: "Data aset dan status kalibrasi langsung terformat sesuai kebutuhan pelaporan Kemenkes.",
    cta: "Minta demo gratis",
    href: "#kontak",
    img: px(590022),
  },
] as const;

/** Artikel edukasi; sumber tunggal untuk section blog dan halaman /blog/[slug]. */
export const POSTS = [
  {
    slug: "checklist-kesiapan-aspak",
    title: "Checklist kesiapan data sebelum pelaporan ASPAK",
    excerpt:
      "Tujuh hal yang perlu dirapikan tim IPSRS sebelum periode pelaporan ASPAK dibuka, mulai dari kelengkapan data alat sampai arsip sertifikat kalibrasi.",
    category: "Regulasi",
    date: "2026-02-18",
    readMinutes: 6,
    img: px(6285394),
    body: [
      "Pelaporan ASPAK sering terasa berat bukan karena formulirnya rumit, melainkan karena data aset tersebar di banyak file dan pemiliknya berbeda-beda. Merapikan sumber data sejak awal periode membuat pengisian jauh lebih cepat.",
      "Mulai dari kelengkapan identitas alat: nama, merek, tipe, nomor seri, tahun pengadaan, dan lokasi penempatan terkini. Satu alat yang tidak jelas lokasinya biasanya memicu penelusuran manual berjam-jam saat verifikasi.",
      "Berikutnya status kalibrasi. Pastikan setiap alat wajib kalibrasi punya tanggal pelaksanaan terakhir, masa berlaku, dan salinan sertifikat yang bisa dibuka kembali. Alat dengan sertifikat kedaluwarsa sebaiknya dijadwalkan lebih dulu sebelum pelaporan.",
      "Terakhir, samakan penamaan ruangan dengan struktur yang dipakai instansi. Penamaan yang konsisten membuat rekap per unit langsung bisa dipakai tanpa penyuntingan tambahan.",
    ],
  },
  {
    slug: "mengelola-jadwal-kalibrasi",
    title: "Cara menyusun jadwal kalibrasi yang tidak pernah terlewat",
    excerpt:
      "Menentukan prioritas alat, menetapkan siklus kalibrasi, dan memakai pengingat otomatis agar tidak ada alat yang dipakai dalam kondisi kedaluwarsa kalibrasi.",
    category: "Kalibrasi",
    date: "2026-01-27",
    readMinutes: 5,
    img: px(4021779),
    body: [
      "Jadwal kalibrasi paling sering meleset karena disusun sekali di awal tahun lalu tidak pernah ditinjau lagi. Padahal alat berpindah ruangan, ada pengadaan baru, dan sebagian alat masuk masa perbaikan.",
      "Langkah pertama adalah memisahkan alat berdasarkan tingkat risiko. Alat penunjang hidup dan alat diagnostik utama perlu mendapat prioritas jadwal serta cadangan waktu lebih panjang bila hasil kalibrasi memerlukan tindak lanjut.",
      "Kedua, tetapkan siklus yang jelas per kategori alat dan catat tanggal jatuh temponya pada sistem yang sama dengan data aset. Menyimpan jadwal di berkas terpisah membuat pembaruan mudah tertinggal.",
      "Ketiga, aktifkan pengingat jauh hari. Rentang tiga bulan umumnya cukup untuk mengurus anggaran, memilih penyedia jasa kalibrasi, dan mengatur agar pelayanan tidak terganggu saat alat diperiksa.",
    ],
  },
  {
    slug: "qr-code-pelacakan-aset",
    title: "Manfaat QR Code untuk pelacakan aset di fasilitas kesehatan",
    excerpt:
      "Satu stiker kecil pada alat memangkas waktu stock opname dan memudahkan teknisi melihat riwayat perbaikan langsung dari ponsel.",
    category: "Operasional",
    date: "2025-12-09",
    readMinutes: 4,
    img: px(4483775),
    body: [
      "Stock opname aset medis biasanya memakan waktu karena petugas harus mencocokkan daftar cetak dengan kondisi fisik alat satu per satu. QR Code memangkas proses itu menjadi sekadar pemindaian.",
      "Setiap alat yang sudah ditempeli QR Code bisa langsung menampilkan identitas, lokasi seharusnya, jadwal kalibrasi, dan riwayat perbaikan ketika dipindai lewat ponsel petugas.",
      "Bagi teknisi, akses cepat ke riwayat sangat membantu saat menangani keluhan. Informasi perbaikan sebelumnya mencegah penanganan berulang pada masalah yang sama.",
      "Agar bertahan lama, gunakan stiker berbahan tahan cairan pembersih dan tempelkan pada permukaan yang tidak sering tersentuh, namun tetap mudah dijangkau saat pemindaian.",
    ],
  },
  {
    slug: "menyusun-program-maintenance-preventif",
    title: "Menyusun program maintenance preventif alat medis",
    excerpt:
      "Menentukan interval perawatan, membagi beban kerja teknisi, dan mencatat hasil pekerjaan agar alat tetap laik pakai sepanjang tahun.",
    category: "Maintenance",
    date: "2025-11-20",
    readMinutes: 5,
    img: px(4173251),
    body: [
      "Perawatan preventif sering kalah prioritas dibanding perbaikan darurat. Padahal beban perbaikan justru menurun ketika jadwal perawatan rutin benar-benar berjalan.",
      "Mulailah dari manual pabrikan. Interval yang disarankan produsen menjadi dasar, lalu sesuaikan dengan intensitas pemakaian alat di unit masing-masing.",
      "Bagi pekerjaan per minggu agar beban teknisi merata, bukan menumpuk di akhir bulan. Setiap pekerjaan yang selesai dicatat lengkap dengan temuan dan komponen yang diganti.",
      "Catatan inilah yang nantinya menjadi bahan evaluasi: alat mana yang biaya perawatannya sudah melampaui kewajaran dan layak diusulkan untuk peremajaan.",
    ],
  },
  {
    slug: "alur-tiket-perbaikan-alat",
    title: "Alur tiket perbaikan alat agar keluhan tidak menguap",
    excerpt:
      "Dari laporan perawat ruangan sampai alat kembali dipakai, setiap tahap punya penanggung jawab dan jejak waktu yang jelas.",
    category: "Operasional",
    date: "2025-11-04",
    readMinutes: 4,
    img: px(4021769),
    body: [
      "Keluhan alat rusak yang disampaikan lisan mudah terlupakan. Begitu dicatat sebagai tiket bernomor, keluhan punya status, penanggung jawab, dan waktu penyelesaian.",
      "Alur minimalnya empat tahap: laporan masuk, verifikasi teknisi, pengerjaan, lalu serah terima ke ruangan. Setiap perpindahan tahap tercatat otomatis.",
      "Tiket yang tertahan di satu tahap terlalu lama akan terlihat jelas pada rekap. Dari situ kepala unit bisa menilai apakah hambatannya ketersediaan suku cadang atau jumlah teknisi.",
      "Rekap tiket bulanan juga menjadi bahan rapat yang objektif karena berbasis angka, bukan ingatan masing-masing pihak.",
    ],
  },
  {
    slug: "mutasi-alat-antar-ruangan",
    title: "Mencatat mutasi alat antar ruangan tanpa data ganda",
    excerpt:
      "Alat yang berpindah tanpa pencatatan membuat stock opname berantakan. Begini cara menjaga lokasi aset tetap akurat.",
    category: "Inventori",
    date: "2025-10-16",
    readMinutes: 4,
    img: px(3993239),
    body: [
      "Perpindahan alat antar ruangan adalah hal biasa, terutama saat ada renovasi atau lonjakan pasien. Masalah muncul ketika perpindahan itu tidak pernah dicatat.",
      "Tetapkan satu pintu pencatatan: mutasi hanya sah bila dicatat di sistem dengan persetujuan ruangan asal dan ruangan tujuan.",
      "Dengan begitu, lokasi alat pada basis data selalu mengikuti kondisi nyata, dan stock opname tidak lagi menghasilkan selisih yang harus ditelusuri manual.",
      "Riwayat mutasi juga berguna saat menelusuri penyebab kerusakan, karena terlihat alat tersebut sempat dipakai di unit mana saja.",
    ],
  },
  {
    slug: "membaca-sertifikat-kalibrasi",
    title: "Membaca sertifikat kalibrasi: bagian yang sering terlewat",
    excerpt:
      "Nilai koreksi, ketidakpastian pengukuran, dan masa berlaku punya arti berbeda. Memahaminya mencegah alat dipakai di luar batas aman.",
    category: "Kalibrasi",
    date: "2025-09-29",
    readMinutes: 6,
    img: px(1250655),
    body: [
      "Sertifikat kalibrasi kerap hanya diarsipkan tanpa dibaca isinya. Padahal bagian terpenting justru ada pada tabel hasil pengukuran, bukan pada halaman depan.",
      "Perhatikan nilai koreksi pada tiap titik ukur. Bila penyimpangan mendekati batas toleransi, alat sebaiknya masuk pemantauan khusus meski sertifikatnya masih berlaku.",
      "Nilai ketidakpastian pengukuran menunjukkan rentang wajar hasil pembacaan. Angka ini penting bagi alat diagnostik yang hasilnya menjadi dasar keputusan klinis.",
      "Terakhir, pastikan lembaga kalibrasi memiliki ruang lingkup akreditasi yang mencakup jenis alat tersebut. Sertifikat di luar ruang lingkup berpotensi dipermasalahkan saat penilaian akreditasi.",
    ],
  },
  {
    slug: "persiapan-survei-akreditasi-alat-medis",
    title: "Persiapan survei akreditasi dari sisi peralatan medis",
    excerpt:
      "Dokumen pemeliharaan, bukti kalibrasi, dan kesesuaian data lapangan adalah tiga hal yang paling sering ditanyakan surveior.",
    category: "Akreditasi",
    date: "2025-09-08",
    readMinutes: 6,
    img: px(4226119),
    body: [
      "Menjelang survei akreditasi, unit pemeliharaan sarana biasanya diminta menyiapkan bukti pengelolaan alat medis dalam waktu singkat.",
      "Tiga berkas yang paling sering diminta: daftar inventaris alat beserta lokasinya, jadwal dan bukti pemeliharaan, serta sertifikat kalibrasi yang masih berlaku.",
      "Surveior umumnya melakukan uji petik: mengambil satu alat di ruangan lalu meminta dokumennya. Karena itu data pada sistem harus sama persis dengan kondisi di lapangan.",
      "Menjaga data tetap mutakhir sepanjang tahun jauh lebih ringan dibanding membenahi seluruh berkas beberapa minggu sebelum survei.",
    ],
  },
  {
    slug: "stock-opname-aset-medis-efisien",
    title: "Menjalankan stock opname aset medis dengan lebih ringkas",
    excerpt:
      "Pembagian area, pemindaian berbasis ponsel, dan penanganan selisih yang terstruktur memangkas durasi opname secara signifikan.",
    category: "Stock Opname",
    date: "2025-08-21",
    readMinutes: 5,
    img: px(5726794),
    body: [
      "Stock opname yang dikerjakan serentak tanpa pembagian area biasanya berakhir dengan data ganda dan alat yang terlewat sama sekali.",
      "Bagi gedung menjadi area kecil dengan satu penanggung jawab per area. Setiap petugas cukup memindai QR Code alat yang ditemukan di areanya.",
      "Selisih ditangani pada hari yang sama: alat tidak ditemukan ditelusuri lewat riwayat mutasi, sedangkan alat tanpa data langsung didaftarkan sebagai temuan baru.",
      "Hasil akhirnya bukan sekadar angka kecocokan, melainkan basis data lokasi yang kembali akurat untuk dipakai sepanjang tahun berjalan.",
    ],
  },
  {
    slug: "melatih-tim-ipsrs-menggunakan-sistem",
    title: "Melatih tim IPSRS agar sistem benar-benar dipakai harian",
    excerpt:
      "Pelatihan singkat berbasis peran, panduan ringkas, dan pendampingan minggu pertama menentukan keberhasilan implementasi.",
    category: "Implementasi",
    date: "2025-08-05",
    readMinutes: 5,
    img: px(7089020),
    body: [
      "Sistem inventori paling lengkap sekalipun tidak berguna bila petugas kembali mencatat di buku tulis setelah pelatihan selesai.",
      "Latih berdasarkan peran, bukan berdasarkan menu. Petugas ruangan cukup memahami cara melapor keluhan dan memindai alat, sedangkan teknisi mendalami alur tiket dan pencatatan pekerjaan.",
      "Sediakan panduan satu halaman yang bisa ditempel di ruang kerja. Panduan panjang jarang dibuka, sedangkan lembar ringkas lebih sering dipakai.",
      "Pendampingan pada minggu pertama sangat menentukan. Pada masa itu kebiasaan baru terbentuk dan kendala kecil bisa segera diselesaikan.",
    ],
  },
] as const;

/** Jumlah artikel per halaman pada daftar artikel. */
export const POSTS_PER_PAGE = 3;

/** Tanggal ISO → format Indonesia, dipakai daftar dan detail artikel. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Topik siap-pilih untuk widget chat; jawaban statis, tanpa panggilan jaringan. */
export const CHAT_TOPICS = [
  {
    q: "Apa saja fitur utama SIMGPS?",
    a: "SIMGPS mencakup inventori aset, kalibrasi, maintenance, inspeksi, tiket perbaikan, mutasi alat, stock opname, sampai cetak booklet kalibrasi — semuanya dalam satu sistem.",
    href: "#fitur",
    hrefLabel: "Lihat daftar fitur",
  },
  {
    q: "Bagaimana cara implementasinya?",
    a: "Empat langkah: survei aset di lapangan, penempelan QR Code, input data dan pembuatan akun, lalu pelatihan pengguna. Umumnya selesai 2–6 minggu tergantung jumlah aset.",
    href: "#cara-kerja",
    hrefLabel: "Lihat alur implementasi",
  },
  {
    q: "Apakah laporan ASPAK didukung?",
    a: "Didukung. Data aset dan status kalibrasi direkap dalam format siap unggah ke ASPAK Kemenkes, jadi tim tidak menyusun ulang laporan secara manual.",
    href: "#faq",
    hrefLabel: "Baca FAQ lainnya",
  },
  {
    q: "Berapa biaya dan jumlah penggunanya?",
    a: "Jumlah pengguna tidak dibatasi dalam satu instansi. Biaya disesuaikan jumlah aset dan modul yang dipakai — tim kami siap menyiapkan penawaran khusus untuk faskes Anda.",
    wa: "Halo GPS, saya ingin meminta penawaran harga SIMGPS untuk instansi kami.",
  },
  {
    q: "Saya ingin dijadwalkan demo",
    a: "Siap. Demo berlangsung sekitar 30 menit, gratis, dan memakai contoh data aset instansi Anda. Silakan hubungi tim kami lewat WhatsApp untuk memilih jadwal.",
    wa: "Halo GPS, saya ingin menjadwalkan demo gratis SIMGPS untuk instansi saya.",
  },
] as const;

export const CLIENTS = [
  { name: "RSUD Dr. Soetomo", type: "Rumah Sakit Umum Daerah" },
  { name: "RS Cipto Mangunkusumo", type: "Rumah Sakit Pusat Nasional" },
  { name: "Klinik Utama Medika Sehat", type: "Klinik Utama" },
  { name: "RS Permata Hati", type: "Rumah Sakit Swasta" },
  { name: "Puskesmas Kecamatan Menteng", type: "Puskesmas Layanan Primer" },
  { name: "RS Bhayangkara Polri", type: "Rumah Sakit Khusus" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "SIMGPS sangat membantu rumah sakit kami dalam memantau jadwal kalibrasi alat medis agar tidak ada yang terlewat. Integrasi ASPAK juga sangat mulus.",
    author: "dr. H. Hendra Wijaya, MARS",
    role: "Direktur Penunjang Medis",
    hospital: "RSUD Kota Metropolitan",
  },
  {
    quote: "Fitur ticketing perbaikan alat dan scan QR code di aplikasi Playstore membuat teknisi kami bekerja jauh lebih cepat dan terstruktur.",
    author: "Ir. Budi Santoso, MT",
    role: "Kepala Instalasi IPSRS",
    hospital: "RS Sentra Medika",
  },
  {
    quote: "Pelayanan dari PT Global Promedika Service sangat responsif. Kustomisasi modul sesuai kebutuhan faskes kami dipenuhi dengan sangat baik.",
    author: "Siti Rahmawati, S.Kep., Ners",
    role: "Koordinator Aset & Logistik",
    hospital: "Klinik Utama Sejahtera",
  },
] as const;
