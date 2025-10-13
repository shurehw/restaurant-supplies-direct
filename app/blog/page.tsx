import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Restaurant Supply Tips & Guides | Restaurant Supplies Direct Blog",
  description: "Expert guides on choosing restaurant disposables, packaging tips, sustainability in food service, and industry insights.",
  openGraph: {
    title: "Restaurant Supply Tips & Guides",
    description: "Expert guides on choosing restaurant disposables and packaging tips.",
    type: "website",
  },
};

const blogPosts = [
  {
    slug: "choosing-takeout-containers",
    title: "How to Choose the Right Takeout Containers for Your Restaurant",
    excerpt: "A comprehensive guide to selecting takeout containers based on your menu, budget, and sustainability goals.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "2025-10-10",
  },
  {
    slug: "eco-friendly-packaging-guide",
    title: "Complete Guide to Eco-Friendly Restaurant Packaging",
    excerpt: "Everything you need to know about compostable, biodegradable, and recyclable packaging options for your restaurant.",
    category: "Sustainability",
    readTime: "7 min read",
    date: "2025-10-08",
  },
  {
    slug: "reduce-packaging-costs",
    title: "5 Ways to Reduce Restaurant Packaging Costs Without Sacrificing Quality",
    excerpt: "Practical strategies to lower your packaging expenses while maintaining the quality your customers expect.",
    category: "Tips",
    readTime: "4 min read",
    date: "2025-10-05",
  },
  {
    slug: "food-truck-supplies-checklist",
    title: "Essential Supplies Checklist for Food Trucks",
    excerpt: "Complete list of disposables and packaging supplies every food truck needs to operate efficiently.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "2025-10-01",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4 leading-heading">
              Restaurant Supply Tips & Guides
            </h1>
            <p className="text-xl text-ink-muted">
              Expert advice on choosing packaging, reducing costs, and running your food service business more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border-2 border-border hover:border-black hover:shadow-xl transition-all overflow-hidden group"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-accent-100 relative">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-ink-muted mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-heading font-bold text-ink mb-3 group-hover:text-black transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-ink-muted mb-4 leading-relaxed">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-black font-semibold hover:text-zinc-900 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
