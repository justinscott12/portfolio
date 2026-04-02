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
    default: "Justin Scott | Full-Stack Engineer — LLM Product Features & AI-Assisted Development",
    template: "%s | Justin Scott",
  },
  description:
    "Full-Stack Engineer — LLM Product Features & AI-Assisted Development. Angular, Spring Boot, PostgreSQL, TypeScript, Next.js, OpenAI, RAG, AWS, Terraform.",
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
    title: "Justin Scott | Full-Stack Engineer — LLM Product Features & AI-Assisted Development",
    description:
      "Full-stack engineer shipping production features and LLM-powered products. Angular, Spring Boot, TypeScript, Next.js, RAG.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Scott | Full-Stack Engineer — LLM Product Features & AI-Assisted Development",
    description: "Full-stack engineer. LLM product features, Angular, Spring Boot, TypeScript, Next.js.",
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
              jobTitle: "Full-Stack Engineer — LLM Product Features & AI-Assisted Development",
              email: "jscottwv@gmail.com",
              telephone: "(304) 282-4087",
              url: "https://justinscott.dev",
              sameAs: [
                "https://justin-scott.dev",
                "https://www.linkedin.com/in/justin-scott12",
                "https://github.com/justinscott12",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "West Virginia University",
              },
              description:
                "Full-stack engineer shipping production features and LLM-powered product flows. Angular, Spring Boot, PostgreSQL, TypeScript, Next.js, OpenAI, RAG.",
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

