'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

interface QuoteData {
  text: string
  author?: string
  date: string
  id: string
}

// Sample quotes - will be replaced with real data from API
const sampleQuotes: QuoteData[] = [
  {
    id: '1',
    text: "The intersection of technology and craft creates endless possibilities.",
    author: "Yuki Ainge",
    date: '2024-01-15'
  },
  {
    id: '2', 
    text: "Every line of code is a brushstroke in the digital canvas.",
    date: '2024-01-16'
  },
  {
    id: '3',
    text: "Traditional woodworking teaches patience that makes better developers.",
    date: '2024-01-17'
  }
]

export default function DailyQuote() {
  const [currentQuote, setCurrentQuote] = useState<QuoteData | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Get today's quote based on date
    const dayIndex = new Date().getDate() % sampleQuotes.length
    setCurrentQuote(sampleQuotes[dayIndex])
  }, [])

  const refreshQuote = () => {
    setIsVisible(false)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sampleQuotes.length)
      setCurrentQuote(sampleQuotes[randomIndex])
      setIsVisible(true)
    }, 300)
  }

  if (!currentQuote) return null

  return (
    <motion.div
      className="daily-quote max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex items-start space-x-4">
        <motion.div
          className="bg-dark-wood-950 p-3 rounded-full flex-shrink-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Quote className="h-6 w-6 text-cream-50" />
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentQuote.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-lg md:text-xl text-dark-wood-900 font-medium leading-relaxed mb-3">
                  {currentQuote.text}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    {currentQuote.author && (
                      <p className="text-dark-wood-700 font-medium text-sm">
                        — {currentQuote.author}
                      </p>
                    )}
                    <p className="text-dark-wood-500 text-xs mt-1">
                      Daily inspiration
                    </p>
                  </div>
                  
                  <motion.button
                    onClick={refreshQuote}
                    className="text-dark-wood-600 hover:text-dark-wood-800 transition-colors duration-300 p-2 rounded-full hover:bg-dark-wood-100"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 bg-dark-wood-200/20 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-12 h-12 bg-dark-wood-300/20 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
        />
      </div>
    </motion.div>
  )
}