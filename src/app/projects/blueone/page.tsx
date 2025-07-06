import Image from "next/image";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import projectsData from "@/data/projectsData";

export default function Page() {
	// Find the project by title, case-insensitively
	const project = projectsData.find(
		(p) => p.title.toLowerCase() === "DRIVE THE FURTURE".toLowerCase(),
	);

	if (!project) {
		notFound();
	}

	return (
		<main className="">
			<div className="flex flex-col items-center">
				<ProductDetails />
				{project.imageLinks && project.imageLinks.length > 0 ? (
					project.imageLinks.map((link, index) => (
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
