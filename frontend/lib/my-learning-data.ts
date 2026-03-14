export type Topic = {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  completed?: boolean;
};

export type Module = {
  id: string;
  title: string;
  topics: Topic[];
};

export type LearningCourse = {
  id: string;
  title: string;
  mentor: string;
  track: string;
  progress: number;
  status: 'Inprogress' | 'Completed' | 'Upcoming';
  modules: Module[];
};

export const learningCourses: LearningCourse[] = [
  {
    id: 'course-1',
    title: 'Python With Generative AI',
    mentor: 'KodNest',
    track: 'AI + Backend',
    progress: 68,
    status: 'Inprogress',
    modules: [
      {
        id: 'm-1',
        title: 'Python Foundations',
        topics: [
          { id: 't-1', title: 'Variables, Data Types, Operators', duration: '22m', videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw', completed: true },
          { id: 't-2', title: 'Control Flow & Functions', duration: '18m', videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw?start=1800' },
          { id: 't-3', title: 'Collections & Comprehensions', duration: '25m', videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw?start=3300' }
        ]
      },
      {
        id: 'm-2',
        title: 'Intro to Generative AI',
        topics: [
          { id: 't-4', title: 'Prompt Engineering Basics', duration: '20m', videoUrl: 'https://www.youtube.com/embed/JTxsNm9IdYU' },
          { id: 't-5', title: 'Using LLM APIs', duration: '17m', videoUrl: 'https://www.youtube.com/embed/2IK3DFHRFfw' }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: 'React Frontend Mastery',
    mentor: 'Frontend Guild',
    track: 'Frontend',
    progress: 100,
    status: 'Completed',
    modules: [
      {
        id: 'm-3',
        title: 'React Core',
        topics: [
          { id: 't-6', title: 'Components & Props', duration: '19m', videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8', completed: true },
          { id: 't-7', title: 'State & Effects', duration: '27m', videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8?start=1400', completed: true }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'System Design for Freshers',
    mentor: 'Architecture Squad',
    track: 'Backend',
    progress: 0,
    status: 'Upcoming',
    modules: [
      {
        id: 'm-4',
        title: 'System Design Basics',
        topics: [
          { id: 't-8', title: 'Scalability Fundamentals', duration: '24m', videoUrl: 'https://www.youtube.com/embed/UzLMhqg3_Wc' },
          { id: 't-9', title: 'Caching, DB, and Queue', duration: '29m', videoUrl: 'https://www.youtube.com/embed/UzLMhqg3_Wc?start=1300' }
        ]
      }
    ]
  }
];
