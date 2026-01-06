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
  description: "Full-Stack Software Engineer specializing in AI-augmented development and building AI-powered solutions. 4.5 years of experience designing, architecting, and engineering innovative solutions from scratch. Expertise in developing high-performance APIs and building scalable full-stack applications.",
  keywords: ["Justin Scott", "Software Engineer", "Full-Stack Developer", "AI-Augmented Development", "Cursor", "RAG Systems", "LangGraph", "Java", "Spring Boot", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Justin Scott" }],
  creator: "Justin Scott",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justinscott.dev",
    siteName: "Justin Scott",
    title: "Justin Scott | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer specializing in AI-augmented development and building AI-powered solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Scott | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer specializing in AI-augmented development and building AI-powered solutions.",
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
              description: "Full-Stack Software Engineer specializing in AI-augmented development and building AI-powered solutions. 4.5 years of experience building enterprise applications and microservices.",
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

