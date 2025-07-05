"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, User, Tag, Clock, ChevronRight, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Breadcrumb } from "@/components/layout/Breadcrumb"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Home Design Trends for 2025",
      excerpt: "Discover the latest interior design trends that are shaping modern homes in 2025, from sustainable materials to smart home integration.",
      content: "The world of interior design continues to evolve, bringing fresh perspectives and innovative solutions to modern living spaces...",
      author: "Priya Sharma",
      date: "2024-12-15",
      category: "Design",
      tags: ["Interior Design", "Trends", "Modern Homes"],
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Construction: Building for the Future",
      excerpt: "Learn about eco-friendly construction practices and how sustainable building materials are revolutionizing the construction industry.",
      content: "Sustainability in construction is no longer just a trend—it's a necessity. As we face environmental challenges...",
      author: "Rajesh Patel",
      date: "2024-12-10",
      category: "Sustainability",
      tags: ["Green Building", "Sustainability", "Eco-Friendly"],
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 3,
      title: "Bangalore Real Estate Market Analysis Q4 2024",
      excerpt: "Comprehensive analysis of Bangalore's real estate market performance, pricing trends, and future predictions for 2025.",
      content: "The Bangalore real estate market has shown remarkable resilience and growth throughout 2024...",
      author: "Market Research Team",
      date: "2024-12-05",
      category: "Market Analysis",
      tags: ["Real Estate", "Bangalore", "Market Trends"],
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true
    },
    {
      id: 4,
      title: "Smart Home Technology Integration in Modern Construction",
      excerpt: "Exploring how smart home technologies are being integrated into new construction projects and their impact on daily living.",
      content: "The integration of smart home technology in construction has transformed how we interact with our living spaces...",
      author: "Tech Team",
      date: "2024-11-28",
      category: "Technology",
      tags: ["Smart Homes", "Technology", "Automation"],
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 5,
      title: "Understanding RERA: A Homebuyer's Guide",
      excerpt: "Everything you need to know about RERA regulations and how they protect homebuyers in real estate transactions.",
      content: "The Real Estate Regulation and Development Act (RERA) has brought transparency and accountability to the real estate sector...",
      author: "Legal Team",
      date: "2024-11-20",
      category: "Legal",
      tags: ["RERA", "Legal", "Home Buying"],
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 6,
      title: "Maximizing Natural Light in Your Home Design",
      excerpt: "Tips and techniques for incorporating natural light into your home design to create bright, welcoming spaces.",
      content: "Natural light plays a crucial role in creating comfortable and healthy living environments...",
      author: "Anita Reddy",
      date: "2024-11-15",
      category: "Design",
      tags: ["Lighting", "Architecture", "Design Tips"],
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 7,
      title: "Construction Safety: Best Practices and Standards",
      excerpt: "Essential safety protocols and best practices that ensure worker safety and project success in construction sites.",
      content: "Construction safety is paramount in ensuring successful project completion and worker wellbeing...",
      author: "Safety Team",
      date: "2024-11-10",
      category: "Safety",
      tags: ["Safety", "Construction", "Best Practices"],
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 8,
      title: "Investment Opportunities in Bangalore's Emerging Areas",
      excerpt: "Discover the most promising areas in Bangalore for real estate investment and their growth potential.",
      content: "Bangalore continues to be one of India's most attractive cities for real estate investment...",
      author: "Investment Team",
      date: "2024-11-05",
      category: "Investment",
      tags: ["Investment", "Bangalore", "Growth Areas"],
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    }
  ]

  const categories = ["Design", "Sustainability", "Market Analysis", "Technology", "Legal", "Safety", "Investment"]
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)

    return matchesSearch && matchesCategory && matchesTag
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Design": "bg-purple-100 text-purple-800",
      "Sustainability": "bg-green-100 text-green-800",
      "Market Analysis": "bg-blue-100 text-blue-800",
      "Technology": "bg-indigo-100 text-indigo-800",
      "Legal": "bg-red-100 text-red-800",
      "Safety": "bg-yellow-100 text-yellow-800",
      "Investment": "bg-orange-100 text-orange-800"
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Construction & Real Estate Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in construction, real estate, and home design.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="border-orange-100">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-orange-200 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-orange-200">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={selectedTag} onValueChange={setSelectedTag}>
                    <SelectTrigger className="border-orange-200">
                      <SelectValue placeholder="All Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Tags</SelectItem>
                      {allTags.map(tag => (
                        <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-orange-800 text-white">
                        Featured
                      </Badge>
                      <Badge className={`absolute top-4 right-4 ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.date)}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-800 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <Button variant="ghost" className="text-orange-800 hover:bg-orange-50 p-0">
                          Read More <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Regular Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-4 right-4 ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(post.date)}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-800 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1 text-sm">{post.excerpt}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-orange-50 text-orange-700">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <Button variant="ghost" className="text-orange-800 hover:bg-orange-50 p-0">
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("")
                setSelectedTag("")
              }}
              className="bg-orange-800 hover:bg-orange-700 text-white"
            >
              Reset Filters
            </Button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-orange-800 to-orange-700 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, market insights, and construction tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-orange-800 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore Categories</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryPosts = blogPosts.filter(post => post.category === category)
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center border-orange-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-6">
                      <Badge className={`${getCategoryColor(category)} mb-3`}>
                        {category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                      <p className="text-sm text-gray-600">
                        {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
