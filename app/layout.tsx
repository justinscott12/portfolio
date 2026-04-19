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
    default: "Justin Scott | AI-Native Full-Stack Engineer",
    template: "%s | Justin Scott",
  },
  description:
    "AI-Native Full-Stack Engineer. 15+ end-to-end projects across web, mobile, and CLI — live B2C sites, RAG systems, agentic tools, and an MCP server. TypeScript/Next.js, Java/Spring Boot, Python/FastAPI, Expo/React Native.",
  keywords: [
    "Justin Scott",
    "AI-Native Engineer",
    "Full-Stack Engineer",
    "Cursor",
    "Claude",
    "RAG",
    "LangGraph",
    "MCP",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "FastAPI",
    "React Native",
    "Expo",
    "Tampa",
    "Portfolio",
  ],
  authors: [{ name: "Justin Scott" }],
  creator: "Justin Scott",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justinscott.dev",
    siteName: "Justin Scott",
    title: "Justin Scott | AI-Native Full-Stack Engineer",
    description:
      "AI-native full-stack engineer shipping production B2C sites, RAG systems, agentic tools, and an MCP server. TypeScript/Next.js, Java/Spring Boot, Python/FastAPI, Expo/React Native.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Scott | AI-Native Full-Stack Engineer",
    description: "AI-native full-stack engineer. 15+ shipped projects across web, mobile, and CLI. Cursor + Claude as throughput multipliers.",
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
              jobTitle: "AI-Native Full-Stack Engineer",
              email: "jscottwv@gmail.com",
              telephone: "(304) 282-4087",
              url: "https://justinscott.dev",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tampa",
                addressRegion: "FL",
                addressCountry: "US",
              },
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
                "AI-native full-stack engineer shipping production B2C sites, RAG systems, agentic tools, and an MCP server. TypeScript/Next.js, Java/Spring Boot, Python/FastAPI, Expo/React Native.",
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

