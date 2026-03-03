'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'

interface Project {
  title: string
  description: string
  tags: string[]
  gradient: string
}

const projects: Project[] = [
  {
    title: 'Food Delivery Platform',
    description: 'Full-stack food delivery app with real-time tracking, payment gateway integration, and admin dashboard.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-neon-blue/30 to-neon-cyan/30',
  },
  {
    title: 'AI Attendance System',
    description: 'Intelligent attendance management system using facial recognition and machine learning algorithms.',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
    gradient: 'from-neon-purple/30 to-neon-blue/30',
  },
  {
    title: 'Safety Monitoring App',
    description: 'IoT-enabled safety monitoring application for smart buildings with real-time alerts and analytics.',
    tags: ['React', 'Node.js', 'IoT', 'WebSocket', 'Redis'],
    gradient: 'from-neon-cyan/30 to-neon-purple/30',
  },
  {
    title: 'High-Converting Landing Page',
    description: 'Performance-optimized landing page designed for digital marketing campaigns with A/B testing.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'Vercel'],
    gradient: 'from-neon-pink/30 to-neon-blue/30',
  },
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-96"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative bg-dark-800/40 backdrop-blur-md border border-neon-blue/20 rounded-2xl p-8 h-full flex flex-col justify-between group-hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden">
        {/* Animated background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-neon-blue/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="text-2xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors duration-300"
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-cyan text-xs font-medium group-hover:bg-neon-blue/20 group-hover:border-neon-cyan/50 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-neon-cyan font-bold text-sm group-hover:text-neon-blue transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            View Case Study <FiArrowRight size={16} />
          </motion.a>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projects that showcase our expertise in web development and digital innovation
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan/10 transition-all duration-300 group"
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowRight size={20} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
