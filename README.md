# Justin Scott - Personal Portfolio Website

> A professional personal portfolio website showcasing my work, experience, and skills. Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🎯 Project Overview

A modern, performant personal portfolio website demonstrating full-stack development skills, professional experience, and project portfolio. The site features system-aware dark mode, optimized static generation, and comprehensive SEO optimization.

## ✨ Key Features & Technical Highlights

### Modern Web Technologies
- **Next.js 16** with App Router for optimal performance and developer experience
- **TypeScript** for type safety and maintainable codebase
- **Tailwind CSS v4** with CSS-first configuration for modern styling
- **System-Aware Dark Mode** that automatically adapts to user preferences
- **Static Site Generation** for lightning-fast load times and SEO benefits

### Performance Optimizations
- Fully static export with zero runtime dependencies
- Optimized font loading with `next/font` (Inter)
- Minimal JavaScript bundle size
- SEO-optimized with comprehensive metadata, Open Graph tags, and structured data (JSON-LD)
- Mobile-first responsive design

### User Experience
- **Dark Mode Support**: Automatically detects and respects system color scheme preferences
- **Accessible Design**: Semantic HTML and ARIA labels throughout
- **Responsive Layout**: Seamless experience across all device sizes
- **Fast Navigation**: Client-side routing with Next.js Link optimization
- **Professional UI**: Clean, modern design with consistent color scheme and typography

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Fonts** | Inter (via next/font) |
| **Deployment** | Static export (Vercel/Netlify/GitHub Pages compatible) |

## 🏗️ Architecture & Code Quality

### Project Structure
```
justinscott-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage with hero and featured projects
│   ├── projects/           # Projects listing page
│   ├── experience/         # Professional experience page
│   ├── skills/             # Skills and technologies page
│   └── contact/            # Contact form and information
├── components/             # Reusable React components
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Site footer with links
│   ├── Hero.tsx            # Hero section component
│   ├── ProjectCard.tsx     # Project display card
│   ├── ExperienceCard.tsx  # Experience timeline card
│   ├── SkillsSection.tsx   # Skills category display
│   └── ContactForm.tsx     # Contact form with validation
├── lib/                    # Data and utilities
│   ├── projects.ts         # Project data management
│   ├── experience.ts       # Professional experience data
│   └── skills.ts           # Skills data management
└── public/                 # Static assets
    └── Justin-Scott-Resume.pdf
```

### Design Patterns & Best Practices
- **Component-Based Architecture**: Modular, reusable React components
- **Type Safety**: Full TypeScript coverage with proper interfaces
- **SEO Optimization**: Comprehensive metadata and structured data
- **Performance**: Static generation for optimal load times
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Maintainability**: Clean code structure and separation of concerns

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Build static site
npm run build
```

This generates a fully static site in the `out` directory, ready for deployment to any static hosting service.

### Deployment

The site is configured for static export and can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service (AWS S3, Cloudflare Pages, etc.)

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with name and professional title
- About section with professional summary
- Featured projects showcase
- Resume download section

### Projects (`/projects`)
- Complete project portfolio
- Project cards with descriptions, tech stacks, and links
- All three featured projects from resume

### Experience (`/experience`)
- Professional experience timeline
- Detailed role descriptions and achievements
- All positions from resume with key accomplishments

### Skills (`/skills`)
- Skills organized by category
- Technology badges with visual representation
- Frontend, Backend, Databases, DevOps, Languages, and Tools

### Contact (`/contact`)
- Contact form with client-side validation
- Direct contact information (email, phone, LinkedIn, GitHub)
- Social links

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563EB) - Professional and trustworthy
- **Accent**: Blue shades for hover states and highlights
- **Dark Mode**: System-aware with optimized contrast ratios

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Optimized Loading**: Font subsetting and display swap for performance

## 🔧 Customization

### Adding Projects
Edit `lib/projects.ts` to manage project data:
```typescript
{
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  featured: boolean;
}
```

### Updating Experience
Edit `lib/experience.ts` to update professional experience:
```typescript
{
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  achievements: string[];
}
```

### Modifying Skills
Edit `lib/skills.ts` to update skills and technologies:
```typescript
{
  category: string;
  skills: string[];
}
```

## 📊 Performance Metrics

- **Static Generation**: Zero runtime overhead
- **Optimized Assets**: Minimal bundle size
- **Fast Load Times**: Optimized for Core Web Vitals
- **SEO Score**: Comprehensive metadata and structured data

## 🎯 Technical Achievements

- ✅ Implemented system-aware dark mode with CSS media queries
- ✅ Optimized for static site generation with Next.js
- ✅ Comprehensive TypeScript type safety
- ✅ SEO-optimized with structured data (JSON-LD Person schema)
- ✅ Mobile-first responsive design
- ✅ Accessible UI components
- ✅ Modern CSS with Tailwind v4

## 📝 License

Copyright © 2024 Justin Scott. All rights reserved.

## 📧 Contact

For questions or inquiries:
- **Email**: jscottwv@gmail.com
- **Phone**: (304) 282-4087
- **LinkedIn**: [linkedin.com/in/justin-scott12](https://www.linkedin.com/in/justin-scott12)
- **GitHub**: [github.com/justinscott12](https://github.com/justinscott12)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

