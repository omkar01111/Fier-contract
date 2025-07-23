"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard, AnimatedCardContent } from "@/components/ui/animated-card"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import { motion, AnimatePresence } from "framer-motion"
import serviceBg from "../../public/img/service.avif";
import  Sprinkler  from "../../public/img/Sprinkler.webp";
import FireExtinguisher from '../../public/img/fire extinguisher.webp'
import FireAlarm from '../../public/img/Fire Alarm.webp'
import Maintenance from '../../public/img/Maintenance & Inspection.webp'
import Safety from '../../public/img/Safety Training.jpg'
import Emergency_Lighting from '../../public/img/Emergency Lighting.jpg'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: "sprinklers",
      title: "Fire Sprinkler Systems",
      shortDescription: "Automatic fire suppression systems designed to detect and control fires.",
      fullDescription:
        "Our fire sprinkler systems are designed to automatically detect fires, control their spread, and in many cases, extinguish them completely before the fire department arrives. We offer design, installation, inspection, and maintenance services for all types of sprinkler systems including wet pipe, dry pipe, pre-action, and deluge systems.",
      image: Sprinkler,
      features: [
        "Custom system design for your specific facility",
        "Professional installation by certified technicians",
        "Regular inspection and maintenance services",
        "24/7 emergency support",
        "Compliance with all local and national regulations",
      ],
      category: "installation",
    },
    {
      id: "extinguishers",
      title: "Fire Extinguishers",
      shortDescription: "Supply, installation and regular inspection of fire extinguishers.",
      fullDescription:
        "We provide a comprehensive range of fire extinguishers suitable for different types of fires and environments. Our services include supply, installation, regular inspection, and maintenance to ensure your extinguishers are always ready when needed. We also offer training on proper extinguisher use for your staff.",
      image: FireExtinguisher,
      features: [
        "Wide range of extinguisher types (ABC, CO2, Class K, etc.)",
        "Strategic placement and mounting",
        "Regular inspection and recharging services",
        "Staff training on proper extinguisher use",
        "Compliance with NFPA 10 standards",
      ],
      category: "equipment",
    },
    {
      id: "alarms",
      title: "Fire Alarm Systems",
      shortDescription: "Early detection systems to alert occupants and emergency services.",
      fullDescription:
        "Our fire alarm systems provide early detection and notification to help protect lives and property. We offer design, installation, testing, and maintenance of comprehensive fire alarm systems including smoke detectors, heat detectors, manual pull stations, and notification devices, all integrated with central monitoring.",
      image: FireAlarm,
      features: [
        "Advanced detection technology",
        "Addressable and conventional systems available",
        "Integration with building management systems",
        "24/7 central station monitoring",
        "Regular testing and maintenance services",
      ],
      category: "installation",
    },
    {
      id: "lighting",
      title: "Emergency Lighting",
      shortDescription: "Reliable emergency lighting systems for safe evacuation.",
      fullDescription:
        "Our emergency lighting systems ensure safe evacuation during power outages or emergency situations. We provide design, installation, and maintenance of emergency lighting systems including exit signs, emergency lights, and backup power systems to meet all safety codes and regulations.",
      image: Emergency_Lighting,
      features: [
        "LED technology for energy efficiency and longevity",
        "Battery backup systems",
        "Photoluminescent options available",
        "Regular testing and maintenance",
        "Compliance with life safety codes",
      ],
      category: "installation",
    },
    {
      id: "training",
      title: "Safety Training",
      shortDescription: "Comprehensive training programs for your staff on fire safety procedures.",
      fullDescription:
        "We offer comprehensive fire safety training programs customized for your facility and staff. Our training covers fire prevention, evacuation procedures, fire extinguisher use, and emergency response protocols. All training is conducted by experienced fire safety professionals.",
      image: Safety,
      features: [
        "Customized training programs",
        "Hands-on fire extinguisher training",
        "Evacuation drill planning and execution",
        "Fire warden/marshal training",
        "Documentation for compliance purposes",
      ],
      category: "training",
    },
    {
      id: "maintenance",
      title: "Maintenance & Inspection",
      shortDescription: "Regular maintenance and inspection services for all fire safety systems.",
      fullDescription:
        "Our maintenance and inspection services ensure your fire safety systems remain in optimal working condition. We provide scheduled inspections, testing, and maintenance for all types of fire safety equipment and systems in accordance with manufacturer specifications and regulatory requirements.",
      image: Maintenance,
      features: [
        "Comprehensive inspection schedules",
        "Detailed documentation and reporting",
        "Prompt repair services",
        "Compliance with NFPA standards",
        "24/7 emergency service availability",
      ],
      category: "maintenance",
    },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  useEffect(() => {
    // Check if URL has a hash and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
          setSelectedService(id)
        }, 500)
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={serviceBg}
          alt="Fire Safety Services"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-4"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Optional dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center max-w-3xl mx-auto">
        <FadeIn>
          <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive Fire Safety Solutions
          </h1>
          <p className="text-lg mb-8 text-white/80">
            We provide end-to-end fire safety services to keep your business protected and compliant with all
            regulations.
          </p>
          <AnimatedButton asChild size="lg" variant="fire" iconRight={<ArrowRight size={16} />}>
            <Link href="/contact">Get a Free Consultation</Link>
          </AnimatedButton>
        </FadeIn>
      </div>
    </section>

      {/* Services Filter */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  <TabsTrigger value="all" className="data-[state=active]:bg-firered data-[state=active]:text-white">
                    All Services
                  </TabsTrigger>
                  <TabsTrigger
                    value="installation"
                    className="data-[state=active]:bg-firered data-[state=active]:text-white"
                  >
                    Installation
                  </TabsTrigger>
                  <TabsTrigger
                    value="equipment"
                    className="data-[state=active]:bg-firered data-[state=active]:text-white"
                  >
                    Equipment
                  </TabsTrigger>
                  <TabsTrigger
                    value="maintenance"
                    className="data-[state=active]:bg-firered data-[state=active]:text-white"
                  >
                    Maintenance
                  </TabsTrigger>
                  <TabsTrigger
                    value="training"
                    className="data-[state=active]:bg-firered data-[state=active]:text-white"
                  >
                    Training
                  </TabsTrigger>
                </TabsList>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value={activeTab} className="mt-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredServices.map((service, index) => (
                        <FadeIn key={service.id} direction="up" delay={index * 0.1}>
                          <AnimatedCard
                            id={service.id}
                            className="overflow-hidden group hover:shadow-lg transition-shadow h-full"
                          >
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
                              <p className="text-grayaccent mb-4">{service.shortDescription}</p>
                              <AnimatedButton
                                variant="link"
                                className="p-0 text-firered font-medium hover:text-firered-dark"
                                iconRight={<ArrowRight size={16} />}
                                onClick={() => {
                                  document
                                    .getElementById(`${service.id}-details`)
                                    ?.scrollIntoView({ behavior: "smooth" })
                                  setSelectedService(service.id)
                                }}
                              >
                                Learn more
                              </AnimatedButton>
                            </AnimatedCardContent>
                          </AnimatedCard>
                        </FadeIn>
                      ))}
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </FadeIn>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service) => (
        <section
          key={service.id}
          id={`${service.id}-details`}
          className={`py-16 md:py-24 bg-muted transition-all duration-500 ${selectedService === service.id ? "ring-4 ring-firered/20 ring-offset-8 ring-offset-muted" : ""}`}
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="right" className="order-2 md:order-1">
                <div>
                  <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">
                    {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-grayaccent text-lg mb-6">{service.fullDescription}</p>

                  <StaggeredChildren className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <CheckCircle className="text-firered h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </StaggeredChildren>

                  <AnimatedButton asChild variant="fire" iconRight={<ArrowRight size={16} />}>
                    <Link href="/contact">Request a Quote</Link>
                  </AnimatedButton>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2} className="order-1 md:order-2">
                <div className="relative h-64 sm:h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

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
                    <Link href="/about">Learn About Us</Link>
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
