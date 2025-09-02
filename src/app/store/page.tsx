'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Star, ExternalLink, Filter, Truck, Shield, RefreshCw } from 'lucide-react'
import ComingSoon from '@/components/ui/ComingSoon'

const products = [
  {
    id: 'custom-dining-tables',
    name: 'Custom Dining Tables',
    category: 'furniture',
    price: 'Starting at $1,200',
    rating: 5.0,
    reviews: 12,
    image: '/images/products/table-walnut.jpg',
    images: ['/images/products/table-walnut.jpg', '/images/products/table-process.jpg'],
    description: 'Handcrafted dining tables featuring traditional joinery and modern design aesthetics.',
    longDescription: 'Each table is custom-designed and built using sustainably sourced hardwoods with hand-cut mortise and tenon joints.',
    features: ['Traditional Joinery', 'Custom Sizing', 'Sustainably Sourced', 'Natural Finish'],
    availability: 'Made to Order',
    leadTime: '6-8 weeks',
    featured: true
  },
  {
    id: 'led-poi-kit',
    name: 'DIY LED Poi Kit',
    category: 'electronics',
    price: '$89.99',
    rating: 4.8,
    reviews: 24,
    image: '/images/products/poi-kit.jpg',
    description: 'Complete kit for building programmable LED poi with pre-programmed patterns.',
    longDescription: 'Includes all components, detailed build instructions, and access to pattern library.',
    features: ['144 LEDs per poi', 'Wireless Sync', 'Open Source', 'Community Support'],
    availability: 'In Stock',
    leadTime: '3-5 business days'
  },
  {
    id: 'flow-controller',
    name: 'Flow Arts Controller',
    category: 'electronics',
    price: '$65.00',
    rating: 4.9,
    reviews: 18,
    image: '/images/products/controller.jpg',
    description: 'Custom Arduino-based controller for LED flow props with wireless sync capabilities.',
    longDescription: 'Features pattern memory, easy programming interface, and long battery life.',
    features: ['Arduino Compatible', 'Wireless Mesh', 'Pattern Storage', 'USB Programming'],
    availability: 'In Stock',
    leadTime: '3-5 business days'
  },
  {
    id: 'woodworking-plans',
    name: 'Furniture Plans Collection',
    category: 'digital',
    price: '$15.99',
    rating: 4.7,
    reviews: 45,
    image: '/images/products/plans.jpg',
    description: 'Detailed woodworking plans for tables, shelves, and storage solutions.',
    longDescription: 'Includes cut lists, joinery details, and step-by-step instructions.',
    features: ['Detailed Drawings', 'Cut Lists', 'Assembly Guide', 'PDF Format'],
    availability: 'Instant Download',
    leadTime: 'Immediate'
  },
  {
    id: 'led-pattern-library',
    name: 'LED Pattern Library',
    category: 'digital',
    price: '$12.99',
    rating: 4.9,
    reviews: 32,
    image: '/images/products/patterns.jpg',
    description: 'Complete Arduino library with 50+ pre-built LED patterns and effects.',
    longDescription: 'Includes documentation, color palettes, and example code.',
    features: ['50+ Patterns', 'Color Palettes', 'Full Documentation', 'Open Source'],
    availability: 'Instant Download',
    leadTime: 'Immediate'
  },
  {
    id: 'modular-shelves',
    name: 'Modular Shelf System',
    category: 'furniture',
    price: '$45.00 - $120.00',
    rating: 4.6,
    reviews: 28,
    image: '/images/products/shelves.jpg',
    description: 'Precision laser-cut modular shelving system with customizable configurations.',
    longDescription: 'Easy assembly, beautiful natural wood finish, and expandable design.',
    features: ['Laser Cut Precision', 'Tool-free Assembly', 'Modular Design', 'Natural Finish'],
    availability: 'In Stock',
    leadTime: '1-2 weeks'
  }
]

const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'furniture', name: 'Furniture', count: products.filter(p => p.category === 'furniture').length },
  { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
  { id: 'digital', name: 'Digital', count: products.filter(p => p.category === 'digital').length }
]

const categoryColors = {
  'furniture': 'bg-amber-100 text-amber-800',
  'electronics': 'bg-purple-100 text-purple-800',
  'digital': 'bg-blue-100 text-blue-800'
}

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = products
    .filter(product => activeCategory === 'all' || product.category === activeCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        case 'price-low':
          const aPrice = parseFloat(a.price.replace(/[^0-9.]/g, ''))
          const bPrice = parseFloat(b.price.replace(/[^0-9.]/g, ''))
          return aPrice - bPrice
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

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
            <h1 className="section-title mb-8">Shop</h1>
            //<p className="text-xl text-dark-wood-700 max-w-3xl mx-auto leading-relaxed">
            //  Handcrafted goods, electronics kits, and digital products. Each item is created
            //  with attention to detail and passion for quality craftsmanship.
            //</p>
          </motion.div>

          {/* Etsy Shop Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center space-x-4 bg-cream-50 px-6 py-3 rounded-full">
              <span className="text-dark-wood-700">Visit my full shop on</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="cafe-button text-sm py-2 px-4"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Etsy Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream-50/30 py-8 sticky top-16 z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id
                      ? 'bg-dark-wood-950 text-cream-50 shadow-cafe'
                      : 'bg-cream-50 text-dark-wood-800 hover:bg-cream-100'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                  <span className={`ml-2 text-sm ${activeCategory === category.id ? 'text-cream-200' : 'text-dark-wood-500'
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
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Store - Coming Soon */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComingSoon
            variant="content"
            title="Store Opening Soon"
            message="I'm preparing a curated collection of handmade woodworking pieces, custom electronics, and digital products. Each item will be crafted with attention to detail."
            showEstimate={true}
            estimatedDate="March 2024"
          />
        </div>
      </section>

      {/* Temporarily hidden - Products Grid */}
      {false && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="cafe-card group relative overflow-hidden"
                  >
                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-4 left-4 bg-gold-500 text-dark-wood-950 px-3 py-1 rounded-full text-sm font-semibold z-10">
                        Bestseller
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 overflow-hidden relative">
                      <div className="w-full h-full flex items-center justify-center text-dark-wood-600">
                        {product.name}
                      </div>

                      {/* Quick Actions Overlay */}
                      <div className="absolute inset-0 bg-dark-wood-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.button
                          className="bg-cream-50 px-6 py-3 rounded-lg text-dark-wood-950 font-medium hover:bg-cream-100 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[product.category as keyof typeof categoryColors]}`}>
                          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </span>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${product.availability === 'In Stock' ? 'text-green-600' :
                              product.availability === 'Made to Order' ? 'text-blue-600' :
                                'text-purple-600'
                            }`}>
                            {product.availability}
                          </div>
                          <div className="text-xs text-dark-wood-500">
                            {product.leadTime}
                          </div>
                        </div>
                      </div>

                      {/* Title & Rating */}
                      <h3 className="text-lg font-serif font-semibold text-dark-wood-950 mb-2 leading-tight">
                        {product.name}
                      </h3>

                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating)
                                  ? 'text-gold-500 fill-current'
                                  : 'text-gray-300'
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-dark-wood-600">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-dark-wood-700 mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs bg-cream-100 text-dark-wood-700 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                          {product.features.length > 3 && (
                            <span className="text-xs text-dark-wood-500 px-2 py-1">
                              +{product.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                        <div className="text-xl font-bold text-dark-wood-950">
                          {product.price}
                        </div>
                        <div className="flex space-x-2">
                          <motion.a
                            href="#"
                            className="cafe-button-outline text-sm px-4 py-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {product.category === 'digital' ? 'Download' : 'Order'}
                          </motion.a>
                          <motion.a
                            href="#"
                            className="p-2 text-dark-wood-600 hover:text-dark-wood-800 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-cream-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-dark-wood-950 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-cream-50" />
              </div>
              <h3 className="text-lg font-semibold text-dark-wood-950 mb-2">
                Fast Shipping
              </h3>
              <p className="text-dark-wood-700">
                Free shipping on orders over $100. Most items ship within 3-5 business days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-dark-wood-950 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-cream-50" />
              </div>
              <h3 className="text-lg font-semibold text-dark-wood-950 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-dark-wood-700">
                Every item is handcrafted with care. 30-day satisfaction guarantee on all purchases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-dark-wood-950 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <RefreshCw className="h-8 w-8 text-cream-50" />
              </div>
              <h3 className="text-lg font-semibold text-dark-wood-950 mb-2">
                Custom Orders
              </h3>
              <p className="text-dark-wood-700">
                Need something specific? I create custom pieces tailored to your exact requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cafe-card p-12"
          >
            <ShoppingCart className="h-16 w-16 text-dark-wood-600 mx-auto mb-8 floating" />
            <h2 className="text-3xl font-serif font-bold text-dark-wood-950 mb-6">
              Need Something Custom?
            </h2>
            <p className="text-lg text-dark-wood-700 mb-8 max-w-2xl mx-auto">
              I create custom furniture, electronics projects, and digital solutions tailored
              to your exact needs. From one-off pieces to small production runs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="cafe-button">
                Request Custom Work
              </a>
              <a href="#" className="cafe-button-outline">
                Visit Etsy Shop
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}