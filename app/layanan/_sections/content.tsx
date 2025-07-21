"use client";
import { InputSearch } from "@/components/ui/input";
import React, { useEffect, useMemo, useState } from "react";
import { dataService } from "@/data/data-service";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";

export default function LayananDashboard() {
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState<number>(1);

	const itemsPerPage = 9;

	const filteredServices = useMemo(() => {
		let filtered = dataService;

		if (search.trim()) {
			filtered = filtered.filter((service) =>
				service.title.toLowerCase().includes(search.toLowerCase())
			);
		}

		return filtered;
	}, [search]);

	useEffect(() => {
		setCurrentPage(1);
	}, [search]);

	const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentServices = filteredServices.slice(startIndex, endIndex);

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

	return (
		<section className="mt-16 font-manrope px-4 lg:px-0">
			<div className="container mx-auto">
				<InputSearch
					placeholder="Cari Layanan"
					className="w-full"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className="mt-8">
					{currentServices.length > 0 ? (
						<>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{currentServices.map((service, index) => (
									<div
										key={index}
										className="bg-white border border-green-500 h-24 p-4 rounded-lg shadow-md flex items-center gap-4">
										<div className="flex items-center justify-center gap-4">
											<Image />
											<h2 className="text-start">{service.title}</h2>
										</div>
									</div>
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
