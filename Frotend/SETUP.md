# DiveIn - Setup and Deployment Guide

## 📦 Quick Start

### 1. Install Dependencies

```bash
cd /workspaces/DiveIn/Frotend
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The website will be available at **http://localhost:3000**

### 3. Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Architecture

```
Frotend/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with SEO metadata
│   │   ├── page.tsx                # Main page importing all sections
│   │   └── globals.css             # Global styles and scrollbar styling
│   │
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation (responsive)
│   │   ├── Hero.tsx                # Full-screen hero with animations
│   │   ├── Services.tsx            # Web Dev & Marketing services grid
│   │   ├── Portfolio.tsx           # 4 featured projects showcase
│   │   ├── Testimonials.tsx        # Client testimonials & stats
│   │   ├── WhyChoose.tsx          # Features & benefits section
│   │   ├── Contact.tsx             # Contact form + contact info
│   │   └── Footer.tsx              # Footer with links & social
│   │
│   └── lib/
│       └── constants.ts            # Reusable constants & config
│
├── public/                         # Static assets (add logos here)
├── .gitignore                      # Git ignore patterns
├── .env.example                    # Environment variables template
├── .eslintrc.json                  # ESLint configuration
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Dependency lock file
└── README.md                       # Project documentation
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu on mobile devices
- Touch-friendly interactions

### Performance
- Next.js image optimization (when images are added)
- Code splitting and lazy loading
- CSS-in-JS with Tailwind (no runtime overhead)
- Smooth scrolling with easing functions
- Optimized animations with Framer Motion

### SEO
- Meta tags for all pages
- Open Graph tags
- Mobile viewport configuration
- Semantic HTML structure
- Alt text support for images

### Animations
- Page section reveal animations
- Hover effects on interactive elements
- Smooth transitions and easing
- Floating shapes and gradient orbs
- Intersection observer for lazy animations

## 🔧 Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  neon: {
    blue: '#00d9ff',      // Change primary color
    purple: '#b300ff',    // Change secondary color
    cyan: '#00ffff',      // Change accent color
    // ... more colors
  }
}
```

### Update Company Information

Edit `src/lib/constants.ts`:

```ts
export const SITE_CONFIG = {
  name: 'Your Company',
  email: 'your@email.com',
  whatsapp: '+1234567890',
  location: 'Your City',
  // ... more config
}
```

### Add/Edit Services

Edit `src/components/Services.tsx`:

```ts
const services: ServiceCard[] = [
  {
    icon: <YourIcon />,
    title: 'Your Service',
    description: 'Service description',
    category: 'development',
  },
  // ... add more services
]
```

### Update Portfolio Projects

Edit `src/components/Portfolio.tsx`:

```ts
const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    gradient: 'from-neon-blue/30 to-neon-cyan/30',
  },
  // ... add more projects
]
```

## 🚀 Deployment Options

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Your site is live! 🎉

**Vercel CLI Method:**
```bash
npm install -g vercel
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=.next
```

### AWS Amplify

1. Push to GitHub/GitLab
2. Go to AWS Amplify Console
3. Connect repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t divein-agency .
docker run -p 3000:3000 divein-agency
```

## 📝 Environment Variables

Create `.env.local` in the root:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@divein.agency
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

## 🧪 Testing

### Lighthouse Performance Testing

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Generate Report"
4. Aim for 90+ on all metrics

### Responsive Testing

1. Use Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on various device sizes

## 🔍 Common Issues & Solutions

### Issue: Styles not loading

**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Issue: Port 3000 already in use

**Solution:**
```bash
npm run dev -- -p 3001
```

### Issue: TypeScript errors

**Solution:**
```bash
npm run lint
# Fix any errors shown
```

## 📊 Analytics Integration

Add Google Analytics to `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=YOUR_ID`} />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 📞 Contact Form Integration

To make the contact form functional, implement a backend endpoint or use a service like:

- **Formspree** (easiest)
- **SendGrid**
- **Mailgun**
- **Your own backend**

Update the form submission in `src/components/Contact.tsx`.

## 🔐 Security Checklist

- [ ] Add CSRF protection to forms
- [ ] Validate all user inputs
- [ ] Use HTTPS in production
- [ ] Set security headers (CSP, X-Frame-Options, etc.)
- [ ] Keep dependencies updated
- [ ] Remove console logs before production

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Icons](https://react-icons.github.io/react-icons)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🎨 Design System

### Typography
- **H1**: 5xl (mobile) to 7xl (desktop)
- **H2**: 4xl (mobile) to 5xl (desktop)
- **H3**: 2xl (mobile) to 3xl (desktop)
- **Body**: 1rem with leading relaxed

### Spacing Scale
- xs: 2px
- sm: 4px
- md: 8px
- lg: 16px
- xl: 24px
- 2xl: 32px
- 3xl and beyond: multiples of 8px

### Hover Effects
- Scale: 1.05
- Glow: Blue neon shadow
- Border: Fade from blue to cyan
- Text: Color transition to neon-cyan

## 🤝 Contributing

Feel free to customize and extend this template for your needs!

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
