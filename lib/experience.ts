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
      'Cut project technical debt ~40% in three months by modernizing legacy Java services and tightening code standards, improving stability and performance',
      'Delivered multiple mission-critical full-stack features for national security clients using Angular, Spring Boot, and PostgreSQL, improving reliability and UX in production',
      'Improved application performance ~30% via Spring Boot microservice design, PostgreSQL query tuning, and reactive Angular frontend',
      'Collaborated in Agile/SAFe teams to deliver multiple features per increment on schedule, aligning engineering delivery with program milestones and dependencies',
      'Uses AI-assisted development tools (e.g. Cursor) for faster spikes and refactors; all production changes follow team review, testing, and release standards',
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
      'Revamped Jenkins CI/CD pipeline architecture with a modular design, leading to a 70% reduction in build, test, and deployment times',
      'Refactored build infrastructure into reusable Jenkins components, reducing maintenance overhead and speeding onboarding for new engineers.',
      'Updated multi-platform mobile apps to current Android and iOS SDKs, improving stability and performance',
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
      'Implemented Terraform Infrastructure-as-Code for AWS cloud resources, reducing new environment setup time by 50% and enhancing scalability',
      'Automated continuous delivery with GitLab CI/CD pipelines, enabling rapid deployments across staging and production environments',
      'Built a centralized MkDocs/Markdown engineering knowledge base documenting code patterns and runbooks, shortening onboarding for new contributors.',
    ],
  },
];

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id);
}
