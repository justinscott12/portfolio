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
    default: "Justin Scott — AI-Native Full-Stack Engineer",
    template: "%s | Justin Scott",
  },
  description:
    "AI-native full-stack engineer: I ship real products by directing AI coding agents like Claude Code, with the system design, UX judgment, and verification to make them production-grade. 7,500+ mod downloads, 1,300+ users, an open-source MCP server.",
  keywords: [
    "Justin Scott",
    "AI-Native Engineer",
    "Claude Code",
    "Agentic Engineering",
    "Context Engineering",
    "System Design",
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
    title: "Justin Scott — AI-Native Full-Stack Engineer",
    description:
      "I ship real software by directing AI coding agents — with the system design, UX judgment, and verification that make it production-grade.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Justin Scott — AI-Native Full-Stack Engineer. 7,500+ mod downloads, 1,300+ users, an open-source MCP server.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Scott — AI-Native Full-Stack Engineer",
    description:
      "I ship real software by directing AI coding agents — with the system design, UX judgment, and verification that make it production-grade.",
    images: ["/og.png"],
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
                "https://www.npmjs.com/~justinscott12",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "West Virginia University",
              },
              description:
                "AI-native full-stack engineer who ships real products by directing AI coding agents like Claude Code, backed by system design, UX, and verification. TypeScript/Next.js, Java/Spring Boot, Python.",
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

