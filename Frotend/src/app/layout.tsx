import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DiveIn - Web Development & Digital Marketing Agency',
  description: 'We don\'t just build websites. We build digital growth engines. Full-service web development and data-driven marketing strategies.',
  keywords: 'web development, digital marketing, web design, SEO, e-commerce, agency',
  openGraph: {
    title: 'DiveIn - Digital Growth Engines',
    description: 'Professional web development and digital marketing services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-dark-900 text-white">
        {children}
      </body>
    </html>
  )
}
