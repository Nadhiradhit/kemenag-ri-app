"use client";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Share2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dataNews } from "@/data/data-news";

interface NewsDetailPageProps {
	params: {
		slug: string;
	};
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
	const newsItem = dataNews.find((news) => news.slug === params.slug);

	if (!newsItem) {
		notFound();
	}

	const relatedNews = dataNews
		.filter(
			(news) => news.category === newsItem.category && news.id !== newsItem.id
		)
		.slice(0, 3);

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("id-ID", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: newsItem.title,
					text: newsItem.description,
					url: window.location.href,
				});
			} catch (error) {
				console.log("Error sharing:", error);
			}
		} else {
			navigator.clipboard.writeText(window.location.href);
			alert("Link berhasil disalin ke clipboard!");
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 font-manrope">
			<div className="container mx-auto px-4 py-8">
				<div className="mb-6">
					<Link href="/berita">
						<Button variant="outline" className="flex items-center gap-2">
							<ArrowLeft className="w-4 h-4" />
							Kembali ke Dashboard
						</Button>
					</Link>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-2">
						<article className="bg-white rounded-lg shadow-sm overflow-hidden">
							{/* Featured Image */}
							<div className="relative">
								<Image
									src={newsItem.image}
									alt={newsItem.title}
									width={800}
									height={400}
									quality={100}
									className="w-full h-64 md:h-80 object-cover"
								/>
								<div className="absolute top-4 left-4">
									<span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
										{newsItem.category}
									</span>
								</div>
							</div>

							<div className="p-6 md:p-8">
								<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
									{newsItem.title}
								</h1>

								<div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
									<div className="flex items-center">
										<Calendar className="w-4 h-4 mr-2" />
										<span>{formatDate(newsItem.date)}</span>
									</div>

									<Button
										onClick={handleShare}
										variant="outline"
										size="sm"
										className="flex items-center gap-2">
										<Share2 className="w-4 h-4" />
										Bagikan
									</Button>
								</div>

								<div className="prose prose-lg max-w-none">
									<p className="text-gray-700 leading-relaxed mb-6">
										{newsItem.description}
									</p>

									<div className="space-y-4">
										<p className="text-gray-700 leading-relaxed">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<p className="text-gray-700 leading-relaxed">
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
										<p className="text-gray-700 leading-relaxed">
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremque laudantium, totam rem
											aperiam, eaque ipsa quae ab illo inventore veritatis et
											quasi architecto beatae vitae dicta sunt explicabo.
										</p>
									</div>
								</div>
							</div>
						</article>
					</div>

					<div className="lg:col-span-1">
						<div className="space-y-6">
							{relatedNews.length > 0 && (
								<Card>
									<div className="p-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-4">
											Berita Terkait
										</h3>
										<div className="space-y-4">
											{relatedNews.map((news) => (
												<Link
													key={news.id}
													href={`/berita/${news.slug}`}
													className="block group">
													<div className="flex gap-3">
														<Image
															src={news.image}
															alt={news.title}
															width={80}
															height={60}
															className="w-20 h-15 object-cover rounded flex-shrink-0"
														/>
														<div className="flex-1 min-w-0">
															<h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
																{news.title}
															</h4>
															<p className="text-xs text-gray-500">
																{formatDate(news.date)}
															</p>
														</div>
													</div>
												</Link>
											))}
										</div>
									</div>
								</Card>
							)}

							<Card>
								<div className="p-6">
									<h3 className="text-lg font-semibold text-gray-900 mb-4">
										Kategori
									</h3>
									<div className="flex flex-wrap gap-2">
										<Link
											href={`/?category=${encodeURIComponent(
												newsItem.category
											)}`}>
											<Button variant="outline" size="sm">
												{newsItem.category}
											</Button>
										</Link>
									</div>
								</div>
							</Card>

							<Card>
								<div className="p-6">
									<h3 className="text-lg font-semibold text-gray-900 mb-4">
										Berita Terbaru
									</h3>
									<div className="space-y-4">
										{dataNews
											.filter((news) => news.id !== newsItem.id)
											.slice(0, 4)
											.map((news) => (
												<Link
													key={news.id}
													href={`/berita/${news.slug}`}
													className="block group">
													<div className="flex gap-3">
														<Image
															src={news.image}
															alt={news.title}
															width={60}
															height={45}
															className="w-15 h-11 object-cover rounded flex-shrink-0"
														/>
														<div className="flex-1 min-w-0">
															<h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
																{news.title}
															</h4>
															<p className="text-xs text-gray-500 mt-1">
																{formatDate(news.date)}
															</p>
														</div>
													</div>
												</Link>
											))}
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
