const data = {
  profile: {
    name: 'Pavan H.S',
    program: 'KOD-VTU-INTERN-BATCH8',
    status: 'Online',
    streakDays: 18,
    avatar: 'PH',
    points: 2840
  },
  dashboard: {
    hero: {
      eyebrow: 'FROM LEARNING TO EARNING',
      title: 'Build your career with daily consistency.',
      subtitle: 'A modern LMS that blends live mentorship, AI assistance, and project-based learning.',
      ctaPrimary: 'Continue Learning',
      ctaSecondary: 'View Roadmap'
    },
    quickStats: [
      { label: 'Courses Enrolled', value: '12', tone: 'blue' },
      { label: 'Live Sessions', value: '34', tone: 'orange' },
      { label: 'Projects Completed', value: '7', tone: 'violet' },
      { label: 'Interview Score', value: '88%', tone: 'green' }
    ],
    liveSessions: [
      {
        id: 1,
        title: 'Python with Generative AI',
        mentor: 'KodNest Mentor Team',
        date: 'Today',
        time: '08:00 AM - 09:30 AM',
        mode: 'Live',
        progress: 92,
        accent: 'cyan'
      },
      {
        id: 2,
        title: 'System Design for Freshers',
        mentor: 'Arjun Reddy',
        date: 'Tomorrow',
        time: '10:30 AM - 12:00 PM',
        mode: 'Live',
        progress: 64,
        accent: 'orange'
      },
      {
        id: 3,
        title: 'DSA Problem Solving Sprint',
        mentor: 'Priya Sharma',
        date: 'Mon',
        time: '06:00 PM - 07:15 PM',
        mode: 'Live',
        progress: 48,
        accent: 'violet'
      }
    ],
    learningPaths: [
      {
        id: 1,
        name: 'Frontend Engineering',
        modulesDone: 18,
        totalModules: 26,
        level: 'Intermediate'
      },
      {
        id: 2,
        name: 'Backend Development',
        modulesDone: 11,
        totalModules: 22,
        level: 'Intermediate'
      },
      {
        id: 3,
        name: 'Aptitude & Reasoning',
        modulesDone: 14,
        totalModules: 14,
        level: 'Completed'
      }
    ],
    tasks: [
      { id: 1, title: 'Submit Resume v2', due: 'Today, 8:00 PM', priority: 'High' },
      { id: 2, title: 'Complete SQL Assignment', due: 'Tomorrow, 6:00 PM', priority: 'Medium' },
      { id: 3, title: 'Attend Mock Interview', due: 'Monday, 11:00 AM', priority: 'High' }
    ],
    announcements: [
      {
        id: 1,
        title: 'Placement Drive: FinNova Tech',
        description: 'Aptitude + Coding round opens this Friday for eligible candidates.',
        tag: 'Placement'
      },
      {
        id: 2,
        title: 'New AI Assistant Update',
        description: 'BroKod now gives code hints and personalized revision plans.',
        tag: 'Product'
      }
    ],
    leaderboard: [
      { rank: 1, name: 'Nikhil R', points: 3250 },
      { rank: 2, name: 'Pavan H.S', points: 2840 },
      { rank: 3, name: 'Aishwarya M', points: 2795 },
      { rank: 4, name: 'Harsha V', points: 2610 }
    ]
  },
  courses: [
    {
      id: 'python-ai',
      title: 'Python Basics to AI Workflow',
      mentor: 'KodNest Python Team',
      level: 'Beginner',
      duration: '2h 37m',
      lessons: 18,
      youtubeId: 'rfscVS0vtbw',
      description: 'Learn Python fundamentals and how they connect to modern AI workflows.'
    },
    {
      id: 'javascript-web',
      title: 'Modern JavaScript for Web Development',
      mentor: 'Frontend Guild',
      level: 'Intermediate',
      duration: '3h 26m',
      lessons: 24,
      youtubeId: 'PkZNo7MFNFg',
      description: 'Master JavaScript concepts used in real-world frontend projects.'
    },
    {
      id: 'system-design',
      title: 'System Design Fundamentals',
      mentor: 'Architecture Squad',
      level: 'Intermediate',
      duration: '1h 42m',
      lessons: 12,
      youtubeId: 'UzLMhqg3_Wc',
      description: 'Understand scalability, reliability, and backend design patterns.'
    },
    {
      id: 'sql-crash',
      title: 'SQL for Interviews & Projects',
      mentor: 'Data Faculty',
      level: 'Beginner',
      duration: '4h 20m',
      lessons: 30,
      youtubeId: 'HXV3zeQKqGY',
      description: 'Build confidence in SQL queries, joins, and optimization basics.'
    }
  ]
};

module.exports = data;
