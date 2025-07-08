import HeroSectionDetailed from "@/components/HeroSectionDetailed";
import JobCard from "@/components/JobCard";
import JoinUsForm from "@/components/JoinUsForm";
import { jobsData, jobsHeaderDescription } from "@/data/jobsData";

export default function Jobs() {
	return (
		<>
			<HeroSectionDetailed
				title="WE ARE GROWING"
				imageSrc="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/job.webp"
				imageAlt="A collage of Thamba's creative work"
				description={jobsHeaderDescription}
			/>
			<div className="flex flex-col">
				{jobsData.map(({ id, ...rest }) => (
					<div key={id} className="border-t border-black">
						<JobCard {...rest} />
					</div>
				))}
			</div>
			<div className="joinUs flex flex-col bg-[#b7c7ff] px-4 py-16 md:flex-row md:px-11 md:py-23">
				<div className="leftPortion mb-8 w-full md:mb-0 md:w-1/3">
					<p className="font-helvetica-light text-3xl">JOIN US</p>
				</div>
				<div className="rightPortion w-full p-6 md:w-2/3">
					<div className="hiringForm">
						<JoinUsForm />
					</div>
				</div>
			</div>
		</>
	);
}
