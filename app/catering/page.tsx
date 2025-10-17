import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Package, DollarSign, Truck, Award, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Catering Supplies: Bulk Disposables for Events | Restaurant Supplies Direct",
  description: "Bulk catering supplies for weddings, corporate events, and large gatherings. Plates, bowls, cutlery, and serving supplies at wholesale prices. Fast delivery.",
  keywords: ["catering supplies", "bulk disposables", "event supplies", "wedding disposables", "corporate catering supplies", "party supplies bulk"],
};

export default function CateringPage() {
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
              Bulk Catering Supplies for Every Event
            </h1>
            <p className="text-xl text-ink-muted mb-8 leading-relaxed">
              From intimate gatherings to 500+ person events, we supply everything you need. Wholesale pricing on bulk orders, fast delivery, and white-glove service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
              >
                Get Event Quote
              </Link>
              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-white border-2 border-border text-ink font-semibold rounded-xl hover:border-orange-500 transition-colors text-center"
              >
                Browse Supplies
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
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Any Event Size</p>
              <p className="text-sm text-ink-muted">10 to 1000+ guests</p>
            </div>
            <div>
              <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Volume Pricing</p>
              <p className="text-sm text-ink-muted">Save 20-40%</p>
            </div>
            <div>
              <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Fast Delivery</p>
              <p className="text-sm text-ink-muted">LA same-day available</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Last-Minute Orders</p>
              <p className="text-sm text-ink-muted">We've got you covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              We Supply All Types of Events
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Professional catering supplies for weddings, corporate events, parties, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Weddings */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Weddings</h3>
              <p className="text-ink-muted mb-4">
                Elegant disposable plates, bowls, cutlery, and glassware for wedding receptions. Premium quality that photographs beautifully.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">China-like disposable plates</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Premium plastic silverware</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Champagne flutes & wine glasses</span>
                </li>
              </ul>
            </div>

            {/* Corporate Events */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Corporate Events</h3>
              <p className="text-ink-muted mb-4">
                Professional-grade supplies for company parties, conferences, and business luncheons. Reliable and cost-effective.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Individual boxed lunches packaging</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Coffee service supplies</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Buffet serving supplies</span>
                </li>
              </ul>
            </div>

            {/* Parties & Celebrations */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Parties & Celebrations</h3>
              <p className="text-ink-muted mb-4">
                Fun, colorful, and durable supplies for birthday parties, graduations, anniversaries, and family gatherings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Colorful plates & napkins</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Cups, straws, and drink supplies</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Dessert plates & utensils</span>
                </li>
              </ul>
            </div>

            {/* Festivals & Outdoor Events */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Festivals & Outdoor Events</h3>
              <p className="text-ink-muted mb-4">
                Heavy-duty supplies designed for high-volume outdoor events, festivals, and community gatherings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Extra-sturdy plates & bowls</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Bulk napkin dispensers</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Heavy-duty trash bags</span>
                </li>
              </ul>
            </div>

            {/* Food Service & Buffets */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Buffets & Food Service</h3>
              <p className="text-ink-muted mb-4">
                Complete buffet setup supplies including chafing dishes, serving utensils, and food presentation items.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Aluminum serving trays</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Serving tongs & utensils</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Food warming supplies</span>
                </li>
              </ul>
            </div>

            {/* Special Dietary Events */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-accent hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">Eco-Friendly Events</h3>
              <p className="text-ink-muted mb-4">
                Compostable and recyclable options for environmentally-conscious events and green venues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Compostable plates & bowls</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">Bamboo or wood cutlery</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-ink-muted">PLA cold cups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Count Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Catering Supply Calculator
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Estimate what you'll need based on guest count
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 50 Guests */}
            <div className="bg-white rounded-2xl border-2 border-border p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-accent mb-2">50</div>
                <p className="text-ink-muted">Guests</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Plates (dinner + dessert)</span>
                  <span className="font-semibold text-ink">100</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Bowls (salad/sides)</span>
                  <span className="font-semibold text-ink">50</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Cutlery sets</span>
                  <span className="font-semibold text-ink">75</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Cups</span>
                  <span className="font-semibold text-ink">75</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Napkins</span>
                  <span className="font-semibold text-ink">150</span>
                </div>
              </div>
            </div>

            {/* 150 Guests */}
            <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl border-2 border-accent p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-black text-white text-xs font-bold rounded-full">
                  MOST COMMON
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">150</div>
                <p className="text-white/80">Guests</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-white/20 pb-2">
                  <span className="text-white/90">Plates (dinner + dessert)</span>
                  <span className="font-semibold">300</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/20 pb-2">
                  <span className="text-white/90">Bowls (salad/sides)</span>
                  <span className="font-semibold">150</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/20 pb-2">
                  <span className="text-white/90">Cutlery sets</span>
                  <span className="font-semibold">225</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/20 pb-2">
                  <span className="text-white/90">Cups</span>
                  <span className="font-semibold">225</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/20 pb-2">
                  <span className="text-white/90">Napkins</span>
                  <span className="font-semibold">450</span>
                </div>
              </div>
            </div>

            {/* 300+ Guests */}
            <div className="bg-white rounded-2xl border-2 border-border p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-accent mb-2">300+</div>
                <p className="text-ink-muted">Guests</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Plates (dinner + dessert)</span>
                  <span className="font-semibold text-ink">600+</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Bowls (salad/sides)</span>
                  <span className="font-semibold text-ink">300+</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Cutlery sets</span>
                  <span className="font-semibold text-ink">450+</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Cups</span>
                  <span className="font-semibold text-ink">450+</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-ink-muted">Napkins</span>
                  <span className="font-semibold text-ink">900+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-ink-muted mb-4">
              *Quantities include 20% buffer for safety. Actual needs vary by menu and service style.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Get Custom Event Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop"
                alt="Elegant event table setting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
                Why Catering Companies Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Volume Discounts</h3>
                    <p className="text-ink-muted">
                      The more you order, the more you save. Get up to 40% off retail pricing on bulk orders. Perfect for large events.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Dedicated Support</h3>
                    <p className="text-ink-muted">
                      Work directly with our catering specialists. We'll help you calculate quantities, recommend products, and ensure on-time delivery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Fast, Reliable Delivery</h3>
                    <p className="text-ink-muted">
                      LA area same-day delivery available. National shipping with tracking. Rush orders accommodated whenever possible.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Quality Guaranteed</h3>
                    <p className="text-ink-muted">
                      Premium products that look great and perform perfectly. No flimsy plates or leaking cups at your events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Browse Catering Supplies by Category
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/tabletop" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Plates & Bowls
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Dinner plates, salad plates, dessert plates, and serving bowls in all sizes
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/tabletop" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Cutlery & Utensils
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Plastic silverware, serving utensils, and specialty flatware
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/cups-and-lids" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Cups & Glassware
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Plastic wine glasses, champagne flutes, tumblers, and beverage cups
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/napkins-and-towels" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Napkins & Table Covers
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Dinner napkins, beverage napkins, and disposable tablecloths
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/takeout-containers" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Serving & Storage
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Aluminum trays, food pans, and buffet serving supplies
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/eco-friendly" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Award className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Eco-Friendly Options
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Compostable plates, bowls, and utensils for green events
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a detailed quote based on your guest count, menu, and service style. Our catering specialists are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Request Event Quote
            </Link>
            <Link
              href="tel:+13102436757"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-colors"
            >
              Call (310) 243-6757
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            LA area? Ask about same-day delivery for last-minute events
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
