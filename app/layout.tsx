import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Justin Scott | Full-Stack Software Engineer",
    template: "%s | Justin Scott",
  },
  description:
    "AI-focused software engineer. LLM-powered product features, full-stack web apps, federal-sector production experience, AWS, Ansible, Angular, Spring Boot, React, TypeScript.",
  keywords: [
    "Justin Scott",
    "Software Engineer",
    "Full-Stack",
    "AI",
    "LLM",
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "TypeScript",
    "AWS",
    "Terraform",
    "Portfolio",
  ],
  authors: [{ name: "Justin Scott" }],
  creator: "Justin Scott",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justinscott.dev",
    siteName: "Justin Scott",
    title: "Justin Scott | Full-Stack Software Engineer",
    description:
      "AI-focused software engineer. Full-stack delivery, LLM integrations, and production systems with rigorous engineering practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Scott | Full-Stack Software Engineer",
    description: "AI-focused software engineer. Full-stack delivery and production systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Justin Scott",
              jobTitle: "Full-Stack Software Engineer",
              email: "jscottwv@gmail.com",
              telephone: "(304) 282-4087",
              url: "https://justinscott.dev",
              sameAs: [
                "https://www.linkedin.com/in/justin-scott12",
                "https://github.com/justinscott12",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "West Virginia University",
              },
              description:
                "AI-focused software engineer. LLM-powered capabilities, full-stack web applications, and disciplined production engineering.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

