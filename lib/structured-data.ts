export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arif Nur Rohman",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer with 3+ years experience specializing in React.js, Next.js, and modern web development. Based in Indonesia, delivering high-performance web applications.",
  url: "https://arifnurrohman.com",
  image: "https://arifnurrohman.com/profile-photo.jpg",
  email: "arifnr.arkademi@gmail.com",
  birthPlace: "Indonesia",
  nationality: "Indonesian",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universitas Amikom Yogyakarta",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressCountry: "Indonesia",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "Arkademi",
    url: "https://arkademi.com",
  },
  knowsAbout: [
    "Frontend Development",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Web Development",
    "User Interface Design",
    "Search Engine Optimization",
    "Responsive Web Design",
  ],
  sameAs: [
    "https://linkedin.com/in/arifnurrohman",
    "https://github.com/arifnurrhmnn",
    "https://instagram.com/arifnurr",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arif Nur Rohman Portfolio",
  url: "https://arifnurrohman.com",
  description:
    "Professional portfolio showcasing frontend engineering projects and experience",
  author: {
    "@type": "Person",
    name: "Arif Nur Rohman",
  },
  inLanguage: "en-US",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Arif Nur Rohman - Frontend Engineering Services",
  description:
    "Professional frontend development services specializing in React, Next.js, and modern web technologies",
  provider: {
    "@type": "Person",
    name: "Arif Nur Rohman",
  },
  areaServed: "Indonesia",
  serviceType: [
    "Frontend Development",
    "React Development",
    "Next.js Development",
    "Web Application Development",
    "UI/UX Implementation",
  ],
};
