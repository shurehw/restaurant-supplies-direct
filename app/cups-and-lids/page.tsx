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
