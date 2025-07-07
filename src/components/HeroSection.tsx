"use client";
import { useEffect, useState } from "react";
import { Illustration } from "./Illustrations";

export default function HeroSection() {
	const [hasInteracted, setHasInteracted] = useState(false);

	useEffect(() => {
		const handleUserInteract = () => setHasInteracted(true);

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
		<div className="bg-[#facf41] text-black h-screen flex flex-col p-5 pt-10">
			<div className="">
				{/* 
        This is the key change. We wrap the three text elements in a single
        container that uses `inline-flex` and `flex-col`.
      */}
				<div className="inline-flex flex-col relative">
					{/* These are the two headline elements */}
					<div className="text-6xl md:text-8xl">ORDINARY IS TAKEN.</div>
					<div className="text-6xl md:text-8xl">WANT SOMETHING ELSE?</div>

					{hasInteracted && (
						<div>
							<Illustration
								src="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/illustration1.webp"
								top="-20%"
								left="85%"
								delay="delay-200"
							/>

							<Illustration
								src="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/illustration2.webp"
								top="90%"
								left="40%"
								delay="delay-500"
							/>

							<Illustration
								src="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/illustration3.webp"
								top="150%"
								left="85%"
								delay="delay-700"
							/>
						</div>
					)}

					{/* 
       				   This is the agency line. We remove `text-right` and add `self-end` 
        			   to align it to the end of the flex container.
       				 */}
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
