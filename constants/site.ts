export const SITE_CONFIG = {
  name: "Arif Nur Rohman",
  title: "Frontend Engineer & Web Developer",
  description:
    "Experienced Frontend Engineer specializing in React, Next.js, and modern web technologies.",
  url: "https://arifnurrohman.dev",
  ogImage: "/og-image.jpg",
  email: "arifnr.arkademi@gmail.com",
  location: "Indonesia",
  social: {
    github: "https://github.com/arifnurrhmnn",
    linkedin: "https://linkedin.com/in/arif-nur-rohman",
    twitter: "https://twitter.com/arifnurrhmnn",
    instagram: "https://instagram.com/arifnurrhmnn",
  },
} as const;

export const NAVIGATION_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
] as const;

export const TECH_STACK_CATEGORIES = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  TOOLS: "Tools",
  OTHER: "Other",
} as const;
