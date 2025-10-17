import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    slug: "rsd-vs-webstaurantstore",
    title: "Restaurant Supplies Direct vs WebstaurantStore: Honest Comparison",
    excerpt: "Detailed comparison of two restaurant supply approaches: specialized disposables expert vs. broad marketplace. Find the best fit for your business.",
    category: "Comparison",
    readTime: "11 min read",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop",
  },
  {
    slug: "restaurant-disposables-guide",
    title: "Complete Guide to Restaurant Disposables",
    excerpt: "Essential guide to choosing restaurant disposables including takeout containers, cups, napkins, gloves, and more. Save costs while maintaining quality.",
    category: "Restaurant Management",
    readTime: "10 min read",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
  },
  {
    slug: "custom-branded-packaging",
    title: "Custom Branded Packaging: Build Your Restaurant's Brand Identity",
    excerpt: "Learn how custom printed packaging and branded disposables can increase brand recognition, customer loyalty, and marketing ROI.",
    category: "Branding",
    readTime: "8 min read",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=800&auto=format&fit=crop",
  },
  {
    slug: "coffee-shop-cups-lids-guide",
    title: "Best Cups and Lids for Coffee Shops and Cafes",
    excerpt: "Complete buyer's guide for selecting hot cups, cold cups, lids, and sleeves. Maximize quality while controlling costs.",
    category: "Coffee Shop",
    readTime: "9 min read",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop",
  },
  {
    slug: "new-restaurant-supply-checklist",
    title: "Complete Restaurant Supply Checklist for New Owners",
    excerpt: "Everything you need to stock before opening day. A comprehensive checklist of disposables, packaging, and essential supplies.",
    category: "Restaurant Startup",
    readTime: "12 min read",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop",
  },
  {
    slug: "napkins-paper-products-guide",
    title: "Napkins, Towels, and Paper Products: Choosing Quality",
    excerpt: "Complete guide to selecting napkins, paper towels, and paper products. Balance quality, cost, and customer satisfaction.",
    category: "Restaurant Supplies",
    readTime: "8 min read",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop",
  },
  {
    slug: "gloves-food-safety-compliance",
    title: "Gloves and Food Safety: Complete Compliance Guide",
    excerpt: "Essential guide to food safety gloves, proper usage, compliance requirements, and choosing the right gloves for your restaurant.",
    category: "Food Safety",
    readTime: "9 min read",
    date: "2025-10-16",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
  },
  {
    slug: "choosing-takeout-containers",
    title: "How to Choose the Right Takeout Containers for Your Restaurant",
    excerpt: "A comprehensive guide to selecting takeout containers based on your menu, budget, and sustainability goals.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "2025-10-10",
    image: "https://images.unsplash.com/photo-1603073809001-c4a6937d5b26?w=800&auto=format&fit=crop",
  },
  {
    slug: "eco-friendly-packaging-guide",
    title: "Complete Guide to Eco-Friendly Restaurant Packaging",
    excerpt: "Everything you need to know about compostable, biodegradable, and recyclable packaging options for your restaurant.",
    category: "Sustainability",
    readTime: "7 min read",
    date: "2025-10-08",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
  },
  {
    slug: "reduce-packaging-costs",
    title: "5 Ways to Reduce Restaurant Packaging Costs Without Sacrificing Quality",
    excerpt: "Practical strategies to lower your packaging expenses while maintaining the quality your customers expect.",
    category: "Tips",
    readTime: "4 min read",
    date: "2025-10-05",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop",
  },
  {
    slug: "food-truck-supplies-checklist",
    title: "Essential Supplies Checklist for Food Trucks",
    excerpt: "Complete list of disposables and packaging supplies every food truck needs to operate efficiently.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "2025-10-01",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="bg-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium mb-6">
              Powered by Shure Hospitality Wholesale
            </div>
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
                {/* Image area */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full shadow-md">
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
