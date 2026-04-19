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
    role: 'Software Engineer',
    startDate: 'Jun 2024',
    endDate: 'Present',
    location: 'Morgantown, WV',
    type: 'Hybrid',
    achievements: [
      'Cut project technical debt ~40% in three months by modernizing legacy Java services and tightening code standards',
      'Ship full-stack features in Angular + Spring Boot + PostgreSQL for enterprise clients in highly regulated industries — emphasis on reliability, security, and audit-ready code paths',
      'Improved application performance ~30% via Spring Boot microservice design, PostgreSQL query tuning, and reactive Angular frontend',
      'Use AI tooling (Cursor, Claude) for spikes, refactors, and exploratory work; production changes go through standard team review, testing, and release',
    ],
  },
  {
    id: 'idemia-nss-intern',
    company: 'Idemia-NSS',
    role: 'Software Engineering Intern',
    startDate: 'Mar 2022',
    endDate: 'Apr 2024',
    location: 'Morgantown, WV',
    type: 'Onsite',
    achievements: [
      'Refactored Jenkins CI/CD pipeline architecture into modular reusable components — 70% reduction in build, test, and deploy times',
      'Restructured build infrastructure into reusable Jenkins components, reducing maintenance overhead and speeding onboarding for new engineers',
      'Modernized multi-platform mobile apps to current Android and iOS SDKs',
    ],
  },
  {
    id: 'river-point',
    company: 'River Point Technology',
    role: 'Software Engineering Intern',
    startDate: 'May 2021',
    endDate: 'Aug 2021',
    location: 'Washington, PA',
    type: 'Hybrid',
    achievements: [
      'Implemented Terraform Infrastructure-as-Code for AWS resources, reducing new environment setup time by 50%',
      'Automated continuous delivery via GitLab CI/CD pipelines across staging and production environments',
      'Built a centralized MkDocs/Markdown engineering knowledge base documenting code patterns and runbooks for new contributors',
    ],
  },
];

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id);
}
