import { Building, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-800 to-orange-600 rounded-lg flex items-center justify-center">
                <Building className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">RTC</span>
            </div>
            <p className="text-gray-400 text-sm">
              Excellence in Construction Since 2021
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-3 h-3" />
                <span>Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-3 h-3" />
                <span>+91 [Phone Number]</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-3 h-3" />
                <span>info@rtconstructions.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ravitej Constructions (RTC). All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span className="text-gray-500">Residential</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">Industrial</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">Hospitality</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">Interiors</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
