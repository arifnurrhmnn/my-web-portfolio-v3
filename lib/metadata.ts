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
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", sizes: "48x48", type: "image/png" },
      ],
      shortcut: "/icon.png",
      apple: "/icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/icon.png",
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Arif Nur Rohman",
      title: titleString,
      description: description,
      url: `${baseUrl}${canonical}`,
      images: [
        {
          url: `${baseUrl}/img/img-profile.webp`,
          width: 600,
          height: 600,
          alt: titleString,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleString,
      description: description,
      creator: "",
      images: [
        {
          url: `${baseUrl}/img/img-profile.webp`,
          alt: titleString,
        },
      ],
    },
  };
};

// Default metadata untuk homepage
export const defaultMetadata = getStaticMetadata({
  title: {
    default: "Arif Nur Rohman - Frontend Engineer",
    template: "%s | Arif Nur Rohman - Frontend Engineer",
  },
  description:
    "Experienced Frontend Engineer specializing in React.js, Next.js, TypeScript & modern web development. 3+ years building high-performance, SEO-optimized web applications. Expertise in responsive design, API integration & UI/UX implementation.",
  keywords: [
    "Arif Nur Rohman",
    "Frontend Engineer",
    "React.js & Next.js Developer",
  ],
  canonical: "",
});
