import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Patrick_Hand } from "next/font/google";
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

const patrickHand = Patrick_Hand({
  variable: "--font-handwritten",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Restaurant Supplies Direct | Wholesale Disposables & Custom Packaging",
    template: "%s | Restaurant Supplies Direct"
  },
  description: "Wholesale restaurant disposables, takeout containers, and custom printed packaging shipped direct from Los Angeles. Bulk pricing, fast nationwide delivery, and custom branding for restaurants and food service businesses.",
  keywords: ["restaurant supplies direct", "wholesale restaurant packaging", "restaurant disposables online", "takeout containers", "custom printed packaging", "bulk restaurant supplies", "food service disposables"],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#FF6B35',
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
    title: "Restaurant Supplies Direct | Wholesale Disposables & Custom Packaging",
    description: "Wholesale restaurant disposables and custom printed packaging shipped direct from Los Angeles. Bulk pricing and fast nationwide delivery.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
    locale: "en_US",
    url: "https://restaurantsuppliesdirect.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Supplies Direct | Wholesale Disposables & Custom Packaging",
    description: "Wholesale restaurant disposables and custom printed packaging shipped direct from Los Angeles.",
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
  metadataBase: new URL('https://restaurantsuppliesdirect.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${patrickHand.variable} font-sans antialiased`}
      >
        <Analytics />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
