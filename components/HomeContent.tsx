"use client";

import { useState } from "react";
import Image from "next/image";
import LABanner from "@/components/LABanner";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";
import BackToTop from "@/components/BackToTop";
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
      <main className="flex-1">
        {/* Hero Section with Background */}
        <div className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 sm:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-medium shadow-lg shadow-accent-500/20">
                Browse Now • Orders Opening Soon
              </div>

              {/* Hero Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-ink leading-tight">
                Shop Restaurant Supplies{" "}
                <span className="gradient-text">
                  Direct from the Source
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
                Premium restaurant disposables, packaging, and custom print — shipped direct from the source.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link
                  href="/shop"
                  className="group px-8 py-4 bg-blue-600 text-white font-heading font-semibold text-lg rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Browse Catalog
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/custom-printing"
                  className="px-8 py-4 bg-white text-ink font-heading font-semibold text-lg rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Custom Printing
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-ink">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary-600" />
                  <span>Fast Nationwide Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary-600" />
                  <span>Wholesale Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary-600" />
                  <span>Eco-Friendly Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-8 sm:p-12">
              <p className="text-2xl font-heading font-bold text-ink mb-3 text-center">Get Early Access</p>
              <p className="text-ink-muted mb-8 text-center">Be the first to know when our e-commerce platform launches</p>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="your@email.com"
                      disabled={status === "submitting" || status === "success"}
                      className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:bg-bg-muted disabled:cursor-not-allowed hover:border-gray-300 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting" || status === "success"}
                      className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {status === "submitting" ? "Submitting..." : status === "success" ? "✓ Subscribed!" : "Notify Me"}
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4">
              Why Choose Restaurant Supplies Direct?
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Premium supplies, transparent pricing, and dedicated service for every size operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group p-8 bg-white rounded-2xl border-2 border-border hover:border-primary-600 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Wholesale Pricing</h3>
              <p className="text-ink-muted text-lg leading-relaxed">Volume discounts and bulk ordering with transparent, competitive pricing on all restaurant supplies.</p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border-2 border-border hover:border-accent-600 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Custom Branding</h3>
              <p className="text-ink-muted text-lg leading-relaxed">In-house design and production for branded cups, napkins, takeout boxes, and shopping bags.</p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border-2 border-border hover:border-green-600 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Eco-Friendly Options</h3>
              <p className="text-ink-muted text-lg leading-relaxed">Compostable and sustainable supplies that don't compromise on quality or performance.</p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border-2 border-border hover:border-blue-600 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Fast Nationwide Shipping</h3>
              <p className="text-ink-muted text-lg leading-relaxed">Quick delivery across the US, with same-day options available in Los Angeles.</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg max-w-none text-ink-muted bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="mb-6 text-lg">
              <strong className="text-ink">Restaurant Supplies Direct</strong> makes premium hospitality packaging and <strong className="text-ink">wholesale restaurant supplies</strong> accessible to every operator. Whether you're running an independent cafe, food truck, or multi-location restaurant group, we deliver the same quality supplies trusted by leading hospitality brands — at prices that make sense for your business.
            </p>
            <p className="mb-6 text-lg">
              From <Link href="/takeout-containers" className="text-primary-600 hover:text-primary-700 underline font-semibold">takeout containers wholesale</Link> to <Link href="/custom-printing" className="text-primary-600 hover:text-primary-700 underline font-semibold">custom printed packaging</Link>, we ship directly from the source. No middlemen. No retail markups. Just quality restaurant disposables, fast shipping, and transparent pricing.
            </p>
            <p className="text-lg">
              Need <Link href="/eco-friendly" className="text-primary-600 hover:text-primary-700 underline font-semibold">eco-friendly supplies</Link>? We carry the largest selection of compostable takeout containers, sustainable packaging, and recyclable disposables. Looking for branded packaging? Our <Link href="/custom-printing" className="text-primary-600 hover:text-primary-700 underline font-semibold">in-house design team</Link> can create custom printed cups, napkins, and boxes that make your brand stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-ink-muted">
              Browse our complete range of wholesale restaurant supplies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Takeout Containers", href: "/takeout-containers", Icon: Box, color: "bg-orange-100 text-orange-600" },
              { name: "Cups & Lids", href: "/cups-and-lids", Icon: Coffee, color: "bg-amber-100 text-amber-700" },
              { name: "Napkins & Towels", href: "/napkins-and-towels", Icon: FileText, color: "bg-blue-100 text-blue-600" },
              { name: "Gloves & Bags", href: "/gloves-and-bags", Icon: ShoppingBag, color: "bg-purple-100 text-purple-600" },
              { name: "Tabletop & To-Go", href: "/tabletop", Icon: Utensils, color: "bg-gray-100 text-gray-700" },
              { name: "Eco-Friendly", href: "/eco-friendly", Icon: Sparkles, color: "bg-green-100 text-green-600" },
            ].map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group p-6 bg-white rounded-2xl border-2 border-border hover:border-primary-600 hover:shadow-2xl transition-all text-center transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <category.Icon className="w-8 h-8" />
                </div>
                <div className="text-sm font-heading font-bold text-ink group-hover:text-primary-600 transition-colors">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Testimonials */}
      <Testimonials />

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
      <StickyQuoteCTA />
      <BackToTop />
    </div>
  );
}
