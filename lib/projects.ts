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
    id: 'us-election-tracker',
    title: 'us-election-tracker',
    description:
      'Shipped a data-driven election tracking app with a React UI, Node APIs, and Python for data ingestion or analysis pipelines.',
    techStack: ['React', 'Node.js', 'Python'],
    link: 'https://us-election-tracker.com/',
    githubLink: 'https://github.com/justinscott12/us-election-tracker',
    featured: true,
  },
  {
    id: 'devresumes',
    title: 'devresumes.com',
    description:
      'Built a Next.js resume product with guided editing, PDF export, and AI-assisted parsing so users can go from upload or scratch to a polished document.',
    techStack: ['JavaScript', 'React', 'Next.js'],
    link: 'https://devresumes.com',
    featured: true,
  },
  {
    id: 'dungeonhelper',
    title: 'dungeonhelper',
    description:
      'Shipped a Destiny 2 companion in Next.js and TypeScript that surfaces dungeon mechanics and loadout guidance in a focused, mobile-friendly UI.',
    techStack: ['TypeScript', 'React', 'Next.js'],
    githubLink: 'https://github.com/justinscott12/dungeonhelper',
    featured: true,
  },
  {
    id: 'averylightfx',
    title: 'averylightfx',
    description:
      'Built a community holiday light-show presence as a TypeScript full stack on Express and MongoDB, emphasizing visit info, show status, donations, and media so guests can plan a drive-up visit with synced radio audio and on-site details (address + maps).',
    techStack: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://averylightfx.com/',
    featured: true,
  },
  {
    id: 'youre-being-robbed',
    title: 'youre-being-robbed',
    description:
      'Built a wealth-inequality awareness experience as a TypeScript full stack on Express and MongoDB, emphasizing structured evidence and exploration of real wages, housing affordability, and wealth concentration—clear narrative and CTAs so visitors can dig into the data.',
    techStack: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://yourebeingrobbed.com/',
    githubLink: 'https://github.com/justinscott12/youre-being-robbed',
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
