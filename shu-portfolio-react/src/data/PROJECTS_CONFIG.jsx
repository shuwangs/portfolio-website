
const PROJECTS_CONFIG = [
  {
    id: 1,
    title: "JobBuddy 💼",
    description: "A specialized job application tracker designed to streamline the job hunt process. It automates data entry by parsing job links and organizing application statuses.",
    tags: ["Java", "Spring Boot", "MySQL", "Jsoup", "React"], // 你的技术栈
    github: "https://github.com/yourusername/jobbuddy", // 替换成真实链接
    demo: null, // 如果没有上线演示，就设为 null
    features: [
      "Automated job data parsing from URL inputs",
      "RESTful API design with Spring Boot",
      "Relational database modeling for job entries"
    ],
    image: JobBuddyImage, // 假设你有一个图片导入
    imageAlt: "System architecture diagram of JobBuddy showing data flow from web to database."
  },
  {
    id: 2,
    title: "StudyCat Extension 🐱",
    description: "A Chrome extension focused on productivity. It blocks distracting sites and replaces them with a focus timer and a virtual pet cat (Bobo) to encourage study habits.",
    tags: ["JavaScript", "Chrome API", "HTML/CSS", "Local Storage"],
    github: "https://github.com/yourusername/studycat",
    demo: "https://chrome.google.com/...", 
    features: [
      "Real-time focus timer with Pomodoro technique",
      "Site blocking algorithm for distraction control",
      "Interactive pet state management"
    ],
    image: StudyCatImage, // 假设你有一个图片导入
    imageAlt: "System architecture diagram of JobBuddy showing data flow from web to database."
  }
];






export default PROJECTS_CONFIG;