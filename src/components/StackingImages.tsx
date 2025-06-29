"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const imageData = [
  { src: "/images/image1.webp", title: "Mountain Adventure" },
  { src: "/images/image2.webp", title: "Ocean Waves" },
  { src: "/images/image3.webp", title: "Forest Trail" },
  { src: "/images/image4.webp", title: "City Lights" },
  { src: "/images/image5.webp", title: "Snowy Peaks" },
  { src: "/images/image6.webp", title: "City Lights" },
]

export default function StackingImages() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-gray-100">
      {/* Header Title */}
      <div className="sticky top-20 py-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-extralight text-gray-900 tracking-wide">
          TRUSTED BY
        </h1>
      </div>
      <div className="sticky top-72 flex justify-center items-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Images Section */}
          <div className="relative w-80 h-96">
            {imageData.map((item, i) => {
              // Calculate individual progress for each card - dynamically based on number of images
              const progressStep = 1 / imageData.length
              const cardProgress = useTransform(
                scrollYProgress,
                [i * progressStep, (i + 1) * progressStep],
                [0, 1]
              )

              // Y position: cards come from bottom and stack on top
              const y = useTransform(
                cardProgress,
                [0, 1],
                [200, -i * 8] // Each card stacks on top of previous (negative offset)
              )

              // Rotation: slight tilt for card-like effect
              const rotate = useTransform(
                cardProgress,
                [0, 1],
                [0, (i - 1) * 3] // Middle card straight, others tilted
              )

              // Scale: cards start smaller and grow
              const scale = useTransform(
                cardProgress,
                [0, 1],
                [0.8, 1 - i * 0.05] // Each card slightly smaller for depth
              )

              // Z-index and opacity for proper stacking
              const opacity = useTransform(cardProgress, [0, 0.3, 1], [0, 1, 1])

              return (
                <motion.div
                  key={item.src}
                  className="absolute inset-0"
                  style={{
                    y,
                    rotate,
                    scale,
                    opacity,
                    zIndex: i, // Later images on top
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover shadow-2xl"
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Titles Section - Single title that changes */}
          <div className="relative w-80 md:w-auto h-48 md:h-96 flex items-center">
            {imageData.map((item, i) => {
              // Calculate individual progress for each title
              const progressStep = 1 / imageData.length
              const titleProgress = useTransform(
                scrollYProgress,
                [i * progressStep, (i + 1) * progressStep],
                [0, 1]
              )

              // Title opacity: fade in when active, fade out when next comes
              const titleOpacity = useTransform(
                scrollYProgress,
                [
                  (i - 0.1) * progressStep, // Start fading out previous
                  i * progressStep + 0.5 * progressStep, // Fully visible
                  (i + 0.9) * progressStep, // Stay visible
                  (i + 1) * progressStep, // Start fading out
                ],
                [0, 1, 1, 0]
              )

              // Title animation: slides in from right and scales
              const titleX = useTransform(titleProgress, [0, 1], [50, 0])

              const titleScale = useTransform(titleProgress, [0, 1], [0.9, 1])

              return (
                <motion.div
                  key={`title-${i}`}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
                  style={{
                    x: titleX,
                    opacity: titleOpacity,
                    scale: titleScale,
                  }}
                >
                  <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 text-center md:text-left md:text-nowrap">
                    {item.title}
                  </h2>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
