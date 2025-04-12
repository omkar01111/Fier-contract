import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"
import AnimatedText from "@/components/animations/animated-text"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <Badge className="bg-firered/10 text-firered hover:bg-firered/20">About Us</Badge>
                <AnimatedText
                  text="Protecting Lives & Property Since 2003"
                  className="text-4xl md:text-5xl font-bold"
                />
                <p className="text-lg text-grayaccent">
                  FireGuard Solutions is a leading provider of comprehensive fire safety services for businesses and
                  facilities across the country. With decades of experience, we've built our reputation on reliability,
                  expertise, and exceptional customer service.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="FireGuard Solutions team"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-grayaccent text-lg">
                At FireGuard Solutions, we're committed to providing the highest quality fire safety services to protect
                what matters most - lives and property.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-grayaccent">
                    To provide exceptional fire safety solutions that protect lives and property while delivering
                    outstanding customer service and maintaining the highest standards of quality and professionalism.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-grayaccent">
                    To be the most trusted name in fire safety, recognized for our expertise, reliability, and
                    commitment to excellence in every service we provide.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <StaggeredChildren>
                  {[
                    {
                      icon: <Shield className="h-8 w-8 text-firered" />,
                      title: "Safety",
                      description:
                        "We prioritize safety in everything we do, ensuring the highest standards of protection.",
                    },
                    {
                      icon: <Award className="h-8 w-8 text-firered" />,
                      title: "Excellence",
                      description:
                        "We strive for excellence in our work, delivering quality solutions that exceed expectations.",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-firered" />,
                      title: "Integrity",
                      description: "We operate with honesty and transparency in all our business dealings.",
                    },
                    {
                      icon: <Clock className="h-8 w-8 text-firered" />,
                      title: "Reliability",
                      description: "We're there when you need us, providing dependable service you can count on.",
                    },
                  ].map((value, index) => (
                    <AnimatedCard
                      key={index}
                      className="border-none shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="h-16 w-16 rounded-full bg-firered/10 flex items-center justify-center mb-4 group-hover:bg-firered/20 transition-colors duration-300">
                          {value.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                        <p className="text-grayaccent text-sm">{value.description}</p>
                      </CardContent>
                    </AnimatedCard>
                  ))}
                </StaggeredChildren>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
              <p className="text-grayaccent text-lg">
                Our experienced team of fire safety professionals is dedicated to providing the highest level of service
                and expertise.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggeredChildren>
              {[
                {
                  name: "Robert Johnson",
                  position: "Founder & CEO",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "With over 25 years of experience in fire safety, Robert founded FireGuard Solutions with a vision to provide exceptional service and protection.",
                },
                {
                  name: "Sarah Williams",
                  position: "Operations Director",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Sarah oversees all operations, ensuring that every project is completed to the highest standards of quality and safety.",
                },
                {
                  name: "Michael Chen",
                  position: "Technical Director",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Michael leads our technical team, bringing innovative solutions and extensive knowledge of fire safety systems.",
                },
                {
                  name: "Jennifer Martinez",
                  position: "Customer Relations Manager",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Jennifer ensures that our clients receive exceptional service and support throughout their journey with us.",
                },
              ].map((member, index) => (
                <AnimatedCard key={index} className="overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-firered font-medium mb-3">{member.position}</p>
                    <p className="text-grayaccent text-sm">{member.bio}</p>
                  </CardContent>
                </AnimatedCard>
              ))}
            </StaggeredChildren>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Our Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Certifications</h2>
              <p className="text-grayaccent text-lg">
                Our journey of growth and excellence in the fire safety industry spans over two decades.
              </p>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-firered ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
            <StaggeredChildren staggerDelay={0.15}>
              {[
                {
                  year: "2003",
                  title: "Company Founded",
                  description:
                    "FireGuard Solutions was established with a mission to provide high-quality fire safety services.",
                },
                {
                  year: "2008",
                  title: "Expansion of Services",
                  description:
                    "Expanded our service offerings to include comprehensive fire alarm systems and emergency lighting.",
                },
                {
                  year: "2012",
                  title: "National Certification",
                  description: "Received national certification for fire safety installation and maintenance services.",
                },
                {
                  year: "2015",
                  title: "Regional Expansion",
                  description:
                    "Expanded operations to cover three additional states, serving more businesses and facilities.",
                },
                {
                  year: "2018",
                  title: "Industry Recognition",
                  description:
                    "Received industry recognition for excellence in fire safety services and customer satisfaction.",
                },
                {
                  year: "2023",
                  title: "20 Years of Excellence",
                  description:
                    "Celebrated 20 years of providing exceptional fire safety services to our valued clients.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-12 ml-8 md:ml-0 md:grid md:grid-cols-5 md:gap-4">
                  <div className="md:col-span-1 flex md:justify-end">
                    <div className="absolute -left-4 md:static">
                      <div className="h-8 w-8 rounded-full bg-firered flex items-center justify-center text-white font-bold transition-transform duration-300 hover:scale-110">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="inline-block bg-firered text-white text-sm font-medium px-3 py-1 rounded mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-grayaccent">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">Our Credentials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Affiliations</h2>
              <p className="text-grayaccent text-lg">
                We maintain the highest industry standards through professional certifications and affiliations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggeredChildren>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32 transform hover:-translate-y-1"
                >
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Certification ${item}`}
                    alt={`Certification ${item}`}
                    width={150}
                    height={75}
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </StaggeredChildren>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-firered text-white">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Expert Team?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your fire safety needs and discover how we can help protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton asChild size="lg" className="bg-white text-firered hover:bg-white/90">
                <Link href="/contact">Get a Free Quote</Link>
              </AnimatedButton>
              <AnimatedButton asChild variant="fireOutline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
