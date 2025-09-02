'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, MessageSquare, ChevronRight, Globe, Coffee, Gamepad2, FileText, ShoppingBag, Code, LucideIcon } from 'lucide-react'

type SocialLink = {
  name: string;
  handle: string;
  url: string;
  icon: LucideIcon;
  description: string;
  followers?: string;
}

type SocialCategory = {
  title: string;
  description: string;
  color: string;
  iconColor: string;
  links: SocialLink[];
}

const socialCategories: SocialCategory[] = [
  {
    title: 'Professional',
    description: 'Connect with me for work opportunities and collaborations',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    links: [
      {
        name: 'GitHub',
        handle: '@yukiainge',
        url: 'https://github.com/yukiainge',
        icon: Github,
        description: 'Personal and open-source projects',
        // followers: '50+ repositories'
      },
      {
        name: 'LinkedIn',
        handle: 'Yuki Ainge',
        url: 'https://linkedin.com/in/yukiainge',
        icon: Linkedin,
        description: 'Professional network and career updates',
        // followers: 'Building connections'
      }
    ]
  },
  {
    title: 'Creative',
    description: 'Follow my creative journey and handmade products',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    links: [
      {
        name: 'Instagram',
        handle: '@yuksterr',
        url: 'https://instagram.com/yuksterr',
        icon: Instagram,
        description: 'Personal Profile',
        // followers: 'Growing community'
      },
      {
        name: 'Etsy Shop',
        handle: 'YuphoriaYuki.io',
        url: 'https://yuphoriayuki.etsy.com',
        icon: ShoppingBag,
        description: 'Coming Soon..',
        // followers: '25+ sales'
      }
    ]
  },
  {
    title: 'Personal',
    description: 'Interests, hobbies, and casual connections',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    links: [
      {
        name: 'Chess.com',
        handle: '@yukiainge69',
        url: 'https://chess.com/member/yukiainge69',
        icon: Gamepad2,
        description: 'Play Chess with me',
        // followers: '1400+ rating'
      },
      {
        name: 'Dev Blog',
        handle: 'Weekly Updates',
        url: '/blog',
        icon: FileText,
        description: 'Coming Soon - Technical articles and project insights',
        // followers: 'New posts weekly'
      }
    ]
  }
]

const quickConnect = [
  {
    title: 'Project Collaboration',
    description: 'Have an interesting project idea?',
    action: 'Start a Discussion',
    href: '/contact',
    icon: Code,
    color: 'bg-dark-wood-950 text-cream-50 hover:bg-dark-wood-900'
  },
  {
    title: 'Coffee Chat',
    description: 'Let\'s grab a virtual coffee and talk',
    action: 'Schedule a Call',
    href: 'mailto:yuki@ainge.com?subject=Coffee Chat Request',
    icon: Coffee,
    color: 'bg-forest-green-600 text-white hover:bg-forest-green-700'
  },
  {
    title: 'Quick Question',
    description: 'Need advice or have a quick question?',
    action: 'Send a Message',
    href: '/contact',
    icon: MessageSquare,
    color: 'bg-gold-500 text-dark-wood-950 hover:bg-gold-600'
  }
]

export default function Connect() {
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
            <h1 className="section-title mb-8">Let&apos;s Connect</h1>
            <p className="text-xl text-dark-wood-700 max-w-3xl mx-auto leading-relaxed">
              I believe in the power of meaningful connections. Whether you&apos;re interested in collaboration,
              learning, or just want to chat about engineering and building cool things, I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {socialCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="text-center">
                  <h2 className="text-2xl font-serif font-bold text-dark-wood-950 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-dark-wood-700">{category.description}</p>
                </div>

                {/* Social Links Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.links.map((link, linkIndex) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : '_self'}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`cafe-card p-8 group hover:shadow-cafe-lg transition-all duration-300 ${category.color}`}
                        initial={{ opacity: 0, x: linkIndex % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (linkIndex * 0.1) }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                            <Icon className={`h-6 w-6 ${category.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold text-dark-wood-950">
                                {link.name}
                              </h3>
                              <ChevronRight className="h-5 w-5 text-dark-wood-400 group-hover:text-dark-wood-600 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                            <p className="text-dark-wood-800 font-medium mb-2">
                              {link.handle}
                            </p>
                            <p className="text-sm text-dark-wood-600 leading-relaxed mb-3">
                              {link.description}
                            </p>
                            {link.followers && (
                              <div className="inline-block bg-white/80 px-3 py-1 rounded-full text-xs font-medium text-dark-wood-700">
                                {link.followers}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Connect Actions */}
      <section className="py-20 bg-cream-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Quick Connect</h2>
            <p className="text-lg text-dark-wood-700 max-w-2xl mx-auto">
              Looking for a specific type of interaction? Choose the option that fits best.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickConnect.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className={`cafe-card p-8 text-center group hover:shadow-cafe-lg transition-all duration-300 ${item.color}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 font-medium group-hover:gap-3 transition-all duration-300">
                    <span>{item.action}</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cafe-card p-12 text-center"
          >
            <Mail className="h-16 w-16 text-dark-wood-600 mx-auto mb-8 floating" />
            <h2 className="text-3xl font-serif font-bold text-dark-wood-950 mb-6">
              Stay in the Loop
            </h2>
            <p className="text-lg text-dark-wood-700 mb-8 max-w-2xl mx-auto">
              Get occasional updates about new projects, blog posts, and insights from the workshop.
              No spam, just thoughtful content when I have something worth sharing.
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
              Unsubscribe anytime. I respect your privacy and inbox.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Preference */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-sage-green-50 border-l-4 border-sage-green-500 p-8 text-center"
          >
            <Globe className="h-12 w-12 text-sage-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark-wood-950 mb-3">
              Preferred Contact Methods
            </h3>
            <div className="space-y-2 text-dark-wood-700">
              <p><strong>For project inquiries:</strong> Email or contact form</p>
              <p><strong>For quick questions:</strong> Twitter/X or Instagram DM</p>
              <p><strong>For collaborations:</strong> LinkedIn or email</p>
              <p><strong>For casual chat:</strong> Any platform works!</p>
            </div>
            <p className="text-sm text-dark-wood-600 mt-4">
              Response time is typically 24-48 hours, sometimes faster on social media.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}