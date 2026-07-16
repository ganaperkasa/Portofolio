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
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    desc: 'Platform e-commerce full-featured dengan manajemen inventory real-time, payment gateway terintegrasi, dan dashboard analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    year: '2024',
    longDesc: 'E-Commerce Platform ini adalah solusi penjualan online skala enterprise yang dirancang untuk performa tinggi, keamanan maksimal, dan skalabilitas. Sistem ini dilengkapi dengan sinkronisasi inventaris secara langsung (real-time inventory tracking), manajemen promosi dan diskon dinamis, serta integrasi multi-gateway pembayaran otomatis (seperti Midtrans/Stripe). Halaman admin dilengkapi visualisasi grafik penjualan lengkap untuk memantau performa bisnis harian secara intuitif.',
    features: [
      'Manajemen Inventaris & Stok Real-Time otomatis.',
      'Sistem Keranjang Belanja & Checkout multi-step yang aman.',
      'Integrasi Payment Gateway otomatis dengan notifikasi webhook.',
      'Dashboard Analytics Admin dengan metrik penjualan, produk terlaris, dan data demografis pembeli.',
      'Sistem Keamanan JWT, hashing password dengan bcrypt, dan pencegahan eksploitasi web standar.'
    ],
    techDetails: [
      'Frontend: React.js, Tailwind CSS untuk antarmuka yang modern dan responsif.',
      'State Management: Redux Toolkit untuk mengelola state global aplikasi secara efisien.',
      'Backend: Node.js dengan Express.js untuk RESTful API yang cepat dan handal.',
      'Database: MongoDB dengan Mongoose untuk penyimpanan data dokumen fleksibel.',
      'Autentikasi: JSON Web Token (JWT) untuk sesi login pengguna yang aman.'
    ],
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/saifullohgana/ecommerce-platform',
    images: [
      ...getPublicImages(['LP-Peta.png','DB-Peta.png', 'Login-Peta.png' ])
    ]
  },
  {
    num: '02',
    title: 'Task Management App',
    slug: 'task-management-app',
    desc: 'Aplikasi manajemen tugas kolaboratif dengan real-time collaboration, drag-and-drop interface, dan notifikasi pintar.',
    tags: ['Vue.js', 'Firebase', 'Socket.io'],
    year: '2024',
    longDesc: 'Sebuah aplikasi manajemen proyek dan tugas yang dirancang khusus untuk meningkatkan produktivitas tim jarak jauh. Dengan antarmuka Kanban yang interaktif menggunakan metode drag-and-drop, tim dapat dengan mudah melacak alur kerja dari persiapan hingga selesai. Fitur real-time kolaborasi memungkinkan pengguna melihat pembaruan tugas dari rekan kerja secara langsung tanpa perlu menyegarkan halaman. Sistem notifikasi pintar terintegrasi akan mengingatkan tenggat waktu penting.',
    features: [
      'Papan Kerja Kanban interaktif dengan fungsi Drag-and-Drop.',
      'Kolaborasi Real-Time langsung (sinkronisasi antar anggota tim).',
      'Sistem Komentar, lampiran file, dan riwayat aktivitas tugas.',
      'Notifikasi Push & Email pengingat tenggat waktu (due date reminders).',
      'Filter tugas canggih berdasarkan kategori, prioritas, dan penanggung jawab.'
    ],
    techDetails: [
      'Frontend: Vue.js dengan Tailwind CSS untuk kecepatan render dan estetika tinggi.',
      'Backend & Realtime: Node.js dengan Socket.io untuk transmisi data instan.',
      'Database & Storage: Firebase Firestore untuk database real-time dan Firebase Storage untuk dokumen.',
      'Build Tool: Vite untuk optimasi performa kompilasi frontend.'
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
    title: 'Creative Portfolio',
    slug: 'creative-portfolio',
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
    title: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
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
  }
];
