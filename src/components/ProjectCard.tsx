import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  imageSrc?: string
  title?: string
  tag?: string
  description?: string
  path?: string
}

export default function ProjectCard({
  imageSrc = "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/OASIS/OASIS%20BRANDGUIDELINES-01.webp",
  title = "PIRUL",
  tag = "Brand Identity, Social",
  description = "A conscious handicraft brand working to prevent forest fires and empower women artisans",
  path = "/",
}: ProjectCardProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden group border-1 border-black">
      <Image
        src={imageSrc}
        alt={title || "Project Image"}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
        {/* Top Right Section */}
        <div className="text-right">
          <h3 className="text-4xl font-extralight">{title}</h3>
          <p className="text-lg font-light uppercase tracking-wider">{tag}</p>
        </div>

        {/* Bottom Section */}
        <div className="flex items-end justify-between">
          <p className="max-w-md text-base font-light">{description}</p>
          <Link
            href={path}
            className="group/link flex shrink-0 items-center justify-center gap-2 font-extralight uppercase text-2xl text-white transition-colors duration-300 hover:text-gray-200"
          >
            <Plus
              size={35}
              strokeWidth={1}
              className="transition-transform duration-300 ease-in-out group-hover/link:rotate-90"
            />
            <span>Info</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
