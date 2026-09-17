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
- Optimized font loading with `next/font` (Space Grotesk + Inter)
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
| **Fonts** | Space Grotesk (display) + Inter (body), via next/font |
| **Deployment** | Static export (Vercel/Netlify/GitHub Pages compatible) |

## 🏗️ Architecture & Code Quality

### Project Structure
```
justinscott-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: fonts, SEO metadata, JSON-LD, OG
│   ├── page.tsx            # One-pager (Hero → Work → About → Experience → Skills → Education → Contact)
│   ├── projects/           # /projects detail page (all products + prototypes)
│   ├── globals.css         # Design tokens (@theme), primitives, motion
│   └── icon.svg            # Favicon (JS monogram)
├── components/             # Reusable React components
│   ├── Header.tsx          # Sticky nav (anchors + scroll-spy) with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── SectionHeader.tsx   # Eyebrow + title + subtitle
│   ├── ScrollReveal.tsx    # IntersectionObserver reveal (reduced-motion aware)
│   ├── ProjectCard.tsx     # Product card (screenshot, Live badge, tags)
│   ├── PrototypeCard.tsx   # Prototype card
│   ├── ExperienceCard.tsx  # Experience timeline item
│   ├── EducationCard.tsx   # Education card
│   └── SkillsSection.tsx   # Skill category group
├── lib/                    # Typed content data (the site's source of truth)
│   ├── projects.ts         # Live products
│   ├── prototypes.ts       # Prototypes & experiments
│   ├── experience.ts       # Work history
│   ├── education.ts        # Education
│   └── skills.ts           # Skills by category
└── public/                 # Static assets
    ├── projects/           # Product screenshots (WebP)
    ├── og.png              # Social share image (1200×630)
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
- **Node.js 20.9+** (Next.js 16 minimum). Recommended: **Node 22 LTS** — this repo includes a `.nvmrc` for [nvm](https://github.com/nvm-sh/nvm): run `nvm use` in the project root.
- npm (ships with Node)

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

### One-pager (`/`)
The whole story on a single, scannable page:
- **Hero** — value proposition, credibility strip, and two CTAs
- **Featured Work** — the three flagship live products, image-forward
- **About** — depth-first summary
- **Experience** — condensed timeline of roles and measurable wins
- **Skills** — grouped by category, kept compact
- **Education** — WVU B.S. Computer Science
- **Contact** — email, LinkedIn, and résumé download

### Projects (`/projects`)
- Every live product plus the prototypes & experiments, each listed once
- Single "See all repos on GitHub" link (no duplicated repo lists)

## 🎨 Design System

Defined as Tailwind v4 `@theme` tokens in `app/globals.css` — rebrandable from one block.

### Color
- **Accent**: emerald (`#10b981`) used with restraint for CTAs, links, and "Live" badges (`accent-strong` / `accent-soft` chosen for WCAG AA text contrast)
- **Neutrals**: near-black ink surfaces and an off-white paper base
- **Dark Mode**: system-aware (`prefers-color-scheme`), first-class in both themes

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter
- Loaded via `next/font` with `display: swap`

### Motion
- Reduced-motion-aware scroll reveals, smooth anchor scrolling, and subtle card/hover transitions

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
- **LinkedIn**: [linkedin.com/in/justin-scott12](https://www.linkedin.com/in/justin-scott12)
- **GitHub**: [github.com/justinscott12](https://github.com/justinscott12)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

