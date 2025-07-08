export interface Project {
	id: number;
	title: string;
	description: string;
	tag: string;
	heroImage: string,
	workImage: string,
	imageLinks: string[];
	bgColor?: string; // new

}

const projectsData: Project[] = [
	{
		id: 1,
		title: "PIRUL",
		description: "A conscious handicraft brand working to prevent forest fires and empower women artisans",
		tag: "BRAND IDENTITY, SOCIAL",
		heroImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P1.gif",
		workImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P5hero-RwUuN1urFTqvlRv5wEiAsQsh4OuH7L.jpg",
		imageLinks: [
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P1.gif",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P2.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P3.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P4.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P5.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P6.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P7.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P8.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P9.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P10.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P11.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P12.webp",
		]
	},
	{
		id: 2,
		title: "DRAVYAS",
		description: "Dravyas is an Ayurvedic wellness brand dedicated to reviving ancient herbal traditions for modern lifestyles.",
		tag: "LABEL & PACKAGING DESIGN",
		heroImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-01.webp",
		workImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-02.webp",
		imageLinks: [
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-01.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-02.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-03.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-04.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-05.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-06.webp",
		],
		bgColor : "#b8bc6b",

	},
	{
		id: 3,
		title: "BROWSER",
		description: "BROWSER is a publishing house and literary platform dedicated to promoting writers through publishing, events, and community engagement.",
		tag: "BOOK COVERS & ILLUSTRATIONS",
		heroImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design0.jpg",
		workImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/Untitled_Artwork-vnQgbAieEto8LCljDmMV0iOBV79uj0.webp",
		imageLinks: [
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design0.jpg",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design1.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design2.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design3.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design4.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design5.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design6.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design7.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design8.webp",
		],
		bgColor : "#ee9848",

	},

	{
		id: 4,
		title: "OASIS",
		description: "Oasis is the perfect destination for those on a road trip seeking a comfortable and convenient stay.",
		tag: "BRAND IDENTITY, COMMUNICATION STRATEGY",
		heroImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-01.webp",
		workImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-01.webp",
		imageLinks: [
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-01.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-02.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-03.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-04.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-05.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-06.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-07.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-08.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-09.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-10.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-11.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-12.webp",
		],
	},
	{
		id: 5,
		title: "Bluone",
		description: "A publishing house dedicated to bringing thought-provoking and impactful stories to readers worldwide",
		tag: "SOCIAL MEDIA IDENTITY, CAMPAIGN",
		heroImage: "",
		workImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-14-Fe7jpCIziPnyL2XLCOff8QAt23d178.jpg",
		imageLinks: [
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-01.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-02.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-03.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-04.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-05.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-06.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-07.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-08.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-09.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-10.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-11.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-12.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Bluone/Bluone%20Social%20media%20Guidelines%20_final-13.webp",
		]
	},
	{
		id: 6,
		title: "HOLA",
		tag: "BRANDING, IDENTITY & COLLATERALS",
		description: "HOLA is a premium unisex salon and spa offering expert grooming and luxurious self-care experiences.",
		heroImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image1.webp",
		workImage: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image1.webp",
		imageLinks: [
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image1.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image2.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image3.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image4.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image5.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image6.webp",
			"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/HOLA/image7.webp",
		],
		bgColor : "#272626",
	},

];

export default projectsData;
