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
    <main className="container mx-auto">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
        {project.tag && (
          <p className="text-md md:text-lg text-gray-500 uppercase tracking-widest">
            {project.tag}
          </p>
        )}
      </div>

      {project.description && project.description.length > 0 && (
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
          {project.description}
        </p>
      )} */}

      <div className="flex flex-col items-center">
        {project.imageLinks.map((link, index) => (
          <div key={link} className="relative w-full">
            <Image
              src={link}
              alt={`${project.title} - Image ${index + 1}`}
              width={1200}
              height={800}
              className="shadow-lg w-full h-auto"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
