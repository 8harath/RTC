"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  // Use scrollY for header background opacity
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 0.95])

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: useTransform(scrollY, [0, 100], ["transparent", "rgba(245, 245, 220, 0.95)"]),
      }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-2 shadow-lg border border-orange-200">
              <Image
                src="/logo.png"
                alt="Ravi Tej Constructions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-orange-800 hidden sm:inline">Ravi Tej Constructions</span>
            <span className="text-xl font-bold text-orange-800 sm:hidden">RTC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-orange-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-orange-800 hover:bg-orange-700 text-white">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-orange-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-orange-800 hover:bg-orange-700 text-white">
                Get Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
