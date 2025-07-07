// src/app/page.tsx (or wherever your HeroSection is)

"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Illustration } from "@/components/Illustrations";

export default function HeroSection() {
	const [hasInteracted, setHasInteracted] = useState(false);

	useEffect(() => {
		const handleUserInteract = () => {
			setHasInteracted(true);
			window.removeEventListener("mousemove", handleUserInteract);
			window.removeEventListener("mousedown", handleUserInteract);
			window.removeEventListener("keydown", handleUserInteract);
			window.removeEventListener("scroll", handleUserInteract);
			window.removeEventListener("touchstart", handleUserInteract);
		};

		window.addEventListener("mousemove", handleUserInteract);
		window.addEventListener("mousedown", handleUserInteract);
		window.addEventListener("keydown", handleUserInteract);
		window.addEventListener("scroll", handleUserInteract);
		window.addEventListener("touchstart", handleUserInteract);

		return () => {
			window.removeEventListener("mousemove", handleUserInteract);
			window.removeEventListener("mousedown", handleUserInteract);
			window.removeEventListener("keydown", handleUserInteract);
			window.removeEventListener("scroll", handleUserInteract);
			window.removeEventListener("touchstart", handleUserInteract);
		};
	}, []);

	return (
		<div className="relative bg-[#facf41] text-black h-screen flex flex-col p-5 pt-10 overflow-hidden">
			{/* ===== ILLUSTRATION LAYER (at default z-index of 0) ===== */}
			<AnimatePresence>
				{hasInteracted && (
					<>
						<Illustration
							src="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/illustration1.webp"
							className="scale-50 top-[10%] left-[65%] lg:top-[5%] lg:left-[80%] lg:scale-100"
							delay={0.2}
							width={180}
							height={180}
						/>
						<Illustration
							src="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/illustration2.webp"
							className="scale-50 top-[40%] left-[-10%] lg:top-[30%] lg:left-[35%] lg:scale-100"
							delay={0.5}
							width={200}
							height={200}
						/>
						<Illustration
							src="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/illustration3.webp"
							className="top-[55%] left-[70%] lg:top-[50%] lg:left-[70%] lg:scale-100"
							delay={0.7}
							width={200}
							height={200}
						/>
					</>
				)}
			</AnimatePresence>

			{/* ===== CONTENT LAYER (lifted above with z-index) ===== */}
			{/* 
        This is the key change. We wrap all content in a div with `relative` 
        to create a new stacking context and `z-10` to lift it up.
      */}
			<div className="relative z-10">
				<div className="inline-flex flex-col">
					<div className="text-6xl md:text-8xl">ORDINARY IS TAKEN.</div>
					<div className="text-6xl md:text-8xl">WANT SOMETHING ELSE?</div>
					<div className="text-2xl self-end pt-2">THAMBA. CREATIVE AGENCY</div>
				</div>

				<div className="pt-20 w-full md:w-2/3 font-light ">
					<div className="text-2xl md:text-5xl">WHAT WE DO</div>
					<div className="text-xl md:text-3xl pt-5">
						We are a creative design studio where we build brands that look
						sharp, feel right, and make noise. From strategy to design, we craft
						everything you need to stand out.
					</div>
				</div>
			</div>
		</div>
	);
}
