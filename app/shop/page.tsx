import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shop Restaurant Supplies | Bulk Wholesale Pricing",
  description: "Browse wholesale restaurant disposables - takeout containers, cups, napkins, gloves, and eco-friendly packaging. Bulk orders with fast nationwide shipping and custom printing available.",
  keywords: [
    "shop restaurant supplies",
    "wholesale restaurant packaging",
    "bulk disposables",
    "restaurant supply catalog",
    "buy restaurant supplies online",
    "food service supplies wholesale",
  ],
  openGraph: {
    title: "Shop Restaurant Supplies | Bulk Wholesale Pricing",
    description: "Browse wholesale restaurant disposables with bulk pricing and fast shipping.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Restaurant Supplies | Bulk Wholesale Pricing",
    description: "Browse wholesale restaurant disposables with bulk pricing.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/shop",
  },
};

const categories = [
  {
    name: "Takeout Containers",
    slug: "takeout-containers",
    description: "Paper food containers, plastic deli containers, to-go boxes",
  },
  {
    name: "Cups & Lids",
    slug: "cups-and-lids",
    description: "Disposable drink cups, coffee lids, paper cups wholesale",
  },
  {
    name: "Napkins & Towels",
    slug: "napkins-and-towels",
    description: "Dinner napkins, paper towels, interfold napkins",
  },
  {
    name: "Gloves & Bags",
    slug: "gloves-and-bags",
    description: "Nitrile gloves bulk, HDPE trash bags, disposable gloves",
  },
  {
    name: "Eco-Friendly",
    slug: "eco-friendly",
    description: "Compostable takeout containers, sustainable packaging",
  },
  {
    name: "Tabletop & To-Go",
    slug: "tabletop",
    description: "Cutlery, straws, condiment packets, serving ware",
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-bg via-bg to-bg-muted py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-4 leading-heading">
              Shop All Categories
            </h1>
            <p className="text-xl text-ink-muted">
              Restaurant disposables, packaging, and supplies shipped direct from the source. Wholesale pricing and bulk orders available.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-8 bg-orange-50 border-y border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-ink font-medium">
                E-commerce launching soon! Need supplies now?
              </p>
              <p className="text-sm text-ink-muted mt-1">
                Call us for immediate orders or bulk pricing
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-zinc-900 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-brand-orange hover:shadow-lg transition-all shadow-sm"
              >
                <h3 className="text-2xl font-heading font-bold text-ink mb-2 group-hover:text-brand-orange transition-colors">
                  {category.name}
                </h3>
                <p className="text-ink-muted mb-4">{category.description}</p>
                <span className="text-black font-medium group-hover:underline">
                  Shop Category →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom & Bulk CTA */}
      <section className="py-16 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Need Bulk or Custom Printing?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get wholesale pricing, custom branded packaging, and dedicated account support through Shure Hospitality Wholesale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wholesale-programs"
              className="px-8 py-4 bg-white text-ink font-heading font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Wholesale Programs
            </Link>
            <Link
              href="/custom-printing"
              className="px-8 py-4 bg-orange-500 text-white font-heading font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Custom Printing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
