'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode,
  FiShoppingCart,
  FiZap,
  FiTrendingUp,
  FiSearch,
  FiShare2,
} from 'react-icons/fi'

interface ServiceCard {
  icon: React.ReactNode
  title: string
  description: string
  category: 'development' | 'marketing'
}

const services: ServiceCard[] = [
  {
    icon: <FiCode size={32} />,
    title: 'Business Websites',
    description: 'Professional websites designed to convert visitors into customers with SEO optimization.',
    category: 'development',
  },
  {
    icon: <FiShoppingCart size={32} />,
    title: 'E-Commerce Solutions',
    description: 'Feature-rich e-commerce platforms with payment integration and inventory management.',
    category: 'development',
  },
  {
    icon: <FiZap size={32} />,
    title: 'Custom Web Applications',
    description: 'Scalable, high-performance web applications tailored to your business needs.',
    category: 'development',
  },
  {
    icon: <FiTrendingUp size={32} />,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed for your specific campaigns and offers.',
    category: 'development',
  },
  {
    icon: <FiSearch size={32} />,
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, responsive, and performant digital experiences.',
    category: 'development',
  },
  {
    icon: <FiSearch size={32} />,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve rankings and organic traffic.',
    category: 'marketing',
  },
]

const marketingServices: ServiceCard[] = [
  {
    icon: <FiTrendingUp size={32} />,
    title: 'Google & Meta Ads',
    description: 'Targeted paid advertising campaigns that deliver measurable ROI.',
    category: 'marketing',
  },
  {
    icon: <FiShare2 size={32} />,
    title: 'Social Media Management',
    description: 'Strategic content creation and community management across all platforms.',
    category: 'marketing',
  },
  {
    icon: <FiZap size={32} />,
    title: 'Funnel Strategy',
    description: 'Optimized customer journeys from awareness to conversion and retention.',
    category: 'marketing',
  },
  {
    icon: <FiCode size={32} />,
    title: 'Brand Positioning',
    description: 'Develop a unique brand identity that resonates with your target audience.',
    category: 'marketing',
  },
]

const ServiceCardComponent = ({ service, index }: { service: ServiceCard; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-dark-800/50 backdrop-blur-md border border-neon-blue/20 rounded-2xl p-8 hover:border-neon-cyan/50 transition-all duration-300 h-full">
        {/* Icon */}
        <div className="mb-6 w-14 h-14 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:from-neon-cyan/30 group-hover:to-neon-blue/30 transition-all duration-300 text-neon-cyan group-hover:text-neon-blue">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="services"
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
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for web development and digital marketing
          </p>
        </motion.div>

        {/* Web Development Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-neon-cyan">
            Web Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service, index) => (
              <ServiceCardComponent key={service.title} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Digital Marketing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-neon-purple">
            Digital Marketing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map((service, index) => (
              <ServiceCardComponent key={service.title} service={service} index={index + 5} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
