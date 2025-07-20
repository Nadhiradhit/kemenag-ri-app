"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const link = [
	{
		title: "Beranda",
		url: "/",
	},
	{
		title: "Profil",
		url: "/profil",
	},
	{
		title: "Berita",
		url: "/berita",
	},
	{
		title: "Info",
		url: "/info",
	},
	{
		title: "Galeri",
		url: "/galeri",
	},
	{
		title: "Layanan",
		url: "/layanan",
	},
];

export default function Navbar() {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const isLinkActive = (url: string) => {
		if (pathname === url) return true;
		if (url !== "/" && pathname.startsWith(url)) return true;
		if (url === "/" && pathname === "/") return true;
		return false;
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="p-4 bg-white text-black font-semibold font-manrope shadow-md">
			<div className="flex items-center justify-between container mx-auto">
				<div className="flex items-center w-60">
					<Image
						src={"/assets/logo-kemenag.png"}
						alt="Logo Kemenag"
						width={50}
						height={50}
					/>
					<Link
						href="/"
						className="text-sm md:text-base ml-2 md:ml-4 max-w-[200px] md:max-w-none">
						<span className="hidden md:inline">
							Kementrian Agama Republik Indonesia
						</span>
						<span className="md:hidden">Kemenag RI</span>
					</Link>
				</div>

				<div className="hidden lg:flex">
					{link.map((item, index) => {
						const isActive = isLinkActive(item.url);
						return (
							<Link
								key={index}
								href={item.url}
								className={`text-base ml-4 hover:text-[#006316] transition-colors ${
									isActive ? "text-[#006316] font-bold" : "text-black"
								}`}>
								{item.title}
							</Link>
						);
					})}
				</div>

				<Button
					onClick={toggleMobileMenu}
					variant="ghost"
					className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
					aria-label="Toggle mobile menu">
					{isMobileMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</Button>
			</div>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
					<div className="flex flex-col space-y-2 pt-4">
						{link.map((item, index) => {
							const isActive = isLinkActive(item.url);
							return (
								<Link
									key={index}
									href={item.url}
									onClick={closeMobileMenu}
									className={`text-base py-2 px-4 rounded-md hover:bg-gray-100 hover:text-[#006316] transition-colors ${
										isActive
											? "text-[#006316] font-bold bg-gray-50"
											: "text-black"
									}`}>
									{item.title}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</nav>
	);
}
