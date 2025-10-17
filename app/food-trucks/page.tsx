import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Package, DollarSign, Clock, Award, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Food Truck Supplies: Complete Starter Packs | Restaurant Supplies Direct",
  description: "Everything your food truck needs: takeout containers, cups, napkins, gloves, and more. Wholesale pricing, fast shipping, and mobile-friendly packaging. Free samples available.",
  keywords: ["food truck supplies", "food truck disposables", "mobile food service", "takeout containers bulk", "food truck startup supplies", "street food packaging"],
};

export default function FoodTrucksPage() {
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
              Hit the Road Fully Stocked
            </h1>
            <p className="text-xl text-ink-muted mb-8 leading-relaxed">
              Complete food truck supply packs with everything you need to serve customers on the go. Durable packaging, space-efficient storage, wholesale pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
              >
                Get Your Custom Pack
              </Link>
              <Link
                href="/shop"
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
              <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Quick Service</p>
              <p className="text-sm text-ink-muted">Fast-paced ready</p>
            </div>
            <div>
              <Package className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Space Efficient</p>
              <p className="text-sm text-ink-muted">Compact storage</p>
            </div>
            <div>
              <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Wholesale Pricing</p>
              <p className="text-sm text-ink-muted">Maximize margins</p>
            </div>
            <div>
              <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="font-semibold text-ink">Fast Shipping</p>
              <p className="text-sm text-ink-muted">Get rolling quickly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Food Trucks Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
                Why Food Truck Owners Choose Restaurant Supplies Direct
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Mobile-Friendly Packaging</h3>
                    <p className="text-ink-muted">
                      Sturdy containers that travel well, leak-proof lids, and packaging designed for on-the-go service. No spills, no complaints.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Space-Efficient Storage</h3>
                    <p className="text-ink-muted">
                      We understand limited truck space. Stackable containers, nested cups, and compact packaging maximize your storage efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Flexible Quantities</h3>
                    <p className="text-ink-muted">
                      Whether you're just starting or running multiple trucks, we have quantities that fit your operation. No warehouse required.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ink mb-2">Brand Building</h3>
                    <p className="text-ink-muted">
                      Custom branded packaging helps you stand out at events, festivals, and street corners. Turn customers into walking advertisements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&auto=format&fit=crop"
                alt="Food truck supplies and packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Truck Starter Packs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Food Truck Starter Packs
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Pre-configured supply packs based on your menu type. Get everything you need in one order.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Taco/Street Food Pack */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🌮</div>
                <h3 className="text-2xl font-heading font-bold text-ink mb-2">Taco & Street Food</h3>
                <p className="text-sm text-ink-muted">Perfect for tacos, burritos, street food</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Paper food boats (2000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Foil wrap sheets (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Portion cups 2oz (500)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Napkins (5000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Gloves (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">16oz cold cups & lids (500)</span>
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

            {/* Burger & BBQ Pack */}
            <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl border-2 border-accent p-8 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-black text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🍔</div>
                <h3 className="text-2xl font-heading font-bold mb-2">Burger & BBQ</h3>
                <p className="text-sm text-white/80">For burgers, sandwiches, BBQ</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Clamshell containers (1000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Deli/butcher paper (500)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Paper baskets/trays (1000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Heavy-duty napkins (5000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Cutlery packs (1000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Cups & lids (1000)</span>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/90">Gloves (1000)</span>
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

            {/* Dessert & Specialty Pack */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🍦</div>
                <h3 className="text-2xl font-heading font-bold text-ink mb-2">Dessert & Specialty</h3>
                <p className="text-sm text-ink-muted">For ice cream, crepes, specialty items</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Clear dessert cups (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Dome lids (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Specialty containers (500)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Spoons/tasting spoons (1000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Napkins (3000)</span>
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-muted">Straws (1000)</span>
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

          <div className="text-center mt-12">
            <p className="text-ink-muted mb-4">
              Don't see your menu type? We'll create a custom pack for you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Get Custom Pack Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Everything Your Food Truck Needs
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Shop by category or build your own custom supply list
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/takeout-containers" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Takeout Containers
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Clamshells, bowls, trays, and specialty containers for every menu item
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/cups-and-lids" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Cups & Lids
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Hot cups, cold cups, and matching lids in all sizes for beverages
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/napkins-and-towels" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Napkins & Paper
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Napkins, paper towels, butcher paper, and deli wrap for service
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/gloves-and-bags" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Gloves & Bags
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Food safety gloves, takeout bags, and trash bags for operations
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/tabletop" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Package className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Tabletop & Utensils
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Cutlery, plates, bowls, and serving supplies for events
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>

            <Link href="/eco-friendly" className="group bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <Award className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                Eco-Friendly Options
              </h3>
              <p className="text-ink-muted text-sm mb-3">
                Compostable and recyclable packaging for sustainable operations
              </p>
              <span className="text-accent font-semibold text-sm">Browse →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Branding */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=800&auto=format&fit=crop"
                alt="Custom branded food truck packaging"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                Stand Out at Every Event
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Custom branded packaging turns your customers into mobile billboards. Perfect for festivals, events, and building a loyal following.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Custom printed containers, cups, and bags</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Low minimums (starting at 1,000 pieces)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Full-color or 1-2 color options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Free design assistance</span>
                </li>
              </ul>
              <Link
                href="/custom-printing"
                className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors"
              >
                Learn About Custom Printing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Food Truck Owner Resources
            </h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Expert guides to help you succeed on the road
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/food-truck-supplies-checklist" className="block bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <h3 className="text-xl font-heading font-bold text-ink mb-2">
                Essential Supplies Checklist for Food Trucks
              </h3>
              <p className="text-ink-muted mb-4">
                Complete list of disposables and packaging supplies every food truck needs to operate efficiently.
              </p>
              <span className="text-accent font-semibold">Read Guide →</span>
            </Link>

            <Link href="/blog/restaurant-disposables-guide" className="block bg-white rounded-xl border-2 border-border p-6 hover:border-accent hover:shadow-lg transition-all">
              <h3 className="text-xl font-heading font-bold text-ink mb-2">
                Complete Guide to Restaurant Disposables
              </h3>
              <p className="text-ink-muted mb-4">
                Everything you need to know about selecting, sourcing, and managing disposable supplies.
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
            Ready to Stock Your Food Truck?
          </h2>
          <p className="text-xl text-ink-muted mb-8">
            Get a custom quote tailored to your menu and service style. Fast shipping, wholesale pricing, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Request Custom Pack Quote
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
