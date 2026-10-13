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
    location: 'Tampa, FL',
    type: 'Remote',
    achievements: [
      'Ship full-stack features in Angular, Spring Boot, and PostgreSQL for enterprise clients in highly regulated industries, where reliability, security, and auditability are non-negotiable',
      'Cut technical debt ~40% in three months by modernizing legacy Java services and tightening code standards',
      'Improved application performance ~30% through Spring Boot microservice design, PostgreSQL query tuning, and a reactive Angular frontend',
      'Use AI tools (Cursor, Claude) to move faster on spikes, refactors, and exploration, with every production change still going through team review, testing, and release',
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
      'Rebuilt the Jenkins CI/CD pipeline as modular, reusable components, cutting build, test, and deploy times 70% and making pipelines easier to maintain and onboard onto',
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
      'Wrote Terraform infrastructure-as-code for AWS, halving the time to stand up a new environment',
      'Automated continuous delivery to staging and production with GitLab CI/CD pipelines',
      'Built an MkDocs engineering knowledge base of code patterns and runbooks for new contributors',
    ],
  },
];

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id);
}
