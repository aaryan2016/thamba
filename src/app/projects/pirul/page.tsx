import Image from "next/image";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import projectsData from "@/data/projectsData";

export default function Page() {
	// Find the project by title, case-insensitively
	const project = projectsData.find(
		(p) => p.title.toLowerCase() === "pirul".toLowerCase(),
	);

	if (!project) {
		notFound();
	}

	return (
		<main className="">
			<div className="flex flex-col items-center">
				<ProductDetails
					title="PIRUL"
					client="PIRUL"
					typeOfClient="Handicrafts"
					category={["Brand Identity", "Social Media", "Campaign"]}
					brief="Pirul approached us to build a meaningful brand identity. They needed a logo, packaging, and visual language that reflected their mission of preventing forest fires and empowering women artisans."
					whatWeDid="We designed a brand identity inspired by nature—crafting the logo, curating an earthy color palette, and creating packaging that told their story. Every element reflected their roots and purpose."
					result="The new branding gave Pirul.org a strong, memorable presence. The thoughtfully designed packaging made their products stand out, helping them connect with conscious buyers who resonated with their story. It not only boosted product visibility but also positioned Pirul.org as a purpose-led brand in the sustainability space. The cohesive design system opened doors for new partnerships, supported community-building efforts, and laid the foundation for future growth, both in local markets and on digital platforms."
				/>
				{project.imageLinks && project.imageLinks.length > 0 ? (
					project.imageLinks.map((link, index) => (
						<div key={link} className="relative w-full">
							<Image
								src={link}
								alt={`${project.title} - Image ${index + 1}`}
								width={1200}
								height={800}
								className="shadow-lg w-full h-auto"
							/>
						</div>
					))
				) : (
					<p>No images available for this project.</p>
				)}
			</div>
		</main>
	);
}
