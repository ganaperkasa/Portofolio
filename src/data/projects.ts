import { getPublicImages } from './publicImages';

export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  year: string;
  slug: string;
  longDesc: string;
  features: string[];
  techDetails: string[];
  demoUrl?: string;
  githubUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'Sistem Informasi Data Statistik Sampah',
    slug: 'sidas-sweb',
    desc: 'Sistem informasi statistik sampah berbasis web dengan visualisasi data dan pemetaan lokasi TPS menggunakan Leaflet.js.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Leaflet.js', 'Chart.js'],
    year: '2024',
    longDesc: 'Aplikasi ini merupakan sistem informasi yang dirancang untuk menampilkan dan mengelola data statistik sampah di Kota Kediri secara terpusat. Sistem memungkinkan admin untuk menginput dan mengelola data terkait volume sampah, kategori sampah, serta lokasi Tempat Pembuangan Sampah (TPS). Salah satu fitur utama dari aplikasi ini adalah visualisasi peta interaktif menggunakan Leaflet.js yang menampilkan persebaran TPS berdasarkan koordinat geografis. Selain itu, sistem juga menyediakan dashboard statistik dalam bentuk grafik yang memudahkan pengguna dalam memahami tren dan distribusi data sampah. Aplikasi ini bertujuan untuk mendukung pengambilan keputusan berbasis data dalam pengelolaan lingkungan dan kebijakan publik.',
    features: [
      'Manajemen data sampah (volume, kategori, periode).',
      'Manajemen data lokasi TPS (Tempat Pembuangan Sampah).',
      'Visualisasi peta interaktif menggunakan Leaflet.js.',
      'Marker lokasi TPS dengan informasi detail (popup).',
      'Dashboard statistik dengan grafik data sampah.',
      'Filter data berdasarkan periode atau kategori.',
      'Manajemen user/admin.',
      'Sistem monitoring data lingkungan berbasis web.'
    ],
    techDetails: [
      'Backend: Laravel (PHP).',
      'Database: MySQL untuk penyimpanan data sampah dan lokasi TPS.',
      'Frontend: HTML, Bootstrap, dan JavaScript.',
      'Maps & Geospatial: Leaflet.js untuk visualisasi peta interaktif.',
      'Data Visualization: Chart.js untuk grafik statistik.',
      'Architecture: Multi-page application (MPA).',
      'Interactivity: JavaScript untuk manipulasi data dan tampilan.'
    ],
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/saifullohgana/ecommerce-platform',
    images: [
      ...getPublicImages(['Login-TPS.png', 'DB-TPS.png' ])
    ]
  },
  {
    num: '02',
    title: 'Sistem Pelayanan Persuratan Desa',
    slug: 'sipedes',
    desc: 'Sistem pengajuan surat desa berbasis web dengan notifikasi WhatsApp, verifikasi admin, dan pembuatan dokumen otomatis.',
tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'WhatsApp API'],
year: '2024',
longDesc: 'Aplikasi Pengajuan Surat Desa ini merupakan sistem digital yang dirancang untuk meningkatkan efisiensi pelayanan administrasi desa. Warga dapat mengajukan berbagai jenis surat secara online tanpa harus datang ke kantor desa. Sistem ini dilengkapi dengan manajemen data warga, proses verifikasi oleh admin, serta pembuatan dokumen surat secara otomatis. Salah satu fitur unggulannya adalah integrasi notifikasi WhatsApp yang memberikan update status pengajuan secara real-time kepada pengguna, sehingga transparansi dan komunikasi menjadi lebih efektif. Dashboard admin juga menyediakan monitoring data pengajuan dan laporan secara terpusat.',
features: [
  'Pengajuan surat online dengan form dinamis.',
  'Manajemen data biodata warga terintegrasi.',
  'Sistem verifikasi & approval oleh admin.',
  'Generate dokumen surat otomatis berbasis template.',
  'Notifikasi WhatsApp otomatis (status pengajuan, approval, dll).',
  'Manajemen upload dokumen/lampiran.',
  'Dashboard admin untuk monitoring dan laporan.',
  'Autentikasi user dengan role (admin & warga).'
],
techDetails: [
  'Framework: Laravel (PHP) dengan arsitektur MVC.',
  'Database: MySQL menggunakan Eloquent ORM.',
  'Frontend: Blade Template + Bootstrap.',
  'Integrasi API: WhatsApp Gateway API untuk notifikasi otomatis.',
  'Authentication: Laravel Auth (login, register, middleware role).',
  'File Handling: Upload & generate dokumen (PDF/Doc).'
],
    demoUrl: 'https://demo-tasks.example.com',
    githubUrl: 'https://github.com/saifullohgana/task-management-app',
    images: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200',
      'https://images.unsplash.com/photo-1484417894907-623942c8ea29?q=80&w=1200'
    ]
  },
  {
    num: '03',
    title: 'Sistem Informasi Booking Sport Center',
    slug: 'sibospor',
    desc: 'Portfolio interaktif dengan animasi 3D, particle effects, dan transisi halaman yang memukau menggunakan teknologi terkini.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    year: '2023',
    longDesc: 'Portfolio interaktif ini dibangun untuk memamerkan karya digital dengan sentuhan seni tingkat tinggi. Mengintegrasikan teknologi grafis 3D WebGL (melalui Three.js) dan sistem animasi presisi tinggi (menggunakan GSAP), setiap kunjungan memberikan pengalaman visual yang memukau. Website ini sepenuhnya responsif, memastikan kinerja rendering animasi yang tetap halus pada layar ponsel pintar maupun monitor resolusi tinggi.',
    features: [
      'Integrasi Model 3D interaktif yang merespons pergerakan kursor mouse.',
      'Animasi Transisi Halaman (Page transitions) yang halus tanpa kedip.',
      'Sistem Partikel Kustom yang bergerak dinamis sebagai background.',
      'Optimasi Rendering WebGL untuk menjaga frame rate (FPS) tetap tinggi.',
      'Responsif penuh dan dioptimalkan secara mendalam untuk SEO.'
    ],
    techDetails: [
      'Framework: Next.js (App Router) untuk rendering yang cepat dan optimasi SEO.',
      'Graphics: Three.js & React Three Fiber (R3F) untuk pemrosesan objek 3D.',
      'Animation Engine: GSAP (GreenSock) dan Framer Motion untuk micro-interactions.',
      'Styling: Vanilla CSS & Tailwind untuk fleksibilitas struktur layout.'
    ],
    demoUrl: 'https://demo-portfolio.example.com',
    githubUrl: 'https://github.com/saifullohgana/creative-portfolio',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200'
    ]
  },
  {
    num: '04',
    title: 'Sistem Informasi Pemetaan Desa Ancaman Narkoba',
    slug: 'sipedana',
    desc: 'Sistem monitoring dan manajemen pasien penyalahgunaan narkoba berbasis web dengan visualisasi peta sebaran menggunakan Leaflet.js dan notifikasi WhatsApp real-time.',
tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Leaflet.js', 'WhatsApp API', 'Chart.js'],
year: '2024',
longDesc: 'Aplikasi ini merupakan sistem informasi yang dirancang untuk mendukung monitoring dan pengelolaan data pasien penyalahgunaan narkoba secara terpusat. Sistem memungkinkan admin untuk mengelola data pasien, mengatur antrian layanan, serta memantau statistik kasus melalui dashboard interaktif. Salah satu fitur utama adalah visualisasi geografis menggunakan Leaflet.js yang menampilkan persebaran pasien berdasarkan wilayah, sehingga memudahkan analisis data secara spasial. Selain itu, sistem dilengkapi dengan integrasi notifikasi WhatsApp untuk memberikan informasi layanan secara real-time. Aplikasi ini juga menyediakan REST API untuk integrasi data, fitur pengaduan masyarakat, serta sistem sosialisasi informasi untuk meningkatkan awareness publik.',
features: [
  'Manajemen data pasien penyalahgunaan narkoba (CRUD).',
  'Sistem antrian layanan pasien.',
  'Visualisasi peta sebaran pasien berbasis Leaflet.js (geospasial).',
  'Dashboard analytics dengan grafik statistik kasus (Chart.js).',
  'Integrasi notifikasi WhatsApp real-time.',
  'REST API untuk data pasien, klinik, dan dokter.',
  'Sistem pengaduan masyarakat.',
  'Fitur sosialisasi / edukasi publik.',
  'Role-based access (admin, petugas, kepala).'
],
techDetails: [
  'Backend: Laravel (PHP) dengan arsitektur MVC.',
  'Database: MySQL menggunakan Eloquent ORM.',
  'Frontend: Blade Template, Bootstrap, dan JavaScript.',
  'Maps & Geospatial: Leaflet.js untuk visualisasi peta interaktif.',
  'Data Visualization: Chart.js untuk grafik statistik.',
  'Integrasi API: WhatsApp Gateway API (HTTP request).',
  'Authentication: Laravel Auth + middleware role-based.',
  'API: RESTful API untuk integrasi layanan eksternal.'
],
    demoUrl: 'https://demo-dashboard.example.com',
    githubUrl: 'https://github.com/saifullohgana/analytics-dashboard',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200'
    ]
  },
  {
    num: '05',
    title: 'Sistem Peta Kerawanan Pelanggaran Sekolah',
    slug: 'sipekpes',
    desc: 'Dashboard analytics enterprise dengan visualisasi data real-time, laporan otomatis, dan integrasi multi-platform.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    year: '2023',
    longDesc: 'Dashboard analitik bisnis yang tangguh, dirancang untuk mengolah jutaan baris data mentah menjadi wawasan bisnis yang siap pakai secara real-time. Dengan integrasi pustaka D3.js, data divisualisasikan dalam bentuk grafik interaktif yang dapat difilter secara fleksibel. Backend berbasis Python FastAPI menjamin pemrosesan data berkecepatan tinggi dengan latensi yang sangat rendah.',
    features: [
      'Visualisasi Data Dinamis (Line, Bar, Pie, Scatter Plot) menggunakan D3.js.',
      'Integrasi API FastAPI untuk pemrosesan data bertenaga tinggi.',
      'Export Laporan Otomatis (Format PDF & Excel) dengan sekali klik.',
      'Sistem Peran Pengguna (Role-based access control) untuk keamanan data.',
      'Penyaringan Data Cepat (Date-range filtering & multi-dimension analysis).'
    ],
    techDetails: [
      'Frontend: React.js dengan visualisasi kustom D3.js.',
      'Backend: Python dengan FastAPI untuk API berkinerja tinggi.',
      'Database: PostgreSQL untuk penyimpanan data terstruktur.',
      'Data Processing: Pandas & NumPy untuk pemrosesan kalkulasi analitik.'
    ],
    demoUrl: 'https://demo-dashboard.example.com',
    githubUrl: 'https://github.com/saifullohgana/analytics-dashboard',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200'
    ]
  },
  {
    num: '06',
    title: 'Media Pembelajaran OOPedia',
    slug: 'sipekpes',
    desc: 'Dashboard analytics enterprise dengan visualisasi data real-time, laporan otomatis, dan integrasi multi-platform.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    year: '2023',
    longDesc: 'Dashboard analitik bisnis yang tangguh, dirancang untuk mengolah jutaan baris data mentah menjadi wawasan bisnis yang siap pakai secara real-time. Dengan integrasi pustaka D3.js, data divisualisasikan dalam bentuk grafik interaktif yang dapat difilter secara fleksibel. Backend berbasis Python FastAPI menjamin pemrosesan data berkecepatan tinggi dengan latensi yang sangat rendah.',
    features: [
      'Visualisasi Data Dinamis (Line, Bar, Pie, Scatter Plot) menggunakan D3.js.',
      'Integrasi API FastAPI untuk pemrosesan data bertenaga tinggi.',
      'Export Laporan Otomatis (Format PDF & Excel) dengan sekali klik.',
      'Sistem Peran Pengguna (Role-based access control) untuk keamanan data.',
      'Penyaringan Data Cepat (Date-range filtering & multi-dimension analysis).'
    ],
    techDetails: [
      'Frontend: React.js dengan visualisasi kustom D3.js.',
      'Backend: Python dengan FastAPI untuk API berkinerja tinggi.',
      'Database: PostgreSQL untuk penyimpanan data terstruktur.',
      'Data Processing: Pandas & NumPy untuk pemrosesan kalkulasi analitik.'
    ],
    demoUrl: 'https://demo-dashboard.example.com',
    githubUrl: 'https://github.com/saifullohgana/analytics-dashboard',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200'
    ]
  },
  {
    num: '07',
    title: 'Sistem Kasir & Manajemen Servis Motor',
    slug: 'sikasmot',
    desc: 'Sistem kasir dan manajemen layanan servis motor berbasis web dengan fitur booking online dan antarmuka interaktif menggunakan Vue.js.',
tags: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'Bootstrap', 'AJAX'],
year: '2024',
longDesc: 'Aplikasi ini merupakan sistem kasir dan manajemen layanan servis motor yang dirancang untuk membantu operasional bengkel secara digital. Sistem ini memungkinkan admin untuk mengelola data pelanggan, mekanik, produk, serta paket servis, sekaligus mencatat transaksi layanan secara terstruktur. Pengguna umum dapat melakukan booking jadwal servis secara online tanpa harus datang langsung ke lokasi. Dengan integrasi Vue.js pada sisi frontend, aplikasi memiliki interaksi yang lebih dinamis seperti pengelolaan data tanpa reload halaman dan pengalaman pengguna yang lebih responsif. Sistem ini juga dilengkapi dengan manajemen antrian servis dan dashboard monitoring untuk meningkatkan efisiensi operasional bengkel.',
features: [
  'Sistem kasir untuk transaksi servis dan penjualan produk.',
  'Booking / reservasi servis oleh pelanggan secara online.',
  'Manajemen data pelanggan, mekanik, produk, dan layanan.',
  'Sistem antrian servis berbasis reservasi.',
  'Interaksi dinamis menggunakan Vue.js (tanpa reload halaman).',
  'Pencatatan histori transaksi dan layanan.',
  'Dashboard admin untuk monitoring operasional.',
  'REST API untuk pengelolaan data.',
  'Autentikasi dan role-based access.'
],
techDetails: [
  'Backend: Laravel (PHP) dengan arsitektur MVC.',
  'Database: MySQL dengan Eloquent ORM.',
  'Frontend: Vue.js terintegrasi dengan Laravel.',
  'UI: Bootstrap untuk styling antarmuka.',
  'Interactivity: AJAX & Vue reactive components.',
  'API: RESTful API untuk data reservasi, produk, pelanggan, dan mekanik.',
  'Authentication: Laravel Auth + middleware.'
],
    demoUrl: 'https://demo-dashboard.example.com',
    githubUrl: 'https://github.com/saifullohgana/analytics-dashboard',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200'
    ]
  }
];
