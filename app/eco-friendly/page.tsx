import { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eco-Friendly Restaurant Supplies | Compostable Containers & Packaging",
  description: "Sustainable restaurant supplies - compostable takeout containers, biodegradable cups, eco-friendly packaging. BPI-certified products for environmentally conscious restaurants.",
  keywords: [
    "eco friendly restaurant supplies",
    "compostable takeout containers",
    "biodegradable packaging",
    "sustainable restaurant supplies",
    "compostable cups",
    "eco packaging wholesale",
    "green restaurant supplies",
    "BPI certified products",
  ],
  openGraph: {
    title: "Eco-Friendly Restaurant Supplies | Compostable & Sustainable",
    description: "Sustainable restaurant packaging - compostable containers, biodegradable cups, eco-friendly supplies.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco-Friendly Restaurant Supplies",
    description: "Compostable takeout containers and sustainable packaging for eco-conscious restaurants.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/eco-friendly",
  },
};

const products = [
  {
    name: "Compostable Takeout Containers",
    description: "Bagasse and molded fiber containers (BPI-certified)",
    sizes: "8oz to 96oz",
    material: "Sugarcane Fiber",
  },
  {
    name: "Biodegradable Cups & Lids",
    description: "PLA-lined paper cups with compostable lids",
    sizes: "8oz to 20oz",
    material: "PLA-Coated Paper",
  },
  {
    name: "Eco-Friendly Cutlery",
    description: "Compostable forks, spoons, knives, and straws",
    sizes: "Standard sizes",
    material: "CPLA & Bamboo",
  },
  {
    name: "Recycled Paper Products",
    description: "Napkins, towels, and bags made from recycled content",
    sizes: "Various",
    material: "100% Recycled Paper",
  },
];

const faqs = [
  {
    question: "What does 'compostable' mean for restaurant supplies?",
    answer: "Compostable products meet ASTM D6400 or D6868 standards and break down into organic matter within 90-180 days in commercial composting facilities. They must be certified by BPI (Biodegradable Products Institute) to ensure they truly decompose without leaving harmful residues.",
  },
  {
    question: "What's the difference between compostable and biodegradable?",
    answer: "Compostable products meet specific timeframes and conditions for breakdown (typically 90-180 days in commercial facilities). Biodegradable simply means it breaks down eventually, but may take years and isn't regulated. Always choose BPI-certified compostable for true environmental impact.",
  },
  {
    question: "Will compostable containers hold up for hot and cold foods?",
    answer: "Yes! Modern compostable containers are engineered for performance. Bagasse (sugarcane fiber) handles hot foods and liquids up to 200°F. PLA-lined products work for cold items. They perform as well as traditional plastic but break down in composting.",
  },
  {
    question: "Are eco-friendly products more expensive?",
    answer: "Sustainable products typically cost 10-30% more than traditional plastic, but prices have dropped significantly. Many customers are willing to pay slightly more for eco-friendly options, and bulk ordering reduces the premium. Consider it an investment in brand values.",
  },
  {
    question: "Do you offer custom printing on eco-friendly packaging?",
    answer: "Absolutely! We can custom print on compostable containers, cups, and bags with soy-based or water-based inks that maintain compostability. Minimum orders start at 2,500 units. Show your sustainability commitment while building your brand.",
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

export default function EcoFriendlyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CategoryPageLayout
        title="Eco-Friendly Restaurant Supplies"
        description="Sustainable restaurant packaging and supplies. Compostable takeout containers, biodegradable cups, eco-friendly cutlery, and recycled paper products. BPI-certified, commercially compostable options with wholesale pricing."
        icon="🌱"
        relatedCategories={[
          { name: "Takeout Containers", slug: "takeout-containers" },
          { name: "Cups & Lids", slug: "cups-and-lids" },
          { name: "Napkins & Towels", slug: "napkins-and-towels" },
        ]}
        faqs={faqs}
      >
        {/* SEO Content Block */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-heading font-bold text-ink mb-4">
            Why Choose Eco-Friendly Restaurant Supplies?
          </h2>
          <p className="text-ink-muted mb-6">
            More restaurants are switching to <strong>eco friendly restaurant supplies</strong> and <strong>compostable takeout containers</strong> to reduce environmental impact and meet customer expectations. We provide BPI-certified <strong>biodegradable packaging</strong> that performs like traditional plastic but breaks down safely in commercial composting facilities.
          </p>
          <p className="text-ink-muted mb-6">
            Our <strong>sustainable restaurant supplies</strong> collection includes <strong>compostable cups</strong>, bagasse containers, biodegradable cutlery, and recycled paper products. Every item meets ASTM D6400/D6868 standards for commercial compostability, ensuring they actually decompose as promised — not just "greenwashing."
          </p>
          <p className="text-ink-muted">
            Want to brand your eco-friendly packaging? We offer <Link href="/custom-printing" className="text-primary-600 hover:underline font-semibold">custom printing on compostable products</Link> using soy-based inks that maintain compostability. Show your commitment to sustainability while building your brand. Need help transitioning to eco-friendly supplies? <Link href="/contact" className="text-primary-600 hover:underline font-semibold">Contact our sustainability team</Link>.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8">
            Popular Eco-Friendly Products
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

        {/* Environmental Impact Section */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border-2 border-border mb-12">
          <h2 className="text-3xl font-heading font-bold text-ink mb-6 text-center">
            The Environmental Impact of Switching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                90-180 Days
              </h3>
              <p className="text-ink-muted">
                Time for BPI-certified compostable products to fully break down in commercial composting
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                40% Less CO₂
              </h3>
              <p className="text-ink-muted">
                Bagasse containers produce 40% less carbon emissions vs. plastic during manufacturing
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                100% Plant-Based
              </h3>
              <p className="text-ink-muted">
                Made from rapidly renewable resources like sugarcane, corn, and bamboo
              </p>
            </div>
          </div>
        </div>

        {/* Lead Gen CTA Block */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 sm:p-12 rounded-2xl border-2 border-primary-600 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-ink mb-4">
              Ready to Switch to Eco-Friendly Supplies?
            </h3>
            <p className="text-lg text-ink-muted mb-6">
              Get wholesale pricing on BPI-certified compostable products. Custom branding available.
              Our sustainability team will help you transition smoothly.
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
                Custom Eco Packaging
              </Link>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold text-ink mb-4">
            Making the Switch to Sustainable Packaging
          </h2>
          <p className="text-ink-muted mb-4">
            Transitioning to eco-friendly supplies is easier than you think. Here's how to get started:
          </p>
          <ul className="list-disc list-inside space-y-2 text-ink-muted mb-6">
            <li><strong>Start with high-visibility items:</strong> Cups, containers, and bags customers see</li>
            <li><strong>Educate your team:</strong> Train staff on proper disposal and customer communication</li>
            <li><strong>Communicate to customers:</strong> Add "Compostable" messaging to packaging and signage</li>
            <li><strong>Partner with composting:</strong> Work with commercial composters or offer composting bins</li>
            <li><strong>Go all-in:</strong> Full transition shows stronger commitment than half-measures</li>
          </ul>
          <p className="text-ink-muted">
            Need help planning your sustainability transition? Our team can audit your current supplies, recommend eco-friendly alternatives, and create a phased implementation plan. <Link href="/contact" className="text-primary-600 hover:underline font-semibold">Schedule a sustainability consultation</Link>.
          </p>
        </div>
      </CategoryPageLayout>
    </>
  );
}
