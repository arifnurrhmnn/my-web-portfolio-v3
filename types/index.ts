export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  completedAt: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance";
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  image?: string;
  skills: string[];
}

export interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export interface Technology {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Other";
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
  };
}
