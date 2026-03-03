'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiStar } from 'react-icons/fi'

interface Testimonial {
  quote: string
  author: string
  company: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote: 'DiveIn completely transformed our online presence. Their web development expertise and marketing strategies increased our conversion rate by 300% in just 6 months.',
    author: 'Sarah Johnson',
    company: 'TechStart Inc.',
    rating: 5,
  },
  {
    quote: 'Working with DiveIn was seamless. They understood our vision, delivered on time, and created a platform that our users absolutely love. Highly recommended!',
    author: 'Michael Chen',
    company: 'E-Commerce Solutions Ltd.',
    rating: 5,
  },
  {
    quote: 'The team at DiveIn is professional, innovative, and results-driven. They built us a scalable web application that grows with our business. Exceptional work!',
    author: 'Emma Rodriguez',
    company: 'Digital Innovations Co.',
    rating: 5,
  },
]

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-dark-800/50 backdrop-blur-md border border-neon-blue/20 rounded-2xl p-8 hover:border-neon-cyan/50 transition-all duration-300 min-h-64 flex flex-col">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -10, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ delay: index * 0.15 + i * 0.1 }}
            >
              <FiStar
                size={20}
                className="fill-neon-cyan text-neon-cyan"
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1 italic">
          &quot;{testimonial.quote}&quot;
        </p>

        {/* Author */}
        <div>
          <p className="font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
            {testimonial.author}
          </p>
          <p className="text-neon-blue text-sm">
            {testimonial.company}
          </p>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real testimonials from businesses we&apos;ve transformed
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '40+', label: 'Happy Clients' },
            { number: '300%', label: 'Avg. ROI Increase' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
