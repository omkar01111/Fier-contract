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
  const [isClient, setIsClient] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Get responsive slide count
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    setIsClient(true)
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3)
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - slidesToShow)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  useEffect(() => {
    if (!autoplay || !isClient) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay, isClient, maxIndex])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  if (!isClient) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    )
  }

  return (
    <div 
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      {/* Main carousel container */}
      <div className="overflow-hidden rounded-xl">
        <motion.div 
          className="flex transition-transform duration-500 ease-out"
          animate={{ 
            x: `-${(currentIndex * 100) / slidesToShow}%` 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 px-3",
                slidesToShow === 1 && "w-full",
                slidesToShow === 2 && "w-1/2",
                slidesToShow === 3 && "w-1/3"
              )}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows - Always visible */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-full z-20 border-2 hover:bg-firered hover:text-white hover:border-firered transition-all duration-300"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-full z-20 border-2 hover:bg-firered hover:text-white hover:border-firered transition-all duration-300"
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-firered scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar (mobile only) */}
      <div className="block sm:hidden mt-4">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-firered h-1 rounded-full transition-all duration-300"
            style={{ 
              width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-firered/20">
      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
        {/* Header with avatar and info */}
        <div className="flex items-start mb-4">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-sm sm:text-base text-gray-900 truncate">
              {testimonial.name}
            </h4>
            <p className="text-xs sm:text-sm text-grayaccent leading-relaxed">
              {testimonial.position}
            </p>
          </div>
        </div>

        {/* Rating stars */}
        <div className="flex mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={cn(
                i < testimonial.rating 
                  ? "text-yellow-500 fill-yellow-500" 
                  : "text-gray-300",
                "sm:w-4 sm:h-4"
              )}
            />
          ))}
        </div>

        {/* Testimonial content */}
        <blockquote className="flex-grow">
          <p className="text-grayaccent text-sm sm:text-base leading-relaxed italic">
            "{testimonial.content}"
          </p>
        </blockquote>
      </CardContent>
    </Card>
  )
}