"use client";

import {
	type MotionValue,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// --- Data remains the same ---
const imageData = [
	{
		src: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/ClientList/01.webp",
		title: "Pirul",
	},
	{
		src: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/ClientList/02.webp",
		title: "Oasis",
	},
	{
		src: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/ClientList/03.webp",
		title: "Bhargavi Amirineni",
	},
	{
		src: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/ClientList/04.webp",
		title: "Hola",
	},
	{
		src: "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/ClientList/05.webp",
		title: "Irva",
	},
];

// --- NEW: Child component for each Image Card ---
function ImageCard({
	i,
	item,
	scrollYProgress,
	total,
}: {
	i: number;
	item: { src: string; title: string };
	scrollYProgress: MotionValue<number>;
	total: number;
}) {
	// Now, all hooks are called at the top level of the ImageCard component
	const progressStep = 1 / total;
	const cardProgress = useTransform(
		scrollYProgress,
		[i * progressStep, (i + 1) * progressStep],
		[0, 1],
	);

	const y = useTransform(cardProgress, [0, 1], [200, -i * 8]);
	const rotate = useTransform(cardProgress, [0, 1], [0, (i - 1) * 3]);
	const scale = useTransform(cardProgress, [0, 1], [0.8, 1 - i * 0.05]);
	const opacity = useTransform(cardProgress, [0, 0.3, 1], [0, 1, 1]);

	return (
		<motion.div
			className="absolute inset-0"
			style={{
				y,
				rotate,
				scale,
				opacity,
				zIndex: i,
			}}
		>
			<Image
				src={item.src}
				alt={item.title}
				width={320} // Add width and height for Next.js Image component
				height={384}
				className="w-full h-full object-cover shadow-2xl"
			/>
		</motion.div>
	);
}

// --- NEW: Child component for each Animated Title ---
function AnimatedTitle({
	i,
	item,
	scrollYProgress,
	total,
}: {
	i: number;
	item: { src: string; title: string };
	scrollYProgress: MotionValue<number>;
	total: number;
}) {
	// Hooks are at the top level of the AnimatedTitle component
	const progressStep = 1 / total;

	const titleOpacity = useTransform(
		scrollYProgress,
		[
			(i - 0.1) * progressStep,
			i * progressStep + 0.5 * progressStep,
			(i + 0.9) * progressStep,
			(i + 1) * progressStep,
		],
		[0, 1, 1, 0],
	);

	const titleProgress = useTransform(
		scrollYProgress,
		[i * progressStep, (i + 1) * progressStep],
		[0, 1],
	);
	const titleX = useTransform(titleProgress, [0, 1], [50, 0]);
	const titleScale = useTransform(titleProgress, [0, 1], [0.9, 1]);

	return (
		<motion.div
			className="absolute left-0 top-1/4 -translate-y-1/2 w-full"
			style={{
				x: titleX,
				opacity: titleOpacity,
				scale: titleScale,
			}}
		>
			<h2 className="text-3xl md:text-6xl font-extralight text-black text-center md:text-left md:text-nowrap uppercase">
				{item.title}
			</h2>
		</motion.div>
	);
}

// --- Main component is now much cleaner ---
export default function StackingImages() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end center"],
	});

	return (
		<div ref={containerRef} className="relative h-[300vh] bg-gray-100 p-20">
			{/* Header Title */}
			<div className="sticky top-20 py-10 text-center px-4">
				<h1 className="text-5xl md:text-8xl font-extralight text-gray-900 tracking-wide">
					TRUSTED BY
				</h1>
			</div>

			<div className="sticky top-56 flex justify-center items-center px-4">
				<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
					{/* Images Section */}
					<div className="relative w-80 h-96">
						{imageData.map((item, i) => (
							// We render the new component inside the map
							<ImageCard
								key={item.src}
								i={i}
								item={item}
								scrollYProgress={scrollYProgress}
								total={imageData.length}
							/>
						))}
					</div>

					{/* Titles Section */}
					<div className="relative w-80 md:w-auto h-48 md:h-96 flex items-center">
						{imageData.map((item, i) => (
							// We render the new component inside the map
							<AnimatedTitle
								key={item.title}
								i={i}
								item={item}
								scrollYProgress={scrollYProgress}
								total={imageData.length}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
