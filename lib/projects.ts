export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  /** Screenshot in /public/projects (16:9 WebP). Omit for repos with no live site. */
  image?: string;
  imageAlt?: string;
  featured: boolean;
}

/** Order leads with the three flagship live products. */
export const projects: Project[] = [
  {
    id: 'devresumes',
    title: 'DevResumes',
    description:
      'AI resume builder for developers — GitHub OAuth pulls your repos, OpenAI structures your experience, and live ATS scoring tailors output to a target job. Stripe billing on scale-to-zero GCP Cloud Run + Neon.',
    techStack: ['Next.js', 'Spring Boot', 'GCP Cloud Run', 'Neon Postgres', 'OpenAI', 'Stripe'],
    link: 'https://devresumes.com',
    image: '/projects/devresumes.webp',
    imageAlt: 'DevResumes — an AI-powered resume builder for developers, shown at desktop width',
    featured: true,
  },
  {
    id: 'us-election-tracker',
    title: 'US Election Tracker',
    description:
      'Data-heavy election site: an interactive SVG map, live results, demographics, and notable races, backed by an authenticated REST API so editorial updates ship without a redeploy.',
    techStack: ['Next.js', 'TypeScript', 'Interactive SVG', 'REST API', 'Python', 'SEO'],
    link: 'https://us-election-tracker.com',
    image: '/projects/us-election-tracker.webp',
    imageAlt: 'US Election Tracker — interactive US map and live election results dashboard',
    featured: true,
  },
  {
    id: 'youre-being-robbed',
    title: "You're Being Robbed",
    description:
      'Data-viz site on US wealth inequality — 10+ interactive Recharts visualizations built on government-sourced data, with shareable, SEO-friendly sections.',
    techStack: ['Next.js', 'Recharts', 'TypeScript', 'Data Viz', 'Tailwind'],
    link: 'https://yourebeingrobbed.com/',
    image: '/projects/youre-being-robbed.webp',
    imageAlt: "You're Being Robbed — interactive data visualizations on US wealth inequality",
    featured: true,
  },
  {
    id: 'averylightfx',
    title: 'Avery Light FX',
    description:
      'Live site for a community holiday light show — visit info, Venmo donations, and schedule — with an authenticated admin panel that drives the live xSchedule lighting rig.',
    techStack: ['Next.js', 'TypeScript', 'NextAuth.js', 'React', 'Tailwind CSS', 'axios'],
    link: 'https://averylightfx.com/',
    image: '/projects/averylightfx.webp',
    imageAlt: 'Avery Light FX — community holiday light show site with schedule and donations',
    featured: false,
  },
  {
    id: 'dungeonhelper',
    title: 'DungeonHelper',
    description:
      'RAG assistant for Destiny 2 dungeon mechanics — OpenAI embeddings + Pinecone retrieval with streaming Claude answers, plus Zod validation, rate limiting, and response caching.',
    techStack: ['RAG', 'OpenAI', 'Pinecone', 'Claude', 'Next.js', 'TypeScript'],
    githubLink: 'https://github.com/justinscott12/dungeonhelper',
    featured: false,
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
