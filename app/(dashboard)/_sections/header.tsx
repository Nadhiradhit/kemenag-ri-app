import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FaRegFileAlt } from "react-icons/fa";

import Image from "next/image";
import React from "react";
import { dataInformation } from "@/data/data-information";

export default function DashboardHeader() {
	return (
		<section className="mt-8 lg:mt-16 font-manrope">
			<div className="flex lg:flex-row flex-col items-start lg:items-center gap-8 lg:gap-12">
				<div className="w-full lg:w-2/3">
					<div className="relative overflow-hidden lg:rounded-2xl shadow-2xl">
						<Image
							src="/assets/header-image.jpg"
							alt="Logo Kemenag"
							width={1000}
							height={500}
							quality={100}
							className="w-full h-[300px] lg:h-[400px] object-cover"
						/>

						<div className="absolute inset-0 bg-black/50 lg:rounded-2xl" />
						<div className="absolute inset-0 flex items-center justify-start p-6 lg:p-12">
							<div className="max-w-lg">
								<h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight mb-4">
									Senyum, Ramah, Santun, Cepat dan Teliti
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/3 md:ml-8 px-4">
					<h3 className="text-2xl mb-4 font-semibold">Informasi</h3>
					{dataInformation.map((info, index) => (
						<Dialog key={index}>
							<DialogTrigger className="mb-4 hover:scale-105 transition duration-300 ease-in">
								<div className="cursor-pointer bg-white border border-green-500 w-72 lg:w-96 h-24 p-4 rounded-lg shadow-md flex items-center gap-4">
									<FaRegFileAlt />
									<h2 className="text-start">{info.title}</h2>
								</div>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>{info.title}</DialogTitle>
									<DialogDescription>{info.description}</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</section>
	);
}
