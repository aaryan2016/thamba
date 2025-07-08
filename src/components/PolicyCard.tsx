import ScrollFadeInServer from "./ScrollFadeInServer";

export default function PolicyCard({
	title,
	desc,
}: {
	title: string;
	desc: string;
}) {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center p-10 md:p-20 bg-[#fffdf5] text-black border-1 border-black gap-5 ">
			<div className="uppercase text-2xl md:text4xl w-full md:w-1/2">
				<ScrollFadeInServer yOffset={20} delay={0}>
					{title}
				</ScrollFadeInServer>
			</div>
			<div className="w-full md:w-1/2 text-justify text-base md:text-lg">
				<ScrollFadeInServer yOffset={20} delay={0.1}>
					{desc}
				</ScrollFadeInServer>
			</div>
		</div>
	);
}
