import { Metadata } from "next";
import LAHospitalityContent from "./LAHospitalityContent";

export const metadata: Metadata = {
  title: "Restaurant Supplies Los Angeles | Powered by Shure Hospitality Wholesale",
  description: "Fast local delivery of restaurant packaging and disposables across Los Angeles. Wholesale and custom printing by Shure Hospitality Wholesale.",
  keywords: [
    "restaurant supplies los angeles",
    "restaurant packaging los angeles",
    "wholesale disposables LA",
    "takeout containers los angeles",
    "custom printed packaging LA",
    "restaurant supply distributor los angeles",
    "hospitality supplies LA",
    "same day delivery restaurant supplies",
  ],
  openGraph: {
    title: "Restaurant Supplies Los Angeles | Powered by Shure Hospitality Wholesale",
    description: "Fast local delivery of restaurant packaging and disposables across Los Angeles. Wholesale and custom printing.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Supplies Los Angeles | Powered by Shure Hospitality Wholesale",
    description: "Fast local delivery of restaurant packaging and disposables across Los Angeles.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/la-hospitality-supplies",
  },
};

export default function LAHospitalitySupplies() {
  return <LAHospitalityContent />;
}
