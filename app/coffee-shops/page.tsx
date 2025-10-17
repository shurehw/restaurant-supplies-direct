import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Coffee, Package, DollarSign, Truck, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Coffee Shop Supplies: Cups, Lids & Sleeves | Restaurant Supplies Direct",
  description: "Premium coffee shop supplies including hot cups, cold cups, lids, sleeves, and branded packaging. Wholesale pricing for cafes and coffee shops. Free samples available.",
  keywords: ["coffee shop supplies", "coffee cups wholesale", "coffee cup lids", "cafe supplies", "branded coffee cups", "custom coffee sleeves", "disposable cups bulk"],
};

export default function CoffeeShopsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium mb-6">
              Powered by Shure Hospitality Wholesale
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-ink">
              Premium Coffee Shop Supplies That Build Your Brand
            </h1>
            <p className="text-xl text-ink-muted mb-8 leading-relaxed">
              From single-wall cups to custom branded sleeves, we supply everything your cafe needs. Wholesale pricing, fast shipping, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
              >
                Get a Custom Quote
              </Link>
              <Link
                href="/cups-and-lids"
                className="inline-block px-8 py-4 bg-white border-2 border-border text-ink font-semibold rounded-xl hover:border-orange-500 transition-colors text-center"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Package className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Free Samples</p>
              <p className="text-sm text-ink-muted">On orders $500+</p>
            </div>
            <div>
              <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Wholesale Pricing</p>
              <p className="text-sm text-ink-muted">Direct from source</p>
            </div>
            <div>
              <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Fast Shipping</p>
              <p className="text-sm text-ink-muted">LA same-day available</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Custom Printing</p>
              <p className="text-sm text-ink-muted">Build your brand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Complete Coffee Shop Supply Solutions
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Everything your cafe needs, from hot cups to custom branded packaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hot Cups */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Hot Cups & Lids</h3>
              <p className="text-ink-muted mb-6">
                Single-wall, double-wall, and ripple-wall cups. All sizes from 8oz to 20oz with matching lids.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">Double-wall insulation (no sleeves needed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">Compostable & recyclable options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">Custom printing available</span>
                </li>
              </ul>
              <Link href="/cups-and-lids" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                View Hot Cups →
              </Link>
            </div>

            {/* Cold Cups */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Cold Cups & Lids</h3>
              <p className="text-ink-muted mb-6">
                Clear PET and PLA cups for iced coffee, smoothies, and cold brew. Dome and flat lids in all sizes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">Crystal clear presentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">Leak-proof lid compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">16oz, 20oz, and 24oz sizes</span>
                </li>
              </ul>
              <Link href="/cups-and-lids" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                View Cold Cups →
              </Link>
            </div>

            {/* Sleeves & Accessories */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Sleeves & Accessories</h3>
              <p className="text-ink-muted mb-6">
                Cup sleeves, stir sticks, napkins, and cup carriers. Branded and generic options available.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">Custom printed sleeves</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">Corrugated insulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-muted">2 & 4-cup carriers</span>
                </li>
              </ul>
              <Link href="/napkins-and-towels" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                View Accessories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Branding CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                Turn Every Cup Into a Marketing Opportunity
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Custom branded cups and sleeves aren't just packaging—they're mobile billboards for your cafe. Every customer becomes a brand ambassador.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Low minimum orders (1,000 pieces)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">1-4 color printing options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Free design consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">2-3 week turnaround</span>
                </li>
              </ul>
              <Link
                href="/custom-printing"
                className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors"
              >
                Learn About Custom Printing
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=800&auto=format&fit=crop"
                alt="Custom branded coffee cups"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Starter Bundles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Coffee Shop Starter Bundles
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Pre-configured bundles with everything you need to get started
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Bundle */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-ink mb-2">Starter Bundle</h3>
                <p className="text-sm text-ink-muted">Perfect for new cafes</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">12oz hot cups (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">16oz hot cups (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Matching lids (2000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Cup sleeves (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Stir sticks (500)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gray-100 text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors text-center"
              >
                Request Quote
              </Link>
            </div>

            {/* Professional Bundle */}
            <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl border-2 border-accent p-8 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-black text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2">Professional Bundle</h3>
                <p className="text-sm text-white/80">For established cafes</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">12oz hot cups (2000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">16oz hot cups (2000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">20oz cold cups (1000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">All matching lids (5000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Cup sleeves (2000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Napkins (5000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors text-center"
              >
                Request Quote
              </Link>
            </div>

            {/* Premium Bundle */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-ink mb-2">Premium Bundle</h3>
                <p className="text-sm text-ink-muted">High-volume operations</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">All Professional items</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Double quantities</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Custom branded cups</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Custom branded sleeves</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Priority support</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gray-100 text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Coffee Shop Owner Resources
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Expert guides to help you make the right decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/coffee-shop-cups-lids-guide" className="block bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <h3 className="text-xl font-heading font-bold text-ink mb-2">
                Complete Buyer's Guide: Cups & Lids for Coffee Shops
              </h3>
              <p className="text-ink-muted mb-4">
                Everything you need to know about selecting hot cups, cold cups, lids, and sleeves. Maximize quality while controlling costs.
              </p>
              <span className="text-accent font-semibold">Read Guide →</span>
            </Link>

            <Link href="/blog/custom-branded-packaging" className="block bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <h3 className="text-xl font-heading font-bold text-ink mb-2">
                Custom Branded Packaging: Build Your Brand Identity
              </h3>
              <p className="text-ink-muted mb-4">
                Learn how custom printed packaging increases brand recognition, customer loyalty, and marketing ROI for your coffee shop.
              </p>
              <span className="text-accent font-semibold">Read Guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
            Ready to Stock Your Coffee Shop?
          </h2>
          <p className="text-xl text-ink-muted mb-8">
            Get a custom quote tailored to your cafe's needs. Free samples available on orders $500+.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="tel:+13102436757"
              className="inline-block px-8 py-4 bg-white border-2 border-border text-ink font-semibold rounded-xl hover:border-orange-500 transition-colors"
            >
              Call (310) 243-6757
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
