export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arif Nur Rohman",
  jobTitle: "Frontend Engineer",
  description:
    "Experienced Frontend Engineer specializing in React.js, Next.js, TypeScript & modern web development. 3+ years building high-performance, SEO-optimized web applications. Expertise in responsive design, API integration & UI/UX implementation.",
  url: "https://arifnurrohman.com",
  image: "https://arifnurrohman.com/img/img-profile.webp",
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
    "API Integration",
    "Performance Optimization",
    "UI/UX Implementation",
  ],
  sameAs: [
    "https://linkedin.com/in/arifnurrohman",
    "https://github.com/arifnurrhmnn",
    "https://instagram.com/arif_pride",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arif Nur Rohman",
  url: "https://arifnurrohman.com",
  description:
    "Experienced Frontend Engineer specializing in React.js, Next.js, TypeScript & modern web development. Professional portfolio showcasing 3+ years of high-performance web development projects and expertise.",
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
    "Professional frontend development services specializing in React.js, Next.js, TypeScript and modern web technologies. Building high-performance, SEO-optimized web applications with expertise in responsive design and API integration.",
  provider: {
    "@type": "Person",
    name: "Arif Nur Rohman",
  },
  areaServed: "Indonesia",
  serviceType: [
    "Frontend Development",
    "React.js Development",
    "Next.js Development",
    "TypeScript Development",
    "Web Application Development",
    "UI/UX Implementation",
    "Responsive Web Design",
    "API Integration",
    "Performance Optimization",
    "SEO Optimization",
  ],
};
