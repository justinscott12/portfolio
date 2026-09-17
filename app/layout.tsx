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
    default: "Justin Scott — Full-Stack Engineer",
    template: "%s | Justin Scott",
  },
  description:
    "Full-stack engineer shipping production software end-to-end — four live B2C products, an MCP server, and real RAG/agentic systems. TypeScript, Java/Spring Boot, Python. Built for reliability, not just demos.",
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
    title: "Justin Scott — Full-Stack Engineer",
    description:
      "I design and ship production software end-to-end. Four live B2C products, an MCP server, and real RAG/agentic systems — built for reliability, not just demos.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Justin Scott — Full-Stack Engineer. Four live products, an MCP server, and real RAG/agentic systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Scott — Full-Stack Engineer",
    description:
      "I design and ship production software end-to-end — four live products, an MCP server, and real RAG/agentic systems.",
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
              jobTitle: "Full-Stack Software Engineer",
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
                "Full-stack engineer shipping live B2C products, RAG/agentic systems, and an MCP server. TypeScript/Next.js, Java/Spring Boot, Python.",
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

