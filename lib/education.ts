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
    degree: 'B.S. in Computer Science, Area of Emphasis in Cybersecurity; Minor in Communications (Cum Laude)',
    school: 'West Virginia University',
    startDate: '2020',
    endDate: '2024',
    location: 'Morgantown, WV',
    highlights: [
      'AWS + Drone Hacking (Senior Capstone)',
      'Data Structures',
      'Operating Systems',
      'Custom Language Construction',
      'Compiler Construction',
      'Red Team',
      'Blue Team',
      'Artificial Intelligence',
    ],
  },
];

export function getAllEducation(): Education[] {
  return education;
}

export function getEducationById(id: string): Education | undefined {
  return education.find((e) => e.id === id);
}
