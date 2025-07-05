"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ScrollFadeInServer from "./ScrollFadeInServer";

interface EmployeeCardProps {
	bgColor: string;
	imageSrc: string;
	postTitle: string;
	name: string;
}

export default function EmployeeCard({
	bgColor,
	imageSrc,
	postTitle,
	name,
}: EmployeeCardProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });
	// `once: true` means it animates only first time it comes into view
	// `amount: 0.3` means 30% of the element should be visible to trigger

	return (
		<div
			ref={ref}
			className="flex flex-col items-center justify-center w-full h-full p-20 gap-4"
			style={{ backgroundColor: bgColor }}
		>
			<motion.div
				initial={{ rotateX: -90, rotateY: 90 }}
				animate={isInView ? { rotateX: 0, rotateY: 0 } : {}}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<Image src={imageSrc} alt={name} width={500} height={500} />
			</motion.div>
			<ScrollFadeInServer yOffset={20} delay={0.2}>
				<div className="uppercase font-light text-xl border-b-2 border-black">
					{postTitle}
				</div>
			</ScrollFadeInServer>
			<ScrollFadeInServer yOffset={20} delay={0.4}>
				<div className="uppercase font-light text-2xl">{name}</div>
			</ScrollFadeInServer>
		</div>
	);
}
