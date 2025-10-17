import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Complete Guide to Eco-Friendly Restaurant Packaging | RSD Blog",
  description: "Everything you need to know about compostable, biodegradable, and recyclable packaging options for your restaurant.",
  keywords: ["eco-friendly packaging", "compostable containers", "sustainable restaurant supplies", "biodegradable packaging"],
};

export default function EcoFriendlyPackagingGuide() {
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
              <span className="px-3 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
                Sustainability
              </span>
              <time dateTime="2025-10-08">Oct 8, 2025</time>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4 leading-tight">
              Complete Guide to Eco-Friendly Restaurant Packaging
            </h1>
            <p className="text-lg text-ink-muted">
              Everything you need to know about compostable, biodegradable, and recyclable packaging options for your restaurant.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop"
              alt="Eco-friendly compostable packaging and containers"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-ink-muted space-y-6">
            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Why Eco-Friendly Packaging Matters</h2>
              <p>
                As consumer awareness grows, restaurants face increasing pressure to reduce their environmental impact. Eco-friendly packaging isn't just good for the planet—it's becoming a competitive advantage. Studies show that 73% of diners prefer restaurants that use sustainable packaging.
              </p>
              <p>
                But navigating the world of "green" packaging can be confusing. Terms like compostable, biodegradable, and recyclable are often used interchangeably, but they mean very different things.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Understanding the Terms</h2>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Compostable</h3>
              <p>
                Compostable packaging breaks down into organic matter within a specific timeframe (usually 90-180 days) in commercial composting facilities. Look for BPI or CMA certification to ensure products meet ASTM D6400 or D6868 standards.
              </p>
              <p className="mt-3">
                <strong>Best for:</strong> Markets with commercial composting infrastructure (San Francisco, Seattle, Portland, NYC, etc.)
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Biodegradable</h3>
              <p>
                Biodegradable means a product will eventually break down naturally, but there's no set timeframe. Without certification, "biodegradable" claims can be misleading—some products take decades to decompose.
              </p>
              <p className="mt-3">
                <strong>Best for:</strong> Generally, opt for certified compostable instead unless biodegradable products meet specific certifications.
              </p>

              <h3 className="text-xl font-heading font-semibold text-ink mb-2 mt-4">Recyclable</h3>
              <p>
                Recyclable packaging can be processed and turned into new products. However, recycling infrastructure varies widely. Just because something is recyclable doesn't mean it will be recycled in your area.
              </p>
              <p className="mt-3">
                <strong>Best for:</strong> Paper-based packaging in areas with strong recycling programs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Best Eco-Friendly Options by Product Type</h2>

              <div className="bg-bg-muted p-6 rounded-xl border border-border my-6">
                <h3 className="text-lg font-heading font-semibold text-ink mb-3">Takeout Containers</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Molded fiber (bagasse):</strong> Made from sugarcane waste, fully compostable, heat-resistant</li>
                  <li><strong>PLA-lined paper:</strong> Compostable in commercial facilities, good for liquids</li>
                  <li><strong>Unbleached kraft paperboard:</strong> Recyclable, good for dry foods</li>
                </ul>
              </div>

              <div className="bg-bg-muted p-6 rounded-xl border border-border my-6">
                <h3 className="text-lg font-heading font-semibold text-ink mb-3">Cups & Lids</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>PLA cold cups:</strong> Compostable alternative to plastic, clear like PET</li>
                  <li><strong>Paper hot cups with PLA lining:</strong> Compostable, insulated options available</li>
                  <li><strong>Fiber lids:</strong> Compostable alternative to plastic lids</li>
                </ul>
              </div>

              <div className="bg-bg-muted p-6 rounded-xl border border-border my-6">
                <h3 className="text-lg font-heading font-semibold text-ink mb-3">Cutlery & Straws</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CPLA cutlery:</strong> Crystallized PLA, heat-resistant and compostable</li>
                  <li><strong>Birchwood cutlery:</strong> Compostable, premium feel</li>
                  <li><strong>Paper straws:</strong> Widely available, though durability varies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Cost Considerations</h2>
              <p>
                Eco-friendly packaging typically costs 10-30% more than conventional plastic. However, costs have been declining as production scales up and more suppliers enter the market.
              </p>
              <p className="mt-3">
                <strong>Ways to offset costs:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Buy in bulk to get volume discounts</li>
                <li>Use eco-friendly packaging as a marketing differentiator to justify slight price increases</li>
                <li>Start with high-visibility items (cups, bags) and gradually transition other products</li>
                <li>Consider dual-use items that eliminate the need for separate packaging</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Local Regulations</h2>
              <p>
                Many cities and states have banned single-use plastics or mandated compostable alternatives. Check your local regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>California:</strong> Many cities require compostable food serviceware</li>
                <li><strong>New York City:</strong> Foam ban in effect since 2019</li>
                <li><strong>Seattle:</strong> Compostable or recyclable food packaging required</li>
                <li><strong>Portland:</strong> Expanded polystyrene (foam) banned</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Making the Transition</h2>
              <p>
                <strong>Start small:</strong> Don't try to switch everything at once. Begin with one category (like cups or takeout containers) and gradually expand.
              </p>
              <p className="mt-3">
                <strong>Educate your team:</strong> Staff should understand the benefits and be able to communicate them to customers.
              </p>
              <p className="mt-3">
                <strong>Communicate to customers:</strong> Let diners know you use eco-friendly packaging. Add it to your website, menu, and social media.
              </p>
              <p className="mt-3">
                <strong>Partner with composting services:</strong> If you're using compostable packaging, consider offering composting services or partnering with local programs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">Common Pitfalls to Avoid</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Greenwashing:</strong> Don't claim something is eco-friendly without proper certification</li>
                <li><strong>Mixing materials:</strong> PLA lids on paper cups can contaminate recycling streams</li>
                <li><strong>Ignoring local infrastructure:</strong> Compostable packaging only works if composting facilities exist in your area</li>
                <li><strong>Focusing only on packaging:</strong> Also consider waste reduction strategies like reusables for dine-in</li>
              </ul>
            </section>

            <div className="bg-white p-8 rounded-xl border-2 border-brand-orange my-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">
                Ready to Make the Switch?
              </h3>
              <p className="text-ink-muted mb-6">
                Browse our complete selection of certified compostable and eco-friendly packaging.
              </p>
              <Link
                href="/eco-friendly"
                className="inline-block px-8 py-4 bg-black text-white font-heading font-semibold rounded-xl hover:bg-zinc-900 transition-colors shadow-lg"
              >
                Shop Eco-Friendly Products
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-heading font-bold text-ink mb-3">The Bottom Line</h2>
              <p>
                Eco-friendly packaging isn't a trend—it's becoming the standard. While it may cost slightly more upfront, the benefits in brand reputation, customer loyalty, and regulatory compliance make it a smart long-term investment.
              </p>
              <p className="mt-3">
                The key is choosing the right materials for your specific needs and ensuring you have the infrastructure to properly dispose of them.
              </p>
            </section>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-heading font-bold text-ink mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/blog/choosing-takeout-containers" className="block p-4 bg-bg-muted rounded-lg hover:bg-bg transition-colors">
                <p className="font-semibold text-ink mb-1">How to Choose the Right Takeout Containers</p>
                <p className="text-sm text-ink-muted">A comprehensive guide to selecting containers for your menu</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
