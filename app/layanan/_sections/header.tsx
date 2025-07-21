import Image from "next/image";
import React from "react";

export default function LayananHeader({ title }: any) {
	return (
		<div className="relative overflow-hidden font-manrope">
			<Image
				src="/assets/header-image-2.png"
				alt="Logo Kemenag"
				width={1000}
				height={500}
				quality={100}
				className="w-full h-[300px] lg:h-[400px] object-cover"
			/>
			<div className="absolute inset-0 bg-black/20 rounded-2xl" />

			<div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
				<h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight mb-4">
					{title}
				</h1>
			</div>
		</div>
	);
}
