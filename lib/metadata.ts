import type { Metadata } from "next";

type StaticMetadataParams = {
  title: string | { default: string; template: string };
  description: string;
  keywords: string[];
  canonical?: string;
};

export const getStaticMetadata = ({
  title,
  description,
  keywords,
  canonical = "",
}: StaticMetadataParams): Metadata => {
  const baseUrl = "https://arifnurrohman.com";
  const titleString = typeof title === "string" ? title : title.default;

  return {
    title: title,
    description: description,
    authors: [{ name: "Arif Nur Rohman", url: baseUrl }],
    creator: "Arif Nur Rohman",
    publisher: "Arif Nur Rohman",
    keywords: keywords,
    alternates: {
      canonical: `${baseUrl}${canonical}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", sizes: "48x48", type: "image/png" },
      ],
      shortcut: "/icon.png",
      apple: "/apple-touch-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Arif Nur Rohman Portfolio",
      title: titleString,
      description: description,
      url: `${baseUrl}${canonical}`,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: titleString,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleString,
      description: description,
      creator: "@arifnurr",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          alt: titleString,
        },
      ],
    },
  };
};

// Default metadata untuk homepage
export const defaultMetadata = getStaticMetadata({
  title: {
    default: "Arif Nur Rohman - Frontend Engineer & Web Developer",
    template: "%s | Arif Nur Rohman - Frontend Engineer",
  },
  description:
    "Frontend Engineer with 3+ years experience specializing in React.js, Next.js, and modern web development. Based in Indonesia, delivering high-performance web applications with excellent user experience.",
  keywords: [
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Indonesia",
    "Arif Nur Rohman",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "User Interface Design",
    "Responsive Design",
    "Portfolio",
  ],
  canonical: "",
});
