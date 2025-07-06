import FeaturedBanner from "@/components/FeaturedBanner";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductCardHorizontal from "@/components/ProductCardHorizontal";
import StackingImages from "@/components/StackingImages";

export default function Home() {
	const products = [
		{
			direction: false,
			image:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Dravyas/dravyas-01.webp",
			tag: "LABEL & PACKAGING DESIGN",
			path: "/projects/dravyas",
			title: "DRAVYAS",
			bgColor: "bg-[#f7f3e5]",
		},
		{
			direction: true,
			image:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-01.webp",
			tag: "IDENTITY, communication STRATEGY",
			path: "/projects/oasis",
			title: "OASIS VENTURES",
			bgColor: "bg-[#67a4ac]",
		},
		{
			direction: false,
			image:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/BookCovers/portfolio_graphic%20design0.jpg",
			tag: "BOOK COVER, SOCIAL & STATIONERY DESIGN",
			path: "/projects/browser",
			title: "BROWSER",
			bgColor: "bg-[#ee9848]",
		},
	];

	const productsHorizontal = [
		{
			image:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Pirul/P1.gif",
			path: "/projects/pirul",
			title: "PIRUL HANDICARFTS",
			tag: "BRAND IDENTITY, SOCIAL CAMPAIGN",
		},
	];

	return (
		<main>
			<HeroSection />
			<FeaturedBanner />
			{products.map((product) => (
				<ProductCard key={product.title} {...product} />
			))}
			{productsHorizontal.map((product) => (
				<ProductCardHorizontal key={product.title} {...product} />
			))}
			<StackingImages />
		</main>
	);
}
