import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { dataInformation } from "@/data/data-information";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

import Image from "next/image";

export default function InfoDashboard() {
	return (
		<section className="mt-16 font-manrope px-4 lg:px-0">
			<div className="container mx-auto text-center">
				<h1 className="text-2xl font-semibold">Informasi</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
					{dataInformation.map((info, index) => (
						<div className="bg-white border border-green-500 h-24 p-4 rounded-lg shadow-md flex items-center gap-4">
							<Dialog key={index}>
								<DialogTrigger className="hover:scale-105 transition duration-300 ease-in-out">
									<div className="flex items-center justify-center gap-4">
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
						</div>
					))}
				</div>
			</div>
			<div className="container mx-auto text-center my-8">
				<h1 className="text-2xl font-semibold">Infografis</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
					<div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
						<Image
							src="/assets/image/image-2.jpeg"
							alt="Infografis 1"
							fill
							className="object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
					<div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
						<Image
							src="/assets/image/image-2.jpeg"
							alt="Infografis 1"
							fill
							className="object-cover transition-transform duration-300 hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
