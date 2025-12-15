
export const projects = [
  {
    id: 1,
    title: "Boggle Word Game",
    description:"A browser-based word game featuring randomized board generation, DFS-based word validation, scoring logic, and a responsive UI. Built as part of Techtonica to practice algorithms and DOM manipulation.",
    tags: ["JavaScript", "HTML/CSS", "Game Logic"],
    github: "https://github.com/shuwangs/techtonica-assignments/tree/main/projects/js-html-game",
    demo: "https://boggleplay.vercel.app",
    features: [
      "Randomized board generator for variable difficulty",
      "Word validation using DFS search algorithm",
      "Timer, scoring, and game reset logic",
      "Clean UI built with HTML/CSS and vanilla JS",
    ],
    image: '/image/boggle_preview_small.jpg', 
    imageAlt: "System architecture diagram of JobBuddy showing data flow from web to database."
  },
  {
    id: 2,
    title: "Job Comparison App",
    description:"An Android mobile app built in Java that allows users to save job offers and compare compensation factors such as salary, bonus, cost-of-living, and benefits. Includes object-oriented design, validation, and persistent storage.",
    tags: ["Java", "Android Studio", "OOP", "Mobile UI"],
    github: null,
    demo: null, 
    features: [
      "Add & edit job offers with validation",
      "Weighted scoring algorithm for comparing jobs",
      "Android Activity lifecycle & UI components",
      "Persistent storage for saved job offers",
    ],
    image: '/image/job-comparison.jpg', 
    imageAlt: "Job comparison app interface"
  },
  {
    id: 3,
    title: "Peachtree Savings Club",
    description: "A full database-backed application developed for Georgia Tech CS6400. Designed MySQL schema, implemented SQL queries, built reports, and contributed to data modeling, EER diagrams, and backend query logic.",
    tags: ["MySQL","Python","Flask", "EER Diagrams"],
    github: null,
    demo: null, 
    features: [
      "Normalized database schema designed with EER diagrams",
      "Complex SQL queries for multilayered reports",
      "Team-based development workflow",
      "Secure data handling and schema constraints",
    ],
    image: "Peachtree saving club", //
    imageAlt: "System architecture diagram of JobBuddy showing data flow from web to database."
  },

  {
    id: 4,
    title: "Focus! Purr-grammer 🐱(In Progress)",
    description: "A browser-based game built with React that gamifies focus and productivity. Players control a cat to catch ‘work’ items and avoid distractions, with levels increasing in difficulty.",
    tags: ["React","JavaScript","CSS", "EER Diagrams"],
    github: "https://github.com/shuwangs/techtonica-assignments/tree/main/projects/focus_purr-grammer",
    demo: null, 
    features: [
      "Real-time game loop implemented with React hooks and intervals",
      "Falling items system with randomized spawn rate, speed, and position",
      "Collision detection between player and falling items using bounding boxes",
      "Config-driven item behavior using a centralized ITEM_CONFIG",
    ],
    image: "FocusPurrGrammerImage", 
    imageAlt: "Screenshot of Focus! Purr-grammer showing a cat catching falling items in a game board."
  },

  {
    id: 5,
    title: "StudyCat Extension 🐱 (In Progress)",
    description: "A Chrome extension focused on productivity. It blocks distracting sites and replaces them with a focus timer and a virtual pet cat (Bobo) to encourage study habits.",
    tags: ["TypeScript", "Chrome Extension", "Manifest V3", "Local Storage"],
    github: "https://github.com/shuwangs/study_cat",
    demo: null, 
    features: [
      "Real-time focus timer with reward system",
      "Bobo the cat mascot with dynamic moods",
      "Blocklist for distracting sites",
      "Chrome storage sync + background service worker",
      "Popup UI with interactive states",
    ],
    image: "StudyCatImage", 
    imageAlt: "Screenshot of StudyCat Chrome extension popup interface."
  },
   {
    id: 6,
    title: "JobBuddy — Job Application Tracker (In Progress)",
    description: "A full-stack web application that helps job seekers organize and track job applications. Users can paste job posting URLs, automatically parse job details, and manage application statuses through a clean dashboard.",
    tags: ["Java", "Spring Boot", "REST API", "Spring Data JPA", "PostgreSQL", "Jsoup", "React"],
    github: "https://github.com/shuwangs/JobBuddy",
    demo: null, 
    features: [
      "Paste job posting URLs and automatically extract job details",
      "RESTful backend built with Spring Boot and layered architecture",
      "Job application lifecycle tracking (Applied, Interviewing, Offer, Rejected)",
      "Relational database persistence using JPA and PostgreSQL",
      "Clean separation of Controller, Service, Repository, and DTO layers",
      // "Designed for deployment and future Google OAuth integration"
    ],
    image: "JobBuddyDashboard",
    imageAlt: "Screenshot of JobBuddy web application showing job tracking dashboard"
  }
];


