"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Building,
  Home,
  Hotel,
  Palette,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

export default function RTCLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [loanAmount, setLoanAmount] = useState([5000000])
  const [interestRate, setInterestRate] = useState([8.5])
  const [loanTenure, setLoanTenure] = useState([20])
  const [emi, setEmi] = useState(0)

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])

  // EMI Calculation
  useEffect(() => {
    const P = loanAmount[0]
    const r = interestRate[0] / 12 / 100
    const n = loanTenure[0] * 12
    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    setEmi(Math.round(emiValue))
  }, [loanAmount, interestRate, loanTenure])

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
      {/* Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: useTransform(scrollY, [0, 100], ["transparent", "rgba(245, 245, 220, 0.95)"]),
        }}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-800 to-orange-600 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-orange-800">RTC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-800 transition-colors">
                Home
              </a>
              <a href="#projects" className="text-gray-700 hover:text-orange-800 transition-colors">
                Projects
              </a>
              <a href="#listings" className="text-gray-700 hover:text-orange-800 transition-colors">
                Listings
              </a>
              <a href="#news" className="text-gray-700 hover:text-orange-800 transition-colors">
                News
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-800 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-800 transition-colors">
                Contact
              </a>
            </div>

            <div className="hidden md:block">
              <Button className="bg-orange-800 hover:bg-orange-700 text-white">Get Quote</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              <a href="#home" className="block text-gray-700 hover:text-orange-800">
                Home
              </a>
              <a href="#projects" className="block text-gray-700 hover:text-orange-800">
                Projects
              </a>
              <a href="#listings" className="block text-gray-700 hover:text-orange-800">
                Listings
              </a>
              <a href="#news" className="block text-gray-700 hover:text-orange-800">
                News
              </a>
              <a href="#about" className="block text-gray-700 hover:text-orange-800">
                About
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-800">
                Contact
              </a>
              <Button className="w-full bg-orange-800 hover:bg-orange-700 text-white">Get Quote</Button>
            </div>
          </motion.div>
        )}
      </motion.header>

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
              <Button size="lg" className="bg-orange-800 hover:bg-orange-700 text-white px-8">
                Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Contact Us
              </Button>
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
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        View Details
                      </Button>
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
      <section id="listings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Listings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your dream property with our premium listings
            </p>
          </motion.div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-orange-100">
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={350}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-800 text-white">{property.badge}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                    <p className="text-orange-600 font-medium mb-4">{property.location}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.specs.map((spec, i) => (
                        <Badge key={i} variant="outline" className="border-orange-200 text-orange-800">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{property.price}</div>
                        <div className="text-sm text-gray-600">{property.pricePerSqft}</div>
                      </div>
                      <Button className="bg-orange-800 hover:bg-orange-700 text-white">Enquire Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* EMI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Home Loan EMI Calculator</h3>
              <p className="text-gray-600">Calculate your monthly EMI with our interactive tool</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount: ₹{loanAmount[0].toLocaleString()}
                  </label>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={10000000}
                    min={100000}
                    step={100000}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate: {interestRate[0]}%
                  </label>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={15}
                    min={6}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Tenure: {loanTenure[0]} Years
                  </label>
                  <Slider
                    value={loanTenure}
                    onValueChange={setLoanTenure}
                    max={30}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-800 mb-2">₹{emi.toLocaleString()}</div>
                  <div className="text-gray-600">Monthly EMI</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest:</span>
                    <span className="font-semibold">
                      ₹{(emi * loanTenure[0] * 12 - loanAmount[0]).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-semibold">₹{(emi * loanTenure[0] * 12).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                    />
                    <Button className="w-full bg-white text-orange-800 hover:bg-gray-100">Subscribe</Button>
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
                    <Input placeholder="Property Address" />
                    <Input placeholder="Your Name" />
                    <Input placeholder="Phone Number" />
                    <Button className="w-full bg-orange-800 hover:bg-orange-700 text-white">Request Assessment</Button>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Ravitaj Constructions</h2>
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
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Select Service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="industrial">Industrial Construction</option>
                      <option value="hospitality">Hospitality Construction</option>
                      <option value="interior">Interior Works</option>
                    </select>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-800 to-orange-600 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">RTC</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building dreams and crafting excellence since 2021. Your trusted construction partner in Bangalore.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Construction</li>
                <li>Industrial Construction</li>
                <li>Hospitality Construction</li>
                <li>Interior Works</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#listings" className="hover:text-white transition-colors">
                    Listings
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Bangalore, Karnataka</li>
                <li>+91 [Phone Number]</li>
                <li>info@rtconstructions.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ravitaj Constructions (RTC). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
