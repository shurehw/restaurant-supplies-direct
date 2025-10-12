"use client";

import { useState } from "react";
import Image from "next/image";
import LABanner from "@/components/LABanner";
import Link from "next/link";

export default function HomeContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/submit-coming-soon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit email");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Coming Soon Banner */}
      <div className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white py-4 px-4 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base font-semibold">
            🚀 E-Commerce Platform Launching Soon! Browse our catalog now. For immediate orders, <Link href="/contact" className="underline hover:text-white font-bold">contact us for quotes</Link>.
          </p>
        </div>
      </div>

      {/* LA Banner - shows only for LA visitors */}
      <LABanner />

      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.svg"
              alt="Restaurant Supplies Direct"
              width={48}
              height={48}
              priority
            />
            <h2 className="text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </h2>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-ink-muted hover:text-ink transition-colors">Shop</Link>
            <Link href="/custom-printing" className="text-ink-muted hover:text-ink transition-colors">Custom Printing</Link>
            <Link href="/wholesale-programs" className="text-ink-muted hover:text-ink transition-colors">Wholesale</Link>
            <Link href="/contact" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Get Quote
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
              Browse Now • Orders Opening Soon
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink leading-heading">
              Shop Restaurant Supplies Direct from the Source
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-ink-muted max-w-2xl mx-auto">
              Premium restaurant disposables, packaging, and custom print — shipped direct from the source.
              Browse our catalog now. <Link href="/contact" className="text-primary-600 hover:underline font-semibold">Contact us for quotes</Link> while e-commerce checkout is launching.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-primary-600 text-white font-heading font-semibold text-lg rounded-lg hover:bg-primary-700 transition-colors"
              >
                Browse Catalog
              </Link>
              <Link
                href="/custom-printing"
                className="px-8 py-4 bg-white text-ink font-heading font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors border-2 border-border"
              >
                Custom Printing
              </Link>
            </div>

            {/* Email Signup Form */}
            <div className="pt-8 border-t border-border mt-8">
              <p className="text-sm font-medium text-ink mb-4">Get notified when online ordering launches:</p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={status === "submitting" || status === "success"}
                      className="flex-1 px-4 py-3 border border-border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:bg-bg-muted disabled:cursor-not-allowed"
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting" || status === "success"}
                      className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {status === "submitting" ? "Submitting..." : status === "success" ? "Subscribed!" : "Notify Me"}
                    </button>
                  </div>
                </div>
                {status === "success" && (
                  <p className="text-sm text-success">
                    Thanks! We&apos;ll notify you when online ordering launches.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-error">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* SEO Content Section */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-ink mb-6 text-center">
            Why Choose Restaurant Supplies Direct?
          </h2>
          <div className="prose prose-lg max-w-none text-ink-muted">
            <p className="mb-6">
              <strong>Restaurant Supplies Direct</strong> makes premium hospitality packaging and <strong>wholesale restaurant supplies</strong> accessible to every operator. Whether you're running an independent cafe, food truck, or multi-location restaurant group, we deliver the same quality supplies trusted by leading hospitality brands — at prices that make sense for your business.
            </p>
            <p className="mb-6">
              From <Link href="/takeout-containers" className="text-primary-600 hover:underline font-semibold">takeout containers wholesale</Link> to <Link href="/custom-printing" className="text-primary-600 hover:underline font-semibold">custom printed packaging</Link>, we ship directly from the source. No middlemen. No retail markups. Just quality restaurant disposables, fast shipping, and transparent pricing.
            </p>
            <p className="mb-6">
              Need <Link href="/eco-friendly" className="text-primary-600 hover:underline font-semibold">eco-friendly supplies</Link>? We carry the largest selection of compostable takeout containers, sustainable packaging, and recyclable disposables. Looking for branded packaging? Our <Link href="/custom-printing" className="text-primary-600 hover:underline font-semibold">in-house design team</Link> can create custom printed cups, napkins, and boxes that make your brand stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">Wholesale Pricing</h3>
              <p className="text-ink-muted">Volume discounts and bulk ordering with transparent, competitive pricing on all restaurant supplies.</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">Custom Branding</h3>
              <p className="text-ink-muted">In-house design and production for branded cups, napkins, takeout boxes, and shopping bags.</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">Eco-Friendly Options</h3>
              <p className="text-ink-muted">Compostable and sustainable supplies that don't compromise on quality or performance.</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">Fast Nationwide Shipping</h3>
              <p className="text-ink-muted">Quick delivery across the US, with same-day options available in Los Angeles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8 text-center">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Takeout Containers", href: "/takeout-containers", icon: "📦" },
              { name: "Cups & Lids", href: "/cups-and-lids", icon: "☕" },
              { name: "Napkins & Towels", href: "/napkins-and-towels", icon: "🧻" },
              { name: "Gloves & Bags", href: "/gloves-and-bags", icon: "🧤" },
              { name: "Tabletop & To-Go", href: "/tabletop", icon: "🍴" },
              { name: "Eco-Friendly", href: "/eco-friendly", icon: "🌱" },
            ].map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="p-4 bg-white rounded-lg border border-border hover:border-primary-600 hover:shadow-lg transition-all text-center"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-sm font-heading font-semibold text-ink">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What types of restaurant supplies do you offer?",
                a: "We carry a complete range of restaurant disposables including takeout containers, cups and lids, napkins, gloves, trash bags, eco-friendly packaging, and custom printed items. All products are available for bulk wholesale orders."
              },
              {
                q: "Do you offer wholesale pricing?",
                a: "Yes! We offer volume discounts and wholesale pricing on all products. The more you buy, the more you save. Contact us for custom quotes on large orders or multi-location accounts."
              },
              {
                q: "Can I get custom printed packaging?",
                a: "Absolutely. We offer in-house custom printing on cups, napkins, takeout boxes, and bags. Our design team can help create branded packaging that showcases your restaurant's identity."
              },
              {
                q: "What are your minimum order quantities?",
                a: "Minimum orders vary by product, typically starting at one case (100-500 units). Custom printing orders have higher minimums. Contact us for specific product MOQs."
              },
              {
                q: "Do you offer eco-friendly and compostable options?",
                a: "Yes! We carry a wide selection of compostable takeout containers, sustainable packaging, and recyclable disposables that meet BPI and CMA compostability standards."
              },
              {
                q: "How fast is shipping?",
                a: "Most orders ship within 1-3 business days. We offer standard ground shipping nationwide, with expedited options available. Los Angeles area customers can qualify for same-day delivery through Shure Hospitality Wholesale."
              },
              {
                q: "Do you serve restaurant groups and multi-location businesses?",
                a: "Yes! Through our partnership with Shure Hospitality Wholesale, we provide dedicated account management, volume pricing, and custom solutions for restaurant groups. Learn more about our wholesale programs."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-bg-muted p-6 rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  {faq.q}
                </h3>
                <p className="text-ink-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-ink-muted text-center">
            Restaurant Supplies Direct is your trusted source for restaurant disposables, packaging, and custom print — shipped direct from the source.
            <br />
            Powered by{" "}
            <a
              href="https://www.shurehw.com"
              className="text-primary-600 hover:text-primary-700 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shure Hospitality Wholesale
            </a>
            , a national supplier serving leading hospitality brands.
          </p>
        </div>
      </footer>
    </div>
  );
}
