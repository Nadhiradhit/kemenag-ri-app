"use client";
import NewsCard from "@/components/card/news-card";
import { dataNews } from "@/data/data-news";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
export default function ArticleDashboard() {
	return (
		<section className="mt-16">
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start sm:px-4">
				<div className="w-full lg:w-1/2 px-4 lg:px-0">
					<div className="mb-6">
						<h2 className="text-2xl lg:text-3xl font-manrope font-bold text-gray-900 pb-2 inline-block">
							Berita Terkini
						</h2>
					</div>
					<div className="space-y-4">
						{dataNews.map((news, index) => (
							<NewsCard key={index} {...news} />
						))}
					</div>
				</div>

				<div className="w-full lg:w-1/2 px-4 lg:px-0">
					<div className="mb-6">
						<h2 className="text-2xl lg:text-3xl font-manrope font-bold text-gray-900  pb-2 inline-block">
							Infografis
						</h2>
					</div>
					<div className="h-full min-h-[600px] flex items-center justify-center">
						<Carousel
							className="w-full max-w-md mx-auto"
							plugins={[
								Autoplay({
									delay: 2000,
								}),
							]}>
							<CarouselContent>
								<CarouselItem>
									<div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
										<Image
											src="/assets/image/image-2.jpeg"
											alt="Infografis 1"
											fill
											className="object-cover transition-transform duration-300 hover:scale-105"
										/>
									</div>
								</CarouselItem>
								<CarouselItem>
									<div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
										<Image
											src="/assets/image/image-2.jpeg"
											alt="Infografis 2"
											fill
											className="object-cover transition-transform duration-300 hover:scale-105"
										/>
									</div>
								</CarouselItem>
								<CarouselItem>
									<div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
										<Image
											src="/assets/image/image-2.jpeg"
											alt="Infografis 3"
											fill
											className="object-cover transition-transform duration-300 hover:scale-105"
										/>
									</div>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious className="left-2" />
							<CarouselNext className="right-2" />
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
}
