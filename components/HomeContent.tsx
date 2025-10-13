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
      <div className="bg-black text-white py-2.5 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-medium">
            Online ordering drops soon — <Link href="/contact" className="underline hover:text-zinc-300 font-semibold">hit us up</Link> for orders now
          </p>
        </div>
      </div>

      {/* LA Banner - shows only for LA visitors */}
      <LABanner />

      {/* Header */}
      <header className="w-full py-3 px-4 sm:px-6 lg:px-8 border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icon.svg"
              alt="Restaurant Supplies Direct"
              width={40}
              height={40}
              priority
            />
            <h2 className="text-lg sm:text-xl font-heading font-bold text-ink">
              Restaurant Supplies Direct
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {/* Categories with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors text-sm py-2">
                Shop
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-[600px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-border p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="/takeout-containers"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-muted transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
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
                        <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
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
                        <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
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
                        <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
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
                        <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
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
                        <h3 className="font-heading font-semibold text-ink group-hover:text-blue-600 mb-1">
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
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      View All Categories →
                    </Link>
                  </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/custom-printing" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Custom Print</Link>
            <Link href="/wholesale-programs" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Wholesale</Link>
            <Link href="/blog" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">Blog</Link>
            <Link href="/login" className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors text-sm font-medium">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link href="/contact" className="px-4 py-1.5 bg-black text-white rounded-lg hover:bg-zinc-900 transition-colors text-sm font-semibold">
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
              <Link
                href="/blog"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="border-t border-border pt-3 mt-3">
                <Link
                  href="/login"
                  className="mx-4 px-4 py-3 border-2 border-black text-black rounded-lg hover:bg-gray-50 transition-colors text-center font-medium flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </div>
              <Link
                href="/contact"
                className="mx-4 px-4 py-3 bg-black text-white rounded-lg hover:bg-zinc-900 transition-colors text-center font-medium"
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
        {/* Benefits Bar */}
        <div className="bg-black text-white py-3 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span className="font-medium">Free Shipping Over $500</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span className="font-medium">Wholesale Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                <span className="font-medium">Custom Printing Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Same-Day LA Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section with Background */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 sm:py-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-black text-white text-xs font-semibold border border-zinc-800">
                Browse Now • Orders Opening Soon
              </div>

              {/* Hero Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ink leading-[1.1]">
                Restaurant Supplies.{" "}
                <span className="gradient-text">
                  Direct.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-ink-muted max-w-2xl mx-auto leading-snug">
                Premium disposables, packaging, and custom print. No middleman, no markup.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link
                  href="/shop"
                  className="group px-6 py-3 bg-black text-white font-semibold text-base rounded-lg hover:bg-zinc-900 transition-all"
                >
                  Browse Catalog
                  <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/custom-printing"
                  className="px-6 py-3 bg-white text-ink font-semibold text-base rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200"
                >
                  Custom Print
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-ink-muted font-medium">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-ink" />
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-ink" />
                  <span>Wholesale Pricing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-ink" />
                  <span>Eco Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup Section */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg border border-border p-6 sm:p-8">
              <p className="text-xl font-heading font-bold text-ink mb-2 text-center">Get Early Access</p>
              <p className="text-sm text-ink-muted mb-6 text-center">Get notified when we drop</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      disabled={status === "submitting" || status === "success"}
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:bg-bg-muted disabled:cursor-not-allowed hover:border-gray-300 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={status === "submitting" || status === "success"}
                      className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm"
                    >
                      {status === "submitting" ? "Submitting..." : status === "success" ? "Done" : "Notify Me"}
                    </button>
                  </div>
                </div>
                {status === "success" && (
                  <p className="text-xs text-success">
                    You&apos;re on the list.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs text-error">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* SEO Content Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-2">
              Why Work With Us
            </h2>
            <p className="text-base text-ink-muted max-w-2xl mx-auto">
              Direct pricing, quality products, zero BS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="group p-5 bg-white rounded-xl border-2 border-border hover:border-blue-600 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Wholesale Pricing</h3>
              <p className="text-ink-muted text-sm leading-relaxed">Volume discounts and bulk ordering with transparent, competitive pricing on all supplies.</p>
            </div>
            <div className="group p-5 bg-white rounded-xl border-2 border-border hover:border-orange-600 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Custom Branding</h3>
              <p className="text-ink-muted text-sm leading-relaxed">In-house design and production for branded cups, napkins, takeout boxes, and bags.</p>
            </div>
            <div className="group p-5 bg-white rounded-xl border-2 border-border hover:border-green-600 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Eco-Friendly Options</h3>
              <p className="text-ink-muted text-sm leading-relaxed">Compostable and sustainable supplies that don't compromise on quality or performance.</p>
            </div>
            <div className="group p-5 bg-white rounded-xl border-2 border-border hover:border-blue-600 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Fast Nationwide Shipping</h3>
              <p className="text-ink-muted text-sm leading-relaxed">Quick delivery across the US, with same-day options available in Los Angeles.</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="prose prose-sm max-w-none text-ink-muted bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <p className="mb-4 text-sm">
              <strong className="text-ink">Restaurant Supplies Direct</strong> makes premium hospitality packaging and <strong className="text-ink">wholesale restaurant supplies</strong> accessible to every operator. Whether you're running an independent cafe, food truck, or multi-location restaurant group, we deliver the same quality supplies trusted by leading hospitality brands — at prices that make sense for your business.
            </p>
            <p className="mb-4 text-sm">
              From <Link href="/takeout-containers" className="text-blue-600 hover:text-blue-700 underline font-semibold">takeout containers wholesale</Link> to <Link href="/custom-printing" className="text-blue-600 hover:text-blue-700 underline font-semibold">custom printed packaging</Link>, we ship directly from the source. No middlemen. No retail markups. Just quality restaurant disposables, fast shipping, and transparent pricing.
            </p>
            <p className="text-sm">
              Need <Link href="/eco-friendly" className="text-blue-600 hover:text-blue-700 underline font-semibold">eco-friendly supplies</Link>? We carry the largest selection of compostable takeout containers, sustainable packaging, and recyclable disposables. Looking for branded packaging? Our <Link href="/custom-printing" className="text-blue-600 hover:text-blue-700 underline font-semibold">in-house design team</Link> can create custom printed cups, napkins, and boxes that make your brand stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-2">
              Shop by Category
            </h2>
            <p className="text-base text-ink-muted">
              Browse our complete range of wholesale supplies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Takeout Containers", href: "/takeout-containers", Icon: Box, bgColor: "bg-gradient-to-br from-orange-50 to-orange-100", iconColor: "text-orange-600", borderColor: "hover:border-orange-500" },
              { name: "Cups & Lids", href: "/cups-and-lids", Icon: Coffee, bgColor: "bg-gradient-to-br from-amber-50 to-amber-100", iconColor: "text-amber-700", borderColor: "hover:border-amber-500" },
              { name: "Napkins & Towels", href: "/napkins-and-towels", Icon: FileText, bgColor: "bg-gradient-to-br from-blue-50 to-blue-100", iconColor: "text-blue-600", borderColor: "hover:border-blue-500" },
              { name: "Gloves & Bags", href: "/gloves-and-bags", Icon: ShoppingBag, bgColor: "bg-gradient-to-br from-purple-50 to-purple-100", iconColor: "text-purple-600", borderColor: "hover:border-purple-500" },
              { name: "Tabletop & To-Go", href: "/tabletop", Icon: Utensils, bgColor: "bg-gradient-to-br from-gray-50 to-gray-100", iconColor: "text-gray-700", borderColor: "hover:border-gray-500" },
              { name: "Eco-Friendly", href: "/eco-friendly", Icon: Sparkles, bgColor: "bg-gradient-to-br from-green-50 to-green-100", iconColor: "text-green-600", borderColor: "hover:border-green-500" },
            ].map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className={`group relative overflow-hidden rounded-xl border-2 border-border ${category.borderColor} hover:shadow-xl transition-all transform hover:-translate-y-1`}
              >
                <div className={`${category.bgColor} p-8 text-center`}>
                  <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md ${category.iconColor}`}>
                    <category.Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-ink">{category.name}</h3>
                  <p className="text-xs text-ink-muted mt-1">View Products →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Need */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-3">
              Shop by Need
            </h2>
            <p className="text-base text-ink-muted max-w-2xl mx-auto">
              Find the perfect supplies for your specific business type
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-black hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ink">New Restaurant</h3>
                </div>
                <p className="text-sm text-ink-muted mb-4">
                  Complete startup packages with everything you need to launch
                </p>
                <ul className="text-sm text-ink-muted space-y-2 mb-4">
                  <li>• Takeout containers</li>
                  <li>• Cups & lids</li>
                  <li>• Napkins & utensils</li>
                  <li>• Bags & to-go supplies</li>
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-black group-hover:underline">
                  Get Startup Quote →
                </span>
              </div>
            </Link>
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-black hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ink">Food Truck</h3>
                </div>
                <p className="text-sm text-ink-muted mb-4">
                  Mobile-friendly packaging designed for on-the-go service
                </p>
                <ul className="text-sm text-ink-muted space-y-2 mb-4">
                  <li>• Portable containers</li>
                  <li>• Leak-proof packaging</li>
                  <li>• Custom branded items</li>
                  <li>• Compact storage</li>
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-black group-hover:underline">
                  View Food Truck Supplies →
                </span>
              </div>
            </Link>
            <Link
              href="/eco-friendly"
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-black hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ink">Eco-Focused</h3>
                </div>
                <p className="text-sm text-ink-muted mb-4">
                  Sustainable and compostable options for eco-conscious brands
                </p>
                <ul className="text-sm text-ink-muted space-y-2 mb-4">
                  <li>• 100% compostable</li>
                  <li>• BPI certified</li>
                  <li>• Plant-based materials</li>
                  <li>• Zero plastic options</li>
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-black group-hover:underline">
                  Browse Eco Products →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-3">
              Best Sellers
            </h2>
            <p className="text-base text-ink-muted max-w-2xl mx-auto">
              Popular products trusted by restaurants nationwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "8oz Paper Hot Cups", category: "Cups & Lids", price: "$42.99", unit: "per 1000ct", popular: true },
              { name: "9 x 6 Hinged Clamshells", category: "Takeout Containers", price: "$89.99", unit: "per 200ct", popular: true },
              { name: "Medium Kraft Paper Bags", category: "Bags", price: "$34.99", unit: "per 500ct", popular: false },
              { name: "Compostable PLA Cold Cups", category: "Eco-Friendly", price: "$124.99", unit: "per 1000ct", popular: false },
            ].map((product, i) => (
              <div key={i} className="group bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-xl transition-all">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                  {product.popular && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black text-white text-xs font-bold rounded">
                      POPULAR
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-muted mb-1">{product.category}</p>
                  <h3 className="font-heading font-bold text-ink mb-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <p className="text-xl font-heading font-black text-black">{product.price}</p>
                    <p className="text-xs text-ink-muted">{product.unit}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-2.5 bg-black text-white font-semibold text-sm rounded-lg hover:bg-zinc-900 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-white border-2 border-black text-black font-heading font-bold rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-ink mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
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
              <div key={i} className="bg-bg-muted p-4 rounded-lg border border-border">
                <h3 className="text-sm font-heading font-semibold text-ink mb-1.5">
                  {faq.q}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">{faq.a}</p>
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
