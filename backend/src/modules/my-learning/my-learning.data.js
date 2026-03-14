const sampleVideo = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const enrolledCourses = [
  {
    id: "c-1",
    title: "Full-Stack Web Development",
    mentor: "Shreya P",
    progressPercent: 48,
    status: "Inprogress",
    modules: [
      {
        id: "m-1",
        title: "Module 1: HTML + CSS Foundations",
        topics: [
          { id: "t-1", title: "Semantic HTML Essentials", duration: "14 min", videoUrl: sampleVideo },
          { id: "t-2", title: "Flexbox in Practice", duration: "19 min", videoUrl: sampleVideo },
          { id: "t-3", title: "Responsive Layout Techniques", duration: "22 min", videoUrl: sampleVideo },
        ],
      },
      {
        id: "m-2",
        title: "Module 2: JavaScript Core",
        topics: [
          { id: "t-4", title: "Array Methods Masterclass", duration: "27 min", videoUrl: sampleVideo },
          { id: "t-5", title: "Closures Explained", duration: "17 min", videoUrl: sampleVideo },
        ],
      },
    ],
  },
  {
    id: "c-2",
    title: "Data Structures & Algorithms",
    mentor: "Ajay S",
    progressPercent: 78,
    status: "Inprogress",
    modules: [
      {
        id: "m-3",
        title: "Module 1: Arrays and Strings",
        topics: [
          { id: "t-6", title: "Two-Pointer Pattern", duration: "20 min", videoUrl: sampleVideo },
          { id: "t-7", title: "Sliding Window Problems", duration: "24 min", videoUrl: sampleVideo },
        ],
      },
    ],
  },
  {
    id: "c-3",
    title: "Aptitude and Reasoning",
    mentor: "KodNest Team",
    progressPercent: 100,
    status: "Completed",
    modules: [
      {
        id: "m-4",
        title: "Module 1: Quant Basics",
        topics: [
          { id: "t-8", title: "Percentages and Profit/Loss", duration: "18 min", videoUrl: sampleVideo },
        ],
      },
    ],
  },
  {
    id: "c-4",
    title: "System Design Fundamentals",
    mentor: "Rahul K",
    progressPercent: 0,
    status: "Upcoming",
    modules: [
      {
        id: "m-5",
        title: "Module 1: Design Basics",
        topics: [
          { id: "t-9", title: "Scalability Fundamentals", duration: "16 min", videoUrl: sampleVideo },
        ],
      },
    ],
  },
];

module.exports = {
  enrolledCourses,
};
