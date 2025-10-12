import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coming Soon | Restaurant Supplies Direct",
  description: "Premium restaurant disposables, packaging, and custom print — shipped direct from the source. Powered by Shure Hospitality Wholesale.",
  keywords: ["restaurant supplies direct", "wholesale restaurant packaging", "restaurant disposables online", "takeout containers", "custom printed packaging"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon | Restaurant Supplies Direct",
    description: "Premium restaurant disposables, packaging, and custom print — shipped direct from the source.",
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
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
