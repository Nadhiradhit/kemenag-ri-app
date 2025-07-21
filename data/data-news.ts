export type DataNewsItem = {
	id: string;
	title: string;
	slug: string;
	description: string;
	image: string;
	category: string;
	link?: string;
	date: string;
};

export type DataNews = {
	id: string;
	title: string;
	article: string;
	image: string;
	link?: string;
};

export const dataNews: DataNewsItem[] = [
	{
		id: "1",
		title: "Kementrian Agama Republik Indonesia",
		slug: "kementrian-agama-republik-indonesia",
		description:
			"Berita terbaru dari Kementrian Agama Republik Indonesia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "/assets/image/image-1.jpg",
		date: "2025-07-20",
		category: "Berita Penting",
	},
	{
		id: "2",
		title: "Berita Kemenag",
		slug: "berita-kemenag",
		description:
			"Kemenag menyampaikan update regulasi terbaru terkait kegiatan keagamaan nasional.",
		image: "/assets/image/image-2.jpeg",
		date: "2025-07-19",
		category: "Berita Populer",
	},
	{
		id: "3",
		title: "Sosialisasi Kemenag di Wilayah Timur",
		slug: "sosialisasi-kemenag-di-wilayah-timur",
		description:
			"Kemenag melakukan sosialisasi kebijakan terbaru untuk wilayah Indonesia bagian Timur.",
		image: "/assets/image/image-3.jpg",
		date: "2025-07-17",
		category: "Berita Madrasah",
	},
	{
		id: "4",
		title: "Pendaftaran Haji 2025 Resmi Dibuka",
		slug: "pendaftaran-haji-2025-resmi-dibuka",
		description:
			"Kementrian Agama mengumumkan pembukaan pendaftaran haji untuk tahun 2025 mulai hari ini.",
		image: "/assets/image/image-4.jpg",
		date: "2025-07-18",
		category: "Berita Haji",
	},
	{
		id: "5",
		title: "Penguatan Moderasi Beragama",
		slug: "penguatan-moderasi-beragama",
		description:
			"Upaya penguatan moderasi beragama terus dilakukan demi menjaga keharmonisan umat beragama.",
		image: "/assets/image/image-5.jpg",
		date: "2025-07-16",
		category: "Berita Penting",
	},
	{
		id: "6",
		title: "Kemenag Hadir di Tengah Masyarakat",
		slug: "kemenag-hadir-di-tengah-masyarakat",
		description:
			"Program Kemenag hadir sebagai bentuk nyata kehadiran negara dalam layanan keagamaan.",
		image: "/assets/image/image-6.jpg",
		date: "2025-07-15",
		category: "Berita Populer",
	},
	{
		id: "7",
		title: "Digitalisasi Layanan Keagamaan",
		slug: "digitalisasi-layanan-keagamaan",
		description:
			"Layanan berbasis digital dari Kemenag membantu masyarakat mengakses informasi secara lebih cepat.",
		image: "/assets/image/image-7.jpg",
		date: "2025-07-14",
		category: "Berita Madrasah",
	},
	{
		id: "8",
		title: "Kemenag Luncurkan Aplikasi Baru",
		slug: "kemenag-luncurkan-aplikasi-baru",
		description:
			"Aplikasi terbaru dari Kemenag diluncurkan untuk memudahkan pendaftaran nikah secara online.",
		image: "/assets/image/image-8.jpg",
		date: "2025-07-13",
		category: "Berita Populer",
	},
	{
		id: "9",
		title: "Kemenag Gelar Rapat Nasional",
		slug: "kemenag-gelar-rapat-nasional",
		description:
			"Rapat nasional membahas strategi peningkatan kualitas pendidikan keagamaan di seluruh Indonesia.",
		image: "/assets/image/image-9.jpg",
		date: "2025-07-12",
		category: "Berita Penting",
	},
	{
		id: "10",
		title: "Program Beasiswa Santri 2025",
		slug: "program-beasiswa-santri-2025",
		description:
			"Beasiswa untuk santri berprestasi kembali dibuka oleh Kementerian Agama Republik Indonesia.",
		image: "/assets/image/image-10.jpg",
		date: "2025-07-11",
		category: "Berita Penyelenggaraan Kristen",
	},
];
