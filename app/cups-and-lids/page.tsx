import { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paper Cups & Lids Wholesale | Coffee Cups Bulk | Restaurant Supplies Direct",
  description: "Wholesale paper cups, plastic cups, coffee cups, and lids for restaurants. Hot cups, cold cups, custom printing available. Bulk pricing and fast shipping.",
  keywords: [
    "paper cups wholesale",
    "coffee cups bulk",
    "plastic cups wholesale",
    "cup lids bulk",
    "hot cups wholesale",
    "cold drink cups",
    "custom printed cups",
    "disposable cups bulk",
  ],
  openGraph: {
    title: "Paper Cups & Lids Wholesale | Restaurant Supplies Direct",
    description: "Wholesale paper cups, plastic cups, and lids. Bulk pricing and custom printing available.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Cups & Lids Wholesale | Restaurant Supplies Direct",
    description: "Wholesale cups and lids with bulk pricing and custom printing.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/cups-and-lids",
  },
};

const products = [
  {
    name: "Hot Paper Cups",
    description: "Insulated coffee and tea cups in multiple sizes",
    sizes: "4oz to 20oz",
    material: "Double-Wall Paper",
  },
  {
    name: "Cold Drink Cups",
    description: "Clear PET plastic cups for iced beverages",
    sizes: "9oz to 32oz",
    material: "PET Plastic",
  },
  {
    name: "Compostable Cups",
    description: "Eco-friendly PLA-lined paper cups",
    sizes: "8oz to 16oz",
    material: "PLA-Lined Paper",
  },
  {
    name: "Cup Lids & Accessories",
    description: "Dome lids, flat lids, sip lids, and straws",
    sizes: "Universal sizing",
    material: "Plastic & Paper",
  },
];

const faqs = [
  {
    question: "What sizes of cups do you offer?",
    answer: "We carry cups from 4oz espresso sizes up to 32oz large drinks. Our most popular sizes are 8oz, 12oz, 16oz, and 20oz. All sizes available for bulk wholesale orders with volume discounts.",
  },
  {
    question: "Can you custom print logos on cups?",
    answer: "Yes! We offer full-color custom printing on paper cups. Add your logo, branding, and messaging to create branded cups that market your business. Minimum orders start at 1,000 units. Contact us for custom printing quotes.",
  },
  {
    question: "What's the difference between hot cups and cold cups?",
    answer: "Hot cups are insulated (single or double-wall) to protect hands from heat and keep beverages warm. Cold cups are typically clear plastic (PET) to showcase drinks and have no insulation. Choose based on your beverage temperature.",
  },
  {
    question: "Do you have eco-friendly cup options?",
    answer: "Absolutely! We carry compostable PLA-lined paper cups, recyclable PET cups, and paper cups with water-based coatings. All meet BPI compostability or recyclability standards.",
  },
  {
    question: "What lid options are available?",
    answer: "We offer dome lids (for whipped toppings), flat sip lids (for hot drinks), straw-slot lids (for cold drinks), and compostable fiber lids. All are matched to standard cup sizes for secure fit.",
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

export default function CupsAndLidsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CategoryPageLayout
        title="Cups & Lids Wholesale"
        description="Premium paper cups, plastic cups, coffee cups, and lids for restaurants and cafes. Available in hot, cold, and compostable options. Bulk pricing, custom printing, and nationwide shipping."
        relatedCategories={[
          { name: "Takeout Containers", slug: "takeout-containers" },
          { name: "Napkins & Towels", slug: "napkins-and-towels" },
          { name: "Eco-Friendly Supplies", slug: "eco-friendly" },
        ]}
        faqs={faqs}
      >
        {/* SEO Content Block */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-heading font-bold text-ink mb-4">
            Why Choose Restaurant Supplies Direct for Wholesale Cups & Lids?
          </h2>
          <p className="text-ink-muted mb-6">
            Whether you're running a coffee shop, cafe, or restaurant, finding reliable <strong>paper cups wholesale</strong> and <strong>coffee cups bulk</strong> suppliers is essential. We provide high-quality <strong>disposable cups</strong> in every size and material — from insulated hot cups to clear cold drink cups — at wholesale prices with fast nationwide delivery.
          </p>
          <p className="text-ink-muted mb-6">
            Our selection includes traditional <strong>paper coffee cups</strong>, durable <strong>plastic cups wholesale</strong> options, and eco-friendly <strong>compostable cups</strong> for sustainability-focused operations. All cups come with matching lids for secure transport and spill prevention.
          </p>
          <p className="text-ink-muted">
            Need <Link href="/custom-printing" className="text-blue-600 hover:underline font-semibold">custom printed cups</Link> with your logo? We handle design, proofing, and production in-house with fast turnaround times. Looking for <Link href="/eco-friendly" className="text-blue-600 hover:underline font-semibold">sustainable options</Link>? We carry the industry's largest selection of compostable and recyclable cups.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8">
            Popular Cup & Lid Types
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
              <h3 className="text-lg font-heading font-bold text-ink mb-2">16oz Double-Wall Hot Coffee Cup</h3>
              <p className="text-sm text-ink-muted mb-3">Premium insulated paper cup with double-wall construction, no sleeve required. Ideal for specialty coffee shops.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- No-burn double-wall insulation</li>
                <li>- Leak-resistant poly lining</li>
                <li>- Fits standard 16oz sip lids</li>
                <li>- Custom printing available</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $72 per case (500 units)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">24oz Clear PET Cold Cup</h3>
              <p className="text-sm text-ink-muted mb-3">Ultra-clear plastic cup perfect for iced coffee, smoothies, and bubble tea. Shows off colorful drinks beautifully.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Crystal-clear PET construction</li>
                <li>- Crack-resistant design</li>
                <li>- Pairs with dome or flat lids</li>
                <li>- Recyclable where facilities exist</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $68 per case (600 units)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">12oz Compostable PLA-Lined Cup</h3>
              <p className="text-sm text-ink-muted mb-3">Eco-friendly hot cup with plant-based PLA lining. BPI-certified compostable for sustainable operations.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- BPI-certified compostable</li>
                <li>- Made from renewable resources</li>
                <li>- Suitable for hot beverages</li>
                <li>- Breaks down in 90-180 days</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $82 per case (1000 units)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 4 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Black Sip Lid for Hot Cups</h3>
              <p className="text-sm text-ink-muted mb-3">Premium black sip-through lid with reclosable tab. Fits 8-24oz hot cups. Prevents spills and keeps drinks hot.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Reclosable sip tab</li>
                <li>- Secure snap-on fit</li>
                <li>- Prevents leaks and splashes</li>
                <li>- Fits multiple cup sizes</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $38 per case (1000 units)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 5 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">Clear Dome Lid with Straw Slot</h3>
              <p className="text-sm text-ink-muted mb-3">High-dome lid perfect for whipped toppings and frozen drinks. Straw slot for easy sipping.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Extra-high dome for toppings</li>
                <li>- Wide straw slot opening</li>
                <li>- Fits 12-24oz cold cups</li>
                <li>- Crystal clear visibility</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $42 per case (1000 units)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 6 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">8oz Kraft Paper Espresso Cup</h3>
              <p className="text-sm text-ink-muted mb-3">Small hot cup with natural kraft paper look, perfect for espresso, cortado, and small hot beverages.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Natural kraft aesthetic</li>
                <li>- Single-wall construction</li>
                <li>- Eco-friendly appearance</li>
                <li>- Pairs with 8oz hot lids</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $48 per case (1000 units)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 7 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">20oz Single-Wall Hot Cup with Sleeves</h3>
              <p className="text-sm text-ink-muted mb-3">Economy hot cup with corrugated sleeves included. Cost-effective solution for high-volume operations.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Includes corrugated sleeves</li>
                <li>- Most economical hot cup option</li>
                <li>- High-quality poly lining</li>
                <li>- Bulk pack for easy storage</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $58 per case (1000 units)</p>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition-colors">
                Get Quote
              </Link>
            </div>

            {/* Product 8 */}
            <div className="bg-white p-5 rounded-xl border-2 border-border hover:border-black hover:shadow-lg transition-all">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Product Image</div>
              </div>
              <h3 className="text-lg font-heading font-bold text-ink mb-2">32oz Stadium Cup with Lid</h3>
              <p className="text-sm text-ink-muted mb-3">Extra-large reusable plastic cup for fountain drinks, slushies, and jumbo beverages. Dishwasher safe.</p>
              <ul className="text-xs text-ink-muted space-y-1 mb-4">
                <li>- Heavy-duty reusable design</li>
                <li>- Dishwasher safe construction</li>
                <li>- Secure snap-on lid included</li>
                <li>- Perfect for sports venues</li>
              </ul>
              <p className="text-sm font-semibold text-ink mb-3">Starting at $96 per case (250 units)</p>
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
              Ready to Order Cups & Lids in Bulk?
            </h3>
            <p className="text-lg text-ink-muted mb-6">
              Get wholesale pricing, custom printing quotes, and volume discounts.
              Orders over $2,000 or LA-based operations qualify for same-day delivery through Shure Hospitality Wholesale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white font-heading font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/custom-printing"
                className="px-8 py-4 bg-white text-ink font-heading font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors border-2 border-border"
              >
                Custom Printing
              </Link>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold text-ink mb-4">
            Choosing the Right Cup for Your Business
          </h2>
          <p className="text-ink-muted mb-4">
            Selecting the right cups depends on your beverage menu, brand image, and sustainability goals:
          </p>
          <ul className="list-disc list-inside space-y-2 text-ink-muted mb-6">
            <li><strong>Coffee shops:</strong> Double-wall hot cups (8oz, 12oz, 16oz) with sip lids</li>
            <li><strong>Smoothie & juice bars:</strong> Clear PET cold cups (16oz, 24oz) with dome lids</li>
            <li><strong>Bubble tea:</strong> Extra-wide straw-slot lids and 20-24oz cups</li>
            <li><strong>Eco-conscious brands:</strong> Compostable PLA-lined cups with fiber lids</li>
          </ul>
          <p className="text-ink-muted">
            Need help selecting the right cups and lids for your operation? <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact our team</Link> for personalized recommendations based on your beverage menu and volume.
          </p>
        </div>
      </CategoryPageLayout>
    </>
  );
}
