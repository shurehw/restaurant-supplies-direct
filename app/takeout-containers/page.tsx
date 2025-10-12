import { Metadata } from "next";
import CategoryPageLayout from "@/components/CategoryPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Takeout Containers Wholesale | To-Go Boxes | Restaurant Supplies Direct",
  description: "Wholesale takeout containers, to-go boxes, paper food containers, and plastic deli containers. Bulk pricing, custom printing, and fast shipping for restaurants.",
  keywords: [
    "takeout containers wholesale",
    "to-go boxes bulk",
    "paper food containers",
    "plastic deli containers",
    "restaurant takeout packaging",
    "wholesale food containers",
    "bulk takeout boxes",
    "disposable food containers",
  ],
  openGraph: {
    title: "Takeout Containers Wholesale | Restaurant Supplies Direct",
    description: "Wholesale takeout containers and to-go boxes. Bulk pricing and custom printing available.",
    type: "website",
  },
};

const products = [
  {
    name: "Paper Food Containers",
    description: "Eco-friendly kraft paper takeout boxes in multiple sizes",
    sizes: "8oz to 96oz",
    material: "Kraft Paper",
  },
  {
    name: "Plastic Deli Containers",
    description: "Clear hinged-lid containers perfect for salads and sides",
    sizes: "8oz to 32oz",
    material: "PET Plastic",
  },
  {
    name: "Compostable To-Go Boxes",
    description: "Sustainable bagasse and molded fiber containers",
    sizes: "16oz to 64oz",
    material: "Bagasse",
  },
  {
    name: "Microwavable Containers",
    description: "PP containers safe for microwave and freezer",
    sizes: "12oz to 38oz",
    material: "Polypropylene",
  },
];

const faqs = [
  {
    question: "What sizes of takeout containers do you offer?",
    answer: "We carry takeout containers ranging from 8oz portion cups to 96oz family-size boxes. Our most popular sizes are 16oz, 24oz, 32oz, and 64oz. All sizes are available for bulk purchase with wholesale pricing.",
  },
  {
    question: "Can I get custom printed takeout boxes?",
    answer: "Yes! We offer custom printing on all takeout containers. Add your logo, branding, and messaging to create branded packaging that stands out. Contact us for custom printing quotes and minimum order quantities.",
  },
  {
    question: "Do you have eco-friendly takeout container options?",
    answer: "Absolutely. We carry compostable takeout containers made from bagasse (sugarcane fiber), molded fiber, and other sustainable materials. These meet BPI and CMA compostability standards and are perfect for eco-conscious restaurants.",
  },
  {
    question: "What's the minimum order quantity for wholesale pricing?",
    answer: "Minimum order quantities vary by product, typically starting at one case (100-500 units depending on size). Larger orders qualify for additional volume discounts. Contact us for a custom quote based on your needs.",
  },
  {
    question: "Are these containers microwave and freezer safe?",
    answer: "It depends on the material. Our polypropylene (PP) containers are microwave and freezer safe. Paper and bagasse containers are generally microwave-safe but not recommended for freezer storage. Check product specifications or contact us for guidance.",
  },
];

export default function TakeoutContainersPage() {
  return (
    <CategoryPageLayout
      title="Takeout Containers Wholesale"
      description="Premium takeout containers, to-go boxes, and food packaging for restaurants. Available in paper, plastic, and compostable materials. Bulk pricing, custom printing, and nationwide shipping."
      icon="📦"
      relatedCategories={[
        { name: "Cups & Lids", slug: "cups-and-lids" },
        { name: "Eco-Friendly Supplies", slug: "eco-friendly" },
        { name: "Tabletop & To-Go", slug: "tabletop" },
      ]}
      faqs={faqs}
    >
      {/* SEO Content Block */}
      <div className="prose prose-lg max-w-none mb-12">
        <h2 className="text-3xl font-heading font-bold text-ink mb-4">
          Why Choose Restaurant Supplies Direct for Takeout Containers?
        </h2>
        <p className="text-ink-muted mb-6">
          Finding the right <strong>takeout containers wholesale</strong> supplier shouldn't be complicated. Whether you're a fast-casual restaurant, food truck, or catering operation, we provide high-quality <strong>to-go boxes</strong> and <strong>food containers</strong> that keep your food fresh and your brand looking professional.
        </p>
        <p className="text-ink-muted mb-6">
          Our selection includes everything from traditional <strong>plastic deli containers</strong> to eco-friendly <strong>compostable takeout boxes</strong>. We work with leading manufacturers to ensure you get restaurant-grade quality at wholesale prices — shipped direct from the source.
        </p>
        <p className="text-ink-muted">
          Need <Link href="/custom-printing" className="text-primary-600 hover:underline font-semibold">custom printed packaging</Link>? We can brand your containers with your logo and messaging. Looking for <Link href="/eco-friendly" className="text-primary-600 hover:underline font-semibold">sustainable options</Link>? We carry the largest selection of compostable and recyclable containers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-ink mb-8">
          Popular Takeout Container Types
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
            Ready to Order Takeout Containers in Bulk?
          </h3>
          <p className="text-lg text-ink-muted mb-6">
            Get wholesale pricing, custom printing quotes, and dedicated account support.
            Orders over $2,000 or LA-based operations qualify for same-day delivery through Shure Hospitality Wholesale.
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
              Custom Printing
            </Link>
          </div>
        </div>
      </div>

      {/* Additional SEO Content */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-heading font-bold text-ink mb-4">
          Choosing the Right Takeout Container for Your Menu
        </h2>
        <p className="text-ink-muted mb-4">
          Not all takeout containers are created equal. The right choice depends on your menu items, brand positioning, and sustainability goals:
        </p>
        <ul className="list-disc list-inside space-y-2 text-ink-muted mb-6">
          <li><strong>Hot foods:</strong> Use vented paper or molded fiber containers to prevent sogginess</li>
          <li><strong>Cold salads:</strong> Clear plastic deli containers showcase your ingredients</li>
          <li><strong>Saucy items:</strong> Leak-resistant PP containers with secure lids</li>
          <li><strong>Eco-conscious brands:</strong> Compostable bagasse or kraft paper options</li>
        </ul>
        <p className="text-ink-muted">
          Need help selecting the right containers for your operation? <Link href="/contact" className="text-primary-600 hover:underline font-semibold">Contact our team</Link> for personalized recommendations based on your menu and volume.
        </p>
      </div>
    </CategoryPageLayout>
  );
}
