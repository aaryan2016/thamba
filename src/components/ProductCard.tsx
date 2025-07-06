import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeInServer from "./ScrollFadeInServer";

interface ProductCardProps {
	direction?: boolean;
	image?: string;
	tag?: string;
	path?: string;
	title?: string;
	bgColor?: string;
}

export default function ProductCard({
	direction = false,
	image = "",
	tag = "",
	path = "/",
	title = "",
	bgColor = "bg-white",
}: ProductCardProps) {
	const directionClass = direction ? "md:flex-row-reverse" : "md:flex-row";

	return (
		<div
			className={`flex flex-col overflow-hidden items-stretch shadow-lg ${directionClass}`}
		>
			{/* Image Section */}
			<div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[700px]">
				<Image fill className="object-cover" src={image} alt={title} />
			</div>

			{/* Content Section */}
			<ScrollFadeInServer
				yOffset={20}
				className={`flex w-full flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12 ${bgColor}`}
			>
				<h2 className="border-b-2 border-black pb-4 text-3xl font-extralight text-gray-900 md:text-5xl">
					{title}
				</h2>
				<div className="flex flex-nowrap items-center justify-between gap-4">
					<p className="text-2xl font-light uppercase tracking-wider text-black">
						{tag}
					</p>
					<Link
						href={path}
						className="group flex items-center justify-center gap-2 font-extralight uppercase text-2xl text-gray-900 transition-colors duration-300 hover:text-black"
					>
						<Plus
							size={35}
							strokeWidth={1}
							className="transition-transform duration-300 ease-in-out group-hover:rotate-90"
						/>
						<span>Info</span>
					</Link>
				</div>
			</ScrollFadeInServer>
		</div>
	);
}
