// src/lib/content.ts

export const projects = [
  {
    name: "Simplif.ai",
    timeframe: "Feb 2025 – Mar 2025",
    tech: ["React", "JavaScript", "Chrome Ext API", "Web Speech API"],
    desc: [
      "Chrome extension improving accessibility with Dark Mode, TTS, and OpenDyslexic.",
      "Saved user settings and provided real-time voice output via Web Speech API.",
    ],
    href: undefined,
  },
  {
    name: "CoCo Fresh Tea & Juice Website",
    timeframe: "Sep 2024 – Present",
    tech: ["React", "Next.js", "SQL", "Tailwind", "Vercel"],
    desc: [
      "Responsive site with 'Build Your Drink' visualization and an interactive store locator.",
      "Connected REST APIs, validated input, and deployed on Vercel for scale/perf.",
    ],
    href: undefined,
  },
  {
    name: "Budget Plant App",
    timeframe: "Nov 2024 – Jan 2025",
    tech: ["React Native", "JavaScript", "Firebase", "Git"],
    desc: [
      "Track spending/savings with reusable components for history logs and pop-ups.",
      "Integrated Firebase Auth and GitHub OAuth; tested for cross-device UX.",
    ],
    href: undefined,
  },
];

export const experience = [
  {
    role: "Computer Engineer Project Manager",
    org: "The Foundation of the Energy Collective (FEC)",
    place: "Calgary, AB",
    timeframe: "May 2025 – Present",
    bullets: [
      "Built FEC's website with donation portal and project showcase.",
      "Admin panel with role-based access via Keycloak + Firebase.",
      "Integrated Stripe donations; spam-protected forms (reCAPTCHA + Nodemailer).",
      "Full-stack delivery with Next.js, Node.js, PostgreSQL, Prisma ORM.",
    ],
  },
  {
    role: "Web Developer (Freelance)",
    org: "BIOCCM (bioccms.ca)",
    place: "Calgary, AB",
    timeframe: "Apr 2025 – Present",
    bullets: [
      "Redesigned and modernized layouts, color systems, and visuals.",
      "Built responsive components and improved performance with best-practice UX.",
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  Frameworks: [".NET", "React", "React Native", "Next.js", "Node.js", "FastAPI", "JUnit", "Tailwind CSS", "Android Studio"],
  "Dev Tools": ["Git", "GitHub", "Firebase", "Google Cloud", "VS Code", "Docker", "Postman", "Figma", "Jira"],
  "Auth & Security": ["Firebase Auth", "Keycloak", "reCAPTCHA", "Honeypot"],
  "Cloud/Hosting": ["Vercel", "Oracle"],
  Database: ["PostgreSQL", "MongoDB"],
};
