export interface SkillCategory {
  category: string;
  skills: string[];
}

/**
 * Grouped for a fast recruiter scan — the AI-native workflow first, then the engineering
 * foundation that makes it trustworthy. Only list what's backed by work on this site.
 */
export const skills: SkillCategory[] = [
  {
    category: 'AI-native engineering',
    skills: [
      'Claude Code (skills, subagents, hooks)',
      'MCP server development',
      'Prompt & context engineering',
      'Agentic workflows (LangGraph)',
      'RAG',
      'Anthropic & OpenAI APIs',
      'Cursor',
    ],
  },
  {
    category: 'Product & system design',
    skills: [
      'System design',
      'Real-time systems (WebSockets)',
      'API design',
      'UX & accessibility (WCAG)',
      'Performance & Core Web Vitals',
      'Technical SEO',
    ],
  },
  {
    category: 'Languages',
    skills: ['TypeScript', 'Java', 'Python', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks',
    skills: [
      'Next.js',
      'React',
      'Spring Boot',
      'Angular',
      'Node.js',
      'FastAPI',
      'React Native / Expo',
      'Tailwind CSS',
      'Fabric (Minecraft)',
    ],
  },
  {
    category: 'Data',
    skills: ['PostgreSQL', 'SQLite', 'pgvector', 'Redis', 'Pinecone'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Netlify', 'Docker', 'Terraform', 'GitHub Actions', 'Jenkins', 'GitLab CI', 'Linux'],
  },
];

export function getAllSkills(): SkillCategory[] {
  return skills;
}

export function getAllSkillNames(): string[] {
  return skills.flatMap((category) => category.skills);
}
