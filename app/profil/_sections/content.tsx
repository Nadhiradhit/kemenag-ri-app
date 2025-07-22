"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { Clock, BookOpen, CheckSquare } from "lucide-react";
import Link from "next/link";
import { dataNews } from "@/data/data-news";

export default function ProfileContent() {
	return (
		<section className="mt-16 font-manrope">
			<div>
				<Carousel
					className="w-full container mx-auto px-4"
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}>
					<CarouselContent>
						<CarouselItem>
							<Image
								src="/assets/image/image-3.jpg"
								alt="Logo Kemenag"
								width={1000}
								height={500}
								quality={100}
								className="w-full h-[300px] lg:h-[400px] rounded-2xl"
							/>
						</CarouselItem>
						<CarouselItem>
							<Image
								src="/assets/image/image-1.jpg"
								alt="Logo Kemenag"
								width={1000}
								height={500}
								quality={100}
								className="w-full h-[300px] lg:h-[400px] rounded-2xl"
							/>
						</CarouselItem>
						<CarouselItem>
							<Image
								src="/assets/image/image-3.jpg"
								alt="Logo Kemenag"
								width={1000}
								height={500}
								quality={100}
								className="w-full h-[300px] lg:h-[400px] rounded-2xl"
							/>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
			{/* Desktop Visi dan Misi */}
			<div className="mt-8 relative hidden lg:block">
				<Image
					src="/assets/header-image-3.png"
					alt="Logo Kemenag"
					width={1000}
					height={500}
					quality={100}
					className="w-full h-[300px] lg:h-[700px]"
				/>
				<div className="absolute inset-0 bg-black/40" />
				<div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-8 container mx-auto">
					<Card className="w-96 h-96">
						<div className="w-full h-60">
							<Image
								src="/assets/poster-2.png"
								alt="Logo Kemenag"
								width={1000}
								height={500}
								quality={100}
								className="w-full h-full rounded-t-2xl object-cover"
							/>
						</div>
						<Link
							href={"/profil/visi-misi"}
							className="text-center text-xl font-semibold py-4 hover:underline">
							Visi dan Misi Kementerian Agama Kota Pekanbaru
						</Link>
					</Card>
					<Card className="w-96 h-96">
						<div className="w-full h-60">
							<Image
								src="/assets/poster-1.png"
								alt="Logo Kemenag"
								width={1000}
								height={500}
								quality={100}
								className="w-full h-full rounded-t-2xl object-cover"
							/>
						</div>
						<Link
							href={"/profil/sejarah"}
							className="text-center text-xl font-semibold py-4 hover:underline">
							Sejarah Kementerian Agama Kota Pekanbaru
						</Link>
					</Card>
					<Card className="w-96 h-96">
						<div className="w-full h-60">
							<Image
								src="/assets/poster-3.png"
								alt="Logo Kemenag"
								width={1000}
								height={500}
								quality={100}
								className="w-full h-full rounded-t-2xl object-cover"
							/>
						</div>
						<Link
							href={"/profil/fungsi-tugas"}
							className="text-center text-xl font-semibold py-4 hover:underline">
							Fungsi dan Tugas Kementerian Agama Kota Pekanbaru
						</Link>
					</Card>
				</div>
			</div>
			{/* Mobile Visi dan Misi  */}
			<div className="flex flex-col items-center justify-center gap-4 container mx-auto lg:hidden mt-8 px-4">
				<Card className="w-full lg:w-1/3">
					<Link
						href={"/profil/visi-misi"}
						className="relative w-full h-[300px] lg:h-[400px]">
						<Image
							src="/assets/poster-2.png"
							alt="Logo Kemenag"
							width={1000}
							height={500}
							quality={100}
							className="w-full h-full rounded-2xl"
						/>
						<div className="absolute inset-0 bg-black/40 rounded-2xl" />
						<div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
							<h4 className="text-white text-xl font-bold leading-tight text-center">
								Visi dan Misi Kementerian Agama Kota Pekanbaru{" "}
							</h4>
						</div>
					</Link>
				</Card>
				<Card className="w-full lg:w-1/3">
					<Link
						href={"/profil/sejarah"}
						className="relative w-full h-[300px] lg:h-[400px]">
						<Image
							src="/assets/poster-1.png"
							alt="Logo Kemenag"
							width={1000}
							height={500}
							quality={100}
							className="w-full h-full rounded-2xl"
						/>
						<div className="absolute inset-0 bg-black/40 rounded-2xl" />
						<div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
							<h4 className="text-white text-xl font-bold leading-tight text-center">
								Sejarah Kementerian Agama Kota Pekanbaru{" "}
							</h4>
						</div>
					</Link>
				</Card>
				<Card className="w-full lg:w-1/3">
					<Link
						href={"/profil/fungsi-tugas"}
						className="relative w-full h-[300px] lg:h-[400px]">
						<Image
							src="/assets/poster-3.png"
							alt="Logo Kemenag"
							width={1000}
							height={500}
							quality={100}
							className="w-full h-full rounded-2xl"
						/>
						<div className="absolute inset-0 bg-black/40 rounded-2xl" />
						<div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
							<h4 className="text-white text-xl font-bold leading-tight text-center">
								Fungsi dan Tugas Kementerian Agama Kota Pekanbaru{" "}
							</h4>
						</div>
					</Link>
				</Card>
			</div>
			{/* Gallery */}
			<div className="my-16 px-4 lg:px-0">
				<h1 className="text-3xl font-semibold text-center mb-8">Galeri Foto</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 container mx-auto justify-center">
					{dataNews.slice(0, 6).map((news, index) => (
						<Link href={`/berita/${news.slug}`} key={index}>
							<Image
								src={news.image}
								alt="pic-1"
								width={1000}
								height={500}
								quality={100}
								className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
