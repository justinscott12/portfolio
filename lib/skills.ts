export interface SkillCategory {
  category: string;
  skills: string[];
}

/** Grouped for a fast recruiter scan — strongest/most in-demand first, no orphan groups. */
export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'Python', 'Java', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks & APIs',
    skills: [
      'Next.js',
      'React',
      'Spring Boot',
      'Angular',
      'Node.js',
      'FastAPI',
      'React Native',
      'Expo',
      'REST APIs',
      'Microservices',
      'Tailwind CSS',
      'Stripe',
    ],
  },
  {
    category: 'AI & LLM',
    skills: [
      'OpenAI API',
      'Anthropic Claude API',
      'RAG',
      'LangGraph',
      'LangChain',
      'Pinecone',
      'MCP',
    ],
  },
  {
    category: 'Data',
    skills: ['PostgreSQL', 'Neon (serverless Postgres)', 'pgvector', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'GCP',
      'GCP Cloud Run',
      'Docker',
      'Terraform',
      'GitHub Actions',
      'GitLab CI',
      'Jenkins',
      'Linux',
      'Git',
    ],
  },
];

export function getAllSkills(): SkillCategory[] {
  return skills;
}

export function getAllSkillNames(): string[] {
  return skills.flatMap((category) => category.skills);
}
