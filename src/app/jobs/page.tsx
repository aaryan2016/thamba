import HeroSectionDetailed from "@/components/HeroSectionDetailed";
import JobCard from "@/components/JobCard";
import JoinUsForm from "@/components/JoinUsForm";
import { jobsData, jobsHeaderDescription } from "@/data/jobsData";

export default function Jobs() {
	return (
		<main>
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
			<div className="joinUs flex bg-[#b7c7ff] py-23 px-11">
				<div className="leftPortion w-164">
					<p className="font-helvetica-light text-3xl">JOIN US</p>
				</div>
				<div className="rightPortion p-6 w-171">
					<div className="hiringForm">
						<JoinUsForm />
					</div>
				</div>
			</div>
		</main>
	);
}
