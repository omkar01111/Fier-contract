import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggeredChildren from "@/components/animations/staggered-children"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <FadeIn direction="up">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-firered">FireGuard</span>
                <span className="text-xl font-medium text-white">Solutions</span>
              </Link>
              <p className="text-grayaccent-light text-sm max-w-xs">
                Professional fire safety installation and maintenance services for businesses and facilities.
              </p>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-grayaccent hover:text-white transition-colors">
                  <Facebook size={20} className="hover:scale-110 transition-transform" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com" className="text-grayaccent hover:text-white transition-colors">
                  <Instagram size={20} className="hover:scale-110 transition-transform" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://linkedin.com" className="text-grayaccent hover:text-white transition-colors">
                  <Linkedin size={20} className="hover:scale-110 transition-transform" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <StaggeredChildren>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </StaggeredChildren>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <StaggeredChildren>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services#sprinklers"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      Fire Sprinkler Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#extinguishers"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      Fire Extinguishers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#alarms"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      Fire Alarm Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#maintenance"
                      className="text-grayaccent hover:text-white transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      Maintenance & Inspection
                    </Link>
                  </li>
                </ul>
              </StaggeredChildren>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="up" delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <StaggeredChildren>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 group">
                    <MapPin
                      size={18}
                      className="text-firered mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-grayaccent group-hover:text-white transition-colors">
                      123 Safety Street, Firetown, FT 12345
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <Phone
                      size={18}
                      className="text-firered flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-grayaccent group-hover:text-white transition-colors">(555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <Mail size={18} className="text-firered flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-grayaccent group-hover:text-white transition-colors">
                      info@fireguardsolutions.com
                    </span>
                  </li>
                </ul>
              </StaggeredChildren>
              <AnimatedButton asChild variant="fire" className="w-full mt-2">
                <Link href="/contact">Get a Free Quote</Link>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-charcoal-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-grayaccent text-sm">
            © {new Date().getFullYear()} FireGuard Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-grayaccent text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-grayaccent text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
