"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "John Smith",
    position: "Facility Manager, ABC Office Complex",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "FireGuard Solutions provided exceptional service from start to finish. Their team was professional, knowledgeable, and completed the installation ahead of schedule. I highly recommend their services to any business looking for reliable fire safety solutions.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "Operations Director, Johnson Manufacturing",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We've been working with FireGuard Solutions for over 5 years now. Their maintenance service is impeccable, and they're always available when we need them. The peace of mind knowing our fire safety systems are properly maintained is invaluable.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    position: "Property Manager, Westside Mall",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Managing a large commercial property comes with significant fire safety requirements. FireGuard Solutions has been our trusted partner in ensuring we meet all regulations while providing top-notch service and support.",
    rating: 4,
  },
  {
    name: "Lisa Chen",
    position: "CEO, Tech Innovations Inc.",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "When we renovated our office space, FireGuard Solutions helped us design and implement a comprehensive fire safety system. Their attention to detail and commitment to safety standards exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Robert Williams",
    position: "Director of Safety, Williams Hotels",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "With multiple hotel properties under management, we needed a reliable fire safety partner. FireGuard Solutions has consistently delivered excellent service across all our locations, ensuring guest safety and regulatory compliance.",
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
  const visibleCount = 3
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={carouselRef}>
      <div className="overflow-hidden">
        <div className="flex">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            {testimonials.slice(currentIndex, currentIndex + visibleCount).map((testimonial, index) => (
              <motion.div
                key={`${currentIndex + index}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="min-w-[33.333%] px-4 py-2"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 group">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-grayaccent">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={cn(
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300",
                            "transition-transform hover:scale-110 duration-300",
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-grayaccent flex-grow">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}
