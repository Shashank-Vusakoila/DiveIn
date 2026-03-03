'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import WhyChoose from '@/components/WhyChoose'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-dark-900">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  )
}
