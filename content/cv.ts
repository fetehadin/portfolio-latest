// Single source of truth for the CV. Components only render this data —
// edit this file to update the site, the print layout and /cv.md.

export type Link = { label: string; href: string };

export type Social = {
  network: string;
  handle: string;
  href: string;
  note: string;
};

export type Role = {
  title: string;
  org: string;
  start: string;
  end: string;
  location: string;
  summary: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  links: Link[];
  /** Shown when there is no public link. */
  linkNote?: string;
  screenshots?: { src: string; width: number; height: number; alt: string }[];
  problem: string;
  built: string;
  result: string;
};

export type School = {
  name: string;
  degree: string;
  start: string;
  end: string;
};

export type Certificate = {
  name: string;
  issuer: string;
  year: string;
  image: string;
  width: number;
  height: number;
};

export const profile = {
  name: "Fetehadin Negash",
  role: "Software Engineer · Full-Stack & Backend",
  location: "Addis Ababa, Ethiopia (UTC+3) · Remote",
  email: "fetehadinnegash@gmail.com",
  site: "https://fetehadin.pro.et",
  domain: "fetehadin.pro.et",
  photo: "/fetehadin-gree.png",
  cv: "https://drive.google.com/file/d/1HBvlOeg1si_HJ9zASuvfW6hPb1CppOVx/view?usp=sharing",
  description:
    "Fetehadin Negash is a software engineer in Addis Ababa building backend systems, APIs and automation — from Django and Node services to React Native apps. Open to remote full-stack and backend roles.",
  about: [
    "I came to software from civil engineering, and I still build the same way: design for structural integrity, plan for load, and leave room to scale.",
    "Today I work mostly on backend systems, APIs and automation — turning messy, real-world problems into logic that holds up.",
  ],
  availability: "Open to remote full-stack / backend roles and freelance work.",
};

export const socials: Social[] = [
  {
    network: "GitHub",
    handle: "@fetehadin",
    href: "https://github.com/fetehadin",
    note: "Code, tools and side projects.",
  },
  {
    network: "LinkedIn",
    handle: "in/fetehadin",
    href: "https://www.linkedin.com/in/fetehadin/",
    note: "Work history and recommendations.",
  },
  {
    network: "X",
    handle: "@fetebuilds",
    href: "https://x.com/fetebuilds",
    note: "Notes on what I'm building.",
  },
  {
    network: "Telegram",
    handle: "@Fete64",
    href: "https://t.me/Fete64",
    note: "Fastest way to reach me.",
  },
];

export const experience: { current: Role; other: Role[] } = {
  current: {
    title: "Mid-Level Full-Stack Engineer Expert",
    org: "AfterQuery",
    start: "Aug 2026",
    end: "Present",
    location: "Remote",
    // TODO(fetehadin): one sentence on what you do at AfterQuery — left blank rather than guessed.
    summary: "",
  },
  other: [
    {
      title: "Team Lead & Full-Stack Developer (EduConnect)",
      org: "INSA Summer Tech Camp",
      start: "Jul 2025",
      end: "Oct 2025",
      location: "Addis Ababa",
      summary:
        "Led a team through INSA's four-month Summer Tech Camp to build EduConnect, designing the backend architecture and contributing to the frontend.",
    },
    {
      title: "Data Encoder",
      org: "Ethiopian Artificial Intelligence Institute",
      start: "Aug 2025",
      end: "Dec 2025",
      location: "Addis Ababa",
      summary:
        "Validated and encoded data for a national AI project, building reliable datasets for machine-learning models.",
    },
    {
      title: "Backend Developer Trainee",
      org: "ALX Africa",
      start: "Aug 2024",
      end: "Jan 2025",
      location: "Remote",
      summary:
        "Completed ALX's project-based backend programme, building production-style apps with Python, Django, Node.js, SQL and MongoDB under mentorship.",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "smart-duplicate-detector",
    name: "Smart Duplicate Detector",
    tagline: "ast-based duplicate-logic finder for java",
    year: "2026",
    role: "Author",
    stack: ["Java 17", "JavaParser", "weighted Levenshtein", "FlatLaf", "Maven", "npm CLI"],
    links: [
      { label: "site", href: "https://smart-duplicate-detector.vercel.app/" },
      { label: "npm", href: "https://www.npmjs.com/package/smart-duplicate-detector" },
      { label: "source", href: "https://github.com/fetehadin/smart-duplicate-detector" },
    ],
    problem:
      "Duplicated business logic hides in Java codebases behind renamed variables and different formatting, so text-based comparison either misses it or drowns it in false positives.",
    built:
      "A static-analysis tool that parses Java into ASTs with JavaParser and compares structure with a weighted Levenshtein distance, so matches reflect logic rather than layout. It ships as a FlatLaf Swing desktop app and as a CLI on npm.",
    // TODO(fetehadin): add real results (downloads, users, bugs found) if you have them.
    result: "Published as smart-duplicate-detector v1.0.0 on npm in July 2026.",
  },
  {
    slug: "tajstore",
    name: "TajStore",
    tagline: "wholesale distribution & field-sales app",
    // TODO(fetehadin): add the year TajStore was built (omitted from the page until set).
    year: "",
    // TODO(fetehadin): confirm your role on TajStore.
    role: "Full-stack developer",
    stack: ["React Native", "Expo Router", "TypeScript", "TanStack Query", "Zustand", "EAS OTA"],
    links: [],
    linkNote: "internal business app",
    screenshots: [
      { src: "/projects/tajstore-7.jpg", width: 606, height: 1280, alt: "TajStore admin dashboard" },
      { src: "/projects/tajstore-6.jpg", width: 576, height: 1280, alt: "TajStore sales screen" },
      { src: "/projects/tajstore-5.jpg", width: 603, height: 1280, alt: "TajStore ledger screen" },
    ],
    problem:
      "A wholesale distributor needed admins and field sales reps working from the same live data: warehouse checkouts, customer debt, supplier batches and payment approvals.",
    built:
      "A React Native app on Expo Router with separate admin and sales-rep portals, biometric sign-in and a custom dark mode. TanStack Query and Zustand keep data in sync, and EAS pushes over-the-air updates without store releases.",
    // TODO(fetehadin): add the outcome (users, time saved, errors reduced) — not on the current site.
    result: "In use as an internal business app.",
  },
  {
    slug: "educonnect",
    name: "EduConnect",
    tagline: "learning hub for ethiopian students",
    year: "2025",
    role: "Team lead & backend architect",
    stack: ["Python", "Django", "PostgreSQL", "REST", "JavaScript"],
    links: [{ label: "live demo", href: "https://educonnect-frontend-opal.vercel.app" }],
    problem:
      "Students across Ethiopia had no single place to find learning resources and connect with each other.",
    built:
      "During INSA's Summer Tech Camp I led the team and designed the backend: Django REST APIs, a relational PostgreSQL model and secure API integrations, while collaborating on the frontend.",
    // TODO(fetehadin): add results (camp ranking, users, feedback) if you have them.
    result: "Shipped within the four-month camp and deployed as a live demo.",
  },
];

export const moreProjects: Link[] = [
  { label: "CV Formatter", href: "https://github.com/fetehadin/CV-Formatter" },
  { label: "Schedule Tracker", href: "https://github.com/fetehadin/scheduleTracker" },
  { label: "Event Booking System", href: "https://github.com/fetehadin/Event-Booking-System" },
  { label: "BookWise", href: "https://github.com/fetehadin/BookWise_frontend" },
  { label: "everything else on GitHub", href: "https://github.com/fetehadin?tab=repositories" },
];

export const education: School[] = [
  {
    name: "HiLCoE School of Computer Science & Technology",
    degree: "B.Sc. Software Engineering",
    start: "2023",
    end: "Present",
  },
  {
    name: "Addis Ababa University",
    degree: "B.Sc. Civil & Environmental Engineering",
    // TODO(fetehadin): confirm AAU status/dates — the old site said "2021 – Present".
    start: "2021",
    end: "Present",
  },
  {
    name: "Hayrenzi Special Secondary School",
    degree: "High school diploma",
    start: "2011 E.C.",
    end: "2014 E.C.",
  },
];

export const skills = "Backend & API design, system design, databases, automation, team leadership.";

export const tools =
  "Python, JavaScript/TypeScript, Go, C++. Django, Node, Express, Next.js, React, React Native/Expo. PostgreSQL, MongoDB. Git, Linux (Ubuntu), Vercel & more.";

export const certificates: Certificate[] = [
  {
    name: "Back-End Web Development",
    issuer: "ALX Africa",
    year: "2025",
    image: "/certeficates/Fetehadin-Backend.jpg",
    width: 1280,
    height: 720,
  },
  {
    name: "Cyber Talent Summer Camp (4th round)",
    issuer: "INSA × AASTU",
    year: "2025",
    image: "/certeficates/fetehadin-INSA.jpg",
    width: 4608,
    height: 3456,
  },
  {
    name: "Data Structures & Algorithms Bootcamp",
    issuer: "Nexus Tutorial",
    year: "2025",
    image: "/certeficates/Fetehadin-DSA_page-0001.jpg",
    width: 618,
    height: 438,
  },
  {
    name: "Catch Up Squad recognition",
    issuer: "ALX Software Engineering",
    year: "2025",
    image: "/certeficates/Fetehadin-ALX-appriciation_page-0001.jpg",
    width: 1242,
    height: 1755,
  },
  {
    name: "Programming Fundamentals Nanodegree",
    issuer: "Udacity",
    year: "2024",
    image: "/certeficates/Fetehadin-Udacity_page-0001.jpg",
    width: 1650,
    height: 1275,
  },
  {
    name: "AI Career Essentials",
    issuer: "ALX Africa",
    year: "2024",
    image: "/certeficates/Fetehadin-AiCE.jpg",
    width: 1280,
    height: 720,
  },
  {
    name: "Python Programming for Beginners",
    issuer: "MS-League",
    year: "2023",
    image: "/certeficates/fetehadin-python_page-0001.jpg",
    width: 1755,
    height: 1240,
  },
];

/** Numbered navigation — the numbers double as keyboard shortcuts. */
export const nav = [
  { key: "1", id: "about", label: "about" },
  { key: "2", id: "experience", label: "experience" },
  { key: "3", id: "projects", label: "projects" },
  { key: "4", id: "education", label: "education" },
  { key: "5", id: "certificates", label: "certificates" },
  { key: "6", id: "contact", label: "contact" },
] as const;
