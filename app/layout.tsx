import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SkipLink from "./components/SkipLink";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "VoltScale | B2B Lead Generation That Scales",
  description:
    "VoltScale helps B2B companies generate qualified leads and scale revenue predictably. Book a strategy call to learn how we can accelerate your growth.",
  keywords: [
    "B2B lead generation",
    "sales pipeline",
    "demand generation",
    "lead generation agency",
    "B2B marketing",
    "outbound sales",
    "appointment setting",
  ],
  authors: [{ name: "VoltScale" }],
  creator: "VoltScale",
  publisher: "VoltScale",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://voltscale.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VoltScale | B2B Lead Generation That Scales",
    description:
      "VoltScale helps B2B companies generate qualified leads and scale revenue predictably.",
    url: "https://voltscale.com",
    siteName: "VoltScale",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoltScale - B2B Lead Generation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltScale | B2B Lead Generation That Scales",
    description:
      "VoltScale helps B2B companies generate qualified leads and scale revenue predictably.",
    images: ["/og-image.png"],
    creator: "@voltscale",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SkipLink />
        <SmoothScroll />
        {children}
        <ScrollToTop />
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="mUkcxmZBoBE6Pedc"
          data-version="062024"
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}