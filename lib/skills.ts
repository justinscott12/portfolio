export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['Angular', 'React', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB'],
  },
  {
    category: 'AI & ML',
    skills: ['RAG Systems', 'LangGraph', 'LangChain', 'OpenAI API', 'Anthropic Claude', 'Vector Databases', 'Pinecone'],
  },
  {
    category: 'AI Development Tools',
    skills: ['Cursor', 'GitHub Copilot', 'AI-Assisted Development'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'AWS', 'Terraform', 'Jenkins', 'GitLab CI'],
  },
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Bash', 'Python'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Jest'],
  },
];

export function getAllSkills(): SkillCategory[] {
  return skills;
}

export function getAllSkillNames(): string[] {
  return skills.flatMap(category => category.skills);
}

