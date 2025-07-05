import Image from "next/image";
import EmployeeCard from "@/components/EmployeeCard";
import ScrollFadeInServer from "@/components/ScrollFadeInServer";

export default function AboutPage() {
	const description =
		"Thamba began with two friends, numerous late night ideas, and one goal to create work that truly matters. We build brands with heart, strategy with style, and designs that don’t just sit pretty they move people.";

	const employees = [
		{
			bgColor: "#b8d8bd",
			imageSrc:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Team/team-01.avif",
			postTitle: "CHAOS COORDINATOR & DESIGN WHISPERER",
			name: "SHARVARI POHARKAR",
		},
		{
			bgColor: "#c7e4ef",
			imageSrc:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Team/team-02.avif",
			postTitle: "CHEIF DAYDREAMER & PIXEL PERFECTIONIST",
			name: "ADITYA PRATAP",
		},
		{
			bgColor: "#f7ebba",
			imageSrc:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Team/team-03.avif",
			postTitle: "DIGITAL ALCHEMIST",
			name: "SATYAM SINGH",
		},
		{
			bgColor: "#e5c6d8",
			imageSrc:
				"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Team/team-04.avif",
			postTitle: "VISUAL MISCHEIF MAKER",
			name: "CHETANA CHAUHAN",
		},
	];

	const title = "ABOUT THAMBA";

	return (
		<>
			<div className="pt-10 flex flex-col md:flex-row bg-[#facf41] text-black items-start justify-center p-4 border-t-1 border-black">
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4">
					<ScrollFadeInServer yOffset={20} delay={0}>
						<h1 className="text-4xl md:text-6xl font-light p-2 text-center">
							{title}
						</h1>
					</ScrollFadeInServer>
					<ScrollFadeInServer yOffset={20} delay={0.2}>
						<Image src="/about.avif" alt={title} width={500} height={500} />
					</ScrollFadeInServer>
				</div>
				<ScrollFadeInServer
					yOffset={20}
					delay={0.4}
					className="w-full md:w-1/2 p-4 md:p-20"
				>
					<p className="text-xl md:text-4xl font-light text-justify">
						{description}
					</p>
					<div className="text-xl md:text-4xl font-light text-justify pt-10">
						We keep it personal.
					</div>
					<div className="text-xl md:text-4xl font-light text-justify">
						We keep it purposeful.
					</div>
				</ScrollFadeInServer>
			</div>
			<div className="uppercase text-6xl flex font-light bg-[#b8bc6b] text-white text-center justify-center items-center p-10">
				Meet the team
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2">
				{employees.map((employee) => (
					<EmployeeCard
						key={employee.name}
						bgColor={employee.bgColor}
						imageSrc={employee.imageSrc}
						postTitle={employee.postTitle}
						name={employee.name}
					/>
				))}
			</div>
		</>
	);
}
