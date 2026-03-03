# DiveIn - Professional Web Development & Digital Marketing Agency Website

A modern, premium startup-style agency website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with neon gradient accents (cyan, blue, purple)
- **Fully Responsive**: Mobile-first, optimized for all devices
- **Smooth Animations**: Framer Motion-powered section reveals and hover effects
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Production-Ready**: Clean code structure, best practices, and performance optimization
- **Component-Based**: Reusable, maintainable component architecture

## 🎨 Sections

1. **Navbar** - Sticky navigation with blur effect and neon hover animations
2. **Hero** - Eye-catching headline with animated gradient background
3. **Services** - Web Development and Digital Marketing services with glass cards
4. **Portfolio** - 4 featured projects with tech stack tags
5. **Testimonials** - Client testimonials with star ratings and stats
6. **Why Choose** - Key features and benefits with animated icons
7. **Contact** - Contact form, email, WhatsApp, and location info
8. **Footer** - Company info, links, and social media

## 📋 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 10+
- **Icons**: React Icons & Font Awesome
- **Language**: TypeScript
- **Node**: 18+

## 🔧 Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Setup

1. **Navigate to the frontend directory**:
```bash
cd /workspaces/DiveIn/Frotend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
Frotend/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page (home)
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navbar.tsx          # Navigation component
│       ├── Hero.tsx            # Hero section
│       ├── Services.tsx        # Services section
│       ├── Portfolio.tsx       # Portfolio/Work section
│       ├── Testimonials.tsx    # Client testimonials
│       ├── WhyChoose.tsx       # Features section
│       ├── Contact.tsx         # Contact form
│       └── Footer.tsx          # Footer
├── public/                     # Static assets
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind configuration
├── postcss.config.js          # PostCSS config
└── next.config.js             # Next.js configuration
```

## 🎯 Key Components

### Navbar
- Sticky positioning with blur effect on scroll
- Mobile-responsive hamburger menu
- Animated gradients on CTA button
- Smooth link transitions

### Hero Section
- Full-viewport animated gradient background
- Large, bold headline with gradient text
- Floating animated shapes
- Dual CTA buttons

### Services
- Grid layout with glass-morphism cards
- Hover animations and glow effects
- Categorized sections (Development & Marketing)
- Intersection observer for lazy animations

### Portfolio
- 4 featured project cards
- Tech stack badges
- Hover scale and glow effects
- Case study buttons

### Testimonials
- 3-card testimonial grid
- Star ratings display
- Stats section with animated numbers
- Client trust indicators

### Contact Section
- Functional contact form
- WhatsApp integration
- Email and location info
- Form validation and feedback

### Footer
- Company info and links
- Social media links
- Responsive grid layout
- Back to top button with animation

## 🎨 Color Palette

- **Dark Background**: `#0a0a0a` (dark-900)
- **Neon Blue**: `#00d9ff` (cyan)
- **Neon Purple**: `#b300ff` (purple)
- **Neon Pink**: `#ff0080` (pink)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections and components are fully responsive with mobile-first design.

## ⚡ Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind (no runtime overhead)
- Font optimization
- Smooth scroll behavior

## 🚀 Production Build

```bash
npm run build
npm start
```

This creates an optimized production build ready for deployment.

## 🔗 Deployment

The website is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted servers**

### Vercel Deployment (Recommended)

```bash
npm install -g vercel
vercel
```

## 📝 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```ts
colors: {
  neon: {
    blue: '#00d9ff',    // Primary accent
    purple: '#b300ff',  // Secondary accent
    // ... other colors
  }
}
```

### Content
- **Company Info**: Edit sections directly in component files
- **Services**: Modify the `services` array in `Services.tsx`
- **Projects**: Update the `projects` array in `Portfolio.tsx`
- **Testimonials**: Edit the `testimonials` array in `Testimonials.tsx`

### Contact Integration
- Replace email address in `Contact.tsx`
- Update WhatsApp number in contact info
- Implement form submission backend if needed

## 🛠️ Development Tips

1. **Animations**: Framer Motion documentation - [framer.com/motion](https://www.framer.com/motion)
2. **Tailwind**: Utility-first CSS - [tailwindcss.com](https://tailwindcss.com)
3. **Next.js**: Features and best practices - [nextjs.org](https://nextjs.org)

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

Open source project - feel free to use and modify.

## 🤝 Support

For issues or questions, refer to documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)

---

**Built by DiveIn - Building Digital Growth Engines** 🚀
