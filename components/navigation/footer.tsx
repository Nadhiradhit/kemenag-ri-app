import Image from "next/image";
import {
	Facebook,
	Twitter,
	Instagram,
	Youtube,
	MapPin,
	Phone,
	Mail,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#2C2C2C] text-white font-manrope">
			<div className="pb-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
					<div className="space-y-6">
						<div className="bg-white p-3 rounded-r-lg flex items-center gap-3 w-96">
							<Image
								src="/assets/logo-kemenag.png"
								alt="Logo Kemenag"
								width={60}
								height={60}
								className="flex-shrink-0"
							/>
							<p className="font-semibold text-gray-800 text-lg leading-tight">
								Kementerian Agama
								<br />
								Republik Indonesia
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pl-8">
							<div>
								<h3 className="text-lg font-semibold mb-4">Kontak</h3>
								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
										<span className="text-sm">
											Jl. Arfin Ahmad, Simp Rimbunan No.1
										</span>
									</div>
									<div className="flex items-center gap-3">
										<Phone className="w-5 h-5 flex-shrink-0" />
										<span className="text-sm">(0761) 21159</span>
									</div>
									<div className="flex items-center gap-3">
										<Mail className="w-5 h-5 flex-shrink-0" />
										<span className="text-sm">humas@kemenag.go.id</span>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-4">Sosial Media</h3>
								<div className="flex gap-4">
									<a href="#" className="hover:text-blue-400 transition-colors">
										<Facebook className="w-6 h-6" />
									</a>
									<a href="#" className="hover:text-blue-400 transition-colors">
										<Twitter className="w-6 h-6" />
									</a>
									<a href="#" className="hover:text-pink-400 transition-colors">
										<Instagram className="w-6 h-6" />
									</a>
									<a href="#" className="hover:text-red-400 transition-colors">
										<Youtube className="w-6 h-6" />
									</a>
								</div>
							</div>
						</div>

						<div className="pl-8">
							<h3 className="border-l-4 border-red-500 text-lg font-semibold text-red-400">
								<span className="pl-2">Saran & Pengaduan</span>
							</h3>
						</div>
					</div>

					<div className="flex flex-col justify-center mx-auto">
						<h3 className="text-lg font-semibold mb-4">Lokasi</h3>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.680712189452!2d101.4284492!3d0.47586569999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a8d42b0fd709%3A0xe2c535412fc3541!2sKantor%20Kemenag%20Pekanbaru!5e0!3m2!1sen!2sid!4v1752983239318!5m2!1sen!2sid"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-120 lg:w-150 h-64 rounded-lg border-2 border-gray-600"
							title="Lokasi Kantor Kemenag Pekanbaru"
						/>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-600">
				<div className="container mx-auto px-4 py-4">
					<p className="text-center text-sm text-gray-300">
						Hak Cipta &copy; 2025 Kementerian Agama Kota Pekanbaru. All Rights
						Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
