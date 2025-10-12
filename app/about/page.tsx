import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Restaurant Supplies Direct",
  description: "Learn about Restaurant Supplies Direct and our partnership with Shure Hospitality Wholesale. Quality restaurant supplies shipped direct from the source.",
  keywords: ["about restaurant supplies direct", "restaurant supply distributor", "shure hospitality wholesale"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.svg" alt="Restaurant Supplies Direct" width={48} height={48} priority />
            <h2 className="text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </h2>
          </Link>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-6">
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

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border-2 border-primary-600 my-12">
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
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
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
              <div className="p-6 bg-bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  📦 Wholesale Pricing
                </h3>
                <p className="text-ink-muted text-sm">
                  Volume discounts and bulk ordering with transparent, competitive pricing
                </p>
              </div>
              <div className="p-6 bg-bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  🎨 Custom Printing
                </h3>
                <p className="text-ink-muted text-sm">
                  In-house design and production for branded cups, napkins, and takeout packaging
                </p>
              </div>
              <div className="p-6 bg-bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  🌱 Eco-Friendly Options
                </h3>
                <p className="text-ink-muted text-sm">
                  Compostable and sustainable supplies that don't compromise on quality
                </p>
              </div>
              <div className="p-6 bg-bg-muted rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  🚚 Fast Shipping
                </h3>
                <p className="text-ink-muted text-sm">
                  Nationwide delivery with same-day options for LA-area operations
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-ink mb-4">Who We Serve</h2>
            <ul className="space-y-3 text-ink-muted mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>Independent restaurants and cafes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>Food trucks and pop-up concepts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>Multi-unit restaurant groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>Catering companies and event venues</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-xl">✓</span>
                <span>Hotels and entertainment venues</span>
              </li>
            </ul>

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
                  className="px-6 py-3 bg-accent-500 text-white font-heading font-semibold rounded-lg hover:bg-accent-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-ink-muted text-center">
            Restaurant Supplies Direct is powered by{" "}
            <a href="https://www.shurehw.com" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">
              Shure Hospitality Wholesale
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
