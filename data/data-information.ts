export type DataInformationItem = {
	id: string;
	title: string;
	description: string;
	image: string;
	link: string;
};

export const dataInformation: DataInformationItem[] = [
	{
		id: "1",
		title: "Kementrian Agama Republik Indonesia",
		description:
			"Berita terbaru dari Kementrian Agama Republik Indonesia. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/assets/image/image-1.jpg",
		link: "https://www.kemenag.go.id/",
	},
	{
		id: "2",
		title: "Berita Kemenag",
		description:
			"Informasi terkini mengenai kegiatan Kementrian Agama. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/assets/image/image-1.jpg",
		link: "https://www.kemenag.go.id/berita",
	},
	{
		id: "3",
		title: "Layanan Publik Kemenag",
		description:
			"Layanan publik yang disediakan oleh Kementrian Agama. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/assets/image/image-1.jpg",
		link: "https://www.kemenag.go.id/layanan",
	},
];
