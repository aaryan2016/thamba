"use client";

import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { type ReactNode, useEffect, useRef } from "react";

interface ScrollFadeInProps {
	children: ReactNode;
	delay?: number;
	duration?: number;
	yOffset?: number; // How far it slides from (e.g., 50 for bottom, -50 for top)
	amount?: number; // useInView amount
	once?: boolean; // useInView once
	className?: string; // Optional className to pass to the motion.div
}

export default function ScrollFadeIn({
	children,
	delay = 0,
	duration = 0.5,
	yOffset = 50,
	amount = 0.5,
	once = true,
	className = "",
}: ScrollFadeInProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once, amount });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	const variants = {
		hidden: { opacity: 0, y: yOffset },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration, ease: easeOut, delay },
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={controls}
			className={className}
		>
			{children}
		</motion.div>
	);
}
