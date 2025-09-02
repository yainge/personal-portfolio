'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Click to reveal',
    description: 'Best for project inquiries and detailed discussions',
    clickToReveal: true
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Pacific Northwest, USA',
    description: 'Available for local and remote projects'
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '24-48 hours',
    description: 'I typically respond within 1-2 business days'
  },
  {
    icon: Phone,
    title: 'Availability',
    value: 'Mon-Fri, 9AM-6PM PST',
    description: 'Available for calls and video meetings'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [emailRevealed, setEmailRevealed] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        budget: '',
        message: '',
        projectType: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const revealEmail = () => {
    setEmailRevealed(true)
  }

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
            <h1 className="section-title mb-8">Get In Touch</h1>
            <p className="text-xl text-dark-wood-700 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your next project, whether it's a digital solution, a handcrafted piece, 
              or an innovative blend of technology and traditional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-serif font-bold text-dark-wood-950 mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-dark-wood-700 leading-relaxed mb-8">
                  Whether you're looking for custom development, handcrafted furniture, 
                  or exploring innovative projects that bridge digital and physical worlds, 
                  I'd love to hear about your vision.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <motion.div
                        key={method.title}
                        className="cafe-card p-6 group transition-all duration-300 hover:shadow-cafe-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        onClick={method.clickToReveal ? revealEmail : undefined}
                        style={{ cursor: method.clickToReveal ? 'pointer' : 'default' }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="bg-dark-wood-950 p-3 rounded-lg group-hover:bg-dark-wood-900 transition-colors duration-300">
                            <Icon className="h-5 w-5 text-cream-50" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-dark-wood-950 mb-1">
                              {method.title}
                            </h3>
                            <p className="text-dark-wood-800 font-medium mb-2">
                              {method.clickToReveal && !emailRevealed ? method.value : 
                               method.clickToReveal && emailRevealed ? 'yuki@ainge.com' : method.value}
                            </p>
                            <p className="text-sm text-dark-wood-600">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Status Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <div className="font-medium text-green-900">Currently Available</div>
                      <div className="text-sm text-green-700">
                        Taking on new projects for Q1 2024
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="cafe-card p-8"
              >
                <h2 className="text-2xl font-serif font-bold text-dark-wood-950 mb-6">
                  Send a Message
                </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div className="text-green-900">
                        <div className="font-medium">Message sent successfully!</div>
                        <div className="text-sm text-green-700">
                          I'll get back to you within 24-48 hours.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                  >
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <div className="text-red-900">
                        <div className="font-medium">Failed to send message</div>
                        <div className="text-sm text-red-700">
                          Please try again or contact me directly via email.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-dark-wood-800 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="cafe-input w-full"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-dark-wood-800 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="cafe-input w-full"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-wood-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="cafe-input w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-dark-wood-800 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="cafe-input w-full"
                      >
                        <option value="">Select project type</option>
                        <option value="development">Development Project</option>
                        <option value="woodworking">Custom Woodworking</option>
                        <option value="electronics">Electronics/LED Project</option>
                        <option value="collaboration">Collaboration Opportunity</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-dark-wood-800 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="cafe-input w-full"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-plus">$25,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-wood-800 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="cafe-input w-full"
                      placeholder="Brief description of your project"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-wood-800 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="cafe-input w-full resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="cafe-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>

                {/* Privacy Note */}
                <div className="mt-6 p-4 bg-cream-100 rounded-lg border-l-4 border-dark-wood-400">
                  <p className="text-sm text-dark-wood-700">
                    <strong>Privacy Note:</strong> Your information will be used solely to respond to your inquiry 
                    and will not be shared with third parties. I respect your privacy and follow 
                    best practices for data protection.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}