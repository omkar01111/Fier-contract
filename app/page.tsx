import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Shield, Clock, Award, Users } from "lucide-react"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard, AnimatedCardContent } from "@/components/ui/animated-card"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import AnimatedText from "@/components/animations/animated-text"
import ParallaxSection from "@/components/animations/parallax-section"
import Herobg from '../public/img/bg.webp'
import Sprinkler from '../public/img/Sprinkler.webp'
import FireExtinguisher from '../public/img/fire extinguisher.webp'
import FireAlarm from '../public/img/Fire Alarm.webp'
import Maintenance from '../public/img/Maintenance & Inspection.webp'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={Herobg}
            alt="Fire safety professionals at work"
            fill
            className="object-cover brightness-60"
            priority
          />
        </div>
        <ParallaxSection strength={0.1} className="container relative z-10 pt-16">
          <div className="max-w-3xl space-y-6 text-white">
            <FadeIn>
              <Badge className="bg-firered hover:bg-firered text-white border-none px-3 py-1 text-sm">
                Licensed & Certified Fire Safety Experts
              </Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <AnimatedText
                text="Protecting Lives & Property with Advanced Fire Safety Solutions"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Professional installation and maintenance of fire sprinklers, extinguishers, and safety systems for
                businesses and facilities.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <AnimatedButton asChild size="lg" variant="fire" iconRight={<ArrowRight size={16} />}>
                  <Link href="/contact">Get a Free Quote</Link>
                </AnimatedButton>
                <AnimatedButton asChild variant="fireOutline" size="lg">
                  <Link href="/services">Explore Our Services</Link>
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
        </ParallaxSection>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Fire Safety Solutions</h2>
              <p className="text-grayaccent text-lg">
                We provide end-to-end fire safety services to keep your business protected and compliant with all
                regulations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fire Sprinkler Systems",
                description:
                  "Design, installation and maintenance of automatic fire sprinkler systems for all facility types.",
                image:Sprinkler,
                link:"/services#extinguishers" ,
              },
              {
                title: "Fire Extinguishers",
                description:
                  "Supply, installation and regular inspection of fire extinguishers tailored to your specific needs.",
                image: FireExtinguisher,
                link: "/services#extinguishers",
              },
              {
                title: "Fire Alarm Systems",
                description: "Advanced detection and alarm systems to provide early warning and protect your property.",
                image: FireAlarm,
                link: "/services#alarms",
              },
              {
                title: "Emergency Lighting",
                description: "Installation and maintenance of emergency lighting systems to guide safe evacuation.",
                image: "/placeholder.svg?height=300&width=400",
                link: "/services#lighting",
              },
              {
                title: "Safety Training",
                description:
                  "Comprehensive training programs for your staff on fire safety procedures and equipment use.",
                image: "/placeholder.svg?height=300&width=400",
                link: "/services#training",
              },
              {
                title: "Maintenance & Inspection",
                description:
                  "Regular maintenance and inspection services to ensure your systems are always operational.",
                image: Maintenance,
                link: "/services#maintenance",
              },
            ].map((service, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <AnimatedCard className="overflow-hidden group hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <AnimatedCardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-grayaccent mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-firered font-medium hover:underline group"
                    >
                      Learn more
                      <ArrowRight
                        size={16}
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </AnimatedCardContent>
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <FadeIn direction="up">
              <AnimatedButton asChild size="lg" variant="fire" iconRight={<ArrowRight size={16} />}>
                <Link href="/services">View All Services</Link>
              </AnimatedButton>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Safety Is Our Top Priority</h2>
                <p className="text-grayaccent text-lg mb-8">
                  With over 20 years of experience in the fire safety industry, we've built our reputation on
                  reliability, expertise, and exceptional customer service.
                </p>

                <StaggeredChildren className="space-y-6">
                  {[
                    {
                      icon: <Shield className="text-firered" />,
                      title: "Licensed & Certified",
                      description: "Our team consists of fully licensed and certified fire safety professionals.",
                    },
                    {
                      icon: <Clock className="text-firered" />,
                      title: "24/7 Emergency Service",
                      description: "Round-the-clock support for all your fire safety emergencies.",
                    },
                    {
                      icon: <Award className="text-firered" />,
                      title: "Industry Leading Standards",
                      description: "We adhere to the highest industry standards and regulations.",
                    },
                    {
                      icon: <Users className="text-firered" />,
                      title: "Experienced Team",
                      description: "Our technicians have decades of combined experience in fire safety.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-firered/10 group-hover:bg-firered/20 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-grayaccent">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </StaggeredChildren>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Fire safety professional inspecting equipment"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-grayaccent text-lg">
                Don't just take our word for it. Here's what facility managers and business owners have to say about our
                services.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <TestimonialsCarousel />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-firered text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Fire Safety?</h2>
                <p className="text-xl opacity-90 mb-6">
                  Contact us today for a free consultation and quote. Our experts are ready to help you protect what
                  matters most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton asChild size="lg" className="bg-white text-firered hover:bg-white/90">
                    <Link href="/contact">Get a Free Quote</Link>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="fireOutline" size="lg">
                    <Link href="/services">Learn More</Link>
                  </AnimatedButton>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-6">
                <StaggeredChildren>
                  {[
                    "Comprehensive fire safety assessment",
                    "Customized safety solutions",
                    "Professional installation by certified technicians",
                    "Ongoing maintenance and support",
                    "Compliance with all safety regulations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="text-white h-6 w-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </StaggeredChildren>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
