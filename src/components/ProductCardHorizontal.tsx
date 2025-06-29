import Link from "next/link"
import { Plus } from "lucide-react"
import ScrollFadeInServer from "./ScrollFadeInServer"
import Image from "next/image"

interface ProductCardHorizontalProps {
  image?: string
  tag?: string
  path?: string
  title?: string
}

export default function ProductCardHorizontal({
  image = "",
  tag = "",
  path = "/",
  title = "",
}: ProductCardHorizontalProps) {
  return (
    <div
      className={`mx-auto flex w-full flex-col overflow-hidden bg-white shadow-lg border-b-2 border-black`}
    >
      {/* Image Section */}
      <div className="relative h-[80vh]">
        <Image
          className="h-full w-full object-cover"
          src={image}
          alt={`Product image for ${title}`}
          width={1200}
          height={800}
        />
        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center bg-black/20 p-8 md:p-12">
          <h2 className="w-full border-b-2 border-white pb-4 text-4xl font-extralight text-white md:w-1/2 md:text-8xl">
            {title}
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <ScrollFadeInServer
        yOffset={20}
        className="w-full p-8 bg-black text-white"
      >
        <div className="flex flex-nowrap items-center justify-between gap-4">
          <p className="text-2xl font-light uppercase">{tag}</p>
          <Link
            href={path}
            className="group flex items-center justify-center gap-2 font-extralight uppercase text-2xl transition-colors duration-300 text-white"
          >
            <Plus
              size={35}
              strokeWidth={1}
              className="transition-transform duration-300 ease-in-out group-hover:rotate-90 text-white"
            />
            <span>Info</span>
          </Link>
        </div>
      </ScrollFadeInServer>
    </div>
  )
}
