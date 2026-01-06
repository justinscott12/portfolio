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
    id: 'devresumes',
    title: 'devresumes.com',
    description: 'Built full-stack web application enabling users to create professional resumes. Implemented RESTful APIs with Spring Boot, designed PostgreSQL database schema, and developed responsive Next.js frontend. Features AI-powered resume optimization, GitHub integration, Stripe payments, and PDF generation. Containerized application with Docker for deployment.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker', 'OpenAI API', 'Stripe'],
    link: 'https://devresumes.com',
    featured: true,
  },
  {
    id: 'averylightfx',
    title: 'averylightfx',
    description: 'Developed production-ready Next.js web application with TypeScript for a Halloween and Christmas light display. Built admin panel with NextAuth authentication, xSchedule API integration for light show control, and dynamic theme switching. Features secure admin controls, public status pages, and donation integration.',
    techStack: ['Next.js', 'TypeScript', 'React', 'NextAuth', 'Tailwind CSS'],
    link: 'https://averylightfx.com',
    featured: true,
  },
  {
    id: 'youre-being-robbed',
    title: 'youre-being-robbed',
    description: 'Built static Next.js web application that visualizes wealth inequality and economic trends in America through interactive data visualizations. Features 10+ interactive charts using Recharts, SEO optimization, and responsive design. All processing happens client-side for privacy.',
    techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Recharts'],
    link: 'https://yourebeingrobbed.com',
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

