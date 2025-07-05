"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

interface ScrollFadeInProps {
	children: ReactNode;
	delay?: number;
	duration?: number;
	yOffset?: number;
	amount?: number; // Not used directly in native IO, but could map to threshold
	once?: boolean;
	className?: string;
}

export default function ScrollFadeInServer({
	children,
	delay = 0,
	duration = 0.5,
	yOffset = 50,
	amount = 0.5,
	once = false,
	className = "",
}: ScrollFadeInProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (once && element) {
						observer.unobserve(element);
					}
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{
				threshold: amount,
			},
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [once, amount]);

	return (
		<div
			ref={ref}
			className={className}
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateY(0px)" : `translateY(${yOffset}px)`,
				transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
			}}
		>
			{children}
		</div>
	);
}
