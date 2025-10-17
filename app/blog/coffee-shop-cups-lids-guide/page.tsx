import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Cups and Lids for Coffee Shops and Cafes: Complete Buyer's Guide | RSD Blog",
  description: "Everything coffee shop owners need to know about selecting hot cups, cold cups, lids, and sleeves. Maximize quality while controlling costs.",
  keywords: ["coffee shop cups", "cafe supplies", "hot coffee cups", "cold drink cups", "coffee cup lids", "paper cups", "coffee shop supplies"],
};

export default function CoffeeShopCupsLidsGuide() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="text-sm text-ink-muted hover:text-ink transition-colors mb-4 inline-block">
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-sm text-ink-muted mb-4">
              <span className="px-3 py-1 bg-gray-100 text-black font-semibold rounded-full">
                Coffee Shop
              </span>
              <time dateTime="2025-10-16">Oct 16, 2025</time>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4 leading-tight">
              Best Cups and Lids for Coffee Shops and Cafes: Complete Buyer's Guide
            </h1>
            <p className="text-lg text-ink-muted">
              Choose the right cups, lids, and sleeves to enhance customer experience, reduce costs, and build your coffee shop brand.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format&fit=crop"
              alt="Coffee shop cups and lids display"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-ink-muted space-y-6">
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Why Cup Selection Matters for Coffee Shops</h2>
              <p>
                For coffee shops and cafes, cups aren't just containers—they're part of the product experience. The wrong cup can ruin a perfect espresso with heat transfer, spills from poor-fitting lids, or a cheap feel that undermines premium pricing.
              </p>
              <p>
                With 60-80% of coffee shop sales being takeout or delivery, your cups also serve as mobile billboards for your brand. Customers carry them through offices, on public transit, and across social media feeds. Getting cup selection right impacts customer satisfaction, operating costs, and brand perception.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Hot Beverage Cups: Your Options</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Single-Wall Paper Cups</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Thin, lightweight construction</li>
                  <li>Most economical option ($0.08-0.15 per cup)</li>
                  <li>Requires sleeve or double-cupping for hot beverages</li>
                  <li>Available in 8oz, 12oz, 16oz, 20oz sizes</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High-volume operations prioritizing cost efficiency</li>
                  <li>Quick-service coffee stands</li>
                  <li>When paired with branded sleeves for insulation</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Considerations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customers need sleeves to hold hot drinks comfortably</li>
                  <li>Less premium feel than double-wall options</li>
                  <li>PLA or polyethylene lining required for liquid resistance</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Double-Wall Paper Cups</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Two layers with air pocket insulation</li>
                  <li>Premium option ($0.15-0.25 per cup)</li>
                  <li>No sleeve required—comfortable to hold even with hot liquids</li>
                  <li>Keeps beverages hot longer</li>
                  <li>Feels substantial and high-quality</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Specialty coffee shops emphasizing quality</li>
                  <li>Cafes with premium pricing</li>
                  <li>Situations where you want to eliminate sleeves</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Considerations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Higher cost but eliminates need for sleeves</li>
                  <li>Better heat retention = better customer experience</li>
                  <li>Custom printing on double-wall cups looks premium</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Ripple-Wall (Corrugated) Cups</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Distinctive corrugated outer layer creates air pockets</li>
                  <li>Mid-range pricing ($0.12-0.20 per cup)</li>
                  <li>No sleeve required—textured grip and insulation</li>
                  <li>Modern, distinctive appearance</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cafes wanting a distinctive, modern aesthetic</li>
                  <li>Shops looking to differentiate from competitors</li>
                  <li>Balance between economy and premium feel</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Compostable/Eco-Friendly Hot Cups</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>PLA-lined paper (plant-based lining instead of polyethylene)</li>
                  <li>Compostable in commercial facilities</li>
                  <li>Premium pricing ($0.15-0.28 per cup)</li>
                  <li>Available in single-wall and double-wall</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Eco-conscious brands and customers</li>
                  <li>Cities with commercial composting infrastructure</li>
                  <li>Cafes emphasizing sustainability in their marketing</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Considerations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Only compostable in commercial facilities (not backyard compost)</li>
                  <li>Check that your city has appropriate composting services</li>
                  <li>Growing consumer preference makes this future-proof</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Cold Beverage Cups: Your Options</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Clear PET Plastic Cups</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Crystal-clear plastic, similar to water bottles</li>
                  <li>Excellent for showcasing layered drinks, colorful beverages</li>
                  <li>Moderate pricing ($0.10-0.18 per cup)</li>
                  <li>Strong and durable, resistant to cracking</li>
                  <li>Recyclable (though recycling rates vary)</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bubble tea shops, juice bars, smoothie shops</li>
                  <li>Iced coffee with visual appeal (ombré, layered drinks)</li>
                  <li>Instagram-worthy presentations</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">PLA Compostable Clear Cups</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Plant-based plastic alternative (made from corn starch)</li>
                  <li>Clear like PET, but compostable</li>
                  <li>Premium pricing ($0.15-0.25 per cup)</li>
                  <li>Performs similarly to PET but eco-friendly</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Eco-conscious cafes wanting clear cups</li>
                  <li>Markets with commercial composting</li>
                  <li>Premium positioning with sustainability focus</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Considerations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sensitive to heat—not suitable for hot beverages</li>
                  <li>Maximum temperature around 110°F</li>
                  <li>Requires commercial composting to break down</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Paper Cold Cups</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Paper construction with waterproof lining</li>
                  <li>More eco-friendly perception than plastic</li>
                  <li>Good for custom printing and branding</li>
                  <li>Mid-range pricing ($0.12-0.20 per cup)</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cafes wanting consistent branding across hot and cold</li>
                  <li>Reducing plastic usage</li>
                  <li>Custom printed cups for brand visibility</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Sizing Strategy: What Sizes to Stock</h2>
              <p>
                Most coffee shops operate efficiently with 3-4 sizes. More variety complicates operations and inventory.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Standard hot cup size strategy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>8oz:</strong> Espresso drinks, cortados, small coffee (often skipped to simplify)</li>
                  <li><strong>12oz:</strong> Small/regular size for most drinks</li>
                  <li><strong>16oz:</strong> Large/medium size—most popular seller</li>
                  <li><strong>20oz:</strong> Extra large for high-volume customers</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Standard cold cup size strategy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>16oz:</strong> Standard iced drink size</li>
                  <li><strong>20oz:</strong> Large iced drinks</li>
                  <li><strong>24oz:</strong> Extra large for smoothies, blended drinks, bubble tea</li>
                </ul>
                <p className="mt-4">
                  <strong>Pro tip:</strong> Analyze your sales data. If 80% of orders are 16oz and 20oz, consider eliminating other sizes to reduce inventory complexity and increase purchasing power.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Lids: Critical Compatibility</h2>
              <p>
                The perfect cup with the wrong lid is a disaster. Leaks, spills, and poor fit frustrate customers and damage your reputation.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Hot Cup Lids</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Sip Lids (Dome Lids):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Raised dome with small sip hole</li>
                  <li>Allows room for foam on cappuccinos and lattes</li>
                  <li>Available in black or white plastic</li>
                  <li>Compostable CPLA options available</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Travel Lids (Reclosable):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Flip-top or slide closure for spill prevention</li>
                  <li>Better for on-the-go customers</li>
                  <li>Slightly higher cost but premium feel</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Flat Lids:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No dome, sip through small hole or use with straw</li>
                  <li>More compact for stacking and storage</li>
                  <li>Common for drip coffee</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Cold Cup Lids</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Dome Lids with Straw Slot:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High dome for whipped cream, toppings</li>
                  <li>X-slot or cross-cut for straw insertion</li>
                  <li>Clear PET or PLA material</li>
                  <li>Essential for frappés, smoothies, bubble tea</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Flat Lids with Straw Slot:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lower profile for standard iced drinks</li>
                  <li>More economical than dome lids</li>
                  <li>Better for simple iced coffee or tea</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Sip Lids (Strawless):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Raised lip for drinking without straw</li>
                  <li>Eco-friendly alternative to straw-slot lids</li>
                  <li>Growing popularity due to plastic straw bans</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Lid Compatibility Is Critical</h3>
              <p className="mt-3">
                <strong>Important:</strong> Not all lids fit all cups. Cup rim diameter varies by manufacturer. ALWAYS order lids and cups from the same supplier and verify compatibility before bulk ordering. Request samples and test fit before committing to large quantities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Cup Sleeves: When and Why</h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Benefits of cup sleeves:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Insulation for single-wall cups (allows customers to hold hot beverages)</li>
                  <li>Cost-effective alternative to double-wall cups</li>
                  <li>Excellent branding opportunity with custom printing</li>
                  <li>Made from corrugated cardboard or chipboard</li>
                  <li>Eco-friendly (recyclable and biodegradable)</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Cost comparison:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Single-wall cup ($0.10) + sleeve ($0.05) = $0.15 total</li>
                  <li>Double-wall cup (no sleeve needed) = $0.18-0.25</li>
                </ul>
                <p className="mt-4">
                  <strong>Decision factors:</strong> If cost is paramount, use single-wall + sleeves. If you want premium positioning and simplified operations, use double-wall cups without sleeves.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Custom Branding: Maximize Visibility</h2>
              <p>
                Coffee shop cups are mobile billboards. Customers carry them everywhere—offices, public transit, gyms, parks. Custom printing turns every cup into marketing.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">What to custom print:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Hot cups:</strong> Full wrap-around design or logo placement</li>
                  <li><strong>Cup sleeves:</strong> Most cost-effective custom printing option</li>
                  <li><strong>Cold cups:</strong> Branded designs for Instagram appeal</li>
                  <li><strong>Lids:</strong> Some suppliers offer custom printed lids</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Key elements to include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Logo and cafe name</li>
                  <li>Instagram handle (encourage social sharing)</li>
                  <li>Website or location</li>
                  <li>Tagline or mission statement</li>
                </ul>
              </div>
              <p className="mt-4">
                <Link href="/blog/custom-branded-packaging" className="text-ink underline hover:text-black font-medium">Read our complete guide to custom branded packaging →</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Cost Management Strategies</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">1. Calculate True Per-Drink Cost</h3>
              <p>
                Don't just look at cup cost—factor in lids, sleeves, and straws.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="mb-2"><strong>Example true cost calculation:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hot cup: $0.12</li>
                  <li>Lid: $0.04</li>
                  <li>Sleeve: $0.05</li>
                  <li><strong>Total per drink: $0.21</strong></li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">2. Buy in Bulk</h3>
              <p>
                Case quantities (typically 1,000 cups per case) offer significant savings. Calculate 2-3 months of usage and buy ahead if you have storage space.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">3. Standardize Sizes</h3>
              <p>
                Every additional size multiplies inventory complexity. Most successful coffee shops operate with 3 sizes maximum.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">4. Work with Wholesale Suppliers</h3>
              <p>
                Buying direct from wholesalers like Restaurant Supplies Direct saves 20-40% compared to retail foodservice suppliers.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">5. Don't Sacrifice Quality on Customer-Facing Items</h3>
              <p>
                Your cups represent your brand. A leaking lid or flimsy cup undermines premium coffee and can cost you repeat customers. This is not the place to cut corners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Sustainability Considerations</h2>
              <p>
                Coffee shop customers increasingly expect eco-friendly practices. Many cities now ban or tax single-use plastics.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Eco-friendly options ranked by impact:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Best:</strong> Reusable mugs (offer discount to encourage adoption)</li>
                  <li><strong>Very good:</strong> Compostable cups and lids (PLA or molded fiber)</li>
                  <li><strong>Good:</strong> Recyclable paper cups with minimal plastic lining</li>
                  <li><strong>Acceptable:</strong> Traditional paper cups (better than foam)</li>
                </ul>
              </div>
              <p className="mt-4">
                <Link href="/blog/eco-friendly-packaging-guide" className="text-ink underline hover:text-black font-medium">Read our complete eco-friendly packaging guide →</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Common Mistakes to Avoid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mixing cup and lid brands:</strong> Leads to poor fit, leaks, and customer frustration</li>
                <li><strong>Buying cheapest option for customer-facing items:</strong> Flimsy cups damage your premium positioning</li>
                <li><strong>Too many size options:</strong> Complicates operations and dilutes purchasing power</li>
                <li><strong>Not testing samples:</strong> Always test with actual beverages before bulk orders</li>
                <li><strong>Ignoring local regulations:</strong> Some cities ban foam, require compostable, or tax disposables</li>
                <li><strong>Overlooking storage space:</strong> Bulk cups require significant storage</li>
                <li><strong>Forgetting about straws:</strong> Budget for straws when calculating cold drink costs</li>
              </ul>
            </section>

            <div className="bg-black text-white p-8 rounded-xl my-8">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Ready to Upgrade Your Coffee Shop Supplies?
              </h3>
              <p className="mb-6">
                Browse our complete selection of hot cups, cold cups, lids, sleeves, and custom printing options. Wholesale pricing with fast shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cups-and-lids"
                  className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
                >
                  Shop Cups & Lids
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors text-center"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">The Bottom Line</h2>
              <p>
                Cup and lid selection directly impacts customer satisfaction, brand perception, and operating costs. Invest in quality for customer-facing items, standardize sizes to simplify operations, and consider eco-friendly options to meet growing consumer expectations.
              </p>
              <p className="mt-3">
                The right cup strategy balances cost efficiency with quality and branding. Test samples, buy in bulk, and work with reliable wholesale suppliers to maximize value.
              </p>
              <p className="mt-3">
                Remember: Every cup that leaves your shop represents your brand. Make it count.
              </p>
            </section>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-heading font-bold text-ink mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/blog/restaurant-disposables-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-ink mb-1">Complete Guide to Restaurant Disposables</p>
                <p className="text-sm text-ink-muted">Essential guide to choosing disposables for your restaurant</p>
              </Link>
              <Link href="/blog/custom-branded-packaging" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-ink mb-1">Custom Branded Packaging: Build Your Brand Identity</p>
                <p className="text-sm text-ink-muted">Turn takeout into marketing with custom printing</p>
              </Link>
              <Link href="/blog/eco-friendly-packaging-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-ink mb-1">Complete Guide to Eco-Friendly Restaurant Packaging</p>
                <p className="text-sm text-ink-muted">Everything you need to know about sustainable packaging options</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
