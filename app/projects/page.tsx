"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building, Home, Hotel, Palette, MapPin, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/layout/Breadcrumb"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { toast } = useToast()
  
  const handleViewProjectDetails = (projectTitle: string) => {
    toast({
      title: "Project Details",
      description: `Detailed information for ${projectTitle} will be available soon.`,
    })
  }

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      location: "Whitefield, Bangalore",
      description: "Modern 3BHK apartments with premium amenities including swimming pool, gym, and landscaped gardens.",
      fullDescription: "This premium residential complex features 120 luxury apartments with world-class amenities. Each apartment is designed with modern architecture and includes high-quality fixtures, modular kitchen, and spacious balconies with city views.",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      startDate: "Jan 2023",
      completionDate: "Dec 2023",
      area: "2.5 acres",
      units: "120 apartments",
      amenities: ["Swimming Pool", "Gym", "Clubhouse", "Children's Play Area", "24/7 Security"],
      features: ["3BHK & 4BHK", "Modular Kitchen", "Premium Fixtures", "Covered Parking"]
    },
    {
      id: 2,
      title: "Industrial Manufacturing Unit",
      location: "Electronic City, Bangalore",
      description: "State-of-the-art manufacturing facility for SKF India with modern infrastructure and safety standards.",
      fullDescription: "A 50,000 sq ft manufacturing facility built to international standards with advanced ventilation systems, heavy-duty flooring, and specialized electrical infrastructure for industrial equipment.",
      category: "industrial",
      image: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      startDate: "Mar 2022",
      completionDate: "Nov 2022",
      area: "50,000 sq ft",
      units: "Single unit",
      amenities: ["Advanced Ventilation", "Heavy Load Flooring", "Crane Support", "Safety Systems"],
      features: ["Earthquake Resistant", "Fire Safety", "Power Backup", "Loading Docks"]
    },
    {
      id: 3,
      title: "Boutique Hotel Project",
      location: "Koramangala, Bangalore",
      description: "Premium hospitality space with 45 rooms, restaurant, and conference facilities.",
      fullDescription: "A contemporary boutique hotel featuring 45 well-appointed rooms, multi-cuisine restaurant, conference hall, and rooftop lounge. Designed with modern aesthetics and luxury amenities.",
      category: "hospitality",
      image: "/placeholder.svg?height=400&width=600",
      status: "Ongoing",
      startDate: "Jun 2024",
      completionDate: "Mar 2025",
      area: "25,000 sq ft",
      units: "45 rooms",
      amenities: ["Restaurant", "Conference Hall", "Rooftop Lounge", "Spa", "Business Center"],
      features: ["Luxury Interiors", "Smart Rooms", "Banquet Hall", "Valet Parking"]
    },
    {
      id: 4,
      title: "Corporate Office Interiors",
      location: "MG Road, Bangalore",
      description: "Contemporary office design for Saddles International with open workspaces and meeting rooms.",
      fullDescription: "Complete interior transformation of a 15,000 sq ft office space featuring modern open workspaces, private cabins, meeting rooms, and recreational areas with ergonomic furniture and smart lighting.",
      category: "interior",
      image: "/placeholder.svg?height=400&width=600",
      status: "Completed",
      startDate: "Sep 2023",
      completionDate: "Dec 2023",
      area: "15,000 sq ft",
      units: "3 floors",
      amenities: ["Open Workspaces", "Meeting Rooms", "Cafeteria", "Recreation Area"],
      features: ["Ergonomic Design", "Smart Lighting", "Acoustic Solutions", "Green Spaces"]
    },
    {
      id: 5,
      title: "Premium Villa Development",
      location: "Sarjapur Road, Bangalore",
      description: "Exclusive gated community with 24 luxury villas featuring private gardens and premium amenities.",
      fullDescription: "An exclusive villa community spread across 8 acres featuring 24 independent villas with private gardens, clubhouse, and recreational facilities. Each villa is designed with contemporary architecture and luxury finishes.",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      status: "Ongoing",
      startDate: "Jan 2024",
      completionDate: "Dec 2025",
      area: "8 acres",
      units: "24 villas",
      amenities: ["Private Gardens", "Clubhouse", "Swimming Pool", "Tennis Court", "Security"],
      features: ["4BHK Villas", "Private Parking", "Solar Panels", "Rainwater Harvesting"]
    },
    {
      id: 6,
      title: "Tech Park Office Complex",
      location: "Outer Ring Road, Bangalore",
      description: "Modern office complex with sustainable design and world-class infrastructure for IT companies.",
      fullDescription: "A 200,000 sq ft Grade A office complex designed for IT companies with sustainable features, LEED certification, and state-of-the-art infrastructure including high-speed elevators and backup power systems.",
      category: "industrial",
      image: "/placeholder.svg?height=400&width=600",
      status: "Planning",
      startDate: "Aug 2025",
      completionDate: "Aug 2027",
      area: "200,000 sq ft",
      units: "10 floors",
      amenities: ["LEED Certified", "Food Court", "Parking", "High-speed Elevators"],
      features: ["Sustainable Design", "Smart Building", "Flexible Spaces", "Green Roof"]
    }
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(project => project.category === activeFilter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800"
      case "Ongoing": return "bg-blue-100 text-blue-800"
      case "Planning": return "bg-yellow-100 text-yellow-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of successful construction projects across residential, industrial, 
            hospitality, and interior design sectors. Each project reflects our commitment to quality and innovation.
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
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-orange-100">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button 
                      size="sm" 
                      className="bg-white text-gray-900 hover:bg-gray-100"
                      onClick={() => handleViewProjectDetails(project.title)}
                    >
                      View Details
                    </Button>
                  </div>
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <Badge variant="outline" className="border-orange-200 text-orange-800 ml-2">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-orange-600 font-medium mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.fullDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">
                        {project.startDate} - {project.completionDate}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">{project.area}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-orange-50 text-orange-700">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
                          +{project.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.amenities.slice(0, 4).map((amenity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-orange-800 hover:bg-orange-700 text-white"
                    onClick={() => handleViewProjectDetails(project.title)}
                  >
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-orange-800 to-orange-700 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Project Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-orange-100">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-orange-100">Sq Ft Constructed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-orange-100">On-Time Delivery</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
