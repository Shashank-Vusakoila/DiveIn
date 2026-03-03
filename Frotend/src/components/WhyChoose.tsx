'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiTarget,
  FiCode,
  FiTrendingUp,
  FiLayers,
  FiUsers,
} from 'react-icons/fi'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <FiTarget size={32} />,
    title: 'ROI Focused Strategy',
    description: 'Every project is designed with clear KPIs and measurable business outcomes in mind.',
  },
  {
    icon: <FiCode size={32} />,
    title: 'Full Stack Expertise',
    description: 'From frontend design to backend infrastructure, we handle the complete technical stack.',
  },
  {
    icon: <FiTrendingUp size={32} />,
    title: 'Performance Driven',
    description: 'We optimize for speed, scalability, and user experience at every level.',
  },
  {
    icon: <FiLayers size={32} />,
    title: 'Scalable Architecture',
    description: 'Build solutions that grow with your business without technical debt.',
  },
  {
    icon: <FiUsers size={32} />,
    title: 'Long-Term Partnership',
    description: 'We invest in your success beyond launch with continuous support and optimization.',
  },
]

const FeatureItem = ({ feature, index }: { feature: Feature; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-6"
    >
      {/* Icon */}
      <motion.div
        className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-neon-cyan"
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
        }}
      >
        {feature.icon}
      </motion.div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2 hover:text-neon-cyan transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-base leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyChoose() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Why Choose DiveIn
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;re not just a web agency - we&apos;re your partner in digital transformation
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 backdrop-blur-md text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to build your digital growth engine?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let&apos;s work together to create something extraordinary for your business.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-bold hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
