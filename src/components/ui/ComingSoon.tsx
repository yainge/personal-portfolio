'use client'

import { motion } from 'framer-motion'
import { Clock, Lock, Wrench, Coffee } from 'lucide-react'

interface ComingSoonProps {
  title?: string
  message?: string
  variant?: 'default' | 'work' | 'projects' | 'content'
  showEstimate?: boolean
  estimatedDate?: string
}

const variantConfig = {
  default: {
    icon: Clock,
    bgClass: 'bg-sage-green-50',
    borderClass: 'border-sage-green-300',
    iconClass: 'text-sage-green-500',
    title: 'Coming Soon',
    message: 'This section is currently being crafted with care.'
  },
  work: {
    icon: Wrench,
    bgClass: 'bg-forest-green-50',
    borderClass: 'border-forest-green-300',
    iconClass: 'text-forest-green-500',
    title: 'Portfolio Under Construction',
    message: 'Curating and documenting my best work. Check back soon for detailed project showcases.'
  },
  projects: {
    icon: Lock,
    bgClass: 'bg-mint-green-50',
    borderClass: 'border-mint-green-300',
    iconClass: 'text-mint-green-500',
    title: 'Projects Being Documented',
    message: 'Adding detailed descriptions, images, and technical specifications to showcase the full story behind each project.'
  },
  content: {
    icon: Coffee,
    bgClass: 'bg-emerald-green-50',
    borderClass: 'border-emerald-green-300',
    iconClass: 'text-emerald-green-500',
    title: 'Content In Progress',
    message: 'Brewing up something special. This content is being carefully prepared.'
  }
}

export default function ComingSoon({ 
  title, 
  message, 
  variant = 'default', 
  showEstimate = false,
  estimatedDate
}: ComingSoonProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${config.bgClass} border-l-4 ${config.borderClass} p-12 text-center relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="bg-current opacity-20" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Icon className={`h-16 w-16 ${config.iconClass} mx-auto mb-4 floating`} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-serif font-bold text-dark-wood-950 mb-4 uppercase tracking-wide"
        >
          {title || config.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-dark-wood-700 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {message || config.message}
        </motion.p>

        {showEstimate && estimatedDate && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white border-l-4 border-dark-wood-400 px-4 py-2 text-sm font-medium text-dark-wood-700"
          >
            <Clock className="h-4 w-4" />
            <span>Expected: {estimatedDate}</span>
          </motion.div>
        )}

        {/* Progress Indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-8 h-1 bg-white/30 relative overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 2, 
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut'
            }}
            className={`absolute inset-0 ${config.bgClass.replace('50', '400')} opacity-60`}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-sm text-dark-wood-500 mt-4 italic"
        >
          Thank you for your patience while I craft quality content.
        </motion.p>
      </div>
    </motion.div>
  )
}