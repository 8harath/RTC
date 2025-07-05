import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ravi Tej Constructions</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Building excellence since 2021. Premium construction solutions across residential, 
              industrial, and hospitality sectors in Bangalore.
            </p>
            <div className="text-sm text-gray-500">
              <span>Residential • Industrial • Hospitality • Interiors</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/projects" className="block text-gray-600 hover:text-orange-800 transition-colors">
                Projects
              </Link>
              <Link href="/properties" className="block text-gray-600 hover:text-orange-800 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-orange-800 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-orange-800 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-800" />
                <span className="text-sm">Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4 text-orange-800" />
                <span className="text-sm">+91 [Phone Number]</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4 text-orange-800" />
                <span className="text-sm">info@ravitejconstructions.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Ravi Tej Constructions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-orange-800 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-orange-800 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
