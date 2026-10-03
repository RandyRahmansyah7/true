import {
  NavLink,
  WhyUsItem,
  ServiceItem,
  PortfolioItem,
  PricingPlan,
  FaqItem,
} from "@/types/landing";

export const WHATSAPP_CONFIG = {
  phone: "6283188181536",
  defaultText: "Halo truegrid, saya ingin konsultasi layanan",
  createWhatsAppUrl: (text?: string) => {
    const message = text || WHATSAPP_CONFIG.defaultText;
    return `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(message)}`;
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Mengapa kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#use-cases" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const CLIENT_LOGOS = [
  { name: "Next.js", className: "lowercase tracking-tighter" },
  { name: "Tailwind CSS", className: "italic font-serif" },
  { name: "React", className: "tracking-tight" },
  { name: "TypeScript", className: "tracking-tight" },
  { name: "Figma", className: "font-black tracking-widest uppercase" },
  { name: "Badge Speed", className: "tracking-tight" },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    number: "01",
    title: "Fokus pada Masalah Bisnis",
    description:
      "Kami mulai dari kebutuhan bisnis Anda, lalu menentukan solusi digital yang paling tepat—bukan sekadar menjual teknologi.",
    isDark: false,
  },
  {
    number: "02",
    title: "Dibuat untuk Hasil yang Jelas",
    description:
      "Landing page, website, atau software dirancang dengan tujuan yang jelas: mendapatkan leads, meningkatkan kepercayaan, atau membuat operasional lebih efisien.",
    isDark: true,
  },
  {
    number: "03",
    title: "Transparan & Minim Risiko",
    description:
      "Lihat demo dan test link sebelum memutuskan. Setelah berjalan, tersedia garansi teknis 3 bulan untuk memastikan implementasi tetap berjalan sebagaimana mestinya.",
    isDark: false,
  },
];

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    titleLine1: "Search Engine",
    titleLine2: "Optimization (SEO)",
    description:
      "Dominasi halaman pertama Google untuk kata kunci potensial industri Anda secara organik.",
    href: "#quote",
    theme: "grey",
  },
  {
    titleLine1: "Pay-Per-Click",
    titleLine2: "Advertising (PPC)",
    description:
      "Dapatkan calon pembeli berpotensi tinggi secara cepat melalui kampanye terarah Google & Meta Ads.",
    href: "#quote",
    theme: "dark",
  },
  {
    titleLine1: "Social Media",
    titleLine2: "Marketing",
    description:
      "Kelola Instagram, TikTok, dan LinkedIn untuk membangun komunitas pelanggan yang loyal.",
    href: "#quote",
    theme: "dark",
  },
  {
    titleLine1: "Email & WhatsApp",
    titleLine2: "Automation",
    description:
      "Otomatisasi pesan penawaran dan repeat order untuk meningkatkan retensi konsumen.",
    href: "#quote",
    theme: "grey",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    description:
      "Untuk bisnis lokal, kami membantu mengarahkan traffic iklan ke landing page yang lebih terstruktur sehingga calon customer lebih mudah memahami produk dan menghubungi bisnis.",
    href: "#quote",
  },
  {
    description:
      "Untuk bisnis yang ingin ditemukan di Google, kami membangun website dan struktur halaman yang siap dioptimalkan untuk SEO dan pencarian yang relevan.",
    href: "#quote",
  },
  {
    description:
      "Untuk bisnis dengan proses yang masih manual, kami mengembangkan software yang membantu menyederhanakan pekerjaan dan membuat operasional lebih efisien.",
    href: "#quote",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Landing Page",
    badge: "Campaign / Ads",
    badgeType: "basic",
    targetAudience: "Campaign, Ads, lead generation",
    description:
      "Solusi cepat & efisien untuk promosi, konversi iklan, dan mengumpulkan prospek WhatsApp berkualitas tinggi.",
    price: "Rp 1,5 jt",
    pricePrefix: "Mulai dari",
    period: "Sekali bayar",
    paymentHighlight: "Bukan langganan bulanan",
    features: [
      "1 Landing Page interaktif",
      "Desain responsive mobile & desktop",
      "Struktur copy konversi terarah",
      "Tombol & Integrasi CTA WhatsApp",
      "Form kontak prospek terhubung WA",
      "SEO on-page dasar & optimasi performa",
      "Setup hosting & deployment kilat",
      "Akses demo & live test link",
      "Garansi teknis 3 bulan",
      "1× perubahan teks per bulan",
    ],
    note: "*Tidak termasuk biaya domain & layanan pihak ketiga jika diperlukan.",
    ctaText: "Pilih Landing Page",
    ctaHref: WHATSAPP_CONFIG.createWhatsAppUrl(
      "Halo Truegrid, saya ingin memesan paket *Landing Page (Rp1,5 jt)* sekali bayar.\n\nSpesifikasi yang saya pilih:\n- 1 Landing page responsive (mobile & desktop)\n- Struktur copy konversi & CTA WhatsApp\n- Form kontak prospek langsung ke WA\n- SEO dasar & optimasi kecepatan tinggi\n- Setup hosting & deployment\n- Garansi teknis 3 bulan & 1x ganti teks per bulan\n\nMohon info langkah selanjutnya untuk memulai project saya. Terima kasih!"
    ),
    theme: "grey",
  },
  {
    name: "Website",
    badge: "Paling Populer",
    badgeType: "popular",
    targetAudience: "Profil bisnis, layanan, portfolio",
    description:
      "Pondasi kredibilitas digital lengkap untuk menampilkan profil, katalog layanan, dan portofolio profesional bisnis Anda.",
    price: "Rp 3,5 jt",
    pricePrefix: "Mulai dari",
    period: "Sekali bayar",
    paymentHighlight: "Bukan langganan bulanan",
    features: [
      "Hingga 5 halaman (Home, Tentang, Layanan/Produk, Portfolio, Kontak)",
      "Desain responsive & navigasi modern",
      "Integrasi WhatsApp langsung",
      "SEO on-page dasar",
      "Integrasi Google Maps lokasi bisnis",
      "Optimasi performa & kecepatan tinggi",
      "Akses demo & live test link",
      "Garansi teknis 3 bulan",
      "1× perubahan teks per bulan",
    ],
    note: "*Bisa penambahan halaman dengan biaya tambahan terjangkau per halaman.",
    ctaText: "Pilih Website",
    ctaHref: WHATSAPP_CONFIG.createWhatsAppUrl(
      "Halo Truegrid, saya tertarik dengan paket *Website (Rp3,5 jt)* sekali bayar.\n\nSpesifikasi yang saya pilih:\n- Hingga 5 halaman (Home, Tentang, Layanan/Produk, Portfolio, Kontak)\n- Desain responsive modern & cepat\n- Integrasi WhatsApp langsung & Google Maps\n- SEO dasar & optimasi performa tinggi\n- Akses demo & live test link\n- Garansi teknis 3 bulan & 1x ganti teks per bulan\n\nMohon info jadwal pengerjaan dan data yang perlu saya siapkan. Terima kasih!"
    ),
    theme: "lime",
    isPopular: true,
  },
  {
    name: "Software",
    badge: "Custom Scope",
    badgeType: "custom",
    targetAudience: "Automasi & sistem bisnis custom",
    description:
      "Aplikasi web & automasi sistem kerja custom untuk menyederhanakan operasional dan efisiensi bisnis.",
    price: "Mulai Rp 8 jt",
    period: "Scope transparan",
    paymentHighlight: "Scope + demo/prototype di awal",
    features: [
      "Scope kerja jelas + demo/prototype sebelum development",
      "Desain database & dashboard manajemen bisnis",
      "Manajemen user, role & hak akses",
      "Integrasi API, payment / WhatsApp gateway",
      "Sistem automasi alur kerja operasional",
      "Deployment server & pengujian menyeluruh",
      "Garansi teknis & opsi maintenance terukur",
    ],
    note: "*Harga final berdasarkan jumlah fitur, user, database & integrasi yang dibutuhkan.",
    ctaText: "Konsultasi Software",
    ctaHref: WHATSAPP_CONFIG.createWhatsAppUrl(
      "Halo Truegrid, saya ingin konsultasi kebutuhan *Software Kustom (Mulai Rp8 jt)*.\n\nKebutuhan sistem bisnis saya:\n- Scope kerja jelas + demo/prototype sebelum development\n- Desain database & dashboard manajemen bisnis\n- Manajemen user, role & hak akses\n- Integrasi API / Payment / WhatsApp gateway\n- Sistem automasi alur kerja operasional\n\nMohon info waktu untuk sesi diskusi scope dan estimasi kebutuhan fitur saya. Terima kasih!"
    ),
    theme: "dark",
  },
];


export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Berapa lama proses pembuatan website atau landing page?",
    answer:
      "Landing page umumnya dapat diselesaikan dalam 3–7 hari kerja, sedangkan website menyesuaikan jumlah halaman dan kebutuhan fitur. Untuk software, estimasi ditentukan setelah scope dan fitur disepakati.",
  },
  {
    id: 2,
    question: "Apakah bisa melihat hasilnya sebelum memutuskan?",
    answer:
      "Ya. Kami dapat memberikan demo atau test link agar Anda dapat melihat dan mencoba hasilnya sebelum melakukan keputusan akhir.",
  },
  {
    id: 3,
    question: "Apakah ada garansi setelah website selesai?",
    answer:
      "Ada. Setiap project mendapatkan garansi teknis selama 3 bulan untuk memperbaiki error atau bug yang berasal dari implementasi awal. Garansi tidak mencakup penambahan fitur atau perubahan desain baru.",
  },
  {
    id: 4,
    question: "Apakah saya bisa meminta perubahan setelah website selesai?",
    answer:
      "Bisa. Untuk perubahan konten, tersedia 1× perubahan teks per bulan tanpa mengubah keseluruhan desain. Perubahan layout, fitur, atau redesign dihitung sebagai pekerjaan tambahan.",
  },
  {
    id: 5,
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer:
      "Harga project mencakup pembuatan dan deployment sesuai paket. Biaya domain, hosting, atau layanan pihak ketiga tertentu dapat berbeda tergantung kebutuhan project dan akan diinformasikan sebelum pengerjaan.",
  },
  {
    id: 6,
    question: "Bagaimana cara menentukan solusi yang saya butuhkan?",
    answer:
      "Kami melihat kebutuhan bisnis terlebih dahulu. Jika Anda membutuhkan halaman untuk campaign atau iklan, landing page mungkin sudah cukup. Jika membutuhkan identitas dan informasi bisnis yang lebih lengkap, kami menyarankan website. Untuk proses bisnis yang membutuhkan otomatisasi, kami dapat mengembangkan software custom.",
  },
];
