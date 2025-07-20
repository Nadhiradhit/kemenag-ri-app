import Image from "next/image";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { title } from "process";

const taskKemenagData = [
	{
		id: 1,
		title: "Pelayanan dan bimbingan kehidupan beragama.",
	},
	{
		id: 2,
		title: "Penyelenggaraan pendidikan agama dan keagamaan.",
	},
	{
		id: 3,
		title: "Pembinaan kerukunan umat beragama.",
	},
	{
		id: 4,
		title: "Pengelolaan zakat dan wakaf.",
	},
	{
		id: 5,
		title: "Penyelenggaraan haji dan umrah.",
	},
];

export default function FunctionTaskDashboard() {
	return (
		<section className="mt-16 font-manrope">
			<div className="container mx-auto flex flex-col lg:flex-row items-center gap-4 px-4 lg:px-0">
				<Image
					src="/assets/header-image.jpg"
					alt="Gedung"
					width={1000}
					height={500}
					quality={100}
					className="w-full h-[300px] lg:h-[400px] rounded-2xl"
				/>
				<p className="text-justify lg:text-lg font-semibold">
					Kantor Kementerian Agama (Kemenag) Kota Pekanbaru merupakan instansi
					vertikal di bawah Kementerian Agama Republik Indonesia yang bertugas
					menyelenggarakan urusan pemerintahan di bidang agama di wilayah Kota
					Pekanbaru. Tugas pokoknya adalah melaksanakan kebijakan dan program
					Kementerian Agama sesuai dengan peraturan perundang-undangan yang
					berlaku serta arahan dari Kantor Wilayah Kementerian Agama Provinsi
					Riau
				</p>
			</div>
			<div className="container mx-auto mt-8 mb-16 px-4 lg:px-0">
				<h3 className="text-lg lg:text-xl font-semibold">
					Tugas Pokok Kemenag & Fungsi Kemenag
				</h3>

				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-lg lg:text-xl">
							Tugas Pokok Kemenag
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-justify lg:text-lg font-semibold">
								Kemenag Kota Pekanbaru memiliki tugas utama untuk
								menyelenggarakan urusan pemerintahan di bidang agama, yang
								mencakup:
							</p>
							<ul className="list-decimal list-inside text-justify lg:text-lg">
								{taskKemenagData.map((item) => (
									<li key={item.id} className="text-justify lg:text-lg">
										{item.title}
									</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="text-lg lg:text-xl">
							Fungsi Utama Kemenag
						</AccordionTrigger>
						<AccordionContent>
							<p className="text-justify lg:text-lg font-semibold">
								Dalam melaksanakan tugas tersebut, Kemenag Kota Pekanbaru
								menjalankan fungsi-fungsi sebagai berikut:
							</p>
							<ul className="list-decimal list-inside text-justify lg:text-lg">
								<li>
									Perumusan Visi, Misi, dan Kebijakan Teknis: Menetapkan arah
									dan strategi pelayanan serta bimbingan kehidupan beragama di
									Kota.
								</li>
								<li>
									Pembinaan dan Pelayanan Keagamaan: Melakukan pembinaan,
									pelayanan, dan bimbingan di bidang:
									<ul className="list-disc list-inside ml-6">
										<li>Bimbingan masyarakat Islam.</li>
										<li>Pelayanan haji dan umrah.</li>
										<li>Pengembangan zakat dan wakaf.</li>
										<li>Pendidikan agama dan keagamaan.</li>
										<li>Pondok pesantren.</li>
										<li>
											Pendidikan agama Islam pada masyarakat dan pemberdayaan
											masjid.
										</li>
										<li>
											Urusan agama dan pendidikan agama untuk umat Kristen,
											Katolik, Hindu, serta Buddha sesuai peraturan
											perundang-undangan yang berlaku.
										</li>
									</ul>
								</li>
								<li>
									Pengelolaan Administrasi dan Informasi Keagamaan: Melaksanakan
									kebijakan teknis di bidang pengelolaan administrasi dan
									informasi keagamaan.
								</li>
								<li>
									Pelayanan dan Bimbingan Kerukunan Umat Beragama: Memberikan
									pelayanan dan bimbingan untuk memperkokoh kerukunan umat
									beragama.
								</li>
								<li>
									Koordinasi Program: Mengkoordinasikan perencanaan,
									pengendalian, dan pengawasan program-program keagamaan.
								</li>
								<li>
									Hubungan Antar Lembaga: Menjalin hubungan dengan pemerintah
									daerah, instansi terkait, dan lembaga masyarakat dalam rangka
									pelaksanaan tugas Kementerian Agama di Kota Pekanbaru.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}
