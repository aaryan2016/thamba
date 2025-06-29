import projectsData from "@/data/projectsData"
import { notFound } from "next/navigation"
import Image from "next/image"

export default async function Page() {
  // In some Next.js rendering modes, `params` can be a promise-like object.
  // Awaiting it ensures we have the resolved value before using its properties.

  // Find the project by title, case-insensitively
  const project = projectsData.find(
    (project) => project.title.toLowerCase() === "oasis"
  )

  if (!project) {
    notFound()
  }

  return (
    <main className="">
      <div className="flex flex-col items-center">
        {project.imageLinks.map((link, index) => {
          // Skip image at index 11 as it's rendered with index 10
          if (index === 10) {
            return null
          }

          // For image at index 10, render it side-by-side with image at index 11
          if (index === 9) {
            const nextLink = project.imageLinks[10]
            if (nextLink) {
              return (
                <div
                  key={`${link}-${nextLink}`}
                  className="flex w-full flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-1/2">
                    <Image
                      src={link}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="shadow-lg w-full h-auto"
                    />
                  </div>
                  <div className="relative w-full md:w-1/2">
                    <Image
                      src={nextLink}
                      alt={`${project.title} - Image ${index + 2}`}
                      width={600}
                      height={400}
                      className="shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              )
            }
          }

          // Default: render a single full-width image
          return (
            <div key={link} className="relative w-full">
              <Image
                src={link}
                alt={`${project.title} - Image ${index + 1}`}
                width={1200}
                height={800}
                className="shadow-lg w-full h-auto"
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}
