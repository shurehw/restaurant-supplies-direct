import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Napkins, Towels, and Paper Products: Choosing Quality for Your Restaurant | RSD Blog",
  description: "Complete guide to selecting napkins, paper towels, and paper products for restaurants. Balance quality, cost, and customer satisfaction.",
  keywords: ["restaurant napkins", "paper towels", "paper products", "beverage napkins", "dinner napkins", "dispenser napkins", "restaurant paper supplies"],
};

export default function NapkinsPaperProductsGuide() {
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
                Restaurant Supplies
              </span>
              <time dateTime="2025-10-16">Oct 16, 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4 leading-tight">
              Napkins, Towels, and Paper Products: Choosing the Right Quality for Your Restaurant
            </h1>
            <p className="text-lg text-ink-muted">
              Master the art of selecting paper products that balance cost efficiency with customer satisfaction. Small differences add up to big savings.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1200&auto=format&fit=crop"
              alt="Restaurant napkins and paper products"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-ink-muted space-y-6">
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Why Paper Products Matter</h2>
              <p>
                Napkins and paper products are often treated as afterthoughts in restaurant planning, but they're high-volume, high-frequency purchases that directly impact both customer experience and your bottom line.
              </p>
              <p>
                Consider: A restaurant serving 200 customers per day uses approximately 600 napkins daily (3 per customer average). At just $0.02 per napkin, that's $12/day or $4,380/year. Switch to a $0.03 napkin and you've added $2,190 in annual costs. Conversely, choose a $0.015 napkin and save $1,095 annually.
              </p>
              <p>
                The key is finding the sweet spot where quality meets economy—good enough to satisfy customers without overpaying for features they don't value.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Types of Napkins: Understanding Your Options</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Beverage Napkins (Cocktail Napkins)</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Specifications:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Size:</strong> Typically 5" × 5" (quarter-fold results in 2.5" × 2.5")</li>
                  <li><strong>Ply:</strong> 1-ply or 2-ply</li>
                  <li><strong>Material:</strong> Virgin or recycled paper</li>
                  <li><strong>Colors:</strong> White, black, kraft, or custom colors</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bars and cocktail service</li>
                  <li>Coffee shops and cafes</li>
                  <li>Light snacks and appetizers</li>
                  <li>Beverage service in any setting</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Cost range:</p>
                <p>$0.01-0.03 per napkin depending on ply count and quality</p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Lunch/Dinner Napkins</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Specifications:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Size:</strong> 6.5" × 6.5" to 7" × 7" (larger than beverage napkins)</li>
                  <li><strong>Ply:</strong> 1-ply or 2-ply</li>
                  <li><strong>Fold:</strong> Quarter-fold most common</li>
                  <li><strong>Texture:</strong> Smooth or embossed for premium feel</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full-service restaurants</li>
                  <li>Takeout and delivery orders</li>
                  <li>Fast-casual dining</li>
                  <li>Any meal service beyond beverages</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Cost range:</p>
                <p>$0.015-0.04 per napkin</p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Dispenser Napkins</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Specifications:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fold types:</strong> Interfold (pop-up), tall-fold, or low-fold</li>
                  <li><strong>Sizes:</strong> Various, typically 6.5" × 8.5" to 7" × 13.5"</li>
                  <li><strong>Dispensing:</strong> One-at-a-time pull from counter dispensers</li>
                  <li><strong>Ply:</strong> 1-ply most common (cost efficiency)</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Quick-service restaurants (QSR)</li>
                  <li>Food courts and cafeterias</li>
                  <li>Self-service condiment stations</li>
                  <li>High-traffic areas</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Advantages:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduces waste (customers take only what they need)</li>
                  <li>More sanitary (one-at-a-time dispensing)</li>
                  <li>Cleaner presentation than stacks</li>
                  <li>Cost-effective for high-volume operations</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Cost range:</p>
                <p>$0.01-0.025 per napkin</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Understanding Ply Count</h2>
              <p>
                "Ply" refers to the number of layers. More plies generally mean more absorbency, strength, and perceived quality—but also higher cost.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">1-Ply Napkins</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Single layer of paper</li>
                  <li>Thin and economical</li>
                  <li>Less absorbent than 2-ply</li>
                  <li>Can feel cheap if quality is too low</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High-volume, cost-conscious operations</li>
                  <li>Dispenser napkins (where volume matters more than luxury)</li>
                  <li>Light-duty use (beverages, light snacks)</li>
                </ul>
                <p className="mt-3">
                  <strong>Cost savings:</strong> Typically 30-50% cheaper than equivalent 2-ply
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">2-Ply Napkins</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Two layers bonded together</li>
                  <li>More absorbent and stronger</li>
                  <li>Feels more substantial and premium</li>
                  <li>Better for messy foods</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full-service restaurants wanting quality feel</li>
                  <li>Messy foods (BBQ, wings, burgers)</li>
                  <li>Premium positioning</li>
                  <li>Customer-facing table service</li>
                </ul>
                <p className="mt-3">
                  <strong>Quality perception:</strong> Customers perceive 2-ply as higher quality, which can support premium pricing for your meals
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Making the Decision</h3>
              <p>
                <strong>Rule of thumb:</strong> Use 2-ply for customer-facing table service where quality matters. Use 1-ply for self-service dispensers where quantity and cost efficiency matter more.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Paper Towels for Kitchen Use</h2>
              <p>
                Unlike napkins, paper towels are back-of-house supplies where absorbency and strength matter more than appearance.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Multi-Fold Towels</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>C-fold, Z-fold, or M-fold</li>
                  <li>Dispensed one at a time from wall-mounted dispensers</li>
                  <li>Typical size: 9.5" × 13" (varies)</li>
                  <li>Used in restrooms and hand-washing stations</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Employee hand-washing stations</li>
                  <li>Public restrooms</li>
                  <li>Hand-drying throughout facility</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Roll Towels (Hardwound or Center-Pull)</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Characteristics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Continuous roll in dispenser</li>
                  <li>Hardwound (pull from outside) or center-pull</li>
                  <li>Larger capacity = less frequent refilling</li>
                  <li>Cost-effective for high-volume use</li>
                </ul>
                <p className="font-semibold text-ink mb-2 mt-4">Best for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kitchen prep areas</li>
                  <li>Cleaning and spill cleanup</li>
                  <li>High-traffic restrooms</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Selecting Kitchen Paper Towels</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Key factors:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Absorbency:</strong> More important than softness for kitchen use</li>
                  <li><strong>Strength (wet and dry):</strong> Needs to hold up when wet</li>
                  <li><strong>Ply count:</strong> 1-ply for economy, 2-ply for better performance</li>
                  <li><strong>Roll size:</strong> Larger rolls = fewer change-outs</li>
                  <li><strong>Dispenser compatibility:</strong> Ensure towels fit your dispensers</li>
                </ul>
              </div>
              <p className="mt-4">
                <strong>Don't skimp on kitchen towels:</strong> Cheap towels that tear or fail to absorb end up costing more because staff use multiple sheets. Mid-grade quality usually offers best value.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Other Essential Paper Products</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Toilet Paper</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard rolls:</strong> For home-style dispensers</li>
                  <li><strong>Jumbo rolls:</strong> High-capacity for commercial restrooms</li>
                  <li><strong>Ply count:</strong> 1-ply for economy, 2-ply for comfort</li>
                  <li><strong>Sheet count:</strong> Higher count = fewer change-outs</li>
                </ul>
                <p className="mt-3">
                  <strong>Customer-facing restrooms:</strong> Use at least 2-ply. Employee restrooms can use 1-ply if budget is tight.
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Butcher Paper / Basket Liners</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lines baskets and trays for casual dining presentation</li>
                  <li>Wraps sandwiches, subs, and deli items</li>
                  <li>Available in white, kraft, or custom printed</li>
                  <li>Comes in sheets or rolls</li>
                </ul>
                <p className="mt-3">
                  <strong>Popular with:</strong> BBQ joints, burger restaurants, sandwich shops, food trucks
                </p>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">Parchment Paper</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Non-stick surface for baking</li>
                  <li>Grease-resistant for food wrapping</li>
                  <li>Heat-resistant</li>
                  <li>Can be custom printed for branding</li>
                </ul>
                <p className="mt-3">
                  <strong>Uses:</strong> Lining baking sheets, wrapping sandwiches, lining baskets, separating baked goods
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Custom Printed Napkins: Brand Building</h2>
              <p>
                Custom printed napkins are an affordable branding opportunity. Every customer touches your napkin multiple times during a meal—it's a marketing touchpoint.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Benefits of custom printing:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reinforces brand identity at every table</li>
                  <li>Professional appearance</li>
                  <li>Can include website, social media, promotions</li>
                  <li>Relatively low cost compared to other marketing</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">What to print:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Logo and restaurant name</li>
                  <li>Website or Instagram handle</li>
                  <li>Tagline or mission statement</li>
                  <li>QR code for menu, reviews, or loyalty program</li>
                </ul>
                <p className="font-semibold text-ink mb-3 mt-4">Cost considerations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Setup fees typically $50-200 (one-time)</li>
                  <li>Minimum orders usually 5,000-10,000 napkins</li>
                  <li>Cost premium: ~$0.01-0.02 per napkin over generic</li>
                  <li>Single-color printing is most economical</li>
                </ul>
              </div>
              <p className="mt-4">
                <Link href="/blog/custom-branded-packaging" className="text-ink underline hover:text-black font-medium">Learn more about custom branded packaging →</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Cost Management Strategies</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">1. Calculate True Cost Per Use</h3>
              <p>
                Don't just look at case price. Calculate cost per napkin and estimate monthly usage to understand true impact.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="mb-2"><strong>Example calculation:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>200 customers per day × 3 napkins each = 600 napkins daily</li>
                  <li>600 × 30 days = 18,000 napkins monthly</li>
                  <li>Option A: $0.02 per napkin = $360/month</li>
                  <li>Option B: $0.03 per napkin = $540/month</li>
                  <li><strong>Annual difference: $2,160</strong></li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">2. Buy in Bulk</h3>
              <p>
                Paper products have long shelf life. Buying in case quantities (or pallet quantities for large operations) saves 15-30%.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">3. Use Dispensers to Reduce Waste</h3>
              <p>
                Customers take 2-3× more napkins from a stack than from a one-at-a-time dispenser. Dispensers reduce waste significantly.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">4. Match Quality to Use Case</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Premium:</strong> Table service napkins (2-ply, nice texture)</li>
                  <li><strong>Mid-grade:</strong> Takeout napkins, casual dining (1-ply or 2-ply)</li>
                  <li><strong>Economy:</strong> Dispenser napkins for self-service (1-ply)</li>
                </ul>
              </div>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-6">5. Train Staff on Portion Control</h3>
              <p>
                Staff handing out 10 napkins per order wastes money. Train them to include 2-3 napkins and let customers request more if needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Sustainability Considerations</h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-border my-4">
                <p className="font-semibold text-ink mb-3">Eco-friendly paper product options:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Recycled content:</strong> Made from post-consumer waste, reduces virgin tree use</li>
                  <li><strong>Unbleached/kraft:</strong> Natural brown color, less chemical processing</li>
                  <li><strong>FSC-certified:</strong> Sourced from responsibly managed forests</li>
                  <li><strong>Compostable:</strong> Breaks down in composting facilities</li>
                  <li><strong>Bamboo/alternative fibers:</strong> Rapidly renewable resources</li>
                </ul>
                <p className="mt-4">
                  <strong>Cost impact:</strong> Eco-friendly options typically cost 10-20% more, but many customers value sustainability and it can differentiate your brand.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Common Mistakes to Avoid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Buying cheapest option for customer-facing items:</strong> Thin, rough napkins create negative perception of your restaurant</li>
                <li><strong>Over-provisioning napkins:</strong> Don't hand out excessive napkins—it's wasteful and expensive</li>
                <li><strong>Not using dispensers:</strong> Stacks of napkins lead to customers taking handfuls unnecessarily</li>
                <li><strong>Mixing sizes inappropriately:</strong> Tiny beverage napkins for messy meals frustrate customers</li>
                <li><strong>Running out:</strong> Always maintain adequate stock—emergency orders cost more</li>
                <li><strong>Ignoring storage conditions:</strong> Paper products absorb moisture and deteriorate if stored improperly</li>
                <li><strong>Not tracking usage:</strong> Monitor consumption to identify waste and optimize ordering</li>
              </ul>
            </section>

            <div className="bg-black text-white p-8 rounded-xl my-8">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Ready to Optimize Your Paper Product Costs?
              </h3>
              <p className="mb-6">
                Browse our complete selection of napkins, paper towels, and paper products. Wholesale pricing with bulk discounts available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/napkins-and-towels"
                  className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
                >
                  Shop Napkins & Paper Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">The Bottom Line</h2>
              <p>
                Napkins and paper products are high-volume purchases where small differences in unit cost create significant annual impact. The key is matching quality level to use case—premium for customer-facing items, economy for back-of-house.
              </p>
              <p className="mt-3">
                Calculate true monthly costs, buy in bulk, use dispensers to reduce waste, and work with wholesale suppliers to maximize value. Don't sacrifice quality on customer-facing items, but don't overpay for features customers don't value.
              </p>
              <p className="mt-3">
                Paper products might seem mundane, but smart purchasing decisions in this category can save thousands annually while maintaining or improving customer satisfaction.
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
              <Link href="/blog/reduce-packaging-costs" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-ink mb-1">5 Ways to Reduce Packaging Costs</p>
                <p className="text-sm text-ink-muted">Smart strategies to lower your disposables expenses</p>
              </Link>
              <Link href="/blog/custom-branded-packaging" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-ink mb-1">Custom Branded Packaging: Build Your Brand Identity</p>
                <p className="text-sm text-ink-muted">Turn packaging into marketing with custom printing</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
