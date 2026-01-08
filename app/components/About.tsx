// components/About.jsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative h-96 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800"
                alt="EverTidy Laundry Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-600/30 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600">450+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </motion.div>
                <div className="border-l border-gray-300 h-12"></div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600">3 Years</div>
                  <div className="text-sm text-gray-600">In Business</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              About EverTidy
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg text-gray-600 mb-6"
            >
              Founded in 2023, EverTidy was born from a simple idea: laundry shouldn't be a chore. 
              We're on a mission to give you back your time while delivering impeccably clean clothes 
              to your doorstep.
            </motion.p>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg text-gray-600 mb-8"
            >
              Our team of experienced professionals uses eco-friendly 
              products to ensure your garments receive the care they deserve. From everyday wear to 
              delicate fabrics, we handle each item with precision and attention to detail.
            </motion.p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Quality Guaranteed",
                  description: "100% satisfaction guarantee on every order",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Fast Turnaround",
                  description: "48-hour standard delivery, 24-hour express available",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Eco-Friendly",
                  description: "Environmentally safe detergents and processes",
                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-start"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}