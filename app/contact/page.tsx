"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard, AnimatedCardContent } from "@/components/ui/animated-card"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }))
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch With Our Team</h1>
              <p className="text-lg text-grayaccent mb-8">
                Have questions about our services or ready to get started? Contact us today for a free consultation and
                quote.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="right">
              <AnimatedCard>
                <AnimatedCardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  <AnimatePresence mode="wait">
                    {formState.submitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-8 space-y-4"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                          className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                        >
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </motion.div>
                        <h3 className="text-xl font-bold">Thank You!</h3>
                        <p className="text-grayaccent">
                          Your message has been sent successfully. One of our representatives will contact you shortly.
                        </p>
                        <AnimatedButton
                          onClick={() =>
                            setFormState((prev) => ({
                              ...prev,
                              submitted: false,
                              name: "",
                              email: "",
                              phone: "",
                              service: "",
                              message: "",
                            }))
                          }
                          className="mt-4 bg-firered hover:bg-firered-dark"
                        >
                          Send Another Message
                        </AnimatedButton>
                      </motion.div>
                    ) : (
                      <motion.form 
                        onSubmit={handleSubmit} 
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Full Name <span className="text-firered">*</span>
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                              required
                              className="focus:ring-firered focus:border-firered transition-shadow duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email Address <span className="text-firered">*</span>
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                              className="focus:ring-firered focus:border-firered transition-shadow duration-300"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Phone Number <span className="text-firered">*</span>
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="(555) 123-4567"
                              required
                              className="focus:ring-firered focus:border-firered transition-shadow duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium">
                              Service Interested In
                            </label>
                            <Select value={formState.service} onValueChange={handleSelectChange}>
                              <SelectTrigger id="service" className="focus:ring-firered focus:border-firered transition-shadow duration-300">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sprinklers">Fire Sprinkler Systems</SelectItem>
                                <SelectItem value="extinguishers">Fire Extinguishers</SelectItem>
                                <SelectItem value="alarms">Fire Alarm Systems</SelectItem>
                                <SelectItem value="lighting">Emergency Lighting</SelectItem>
                                <SelectItem value="training">Safety Training</SelectItem>
                                <SelectItem value="maintenance">Maintenance & Inspection</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message <span className="text-firered">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell us about your fire safety needs..."
                            rows={5}
                            required
                            className="focus:ring-firered focus:border-firered transition-shadow duration-300"
                          />
                        </div>

                        <AnimatedButton
                          type="submit"
                          className="w-full bg-firered hover:bg-firered-dark"
                          disabled={formState.loading}
                        >
                          {formState.loading ? "Sending..." : "Send Message"}
                        </AnimatedButton>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </AnimatedCardContent>
              </AnimatedCard>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <StaggeredChildren className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="h-10 w-10 rounded-full bg-firered/10 flex items-center justify-center flex-shrink-0 group-hover:bg-firered/20 transition-colors duration-300">
                        <MapPin className="h-5 w-5 text-firered" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Our Location</h3>
                        <p className="text-grayaccent">123 Safety Street, Firetown, FT 12345</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="h-10 w-10 rounded-full bg-firered/10 flex items-center justify-center flex-shrink-0 group-hover:bg-firered/20 transition-colors duration-300">
                        <Phone className="h-5 w-5 text-firered" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Phone Number</h3>
                        <p className="text-grayaccent">(555) 123-4567</p>
                        <p className="text-sm text-grayaccent">For emergencies: (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="h-10 w-10 rounded-full bg-firered/10 flex items-center justify-center flex-shrink-0 group-hover:bg-firered/20 transition-colors duration-300">
                        <Mail className="h-5 w-5 text-firered" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Address</h3>
                        <p className="text-grayaccent">info@fireguardsolutions.com</p>
                        <p className="text-sm text-grayaccent">For support: support@fireguardsolutions.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="h-10 w-10 rounded-full bg-firered/10 flex items-center justify-center flex-shrink-0 group-hover:bg-firered/20 transition-colors duration-300">
                        <Clock className="h-5 w-5 text-firered" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Business Hours</h3>
                        <p className="text-grayaccent">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-sm text-grayaccent">24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </StaggeredChildren>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                  <div className="h-[300px] bg-muted rounded-lg overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Google Map"
                      alt="Map location"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
  <div className="container">
    <FadeIn>
      <div className="text-center max-w-3xl mx-auto"> {/* Fixed line */}
        <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">
          Frequently Asked Questions
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Common Questions About Fire Safety
        </h2>
        <p className="text-lg text-grayaccent">
          Find answers to our most frequently asked questions below.
        </p>
      </div>
    </FadeIn>
    
    {/* Add your FAQ content here */}
    
  </div>
</section>
</>)}
