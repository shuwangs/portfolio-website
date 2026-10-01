
export const projects = [
  {
    id: 8,
    title: "CaseForge",
    priority: 140,
    featured: true,
    description: "A research-impact dashboard that brings publication imports, citation analytics, and AI-assisted summaries into one workflow. Connects my research background with full-stack software development.",
    tags: ["TypeScript", "React", "PostgreSQL", "BullMQ", "Redis"],
    github: "https://github.com/shuwangs/CaseForge",
    demo: "https://youtu.be/CCA1onFAI0g",
    demoLabel: "Watch Demo",
    note: "Citation fetching runs locally; the hosted version currently lacks the background worker.",
    features: ["Background workers collect and process citations", "Authenticated project ownership and saved analytics", "Docker configuration and automated frontend/backend tests"],
    image: "/image/caseforge.jpg",
    imageAlt: "CaseForge publication and citation analytics walkthrough"
  },
  {
    id: 9,
    title: "PawPal+",
    priority: 130,
    featured: false,
    description: "An AI-assisted pet-care planner that turns natural-language requests into structured daily schedules. Python rules validate tasks, check conflicts, and verify the revised plan.",
    tags: ["Python", "Streamlit", "Structured AI Output", "pytest"],
    github: "https://github.com/shuwangs/PetCare-Asistant",
    features: ["Protects fixed-time tasks while adjusting flexible ones", "Flags missing information and unresolved conflicts", "Local extraction mode for demos without an API key"],
    previewLabel: "Care planning workflow",
    previewSteps: ["Extract", "Schedule", "Verify"]
  },
  {
    id: 10,
    title: "Tails & Tales",
    priority: 120,
    featured: true,
    description: "A pet diary with semantic search, AI title suggestions, and translation. Find relevant entries by meaning using embeddings and cosine similarity.",
    tags: ["React", "Express", "PostgreSQL", "pgvector", "Embeddings"],
    github: "https://github.com/shuwangs/tails_tales",
    features: ["Generates embeddings for new diary entries", "Ranks entries by similarity to a search query", "Includes component tests and CI configuration"],
    image: "/image/tails-tales.jpg",
    imageAlt: "Tails and Tales pet diary application walkthrough"
  },
  {
    id: 11,
    title: "Paw-tector",
    priority: 110,
    featured: true,
    description: "A community animal-sighting tracker for volunteers. Organizes animal profiles, health observations, and sighting histories in a relational database.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Vitest"],
    github: "https://github.com/shuwangs/paw-tector",
    features: ["Links animal records with a sighting timeline", "Search filters with paginated results", "Frontend API and form component tests"],
    image: "/image/paw-tector.jpg",
    imageAlt: "Paw-tector animal profiles and sighting records walkthrough"
  },

  {
    id: 1,
    title: "Boggle Word Game",
    status: "completed",
    priority: 10,
    featured: false,
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
    imageAlt: "Boggle word game board"
  },
  {
    id: 2,
    title: "Job Comparison App",
    status: "completed",
    priority: 20,
    featured: false,
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
    title: "Peachtree Savings Club-Database Analytics",
    status: "completed",
    priority: 90,
    featured: false,
    description: "A full database-backed application developed for Georgia Tech CS6400. Designed MySQL schema, implemented SQL queries, built reports, and contributed to data modeling, EER diagrams, and backend query logic.",
    tags: ["MySQL","Python","Flask", "EER Diagrams"],
    github: "https://github.com/shuwangs/peachtree-savings-club-demo",
    demo: "https://www.youtube.com/watch?v=K-tss6z30vo",
    demoLabel: "Watch Demo",
    features: [
      "Normalized database schema designed with EER diagrams",
      "Complex SQL queries for multilayered reports",
      "Team-based development workflow",
      "Secure data handling and schema constraints",
    ],
    image: "/image/peachtree_savings_club.jpg",
    imageAlt: "Peachtree Savings Club database reports"
  },

  {
    id: 4,
    title: "Focus! Purr-grammer 🐈",
    status: "completed",
    priority: 80,
    featured: false,
    description: "A browser-based game built with React that gamifies focus and productivity. Players control a cat to catch ‘work’ items and avoid distractions, with levels increasing in difficulty.",
    tags: ["React","JavaScript","CSS"],
    github: "https://github.com/shuwangs/techtonica-assignments/tree/main/projects/focus_purr-grammer",
    demo: "https://focus-purr-grammer.vercel.app/", 
    features: [
      "Real-time game loop implemented with React hooks and intervals",
      "Falling items system with randomized spawn rate, speed, and position",
      "Collision detection between player and falling items using bounding boxes",
      "Config-driven item behavior using a centralized ITEM_CONFIG",
    ],
    image: "/image/purr-grammer.gif", 
    imageAlt: "Screenshot of Focus! Purr-grammer showing a cat catching falling items in a game board."
  },
  {
    id: 5,
    title: "Full-Stack Weather App",
    status: "completed",
    priority: 95,
    featured: false,
    description:
      "A full-stack weather application with a React frontend and a backend API for fetching and processing weather data. The project focuses on clean API design, state management, and performance optimization through caching. Built as part of Techtonica to practice full-stack development and system integration.",
    tags: ["React", "JavaScript", "Node.js", "Express", "REST API", "Redis"],
    github: "https://github.com/shuwangs/techtonica-assignments/tree/main/projects/weather-app",
    demo: null,
    features: [
      "Search-based weather lookup with dynamic UI updates",
      "Backend REST API layer to handle external weather data requests",
      "Redis caching to reduce redundant API calls and improve response time",
      "Clear separation between frontend, backend, and caching layers",
    ],
    image: "/image/weather_app.gif",
    imageAlt:
      "Architecture and UI of the full-stack weather app with React frontend and backend API."
  },
  {
    id: 6,
    title: "StudyCat Extension",
    status: "active",
    priority: 65,
    featured: false,
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
    image: "/image/studycat.png", 
    imageAlt: "Screenshot of StudyCat Chrome extension popup interface."
  },
   {
    id: 7,
    title: "JobBuddy — Job Application Tracker",
    status: "active",
    priority: 100,
    featured: false,
    description: "A full-stack web application that helps job seekers organize and track job applications. Users can paste job posting URLs, automatically parse job details, and manage application statuses through a clean dashboard.",
    tags: ["Java", "Spring Boot", "REST API", "Spring Data JPA", "PostgreSQL", "Jsoup", "React"],
    github: "https://github.com/shuwangs/JobBuddy",
    demo: null, 
    features: [
      "Chrome Extension automatically extract job details",
      "RESTful backend built with Spring Boot and layered architecture",
      "Job application lifecycle tracking (Applied, Interviewing, Offer, Rejected)",
      "Relational database persistence using JPA and PostgreSQL",
      "Clean separation of Controller, Service, Repository, and DTO layers",
      // "Designed for deployment and future Google OAuth integration"
    ],
    image: null,
    previewLabel: "Application tracking",
    previewSteps: ["Capture", "Organize", "Track"],
    imageAlt: "Screenshot of JobBuddy web application showing job tracking dashboard"
  }
];

