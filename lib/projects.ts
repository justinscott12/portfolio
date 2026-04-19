export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  featured: boolean;
}

/** Order and copy aligned with resume PDF */
export const projects: Project[] = [
  {
    id: 'devresumes',
    title: 'devresumes.com',
    description:
      'Live B2C product — AI-powered resume builder for developers. GitHub OAuth pulls projects directly from your repos, OpenAI parses uploads or pasted text into structured profiles with schema validation, and real-time ATS scoring tailors output to a target job description. Stripe Checkout for paid tiers, resume analyzer for shareability. Spring Boot + JPA backend on GCP Cloud Run with Neon serverless Postgres — scale-to-zero infra keeps idle cost near $0 while handling bursty traffic. Next.js + React Hook Form + Zod frontend, Docker + GitHub Actions for CI/CD.',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Spring Boot',
      'Java',
      'Neon',
      'GCP Cloud Run',
      'OpenAI API',
      'Stripe',
      'GitHub OAuth',
      'JWT',
      'Docker',
      'Jest',
      'GitHub Actions',
    ],
    link: 'https://devresumes.com',
    featured: true,
  },
  {
    id: 'us-election-tracker',
    title: 'US Election Tracker',
    description:
      'Live data-heavy election site: presidential history, state hubs, live results, demographics, and notable races. Interactive SVG US map with click-to-detail panels backed by structured TypeScript datasets. Authenticated REST API lets editorial updates ship without redeploying — built for election-night workflows. SEO-first: sitemap, JSON-LD, Open Graph, plus Python and Node validation scripts to keep datasets honest.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Netlify Blobs', 'Python', 'Node.js'],
    link: 'https://us-election-tracker.com',
    featured: true,
  },
  {
    id: 'dungeonhelper',
    title: 'dungeonhelper',
    description:
      'RAG assistant for Destiny 2 dungeon mechanics. OpenAI embeddings + Pinecone retrieval + Claude streaming answers, served via Next.js API routes for chat and semantic search. Production-minded controls: Zod request validation, IP rate limiting, and response caching to keep API cost and latency predictable. Streaming UI for perceived speed during contest-style play.',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'RAG',
      'OpenAI',
      'Pinecone',
      'Claude',
      'Zod',
      'Radix UI',
    ],
    githubLink: 'https://github.com/justinscott12/dungeonhelper',
    featured: true,
  },
  {
    id: 'averylightfx',
    title: 'averylightfx',
    description:
      'Live site for a community holiday light show: visit info, Venmo donations, schedule, and seasonal Halloween / Christmas theming. Authenticated admin panel drives the live xSchedule lighting rig — playback, playlists, audio, brightness — with NextAuth + bcrypt-backed credentials and API routes for schedule and theme data.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'NextAuth.js', 'axios'],
    link: 'https://averylightfx.com/',
    featured: true,
  },
  {
    id: 'youre-being-robbed',
    title: 'youre-being-robbed',
    description:
      'Live data-viz site on US wealth inequality: wages, housing, healthcare, corporate profits vs wages. 10+ interactive Recharts visualizations on top of government-sourced data, tabbed navigation with section-specific titles for SEO and shareability.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Recharts', 'Lucide React'],
    link: 'https://yourebeingrobbed.com/',
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
