import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";

const dmSans = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coming Soon | Restaurant Supplies Direct",
  description: "Premium restaurant disposables, packaging, and custom print — shipped direct from the source. Powered by Shure Hospitality Wholesale.",
  keywords: ["restaurant supplies direct", "wholesale restaurant packaging", "restaurant disposables online", "takeout containers", "custom printed packaging"],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Coming Soon | Restaurant Supplies Direct",
    description: "Premium restaurant disposables, packaging, and custom print — shipped direct from the source.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon | Restaurant Supplies Direct",
    description: "Premium restaurant disposables, packaging, and custom print — shipped direct from the source.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Analytics />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
