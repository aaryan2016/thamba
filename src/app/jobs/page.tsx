import HeroSectionDetailed from "@/components/HeroSectionDetailed"
import JobCard from "@/components/JobCard"
import { jobsData, jobsHeaderDescription } from "@/data/jobsData"

const jobs = () => {
    return (
        <main>
            <HeroSectionDetailed
                title="WE ARE GROWING"
                imageSrc="/jobs-thamba.jpg"
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
    )
}

export default jobs