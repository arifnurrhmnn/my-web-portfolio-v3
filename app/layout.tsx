import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  personSchema,
  websiteSchema,
  organizationSchema,
} from "@/lib/structured-data";
import { defaultMetadata } from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [personSchema, websiteSchema, organizationSchema];

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Critical Resource Hints for Performance */}
        {/* Preconnect to critical origins - establishes early connections */}
        <link
          rel="preconnect"
          href="https://cdn.simpleicons.org"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for Google services - faster DNS resolution */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        <GoogleAnalytics gaId="G-02K38F8L2Z" />
        <Analytics />
      </body>
    </html>
  );
}
