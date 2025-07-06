import Image from "next/image";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import projectsData from "@/data/projectsData";

export default async function Page() {
	// Find the project by title, case-insensitively
	const project = projectsData.find(
		(project) => project.title.toLowerCase() === "dravyas",
	);

	if (!project) {
		notFound();
	}

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<div className="w-full">
				<Image
					src={project.heroImage}
					alt={project.title}
					width={1200}
					height={800}
					className=" w-full h-auto"
				/>
			</div>
			<ProductDetails />
			<div className="flex flex-col md:flex-row w-full">
				<div className="w-full md:w-1/2 bg-white">
					<Image
						src={project.imageLinks[1]}
						alt={project.title}
						width={800}
						height={800}
						className="w-full h-auto"
					/>
				</div>
				<div className="w-full md:w-1/2 p-30 bg-[#7a6340]">
					<Image
						src={project.imageLinks[2]}
						alt={project.title}
						width={800}
						height={800}
						className=" w-full h-auto"
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full">
				<div className="w-full md:w-1/2 p-30 bg-[#7a6340]">
					<Image
						src={project.imageLinks[3]}
						alt={project.title}
						width={800}
						height={800}
						className=" w-full h-auto"
					/>
				</div>
				<div className="w-full md:w-1/2 overflow-hidden">
					<Image
						src={project.imageLinks[4]}
						alt={project.title}
						width={800}
						height={1200}
						className=" w-full h-auto"
					/>
				</div>
			</div>
			<div>
				<Image
					src={project.imageLinks[5]}
					alt={project.title}
					width={1200}
					height={800}
					className="w-full h-auto"
				/>
			</div>
		</main>
	);
}
