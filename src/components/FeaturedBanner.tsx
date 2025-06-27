"use client"

import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function FeaturedBanner() {
  return (
    <>
      {/* Attach the ref to the main container to observe its visibility */}
      {/* The main div itself doesn't need to be a motion.div if its children are */}
      <div className=" text-black h-fit p-8  border-2 border-black">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <ScrollFadeIn
            className="w-1/2 flex text-nowrap"
            yOffset={50}
            delay={0}
          >
            <div className="text-6xl font-light">FEATURED WORK</div>
          </ScrollFadeIn>
          <ScrollFadeIn
            className="w-1/2 flex flex-col"
            yOffset={50}
            delay={0.2}
          >
            <div className="text-2xl font-light">
              SELECTED PROJECTS THAT UNITE RESEARCH,
            </div>
            <div className="text-2xl font-light">
              STRATEGY & CREATIVE FIREPOWER.
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </>
  )
}
