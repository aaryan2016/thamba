"use client";
import Image from "next/image";

type IllustrationProps = {
	src: string;
	top?: number | string;
	left?: number | string;
	className?: string;
	delay: number | string;
};

export function Illustration({
	src,
	top,
	left,
	className,
	delay,
}: IllustrationProps) {
	return (
		<div
			className={`absolute
        transition-opacity duration-700 ${delay} ${className}`}
			style={{ top, left }}
		>
			<Image src={src} alt="" width={150} height={150} />
		</div>
	);
}
