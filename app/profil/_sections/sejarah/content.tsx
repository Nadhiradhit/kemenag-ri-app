import React from "react";

const organizationData = [
	{
		id: 1,
		title: "Subbagian Tata Usaha",
	},
	{
		id: 2,
		title: "Seksi Pendidikan Madrasah",
	},
	{
		id: 3,
		title: "Seksi Pendidikan Diniyah dan Pondok Pesantren",
	},
	{
		id: 4,
		title: "Seksi Pendidikan Agama Islam",
	},
	{
		id: 5,
		title: "Seksi Penyelenggara Haji dan Umrah",
	},
	{
		id: 6,
		title: "Seksi Bimbingan Masyarakat Islam",
	},
	{
		id: 7,
		title: "Penyelenggara Zakat dan Wakaf",
	},
	{
		id: 8,
		title: "Penyelenggara Kristen",
	},
	{
		id: 9,
		title: "Kelompok Jabatan Fungsional",
	},
];

const StrategyData = [
	{
		id: 1,
		title:
			"Meningkatnya kualitas tata kelola dukungan manajemen dan pelaksanaan tugas teknis lain Kementerian Agama",
	},
	{
		id: 2,
		title: "Meningkatnya kualitas kerukunan hidup beragama",
	},
	{
		id: 3,
		title:
			"Meningkatnya kualitas dan ketersediaan bimbingan dan fasilitasi keagamaan umat Islam",
	},
	{
		id: 4,
		title: "Meningkatnya kualitas dan akuntabilitas pengelolaan zakat wakaf",
	},
	{
		id: 5,
		title: "Meningkatnya kualitas pelayanan kehidupan beragama umat Islam",
	},
	{
		id: 6,
		title: "Meningkatnya kualitas layanan pendidikan agama Islam",
	},
	{
		id: 7,
		title: " Meningkatnya mutu pendidikan agama dan keagamaan agama Kristen",
	},
	{
		id: 8,
		title: "Meningkatnya mutu pendidikan agama dan keagamaan agama Katolik",
	},
	{
		id: 9,
		title: "Meningkatnya mutu pendidikan agama dan keagamaan agama Buddha",
	},
];

export default function HistoryDashboard() {
	return (
		<section className="mt-16 font-manrope">
			<div className="container mx-auto text-center space-y-4">
				<h1 className="text-2xl font-semibold">Latar Belakang</h1>
				<p>
					Kantor Kementerian Agama Kota Pekanbaru adalah salah satu instansi
					vertical yang berada di tingkat Kab/Kota dan merupakan perpanjangan
					tangan Kementerian Agama Republik Indonesia, yang memiliki kewenangan
					menyelenggarakan sebagian tugas umum pemerintahan dan pembangunan di
					bidang Agama di Tingkat Kota Pekanbaru dan bertanggung jawab kepada
					Menteri Agama. Dalam melaksanakan tugasnya Kantor Kementerian Agama
					Kota Pekanbaru menjabarkan kebijakan-kebijakan pemerintah dalam hal
					ini Kementerian Agama RI serta memperhatikan Kebijakan-kebijakan
					Pemerintah Daerah Kota Pekanbaru.
				</p>
				<p>
					Kantor Kementerian Agama Kota Pekanbaru terbentuk sekitar tahun 1975
					berdasarkan instruksi dari Menteri Agama RI, Kota Pekanbaru membentuk
					Kantor Departemen Agama dengan bergabungnya 3 kantor yang mengurusi
					bidang Keagamaan di Kodya Pekanbaru. Kantor Departemen Agama pertama
					dijabat oleh Bapak Baharuddin Yusuf (1975-1976) yang beralamat di
					Jalan Sudirman simpang Kartini (satker lama) selama lebih kurang 2
					tahun.
				</p>
				<p>
					Berdasarkan Peraturan Menteri Agama RI Nomor 1 Tahun 2010 terjadi
					perubahan penyebutan nama dari Departemen Agama menjadi Kementerian
					Agama yang diikuti perubahan semua penggunaan atribut seperti logo,
					badge, kop surat, stempel, papan nama dan lain-lain yang menunjuk pada
					Kementerian Agama.
				</p>
			</div>
			<div className="container mx-auto text-center space-y-4 mt-8">
				<h1 className="text-2xl font-semibold">Susunan Organisasi</h1>
				<p>
					Terbitnya Peraturan Menteri Agama Nomor 19 Tahun 2019 yang ditetapkan
					pada tanggal 30 September 2019 di Jakarta yang ditandatangani oleh
					Menteri Agama Republik Indonesia, Lukman Hakim Saifuddin menyebabkan
					terjadinya perubahan Susunan Organisasi Kementerian Agama di 52
					Kab/Kota yang tersebar disebagian pulau Jawa dan hamper seluruh Kantor
					Kementerian Agama wilayah pulau Sumatera sebagaimana yang tertuang
					pada BAB III tentang Susunan Organisasi Kementerian Agama Kabupaten/
					Kota pasal 648 terdiri dari:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{organizationData.map((item) => (
						<div
							key={item.id}
							className="bg-white p-3 rounded-md border border-green-500">
							<p className="font-semibold">{item.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className="container mx-auto text-center space-y-4 mt-8">
				<h1 className="text-2xl font-semibold">Motto Pelayanan</h1>
				<h3 className="text-lg">Senyum, Ramah, Santun, Cepat dan Teliti</h3>
			</div>

			<div className="container mx-auto text-center space-y-4 mt-8 mb-8">
				<h1 className="text-2xl font-semibold">Rencana Strategis</h1>
				{StrategyData.map((item) => (
					<div
						key={item.id}
						className="bg-white p-3 rounded-md border border-green-500">
						<p className="font-semibold">{item.title}</p>
					</div>
				))}
			</div>
		</section>
	);
}
