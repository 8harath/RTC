"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Building,
  Home,
  Hotel,
  Palette,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EMICalculator } from "@/components/ui/emi-calculator"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [propertyAddress, setPropertyAddress] = useState("")
  const [assessmentName, setAssessmentName] = useState("")
  const [assessmentPhone, setAssessmentPhone] = useState("")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  
  const { toast } = useToast()

  // Handler functions
  const handleNewsletterSubscribe = () => {
    if (!newsletterEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      })
      return
    }
    
    // Simulate API call
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setNewsletterEmail("")
  }

  const handlePropertyAssessment = () => {
    if (!propertyAddress || !assessmentName || !assessmentPhone) {
      toast({
        title: "All Fields Required",
        description: "Please fill in all fields for property assessment.",
        variant: "destructive",
      })
      return
    }
    
    toast({
      title: "Assessment Request Submitted",
      description: "We'll contact you within 24 hours for property assessment.",
    })
    setPropertyAddress("")
    setAssessmentName("")
    setAssessmentPhone("")
  }

  const handleContactFormSubmit = () => {
    if (!contactForm.name || !contactForm.email || !contactForm.phone || !contactForm.message) {
      toast({
        title: "Please Fill All Fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      })
      return
    }
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    })
    setContactForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    })
  }

  const handleEnquiry = (propertyName: string) => {
    toast({
      title: "Enquiry Sent",
      description: `Thank you for your interest in ${propertyName}. Our team will contact you soon.`,
    })
  }

  const handleTalentNetwork = () => {
    toast({
      title: "Interest Recorded",
      description: "We'll notify you about opportunities in our talent network.",
    })
  }

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      location: "Whitefield, Bangalore",
      description: "Modern 3BHK apartments with premium amenities",
      category: "residential",
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
    },
    {
      id: 2,
      title: "Industrial Manufacturing Unit",
      location: "Electronic City, Bangalore",
      description: "State-of-the-art manufacturing facility for SKF India",
      category: "industrial",
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
    },
    {
      id: 3,
      title: "Boutique Hotel Project",
      location: "Koramangala, Bangalore",
      description: "Premium hospitality space with modern amenities",
      category: "hospitality",
      image: "/placeholder.svg?height=300&width=400",
      status: "Ongoing",
    },
    {
      id: 4,
      title: "Corporate Office Interiors",
      location: "MG Road, Bangalore",
      description: "Contemporary office design for Saddles International",
      category: "interior",
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
    },
  ]

  const properties = [
    {
      id: 1,
      title: "RTC Grandeur",
      location: "Whitefield, Bangalore",
      price: "₹85.5 Lakhs",
      pricePerSqft: "₹6,840/sq.ft",
      specs: ["3 BHK", "1,250 sq.ft", "Ready to Move"],
      badge: "New Launch",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      id: 2,
      title: "RTC Elite",
      location: "Electronic City, Bangalore",
      price: "₹1.2 Crores",
      pricePerSqft: "₹7,200/sq.ft",
      specs: ["4 BHK", "1,650 sq.ft", "Under Construction"],
      badge: "Premium",
      image: "/placeholder.svg?height=250&width=350",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="RTC Construction Site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Dreams,
              <br />
              <span className="text-orange-400">Crafting Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Premium construction solutions across residential, industrial, and hospitality sectors since 2021
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-400">25+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-400">2021</div>
                <div className="text-sm opacity-80">Established</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/projects">
                <Button size="lg" className="bg-orange-800 hover:bg-orange-700 text-white px-8">
                  Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <p className="text-sm opacity-70 mb-4">Trusted by leading companies</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-sm font-medium">Saddles International</div>
                <div className="w-px h-4 bg-white/30" />
                <div className="text-sm font-medium">SKF India</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering exceptional construction solutions across diverse sectors
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: "all", label: "All Projects", icon: Building },
              { key: "residential", label: "Residential", icon: Home },
              { key: "industrial", label: "Industrial", icon: Building },
              { key: "hospitality", label: "Hospitality", icon: Hotel },
              { key: "interior", label: "Interior Works", icon: Palette },
            ].map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={activeFilter === key ? "default" : "outline"}
                onClick={() => setActiveFilter(key)}
                className={`${
                  activeFilter === key
                    ? "bg-orange-800 hover:bg-orange-700 text-white"
                    : "border-orange-200 text-orange-800 hover:bg-orange-50"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-orange-100">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Link href="/projects">
                        <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                          View Details
                        </Button>
                      </Link>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-orange-800 text-white">{project.status}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-orange-600 font-medium mb-2">{project.location}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Badge variant="outline" className="border-orange-200 text-orange-800">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings Section */}
      {/* Listings Section Removed as per request */}

      {/* News & Articles Section */}
      <section id="news" className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with real estate trends and market insights
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="h-full bg-gradient-to-br from-orange-800 to-orange-700 text-white border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-6 opacity-90">
                    Subscribe to our newsletter for the latest updates on projects and market trends
                  </p>
                  <div className="space-y-4">
                    <Input
                      placeholder="Enter your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                    />
                    <Button 
                      className="w-full bg-white text-orange-800 hover:bg-gray-100"
                      onClick={handleNewsletterSubscribe}
                    >
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* SR Value Enquiry */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-orange-100">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Know Your Property's SR Value</h3>
                  <p className="text-gray-600 mb-6">
                    Get accurate Sub-Registrar value assessment for your property in Bangalore
                  </p>
                  <div className="space-y-4">
                    <Input 
                      placeholder="Property Address" 
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                    />
                    <Input 
                      placeholder="Your Name" 
                      value={assessmentName}
                      onChange={(e) => setAssessmentName(e.target.value)}
                    />
                    <Input 
                      placeholder="Phone Number" 
                      value={assessmentPhone}
                      onChange={(e) => setAssessmentPhone(e.target.value)}
                    />
                    <Button 
                      className="w-full bg-orange-800 hover:bg-orange-700 text-white"
                      onClick={handlePropertyAssessment}
                    >
                      Request Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Market News */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-orange-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-800 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">Market Update</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-200 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Bangalore Real Estate: Q4 2024 Analysis</h4>
                      <p className="text-sm text-gray-600 mb-2">Dec 15, 2024</p>
                      <p className="text-sm text-gray-700">
                        Comprehensive overview of property prices and market dynamics...
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-orange-200 text-orange-800 hover:bg-orange-50 bg-transparent"
                    >
                      Read More Articles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Ravi Tej Constructions</h2>
              <p className="text-xl text-gray-600 mb-8">
                Since 2021, RTC has been at the forefront of premium construction solutions, delivering excellence
                across residential, industrial, hospitality, and interior design sectors.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To create exceptional living and working spaces that exceed client expectations while maintaining
                    the highest standards of quality and craftsmanship.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Approach</h3>
                  <p className="text-gray-600">
                    We combine traditional construction expertise with modern techniques and materials to deliver
                    projects that stand the test of time.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-800">25+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-800">4</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-800">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="RTC Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-orange-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      S
                    </div>
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      K
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Trusted Partners</div>
                    <div className="text-xs text-gray-600">Saddles & SKF</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-50/30 to-orange-100/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your construction journey? We're here to help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Email Address" type="email" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Phone Number" type="tel" />
                    <Select>
                      <SelectTrigger className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200 shadow-lg">
                        <SelectItem value="residential" className="hover:bg-orange-50 focus:bg-orange-50 text-gray-900">
                          Residential Construction
                        </SelectItem>
                        <SelectItem value="industrial" className="hover:bg-orange-50 focus:bg-orange-50 text-gray-900">
                          Industrial Construction
                        </SelectItem>
                        <SelectItem value="hospitality" className="hover:bg-orange-50 focus:bg-orange-50 text-gray-900">
                          Hospitality Construction
                        </SelectItem>
                        <SelectItem value="interior" className="hover:bg-orange-50 focus:bg-orange-50 text-gray-900">
                          Interior Works
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea placeholder="Project Details" rows={4} />
                  <Button className="w-full bg-orange-800 hover:bg-orange-700 text-white">Send Message</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-800 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+91 [Phone Number]</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-800 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">info@rtconstructions.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Address</div>
                      <div className="text-gray-600">Bangalore, Karnataka</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Why Choose RTC?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">25+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Premium Quality Materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">On-Time Delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Expert Team</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
