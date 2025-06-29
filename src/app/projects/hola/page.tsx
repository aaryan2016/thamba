import projectsData from "@/data/projectsData"
import { notFound } from "next/navigation"
import Image from "next/image"

export default async function Page() {
  // In some Next.js rendering modes, `params` can be a promise-like object.
  // Awaiting it ensures we have the resolved value before using its properties.

  // Find the project by title, case-insensitively
  const project = projectsData.find(
    (project) => project.title.toLowerCase() === "hola"
  )

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <div className="w-full">
        <Image
          src={project.imageLinks[0]}
          alt={project.title}
          width={1200}
          height={800}
          className=" w-full h-auto"
        />
      </div>
      <div>Item 2</div>

      <div className="flex w-full items-center">
        <div className="w-1/2 p-20 bg-white">
          <Image
            src={project.imageLinks[2]}
            alt={project.title}
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <Image
            src={project.imageLinks[3]}
            alt={project.title}
            width={600}
            height={600}
            className=" w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full">
        <Image
          src={project.imageLinks[1]}
          alt={project.title}
          width={1200}
          height={800}
          className=" w-full h-auto"
        />
      </div>
      <div className="flex w-full items-center">
        <div className="w-1/2 p-20 bg-white">
          <Image
            src={project.imageLinks[5]}
            alt={project.title}
            width={800}
            height={800}
            className=" w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <Image
            src={project.imageLinks[6]}
            alt={project.title}
            width={800}
            height={1200}
            className=" w-full h-auto"
          />
        </div>
      </div>
      <div>
        <Image
          src={project.imageLinks[4]}
          alt={project.title}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </main>
  )
}
