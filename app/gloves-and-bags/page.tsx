import { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disposable Gloves & Trash Bags Wholesale | Nitrile Gloves Bulk",
  description: "Wholesale disposable gloves (nitrile, vinyl, latex) and trash bags for restaurants. Food-safe gloves, powder-free options, and commercial trash bags. Bulk pricing.",
  keywords: [
    "nitrile gloves bulk",
    "disposable gloves wholesale",
    "food service gloves",
    "vinyl gloves bulk",
    "latex gloves wholesale",
    "trash bags bulk",
    "can liners wholesale",
    "food prep gloves",
  ],
  openGraph: {
    title: "Disposable Gloves & Trash Bags Wholesale",
    description: "Wholesale food service gloves and commercial trash bags. Bulk pricing on nitrile, vinyl, and latex gloves.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disposable Gloves & Trash Bags Wholesale",
    description: "Bulk food service gloves and commercial trash bags at wholesale prices.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/gloves-and-bags",
  },
};

const products = [
  {
    name: "Nitrile Gloves",
    description: "Powder-free, latex-free gloves for food handling",
    sizes: "S, M, L, XL",
    material: "Nitrile (Latex-Free)",
  },
  {
    name: "Vinyl Gloves",
    description: "Cost-effective gloves for light-duty tasks",
    sizes: "S, M, L, XL",
    material: "PVC Vinyl",
  },
  {
    name: "Latex Gloves",
    description: "High-dexterity gloves for detailed food prep",
    sizes: "S, M, L, XL",
    material: "Natural Latex",
  },
  {
    name: "Trash Bags & Can Liners",
    description: "Heavy-duty bags for kitchen and front-of-house waste",
    sizes: "10-60 gallon",
    material: "HDPE & LDPE",
  },
];

const faqs = [
  {
    question: "What's the difference between nitrile, vinyl, and latex gloves?",
    answer: "Nitrile gloves offer the best chemical and puncture resistance, are latex-free, and FDA-approved for food contact. Vinyl gloves are cost-effective for light tasks but less durable. Latex gloves provide excellent dexterity but can cause allergies. Most restaurants choose nitrile for safety and performance.",
  },
  {
    question: "What glove size should I order?",
    answer: "Measure hand circumference at the widest part (excluding thumb). Small: 7-8\", Medium: 8-9\", Large: 9-10\", X-Large: 10-11\". We recommend ordering a variety pack first to test sizing with your team.",
  },
  {
    question: "Are these gloves food-safe?",
    answer: "Yes! All our food service gloves meet FDA CFR 177.2600 standards for direct food contact. They're latex-free (nitrile/vinyl) or made from natural latex, powder-free, and safe for food preparation, handling, and service.",
  },
  {
    question: "What trash bag size do I need?",
    answer: "Match bag size to container volume: 10-13 gallon (small bins), 23-33 gallon (standard kitchen), 40-45 gallon (large prep areas), 55-60 gallon (bulk waste). Thickness (mil) matters too — use thicker bags for heavy or sharp waste.",
  },
  {
    question: "Do you offer biodegradable or compostable options?",
    answer: "Yes! We carry compostable trash bags (ASTM D6400 certified) and plant-based gloves for eco-conscious operations. These meet BPI standards and break down in commercial composting facilities.",
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

export default function GlovesAndBagsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CategoryPageLayout
        title="Gloves & Trash Bags Wholesale"
        description="Food-safe disposable gloves and commercial trash bags for restaurants. Nitrile, vinyl, and latex gloves in all sizes. Heavy-duty trash bags and can liners. Bulk wholesale pricing with fast delivery."
        icon="🧤"
        relatedCategories={[
          { name: "Takeout Containers", slug: "takeout-containers" },
          { name: "Eco-Friendly Supplies", slug: "eco-friendly" },
          { name: "Napkins & Towels", slug: "napkins-and-towels" },
        ]}
        faqs={faqs}
      >
        {/* SEO Content Block */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-heading font-bold text-ink mb-4">
            Why Choose Restaurant Supplies Direct for Wholesale Gloves & Bags?
          </h2>
          <p className="text-ink-muted mb-6">
            Every food service operation needs reliable <strong>disposable gloves wholesale</strong> and <strong>trash bags bulk</strong> suppliers. We provide FDA-approved <strong>food service gloves</strong> in nitrile, vinyl, and latex materials, plus heavy-duty commercial trash bags — all at wholesale prices with fast nationwide shipping.
          </p>
          <p className="text-ink-muted mb-6">
            Our <strong>nitrile gloves bulk</strong> selection includes powder-free, latex-free options that meet the highest food safety standards. From lightweight <strong>vinyl gloves</strong> for quick tasks to durable <strong>latex gloves</strong> for detailed prep work, we stock every type in all sizes. Our <strong>can liners wholesale</strong> range from 10-gallon bin liners to 60-gallon commercial bags.
          </p>
          <p className="text-ink-muted">
            Need eco-friendly options? Check out our <Link href="/eco-friendly" className="text-primary-600 hover:underline font-semibold">sustainable gloves and compostable trash bags</Link>. Looking for volume discounts? <Link href="/wholesale-programs" className="text-primary-600 hover:underline font-semibold">Join our wholesale program</Link> for dedicated pricing and account management.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8">
            Popular Glove & Bag Types
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
              Ready to Order Gloves & Bags in Bulk?
            </h3>
            <p className="text-lg text-ink-muted mb-6">
              Get wholesale pricing on food service gloves and commercial trash bags.
              Volume discounts available for high-usage operations. Free samples on request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white font-heading font-semibold text-lg rounded-lg hover:bg-primary-700 transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/wholesale-programs"
                className="px-8 py-4 bg-white text-ink font-heading font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors border-2 border-border"
              >
                Wholesale Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold text-ink mb-4">
            Choosing the Right Gloves for Your Kitchen
          </h2>
          <p className="text-ink-muted mb-4">
            Food service glove selection depends on task type, duration, and safety requirements:
          </p>
          <ul className="list-disc list-inside space-y-2 text-ink-muted mb-6">
            <li><strong>Food prep & cooking:</strong> Nitrile gloves (heat-resistant, chemical-safe)</li>
            <li><strong>Light tasks & assembly:</strong> Vinyl gloves (cost-effective, quick changes)</li>
            <li><strong>Detailed work:</strong> Latex gloves (high dexterity, tight fit)</li>
            <li><strong>Allergy concerns:</strong> Nitrile or vinyl (latex-free alternatives)</li>
            <li><strong>Dishwashing & cleaning:</strong> Heavy-duty nitrile (thicker mil)</li>
          </ul>
          <p className="text-ink-muted">
            Not sure which gloves or trash bags you need? <Link href="/contact" className="text-primary-600 hover:underline font-semibold">Contact our team</Link> for product samples and recommendations based on your operation size and usage patterns.
          </p>
        </div>
      </CategoryPageLayout>
    </>
  );
}
