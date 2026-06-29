import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pushkar Prabhath Rayana — AI Engineer & Researcher",
  description:
    "Final-year CSE student, AI/ML engineer, and IEEE-published researcher specializing in LLMs, Agentic AI, and zero-shot deepfake voice detection. Terminal-themed developer portfolio.",
  keywords: [
    "Pushkar Prabhath Rayana",
    "Pushkar",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "LLM Engineering",
    "Agentic AI",
    "Deepfake Detection",
    "Zero-Shot Learning",
    "IEEE Research",
    "Terminal Portfolio",
    "Developer Portfolio",
    "RAG",
    "Vector Databases",
  ],
  authors: [{ name: "Pushkar Prabhath Rayana", url: "https://pushkar-dev.vercel.app" }],
  creator: "Pushkar Prabhath Rayana",
  publisher: "Pushkar Prabhath Rayana",
  metadataBase: new URL("https://pushkar-dev.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: "index, follow",
  openGraph: {
    title: "Pushkar Prabhath Rayana — AI Engineer & Researcher",
    description:
      "Terminal-themed developer portfolio. AI/ML engineering, LLM systems, agentic AI, IEEE research.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Pushkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushkar Prabhath Rayana — AI Engineer & Researcher",
    description:
      "Terminal-themed developer portfolio. AI/ML engineering, LLM systems, agentic AI, IEEE research.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased font-mono text-text-primary bg-bg-primary">
        {children}
      </body>
    </html>
  );
}
