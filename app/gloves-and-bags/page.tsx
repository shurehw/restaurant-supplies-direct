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
            Need eco-friendly options? Check out our <Link href="/eco-friendly" className="text-blue-600 hover:underline font-semibold">sustainable gloves and compostable trash bags</Link>. Looking for volume discounts? <Link href="/wholesale-programs" className="text-blue-600 hover:underline font-semibold">Join our wholesale program</Link> for dedicated pricing and account management.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8">
            Popular Glove & Bag Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div key={index} className="p-6 bg-white border-2 border-border rounded-xl hover:border-blue-600 transition-all">
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

        {/* Featured Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Blue Nitrile Powder-Free Gloves</h3>
              <p className="text-sm text-ink-muted mb-3">Premium latex-free nitrile gloves ideal for food handling and prep. FDA-approved for direct food contact.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Latex-free, powder-free construction</li>
                <li>- Excellent chemical resistance</li>
                <li>- Textured fingertips for grip</li>
                <li>- Available in S, M, L, XL</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $12 per box (100 gloves)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Clear Vinyl Food Service Gloves</h3>
              <p className="text-sm text-ink-muted mb-3">Economical vinyl gloves for light-duty food handling and assembly tasks. Great for high-volume operations.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Cost-effective latex-free option</li>
                <li>- Loose fit for easy on/off</li>
                <li>- Food-safe PVC vinyl</li>
                <li>- Ideal for quick tasks</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $6 per box (100 gloves)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Black Nitrile Heavy-Duty Gloves</h3>
              <p className="text-sm text-ink-muted mb-3">Extra-thick 6mil nitrile gloves for heavy-duty kitchen tasks, dishwashing, and cleaning.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- 6mil thickness for durability</li>
                <li>- Superior puncture resistance</li>
                <li>- Textured grip for wet conditions</li>
                <li>- Professional black appearance</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $18 per box (100 gloves)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 4 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">33 Gallon Trash Bags Heavy-Duty</h3>
              <p className="text-sm text-ink-muted mb-3">Commercial-grade 33 gallon trash bags for standard kitchen waste. 1.5mil thickness for strength.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Fits standard 33 gallon cans</li>
                <li>- 1.5mil industrial strength</li>
                <li>- Star-seal bottom prevents leaks</li>
                <li>- Black color for discreet appearance</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $24 per case (100 bags)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 5 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Clear HDPE T-Shirt Bags</h3>
              <p className="text-sm text-ink-muted mb-3">Standard plastic grocery bags for takeout and retail. Economical and versatile for various uses.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Standard 1/6 barrel size</li>
                <li>- Convenient carry handles</li>
                <li>- Food-safe HDPE plastic</li>
                <li>- Bulk pricing available</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $16 per case (1000 bags)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 6 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Compostable Plant-Based Gloves</h3>
              <p className="text-sm text-ink-muted mb-3">Eco-friendly compostable gloves made from plant-based materials. BPI-certified for commercial composting.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Made from renewable resources</li>
                <li>- BPI-certified compostable</li>
                <li>- Latex and powder-free</li>
                <li>- Same performance as traditional</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $16 per box (100 gloves)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 7 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">60 Gallon Extra-Large Trash Bags</h3>
              <p className="text-sm text-ink-muted mb-3">Heavy-duty 60 gallon bags for large volume waste and commercial cleaning. 2.0mil extra-strength.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Extra-large 60 gallon capacity</li>
                <li>- 2.0mil industrial thickness</li>
                <li>- Reinforced gusset seam</li>
                <li>- Perfect for bulk waste</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $38 per case (100 bags)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 8 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Compostable Trash Bags 13 Gallon</h3>
              <p className="text-sm text-ink-muted mb-3">ASTM D6400 certified compostable bags for sustainable waste programs. Fits standard 13 gallon bins.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- ASTM D6400 certified</li>
                <li>- Made from plant starches</li>
                <li>- Breaks down in 90-180 days</li>
                <li>- Green color indicates eco-friendly</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $32 per case (100 bags)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Lead Gen CTA Block */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 sm:p-12 rounded-2xl border-2 border-blue-600 mb-12">
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
                className="px-8 py-4 bg-blue-600 text-white font-heading font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors"
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
            Not sure which gloves or trash bags you need? <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact our team</Link> for product samples and recommendations based on your operation size and usage patterns.
          </p>
        </div>
      </CategoryPageLayout>
    </>
  );
}
