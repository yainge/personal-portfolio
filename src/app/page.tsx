'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Hammer, Palette, Coffee, Sparkles, Github, ExternalLink } from 'lucide-react'
import DailyQuote from '@/components/ui/DailyQuote'

const skills = [
  { name: 'Development', icon: Code, color: 'text-forest-green-600', accent: 'accent-green-forest' },
  { name: 'Woodworking', icon: Hammer, color: 'text-sage-green-600', accent: 'accent-green-sage' },
  { name: 'Electronics', icon: Sparkles, color: 'text-mint-green-600', accent: 'accent-green-mint' },
  { name: 'Creative Arts', icon: Palette, color: 'text-emerald-green-600', accent: 'accent-green-emerald' },
]

const featuredProjects = [
  {
    id: 'pov-led-poi',
    title: 'Programmable POV LED Strip Poi',
    category: 'Electronics',
    description: 'Interactive LED poi using persistence of vision effects to create stunning light displays with programmable patterns and wireless sync.',
    image: '/api/placeholder/600/400',
    technologies: ['Arduino', 'C++', 'WS2812B', 'IMU Sensors', 'Bluetooth'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 'organization-app',
    title: 'Personal Organization App',
    category: 'Development',
    description: 'Streamlined task management built with modern web technologies, optimized for creative professionals.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    id: 'custom-tables',
    title: 'Custom Dining Tables',
    category: 'Woodworking',
    description: 'Handcrafted furniture featuring traditional joinery and modern design aesthetics.',
    image: '/api/placeholder/600/400',
    technologies: ['Hardwood', 'Mortise & Tenon', 'Hand Tools', 'Natural Finish'],
    github: '#',
    demo: '#',
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-cream-100/30 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-cream-50/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-cream-50 px-4 py-2 rounded-full text-sm font-medium text-dark-wood-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Coffee className="h-4 w-4" />
                <span>Available for new projects</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-cream-50 mb-6 text-shadow">
                <span className="block">Yuki</span>
                <span className="block text-cream-100/90">Ainge</span>
              </h1>

              <div className="text-xl lg:text-2xl text-cream-100/80 mb-6 space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <span>Developer</span>
                  <span className="text-cream-200">•</span>
                  <span>Maker</span>
                  <span className="text-cream-200">•</span>
                  <span>Creator</span>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-cream-100/70 mb-8 max-w-xl leading-relaxed"
              >
                Where code meets craft. I build digital solutions and create tangible art, 
                bridging the gap between technology and traditional making through 
                development, electronics, woodworking, and creative expression.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/work" className="modern-button group">
                  <span>Explore My Work</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/connect" className="modern-button-outline">
                  Let's Connect
                </Link>
              </motion.div>

              {/* Skills Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center space-x-6 mt-12"
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center group cursor-pointer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="bg-cream-50/20 p-3 rounded-lg group-hover:bg-cream-50/30 transition-colors duration-300">
                        <Icon className={`h-6 w-6 text-cream-200`} />
                      </div>
                      <span className="text-xs text-cream-200/60 mt-2 group-hover:text-cream-200/80 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Daily Quote */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <DailyQuote />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-cream-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Featured Work</h2>
            <p className="text-lg text-dark-wood-700 max-w-2xl mx-auto">
              A selection of projects that showcase the intersection of technology and traditional craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gold-500 text-dark-wood-950 px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Featured
                  </div>
                )}

                <div className="aspect-video bg-dark-wood-100 rounded-lg mb-4 overflow-hidden">
                  <div className="project-image w-full h-full bg-gradient-to-br from-dark-wood-200 to-dark-wood-300 flex items-center justify-center">
                    <span className="text-dark-wood-600 font-medium">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-dark-wood-950 text-cream-50 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-dark-wood-950">
                    {project.title}
                  </h3>

                  <p className="text-dark-wood-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-cream-100 text-dark-wood-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-dark-wood-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-dark-wood-600 hover:text-dark-wood-800 transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 text-dark-wood-600 hover:text-dark-wood-800 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/work" className="cafe-button">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cafe-card p-12 relative"
          >
            <Coffee className="h-12 w-12 text-dark-wood-600 mx-auto mb-6 floating" />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-dark-wood-950 mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg text-dark-wood-700 mb-8 max-w-2xl mx-auto">
              Whether it's a digital solution, a handcrafted piece, or an innovative blend of both, 
              I'm always excited to collaborate on meaningful projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="cafe-button">
                Start a Project
              </Link>
              <Link href="/connect" className="cafe-button-outline">
                Connect With Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
