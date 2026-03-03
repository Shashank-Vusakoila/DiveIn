'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Web Development', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
      { label: 'E-Commerce', href: '#services' },
      { label: 'Consultation', href: '#contact' },
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Clients', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: '#', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram size={20} />, href: '#', label: 'Instagram' },
  ]

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative bg-dark-800 border-t border-neon-blue/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
            {/* Brand */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent mb-4">
                DiveIn
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Building digital growth engines for ambitious businesses worldwide.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#00d9ff' }}
                    className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan transition-colors border border-neon-blue/20"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], columnIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <motion.li
                      key={link.label}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-neon-cyan transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/30 to-neon-blue/0 mb-8" />

          {/* Bottom Footer */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            {/* Copyright */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm"
            >
              © {currentYear} DiveIn. All rights reserved. Crafted with ❤️
            </motion.p>

            {/* Top Button */}
            <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-cyan hover:border-neon-cyan transition-all duration-300 group"
            >
              Back to Top
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiArrowUp size={16} />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Bottom Border */}
        <motion.div
          className="h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  )
}
