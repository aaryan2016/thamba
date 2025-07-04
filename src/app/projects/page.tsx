import HeroSectionDetailed from "@/components/HeroSectionDetailed"
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  const description =
    "Our passion is helping brands connect with their customers through creative vision and unforgettable campaigns. We make brands feel like part of the future, today."

  return (
    <>
      <HeroSectionDetailed
        title="OUR PROJECTS"
        imageSrc="/work-thamba.avif"
        imageAlt="A collage of Thamba's creative work"
        description={description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  )
}
