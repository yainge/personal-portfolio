'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Tag, User, Search, Filter, BookOpen, TrendingUp, Star } from 'lucide-react'
import blogData from '@/data/blog-posts.json'
import ComingSoon from '@/components/ui/ComingSoon'

const categories = [
  { id: 'all', name: 'All Posts', count: blogData.posts.length },
  ...blogData.categories.map(cat => ({
    id: cat.toLowerCase(),
    name: cat,
    count: blogData.posts.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length
  }))
]

const sortOptions = [
  { id: 'date', name: 'Latest First' },
  { id: 'featured', name: 'Featured First' },
  { id: 'popular', name: 'Most Read' },
  { id: 'title', name: 'Alphabetical' }
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogData.posts

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.category.toLowerCase() === activeCategory.toLowerCase()
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Sort posts
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case 'date':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [activeCategory, sortBy, searchQuery])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const featuredPost = blogData.posts.find(post => post.featured) || blogData.posts[0]

  return (
    <div className="min-h-screen py-20">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="section-title mb-8">Blog</h1>
            <p className="text-xl text-dark-wood-700 max-w-3xl mx-auto leading-relaxed">
              Insights from the intersection of technology and craft. Stories from the workshop, 
              code experiments, and reflections on creating meaningful work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content - Coming Soon */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComingSoon 
            variant="content"
            title="Blog Coming Soon"
            message="I'm currently writing in-depth articles about technology, craftsmanship, and the creative process. Quality content takes time to craft properly."
            showEstimate={true}
            estimatedDate="February 2024"
          />
        </div>
      </section>

      {/* Temporarily hidden - Featured Post */}
      {false && featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="cafe-card p-0 overflow-hidden group hover:shadow-cafe-lg transition-shadow duration-300"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gold-500 text-dark-wood-950 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Featured</span>
                  </span>
                </div>
                
                {/* Featured Post Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-dark-wood-200 to-dark-wood-400 flex items-center justify-center">
                  <div className="text-center text-dark-wood-600">
                    <BookOpen className="h-16 w-16 mx-auto mb-4" />
                    <div className="text-lg font-medium">Featured Article</div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-dark-wood-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-dark-wood-950 mb-4 group-hover:text-dark-wood-800 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-dark-wood-700 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center space-x-1 text-xs bg-cream-100 text-dark-wood-700 px-2 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="cafe-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Article
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="bg-cream-50/30 py-8 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-wood-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cafe-input w-full pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-dark-wood-950 text-cream-50 shadow-cafe'
                      : 'bg-cream-50 text-dark-wood-800 hover:bg-cream-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                  <span className={`ml-2 text-sm ${
                    activeCategory === category.id ? 'text-cream-200' : 'text-dark-wood-500'
                  }`}>
                    ({category.count})
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-dark-wood-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="cafe-input text-sm py-2 px-3"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredAndSortedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cafe-card group hover:shadow-cafe-lg transition-shadow duration-300 cursor-pointer"
                >
                  {/* Post Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-dark-wood-200 to-dark-wood-400 rounded-lg mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-dark-wood-600">
                        <BookOpen className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-sm font-medium">{post.category}</div>
                      </div>
                    </div>
                    
                    {post.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-gold-500 text-dark-wood-950 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>Featured</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4">
                    {/* Metadata */}
                    <div className="flex items-center justify-between text-sm text-dark-wood-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-semibold text-dark-wood-950 leading-tight group-hover:text-dark-wood-800 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-dark-wood-700 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-cream-100 text-dark-wood-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-dark-wood-500 px-2 py-1">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Author & Category */}
                    <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                      <div className="flex items-center space-x-2 text-sm text-dark-wood-600">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-xs bg-dark-wood-950 text-cream-50 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredAndSortedPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-dark-wood-950 mb-2">
                No articles found
              </h3>
              <p className="text-dark-wood-600 mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                  setSortBy('date')
                }}
                className="cafe-button-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-cream-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cafe-card p-12 text-center"
          >
            <TrendingUp className="h-16 w-16 text-dark-wood-600 mx-auto mb-8 floating" />
            <h2 className="text-3xl font-serif font-bold text-dark-wood-950 mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-dark-wood-700 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about technology, craftsmanship, 
              and the creative process. Quality content, no spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="cafe-input flex-1"
              />
              <motion.button
                className="cafe-button px-8 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-dark-wood-600 mt-4">
              Join {Math.floor(Math.random() * 500 + 100)}+ subscribers • Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}