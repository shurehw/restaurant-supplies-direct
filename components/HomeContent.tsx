"use client";

import { useState } from "react";
import Image from "next/image";
import LABanner from "@/components/LABanner";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import StickyQuoteCTA from "@/components/StickyQuoteCTA";
import BackToTop from "@/components/BackToTop";
import ProductBadges from "@/components/ProductBadges";
import ProductSpecs from "@/components/ProductSpecs";
import Link from "next/link";
import { Menu, X, ChevronDown, Package, Palette, Leaf, Truck, Box, Coffee, FileText, ShoppingBag, Utensils, Sparkles, LogIn, UserPlus, Search } from "lucide-react";

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
        {/* Fast Response Badge */}
        <div className="max-w-7xl mx-auto mb-2 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-green-700">2-Hour Response Guarantee</span>
          </div>
        </div>
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
            {/* Search Bar */}
            <div className="relative hidden lg:block">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none outline-none text-base w-56 placeholder:text-gray-400"
                />
              </div>
            </div>

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
                  <div className="w-[800px] max-w-[90vw] bg-white rounded-lg shadow-2xl border-2 border-border p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <Link
                      href="/takeout-containers"
                      className="flex flex-col rounded-lg hover:shadow-lg border-2 border-transparent hover:border-orange-500 transition-all group overflow-hidden"
                    >
                      <div className="w-full h-32 bg-gray-100 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop"
                          alt="Takeout containers"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-heading font-bold text-ink text-sm mb-1">
                          Takeout Containers
                        </h3>
                        <p className="text-xs text-ink-muted">
                          To-go boxes, clamshells
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/cups-and-lids"
                      className="flex flex-col rounded-lg hover:shadow-lg border-2 border-transparent hover:border-amber-500 transition-all group overflow-hidden"
                    >
                      <div className="w-full h-32 bg-gray-100 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
                          alt="Coffee cups"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-heading font-bold text-ink text-sm mb-1">
                          Cups & Lids
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Paper & plastic cups
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/napkins-and-towels"
                      className="flex flex-col rounded-lg hover:shadow-lg border-2 border-transparent hover:border-blue-500 transition-all group overflow-hidden"
                    >
                      <div className="w-full h-32 bg-gray-100 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop"
                          alt="Napkins"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-heading font-bold text-ink text-sm mb-1">
                          Napkins & Towels
                        </h3>
                        <p className="text-xs text-ink-muted">
                          All napkin sizes
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/gloves-and-bags"
                      className="flex flex-col rounded-lg hover:shadow-lg border-2 border-transparent hover:border-purple-500 transition-all group overflow-hidden"
                    >
                      <div className="w-full h-32 bg-gray-100 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=300&fit=crop"
                          alt="Gloves and bags"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-heading font-bold text-ink text-sm mb-1">
                          Gloves & Bags
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Disposables & trash
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/eco-friendly"
                      className="flex flex-col rounded-lg hover:shadow-lg border-2 border-transparent hover:border-green-500 transition-all group overflow-hidden"
                    >
                      <div className="w-full h-32 bg-gray-100 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop"
                          alt="Eco-friendly packaging"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-heading font-bold text-ink text-sm mb-1">
                          Eco-Friendly
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Compostable options
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/tabletop"
                      className="flex flex-col rounded-lg hover:shadow-lg border-2 border-transparent hover:border-gray-500 transition-all group overflow-hidden"
                    >
                      <div className="w-full h-32 bg-gray-100 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop"
                          alt="Cutlery and straws"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-heading font-bold text-ink text-sm mb-1">
                          Tabletop
                        </h3>
                        <p className="text-xs text-ink-muted">
                          Cutlery & straws
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
            <Link href="/faq" className="text-ink-muted hover:text-ink transition-colors text-sm font-medium">FAQ</Link>
            <Link href="/login" className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors text-sm font-medium">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link href="/contact" className="px-4 py-1.5 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-lg hover:from-brand-blue-dark hover:to-brand-blue-dark transition-all text-sm font-semibold shadow-md hover:shadow-lg">
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
              <Link
                href="/faq"
                className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
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
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full text-white text-xs font-bold shadow-xl border-2" style={{ backgroundColor: '#FF6B35', borderColor: '#E55520' }}>
                Browse Now • Orders Opening Soon
              </div>

              {/* Hero Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ink leading-[1.1]">
                Restaurant Supplies.{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Direct.</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M2 7 Q50 2, 100 7 T198 7" stroke="#FF8556" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8"/>
                  </svg>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-ink-muted max-w-2xl mx-auto leading-snug">
                Premium disposables, packaging, and custom print. <span className="font-handwritten text-2xl" style={{ color: '#FF8556' }}>No middleman, no markup.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link
                  href="/shop"
                  className="group px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white font-semibold text-base rounded-lg hover:from-brand-blue-dark hover:to-brand-blue transition-all shadow-lg hover:shadow-xl"
                >
                  Browse Catalog
                  <span className="inline-block ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/custom-printing"
                  className="px-6 py-3 bg-white text-ink font-semibold text-base rounded-lg hover:bg-gray-50 transition-all border-2 border-brand-orange hover:border-brand-orange-dark hover:shadow-lg"
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
            <div className="relative inline-block mb-2">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink">
                Why Work With Us
              </h2>
              <div className="absolute -right-12 -top-4 font-handwritten text-2xl rotate-12 hidden sm:block" style={{ color: '#FF8556' }}>
                (the real deal)
              </div>
            </div>
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
            <div className="group p-5 bg-white rounded-xl border-2 border-border hover:border-brand-orange hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md">
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
              { name: "Takeout Containers", href: "/takeout-containers", Icon: Box, bgColor: "bg-gradient-to-br from-orange-50 to-orange-100", iconColor: "text-orange-600", borderColor: "hover:border-orange-500", count: "500+" },
              { name: "Cups & Lids", href: "/cups-and-lids", Icon: Coffee, bgColor: "bg-gradient-to-br from-amber-50 to-amber-100", iconColor: "text-amber-700", borderColor: "hover:border-amber-500", count: "300+" },
              { name: "Napkins & Towels", href: "/napkins-and-towels", Icon: FileText, bgColor: "bg-gradient-to-br from-blue-50 to-blue-100", iconColor: "text-blue-600", borderColor: "hover:border-blue-500", count: "200+" },
              { name: "Gloves & Bags", href: "/gloves-and-bags", Icon: ShoppingBag, bgColor: "bg-gradient-to-br from-purple-50 to-purple-100", iconColor: "text-purple-600", borderColor: "hover:border-purple-500", count: "150+" },
              { name: "Tabletop & To-Go", href: "/tabletop", Icon: Utensils, bgColor: "bg-gradient-to-br from-gray-50 to-gray-100", iconColor: "text-gray-700", borderColor: "hover:border-gray-500", count: "250+" },
              { name: "Eco-Friendly", href: "/eco-friendly", Icon: Sparkles, bgColor: "bg-gradient-to-br from-green-50 to-green-100", iconColor: "text-green-600", borderColor: "hover:border-green-500", count: "180+" },
            ].map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className={`group relative overflow-hidden rounded-xl border-2 border-border ${category.borderColor} hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300`}
              >
                <div className={`${category.bgColor} p-8 text-center relative`}>
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 backdrop-blur-sm rounded-full text-[10px] font-bold text-white shadow-lg">
                    {category.count}
                  </div>
                  <div className={`w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg border-2 border-white/40 ${category.iconColor}`}>
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
              {
                name: "8oz Paper Hot Cups",
                category: "Cups & Lids",
                price: "$42.99",
                unit: "per 1000ct",
                popular: true,
                material: "Paper",
                certifications: ["FDA" as const],
                specs: { size: "8oz", caseQuantity: "1000 pcs" }
              },
              {
                name: "9 x 6 Hinged Clamshells",
                category: "Takeout Containers",
                price: "$89.99",
                unit: "per 200ct",
                popular: true,
                material: "Plastic",
                certifications: ["FDA" as const],
                specs: { dimensions: "9\" x 6\" x 3\"", caseQuantity: "200 pcs" }
              },
              {
                name: "Medium Kraft Paper Bags",
                category: "Bags",
                price: "$34.99",
                unit: "per 500ct",
                popular: false,
                material: "Paper",
                isEcoFriendly: true,
                specs: { size: "12\" x 7\" x 17\"", caseQuantity: "500 pcs" }
              },
              {
                name: "Compostable PLA Cold Cups",
                category: "Eco-Friendly",
                price: "$124.99",
                unit: "per 1000ct",
                popular: false,
                material: "PLA",
                isCompostable: true,
                certifications: ["BPI" as const],
                specs: { capacity: "16oz", caseQuantity: "1000 pcs" }
              },
            ].map((product, i) => (
              <div key={i} className="group bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        i === 0 ? '1544787219-7f47ccb76574' : // Coffee cups
                        i === 1 ? '1603532648955-039310d9ed75' : // Takeout containers
                        i === 2 ? '1596814062351-48d83e6c2c12' : // Paper bags
                        '1611273426858-450d8e3c9fce' // Compostable cups
                      }?w=400&h=400&fit=crop`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {product.popular && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black text-white text-xs font-bold rounded">
                      POPULAR
                    </div>
                  )}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <ProductBadges
                      certifications={product.certifications}
                      isCompostable={product.isCompostable}
                      isEcoFriendly={product.isEcoFriendly}
                      material={product.material}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-muted mb-1">{product.category}</p>
                  <h3 className="font-heading font-bold text-ink mb-2">{product.name}</h3>

                  {/* Product Specs */}
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <ProductSpecs {...product.specs} />
                  </div>

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

      {/* Why Choose RSD vs Competition */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-3">
              Why Restaurants Choose Us
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-2">
              Unlike massive marketplaces with 463K products, we specialize in disposables only—curated selection, expert service, real support
            </p>
            <div className="font-handwritten text-xl" style={{ color: '#FF8556' }}>
              ↓ here's the honest comparison ↓
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Them column */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-bold text-ink-muted">Typical Marketplace</h3>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <p className="text-sm text-ink-muted">❌ 463K+ products = overwhelming</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <p className="text-sm text-ink-muted">❌ Generic support—you're on your own</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <p className="text-sm text-ink-muted">❌ No educational content or guidance</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <p className="text-sm text-ink-muted">❌ Just selling products, not solutions</p>
              </div>
            </div>

            {/* Us column */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-bold text-black">Restaurant Supplies Direct</h3>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-lg border-2 border-green-500">
                <p className="text-sm font-semibold text-ink">✓ Curated disposables selection—no clutter</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg border-2 border-blue-500">
                <p className="text-sm font-semibold text-ink">✓ 2-hour response guarantee + personal service</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-lg border-2 border-brand-orange">
                <p className="text-sm font-semibold text-ink">✓ 10+ educational buying guides</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg border-2 border-purple-500">
                <p className="text-sm font-semibold text-ink">✓ Custom printing + free samples</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog/rsd-vs-webstaurantstore"
              className="inline-block text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Read the detailed comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Free Samples CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-black shadow-xl p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Try Before You Buy
            </h2>
            <p className="text-lg text-ink-muted mb-8 max-w-2xl mx-auto">
              Not sure which products are right for your operation? Request free samples and test them in your restaurant before committing to bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white font-heading font-bold text-lg rounded-lg hover:bg-zinc-900 transition-colors shadow-lg"
              >
                Request Free Samples
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-heading font-bold text-lg rounded-lg border-2 border-black hover:bg-gray-50 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <p className="text-sm text-ink-muted mt-6">
              Available for most products • No cost for serious inquiries • Fast shipping
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
      <StickyQuoteCTA />
      <BackToTop />
    </div>
  );
}
