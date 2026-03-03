'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orb 1 */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan opacity-20 blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-10%', left: '-5%' }}
        />

        {/* Gradient orb 2 */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink opacity-20 blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ bottom: '-10%', right: '-5%' }}
        />

        {/* Gradient orb 3 */}
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue opacity-15 blur-3xl"
          animate={{
            x: [0, 50, -100, 0],
            y: [0, 50, 100, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ top: '50%', right: '10%' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm">
            <span className="text-sm text-neon-cyan font-medium">
              🚀 Welcome to DiveIn
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="block mb-4">We Don&apos;t Just Build</span>
          <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
            Websites
          </span>
          <span className="block mt-4">We Build</span>
          <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
            Digital Growth Engines
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          DiveIn helps businesses scale with high-performance web development and data-driven marketing strategies.
          From stunning websites to complete digital transformations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-bold text-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
          >
            Contact for Quote
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan font-bold text-lg hover:bg-neon-cyan/10 transition-all duration-300 hover:shadow-glow-blue"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 rounded-lg border border-neon-blue/30 opacity-30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full border border-neon-purple/20 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
