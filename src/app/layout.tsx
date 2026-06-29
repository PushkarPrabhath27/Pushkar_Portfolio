import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pushkar Prabhath — AI Engineer Workstation",
  description: "AI/ML Engineer. Researcher. Builder. A terminal-themed portfolio.",
  keywords: [
    "Pushkar Prabhath",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "LLM Engineering",
    "Agentic AI",
    "NLP",
    "Terminal Portfolio",
    "Deepfake Detection",
    "Zero-Shot Learning",
    "GitHub Portfolio",
    "AI Research",
    "IEEE",
  ],
  authors: [{ name: "Pushkar Prabhath Rayana" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: "index, follow",
  openGraph: {
    title: "Pushkar Prabhath — AI Engineer Workstation",
    description: "AI/ML Engineer. Researcher. Builder. A terminal-themed portfolio.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushkar Prabhath — AI Engineer Workstation",
    description: "AI/ML Engineer. Researcher. Builder. A terminal-themed portfolio.",
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
