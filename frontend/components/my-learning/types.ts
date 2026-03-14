export type CourseTab = "Inprogress" | "Completed" | "Upcoming";

export type Topic = {
  id: string;
  title: string;
  duration: string;
  isPreviewable?: boolean;
  videoUrl: string;
};

export type Module = {
  id: string;
  title: string;
  topics: Topic[];
};

export type EnrolledCourse = {
  id: string;
  title: string;
  mentor: string;
  progressPercent: number;
  status: CourseTab;
  modules: Module[];
};
