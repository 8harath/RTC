"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, User, Tag, Clock, ChevronRight, Search, Filter, TrendingUp, BookOpen, ArrowUp, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/layout/Breadcrumb"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTag, setSelectedTag] = useState("all")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const { toast } = useToast()
  
  const handleReadMore = (title: string) => {
    toast({
      title: "Article",
      description: `Full article for "${title}" will be available soon.`,
    })
  }
  
  const handleNewsletterSubscribe = () => {
    if (!newsletterEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      })
      return
    }
    
    toast({
      title: "Subscribed Successfully!",
      description: "Thank you for subscribing to our newsletter. You'll receive the latest updates.",
    })
    setNewsletterEmail("")
  }

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Home Design Trends for 2025",
      excerpt: "Discover the latest interior design trends that are shaping modern homes in 2025, from sustainable materials to smart home integration.",
      content: "The world of interior design continues to evolve, bringing fresh perspectives and innovative solutions to modern living spaces. This year, we're seeing a shift towards more sustainable materials, biophilic design elements, and seamless technology integration...",
      author: "Priya Sharma",
      authorRole: "Chief Architect",
      date: "2024-12-15",
      category: "Design",
      tags: ["Interior Design", "Trends", "Modern Homes", "2025 Trends"],
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      views: "2.3k",
      likes: 45,
      isPopular: true
    },
    {
      id: 2,
      title: "Sustainable Construction: Building for the Future",
      excerpt: "Learn about eco-friendly construction practices and how sustainable building materials are revolutionizing the construction industry.",
      content: "Sustainability in construction is no longer just a trend—it's a necessity. As we face environmental challenges, the construction industry is adapting with innovative green building practices...",
      author: "Rajesh Patel",
      authorRole: "Project Manager",
      date: "2024-12-10",
      category: "Sustainability",
      tags: ["Green Building", "Sustainability", "Eco-Friendly", "Environment"],
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: "1.8k",
      likes: 32,
      isPopular: false
    },
    {
      id: 3,
      title: "Bangalore Real Estate Market Analysis Q4 2024",
      excerpt: "Comprehensive analysis of Bangalore's real estate market performance, pricing trends, and future predictions for 2025.",
      content: "The Bangalore real estate market has shown remarkable resilience and growth throughout 2024. Our comprehensive analysis reveals key insights into pricing trends, emerging localities, and investment opportunities...",
      author: "Market Research Team",
      authorRole: "Research Analysts",
      date: "2024-12-05",
      category: "Market Analysis",
      tags: ["Real Estate", "Bangalore", "Market Trends", "Investment"],
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      views: "3.1k",
      likes: 67,
      isPopular: true
    },
    {
      id: 4,
      title: "Smart Home Technology Integration in Modern Construction",
      excerpt: "Exploring how smart home technologies are being integrated into new construction projects and their impact on daily living.",
      content: "The integration of smart home technology in construction has transformed how we interact with our living spaces. From automated lighting systems to AI-powered climate control...",
      author: "Tech Team",
      authorRole: "Technology Specialists",
      date: "2024-11-28",
      category: "Technology",
      tags: ["Smart Homes", "Technology", "Automation", "IoT"],
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: "1.5k",
      likes: 28,
      isPopular: false
    },
    {
      id: 5,
      title: "Understanding RERA: A Homebuyer's Guide",
      excerpt: "Everything you need to know about RERA regulations and how they protect homebuyers in real estate transactions.",
      content: "The Real Estate Regulation and Development Act (RERA) has brought transparency and accountability to the real estate sector. This comprehensive guide covers everything homebuyers need to know...",
      author: "Legal Team",
      authorRole: "Legal Advisors",
      date: "2024-11-20",
      category: "Legal",
      tags: ["RERA", "Legal", "Home Buying", "Regulations"],
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: "2.0k",
      likes: 41,
      isPopular: false
    },
    {
      id: 6,
      title: "Maximizing Natural Light in Your Home Design",
      excerpt: "Tips and techniques for incorporating natural light into your home design to create bright, welcoming spaces.",
      content: "Natural light plays a crucial role in creating comfortable and healthy living environments. Our expert tips will help you maximize natural light in your home design...",
      author: "Anita Reddy",
      authorRole: "Interior Designer",
      date: "2024-11-15",
      category: "Design",
      tags: ["Lighting", "Architecture", "Design Tips", "Natural Light"],
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: "1.2k",
      likes: 23,
      isPopular: false
    },
    {
      id: 7,
      title: "Construction Safety: Best Practices and Standards",
      excerpt: "Essential safety protocols and best practices that ensure worker safety and project success in construction sites.",
      content: "Construction safety is paramount in ensuring successful project completion and worker wellbeing. Our comprehensive guide covers industry-standard safety protocols...",
      author: "Safety Team",
      authorRole: "Safety Officers",
      date: "2024-11-10",
      category: "Safety",
      tags: ["Safety", "Construction", "Best Practices", "Protocols"],
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: "1.7k",
      likes: 34,
      isPopular: false
    },
    {
      id: 8,
      title: "Investment Opportunities in Bangalore's Emerging Areas",
      excerpt: "Discover the most promising areas in Bangalore for real estate investment and their growth potential.",
      content: "Bangalore continues to be one of India's most attractive cities for real estate investment. Our analysis identifies emerging areas with high growth potential...",
      author: "Investment Team",
      authorRole: "Investment Advisors",
      date: "2024-11-05",
      category: "Investment",
      tags: ["Investment", "Bangalore", "Growth Areas", "ROI"],
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      views: "2.5k",
      likes: 52,
      isPopular: true
    }
  ]

  const categories = ["Design", "Sustainability", "Market Analysis", "Technology", "Legal", "Safety", "Investment"]
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag)

    return matchesSearch && matchesCategory && matchesTag
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)
  const popularPosts = blogPosts.filter(post => post.isPopular).slice(0, 3)
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4)

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
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-orange-800 mr-3" />
            <Badge className="bg-orange-100 text-orange-800 px-3 py-1">
              Latest Insights
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Construction & Real Estate Insights</h1>
          <div className="mb-6">
            <p className="text-2xl font-medium text-orange-800 mb-4 italic">
              "Inspired by you. Engineered by us."
            </p>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in construction, real estate, and home design from our team of experts.
          </p>
          
          {/* Blog Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-800">{blogPosts.length}+</div>
              <div className="text-sm text-gray-600">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-800">{categories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-800">10k+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </motion.div>

        {/* Trending Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <TrendingUp className="w-6 h-6 text-orange-800 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Trending This Week</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {popularPosts.map((post, index) => (
              <motion.div
                key={`popular-${post.id}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-orange-100 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl font-bold text-orange-800 mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-800 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                          <span className="mx-2">•</span>
                          <span>{post.views} views</span>
                        </div>
                        <Badge className={`${getCategoryColor(post.category)} text-xs`}>
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
                      <SelectItem value="all">All Categories</SelectItem>
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
                      <SelectItem value="all">All Tags</SelectItem>
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
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
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
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-orange-800 text-white">
                        Featured
                      </Badge>
                      <Badge className={`absolute top-4 right-4 ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                      
                      {/* Article Actions */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                          <span>{post.views} views</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-800 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-orange-50 text-orange-700 hover:bg-orange-100 cursor-pointer">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-orange-800" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{post.author}</div>
                            <div className="text-xs text-gray-500">{post.authorRole}</div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="text-orange-800 hover:bg-orange-50"
                          onClick={() => handleReadMore(post.title)}
                        >
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Articles */}
          <div className="lg:col-span-3">
            {/* Regular Posts */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                <p className="text-gray-600">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
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
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(post.date)}
                          </div>
                          <span>{post.readTime}</span>
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
                          <Button 
                            variant="ghost" 
                            className="text-orange-800 hover:bg-orange-50 p-0"
                            onClick={() => handleReadMore(post.title)}
                          >
                            Read More <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8 sticky top-8"
            >
              {/* Recent Posts */}
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-orange-800" />
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={`recent-${post.id}`} className="group cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition-colors">
                      <h4 className="font-medium text-sm text-gray-900 group-hover:text-orange-800 mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.date)}
                        <span className="mx-2">•</span>
                        <span>{post.views}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-orange-800" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const count = blogPosts.filter(post => post.category === category).length
                      return (
                        <div key={category} className="flex items-center justify-between p-2 rounded-lg hover:bg-orange-50 cursor-pointer transition-colors">
                          <span className="text-sm text-gray-700 hover:text-orange-800">{category}</span>
                          <Badge variant="secondary" className="text-xs">
                            {count}
                          </Badge>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup Sidebar */}
              <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowUp className="w-6 h-6 text-white transform rotate-45" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-4">Get weekly insights delivered to your inbox</p>
                  <Input
                    placeholder="Your email"
                    className="mb-3 text-sm"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <Button 
                    size="sm" 
                    className="w-full bg-orange-800 hover:bg-orange-700"
                    onClick={handleNewsletterSubscribe}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

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
                setSelectedCategory("all")
                setSelectedTag("all")
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
          transition={{ delay: 0.6 }}
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
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <Button 
              className="bg-white text-orange-800 hover:bg-gray-100"
              onClick={handleNewsletterSubscribe}
            >
              Subscribe
            </Button>
          </div>
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
                  transition={{ delay: 0.7 + index * 0.1 }}
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
