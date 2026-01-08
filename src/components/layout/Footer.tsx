'use client'

import Link from 'next/link'
import { Coffee, Heart, Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yukiainge/', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/yuksterr', icon: Instagram },
  { name: 'Email', href: 'mailto:contact@yukiainge.com', icon: Mail },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Store', href: '/store' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="wood-gradient mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <motion.div
                className="bg-cream-50 p-2 rounded-lg group-hover:bg-cream-100 transition-colors duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Coffee className="h-6 w-6 text-dark-wood-950" />
              </motion.div>
              <span className="text-xl font-serif font-bold text-cream-50 group-hover:text-cream-100 transition-colors duration-300">
                Yuki Ainge
              </span>
            </Link>
            <p className="text-dark-wood-800 max-w-md leading-relaxed mb-6">
              Where engineering meets art. Building solutions by bridging technology and
              creative design through software, electronics, upcycling,
              woodworking, and creative creation.
            </p>

            {/* Daily Quote Preview */}
            <motion.div
              className="glass-morphism p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-dark-wood-800 text-sm italic">
                &ldquo;The intersection of technology and art creates endless possibilities.&rdquo;
              </p>
              <span className="text-dark-wood-600 text-xs mt-1 block">
                Today&apos;s inspiration
              </span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-dark-wood-800 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-wood-800 0 hover:text-dark-wood-700/800  transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-dark-wood-800 font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-wood-50/10 p-2 rounded-lg text-dark-wood-600 hover:bg-dark-wood-50/20 hover:text-dark-wood-350 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>

            {/* Current Status */}
            <div className="mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-dark-wood-800/70">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-wood-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-dark-wood-900 text-sm mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()} Yuki Ainge.</span>
              <span>Built with a passion for Engineering and Art</span>
              <Heart className="h-4 w-4 text-red-400 ml-1" />
            </div>

            <div className="text-dark-wood-800 text-xs">
              <span>Powered by matcha 🍵 and creativity ✨</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
