import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Package, FileText, Building2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap | Restaurant Supplies Direct",
  description: "Browse all pages on Restaurant Supplies Direct. Find restaurant supplies, packaging, custom printing, and more.",
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
            Sitemap
          </h1>
          <p className="text-ink-muted mb-12 max-w-2xl">
            Browse all pages and resources available on Restaurant Supplies Direct.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shop Categories */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-heading font-bold text-ink">Shop</h2>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/shop" className="text-ink-muted hover:text-accent transition-colors">
                    All Categories
                  </Link>
                </li>
                <li>
                  <Link href="/takeout-containers" className="text-ink-muted hover:text-accent transition-colors">
                    Takeout Containers
                  </Link>
                </li>
                <li>
                  <Link href="/cups-and-lids" className="text-ink-muted hover:text-accent transition-colors">
                    Cups & Lids
                  </Link>
                </li>
                <li>
                  <Link href="/napkins-and-towels" className="text-ink-muted hover:text-accent transition-colors">
                    Napkins & Towels
                  </Link>
                </li>
                <li>
                  <Link href="/gloves-and-bags" className="text-ink-muted hover:text-accent transition-colors">
                    Gloves & Bags
                  </Link>
                </li>
                <li>
                  <Link href="/eco-friendly" className="text-ink-muted hover:text-accent transition-colors">
                    Eco-Friendly Products
                  </Link>
                </li>
                <li>
                  <Link href="/tabletop" className="text-ink-muted hover:text-accent transition-colors">
                    Tabletop & Serving
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-heading font-bold text-ink">Company</h2>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="text-ink-muted hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-ink-muted hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/custom-printing" className="text-ink-muted hover:text-accent transition-colors">
                    Custom Printing
                  </Link>
                </li>
                <li>
                  <Link href="/wholesale-programs" className="text-ink-muted hover:text-accent transition-colors">
                    Wholesale Programs
                  </Link>
                </li>
                <li>
                  <Link href="/la-hospitality-supplies" className="text-ink-muted hover:text-accent transition-colors">
                    LA Local Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-ink-muted hover:text-accent transition-colors">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-heading font-bold text-ink">Resources</h2>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/blog" className="text-ink-muted hover:text-accent transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/blog/choosing-takeout-containers" className="text-ink-muted hover:text-accent transition-colors">
                    Choosing Takeout Containers
                  </Link>
                </li>
                <li>
                  <Link href="/blog/eco-friendly-packaging-guide" className="text-ink-muted hover:text-accent transition-colors">
                    Eco-Friendly Packaging Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/food-truck-supplies-checklist" className="text-ink-muted hover:text-accent transition-colors">
                    Food Truck Supplies Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/blog/reduce-packaging-costs" className="text-ink-muted hover:text-accent transition-colors">
                    Reduce Packaging Costs
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-ink-muted hover:text-accent transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-heading font-bold text-ink">Legal & Support</h2>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/privacy" className="text-ink-muted hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-ink-muted hover:text-accent transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-ink-muted hover:text-accent transition-colors">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-br from-accent to-orange-500 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-heading font-bold mb-3">
              Can't Find What You're Looking For?
            </h2>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Our team is here to help. Contact us for product recommendations, custom quotes, or any questions about our supplies.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
