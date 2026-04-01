export interface Education {
  id: string;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    id: 'wvu',
    degree: 'Bachelor of Science in Computer Science',
    school: 'West Virginia University',
    startDate: '',
    endDate: 'May 2024',
    location: 'Morgantown, WV',
    highlights: [
      "Dean's List",
      'PROMISE Scholarship',
      'Scholarship of Distinction',
      'Operating Systems',
      'AWS Senior Capstone',
      'Penetration Testing',
      'SysAdmin',
      'Blue Team',
      'Ansible',
      'AI/ML',
      'Custom Language Construction',
    ],
  },
];

export function getAllEducation(): Education[] {
  return education;
}

export function getEducationById(id: string): Education | undefined {
  return education.find((e) => e.id === id);
}
