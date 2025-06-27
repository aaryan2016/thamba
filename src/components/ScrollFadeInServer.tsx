"use client"

import { ReactNode, useRef, useEffect, useState } from "react"

interface ScrollFadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  amount?: number // Not used directly in native IO, but could map to threshold
  once?: boolean
  className?: string
}

export default function ScrollFadeInServer({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 50,
  amount = 0.5,
  once = true,
  className = "",
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: amount,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, amount])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
