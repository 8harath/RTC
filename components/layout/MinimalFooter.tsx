import Link from "next/link"
import Image from "next/image"

export function MinimalFooter() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Company */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 relative bg-white rounded-md p-1">
              <Image
                src="/RTC Logo_page-0001.jpg"
                alt="RTC Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-bold">RTC</span>
              <p className="text-xs text-gray-400">Excellence Since 2021</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
              Properties
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-xs text-gray-400 text-center md:text-right">
            <p>Bangalore, Karnataka</p>
            <p>info@rtconstructions.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-4 pt-4 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ravitej Constructions (RTC). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
