export interface SkillCategory {
  category: string;
  skills: string[];
}

/** Grouped view of skills aligned with resume PDF */
export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks & APIs',
    skills: [
      'Next.js',
      'React',
      'Angular',
      'React Native',
      'Expo',
      'Spring Boot',
      'Node.js',
      'FastAPI',
      'Fastify',
      'Tailwind CSS',
      'Microservices',
      'JWT',
    ],
  },
  {
    category: 'AI & LLM',
    skills: ['OpenAI API', 'Anthropic Claude API', 'RAG', 'Pinecone', 'LangGraph'],
  },
  {
    category: 'Data',
    skills: ['PostgreSQL', 'Neon (serverless Postgres)'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'GCP',
      'GCP Cloud Run',
      'Terraform',
      'Docker',
      'Linux',
      'Git',
      'GitHub Actions',
      'GitLab CI',
      'Jenkins',
    ],
  },
  {
    category: 'Payments',
    skills: ['Stripe'],
  },
];

export function getAllSkills(): SkillCategory[] {
  return skills;
}

export function getAllSkillNames(): string[] {
  return skills.flatMap((category) => category.skills);
}
