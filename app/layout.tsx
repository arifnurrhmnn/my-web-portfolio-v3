import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arif Nur Rohman - Frontend Engineer & Web Developer",
  description:
    "Experienced Frontend Engineer specializing in React, Next.js, and modern web technologies. Creating responsive, high-performance websites with excellent user experience.",
  keywords: [
    "Frontend Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Arif Nur Rohman" }],
  creator: "Arif Nur Rohman",
  publisher: "Arif Nur Rohman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arifnurrohman.dev",
    title: "Arif Nur Rohman - Frontend Engineer",
    description: "Experienced Frontend Engineer creating modern web solutions",
    siteName: "Arif Nur Rohman Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arif Nur Rohman - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Nur Rohman - Frontend Engineer",
    description: "Experienced Frontend Engineer creating modern web solutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
