import type {
  CourseProgress,
  LiveSession,
  PlacementStory,
  PracticeChallenge,
} from "./types";

export const liveSessions: LiveSession[] = [
  {
    id: "ls-1",
    title: "Python with Generative AI",
    mentor: "Mentor: KodNest",
    dateLabel: "Mar 18, 2026",
    timeLabel: "08:00 AM - 09:30 AM",
    status: "Upcoming",
  },
  {
    id: "ls-2",
    title: "System Design Foundations",
    mentor: "Mentor: Ananya R",
    dateLabel: "Mar 19, 2026",
    timeLabel: "06:00 PM - 07:30 PM",
    status: "Upcoming",
  },
  {
    id: "ls-3",
    title: "DSA Revision Sprint",
    mentor: "Mentor: KodNest",
    dateLabel: "Mar 14, 2026",
    timeLabel: "07:00 PM - 08:00 PM",
    status: "Completed",
  },
  {
    id: "ls-4",
    title: "Mock Interview: Backend",
    mentor: "Mentor: Rahul K",
    dateLabel: "Mar 12, 2026",
    timeLabel: "09:00 AM - 10:00 AM",
    status: "Completed",
  },
];

export const selfPacedCourses: CourseProgress[] = [
  {
    id: "sp-1",
    title: "Aptitude and Reasoning",
    mentor: "KodNest Team",
    progressPercent: 65,
    totalTopics: 40,
    completedTopics: 26,
  },
  {
    id: "sp-2",
    title: "Full-Stack Web Development",
    mentor: "Shreya P",
    progressPercent: 48,
    totalTopics: 82,
    completedTopics: 39,
  },
  {
    id: "sp-3",
    title: "Data Structures & Algorithms",
    mentor: "Ajay S",
    progressPercent: 78,
    totalTopics: 110,
    completedTopics: 86,
  },
  {
    id: "sp-4",
    title: "SQL and Database Design",
    mentor: "KodNest Team",
    progressPercent: 33,
    totalTopics: 36,
    completedTopics: 12,
  },
];

export const practiceChallenges: PracticeChallenge[] = [
  {
    id: "pc-1",
    title: "Sorting Fun",
    category: "Arrays",
    completedPercent: 80,
    totalProblems: 15,
  },
  {
    id: "pc-2",
    title: "Two Pointer Quest",
    category: "Pointers",
    completedPercent: 52,
    totalProblems: 25,
  },
  {
    id: "pc-3",
    title: "Recursive Ninja",
    category: "Recursion",
    completedPercent: 40,
    totalProblems: 20,
  },
  {
    id: "pc-4",
    title: "Graph Explorer",
    category: "Graphs",
    completedPercent: 18,
    totalProblems: 22,
  },
];

export const placementStories: PlacementStory[] = [
  {
    id: "pl-1",
    studentName: "Pavan H.S",
    role: "Software Engineer",
    company: "TechNova",
    salaryLpa: "9.5 LPA",
    studentPhoto: "PH",
    companyLogo: "TN",
  },
  {
    id: "pl-2",
    studentName: "Sneha M",
    role: "Frontend Developer",
    company: "PixelCraft",
    salaryLpa: "8.2 LPA",
    studentPhoto: "SM",
    companyLogo: "PC",
  },
  {
    id: "pl-3",
    studentName: "Arjun V",
    role: "Backend Engineer",
    company: "DataFlux",
    salaryLpa: "11.0 LPA",
    studentPhoto: "AV",
    companyLogo: "DF",
  },
  {
    id: "pl-4",
    studentName: "Ira N",
    role: "SDE-1",
    company: "CodeHive",
    salaryLpa: "10.4 LPA",
    studentPhoto: "IN",
    companyLogo: "CH",
  },
];
