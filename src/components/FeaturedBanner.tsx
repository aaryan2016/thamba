import ScrollFadeInServer from "@/components/ScrollFadeInServer"

export default function FeaturedBanner() {
  return (
    <>
      {/* Attach the ref to the main container to observe its visibility */}
      {/* The main div itself doesn't need to be a motion.div if its children are */}
      <div className="h-fit border-2 border-black p-8 text-black">
        <div className="container mx-auto flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
          <ScrollFadeInServer
            className="w-full md:w-1/2"
            yOffset={50}
            delay={0}
          >
            <div className="text-4xl font-light md:text-6xl">
              FEATURED WORK
            </div>
          </ScrollFadeInServer>
          <ScrollFadeInServer
            className="hidden w-full flex-col md:flex md:w-1/2"
            yOffset={50}
            delay={0.2}
          >
            <div className="font-light md:text-2xl">
              SELECTED PROJECTS THAT UNITE RESEARCH,
            </div>
            <div className="font-light md:text-2xl">
              STRATEGY & CREATIVE FIREPOWER.
            </div>
          </ScrollFadeInServer>
        </div>
      </div>
    </>
  )
}
