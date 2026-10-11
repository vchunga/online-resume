import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import { resume } from "../data/resume";
import { absoluteUrl, siteUrl } from "../lib/seo";

const description =
  "Vincent Chung is a software developer in Richmond, BC with 8+ years of experience building React, Next.js, TypeScript, C#, ASP.NET, SQL Server, and PostgreSQL applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${resume.name} | ${resume.title}`,
    template: `%s | ${resume.name}`,
  },
  description,
  keywords: [
    "Vincent Chung",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "C# Developer",
    "ASP.NET Developer",
    "Richmond BC Software Developer",
  ],
  authors: [{ name: resume.name, url: siteUrl }],
  creator: resume.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${resume.name} | ${resume.title}`,
    description,
    url: siteUrl,
    siteName: `${resume.name} Resume`,
    locale: "en_CA",
    type: "profile",
    images: [
      {
        url: absoluteUrl("/computer-monitor.png"),
        width: 1200,
        height: 630,
        alt: `${resume.name} software developer portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${resume.name} | ${resume.title}`,
    description,
    images: [absoluteUrl("/computer-monitor.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
