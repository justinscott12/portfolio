export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'idemia-nss-engineer',
    company: 'Idemia-NSS',
    role: 'Software Engineer I',
    startDate: 'Jun 2024',
    endDate: 'Present',
    location: 'Morgantown, WV',
    type: 'Full-Time - Hybrid',
    achievements: [
      'Modernized legacy Java services and implemented modern code standards, reducing technical debt by 40% within three months and improving application stability',
      'Developed full-stack features using Angular, Spring Boot, and PostgreSQL, delivering 5+ production features that improved system reliability and user experience',
      'Architected microservices with Java Spring Boot, optimized PostgreSQL database queries, and built reactive Angular frontends, resulting in 30% improvement in application performance',
      'Collaborated with cross-functional teams using Agile/SAFe methodologies to deliver features on schedule',
    ],
  },
  {
    id: 'idemia-nss-intern',
    company: 'Idemia-NSS',
    role: 'Software Engineering Intern',
    startDate: 'Mar 2022',
    endDate: 'Apr 2024',
    location: 'Morgantown, WV',
    type: 'Intern',
    achievements: [
      'Redesigned Jenkins CI/CD pipeline architecture using modular design, reducing build, test, and deployment times by 70%',
      'Refactored build infrastructure into reusable components, reducing pipeline configuration files by 90% and simplifying maintenance for new team members',
      'Upgraded multi-platform mobile applications to latest Android and iOS SDKs, improving app stability and performance',
    ],
  },
  {
    id: 'river-point',
    company: 'River Point Technology',
    role: 'Software Engineering Intern',
    startDate: 'May 2021',
    endDate: 'Aug 2021',
    location: 'Washington, PA',
    type: 'Intern',
    achievements: [
      'Implemented Terraform Infrastructure-as-Code for AWS cloud resources, reducing new environment setup time by 50% and improving scalability',
      'Automated continuous delivery with GitLab CI/CD pipelines, enabling rapid deployments across staging and production environments',
      'Created centralized engineering knowledge base using MkDocs and Markdown, documenting code patterns and streamlining developer onboarding',
    ],
  },
];

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id);
}

