'use client'

import { motion } from 'framer-motion'
import { Code, Hammer, Sparkles, Palette, Coffee, Users, Clock, MapPin } from 'lucide-react'

const skills = [
  {
    category: 'Development',
    icon: Code,
    skills: ['JavaScript (ES6+, Node.js)', 'TypeScript', 'React & Next.js', 'Python (Django, Flask)', 'PostgreSQL & MongoDB', 'API Development & Integration'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    category: 'Electronics & Hardware',
    icon: Sparkles,
    skills: ['Arduino & Microcontroller Programming', 'LED Strip Control & POV Effects', 'Circuit Design & Prototyping', 'Sensor Integration & IoT', '3D Printing & CAD Design', 'PCB Design Basics'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    category: 'Woodworking & Fabrication',
    icon: Hammer,
    skills: ['Traditional Joinery Techniques', 'Hand Tool Mastery', 'Custom Furniture Design', 'Laser Cutting & Engraving', 'Wood Finishing & Restoration', 'Project Planning & Material Selection'],
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    category: 'Creative & Business',
    icon: Palette,
    skills: ['Flow Arts Performance', 'Product Photography', 'E-commerce & Online Sales', 'Project Documentation', 'Technical Writing', 'Customer Service & Communication'],
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
]

const timeline = [
  {
    title: 'Early Programming Days',
    period: '2018-2020',
    description: 'Started coding in high school, fascinated by the logic and creativity required to build digital solutions. First projects included simple games and utility applications.',
    highlight: 'Built first web application'
  },
  {
    title: 'Discovering Electronics',
    period: '2020-2021',
    description: 'Began experimenting with Arduino and LED projects, combining programming skills with physical hardware to create interactive installations and wearable tech.',
    highlight: 'Created first LED project'
  },
  {
    title: 'Flow Arts & POV Development',
    period: '2021-2022',
    description: 'Developed programmable LED poi systems, merging artistic expression with technical innovation. Created custom control systems for dynamic light performances.',
    highlight: 'First festival performance'
  },
  {
    title: 'Woodworking Renaissance',
    period: '2022-2023',
    description: 'Embraced traditional woodworking as a counterbalance to digital work. Started creating custom furniture and learning time-honored joinery techniques.',
    highlight: 'Completed first dining table'
  },
  {
    title: 'Entrepreneurial Ventures',
    period: '2023-Present',
    description: 'Launched Etsy shop combining handmade crafts with digital products. Building a sustainable business around creative and technical skills.',
    highlight: 'Growing creative business'
  }
]

const stats = [
  { label: 'Projects Completed', value: '25+', icon: Code },
  { label: 'Years Experience', value: '6+', icon: Clock },
  { label: 'Happy Clients', value: '50+', icon: Users },
  { label: 'Coffee Consumed', value: '∞', icon: Coffee }
]

export default function About() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-cream-50 px-4 py-2 rounded-full text-sm font-medium text-dark-wood-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Pacific Northwest, USA</span>
              </motion.div>

              <h1 className="section-title text-left mb-8">About Me</h1>
              
              <div className="space-y-6 text-lg text-dark-wood-700">
                <p>
                  I'm a developer, maker, and creator who believes in the power of both digital 
                  and physical creation. My journey spans from writing clean code to crafting 
                  with wood, from designing electronic circuits to creating flow art performances.
                </p>
                <p>
                  What drives me is the intersection between technology and traditional craftsmanship. 
                  Whether I'm building a web application, programming LED patterns for poi, or 
                  hand-cutting dovetail joints, the same attention to detail and passion for 
                  problem-solving guides every project.
                </p>
                <p>
                  Based in the Pacific Northwest, I draw inspiration from the balance between 
                  urban innovation and natural beauty. This philosophy infuses everything I create, 
                  from sustainable woodworking practices to energy-efficient code.
                </p>
              </div>
            </motion.div>

            {/* Image/Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Profile Image Placeholder */}
              <div className="cafe-card p-8 text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-dark-wood-200 to-dark-wood-400 rounded-full flex items-center justify-center mb-6">
                  <span className="text-dark-wood-600 font-medium">
                    Professional Photo
                  </span>
                </div>
                <p className="text-dark-wood-700">
                  "Where technology meets traditional craft"
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      className="cafe-card p-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Icon className="h-8 w-8 text-dark-wood-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-dark-wood-950 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-dark-wood-600">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-cream-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="text-lg text-dark-wood-700 max-w-2xl mx-auto">
              A diverse skill set that bridges the digital and physical worlds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <motion.div
                  key={skillGroup.category}
                  className="cafe-card p-8 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 rounded-lg ${skillGroup.bgColor}`}>
                      <Icon className={`h-6 w-6 ${skillGroup.color}`} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-dark-wood-950">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-dark-wood-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-dark-wood-700">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">My Journey</h2>
            <p className="text-lg text-dark-wood-700 max-w-2xl mx-auto">
              The path from curious beginner to multidisciplinary creator
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-wood-300" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative flex items-start space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="w-16 h-16 bg-dark-wood-950 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-8 h-8 bg-cream-50 rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="cafe-card p-6 flex-1 ml-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-serif font-semibold text-dark-wood-950">
                        {item.title}
                      </h3>
                      <span className="inline-block bg-dark-wood-950 text-cream-50 px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-dark-wood-700 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="modern-tag">
                      ✨ {item.highlight}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-cream-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cafe-card p-12"
          >
            <Coffee className="h-16 w-16 text-dark-wood-600 mx-auto mb-8 floating" />
            <h2 className="text-3xl font-serif font-bold text-dark-wood-950 mb-6">
              My Philosophy
            </h2>
            <p className="text-xl text-dark-wood-700 leading-relaxed mb-8">
              "The most meaningful work happens at the intersection of disciplines. 
              When we blend the precision of code with the intuition of craft, 
              the efficiency of technology with the wisdom of tradition, 
              we create something truly extraordinary."
            </p>
            <div className="text-dark-wood-600 font-medium">
              — Yuki Ainge
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}