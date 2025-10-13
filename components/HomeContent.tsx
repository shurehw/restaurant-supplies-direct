"use client";

import { useState } from "react";
import Image from "next/image";
import LABanner from "@/components/LABanner";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Menu, X, ChevronDown, Package, Palette, Leaf, Truck, Box, Coffee, FileText, ShoppingBag, Utensils, Sparkles, LogIn, UserPlus } from "lucide-react";

export default function HomeContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

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
            E-Commerce Platform Launching Soon! Browse our catalog now. For immediate orders, <Link href="/contact" className="underline hover:text-white font-bold">contact us for quotes</Link>.
          </p>
        </div>
      </div>

      {/* LA Banner - shows only for LA visitors */}
      <LABanner />

      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.svg"
              alt="Restaurant Supplies Direct"
              width={48}
              height={48}
              priority
            />
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {/* Categories with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors text-sm">
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-border p-6 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="/takeout-containers"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-ink group-hover:text-primary-600 mb-1">
                          Takeout Containers
                        </h3>
                        <p className="text-xs text-ink-muted">
                          To-go boxes, deli containers, clamshells
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/cups-and-lids"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-ink group-hover:text-primary-600 mb-1">
                          Cups & Lids
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Paper cups, plastic cups, coffee cups
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/napkins-and-towels"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-ink group-hover:text-primary-600 mb-1">
                          Napkins & Towels
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Beverage napkins, dinner napkins, paper towels
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/gloves-and-bags"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-ink group-hover:text-primary-600 mb-1">
                          Gloves & Bags
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Disposable gloves, trash bags
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/eco-friendly"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-ink group-hover:text-primary-600 mb-1">
                          Eco-Friendly
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Compostable, biodegradable, sustainable
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/tabletop"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-ink group-hover:text-primary-600 mb-1">
                          Tabletop
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Cutlery, straws, portion cups
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link
                      href="/shop"
                      className="text-sm text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      View All Categories →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/custom-printing" className="text-ink-muted hover:text-ink transition-colors text-sm">Custom Print</Link>
            <Link href="/wholesale-programs" className="text-ink-muted hover:text-ink transition-colors text-sm">Wholesale</Link>
            <Link href="/login" className="flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors text-sm">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink-muted hover:text-ink transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/shop"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/takeout-containers"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Takeout Containers
              </Link>
              <Link
                href="/cups-and-lids"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cups & Lids
              </Link>
              <Link
                href="/napkins-and-towels"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Napkins & Towels
              </Link>
              <Link
                href="/gloves-and-bags"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gloves & Bags
              </Link>
              <Link
                href="/eco-friendly"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Eco-Friendly
              </Link>
              <Link
                href="/tabletop"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tabletop
              </Link>
              <Link
                href="/custom-printing"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Custom Printing
              </Link>
              <Link
                href="/wholesale-programs"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wholesale Programs
              </Link>
              <div className="border-t border-border pt-3 mt-3">
                <Link
                  href="/login"
                  className="mx-4 px-4 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-center font-medium flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </div>
              <Link
                href="/contact"
                className="mx-4 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </nav>
        )}
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
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                <Package className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">Wholesale Pricing</h3>
              <p className="text-ink-muted">Volume discounts and bulk ordering with transparent, competitive pricing on all restaurant supplies.</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-3">
                <Palette className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">Custom Branding</h3>
              <p className="text-ink-muted">In-house design and production for branded cups, napkins, takeout boxes, and shopping bags.</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">Eco-Friendly Options</h3>
              <p className="text-ink-muted">Compostable and sustainable supplies that don't compromise on quality or performance.</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
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
              { name: "Takeout Containers", href: "/takeout-containers", Icon: Box, color: "bg-orange-100 text-orange-600" },
              { name: "Cups & Lids", href: "/cups-and-lids", Icon: Coffee, color: "bg-brown-100 text-brown-600" },
              { name: "Napkins & Towels", href: "/napkins-and-towels", Icon: FileText, color: "bg-blue-100 text-blue-600" },
              { name: "Gloves & Bags", href: "/gloves-and-bags", Icon: ShoppingBag, color: "bg-purple-100 text-purple-600" },
              { name: "Tabletop & To-Go", href: "/tabletop", Icon: Utensils, color: "bg-gray-100 text-gray-600" },
              { name: "Eco-Friendly", href: "/eco-friendly", Icon: Sparkles, color: "bg-green-100 text-green-600" },
            ].map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="p-4 bg-white rounded-lg border border-border hover:border-primary-600 hover:shadow-lg transition-all text-center group"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <category.Icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-heading font-semibold text-ink group-hover:text-primary-600">{category.name}</div>
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

      <Footer />
    </div>
  );
}
