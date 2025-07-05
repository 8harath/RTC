"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Bed, Bath, Square, Heart, Share2, Filter, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Breadcrumb } from "@/components/layout/Breadcrumb"

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedBHK, setSelectedBHK] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const properties = [
    {
      id: 1,
      title: "RTC Grandeur",
      location: "Whitefield, Bangalore",
      price: 8550000,
      pricePerSqft: 6840,
      area: 1250,
      type: "apartment",
      bhk: "3",
      bathrooms: 2,
      specs: ["3 BHK", "1,250 sq.ft", "Ready to Move"],
      badge: "New Launch",
      status: "ready",
      amenities: ["Swimming Pool", "Gym", "Clubhouse", "Security", "Parking"],
      description: "Luxury 3BHK apartments with premium amenities in prime Whitefield location.",
      images: ["/placeholder.svg?height=300&width=400"],
      developer: "RTC Constructions",
      possession: "Immediate",
      furnishing: "Semi-Furnished"
    },
    {
      id: 2,
      title: "RTC Elite",
      location: "Electronic City, Bangalore",
      price: 12000000,
      pricePerSqft: 7200,
      area: 1650,
      type: "apartment",
      bhk: "4",
      bathrooms: 3,
      specs: ["4 BHK", "1,650 sq.ft", "Under Construction"],
      badge: "Premium",
      status: "construction",
      amenities: ["Swimming Pool", "Gym", "Clubhouse", "Security", "Parking", "Garden"],
      description: "Spacious 4BHK apartments with modern amenities in Electronic City.",
      images: ["/placeholder.svg?height=300&width=400"],
      developer: "RTC Constructions",
      possession: "Mar 2025",
      furnishing: "Unfurnished"
    },
    {
      id: 3,
      title: "RTC Premium Villas",
      location: "Sarjapur Road, Bangalore",
      price: 25000000,
      pricePerSqft: 8500,
      area: 2940,
      type: "villa",
      bhk: "4",
      bathrooms: 4,
      specs: ["4 BHK", "2,940 sq.ft", "Under Construction"],
      badge: "Luxury",
      status: "construction",
      amenities: ["Private Garden", "Swimming Pool", "Security", "Clubhouse", "Tennis Court"],
      description: "Independent luxury villas with private gardens and premium amenities.",
      images: ["/placeholder.svg?height=300&width=400"],
      developer: "RTC Constructions",
      possession: "Dec 2025",
      furnishing: "Unfurnished"
    },
    {
      id: 4,
      title: "RTC Business Park",
      location: "Outer Ring Road, Bangalore",
      price: 45000000,
      pricePerSqft: 9000,
      area: 5000,
      type: "commercial",
      bhk: "Office",
      bathrooms: 6,
      specs: ["Office Space", "5,000 sq.ft", "Ready to Move"],
      badge: "Commercial",
      status: "ready",
      amenities: ["Parking", "Security", "Power Backup", "Elevators", "Cafeteria"],
      description: "Prime commercial office space in IT corridor with modern facilities.",
      images: ["/placeholder.svg?height=300&width=400"],
      developer: "RTC Constructions",
      possession: "Immediate",
      furnishing: "Unfurnished"
    },
    {
      id: 5,
      title: "RTC Residency",
      location: "Koramangala, Bangalore",
      price: 9500000,
      pricePerSqft: 7300,
      area: 1300,
      type: "apartment",
      bhk: "3",
      bathrooms: 2,
      specs: ["3 BHK", "1,300 sq.ft", "Ready to Move"],
      badge: "Best Value",
      status: "ready",
      amenities: ["Gym", "Security", "Parking", "Playground", "Garden"],
      description: "Well-designed 3BHK apartments in the heart of Koramangala.",
      images: ["/placeholder.svg?height=300&width=400"],
      developer: "RTC Constructions",
      possession: "Immediate",
      furnishing: "Semi-Furnished"
    },
    {
      id: 6,
      title: "RTC Sky Heights",
      location: "Hebbal, Bangalore",
      price: 7200000,
      pricePerSqft: 6000,
      area: 1200,
      type: "apartment",
      bhk: "2",
      bathrooms: 2,
      specs: ["2 BHK", "1,200 sq.ft", "Under Construction"],
      badge: "Affordable",
      status: "construction",
      amenities: ["Swimming Pool", "Gym", "Security", "Parking"],
      description: "Affordable 2BHK apartments with good connectivity and amenities.",
      images: ["/placeholder.svg?height=300&width=400"],
      developer: "RTC Constructions",
      possession: "Jun 2025",
      furnishing: "Unfurnished"
    }
  ]

  const locations = ["Whitefield", "Electronic City", "Sarjapur Road", "Outer Ring Road", "Koramangala", "Hebbal"]
  const propertyTypes = ["apartment", "villa", "commercial"]
  const bhkOptions = ["1", "2", "3", "4", "Office"]

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
    const matchesLocation = !selectedLocation || property.location.includes(selectedLocation)
    const matchesType = !selectedType || property.type === selectedType
    const matchesBHK = !selectedBHK || property.bhk === selectedBHK

    return matchesSearch && matchesPrice && matchesLocation && matchesType && matchesBHK
  })

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`
    }
    return `₹${(price / 100000).toFixed(1)} L`
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "New Launch": return "bg-green-100 text-green-800"
      case "Premium": return "bg-blue-100 text-blue-800"
      case "Luxury": return "bg-purple-100 text-purple-800"
      case "Commercial": return "bg-orange-100 text-orange-800"
      case "Best Value": return "bg-yellow-100 text-yellow-800"
      case "Affordable": return "bg-emerald-100 text-emerald-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready": return "bg-green-100 text-green-800"
      case "construction": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Properties", href: "/properties" }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Property Listings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your dream property from our premium collection of residential, commercial, and luxury developments.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border-orange-100">
            <CardContent className="p-6">
              {/* Search Bar */}
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search by property name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-orange-200 focus:border-orange-500"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-orange-200 text-orange-800 hover:bg-orange-50"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-orange-100 pt-4"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="border-orange-200">
                          <SelectValue placeholder="Any Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any Location</SelectItem>
                          {locations.map(location => (
                            <SelectItem key={location} value={location}>{location}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger className="border-orange-200">
                          <SelectValue placeholder="Any Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any Type</SelectItem>
                          {propertyTypes.map(type => (
                            <SelectItem key={type} value={type}>
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">BHK</label>
                      <Select value={selectedBHK} onValueChange={setSelectedBHK}>
                        <SelectTrigger className="border-orange-200">
                          <SelectValue placeholder="Any BHK" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any BHK</SelectItem>
                          {bhkOptions.map(bhk => (
                            <SelectItem key={bhk} value={bhk}>
                              {bhk === "Office" ? "Office Space" : `${bhk} BHK`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-end">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedLocation("")
                          setSelectedType("")
                          setSelectedBHK("")
                          setPriceRange([0, 10000000])
                          setSearchTerm("")
                        }}
                        className="w-full border-orange-200 text-orange-800 hover:bg-orange-50"
                      >
                        Reset Filters
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={50000000}
                      min={0}
                      step={500000}
                      className="w-full"
                    />
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100">
                <div className="relative overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getBadgeColor(property.badge)}>
                      {property.badge}
                    </Badge>
                    <Badge className={getStatusColor(property.status)}>
                      {property.status === "ready" ? "Ready to Move" : "Under Construction"}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="p-2 h-8 w-8">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="p-2 h-8 w-8">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {formatPrice(property.price)}
                        </div>
                        <div className="text-sm text-gray-600">
                          ₹{property.pricePerSqft.toLocaleString()}/sq.ft
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  
                  <div className="flex items-center text-orange-600 font-medium mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{property.description}</p>

                  <div className="flex justify-between items-center mb-4 text-sm">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-600">{property.bhk === "Office" ? "Office" : `${property.bhk} BHK`}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-600">{property.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-600">{property.area} sq.ft</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Key Details:</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Developer:</span>
                        <div className="font-medium">{property.developer}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Possession:</span>
                        <div className="font-medium">{property.possession}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Amenities:</div>
                    <div className="flex flex-wrap gap-1">
                      {property.amenities.slice(0, 3).map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-orange-50 text-orange-700">
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
                          +{property.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-orange-800 hover:bg-orange-700 text-white">
                      View Details
                    </Button>
                    <Button variant="outline" className="border-orange-200 text-orange-800 hover:bg-orange-50">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedLocation("")
                setSelectedType("")
                setSelectedBHK("")
                setPriceRange([0, 10000000])
              }}
              className="bg-orange-800 hover:bg-orange-700 text-white"
            >
              Reset All Filters
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-orange-800 to-orange-700 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Didn't Find What You're Looking For?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let us know your requirements and we'll help you find the perfect property that matches your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-800 hover:bg-gray-100">
              Post Your Requirements
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-800">
              Contact Our Experts
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
