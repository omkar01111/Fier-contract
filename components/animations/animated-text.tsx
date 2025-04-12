"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  once?: boolean
  threshold?: number
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
  once = true,
  threshold = 0.1,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
        threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  const words = text.split(" ")

  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: staggerChildren, delayChildren: delay },
    }),
  }

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        style={{ display: "flex", flexWrap: "wrap" }}
        variants={container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span key={index} style={{ marginRight: "0.25em" }} variants={child}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
