// Single source of truth for the site. Components only render this data:
// edit this file to update the home page, the case studies, the printed CV, /cv.md and /llms.txt.
//
// Rules for this file: every number must be true, spelling is American, and anything
// unknown gets a TODO(fetehadin) instead of a guess.

export type Link = { label: string; href: string };

export type Social = {
  network: "GitHub" | "LinkedIn" | "X" | "Telegram";
  handle: string;
  href: string;
};

export type Shot = { src: string; width: number; height: number; alt: string };

export type Role = {
  org: string;
  title: string;
  /** e.g. "Expert network", "Summer program". */
  kind: string;
  /** "YYYY-MM"; `to: null` means current. */
  from: string;
  to: string | null;
  location: string;
  summary: string;
  /** Start each with a verb; outcome first. */
  bullets: string[];
  tags: string[];
  link?: Link;
};

/** One box in a case-study architecture diagram, drawn left to right. */
export type ArchNode = { label: string; detail: string };

export type Decision = { chose: string; over: string; because: string };

/** Keys into the icon map in lib/tech.tsx. */
export type Tech =
  | "java" | "npm" | "node" | "maven"
  | "react" | "expo" | "typescript" | "tanstack" | "express" | "prisma" | "postgres" | "docker"
  | "python" | "django" | "javascript";

export type Project = {
  slug: string;
  name: string;
  /** Plain-English outcome for the card. */
  outcome: string;
  /** Small label on the card, e.g. "Published on npm". */
  badge: string;
  /** Max four on the card; the case study shows the full stack. */
  chips: string[];
  /** Logos shown on hover over the project. */
  tech: Tech[];
  stack: string[];
  year: string;
  role: string;
  team: string;
  links: Link[];
  /** Shown when there is no public link. */
  linkNote?: string;
  cover: Shot[];
  screenshots: Shot[];
  tldr: string;
  problem: string;
  constraints: string[];
  architecture: ArchNode[];
  architectureNote: string;
  decisions: Decision[];
  built: string[];
  result: string[];
  next: string[];
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

export type Testimonial = { quote: string; name: string; role: string; href?: string };

export type Faq = { q: string; a: string | null };

// ---------------------------------------------------------------------------

export const profile = {
  name: "Fetehadin Negash",
  firstName: "Fetehadin",
  role: "Full-Stack Engineer",
  /** The hero's positioning line. Options considered are in docs/redesign-audit.md. */
  positioning:
    "Full-stack software engineer building web apps, mobile apps, and backend systems that solve real-world problems. From database to deployment, I ship software that's fast, reliable, and built to scale.",
  intro:
    "Three years into software, I've published a static-analysis tool on npm, built the app a wholesale business runs its stock and credit on, and led a team at INSA's Summer Tech Camp.",
  availability: "Available for remote & freelance work",
  city: "Addis Ababa",
  country: "Ethiopia",
  timezone: "Africa/Addis_Ababa",
  utc: "GMT+3",
  email: "fetehadinnegash@gmail.com",
  site: "https://fetehadin.pro.et",
  domain: "fetehadin.pro.et",
  photo: "/fetehadin-gree.png",
  cv: "https://drive.google.com/file/d/1HBvlOeg1si_HJ9zASuvfW6hPb1CppOVx/view?usp=sharing",
  description:
    "Fetehadin Negash is a full-stack engineer in Addis Ababa (GMT+3) who builds backend-heavy web and mobile products: Django, Node.js, PostgreSQL, Next.js and React Native. Open to remote roles and freelance work.",
  contactLine: "Open to remote full-stack roles and freelance projects. I reply within a day.",
};

export const socials: Social[] = [
  { network: "GitHub", handle: "fetehadin", href: "https://github.com/fetehadin" },
  { network: "LinkedIn", handle: "in/fetehadin", href: "https://www.linkedin.com/in/fetehadin/" },
  { network: "X", handle: "@fetebuilds", href: "https://x.com/fetebuilds" },
  { network: "Telegram", handle: "@Fete64", href: "https://t.me/Fete64" },
];

/** Hero proof chips: only facts a recruiter can verify one click deeper. */
export const proof: Link[] = [
  { label: "Tool published on npm", href: "/work/smart-duplicate-detector" },
  { label: "Team lead, INSA Tech Camp", href: "#experience" },
  { label: "AfterQuery expert network", href: "#experience" },
  { label: "ALX backend program", href: "#experience" },
];

// ---------------------------------------------------------------------------

/** Most recent first. */
export const experience: Role[] = [
  {
    org: "AfterQuery",
    title: "Mid-Level Full-Stack Engineer Expert",
    kind: "Expert network",
    from: "2026-08",
    to: null,
    location: "Remote",
    summary: "Selected for AfterQuery's network of expert engineers to take on full-stack work end to end.",
    // TODO(fetehadin): add metric — e.g. number of projects or tasks delivered, review scores. Replace the bullets with specifics if you can share them.
    bullets: [
      "Build and architect web applications end to end, from the database to the interface.",
      "Deliver high-quality, maintainable code for complex project requirements.",
    ],
    tags: ["Full-stack", "System design", "Remote"],
  },
  {
    org: "Ethiopian Artificial Intelligence Institute",
    title: "Data Encoder",
    kind: "Full-time, on-site",
    from: "2025-08",
    to: "2025-12",
    location: "Addis Ababa",
    summary: "Built training data for a national AI project.",
    // TODO(fetehadin): add metric — e.g. records encoded, error rate, team size.
    bullets: [
      "Encoded and validated data for machine-learning models on a national AI dataset project.",
      "Validated data rigorously so the dataset stayed reliable enough to train models on.",
    ],
    tags: ["Data quality", "Machine learning"],
  },
  {
    org: "INSA Summer Tech Camp",
    title: "Team Lead & Full-Stack Developer",
    kind: "Summer program",
    from: "2025-07",
    to: "2025-10",
    location: "Addis Ababa",
    summary: "Led a multidisciplinary team that built EduConnect, a learning platform for Ethiopian students.",
    // TODO(fetehadin): add metric — e.g. team size, camp ranking or award.
    bullets: [
      "Led the team through INSA's four-month build challenge and shipped EduConnect as a live demo.",
      "Designed the backend: Django REST APIs on a relational PostgreSQL model.",
      "Worked across the stack on the JavaScript frontend with the rest of the team.",
    ],
    tags: ["Team lead", "Django", "PostgreSQL"],
    link: { label: "EduConnect case study", href: "/work/educonnect" },
  },
  {
    org: "ALX Africa",
    title: "Volunteer Mentor, Catch-Up Squad",
    kind: "Volunteer",
    from: "2025-06",
    to: "2025-07",
    location: "Remote",
    summary: "Mentored frontend learners in ALX's Catch-Up Squad.",
    bullets: [
      "Answered learners' technical questions in the forums and on Discord.",
      "Kept the peer-learning space welcoming, and received ALX's Certificate of Appreciation.",
    ],
    tags: ["Mentoring", "Frontend"],
  },
  {
    org: "ALX Africa",
    title: "Backend Developer Trainee",
    kind: "Intensive program",
    from: "2024-08",
    to: "2025-01",
    location: "Remote",
    summary: "Completed ALX's project-based backend engineering program.",
    bullets: [
      "Built production-style applications with Python, Django, Node.js and Express on SQL and MongoDB.",
      "Worked in peer teams, with mentorship from experienced engineers.",
    ],
    tags: ["Python", "Node.js", "SQL"],
  },
];

// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    slug: "smart-duplicate-detector",
    name: "Smart Duplicate Detector",
    outcome: "Finds copy-pasted business logic in Java projects, even after variables are renamed.",
    badge: "Published on npm",
    chips: ["Java", "Static analysis", "CLI", "Desktop app"],
    tech: ["java", "maven", "node", "npm"],
    stack: ["Java 17", "JavaParser", "Weighted Levenshtein", "Swing + FlatLaf", "Javalin", "Maven", "Node.js CLI wrapper"],
    year: "2026",
    role: "Lead developer (35 of the project's 40 commits)",
    team: "3 engineers, course project",
    links: [
      { label: "Website", href: "https://smart-duplicate-detector.vercel.app/" },
      { label: "npm", href: "https://www.npmjs.com/package/smart-duplicate-detector" },
      { label: "Source", href: "https://github.com/fetehadin/smart-duplicate-detector" },
    ],
    cover: [
      { src: "/projects/s.png", width: 1844, height: 897, alt: "Smart Duplicate Detector desktop app after a scan, listing structural matches" },
    ],
    screenshots: [
      { src: "/projects/s.png", width: 1844, height: 897, alt: "The desktop app after a scan, listing structurally similar methods with their scores" },
      { src: "/projects/SDD.png", width: 921, height: 827, alt: "The project website with the npm install command" },
    ],
    tldr:
      "A static-analysis tool that finds duplicated logic in Java code. It compares the shape of each method, not its text, so renamed variables and reformatting don't hide a copy.",
    problem:
      "Duplicated business logic creeps into Java projects through copy-paste, AI-generated code and parallel implementations. The copies drift apart, so a bug fixed in one stays live in the other. Text-based duplicate finders either miss these copies, because names and formatting changed, or flood you with false positives from getters, setters and imports.",
    constraints: [
      "Java 17 and an object-oriented design were course requirements.",
      "It had to work both for a developer at a terminal and for someone who prefers a window and buttons.",
      "Every method is compared with every other method, so cost grows with the square of the method count.",
    ],
    architecture: [
      { label: "Project scanner", detail: "finds every .java file" },
      { label: "AST parser", detail: "JavaParser → node-type tokens" },
      { label: "Similarity engine", detail: "weighted Levenshtein" },
      { label: "Reports", detail: "desktop app · CLI · Javalin API" },
    ],
    architectureNote:
      "Each method becomes a list of AST node types (IfStmt, ForStmt, MethodCallExpr…). Names never enter the comparison, which is why renaming a variable doesn't hide a duplicate.",
    // TODO(fetehadin): check these trade-offs match your reasoning; they're written from the code.
    decisions: [
      {
        chose: "comparing AST node types",
        over: "comparing source text or tokens",
        because: "names and formatting change between copies, but the structure of the logic doesn't.",
      },
      {
        chose: "a weighted edit distance (control flow ×10, method calls ×2)",
        over: "plain Levenshtein",
        because: "a different if or loop changes what a method does far more than an extra variable declaration.",
      },
      {
        chose: "shipping the JAR inside an npm package with a small Node.js launcher",
        over: "a Maven-only release",
        because: "`npm i -g` is one command most developers already have, and the launcher checks for Java 17 first with a clear error.",
      },
    ],
    built: [
      "The scanning and detection pipeline: file discovery, AST extraction with JavaParser, and the weighted similarity algorithm.",
      "A filter that skips methods with fewer than three statements, which removes getters and setters from the results.",
      "A Swing desktop app with a FlatLaf dark theme, an adjustable similarity threshold and background scanning via SwingWorker.",
      "A CLI (`sdd --path . --threshold 0.75`), published to npm as `smart-duplicate-detector`, plus a small Javalin API.",
      "Unit tests for the scoring and an end-to-end integration test that scans real files in a temporary directory.",
    ],
    result: [
      "Published on npm in July 2026; 207 downloads from July to October 2026, according to npm's public download stats.",
      // TODO(fetehadin): add metric — e.g. duplicates found in a real codebase, course grade, user feedback.
    ],
    next: [
      "Group methods by size and structure hash before comparing, so large projects avoid the all-pairs cost.",
      "Output SARIF so results show up inline in GitHub code scanning and IDEs.",
      "Add a refactoring hint for each pair: the shared logic that could be extracted.",
    ],
  },
  {
    slug: "tajstore",
    name: "TajStore",
    outcome: "The app a wholesale business uses to run its stock, sales reps' credit and payment approvals.",
    badge: "Used by a real business",
    chips: ["React Native", "Node.js", "PostgreSQL", "Solo build"],
    tech: ["react", "expo", "typescript", "tanstack", "node", "express", "prisma", "postgres", "docker"],
    stack: ["React Native", "Expo Router", "TanStack Query", "Zustand", "TypeScript", "Node.js", "Express 5", "Prisma", "PostgreSQL", "Zod", "Docker Compose", "Caddy", "EAS Update"],
    year: "2026",
    role: "Sole developer: requirements, API, mobile app and deployment",
    team: "Solo (191 commits)",
    links: [],
    linkNote: "Private business app, so there's no public link",
    cover: [
      { src: "/projects/tajstore-1.jpg", width: 576, height: 1280, alt: "TajStore admin home screen with total supplier debt and core modules" },
      { src: "/projects/tajstore-2.jpg", width: 576, height: 1280, alt: "TajStore approvals desk with payment receipts to approve or reject" },
      { src: "/projects/tajstore-3.jpg", width: 606, height: 1280, alt: "TajStore supplier screen listing inventory batches and amounts due" },
    ],
    screenshots: [
      { src: "/projects/tajstore-1.jpg", width: 576, height: 1280, alt: "Admin home: money owed to suppliers and the core modules" },
      { src: "/projects/tajstore-2.jpg", width: 576, height: 1280, alt: "Approvals desk: approve or reject a sales rep's bank-transfer receipt" },
      { src: "/projects/tajstore-3.jpg", width: 606, height: 1280, alt: "Suppliers: delivery batches with FIFO cost, refunds and payments" },
      { src: "/projects/tajstore-4.jpg", width: 576, height: 1280, alt: "Store inventory with cost, price and stock per product" },
      { src: "/projects/tajstore-7.jpg", width: 606, height: 1280, alt: "Sign-in: username and 6-digit PIN, or biometrics" },
      { src: "/projects/tajstore-6.jpg", width: 576, height: 1280, alt: "Operational summary: net balance and the core modules" },
      { src: "/projects/tajstore-5.jpg", width: 603, height: 1280, alt: "Admin menu: profile and security, notes and messages" },
    ],
    tldr:
      "A mobile app and API for a wholesale distributor. Sales reps take stock on credit and pay it back with bank-transfer receipts; admins approve payments and track what every rep and supplier owes.",
    problem:
      "The business buys stock from suppliers in batches and hands it to field sales reps on credit. Tracking who holds which stock, who owes what, and which bank transfers really arrived was manual. Mistakes meant lost money.",
    constraints: [
      "Money is involved: balances must always add up.",
      "Sales reps work from Android phones out in the field.",
      "Updates had to reach the team without waiting on app-store releases.",
      "A one-person team, so the system had to be simple to deploy, back up and restore.",
    ],
    architecture: [
      { label: "Mobile app", detail: "Expo · admin and rep portals" },
      { label: "API", detail: "Express 5 · Zod validation" },
      { label: "Database", detail: "PostgreSQL via Prisma" },
      { label: "VPS", detail: "Docker Compose · Caddy · backups" },
    ],
    architectureNote:
      "The app never decides prices or balances. It sends intentions (check out these items, here is a receipt), and the API prices, validates and records them in one place.",
    // TODO(fetehadin): check these trade-offs match your reasoning; they're written from the README.
    decisions: [
      {
        chose: "pricing every checkout on the server, all or nothing",
        over: "trusting the totals the app sends",
        because: "a stale price or a half-applied cart on one phone would quietly corrupt every balance after it.",
      },
      {
        chose: "FIFO cost per supplier batch",
        over: "a single average cost per product",
        because: "the owner pays and refunds suppliers batch by batch, so costs had to be traceable to the batch they came from.",
      },
      {
        chose: "biometric sign-in through a revocable device token",
        over: "storing the PIN on the phone",
        because: "a lost phone can be cut off from the server, and the PIN never sits on the device.",
      },
    ],
    built: [
      "Admin portal: suppliers and delivery batches, stock, sales-rep accounts and credit limits, payment approvals, returns, and a dashboard of money held and owed.",
      "Sales-rep portal: check out stock up to a credit limit, pay by uploading a transfer receipt, return unsold stock, and see a running ledger.",
      "Accounts: 6-digit PINs, email verification, rate-limited logins, sign-out of other devices on PIN change, and receipts served only through short-lived signed links.",
      "Operations: a Docker Compose stack behind Caddy on a VPS, with scripted deploys, backups, backup checks and restore.",
      "Releases: over-the-air updates with EAS for JavaScript changes; new APK builds only for native changes.",
    ],
    result: [
      "In use as the business's operations app (version 1.1.0 at the time of writing).",
      // TODO(fetehadin): add metric — e.g. number of sales reps, transactions per week, hours saved on reconciliation.
    ],
    next: [
      "An offline queue so reps can prepare checkouts with no signal and sync when they're back online.",
      "Export ledgers to a spreadsheet for the business's accountant.",
    ],
  },
  {
    slug: "educonnect",
    name: "EduConnect",
    outcome: "A learning hub where students across Ethiopia find resources and each other.",
    badge: "Team lead · INSA Tech Camp",
    chips: ["Django", "PostgreSQL", "REST API", "Team lead"],
    tech: ["python", "django", "postgres", "javascript"],
    stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JavaScript"],
    year: "2025",
    role: "Team lead and backend architect",
    // TODO(fetehadin): add metric — team size (e.g. "5 students").
    team: "Multidisciplinary team, INSA Summer Tech Camp",
    links: [{ label: "Live demo", href: "https://educonnect-frontend-opal.vercel.app" }],
    cover: [{ src: "/projects/edu-connect.png", width: 880, height: 622, alt: "EduConnect landing page: learn, connect, achieve" }],
    screenshots: [{ src: "/projects/edu-connect.png", width: 880, height: 622, alt: "EduConnect landing page" }],
    tldr:
      "A web platform for Ethiopian students to find learning resources and connect with each other, built in INSA's four-month Summer Tech Camp. I led the team and designed the backend.",
    problem:
      "Students across Ethiopia had no single place to find learning resources and connect with each other.",
    constraints: [
      "Four months from idea to a working, deployed product.",
      "A team with mixed experience, so the backend had to be easy for everyone to work in.",
    ],
    architecture: [
      { label: "Web frontend", detail: "JavaScript · deployed on Vercel" },
      { label: "REST API", detail: "Django REST Framework" },
      { label: "Database", detail: "PostgreSQL" },
    ],
    architectureNote:
      "A separate frontend and API, so the frontend and backend developers on the team could work in parallel against an agreed contract.",
    // TODO(fetehadin): check these trade-offs match your reasoning.
    decisions: [
      {
        chose: "Django and Django REST Framework",
        over: "a hand-rolled Node.js API",
        because: "the admin, auth and serializers come built in, which matters on a four-month deadline with a mixed team.",
      },
      {
        chose: "a relational PostgreSQL model",
        over: "a document store",
        because: "students, courses and resources are related records, and the joins between them are the product.",
      },
      {
        chose: "a REST API with a separate frontend",
        over: "server-rendered Django templates",
        because: "the team could split along the API contract and build both halves at the same time.",
      },
    ],
    built: [
      "The backend architecture: data model, Django REST APIs and secure API integrations.",
      "Frontend work alongside the team, and coordination of the build as team lead.",
    ],
    result: [
      "Shipped within the four-month camp and deployed as a live demo.",
      // TODO(fetehadin): add metric — e.g. camp ranking or award, users, feedback.
    ],
    next: ["Search across resources, and a mentor directory that connects students with graduates."],
  },
];

export const moreProjects: (Link & { note: string; tech: Tech })[] = [
  { label: "CV Formatter", note: "JavaScript", tech: "javascript", href: "https://github.com/fetehadin/CV-Formatter" },
  { label: "Schedule Tracker", note: "JavaScript", tech: "javascript", href: "https://github.com/fetehadin/scheduleTracker" },
  { label: "Event Booking System", note: "TypeScript", tech: "typescript", href: "https://github.com/fetehadin/Event-Booking-System" },
  { label: "BookWise", note: "JavaScript", tech: "javascript", href: "https://github.com/fetehadin/BookWise_frontend" },
];

export const githubRepos = "https://github.com/fetehadin?tab=repositories";

// ---------------------------------------------------------------------------

export const process = [
  { title: "Understand the problem", body: "I start with who uses the system and what failure would cost them, before choosing any tools." },
  { title: "Design the system", body: "Data model, API contract and the risky parts first, written down so we agree before I build." },
  { title: "Ship in small increments", body: "Working software early and often, each step reviewable, so you can steer while it's cheap." },
  { title: "Hand over with docs", body: "A README, setup and deploy steps, and the reasoning behind decisions, so the next person isn't guessing." },
];

export const communication = [
  { title: "Async-friendly", body: "I write things down: decisions, trade-offs and blockers, in the ticket or the PR." },
  { title: "Overlaps EU hours", body: "Addis Ababa is GMT+3 with no daylight saving: a full European working day, and US East Coast mornings." },
  { title: "Written updates", body: "Short, regular progress notes, so nobody has to chase me for status." },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Python", "Django", "Django REST Framework", "Node.js", "Express", "Java", "Go"] },
  { group: "Frontend & mobile", items: ["TypeScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS"] },
  { group: "Data", items: ["PostgreSQL", "Prisma", "MongoDB", "SQL"] },
  { group: "Tools", items: ["Git", "Linux", "Docker", "Vercel", "EAS"] },
];

// TODO(fetehadin): confirm AI/ML items — add "LLM integration" here only if you've shipped it.
export const practice = ["API design", "System design", "Relational modeling", "Automation"];

// ---------------------------------------------------------------------------

export const education: School[] = [
  { name: "HiLCoE School of Computer Science & Technology", degree: "B.Sc. Software Engineering", start: "2025", end: "Present" },
  // TODO(fetehadin): confirm AAU status/dates — the old site said "2021 – Present".
  { name: "Addis Ababa University", degree: "Civil & Environmental Engineering", start: "2021", end: "Present" },
  { name: "Hayrenzi Special Secondary School", degree: "High school diploma", start: "2018", end: "2021" },
];

export const certificates: Certificate[] = [
  { name: "Back-End Web Development", issuer: "ALX Africa", year: "2025", image: "/certificates/Fetehadin-Backend.jpg", width: 1280, height: 720 },
  { name: "Cyber Talent Summer Camp", issuer: "INSA", year: "2025", image: "/certificates/fetehadin-INSA.jpg", width: 4608, height: 3456 },
  { name: "Data Structures & Algorithms", issuer: "Nexus Tutorial", year: "2025", image: "/certificates/Fetehadin-DSA_page-0001.jpg", width: 618, height: 438 },
  { name: "Certificate of Appreciation", issuer: "ALX Software Engineering", year: "2025", image: "/certificates/Fetehadin-ALX-appriciation_page-0001.jpg", width: 1242, height: 1755 },
  { name: "Programming Fundamentals", issuer: "Udacity", year: "2024", image: "/certificates/Fetehadin-Udacity_page-0001.jpg", width: 1650, height: 1275 },
  { name: "AI Career Essentials", issuer: "ALX Africa", year: "2024", image: "/certificates/Fetehadin-AiCE.jpg", width: 1280, height: 720 },
  { name: "Python Programming", issuer: "MS-League", year: "2023", image: "/certificates/fetehadin-python_page-0001.jpg", width: 1755, height: 1240 },
];

// TODO(fetehadin): add 1–2 real quotes (INSA teammate/mentor, TajStore client). The section stays hidden while this is empty.
export const testimonials: Testimonial[] = [];

/** Questions with `a: null` are not shown. */
export const faqs: Faq[] = [
  {
    q: "Are you available full-time?",
    // TODO(fetehadin): confirm this works alongside your HiLCoE studies and AfterQuery.
    a: "Yes. I'm looking for a full-time remote role, and I also take on freelance and contract projects.",
  },
  {
    q: "What time zones can you work with?",
    a: "I'm in Addis Ababa, GMT+3, with no daylight saving. That covers the whole European working day, and I can overlap with US East Coast mornings.",
  },
  {
    q: "What's your strongest stack?",
    a: "Backends in Python and Django or Node.js and Express, on PostgreSQL. On the front end, React and Next.js for the web and React Native with Expo for mobile.",
  },
  // TODO(fetehadin): answer the relocation question; it's hidden until you do.
  { q: "Can you relocate?", a: null },
];

// ---------------------------------------------------------------------------

/** Numbered sections; the numbers double as keyboard shortcuts. */
export const nav = [
  { key: "1", id: "work", label: "Work" },
  { key: "2", id: "experience", label: "Experience" },
  { key: "3", id: "process", label: "How I work" },
  { key: "4", id: "skills", label: "Skills" },
  { key: "5", id: "education", label: "Education" },
  { key: "6", id: "contact", label: "Contact" },
] as const;

// ---------------------------------------------------------------------------
// Date helpers, shared by the timeline, /cv.md and /llms.txt.

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

/** Inclusive month count as a badge, e.g. Jul–Oct → "4 mos". */
export function duration(from: string, to: string | null, now = currentMonth()) {
  const months = toIndex(to ?? now) - toIndex(from) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const y = years ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const m = rest ? `${rest} mo${rest > 1 ? "s" : ""}` : "";
  return [y, m].filter(Boolean).join(" ");
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const answeredFaqs = faqs.filter((faq): faq is Faq & { a: string } => faq.a !== null);
