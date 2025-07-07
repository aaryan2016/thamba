// src/app/components/Illustrations.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type IllustrationProps = {
	src: string;
	className?: string;
	delay: number;
	width?: number;
	height?: number;
};

export function Illustration({
	src,
	className,
	delay,
	width = 150,
	height = 150,
}: IllustrationProps) {
	return (
		<motion.div
			// Add pointer-events-none HERE. This makes the div non-interactive.
			className={`absolute select-none pointer-events-none ${className}`}
			initial={{ opacity: 0, y: 20, scale: 0.9 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 20, scale: 1.1 }}
			transition={{ duration: 0.5, delay: delay }}
		>
			<Image src={src} alt="" width={width} height={height} priority />
		</motion.div>
	);
}
