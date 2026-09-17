import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justin-scott.dev"),
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
    url: "https://justin-scott.dev",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Mark JS as available before paint so reveal animations only hide
            content when they can also un-hide it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Justin Scott",
              jobTitle: "AI-Native Full-Stack Engineer",
              email: "jscottwv@gmail.com",
              url: "https://justin-scott.dev",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tampa",
                addressRegion: "FL",
                addressCountry: "US",
              },
              sameAs: [
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
      <body className="font-sans antialiased">
        <ScrollReveal />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

