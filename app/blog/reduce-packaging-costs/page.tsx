import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "5 Ways to Reduce Restaurant Packaging Costs Without Sacrificing Quality | Restaurant Supplies Direct",
  description: "Practical strategies to lower your packaging expenses while maintaining the quality your customers expect.",
  openGraph: {
    title: "5 Ways to Reduce Restaurant Packaging Costs Without Sacrificing Quality",
    description: "Practical strategies to lower your packaging expenses while maintaining the quality your customers expect.",
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
          { name: "Reduce Packaging Costs", url: "https://restaurantsuppliesdirect.com/blog/reduce-packaging-costs" },
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
          <span className="text-ink">Reduce Packaging Costs</span>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-ink-muted mb-4">
            <span className="px-3 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
              Tips
            </span>
            <time dateTime="2025-10-05">October 5, 2025</time>
            <span>•</span>
            <span>4 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4 leading-tight">
            5 Ways to Reduce Restaurant Packaging Costs Without Sacrificing Quality
          </h1>

          <p className="text-xl text-ink-muted">
            Practical strategies to lower your packaging expenses while maintaining the quality your customers expect.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-ink-muted mb-8 leading-relaxed">
            Packaging costs can eat into your profit margins, but cutting corners on quality can damage your reputation. Here are five proven strategies to reduce packaging expenses while keeping customers happy.
          </p>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            1. Buy in Bulk and Plan Inventory
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Purchasing packaging supplies in larger quantities significantly reduces per-unit costs. A case of 500 containers typically costs 20-40% less per unit than smaller quantities.
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Calculate your monthly usage:</strong> Track how many containers you use per day and multiply by 30</li>
            <li><strong className="text-ink">Order quarterly:</strong> Three-month supplies balance storage space with cost savings</li>
            <li><strong className="text-ink">Negotiate with suppliers:</strong> Many offer discounts for regular, scheduled orders</li>
            <li><strong className="text-ink">Split bulk orders:</strong> Partner with nearby restaurants to share case quantities</li>
          </ul>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Storage tip: Stack cases vertically and rotate stock to prevent waste from expired or damaged inventory.
          </p>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            2. Standardize Container Sizes
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Using too many different container sizes increases costs and complicates inventory management. Most restaurants can operate efficiently with 3-4 standard sizes.
          </p>
          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <h3 className="font-heading font-bold text-ink text-xl mb-4">Recommended Setup</h3>
            <ul className="text-ink-muted space-y-3">
              <li><strong className="text-ink">Small (16 oz):</strong> Sides, soups, small portions</li>
              <li><strong className="text-ink">Medium (24-32 oz):</strong> Single entrées, salads</li>
              <li><strong className="text-ink">Large (38-48 oz):</strong> Large entrées, sharing portions</li>
              <li><strong className="text-ink">Portion cups (2-4 oz):</strong> Sauces and dressings</li>
            </ul>
          </div>
          <p className="text-ink-muted mb-6 leading-relaxed">
            This approach allows bulk purchasing of fewer SKUs, reduces training complexity, and simplifies reordering.
          </p>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            3. Choose Cost-Effective Materials
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Different materials have vastly different price points. Match the material to the specific needs of each menu item rather than using premium materials for everything.
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Paperboard for dry items:</strong> Sandwiches, wraps, and baked goods don't need expensive plastic containers</li>
            <li><strong className="text-ink">Foam for hot entrées:</strong> Despite environmental concerns, foam remains the most cost-effective option for insulation where legal</li>
            <li><strong className="text-ink">Molded fiber for eco-conscious items:</strong> Reserve pricier compostable materials for premium menu items that justify the cost</li>
            <li><strong className="text-ink">Generic plastic for salads:</strong> Clear PET containers showcase food without expensive branding</li>
          </ul>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            4. Reduce Bag Usage with Smart Policies
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Bags represent a significant hidden cost. Implement these policies to reduce unnecessary bag usage:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li><strong className="text-ink">Ask before bagging:</strong> Single items often don't need bags</li>
            <li><strong className="text-ink">Right-size your bags:</strong> Use the smallest bag that safely fits the order</li>
            <li><strong className="text-ink">Offer incentives:</strong> Small discounts for customers who decline bags</li>
            <li><strong className="text-ink">Use paper over plastic:</strong> Paper bags cost less and appeal to eco-conscious customers</li>
            <li><strong className="text-ink">Bundle orders efficiently:</strong> Train staff to consolidate multiple items into fewer bags</li>
          </ul>
          <p className="text-ink-muted mb-6 leading-relaxed">
            A restaurant using 100 bags daily can save over $1,500 annually by reducing usage by just 20%.
          </p>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            5. Eliminate Unnecessary Extras
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Automatically including napkins, utensils, and condiments with every order wastes money and frustrates customers who don't need them.
          </p>
          <div className="bg-bg-muted p-6 rounded-xl border border-border mb-8">
            <h3 className="font-heading font-bold text-ink text-xl mb-4">Opt-In Approach</h3>
            <p className="text-ink-muted mb-4">
              Switch to an opt-in system for extras:
            </p>
            <ul className="text-ink-muted space-y-2">
              <li>Add checkboxes in online ordering for utensils, napkins, and condiments</li>
              <li>Ask in-person customers if they need extras</li>
              <li>Provide self-service stations for dine-in and pickup</li>
              <li>Include only what's necessary for the specific order</li>
            </ul>
          </div>
          <p className="text-ink-muted mb-6 leading-relaxed">
            This approach can reduce disposable utensil costs by 40-60% while aligning with sustainability trends.
          </p>

          <div className="bg-white p-8 rounded-2xl border-2 border-brand-orange my-12 shadow-md">
            <h3 className="font-heading font-bold text-ink text-2xl mb-4">
              Ready to Cut Costs?
            </h3>
            <p className="text-ink-muted mb-6">
              Shop our wholesale restaurant supplies and save on bulk orders. Free shipping on orders over $500.
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-black text-white font-heading font-semibold rounded-xl hover:bg-zinc-900 transition-colors shadow-lg"
            >
              Browse All Products
            </Link>
          </div>

          <h2 className="text-3xl font-heading font-bold text-ink mt-12 mb-4">
            Track Your Savings
          </h2>
          <p className="text-ink-muted mb-6 leading-relaxed">
            Implement these strategies gradually and measure results monthly. Track your cost per order for packaging and aim to reduce it by 15-25% over six months without compromising quality.
          </p>
          <p className="text-ink-muted leading-relaxed">
            Key metrics to monitor:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink-muted space-y-2">
            <li>Average packaging cost per order</li>
            <li>Number of containers used per day</li>
            <li>Bag usage rate (bags per 100 orders)</li>
            <li>Customer satisfaction scores related to packaging</li>
          </ul>

          <p className="text-ink-muted leading-relaxed">
            Need help calculating potential savings? <Link href="/contact" className="text-black hover:text-zinc-900 underline font-semibold">Contact us</Link> for a free packaging cost analysis.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="font-heading font-bold text-ink text-2xl mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog/choosing-takeout-containers"
              className="p-6 bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all"
            >
              <h4 className="font-heading font-bold text-ink mb-2">
                How to Choose the Right Takeout Containers
              </h4>
              <p className="text-sm text-ink-muted">5 min read</p>
            </Link>
            <Link
              href="/blog/eco-friendly-packaging-guide"
              className="p-6 bg-white rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all"
            >
              <h4 className="font-heading font-bold text-ink mb-2">
                Complete Guide to Eco-Friendly Restaurant Packaging
              </h4>
              <p className="text-sm text-ink-muted">7 min read</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
