import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	imageSrc?: string;
	title?: string;
	tag?: string;
	description?: string;
	path?: string;
	shrinkImage?: boolean; // new
	bgColor?: string; // new
}

export default function ProjectCard({
	imageSrc = "",
	title = "",
	tag = "",
	description = "",
	path = "/",
	shrinkImage = false,
	bgColor = "",
}: ProjectCardProps) {
	return (
		<div
			className="relative h-[800px] w-full overflow-hidden group flex items-center"
			style={{ backgroundColor: bgColor }}
		>
			{shrinkImage ? (
				// Smaller, centered image
				<div className="relative  mt-10 h-[400px] w-[400px]">
					<Image
						src={imageSrc}
						alt={title || "Project Image"}
						fill
						className="object-covershadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
					/>
				</div>
			) : (
				// Full cover image
				<Image
					src={imageSrc}
					alt={title || "Project Image"}
					fill
					className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
				/>
			)}
			<div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
			<div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
				{/* Top Right Section */}
				<div className="text-left">
					<h3 className="text-6xl font-extralight">{title}</h3>
					<p className="text-2xl font-light uppercase tracking-wider pt-5">
						{tag}
					</p>
				</div>

				{/* Bottom Section */}
				<div className="flex items-end justify-between">
					<p className="max-w-md font-light text-xl">{description}</p>
					<Link
						href={path}
						className="group/link flex shrink-0 items-center justify-center gap-2 font-extralight uppercase text-2xl text-white transition-colors duration-300 hover:text-gray-200"
					>
						<Plus
							size={35}
							strokeWidth={1}
							className="transition-transform duration-300 ease-in-out group-hover/link:rotate-90"
						/>
						<span>Info</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
