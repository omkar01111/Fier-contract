"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
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

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }
      case "down":
        return { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }
      case "left":
        return { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } }
      case "right":
        return { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } }
      default:
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }
    }
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={getDirectionVariants()}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
