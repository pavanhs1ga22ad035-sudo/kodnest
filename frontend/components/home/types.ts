export type LiveSession = {
  id: string;
  title: string;
  mentor: string;
  dateLabel: string;
  timeLabel: string;
  status: "Upcoming" | "Completed";
};

export type CourseProgress = {
  id: string;
  title: string;
  mentor: string;
  progressPercent: number;
  totalTopics: number;
  completedTopics: number;
};

export type PracticeChallenge = {
  id: string;
  title: string;
  category: string;
  completedPercent: number;
  totalProblems: number;
};

export type PlacementStory = {
  id: string;
  studentName: string;
  role: string;
  company: string;
  salaryLpa: string;
  studentPhoto: string;
  companyLogo: string;
};
