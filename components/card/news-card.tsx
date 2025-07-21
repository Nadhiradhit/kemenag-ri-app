import React from "react";
import { Card } from "../ui/card";
import { DataNewsItem } from "@/data/data-news";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function NewsCard({
	id: id,
	title: title,
	slug: slug,
	description: description,
	image: image,
}: DataNewsItem) {
	return (
		<Card className="mb-6 hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 overflow-hidden group md:py-6">
			<div className="flex flex-col md:flex-row">
				<div className="relative w-full md:w-80 h-48 md:h-auto flex-shrink-0 md:ml-4">
					<Image
						src={image || "/placeholder.svg"}
						alt={title}
						fill
						quality={85}
						className="object-cover transition-transform duration-300 group-hover:scale-105 md:rounded-lg"
					/>
				</div>

				<div className="flex-1 p-6 flex flex-col justify-between">
					<div>
						<h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
							{title}
						</h2>
						<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
							{description}
						</p>
					</div>

					<Link
						href={`/berita/${slug}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base transition-colors duration-200 group/link">
						<span>Baca Selengkapnya</span>
						<ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
					</Link>
				</div>
			</div>
		</Card>
	);
}
