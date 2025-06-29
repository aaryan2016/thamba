import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface BottomNavBarProps {
  projects: string[]
  currentSlug: string
}

export default function BottomNavBar({
  projects,
  currentSlug,
}: BottomNavBarProps) {
  const currentIndex = projects.indexOf(currentSlug)

  const prevProjectSlug =
    currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProjectSlug =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      <div className="h-fit w-full border-2 border-black p-8 text-black flex justify-between items-center">
        {prevProjectSlug ? (
          <Link
            href={`/projects/${prevProjectSlug}`}
            className="uppercase text-2xl font-light flex items-center gap-2 hover:underline"
          >
            <ChevronLeft />
            <div>Previous</div>
          </Link>
        ) : (
          <div /> // Placeholder to maintain layout
        )}
        {nextProjectSlug ? (
          <Link
            href={`/projects/${nextProjectSlug}`}
            className="uppercase text-2xl font-light flex items-center gap-2 hover:underline"
          >
            <div>Next</div>
            <ChevronRight />
          </Link>
        ) : (
          <div /> // Placeholder to maintain layout
        )}
      </div>
    </>
  )
}
