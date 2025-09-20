'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, User, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission - replace with your actual form handler
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen py-20">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="section-title mb-8">Get in Touch</h1>
            <p className="text-xl text-dark-wood-700 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Want to collaborate? Or just want to say hello?
              I'd love to hear from you. Drop me a message and I'll get back to you soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cafe-card p-8"
          >
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 text-forest-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-dark-wood-950 mb-2">
                Send a Message
              </h2>
              <p className="text-dark-wood-700">
                Fill out the form below and I'll respond within 24-48 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-wood-900 mb-2">
                  Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-wood-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-sage-green-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-wood-900 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-wood-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-sage-green-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-wood-900 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-wood-400" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-sage-green-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-wood-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-sage-green-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full cafe-button py-4 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-sage-green-50 border-l-4 border-sage-green-500 p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-dark-wood-950 mb-3">
              Other Ways to Reach Me
            </h3>
            <div className="space-y-2 text-dark-wood-700">
              <p><strong>Email:</strong> yukikainge@gmail.com</p>
              <p><strong>Response time:</strong> Usually within 24-48 hours</p>
              <p><strong>Find me on social media via the </strong><a href="/connect" className="text-forest-green-600 hover:text-forest-green-700 underline"><strong>connect page </strong> </a></p>
            </div>
          </motion.div>
        </div>
      </section >
    </div >
  )
}