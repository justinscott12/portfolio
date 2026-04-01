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
      'Reduced overall project technical debt by 40% within three months by modernizing legacy Java services and introducing modern code standards, directly improving application stability and system performance',
      'Delivered 5+ mission-critical full-stack features for national security clients, leveraging Angular, Spring Boot, and PostgreSQL technologies, significantly enhancing system reliability and user experience',
      'Architected high-performance microservices using Java Spring Boot, optimized PostgreSQL queries, and developed reactive Angular frontends, resulting in a 30% improvement in application performance',
      'Collaborated with cross-functional Agile/SAFe teams to consistently deliver 5+ features on schedule, ensuring project milestones were met',
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
      'Refactored build infrastructure into reusable components, streamlining maintenance processes and easing onboarding for new team members, resulting in 25% improvement',
      'Enhanced multi-platform mobile applications with the latest Android and iOS SDKs, improving stability and performance by 30%',
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
      'Established a centralized engineering knowledge base using MkDocs and Markdown, documenting code patterns to facilitate developer onboarding, resulting in 25% improvement',
    ],
  },
];

export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id);
}
