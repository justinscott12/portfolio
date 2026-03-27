export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'us-election-tracker',
    title: 'US Election Tracker',
    description: 'Full-stack election dashboard with live results, interactive US map, and secure REST API for real-time updates. Notable primaries, presidential electoral map, and Congress scorecards; authenticated PATCH API and file-backed data.',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'REST API'],
    link: 'https://us-election-tracker.com',
    githubLink: 'https://github.com/justinscott12/us-election-tracker',
    featured: true,
  },
  {
    id: 'devresumes',
    title: 'devresumes.com',
    description: 'AI-powered resume builder with Stripe payments and PDF export for job seekers. Built full-stack SaaS with Spring Boot, PostgreSQL, Next.js; shipped AI optimization, GitHub import, and Docker deployment.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker', 'OpenAI API', 'Stripe'],
    link: 'https://devresumes.com',
    featured: true,
  },
  {
    id: 'averylightfx',
    title: 'averylightfx',
    description: 'Public light show control panel for seasonal displays. Production Next.js app with NextAuth, xSchedule API, and donation integration; secure admin and live status pages.',
    techStack: ['Next.js', 'TypeScript', 'React', 'NextAuth', 'Tailwind CSS'],
    link: 'https://averylightfx.com',
    featured: true,
  },
  {
    id: 'youre-being-robbed',
    title: 'youre-being-robbed',
    description: 'Data viz site for wealth inequality and economic trends in the US. 10+ interactive Recharts, SEO-focused, client-side only for privacy; Next.js and Tailwind.',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Recharts'],
    link: 'https://yourebeingrobbed.com',
    githubLink: 'https://github.com/justinscott12/youre-being-robbed',
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

