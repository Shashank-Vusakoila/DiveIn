'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#testimonials', label: 'Clients' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-md border-b border-neon-blue/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="group">
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent hover:brightness-125 transition-all duration-300">
                DiveIn
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-bold text-sm hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
            >
              Contact for Quote
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neon-cyan hover:text-neon-blue transition-colors"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-neon-blue/10"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-bold text-sm text-center hover:shadow-glow-blue transition-all duration-300"
              >
                Contact for Quote
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
