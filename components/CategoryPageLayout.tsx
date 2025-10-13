"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";

interface CategoryPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  relatedCategories?: {
    name: string;
    slug: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export default function CategoryPageLayout({
  title,
  description,
  children,
  relatedCategories,
  faqs,
}: CategoryPageLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
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
            <span className="text-xl sm:text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Categories with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors">
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
              )}
            </div>

            <Link href="/custom-printing" className="text-ink-muted hover:text-ink transition-colors">
              Custom Printing
            </Link>
            <Link href="/login" className="flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
              <Link href="/shop" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                All Categories
              </Link>
              <Link href="/takeout-containers" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Takeout Containers
              </Link>
              <Link href="/cups-and-lids" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Cups & Lids
              </Link>
              <Link href="/napkins-and-towels" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Napkins & Towels
              </Link>
              <Link href="/gloves-and-bags" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Gloves & Bags
              </Link>
              <Link href="/eco-friendly" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Eco-Friendly
              </Link>
              <Link href="/tabletop" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Tabletop
              </Link>
              <Link href="/custom-printing" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Custom Printing
              </Link>
              <Link href="/wholesale-programs" className="px-4 py-3 text-ink hover:bg-bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Wholesale Programs
              </Link>
              <Link href="/contact" className="mx-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium" onClick={() => setMobileMenuOpen(false)}>
                Get Quote
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Breadcrumb */}
      <div className="bg-bg-muted py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-ink-muted">
            <Link href="/" className="hover:text-ink">Home</Link>
            {" / "}
            <Link href="/shop" className="hover:text-ink">Shop</Link>
            {" / "}
            <span className="text-ink font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink mb-6 leading-heading">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-ink-muted">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-6 bg-orange-50 border-y border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-ink">
              <strong>E-commerce launching soon!</strong> Need {title.toLowerCase()} now? Contact us for immediate orders.
            </p>
            <Link
              href="/contact"
              className="whitespace-nowrap px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-ink mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-ink-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Categories */}
      {relatedCategories && relatedCategories.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-ink mb-6">
              Related Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="p-6 bg-white border border-border rounded-lg hover:border-blue-600 hover:shadow-lg transition-all"
                >
                  <span className="text-lg font-heading font-semibold text-ink hover:text-blue-600">
                    {cat.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Need Bulk or Custom Printing?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get wholesale pricing and custom branded packaging through Shure Hospitality Wholesale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wholesale-programs"
              className="px-8 py-4 bg-white text-ink font-heading font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Wholesale Programs
            </Link>
            <Link
              href="/custom-printing"
              className="px-8 py-4 bg-orange-500 text-white font-heading font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Custom Printing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
