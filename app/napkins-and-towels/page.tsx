import { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Napkins & Paper Towels Wholesale | Bulk Napkins",
  description: "Wholesale restaurant napkins, paper towels, and dispensers. Beverage napkins, dinner napkins, and custom printed napkins. Bulk pricing and fast shipping.",
  keywords: [
    "restaurant napkins wholesale",
    "paper napkins bulk",
    "beverage napkins",
    "dinner napkins wholesale",
    "custom printed napkins",
    "paper towels bulk",
    "napkin dispensers",
    "logo napkins",
  ],
  openGraph: {
    title: "Restaurant Napkins & Paper Towels Wholesale",
    description: "Wholesale napkins and paper towels. Bulk pricing and custom printing available.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Napkins & Paper Towels Wholesale",
    description: "Wholesale napkins with bulk pricing and custom logo printing.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/napkins-and-towels",
  },
};

const products = [
  {
    name: "Beverage Napkins",
    description: "5x5\" cocktail napkins for bars and cafes",
    sizes: "1-ply, 2-ply",
    material: "White & Kraft Paper",
  },
  {
    name: "Dinner Napkins",
    description: "15x17\" or 17x17\" folded napkins",
    sizes: "2-ply, 3-ply",
    material: "White, Black, Kraft",
  },
  {
    name: "Dispenser Napkins",
    description: "Tall-fold and interfold napkins for countertop dispensers",
    sizes: "Various folds",
    material: "White & Natural",
  },
  {
    name: "Paper Towels & Wipers",
    description: "Roll towels and multi-fold towels for kitchens",
    sizes: "Standard & jumbo rolls",
    material: "Recycled & Virgin Paper",
  },
];

const faqs = [
  {
    question: "What's the difference between beverage and dinner napkins?",
    answer: "Beverage napkins (cocktail napkins) are smaller (5x5\") and typically 1-2 ply, used for drinks and appetizers. Dinner napkins are larger (15x17\" or 17x17\") and 2-3 ply, designed for full meals. Choose based on your service style.",
  },
  {
    question: "Can you print logos on napkins?",
    answer: "Yes! Custom printed napkins are one of our most popular items. We can print your logo, tagline, or custom design in 1-4 colors. Minimum orders start at 5,000 napkins. Perfect for branding and special events.",
  },
  {
    question: "What ply count should I choose?",
    answer: "1-ply works for light-duty use (bars, snacks). 2-ply is standard for most restaurants. 3-ply provides premium absorbency for upscale dining. Consider your customer experience and budget when choosing.",
  },
  {
    question: "Do you offer eco-friendly napkin options?",
    answer: "Absolutely! We carry recycled content napkins, unbleached kraft napkins, and FSC-certified options. All are biodegradable and meet environmental standards for sustainable restaurants.",
  },
  {
    question: "What dispenser styles do you support?",
    answer: "We carry napkins for all standard dispensers: tall-fold (vertical), interfold (pop-up), full-fold, and low-fold. Let us know your dispenser model and we'll match the right napkin format.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function NapkinsAndTowelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CategoryPageLayout
        title="Napkins & Paper Towels Wholesale"
        description="Premium restaurant napkins, beverage napkins, dinner napkins, and paper towels. Available in standard and custom-printed options. Bulk wholesale pricing with fast nationwide delivery."
        icon="🧻"
        relatedCategories={[
          { name: "Cups & Lids", slug: "cups-and-lids" },
          { name: "Takeout Containers", slug: "takeout-containers" },
          { name: "Tabletop Supplies", slug: "tabletop" },
        ]}
        faqs={faqs}
      >
        {/* SEO Content Block */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-heading font-bold text-ink mb-4">
            Why Choose Restaurant Supplies Direct for Wholesale Napkins?
          </h2>
          <p className="text-ink-muted mb-6">
            Every restaurant needs reliable <strong>restaurant napkins wholesale</strong> and <strong>paper napkins bulk</strong> suppliers. Whether you need <strong>beverage napkins</strong> for your bar, <strong>dinner napkins</strong> for table service, or <strong>custom printed napkins</strong> with your logo, we provide quality products at wholesale prices.
          </p>
          <p className="text-ink-muted mb-6">
            Our selection includes every napkin type: cocktail napkins, luncheon napkins, dinner napkins, dispenser napkins, and eco-friendly options. All available in white, kraft, black, and custom colors. We also carry commercial-grade <strong>paper towels bulk</strong> and dispensers for back-of-house operations.
          </p>
          <p className="text-ink-muted">
            Turn your napkins into marketing tools with <Link href="/custom-printing" className="text-primary-600 hover:underline font-semibold">custom logo printing</Link>. We handle everything from design to delivery with minimums as low as 5,000 units. Looking for <Link href="/eco-friendly" className="text-primary-600 hover:underline font-semibold">sustainable options</Link>? We carry recycled and unbleached napkins that meet environmental standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8">
            Popular Napkin & Towel Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div key={index} className="p-6 bg-white border-2 border-border rounded-xl hover:border-primary-600 transition-all">
                <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                  {product.name}
                </h3>
                <p className="text-ink-muted mb-4">{product.description}</p>
                <div className="flex gap-4 text-sm text-ink-muted">
                  <div>
                    <span className="font-semibold">Sizes:</span> {product.sizes}
                  </div>
                  <div>
                    <span className="font-semibold">Material:</span> {product.material}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Gen CTA Block */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 sm:p-12 rounded-2xl border-2 border-primary-600 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-ink mb-4">
              Ready to Order Napkins & Paper Towels in Bulk?
            </h3>
            <p className="text-lg text-ink-muted mb-6">
              Get wholesale pricing on napkins and paper towels. Custom printing available for branding.
              Volume discounts and dedicated support for high-volume accounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white font-heading font-semibold text-lg rounded-lg hover:bg-primary-700 transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/custom-printing"
                className="px-8 py-4 bg-white text-ink font-heading font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors border-2 border-border"
              >
                Custom Logo Napkins
              </Link>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold text-ink mb-4">
            Choosing the Right Napkins for Your Restaurant
          </h2>
          <p className="text-ink-muted mb-4">
            The right napkin choice depends on your service style, brand positioning, and customer expectations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-ink-muted mb-6">
            <li><strong>Quick-service & takeout:</strong> 1-ply beverage napkins or dispenser napkins</li>
            <li><strong>Casual dining:</strong> 2-ply dinner napkins in white or kraft</li>
            <li><strong>Upscale restaurants:</strong> 3-ply linen-feel dinner napkins</li>
            <li><strong>Bars & lounges:</strong> Custom printed beverage napkins for branding</li>
            <li><strong>Eco-conscious:</strong> Recycled or unbleached kraft napkins</li>
          </ul>
          <p className="text-ink-muted">
            Not sure which napkin type fits your needs? <Link href="/contact" className="text-primary-600 hover:underline font-semibold">Contact our team</Link> for personalized recommendations based on your service style and volume requirements.
          </p>
        </div>
      </CategoryPageLayout>
    </>
  );
}
