import HeroSectionDetailed from "@/components/HeroSectionDetailed";
import JobCard from "@/components/JobCard";
import { jobsData, jobsHeaderDescription } from "@/data/jobsData";

const jobs = () => {
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
		</main>
	);
};

export default jobs;
