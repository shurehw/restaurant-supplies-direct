import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How to Choose the Right Takeout Containers | Restaurant Supplies Direct",
  description: "Complete guide to selecting the best takeout containers for your restaurant. Compare materials, sizes, costs, and eco-friendly options.",
  openGraph: {
    title: "How to Choose the Right Takeout Containers",
    description: "Complete guide to selecting the best takeout containers for your restaurant.",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-bg">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://restaurantsuppliesdirect.com" },
          { name: "Blog", url: "https://restaurantsuppliesdirect.com/blog" },
          { name: "Choosing Takeout Containers", url: "https://restaurantsuppliesdirect.com/blog/choosing-takeout-containers" },
        ]}
      />

      <Header />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-ink-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-ink transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-ink">Choosing Takeout Containers</span>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-ink-muted mb-4">
            <span className="px-3 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
              Buying Guide
            </span>
            <time dateTime="2025-10-10">October 10, 2025</time>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4 leading-tight">
            How to Choose the Right Takeout Containers for Your Restaurant
          </h1>

          <p className="text-xl text-ink-muted">
            A comprehensive guide to selecting takeout containers based on your menu, budget, and sustainability goals.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            1. Consider Your Menu Items
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Different foods require different container types. Hot, saucy dishes need leak-resistant containers with secure lids, while salads and cold items can use lighter materials. Match your container to your food:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Hot entrées:</strong> Foam or paperboard containers with tight-fitting lids</li>
            <li><strong className="text-ink">Soups and saucy items:</strong> Plastic deli containers or microwaveable bowls with snap lids</li>
            <li><strong className="text-ink">Sandwiches and wraps:</strong> Hinged clamshell containers or paper wraps</li>
            <li><strong className="text-ink">Salads:</strong> Clear plastic containers to showcase freshness</li>
            <li><strong className="text-ink">Fried foods:</strong> Vented containers to prevent sogginess</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            2. Material Options Compared
          </h2>
          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <h3 className="font-heading font-bold text-ink text-xl mb-4">Foam (Polystyrene)</h3>
            <p className="text-ink-muted mb-2"><strong className="text-ink">Pros:</strong> Excellent insulation, lightweight, low cost</p>
            <p className="text-ink-muted mb-4"><strong className="text-ink">Cons:</strong> Not eco-friendly, banned in some cities</p>

            <h3 className="font-heading font-bold text-ink text-xl mb-4 mt-6">Paper/Paperboard</h3>
            <p className="text-ink-muted mb-2"><strong className="text-ink">Pros:</strong> Recyclable, biodegradable, good for dry/low-moisture foods</p>
            <p className="text-ink-muted mb-4"><strong className="text-ink">Cons:</strong> Not leak-proof, can get soggy</p>

            <h3 className="font-heading font-bold text-ink text-xl mb-4 mt-6">Plastic (PET, PP)</h3>
            <p className="text-ink-muted mb-2"><strong className="text-ink">Pros:</strong> Leak-resistant, clear for visibility, microwaveable (PP)</p>
            <p className="text-ink-muted mb-4"><strong className="text-ink">Cons:</strong> Environmental concerns, higher cost</p>

            <h3 className="font-heading font-bold text-ink text-xl mb-4 mt-6">Compostable (Molded Fiber, PLA)</h3>
            <p className="text-ink-muted mb-2"><strong className="text-ink">Pros:</strong> Eco-friendly, appeals to conscious consumers</p>
            <p className="text-ink-muted"><strong className="text-ink">Cons:</strong> Higher cost, requires commercial composting</p>
          </div>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            3. Size Matters
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Common takeout container sizes range from 8 oz to 64 oz. Standard sizes include:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">8-12 oz:</strong> Sides, sauces, small portions</li>
            <li><strong className="text-ink">16-24 oz:</strong> Single entrées, large sides</li>
            <li><strong className="text-ink">32-38 oz:</strong> Large entrées, family-style portions</li>
            <li><strong className="text-ink">48-64 oz:</strong> Sharing platters, catering orders</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            4. Cost Considerations
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Container costs typically range from $0.10 to $1.50+ per unit depending on material, size, and customization. Calculate your cost per order and factor it into menu pricing. Buying by the case (typically 100-500 units) provides the best value.
          </p>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            5. Sustainability & Local Regulations
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Many cities have banned foam containers and single-use plastics. Check local regulations before ordering. Eco-friendly options include:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li>BPI-certified compostable containers</li>
            <li>Molded fiber (sugarcane/bagasse)</li>
            <li>Recyclable paperboard with PE coating</li>
            <li>Plant-based PLA containers</li>
          </ul>

          <div className="bg-white p-8 rounded-2xl border-2 border-brand-orange my-12 shadow-md">
            <h3 className="font-heading font-bold text-ink text-2xl mb-4">
              Ready to Order?
            </h3>
            <p className="text-ink-muted mb-6">
              Browse our complete selection of takeout containers with wholesale pricing and fast shipping. Orders ship within 1-3 business days.
            </p>
            <Link
              href="/takeout-containers"
              className="inline-block px-8 py-4 bg-black text-white font-heading font-semibold rounded-xl hover:bg-zinc-900 transition-colors shadow-lg"
            >
              Shop Takeout Containers
            </Link>
          </div>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Final Recommendations
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            For most restaurants, we recommend starting with a variety pack to test different materials and sizes with your menu. Popular combinations include:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li>Hinged foam clamshells (8x8) for hot entrées</li>
            <li>Clear plastic deli containers (16-32 oz) for salads and cold items</li>
            <li>Paper food trays for sandwiches and wraps</li>
            <li>Portion cups (2-4 oz) for sauces and sides</li>
          </ul>

          <p className="text-ink-muted leading-relaxed">
            Have questions about which containers are right for your menu? <Link href="/contact" className="text-black hover:text-zinc-900 underline font-semibold">Contact our team</Link> for personalized recommendations.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="font-heading font-bold text-ink text-2xl mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog/eco-friendly-packaging-guide"
              className="p-6 bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all"
            >
              <h4 className="font-heading font-bold text-ink mb-2">
                Complete Guide to Eco-Friendly Restaurant Packaging
              </h4>
              <p className="text-sm text-ink-muted">7 min read</p>
            </Link>
            <Link
              href="/blog/reduce-packaging-costs"
              className="p-6 bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all"
            >
              <h4 className="font-heading font-bold text-ink mb-2">
                5 Ways to Reduce Packaging Costs
              </h4>
              <p className="text-sm text-ink-muted">4 min read</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
