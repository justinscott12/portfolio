export interface SkillCategory {
  category: string;
  skills: string[];
}

/** Grouped view of skills as listed on resume PDF */
export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'HTML5', 'SASS', 'Bash'],
  },
  {
    category: 'Frameworks & APIs',
    skills: ['Angular', 'React', 'Next.js', 'Spring Boot', 'Node.js', 'REST API', 'Microservices', 'FastAPI', 'Tailwind CSS'],
  },
  {
    category: 'Data',
    skills: ['PostgreSQL'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Terraform', 'Docker', 'DevOps', 'Git', 'GitHub Actions', 'GitLab CI', 'Linux'],
  },
  {
    category: 'AI & Product Delivery',
    skills: ['LLM Product Integration', 'RAG', 'Full-stack Delivery'],
  },
];

export function getAllSkills(): SkillCategory[] {
  return skills;
}

export function getAllSkillNames(): string[] {
  return skills.flatMap((category) => category.skills);
}
