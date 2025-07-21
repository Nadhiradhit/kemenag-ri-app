"use client";
import React, { useState, useMemo, useEffect } from "react";
import { InputSearch } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { dataNews } from "@/data/data-news";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function GaleriDashboard() {
	const [search, setSearch] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [currentPage, setCurrentPage] = useState<number>(1);

	const itemsPerPage = 9;
	const categories = [...new Set(dataNews.map((news) => news.category))];

	const filteredNews = useMemo(() => {
		let filtered = dataNews;
		// Filter by search term
		if (search.trim()) {
			filtered = filtered.filter(
				(news) =>
					news.title.toLowerCase().includes(search.toLowerCase()) ||
					news.description.toLowerCase().includes(search.toLowerCase())
			);
		}
		// Filter by category
		if (selectedCategory) {
			filtered = filtered.filter((news) => news.category === selectedCategory);
		}

		return filtered;
	}, [search, selectedCategory]);

	useEffect(() => {
		setCurrentPage(1);
	}, [search, selectedCategory]);

	const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentNews = filteredNews.slice(startIndex, endIndex);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};

	// Generate page numbers to display
	const getPageNumbers = () => {
		const pages = [];
		const maxPagesToShow = 5;

		if (totalPages <= maxPagesToShow) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			if (currentPage <= 3) {
				for (let i = 1; i <= 4; i++) {
					pages.push(i);
				}
				pages.push("...");
				pages.push(totalPages);
			} else if (currentPage >= totalPages - 2) {
				pages.push(1);
				pages.push("...");
				for (let i = totalPages - 3; i <= totalPages; i++) {
					pages.push(i);
				}
			} else {
				pages.push(1);
				pages.push("...");
				for (let i = currentPage - 1; i <= currentPage + 1; i++) {
					pages.push(i);
				}
				pages.push("...");
				pages.push(totalPages);
			}
		}

		return pages;
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("id-ID", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};

	return (
		<section className="my-16 font-manrope">
			<div className="container mx-auto">
				<div className="mt-8">
					{currentNews.length > 0 ? (
						<>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{currentNews.map((news, index) => (
									<article key={index}>
										<Link href={`/berita/${news.slug}`} className="block">
											<Card className="pb-4">
												<Image
													src={news.image}
													alt={news.title}
													width={1000}
													height={500}
													quality={100}
													className="w-full h-48 object-cover rounded-t-lg"
												/>
												<CardHeader>
													<div className="flex items-center">
														<Calendar className="w-4 h-4 mr-1" />
														<span>{formatDate(news.date)}</span>
													</div>
												</CardHeader>
												<CardContent className="space-y-2 font-semibold">
													{news.description.length > 100 ? (
														<p className="line-clamp-3">
															{news.description.substring(0, 100)}...
														</p>
													) : (
														<p>{news.description}</p>
													)}
												</CardContent>
											</Card>
										</Link>
									</article>
								))}
							</div>
							{totalPages > 1 && (
								<div className="mt-4 text-center">
									<div className="flex justify-center items-center mt-8 space-x-2">
										<Button
											onClick={handlePrevPage}
											disabled={currentPage === 1}
											variant="outline"
											size="sm"
											className="flex items-center px-3 py-2">
											<ChevronLeft className="w-4 h-4 mr-1" />
											Sebelumnya
										</Button>

										<div className="flex space-x-1">
											{getPageNumbers().map((page, index) => (
												<React.Fragment key={index}>
													{page === "..." ? (
														<span className="px-3 py-2 text-gray-500">...</span>
													) : (
														<Button
															onClick={() => handlePageChange(page as number)}
															variant={
																currentPage === page ? "default" : "outline"
															}
															size="sm"
															className={`px-3 py-2 ${
																currentPage === page
																	? "bg-green-600 text-white border-green-600 hover:bg-green-700"
																	: "hover:bg-green-50"
															}`}>
															{page}
														</Button>
													)}
												</React.Fragment>
											))}
										</div>
										<Button
											onClick={handleNextPage}
											disabled={currentPage === totalPages}
											variant="outline"
											size="sm"
											className="flex items-center px-3 py-2">
											Selanjutnya
											<ChevronRight className="w-4 h-4 ml-1" />
										</Button>
									</div>

									<p className="mt-2 text-sm text-gray-600">
										Menampilkan halaman {currentPage} dari {totalPages}
									</p>
								</div>
							)}
						</>
					) : (
						<div className="text-center mt-8">
							<p className="text-gray-600">
								Tidak ada berita yang sesuai dengan pencarian Anda.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
