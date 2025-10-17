import { Metadata } from "next";
import Link from "next/link";
import { Package, Palette, Leaf, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Restaurant Supplies Direct",
  description: "Learn about Restaurant Supplies Direct and our partnership with Shure Hospitality Wholesale. Quality restaurant supplies shipped direct from the source.",
  keywords: ["about restaurant supplies direct", "restaurant supply distributor", "shure hospitality wholesale"],
  openGraph: {
    title: "About Us | Restaurant Supplies Direct",
    description: "Learn about Restaurant Supplies Direct and our partnership with Shure Hospitality Wholesale. Quality supplies shipped direct.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Restaurant Supplies Direct",
    description: "Quality restaurant supplies shipped direct from the source.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/about",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long has Restaurant Supplies Direct been in business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restaurant Supplies Direct is a division of Shure Hospitality Wholesale, which has been serving the hospitality industry for decades. RSD was launched to bring institutional-quality supplies to independent operators through modern e-commerce."
      }
    },
    {
      "@type": "Question",
      "name": "Where are your products manufactured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We source from leading manufacturers worldwide, with a focus on North American suppliers for faster shipping and better quality control. All products meet US food safety standards and are rigorously tested before we add them to our catalog."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have a physical location I can visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Los Angeles warehouse welcomes customer visits by appointment. You can view products in person, pick up orders, or meet with our team. Los Angeles area customers also have access to same-day delivery through Shure HW."
      }
    },
    {
      "@type": "Question",
      "name": "What makes you different from other restaurant supply companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We combine the buying power and logistics of a major distributor (Shure HW) with the convenience and transparency of modern e-commerce. You get institutional pricing without institutional hassles - no account minimums, no confusing pricing tiers, and no middlemen markups."
      }
    }
  ]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-orange text-white text-sm font-medium mb-6">
            Powered by Shure Hospitality Wholesale
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink mb-6 leading-tight">
            About Restaurant Supplies Direct
          </h1>
          <p className="text-xl text-ink-muted mb-12">
            Making premium hospitality packaging and restaurant supplies accessible to independent operators nationwide.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold text-ink mb-4">Our Story</h2>
            <p className="text-ink-muted mb-6">
              Restaurant Supplies Direct was created to solve a simple problem: independent restaurants and small hospitality businesses deserve the same access to quality supplies and wholesale pricing as large restaurant groups.
            </p>
            <p className="text-ink-muted mb-6">
              While the big players had dedicated distributors and account reps, smaller operators were left paying retail prices at local supply shops or navigating confusing online marketplaces.
            </p>
            <p className="text-ink-muted mb-8">
              We're changing that by bringing institutional-quality supplies, transparent pricing, and white-glove service directly to every operator — whether you're running one location or one hundred.
            </p>

            <div className="bg-white p-8 rounded-xl border-2 border-black my-12 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-ink mb-4">
                Backed by Shure Hospitality Wholesale
              </h3>
              <p className="text-ink-muted mb-4">
                Restaurant Supplies Direct is powered by <strong>Shure Hospitality Wholesale</strong>, a Los Angeles-based distributor with decades of experience serving premier hospitality brands.
              </p>
              <p className="text-ink-muted mb-6">
                Through this partnership, we combine national buying power with fast, reliable direct shipping — giving you access to the same suppliers and pricing that serve leading restaurant groups, hotels, and entertainment venues.
              </p>
              <Link
                href="https://www.shurehw.com"
                className="inline-flex items-center gap-2 text-black hover:text-zinc-900 font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Shure HW →
              </Link>
            </div>

            <h2 className="text-3xl font-heading font-bold text-ink mb-4">Our Mission</h2>
            <p className="text-ink-muted mb-8">
              To deliver quality restaurant supplies — from eco-friendly takeout containers to custom-branded packaging — direct from the source, with pricing and service that helps hospitality businesses thrive.
            </p>

            <h2 className="text-3xl font-heading font-bold text-ink mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white rounded-lg border-2 border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                      Wholesale Pricing
                    </h3>
                    <p className="text-ink-muted text-sm">
                      Volume discounts and bulk ordering with transparent, competitive pricing
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg border-2 border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                      Custom Printing
                    </h3>
                    <p className="text-ink-muted text-sm">
                      In-house design and production for branded cups, napkins, and takeout packaging
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg border-2 border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                      Eco-Friendly Options
                    </h3>
                    <p className="text-ink-muted text-sm">
                      Compostable and sustainable supplies that don't compromise on quality
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg border-2 border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                      Fast Shipping
                    </h3>
                    <p className="text-ink-muted text-sm">
                      Nationwide delivery with same-day options for LA-area operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-ink mb-4">Who We Serve</h2>
            <ul className="space-y-3 text-ink-muted mb-8">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-xl">-</span>
                <span>Independent restaurants and cafes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-xl">-</span>
                <span>Food trucks and pop-up concepts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-xl">-</span>
                <span>Multi-unit restaurant groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-xl">-</span>
                <span>Catering companies and event venues</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-xl">-</span>
                <span>Hotels and entertainment venues</span>
              </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-ink mb-6 mt-12">
              Our Commitment to Quality and Service
            </h2>
            <p className="text-ink-muted mb-6">
              Every product we sell meets rigorous quality standards. We partner with leading manufacturers who share our commitment to durability, food safety, and performance. Whether it's a compostable takeout container or a custom-printed cup, you can trust that it will perform reliably in a fast-paced restaurant environment.
            </p>
            <p className="text-ink-muted mb-6">
              Our customer service team includes industry veterans who understand the unique challenges of food service operations. Need help choosing the right container for a specific dish? Trying to balance sustainability goals with budget constraints? We provide expert guidance based on real-world restaurant experience.
            </p>
            <p className="text-ink-muted mb-8">
              Through our partnership with <a href="https://www.shurehw.com" className="text-black hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Shure Hospitality Wholesale</a>, we access the same supply chains, pricing, and logistics that serve major hospitality brands - but we've built a platform that makes those benefits accessible to independent operators and small restaurant groups.
            </p>

            <h2 className="text-3xl font-heading font-bold text-ink mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  How long has Restaurant Supplies Direct been in business?
                </h3>
                <p className="text-ink-muted">
                  Restaurant Supplies Direct is a division of Shure Hospitality Wholesale, which has been serving the hospitality industry for decades. RSD was launched to bring institutional-quality supplies to independent operators through modern e-commerce.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  Where are your products manufactured?
                </h3>
                <p className="text-ink-muted">
                  We source from leading manufacturers worldwide, with a focus on North American suppliers for faster shipping and better quality control. All products meet US food safety standards and are rigorously tested before we add them to our catalog.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  Do you have a physical location I can visit?
                </h3>
                <p className="text-ink-muted">
                  Yes! Our Los Angeles warehouse welcomes customer visits by appointment. You can view products in person, pick up orders, or meet with our team. Los Angeles area customers also have access to same-day delivery through Shure HW.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  What makes you different from other restaurant supply companies?
                </h3>
                <p className="text-ink-muted">
                  We combine the buying power and logistics of a major distributor (Shure HW) with the convenience and transparency of modern e-commerce. You get institutional pricing without institutional hassles - no account minimums, no confusing pricing tiers, and no middlemen markups.
                </p>
              </div>
            </div>

            <div className="bg-ink text-white p-8 rounded-xl my-12 text-center">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-6">
                Browse our catalog, request custom printing quotes, or apply for wholesale pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop"
                  className="px-6 py-3 bg-white text-ink font-heading font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Shop Catalog
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-brand-orange text-white font-heading font-semibold rounded-lg hover:bg-brand-orange-dark transition-colors shadow-md hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
