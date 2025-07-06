import HeroSectionDetailed from "@/components/HeroSectionDetailed";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData";

export default function Projects() {
	const description =
		"Our passion is helping brands connect with their customers through creative vision and unforgettable campaigns. We make brands feel like part of the future, today.";

	return (
		<>
			<HeroSectionDetailed
				title="OUR PROJECTS"
				imageSrc="https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/work.webp"
				imageAlt="A collage of Thamba's creative work"
				description={description}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2">
				{projectsData.map((project, index) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						tag={project.tag}
						imageSrc={project.workImage}
						bgColor={project.bgColor}
						shrinkImage={index === 1 || index === 2 || index === 5}
						path={`/projects/${project.title.toLowerCase()}`}
					/>
				))}
			</div>
		</>
	);
}
