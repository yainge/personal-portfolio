'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Github, ExternalLink, Calendar, Clock, Award } from 'lucide-react'
import projectsData from '@/data/projects.json'
import ComingSoon from '@/components/ui/ComingSoon'

const categories = [
  { id: 'all', name: 'All Projects', count: projectsData.projects.length },
  { id: 'electronics', name: 'Electronics', count: projectsData.projects.filter(p => p.category === 'electronics').length },
  { id: 'development', name: 'Development', count: projectsData.projects.filter(p => p.category === 'development').length },
  { id: 'woodworking', name: 'Woodworking', count: projectsData.projects.filter(p => p.category === 'woodworking').length }
]

const statusColors = {
  'completed': 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'ongoing': 'bg-blue-100 text-blue-800'
}

const categoryColors = {
  'electronics': 'bg-purple-100 text-purple-800',
  'development': 'bg-blue-100 text-blue-800',
  'woodworking': 'bg-amber-100 text-amber-800'
}

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured') // featured, year, title

  const filteredProjects = useMemo(() => {
    let filtered = activeCategory === 'all' 
      ? projectsData.projects 
      : projectsData.projects.filter(project => project.category === activeCategory)

    // Sort projects
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return b.year - a.year
        case 'year':
          return b.year - a.year
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [activeCategory, sortBy])

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
            <h1 className="section-title mb-8">My Work</h1>
            <p className="text-xl text-dark-wood-700 max-w-3xl mx-auto leading-relaxed">
              A collection of projects spanning development, electronics, woodworking, and creative arts. 
              Each project represents the intersection of technology and traditional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="bg-cream-50/30 py-8 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
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
                <option value="featured">Featured First</option>
                <option value="year">Newest First</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Coming Soon */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComingSoon 
            variant="projects"
            showEstimate={true}
            estimatedDate="Early 2024"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cafe-card p-12"
          >
            <h2 className="text-3xl font-serif font-bold text-dark-wood-950 mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-dark-wood-700 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on projects that blend technology with traditional craftsmanship. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="cafe-button">
                Start a Project
              </a>
              <a href="/connect" className="cafe-button-outline">
                Connect With Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}