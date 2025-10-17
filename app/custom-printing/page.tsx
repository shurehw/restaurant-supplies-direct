import { Metadata } from "next";
import Link from "next/link";
import CustomPrintingQuoteForm from "@/components/CustomPrintingQuoteForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom Printed Packaging | Branded Cups & Napkins | Restaurant Supplies Direct",
  description: "Custom printing for restaurant packaging - branded cups, napkins, takeout boxes, and bags. In-house design, fast turnaround, and wholesale pricing. Powered by Shure Hospitality Wholesale.",
  keywords: [
    "custom printed packaging",
    "branded restaurant cups",
    "custom logo napkins",
    "printed takeout boxes",
    "custom restaurant packaging",
    "branded disposables",
    "logo printed cups",
    "custom food packaging",
  ],
  openGraph: {
    title: "Custom Printed Packaging | Restaurant Supplies Direct",
    description: "Turn your packaging into a marketing tool with custom printed cups, napkins, and takeout boxes.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Printed Packaging | Restaurant Supplies Direct",
    description: "Custom printed cups, napkins, and takeout boxes for restaurants.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/custom-printing",
  },
};

const customProducts = [
  {
    name: "Custom Printed Cups",
    description: "Hot cups, cold cups, coffee sleeves",
    minOrder: "1,000 units",
    leadTime: "2-3 weeks",
  },
  {
    name: "Logo Napkins",
    description: "Beverage, lunch, and dinner napkins",
    minOrder: "5,000 units",
    leadTime: "2-3 weeks",
  },
  {
    name: "Branded Takeout Boxes",
    description: "To-go containers, bags, and trays",
    minOrder: "2,500 units",
    leadTime: "3-4 weeks",
  },
  {
    name: "Custom Shopping Bags",
    description: "Paper and plastic bags with your logo",
    minOrder: "1,000 units",
    leadTime: "2-3 weeks",
  },
];

const process = [
  {
    step: 1,
    title: "Submit Your Design",
    description: "Upload your logo or work with our design team to create custom artwork.",
  },
  {
    step: 2,
    title: "Review Digital Proof",
    description: "We'll send you a detailed proof showing exactly how your packaging will look.",
  },
  {
    step: 3,
    title: "Production & Quality Check",
    description: "Your order goes into production with rigorous quality control at every step.",
  },
  {
    step: 4,
    title: "Fast Delivery",
    description: "Nationwide shipping. LA orders eligible for same-day delivery through Shure HW.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the minimum order quantities for custom printing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimums vary by product: cups start at 1,000 units, napkins at 5,000, takeout boxes at 2,500, and bags at 1,000. These minimums help keep per-unit costs low and quality high."
      }
    },
    {
      "@type": "Question",
      "name": "How long does custom printing take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard turnaround is 2-4 weeks from proof approval. Rush orders (1-2 weeks) are available for an additional fee. Timeline includes design, proofing, production, and shipping."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to provide artwork, or can you design it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both! If you have a logo, we'll adapt it for printing. If not, our in-house design team can create custom artwork that matches your brand. Design services are included in most custom printing orders."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see a proof before production?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Every custom printing order includes a detailed digital proof showing exactly how your packaging will look. We don't start production until you approve the proof."
      }
    },
    {
      "@type": "Question",
      "name": "How much does custom printing cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on product type, quantity, number of colors, and print area. Generally, expect to pay 20-40% more than blank stock, with per-unit costs decreasing significantly at higher volumes. Request a quote for exact pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you print multiple colors or full-color designs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer 1-4 color printing and full-color digital printing depending on the product. Full-color is great for complex logos and photos. Multi-color spot printing works well for simpler designs and offers better durability."
      }
    }
  ]
};

export default function CustomPrintingPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-orange text-white text-sm font-medium mb-6">
              Powered by Shure Hospitality Wholesale
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink mb-6 leading-heading">
              Bring Your Brand to Life on Every Cup, Box, and Napkin
            </h1>
            <p className="text-xl sm:text-2xl text-ink-muted mb-8">
              Custom printed packaging that turns every takeout order into a marketing opportunity. In-house design, fast turnaround, and wholesale pricing.
            </p>
            <Link
              href="#quote"
              className="inline-block px-8 py-4 bg-brand-orange text-white font-heading font-semibold text-lg rounded-lg hover:bg-brand-orange-dark transition-colors shadow-md hover:shadow-lg"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Print */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              What We Can Print For You
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              From coffee cups to takeout boxes, we print on everything your restaurant needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customProducts.map((product, index) => (
              <div key={index} className="p-6 bg-bg-muted rounded-xl border-2 border-border hover:border-brand-orange transition-all">
                <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                  {product.name}
                </h3>
                <p className="text-ink-muted mb-4">{product.description}</p>
                <div className="text-sm space-y-1">
                  <div className="text-ink-muted">
                    <span className="font-semibold">Min Order:</span> {product.minOrder}
                  </div>
                  <div className="text-ink-muted">
                    <span className="font-semibold">Lead Time:</span> {product.leadTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              How Custom Printing Works
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              From concept to delivery, we make custom printing simple and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
                Why Custom Print with Restaurant Supplies Direct?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-1">
                      In-House Design Team
                    </h3>
                    <p className="text-ink-muted">
                      Don't have a logo? Our design team can create custom artwork that matches your brand.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-1">
                      Fast Turnaround
                    </h3>
                    <p className="text-ink-muted">
                      Most orders ship within 2-4 weeks. Rush orders available for time-sensitive launches.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-1">
                      Wholesale Pricing
                    </h3>
                    <p className="text-ink-muted">
                      Direct relationships with manufacturers mean better pricing than retail or local print shops.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-ink mb-1">
                      Quality Guarantee
                    </h3>
                    <p className="text-ink-muted">
                      Every order includes a detailed proof and quality inspection before shipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-12 rounded-2xl border-2 border-black">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-ink mb-4">
                  Multi-Location? High Volume?
                </h3>
                <p className="text-lg text-ink-muted mb-6">
                  We partner with <strong>Shure Hospitality Wholesale</strong> to serve restaurant groups and high-volume operations with:
                </p>
                <ul className="text-left space-y-3 mb-8 text-ink-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">-</span>
                    <span>Dedicated account management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">-</span>
                    <span>Volume discounts on large orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">-</span>
                    <span>Inventory management & forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">-</span>
                    <span>Same-day delivery in LA</span>
                  </li>
                </ul>
                <Link
                  href="/wholesale-programs"
                  className="inline-block px-6 py-3 bg-black text-white font-heading font-semibold rounded-lg hover:bg-zinc-900 transition-colors"
                >
                  Learn About Wholesale Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8 text-center">
            Custom Printing FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                What are the minimum order quantities for custom printing?
              </h3>
              <p className="text-ink-muted">
                Minimums vary by product: cups start at 1,000 units, napkins at 5,000, takeout boxes at 2,500, and bags at 1,000. These minimums help keep per-unit costs low and quality high.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                How long does custom printing take?
              </h3>
              <p className="text-ink-muted">
                Standard turnaround is 2-4 weeks from proof approval. Rush orders (1-2 weeks) are available for an additional fee. Timeline includes design, proofing, production, and shipping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                Do I need to provide artwork, or can you design it?
              </h3>
              <p className="text-ink-muted">
                Both! If you have a logo, we'll adapt it for printing. If not, our in-house design team can create custom artwork that matches your brand. Design services are included in most custom printing orders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                Can I see a proof before production?
              </h3>
              <p className="text-ink-muted">
                Yes! Every custom printing order includes a detailed digital proof showing exactly how your packaging will look. We don't start production until you approve the proof.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                How much does custom printing cost?
              </h3>
              <p className="text-ink-muted">
                Pricing depends on product type, quantity, number of colors, and print area. Generally, expect to pay 20-40% more than blank stock, with per-unit costs decreasing significantly at higher volumes. Request a quote for exact pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                Can you print multiple colors or full-color designs?
              </h3>
              <p className="text-ink-muted">
                Yes! We offer 1-4 color printing and full-color digital printing depending on the product. Full-color is great for complex logos and photos. Multi-color spot printing works well for simpler designs and offers better durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16 sm:py-20 bg-bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Request a Custom Printing Quote
            </h2>
            <p className="text-lg text-ink-muted">
              Tell us what you need and we'll send you a detailed quote within 1 business day.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border-2 border-border">
            <CustomPrintingQuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
