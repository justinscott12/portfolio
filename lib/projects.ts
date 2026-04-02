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
      'End-to-end resume product: guided editing, PDF export with templates, and LLM-assisted parsing and import from uploads or pasted text into a structured profile. Next.js client with React Hook Form, Zod, Stripe, and Spring Boot backend with JPA, PostgreSQL, Spring Security, GitHub OAuth, JWT, ATS-style scoring, job alignment, and Roast My Resume-style analyzers. Docker Compose-style workflows and GitHub Actions CI/CD.',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Spring Boot',
      'Java',
      'PostgreSQL',
      'OpenAI API',
      'Stripe',
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
      'Data-heavy election site: presidential history and results, state hubs, live results, demographics and census-oriented pages, and notable races with structured TypeScript datasets and reusable map and chart UI. Next.js API routes, strong SEO (sitemap, robots, Open Graph, JSON-LD), and Python plus Node scripts to build and validate datasets.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Netlify Blobs', 'Python', 'Node.js'],
    link: 'https://us-election-tracker.com',
    featured: true,
  },
  {
    id: 'dungeonhelper',
    title: 'dungeonhelper',
    description:
      'Destiny 2 dungeon mechanics assistant using RAG: OpenAI embeddings, Pinecone retrieval, Claude for streaming answers, and Next.js API routes for chat and semantic search. Zod validation, rate limiting, response caching, and a responsive React UI for contest-style play.',
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
      'Community holiday light-show site: visit info, donations, media, maps and drive-up context, with seasonal Halloween and Christmas theming. NextAuth and bcrypt-backed credentials where needed; API routes for schedule and theme data. Responsive Tailwind UI.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'NextAuth.js', 'axios'],
    link: 'https://averylightfx.com/',
    featured: true,
  },
  {
    id: 'youre-being-robbed',
    title: 'youre-being-robbed',
    description:
      'Data-forward site on wealth inequality, wages, housing, healthcare costs, and corporate profits vs wages. Tabbed navigation, section-specific titles for SEO, interactive Recharts visualizations, Tailwind and Lucide for readable statistics.',
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
