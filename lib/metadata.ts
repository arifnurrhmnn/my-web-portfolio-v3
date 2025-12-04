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
