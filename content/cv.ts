// Single source of truth for the CV. Components only render this data —
// edit this file to update the site, the case-study pages, the print layout and /cv.md.

export type Link = { label: string; href: string };

export type Social = {
  network: "GitHub" | "LinkedIn" | "X" | "Telegram";
  handle: string;
  href: string;
};

export type Role = {
  org: string;
  /** Two letters shown in the timeline badge. */
  monogram: string;
  title: string;
  oneLiner: string;
  /** "YYYY-MM"; `to: null` means current. */
  from: string;
  to: string | null;
  location: string;
  bullets: string[];
  link?: Link;
};

export type Shot = { src: string; width: number; height: number; alt: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** Small label on the card, e.g. "on npm". */
  badge: string;
  /** Short tags for the card, e.g. ["Static analysis", "CLI"]. */
  tags: string[];
  year: string;
  role: string;
  stack: string[];
  links: Link[];
  /** Shown when there is no public link. */
  linkNote?: string;
  /** Card artwork: one wide image, or several phone screens side by side. */
  cover: Shot[];
  screenshots: Shot[];
  problem: string;
  built: string;
  result: string;
};

export type School = { name: string; degree: string; start: string; end: string };

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
  firstName: "Fetehadin",
  role: "Software Engineer · Full-Stack & Backend",
  city: "Addis Ababa, Ethiopia",
  timezone: "Africa/Addis_Ababa",
  utc: "UTC+3",
  email: "fetehadinnegash@gmail.com",
  site: "https://fetehadin.pro.et",
  domain: "fetehadin.pro.et",
  photo: "/fetehadin-gree.png",
  cv: "https://drive.google.com/file/d/1HBvlOeg1si_HJ9zASuvfW6hPb1CppOVx/view?usp=sharing",
  description:
    "Fetehadin Negash is a software engineer in Addis Ababa with three years of experience building backend systems, APIs and full-stack products — Django, Node, Next.js and React Native. Open to remote roles.",
  about: {
    lead: "I'm Fetehadin, a software engineer in Addis Ababa with three years of building backend systems, APIs and full-stack products.",
    // TODO(fetehadin): check the journey below matches your story (dates taken from your certificates).
    paragraphs: [
      "I wrote my first Python in 2023 and haven't stopped since. I went deep on backend engineering through ALX, studied software engineering at HiLCoE, led a team at INSA's Summer Tech Camp to ship EduConnect, and now work as a full-stack engineer at AfterQuery.",
      "Along the way I've built a static-analysis tool for Java that's published on npm, and a field-sales app for a wholesale distributor. I like the unglamorous parts: data models, APIs, and automation that quietly removes busywork.",
      "Before software I studied civil engineering. It still shows in how I work — I design for load, failure and the long run, not just the demo.",
    ],
  },
  lookingFor:
    "Remote full-stack or backend roles, and freelance projects. I work from Addis Ababa (UTC+3), which overlaps comfortably with Europe and the Middle East.",
};

export const socials: Social[] = [
  { network: "GitHub", handle: "@fetehadin", href: "https://github.com/fetehadin" },
  { network: "LinkedIn", handle: "in/fetehadin", href: "https://www.linkedin.com/in/fetehadin/" },
  { network: "X", handle: "@fetebuilds", href: "https://x.com/fetebuilds" },
  { network: "Telegram", handle: "@Fete64", href: "https://t.me/Fete64" },
];

/** Most recent first. */
export const work: Role[] = [
  {
    org: "AfterQuery",
    monogram: "AQ",
    title: "Mid-Level Full-Stack Engineer Expert",
    // TODO(fetehadin): one line on what you do at AfterQuery, plus 2–3 bullets — left blank rather than guessed.
    oneLiner: "Full-stack engineering, remote.",
    from: "2026-08",
    to: null,
    location: "Remote",
    bullets: [],
  },
  {
    org: "INSA Summer Tech Camp",
    monogram: "IN",
    title: "Team Lead & Full-Stack Developer",
    oneLiner: "Led the team that built EduConnect in four months.",
    from: "2025-07",
    to: "2025-10",
    location: "Addis Ababa",
    bullets: [
      "Led a multidisciplinary team through INSA's four-month Summer Tech Camp challenge.",
      "Designed the backend architecture — Django REST APIs on PostgreSQL — and worked on the frontend.",
      "Shipped EduConnect, a learning hub for students across Ethiopia, as a live demo.",
    ],
    link: { label: "EduConnect case study", href: "/projects/educonnect" },
  },
  {
    org: "Ethiopian Artificial Intelligence Institute",
    monogram: "AI",
    title: "Data Encoder",
    oneLiner: "Built reliable datasets for a national AI project.",
    from: "2025-08",
    to: "2025-12",
    location: "Addis Ababa",
    bullets: [
      "Encoded and validated data for a national AI project.",
      "Rigorous validation kept the datasets reliable enough to train machine-learning models on.",
    ],
  },
  {
    org: "ALX Africa",
    monogram: "AX",
    title: "Backend Developer Trainee",
    oneLiner: "Intensive, project-based backend engineering programme.",
    from: "2024-08",
    to: "2025-01",
    location: "Remote",
    bullets: [
      "Built production-style applications with Python, Django, Node.js and Express, on SQL and MongoDB.",
      "Worked in peer teams under mentorship from experienced engineers.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "smart-duplicate-detector",
    name: "Smart Duplicate Detector",
    tagline: "Finds duplicated business logic in Java codebases.",
    badge: "on npm",
    tags: ["Static analysis", "AST", "CLI"],
    year: "2026",
    role: "Author",
    stack: ["Java 17", "JavaParser", "Weighted Levenshtein", "FlatLaf", "Maven", "npm CLI"],
    links: [
      { label: "Website", href: "https://smart-duplicate-detector.vercel.app/" },
      { label: "npm", href: "https://www.npmjs.com/package/smart-duplicate-detector" },
      { label: "Source", href: "https://github.com/fetehadin/smart-duplicate-detector" },
    ],
    cover: [
      { src: "/projects/s.png", width: 1844, height: 897, alt: "Smart Duplicate Detector desktop app showing a scan with structural matches" },
    ],
    screenshots: [
      { src: "/projects/s.png", width: 1844, height: 897, alt: "The desktop app after a scan, listing structurally similar methods" },
      { src: "/projects/SDD.png", width: 921, height: 827, alt: "The project website with the npm install command" },
    ],
    problem:
      "Duplicated business logic hides in Java codebases behind renamed variables and different formatting, so text-based comparison either misses it or drowns it in false positives.",
    built:
      "A static-analysis tool that parses Java into ASTs with JavaParser and compares method structure with a weighted Levenshtein distance, so matches reflect logic rather than layout. It ships as a FlatLaf Swing desktop app with an adjustable similarity threshold, and as a CLI on npm.",
    // TODO(fetehadin): add real results (downloads, users, bugs found) if you have them.
    result: "Published as smart-duplicate-detector v1.0.0 on npm in July 2026.",
  },
  {
    slug: "tajstore",
    name: "TajStore",
    tagline: "Wholesale distribution and field-sales app.",
    badge: "internal app",
    tags: ["Mobile", "Real-time sync", "OTA updates"],
    // TODO(fetehadin): add the year TajStore was built (omitted from the page until set).
    year: "",
    // TODO(fetehadin): confirm your role on TajStore.
    role: "Full-stack developer",
    stack: ["React Native", "Expo Router", "TypeScript", "TanStack Query", "Zustand", "EAS OTA"],
    links: [],
    linkNote: "Internal business app — no public link",
    cover: [
      { src: "/projects/tajstore-7.jpg", width: 606, height: 1280, alt: "TajStore sign-in screen with biometrics" },
      { src: "/projects/tajstore-6.jpg", width: 576, height: 1280, alt: "TajStore operational summary dashboard" },
      { src: "/projects/tajstore-4.jpg", width: 576, height: 1280, alt: "TajStore store inventory with FIFO cost and stock" },
    ],
    screenshots: [
      { src: "/projects/tajstore-7.jpg", width: 606, height: 1280, alt: "Sign-in with PIN or biometrics" },
      { src: "/projects/tajstore-6.jpg", width: 576, height: 1280, alt: "Operational summary and core modules" },
      { src: "/projects/tajstore-4.jpg", width: 576, height: 1280, alt: "Store inventory with FIFO cost, price and stock" },
      { src: "/projects/tajstore-5.jpg", width: 603, height: 1280, alt: "Account menu" },
    ],
    problem:
      "A wholesale distributor needed admins and field sales reps working from the same live data: warehouse checkouts, customer debt, supplier batches and payment approvals.",
    built:
      "A React Native app on Expo Router with separate admin and sales-rep portals, PIN and biometric sign-in, and a custom dark mode. TanStack Query and Zustand keep data in sync across devices, and EAS pushes over-the-air updates without app-store releases.",
    // TODO(fetehadin): add the outcome (users, time saved, errors reduced) — not on the current site.
    result: "In use as the business's internal operations app.",
  },
  {
    slug: "educonnect",
    name: "EduConnect",
    tagline: "A learning hub for students across Ethiopia.",
    badge: "INSA Tech Camp",
    tags: ["Web platform", "REST API", "Team lead"],
    year: "2025",
    role: "Team lead & backend architect",
    stack: ["Python", "Django", "PostgreSQL", "REST", "JavaScript"],
    links: [{ label: "Live demo", href: "https://educonnect-frontend-opal.vercel.app" }],
    cover: [
      { src: "/projects/edu-connect.png", width: 880, height: 622, alt: "EduConnect landing page: learn, connect, achieve" },
    ],
    screenshots: [
      { src: "/projects/edu-connect.png", width: 880, height: 622, alt: "EduConnect landing page" },
    ],
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
];

export const githubRepos = "https://github.com/fetehadin?tab=repositories";

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C++"] },
  { group: "Backend", items: ["Django", "Django REST", "Node.js", "Express"] },
  { group: "Frontend", items: ["Next.js", "React", "React Native", "Expo", "Tailwind CSS"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "SQL"] },
  { group: "Tooling", items: ["Git", "Linux", "Vercel", "EAS"] },
  {
    group: "Practice",
    items: ["API design", "System design", "Data modelling", "Automation", "Team leadership"],
  },
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

export const certificates: Certificate[] = [
  { name: "Back-End Web Development", issuer: "ALX Africa", year: "2025", image: "/certeficates/Fetehadin-Backend.jpg", width: 1280, height: 720 },
  { name: "Cyber Talent Summer Camp (4th round)", issuer: "INSA × AASTU", year: "2025", image: "/certeficates/fetehadin-INSA.jpg", width: 4608, height: 3456 },
  { name: "Data Structures & Algorithms Bootcamp", issuer: "Nexus Tutorial", year: "2025", image: "/certeficates/Fetehadin-DSA_page-0001.jpg", width: 618, height: 438 },
  { name: "Catch Up Squad recognition", issuer: "ALX Software Engineering", year: "2025", image: "/certeficates/Fetehadin-ALX-appriciation_page-0001.jpg", width: 1242, height: 1755 },
  { name: "Programming Fundamentals Nanodegree", issuer: "Udacity", year: "2024", image: "/certeficates/Fetehadin-Udacity_page-0001.jpg", width: 1650, height: 1275 },
  { name: "AI Career Essentials", issuer: "ALX Africa", year: "2024", image: "/certeficates/Fetehadin-AiCE.jpg", width: 1280, height: 720 },
  { name: "Python Programming for Beginners", issuer: "MS-League", year: "2023", image: "/certeficates/fetehadin-python_page-0001.jpg", width: 1755, height: 1240 },
];

/** Numbered sections — the numbers double as keyboard shortcuts. */
export const nav = [
  { key: "1", id: "about", label: "about" },
  { key: "2", id: "work", label: "work" },
  { key: "3", id: "projects", label: "projects" },
  { key: "4", id: "stack", label: "stack" },
  { key: "5", id: "education", label: "education" },
  { key: "6", id: "contact", label: "contact" },
] as const;

// ---------------------------------------------------------------------------
// Date helpers (shared by the timeline, case-study pages and /cv.md)

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toIndex(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

export function currentMonth(now = new Date()) {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export function formatMonth(ym: string | null) {
  if (!ym) return "Present";
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** Inclusive month count, e.g. Aug–Jan = 6 mo. */
export function duration(from: string, to: string | null, now = currentMonth()) {
  const months = toIndex(to ?? now) - toIndex(from) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years ? `${years} yr` : "", rest ? `${rest} mo` : ""].filter(Boolean).join(" ");
}

/** Position of a role on the shared timeline axis, as percentages. */
export function timelineSpan(from: string, to: string | null, axisFrom: string, now = currentMonth()) {
  const start = toIndex(axisFrom);
  const total = toIndex(now) + 1 - start;
  const left = ((toIndex(from) - start) / total) * 100;
  const width = ((toIndex(to ?? now) + 1 - toIndex(from)) / total) * 100;
  return { left, width };
}
