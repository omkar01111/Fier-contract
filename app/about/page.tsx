import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield, CheckCircle } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedCard } from "@/components/ui/animated-card";
import FadeIn from "@/components/animations/fade-in";
import StaggeredChildren from "@/components/animations/staggered-children";
import AnimatedText from "@/components/animations/animated-text";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <Badge className="bg-firered/10 text-firered hover:bg-firered/20">
                  About Us
                </Badge>
                <AnimatedText
                  text="Protecting Lives & Property Since 2003"
                  className="text-4xl md:text-5xl font-bold"
                />
                <p className="text-lg text-grayaccent">
                  FireGuard Solutions is a leading provider of comprehensive
                  fire safety services for businesses and facilities across the
                  country. With decades of experience, we've built our
                  reputation on reliability, expertise, and exceptional customer
                  service.
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
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission & Values
              </h2>
              <p className="text-grayaccent text-lg">
                At FireGuard Solutions, we're committed to providing the highest
                quality fire safety services to protect what matters most -
                lives and property.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">
                Our Vision
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-grayaccent text-lg">
                To be the most trusted name in fire safety, recognized for our
                expertise, reliability, and commitment to excellence in every
                service we provide.
              </p>
            </div>
          </FadeIn>

          {/* <div className="container flex flex-col w-full justify-center items-center">
            <FadeIn direction="right">
              <div className="space-y-6 max-w-3xl  mx-auto mb-16">
                <div className="space-y-4 flex justify-center items-center flex-col ]">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-grayaccent px-5 text-center">
                    To provide exceptional fire safety solutions that protect lives and property while delivering
                    outstanding customer service and maintaining the highest standards of quality and professionalism.
                  </p>
                </div>
                <div className="space-y-4 flex justify-center items-center flex-col ]">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">Our Vision</h3>
                  <p className="text-grayaccent px-5 text-center text-lg">
                  To be the most trusted name in fire safety, recognized for our expertise, reliability, and
                    commitment to excellence in every service we provide.
                  </p>
                </div>

               
              </div>
            </FadeIn>
</div> */}
          <div className="container  w-full">
            <FadeIn
              direction="left"
              delay={0.2}
              className=""
            >
              <div className=" ">
                <StaggeredChildren className="justify-center"
  childVariants={"customChildVariants"}>
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
                      description:
                        "We operate with honesty and transparency in all our business dealings.",
                    },
                    {
                      icon: <Clock className="h-8 w-8 text-firered" />,
                      title: "Reliability",
                      description:
                        "We're there when you need us, providing dependable service you can count on.",
                    },
                  ].map((value, index) => (
                    <AnimatedCard
                      key={index}
                      className="border-none w-[300px]  shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6  flex flex-col items-center text-center">
                        <div className="h-16 w-16 rounded-full bg-firered/10 flex items-center justify-center mb-4 group-hover:bg-firered/20 transition-colors duration-300">
                          {value.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">
                          {value.title}
                        </h4>
                        <p className="text-grayaccent text-sm">
                          {value.description}
                        </p>
                      </CardContent>
                    </AnimatedCard>
                  ))}
                </StaggeredChildren>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Owner Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">
                Our Leadership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Founder
              </h2>
              <p className="text-grayaccent text-lg">
                The vision and expertise behind FireGuard Solutions
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn direction="up">
              <AnimatedCard className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Robert Johnson - Founder & CEO"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-2xl font-bold">Robert Johnson</h3>
                    <p className="text-firered font-medium mb-4">
                      Founder & CEO
                    </p>
                    <p className="text-grayaccent mb-4">
                      With over 25 years of experience in fire safety, Robert
                      founded FireGuard Solutions with a vision to provide
                      exceptional service and protection. His extensive
                      knowledge and dedication to safety standards have
                      established the company as a leader in the industry.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="text-firered h-5 w-5" />
                        <span className="font-medium">
                          Certified Fire Protection Specialist (CFPS)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="text-firered h-5 w-5" />
                        <span className="font-medium">
                          Licensed Fire Safety Director
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-firered h-5 w-5" />
                        <span className="font-medium">
                          25+ Years Industry Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Completed Contracts Showcase */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-firered/10 text-firered hover:bg-firered/20 mb-4">
                Our Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Completed Contracts
              </h2>
              <p className="text-grayaccent text-lg">
                A showcase of our successful fire safety projects and
                installations
              </p>
            </div>
          </FadeIn>

          <div className="flex justify-evenly items-center flex-wrap w-full">
            <StaggeredChildren childVariants={"customChildVariants"} className="w-full justify-center">
              {[
                {
                  title: "Westside Commercial Complex",
                  location: "Downtown Metro Area",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Complete fire sprinkler system installation across 12 floors",
                    "Advanced fire alarm system with central monitoring",
                    "Emergency evacuation system implementation",
                    "Staff safety training for 200+ employees",
                    "Annual maintenance contract",
                  ],
                },
                {
                  title: "Riverfront Hotel & Resort",
                  location: "Coastal Tourist District",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Fire safety system upgrade for 150+ guest rooms",
                    "Kitchen fire suppression systems for 3 restaurants",
                    "Smoke detection system with smart alerts",
                    "Emergency lighting installation throughout property",
                    "Custom evacuation plan development",
                  ],
                },
                {
                  title: "Northside Manufacturing Plant",
                  location: "Industrial Zone",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Industrial-grade fire suppression system installation",
                    "Hazardous materials fire protection solutions",
                    "24/7 monitoring system implementation",
                    "Emergency response team training",
                    "Regulatory compliance certification",
                  ],
                },
                {
                  title: "Eastwood Medical Center",
                  location: "Healthcare District",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Hospital-grade fire protection system installation",
                    "Specialized systems for operating rooms and labs",
                    "Patient evacuation planning and equipment",
                    "Staff emergency response training",
                    "Quarterly inspection and maintenance program",
                  ],
                },
                {
                  title: "Central School District",
                  location: "Multiple Campus Locations",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "Fire alarm system upgrades for 5 school buildings",
                    "Sprinkler system installation in gymnasiums and cafeterias",
                    "Emergency evacuation system with PA integration",
                    "Fire safety education program for students and staff",
                    "Monthly inspection and maintenance services",
                  ],
                },
                {
                  title: "Southside Residential Towers",
                  location: "Urban Residential Area",
                  image: "/placeholder.svg?height=400&width=600",
                  services: [
                    "High-rise residential fire protection system installation",
                    "Smart smoke and heat detection in 300+ units",
                    "Lobby and common area sprinkler systems",
                    "Resident fire safety education program",
                    "24/7 emergency monitoring services",
                  ],
                },
              ].map((contract, index) => (
                <AnimatedCard key={index} className="overflow-hidden h-[520px] w-[450px]">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={contract.image || "/placeholder.svg"}
                      alt={contract.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{contract.title}</h3>
                    <p className="text-firered font-medium text-sm mb-4">
                      {contract.location}
                    </p>
                    <h4 className="font-semibold text-base mb-2">
                      Services Provided:
                    </h4>
                    <ul className="space-y-2">
                      {contract.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-firered h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className="text-grayaccent text-sm">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </AnimatedCard>
              ))}
            </StaggeredChildren>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-firered text-white">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your fire safety needs and discover
              how we can help protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asChild
                size="lg"
                className="bg-white text-firered hover:bg-white/90"
              >
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
  );
}
