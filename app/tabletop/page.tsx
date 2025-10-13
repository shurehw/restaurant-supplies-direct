import { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Tabletop Supplies & To-Go Accessories | Wholesale",
  description: "Wholesale restaurant tabletop supplies - cutlery, straws, condiment cups, portion cups, and to-go accessories. Bulk pricing on disposable silverware and serving supplies.",
  keywords: [
    "restaurant tabletop supplies",
    "disposable cutlery wholesale",
    "plastic silverware bulk",
    "straws wholesale",
    "condiment cups bulk",
    "portion cups wholesale",
    "to-go accessories",
    "utensil packets bulk",
  ],
  openGraph: {
    title: "Restaurant Tabletop Supplies & To-Go Accessories",
    description: "Wholesale cutlery, straws, condiment cups, and to-go accessories. Bulk pricing for restaurants.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Tabletop Supplies Wholesale",
    description: "Disposable cutlery, straws, and to-go accessories at bulk wholesale prices.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/tabletop",
  },
};

const products = [
  {
    name: "Disposable Cutlery",
    description: "Plastic, wood, and compostable forks, knives, and spoons",
    sizes: "Standard & heavy-duty",
    material: "Plastic, CPLA, Wood",
  },
  {
    name: "Straws & Stirrers",
    description: "Plastic, paper, and compostable straws for all beverages",
    sizes: "7.75\" to 10.25\"",
    material: "Paper, Plastic, PLA",
  },
  {
    name: "Portion & Condiment Cups",
    description: "Sauce cups, sample cups, and dressing containers with lids",
    sizes: "0.5oz to 5.5oz",
    material: "Plastic & Paper",
  },
  {
    name: "Utensil Kits & Accessories",
    description: "Wrapped cutlery sets, napkin-wrapped kits, salt/pepper packets",
    sizes: "Individual & bulk",
    material: "Various",
  },
];

const faqs = [
  {
    question: "What cutlery material should I choose for my restaurant?",
    answer: "Plastic cutlery (polystyrene or polypropylene) is cost-effective and durable for most applications. CPLA (crystallized PLA) is compostable and heat-resistant for eco-conscious operations. Wooden cutlery works for cold foods and has a rustic aesthetic. Choose based on your menu, brand values, and budget.",
  },
  {
    question: "What's the difference between medium-weight and heavy-weight cutlery?",
    answer: "Medium-weight (4-5 grams) works for light meals, snacks, and desserts. Heavy-weight (6-7+ grams) is sturdier for entrees, dense foods, and upscale presentation. Heavy-weight feels more premium and reduces breakage.",
  },
  {
    question: "Are paper straws really better than plastic?",
    answer: "Paper straws are biodegradable and meet plastic ban regulations in many cities. Modern paper straws last 2-4 hours in liquid without getting soggy. They cost slightly more but show environmental commitment. PLA straws are another compostable alternative.",
  },
  {
    question: "What size portion cups do I need?",
    answer: "0.5-1oz for sauces and dressings, 2oz for dips and condiments, 4oz for sides and samples, 5.5oz for larger portions. Choose clear cups to showcase contents or black for premium presentation. Lids available for all sizes.",
  },
  {
    question: "Can you provide individually wrapped cutlery kits?",
    answer: "Yes! We offer pre-wrapped cutlery kits with fork, knife, spoon, napkin, and salt/pepper. Available in clear film or paper wrap. These improve hygiene, speed up service, and work perfectly for delivery and takeout orders.",
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

export default function TabletopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CategoryPageLayout
        title="Tabletop & To-Go Accessories"
        description="Restaurant tabletop supplies and to-go accessories. Disposable cutlery, straws, portion cups, condiment containers, and utensil kits. Bulk wholesale pricing with nationwide delivery."
        relatedCategories={[
          { name: "Takeout Containers", slug: "takeout-containers" },
          { name: "Cups & Lids", slug: "cups-and-lids" },
          { name: "Eco-Friendly Supplies", slug: "eco-friendly" },
        ]}
        faqs={faqs}
      >
        {/* SEO Content Block */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-heading font-bold text-ink mb-4">
            Complete Tabletop & To-Go Solutions for Your Restaurant
          </h2>
          <p className="text-ink-muted mb-6">
            From <strong>disposable cutlery wholesale</strong> to <strong>straws</strong>, <strong>portion cups</strong>, and <strong>to-go accessories</strong>, we supply everything you need for dine-in and takeout service. Whether you need <strong>plastic silverware bulk</strong> for high-volume operations or eco-friendly alternatives for sustainability-focused brands, we provide quality products at wholesale prices.
          </p>
          <p className="text-ink-muted mb-6">
            Our <strong>restaurant tabletop supplies</strong> include heavy-duty cutlery, paper and plastic straws, condiment cups with lids, and pre-wrapped utensil kits. All products are food-safe, available in bulk quantities, and ship fast nationwide. We carry traditional plastic, compostable CPLA, wooden, and paper options to match every operation type and brand values.
          </p>
          <p className="text-ink-muted">
            Looking for eco-friendly tabletop options? Check our <Link href="/eco-friendly" className="text-blue-600 hover:underline font-semibold">sustainable supplies collection</Link> featuring compostable cutlery, paper straws, and plant-based accessories. Need volume pricing? <Link href="/wholesale-programs" className="text-blue-600 hover:underline font-semibold">Join our wholesale program</Link> for dedicated account management and deeper discounts.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8">
            Popular Tabletop Products
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
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Heavy-Weight Black Plastic Cutlery</h3>
              <p className="text-sm text-ink-muted mb-3">Premium heavy-weight plastic cutlery set with elegant black finish. Perfect for upscale takeout and catering.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Heavy-weight 7 gram construction</li>
                <li>- Elegant black color</li>
                <li>- Forks, knives, and spoons</li>
                <li>- Won't bend or break easily</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $48 per case (600 pieces)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Wooden Disposable Cutlery Set</h3>
              <p className="text-sm text-ink-muted mb-3">Eco-friendly birch wood cutlery with rustic appeal. Biodegradable and great for cold foods and desserts.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Made from sustainable birch wood</li>
                <li>- Natural rustic aesthetic</li>
                <li>- Biodegradable and compostable</li>
                <li>- Smooth splinter-free finish</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $38 per case (1000 pieces)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Clear Portion Cups 2oz with Lids</h3>
              <p className="text-sm text-ink-muted mb-3">Crystal-clear 2oz portion cups perfect for sauces, dressings, and samples. Secure-fitting lids included.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- 2oz capacity for sauces</li>
                <li>- Crystal-clear PET plastic</li>
                <li>- Leak-resistant lids included</li>
                <li>- Stackable for easy storage</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $28 per case (2500 cups)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 4 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Jumbo Wrapped Paper Straws 10"</h3>
              <p className="text-sm text-ink-muted mb-3">Extra-long individually wrapped paper straws for tall drinks and bubble tea. Lasts 2-4 hours without softening.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Extra-long 10" length</li>
                <li>- Individually wrapped for hygiene</li>
                <li>- Biodegradable paper construction</li>
                <li>- Wide diameter for bubble tea</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $34 per case (2000 straws)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 5 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">6-Piece Wrapped Cutlery Kit</h3>
              <p className="text-sm text-ink-muted mb-3">Complete cutlery kit with fork, knife, spoon, napkin, salt, and pepper. Pre-wrapped for convenience.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Fork, knife, spoon included</li>
                <li>- Napkin, salt, pepper packets</li>
                <li>- Individually wrapped for hygiene</li>
                <li>- Perfect for delivery and takeout</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $68 per case (500 kits)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 6 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Black Souffle Cups 4oz with Lids</h3>
              <p className="text-sm text-ink-muted mb-3">Premium black portion cups with translucent lids for upscale presentation of sides and samples.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Elegant black presentation</li>
                <li>- 4oz capacity for sides</li>
                <li>- Secure translucent lids</li>
                <li>- Perfect for premium takeout</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $42 per case (500 cups)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 7 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Compostable PLA Clear Straws</h3>
              <p className="text-sm text-ink-muted mb-3">Plant-based clear straws that look like plastic but are fully compostable. BPI-certified sustainable option.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Made from plant-based PLA</li>
                <li>- Looks and feels like plastic</li>
                <li>- BPI-certified compostable</li>
                <li>- Standard 7.75" length</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $32 per case (2400 straws)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 8 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Plastic Sporks Medium-Weight</h3>
              <p className="text-sm text-ink-muted mb-3">Versatile spork combines fork and spoon functionality. Space-saving alternative to separate cutlery.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Fork and spoon in one utensil</li>
                <li>- Medium-weight construction</li>
                <li>- Saves cost and storage space</li>
                <li>- Perfect for quick-service</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $22 per case (1000 sporks)</p>
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
              Ready to Stock Up on Tabletop Supplies?
            </h3>
            <p className="text-lg text-ink-muted mb-6">
              Get wholesale pricing on cutlery, straws, portion cups, and to-go accessories.
              Bulk ordering and volume discounts available for high-usage operations.
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
            Choosing the Right Tabletop Supplies for Your Operation
          </h2>
          <p className="text-ink-muted mb-4">
            Your tabletop and to-go accessories should match your service style and brand positioning:
          </p>
          <ul className="list-disc list-inside space-y-2 text-ink-muted mb-6">
            <li><strong>Fast-casual & QSR:</strong> Medium-weight plastic cutlery, plastic straws, individual portion cups</li>
            <li><strong>Delivery & takeout:</strong> Wrapped utensil kits, secure-lid condiment cups, heavy-duty cutlery</li>
            <li><strong>Upscale casual:</strong> Heavy-weight black cutlery, paper-wrapped sets, premium presentation</li>
            <li><strong>Eco-conscious brands:</strong> Compostable CPLA cutlery, paper straws, wooden utensils</li>
            <li><strong>Catering & events:</strong> Bulk unwrapped cutlery, large portion cups, versatile accessories</li>
          </ul>
          <p className="text-ink-muted">
            Not sure what supplies work best for your operation? <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact our team</Link> for product recommendations and samples based on your service model and volume requirements.
          </p>
        </div>
      </CategoryPageLayout>
    </>
  );
}
