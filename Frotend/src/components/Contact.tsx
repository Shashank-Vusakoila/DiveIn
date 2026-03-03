'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FiMail size={24} />,
    label: 'Email',
    value: 'hello@divein.agency',
    href: 'mailto:hello@divein.agency',
  },
  {
    icon: <FiPhone size={24} />,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: <FiMapPin size={24} />,
    label: 'Location',
    value: 'India',
    href: '#',
  },
]

export default function Contact() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'web-development',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        businessType: 'web-development',
        message: '',
      })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
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
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Let&apos;s Build Something Powerful Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group flex gap-6 p-6 rounded-xl bg-dark-800/50 backdrop-blur-md border border-neon-blue/20 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-neon-cyan group-hover:text-neon-blue transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                  <p className="text-white font-bold group-hover:text-neon-cyan transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 w-full px-6 py-4 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-bold justify-center hover:shadow-glow-blue transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 p-8 rounded-2xl bg-dark-800/50 backdrop-blur-md border border-neon-blue/20 space-y-6"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-neon-blue/20 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-neon-blue/20 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                placeholder="you@example.com"
              />
            </motion.div>

            {/* Business Type Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Business Type
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-neon-blue/20 text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
              >
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="both">Both</option>
                <option value="consulting">Consulting</option>
              </select>
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-neon-blue/20 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </motion.div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm"
              >
                ✓ Message sent successfully! We&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm"
              >
                ✗ Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-bold flex items-center justify-center gap-2 hover:shadow-glow-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ⟳
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
