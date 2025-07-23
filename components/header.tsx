"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/" || pathname === "/services"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isHomePage
          ? isScrolled
            ? "bg-white shadow-md text-charcoal py-2"
            : "bg-transparent text-white py-4"
          : isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="text-2xl font-bold"
            style={{ color: "#8b0000"} }
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            FireGuard
          </motion.span>
          <span
            className="text-xl font-medium"
            style={{ color: isHomePage && !isScrolled ? "#fff" : "#374151" }}
          >
            Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-firered relative group",
                pathname === item.href
                  ? "text-firered"
                  : isHomePage && !isScrolled
                  ? "text-white/90"
                  : "text-charcoal"
              )}
            >
              {item.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-firered"
                animate={{ width: pathname === item.href ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
          <AnimatedButton
            asChild
            variant="fire"
            iconRight={<Phone size={16} />}

          >
            <Link href="/contact">Get a Quote</Link>
          </AnimatedButton>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden p-2"
          style={{ color: isHomePage && !isScrolled ? "#fff" : "#374151" }}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "py-3 px-4 text-base font-medium transition-colors hover:bg-muted",
                      pathname === item.href ? "text-firered" : "text-charcoal"
                    )}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="m-4"
              >
                <AnimatedButton
                  asChild
                  variant="fire"
                  className="w-full"
                  iconRight={<Phone size={16} />}
                >
                  <Link href="/contact" onClick={closeMenu}>
                    Get a Quote
                  </Link>
                </AnimatedButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}