export interface SkillCategory {
  category: string;
  skills: string[];
}

/** Grouped view of skills as listed on resume PDF */
export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'HTML5', 'Bash'],
  },
  {
    category: 'Frameworks & APIs',
    skills: ['Angular', 'React', 'Next.js', 'Spring Boot', 'Express.js', 'FastAPI', 'REST API', 'Node.js'],
  },
  {
    category: 'Data & Platforms',
    skills: ['PostgreSQL', 'RDS', 'MongoDB', 'Microservices'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Terraform', 'Docker', 'DevOps', 'GitLab CI', 'Git'],
  },
  {
    category: 'AI & Engineering Workflow',
    skills: ['RAG', 'Claude Code', 'Cursor IDE', 'Full-stack'],
  },
];

export function getAllSkills(): SkillCategory[] {
  return skills;
}

export function getAllSkillNames(): string[] {
  return skills.flatMap((category) => category.skills);
}
