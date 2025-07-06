import Image from "next/image";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import projectsData from "@/data/projectsData";

export default function Page() {
	// Find the project by title, case-insensitively
	const project = projectsData.find(
		(p) => p.title.toLowerCase() === "browser".toLowerCase(),
	);

	if (!project) {
		notFound();
	}

	return (
		<main className="">
			<div className="flex flex-col items-center">
				<ProductDetails
					title="BOOK COVERS & ILLUSTRATIONS"
					client="The Browser"
					typeOfClient="Publishing"
					category={["Book Covers", "Layout & Stationery Design"]}
					brief="We partnered with BROWSER on an ongoing basis, designing book covers across genres, curated social media creatives, and elegant stationery."
					whatWeDid="We designed book covers across genres, curated social media creatives, and elegant stationery."
					result="Our collaboration helped BROWSER build a consistent and engaging brand presence, both in print and digital spaces. The refreshed book cover designs elevated the perceived value of their publications, while the cohesive social media visuals increased engagement with their author community. This partnership positioned BROWSER as not just a publisher, but a creative ecosystem for emerging and established writers."
				/>
				{project.imageLinks && project.imageLinks.length > 0 ? (
					// Use slice(1) to create a new array without the first element
					project.imageLinks
						.slice(1)
						.map((link, index) => (
							<div key={link} className="relative w-full">
								<Image
									src={link}
									// We add 2 to the index for the alt text because slice(1)
									// makes the second image (at index 1) the new first image (at index 0)
									alt={`${project.title} - Image ${index + 2}`}
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
