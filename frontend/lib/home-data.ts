export type LiveSession = {
  id: string;
  title: string;
  mentor: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed';
};

export type SelfPacedCourse = {
  id: string;
  title: string;
  mentor: string;
  progress: number;
};

export type PracticeChallenge = {
  id: string;
  title: string;
  category: string;
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
  {
    id: 'ls-1',
    title: 'Python with Generative AI',
    mentor: 'KodNest',
    date: '24 Mar 2026',
    time: '08:00 AM - 09:30 AM',
    status: 'Upcoming'
  },
  {
    id: 'ls-2',
    title: 'System Design for Freshers',
    mentor: 'Arjun Reddy',
    date: '25 Mar 2026',
    time: '10:30 AM - 12:00 PM',
    status: 'Upcoming'
  },
  {
    id: 'ls-3',
    title: 'React Interview Sprint',
    mentor: 'Priya Sharma',
    date: '20 Mar 2026',
    time: '06:00 PM - 07:15 PM',
    status: 'Completed'
  },
  {
    id: 'ls-4',
    title: 'SQL Performance Tuning',
    mentor: 'Data Team',
    date: '19 Mar 2026',
    time: '07:30 PM - 08:30 PM',
    status: 'Completed'
  }
];

export const selfPacedCourses: SelfPacedCourse[] = [
  { id: 'sp-1', title: 'Aptitude and Reasoning', mentor: 'KodNest', progress: 82 },
  { id: 'sp-2', title: 'Frontend Engineering', mentor: 'Frontend Guild', progress: 64 },
  { id: 'sp-3', title: 'Backend Development', mentor: 'API Squad', progress: 48 },
  { id: 'sp-4', title: 'Data Structures', mentor: 'DSA Team', progress: 91 }
];

export const practiceChallenges: PracticeChallenge[] = [
  { id: 'pc-1', title: 'Sorting Fun', category: 'Arrays', completion: 75 },
  { id: 'pc-2', title: 'Binary Search Race', category: 'Searching', completion: 52 },
  { id: 'pc-3', title: 'Stack Tower', category: 'Stack', completion: 34 },
  { id: 'pc-4', title: 'Graph Quest', category: 'Graphs', completion: 18 }
];

export const placementStories: PlacementStory[] = [
  {
    id: 'pl-1',
    studentName: 'Pavan H.S',
    studentPhoto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    company: 'Infosys',
    companyLogo: 'https://logo.clearbit.com/infosys.com',
    packageLpa: '9.5 LPA',
    role: 'Systems Engineer'
  },
  {
    id: 'pl-2',
    studentName: 'Aishwarya M',
    studentPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    company: 'TCS',
    companyLogo: 'https://logo.clearbit.com/tcs.com',
    packageLpa: '8.2 LPA',
    role: 'Software Developer'
  },
  {
    id: 'pl-3',
    studentName: 'Nikhil R',
    studentPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    company: 'Wipro',
    companyLogo: 'https://logo.clearbit.com/wipro.com',
    packageLpa: '7.8 LPA',
    role: 'Backend Engineer'
  }
];
