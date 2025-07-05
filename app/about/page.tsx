"use client"

import { motion } from "framer-motion"
import { Building, Users, Award, Clock, CheckCircle, Target, Shield, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/layout/Breadcrumb"

export default function AboutPage() {
  const { toast } = useToast()
  
  const handleGetConsultation = () => {
    toast({
      title: "Consultation Request",
      description: "Thank you for your interest! Our team will contact you within 24 hours to schedule your free consultation.",
    })
  }
  const milestones = [
    { year: "2021", event: "RTC Founded", description: "Started with a vision to deliver premium construction solutions" },
    { year: "2022", event: "First Major Project", description: "Completed our first industrial manufacturing facility" },
    { year: "2023", event: "Residential Excellence", description: "Delivered luxury residential complex in Whitefield" },
    { year: "2024", event: "Hospitality Venture", description: "Entered hospitality sector with boutique hotel project" },
    { year: "2025", event: "Tech Park Development", description: "Planning our largest project - Grade A office complex" }
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We never compromise on quality. Every project undergoes rigorous quality checks and uses premium materials."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure all projects are completed on time without compromising quality."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. We build relationships, not just structures."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and innovative construction methods to deliver superior results."
    }
  ]

  const team = [
    {
      name: "Ravitej Kumar",
      role: "Founder & CEO",
      experience: "15+ years",
      specialization: "Construction Management",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Chief Architect",
      experience: "12+ years",
      specialization: "Sustainable Design",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Rajesh Patel",
      role: "Project Manager",
      experience: "10+ years",
      specialization: "Industrial Construction",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Anita Reddy",
      role: "Interior Designer",
      experience: "8+ years",
      specialization: "Commercial Interiors",
      image: "/placeholder-user.jpg"
    }
  ]

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "LEED Green Building Certification",
    "OSHA Safety Standards Compliance",
    "Bureau of Indian Standards (BIS) Certification",
    "RERA Registration"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" }
        ]} />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About RTC</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2021, Ravitej Constructions has been at the forefront of premium construction solutions, 
            delivering excellence across residential, industrial, hospitality, and interior design sectors.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2021 with a vision to transform the construction landscape in Bangalore, 
                  RTC has grown from a small team with big dreams to a trusted name in premium construction.
                </p>
                <p>
                  Our journey began with a simple belief: that every structure we build should be a 
                  testament to quality, innovation, and customer satisfaction. From our first project 
                  to our latest developments, we have maintained this core philosophy.
                </p>
                <p>
                  Today, we are proud to have delivered successful projects and continue to 
                  maintain this core philosophy in every structure we build.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="RTC Construction Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-800 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To deliver exceptional construction solutions that exceed client expectations while 
                  maintaining the highest standards of quality, safety, and sustainability. We strive 
                  to build lasting relationships through trust, transparency, and timely delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-orange-800 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be the most trusted and innovative construction company in South India, known for 
                  our commitment to excellence, sustainable practices, and customer-centric approach. 
                  We envision creating spaces that enhance lives and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="text-center border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-orange-800" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="border-orange-100">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-orange-800 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-orange-800 rounded-full relative z-10"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="text-center border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-1">{member.experience}</p>
                    <p className="text-sm text-gray-500">{member.specialization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Compliance</h2>
          <Card className="border-orange-100">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-gradient-to-r from-orange-800 to-orange-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Build with Us?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your construction needs and turn your vision into reality with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-800 hover:bg-gray-100"
              onClick={handleGetConsultation}
            >
              Get Free Consultation
            </Button>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-800">
                View Our Projects
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
