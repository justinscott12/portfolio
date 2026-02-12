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
  description: "Full-stack software engineer with 4.5+ years of experience. Architecture, production systems, and end-to-end product development. Disciplined AI-assisted engineering.",
  keywords: ["Justin Scott", "Software Engineer", "Full-Stack", "Architecture", "Production Systems", "Product Development", "Java", "Spring Boot", "React", "TypeScript", "RAG", "LangGraph", "Portfolio"],
  authors: [{ name: "Justin Scott" }],
  creator: "Justin Scott",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justinscott.dev",
    siteName: "Justin Scott",
    title: "Justin Scott | Full-Stack Software Engineer",
    description: "Full-stack software engineer. Architecture, production systems, and end-to-end product development with rigorous engineering practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Scott | Full-Stack Software Engineer",
    description: "Full-stack software engineer. Architecture, production systems, and end-to-end product development.",
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
              description: "Full-stack software engineer. Architecture, production systems, and end-to-end product development with disciplined engineering practices.",
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

