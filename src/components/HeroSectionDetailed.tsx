import Image from "next/image"
import ScrollFadeInServer from "@/components/ScrollFadeInServer"

interface HeroSectionDetailedProps {
  title: string
  imageSrc: string
  imageAlt: string
  description: string
}

export default function HeroSectionDetailed({
  title,
  imageSrc,
  imageAlt,
  description,
}: HeroSectionDetailedProps) {
  return (
    <div className="pt-10 flex flex-col md:flex-row bg-[#facf41] text-black items-start justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4">
        <ScrollFadeInServer yOffset={20} delay={0}>
          <h1 className="text-4xl md:text-6xl font-light p-2 text-center">
            {title}
          </h1>
        </ScrollFadeInServer>
        <ScrollFadeInServer yOffset={20} delay={0.2}>
          <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
        </ScrollFadeInServer>
      </div>
      <ScrollFadeInServer
        yOffset={20}
        delay={0.4}
        className="w-full md:w-1/2 p-4 md:p-20"
      >
        <p className="text-xl md:text-5xl font-light">{description}</p>
      </ScrollFadeInServer>
    </div>
  )
}
