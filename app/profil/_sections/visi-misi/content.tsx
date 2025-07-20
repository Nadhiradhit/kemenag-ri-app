import React from "react";
import Image from "next/image";

export default function VisionMisionDashboard() {
	return (
		<section className="mt-16 font-manrope">
			<div className="container mx-auto">
				<h2 className="text-2xl text-center font-semibold mb-4">
					Visi Kementerian Agama Kota Pekanbaru
				</h2>
				<h1 className="text-3xl text-center mt-4 font-semibold">
					“Kementerian Agama yang Profesional dan Andal dalam Membangun
					Masyarakat yang{" "}
					<span className="italic font-bold">
						Saleh, Moderat, Cerdas, dan Unggul untuk Mewujudkan Indonesia Maju
						yang Berdaulat, Mandiri, dan Berkepribadian Berdasarkan Gotong
						Royong.{" "}
					</span>{" "}
					”
				</h1>
				<div className="flex flex-col lg:flex-row items-center gap-4 mb-8 mt-8">
					<div className="w-full lg:w-1/2">
						<Image
							src="/assets/image/image-1.jpg"
							alt="Logo Kemenag"
							width={1000}
							height={500}
							quality={100}
							className="w-full h-[300px] lg:h-[400px] rounded-2xl"
						/>
					</div>
					<div className="w-full lg:w-1/2">
						<h3 className="text-lg mt-4">
							Dalam upaya mewujudkan visi “Terwujudnya Masyarakat Kota Pekanbaru
							yang Agamis”, Kementerian Agama Kota Pekanbaru merumuskan sejumlah
							misi strategis yang menjadi arah dan landasan pelaksanaan tugas
							serta pelayanan kepada masyarakat. Misi ini mencerminkan komitmen
							Kementerian Agama dalam meningkatkan kualitas kehidupan beragama,
							pendidikan keagamaan, serta memperkuat kerukunan umat beragama di
							wilayah Kota Pekanbaru. Berikut adalah misi yang diemban:
						</h3>
						<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
							<li>
								Meningkatkan kualitas bimbingan dan pelayanan kehidupan beragama
								yang inklusif dan berkeadilan bagi seluruh umat beragama.
							</li>
							<li>
								Meningkatkan kualitas pendidikan agama dan keagamaan yang
								profesional, relevan, dan berdaya saing.
							</li>
							<li>
								Memberdayakan umat beragama dan lembaga keagamaan agar lebih
								mandiri, produktif, dan berperan aktif dalam pembangunan.
							</li>
							<li>
								Memperkokoh kerukunan umat beragama melalui dialog, pembinaan,
								dan penguatan nilai-nilai toleransi.
							</li>
							<li>
								Mewujudkan aparatur yang profesional, berintegritas, dan
								berorientasi pada pelayanan publik yang prima.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
