// Common constants and configuration

export const SITE_CONFIG = {
  name: 'DiveIn',
  description: 'We don\'t just build websites. We build digital growth engines.',
  url: 'https://divein.agency',
  email: 'hello@divein.agency',
  whatsapp: '+91 98765 43210',
  whatsappLink: 'https://wa.me/919876543210',
  location: 'India',
  socialMedia: {
    github: '#',
    linkedin: '#',
    twitter: '#',
    instagram: '#',
  },
}

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export const COLORS = {
  dark: {
    50: '#f8f8f8',
    100: '#f0f0f0',
    200: '#e0e0e0',
    300: '#c0c0c0',
    400: '#808080',
    500: '#404040',
    600: '#202020',
    700: '#151515',
    800: '#0f0f0f',
    900: '#0a0a0a',
  },
  neon: {
    blue: '#00d9ff',
    purple: '#b300ff',
    pink: '#ff0080',
    cyan: '#00ffff',
    lime: '#00ff00',
  },
}

export const ANIMATIONS = {
  transition: {
    smooth: { duration: 0.3, ease: 'easeInOut' },
    default: { duration: 0.5, ease: 'easeInOut' },
    slow: { duration: 0.8, ease: 'easeInOut' },
    veryFast: { duration: 0.15, ease: 'easeInOut' },
  },
}

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
