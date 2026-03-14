export type LiveSession = {
  id: string;
  title: string;
  mentor: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed';
};

export type CourseProgress = {
  id: string;
  title: string;
  mentor: string;
  progress: number;
};

export type PracticeChallenge = {
  id: string;
  name: string;
  topic: string;
  completion: number;
};

export type PlacementStory = {
  id: string;
  studentName: string;
  studentPhoto: string;
  company: string;
  companyLogo: string;
  packageLpa: string;
  role: string;
};

export const liveSessions: LiveSession[] = [
  { id: 'ls1', title: 'Python With Generative AI', mentor: 'KodNest', date: '22 Mar 2026', time: '08:00 AM - 09:30 AM', status: 'Upcoming' },
  { id: 'ls2', title: 'System Design Basics', mentor: 'Arjun Reddy', date: '23 Mar 2026', time: '10:30 AM - 12:00 PM', status: 'Upcoming' },
  { id: 'ls3', title: 'React Interview Prep', mentor: 'Priya Sharma', date: '20 Mar 2026', time: '06:00 PM - 07:15 PM', status: 'Completed' },
  { id: 'ls4', title: 'SQL Optimization', mentor: 'Data Team', date: '19 Mar 2026', time: '07:00 PM - 08:00 PM', status: 'Completed' }
];

export const selfPacedCourses: CourseProgress[] = [
  { id: 'c1', title: 'Aptitude and Reasoning', mentor: 'KodNest', progress: 82 },
  { id: 'c2', title: 'Frontend Engineering', mentor: 'Frontend Guild', progress: 64 },
  { id: 'c3', title: 'Backend Development', mentor: 'API Squad', progress: 48 },
  { id: 'c4', title: 'Data Structures', mentor: 'DSA Team', progress: 91 }
];

export const practiceChallenges: PracticeChallenge[] = [
  { id: 'p1', name: 'Sorting Fun', topic: 'Arrays', completion: 75 },
  { id: 'p2', name: 'Binary Search Race', topic: 'Search', completion: 52 },
  { id: 'p3', name: 'Stack Tower', topic: 'Stack', completion: 34 },
  { id: 'p4', name: 'Graph Quest', topic: 'Graphs', completion: 18 }
];

export const placementStories: PlacementStory[] = [
  {
    id: 's1',
    studentName: 'Pavan H.S',
    studentPhoto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    company: 'Infosys',
    companyLogo: 'https://logo.clearbit.com/infosys.com',
    packageLpa: '9.5 LPA',
    role: 'Systems Engineer'
  },
  {
    id: 's2',
    studentName: 'Aishwarya M',
    studentPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    company: 'TCS',
    companyLogo: 'https://logo.clearbit.com/tcs.com',
    packageLpa: '8.2 LPA',
    role: 'Software Developer'
  },
  {
    id: 's3',
    studentName: 'Nikhil R',
    studentPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    company: 'Wipro',
    companyLogo: 'https://logo.clearbit.com/wipro.com',
    packageLpa: '7.8 LPA',
    role: 'Backend Engineer'
  }
];
