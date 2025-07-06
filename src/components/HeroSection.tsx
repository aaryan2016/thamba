export default function HeroSection() {
	return (
		<div className="bg-[#facf41] text-black h-screen flex flex-col p-5 pt-10">
			<div className="">
				{/* 
        This is the key change. We wrap the three text elements in a single
        container that uses `inline-flex` and `flex-col`.
      */}
				<div className="inline-flex flex-col">
					{/* These are the two headline elements */}
					<div className="text-6xl md:text-8xl">ORDINARY IS TAKEN.</div>
					<div className="text-6xl md:text-8xl">WANT SOMETHING ELSE?</div>

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
