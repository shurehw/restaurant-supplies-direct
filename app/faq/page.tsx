import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Restaurant Supplies Direct",
  description: "Common questions about our restaurant supplies, ordering, shipping, custom printing, and wholesale programs.",
};

const faqs = [
  {
    category: "Ordering & Pricing",
    questions: [
      {
        q: "What types of restaurant supplies do you offer?",
        a: "We carry a complete range of restaurant disposables including takeout containers, cups and lids, napkins, gloves, trash bags, eco-friendly packaging, and custom printed items. All products are available for bulk wholesale orders."
      },
      {
        q: "Do you offer wholesale pricing?",
        a: "Yes! We offer volume discounts and wholesale pricing on all products. The more you buy, the more you save. Contact us for custom quotes on large orders or multi-location accounts."
      },
      {
        q: "What are your minimum order quantities?",
        a: "Minimum orders vary by product, typically starting at one case (100-500 units). Custom printing orders have higher minimums. Contact us for specific product MOQs."
      },
      {
        q: "How do I place an order?",
        a: "While our e-commerce platform is launching soon, you can currently place orders by contacting us directly for quotes. Browse our catalog to see products and pricing, then reach out via our contact form or phone."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept major credit cards, wire transfers, and ACH payments. Net payment terms are available for approved wholesale accounts."
      },
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "How fast is shipping?",
        a: "Most orders ship within 1-3 business days. We offer standard ground shipping nationwide, with expedited options available. Los Angeles area customers can qualify for same-day delivery through Shure Hospitality Wholesale."
      },
      {
        q: "Do you offer free shipping?",
        a: "Free shipping is available on orders over $500. Expedited and same-day delivery options incur additional fees."
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we only ship within the United States. International shipping may be available for large wholesale orders - contact us for details."
      },
      {
        q: "Can I track my order?",
        a: "Yes, you'll receive tracking information via email once your order ships."
      },
    ]
  },
  {
    category: "Custom Printing",
    questions: [
      {
        q: "Can I get custom printed packaging?",
        a: "Absolutely. We offer in-house custom printing on cups, napkins, takeout boxes, and bags. Our design team can help create branded packaging that showcases your restaurant's identity."
      },
      {
        q: "What is the minimum order for custom printing?",
        a: "Custom printing minimums vary by product. Typically: cups (1,000 units), napkins (5,000 units), takeout containers (500-1,000 units). Contact us for specific MOQs."
      },
      {
        q: "How long does custom printing take?",
        a: "Production time is typically 2-3 weeks after artwork approval. Rush orders may be available for an additional fee."
      },
      {
        q: "Do you provide design services?",
        a: "Yes! Our in-house design team can help create custom artwork, or we can work with your existing logo and branding."
      },
    ]
  },
  {
    category: "Products & Sustainability",
    questions: [
      {
        q: "Do you offer eco-friendly and compostable options?",
        a: "Yes! We carry a wide selection of compostable takeout containers, sustainable packaging, and recyclable disposables that meet BPI and CMA compostability standards."
      },
      {
        q: "Are your compostable products certified?",
        a: "Yes, our compostable products are certified by BPI (Biodegradable Products Institute) or meet ASTM D6400/D6868 standards for commercial composting."
      },
      {
        q: "What's the difference between compostable and biodegradable?",
        a: "Compostable products break down within a specific timeframe (90-180 days) in commercial composting facilities and leave no toxic residue. Biodegradable simply means it will eventually break down, but without specific timeframes or standards."
      },
      {
        q: "Can I get product samples?",
        a: "Yes, we offer sample packs for many products. Contact us to request samples for evaluation."
      },
    ]
  },
  {
    category: "Wholesale Programs",
    questions: [
      {
        q: "Do you serve restaurant groups and multi-location businesses?",
        a: "Yes! Through our partnership with Shure Hospitality Wholesale, we provide dedicated account management, volume pricing, and custom solutions for restaurant groups."
      },
      {
        q: "What are the benefits of a wholesale account?",
        a: "Wholesale accounts receive volume discounts, dedicated support, net payment terms, custom inventory management, and priority fulfillment."
      },
      {
        q: "How do I apply for a wholesale account?",
        a: "Visit our wholesale programs page or contact us directly. We'll review your business needs and set up a custom pricing structure."
      },
    ]
  },
  {
    category: "Returns & Support",
    questions: [
      {
        q: "What is your return policy?",
        a: "Returns are accepted within 30 days of delivery for most products in unused, original condition. Custom printed items are generally not returnable. Contact us for return authorization."
      },
      {
        q: "What if my order arrives damaged?",
        a: "Contact us immediately if products arrive damaged. We'll arrange for replacement or refund. Please retain packaging and take photos for claims."
      },
      {
        q: "How can I contact customer support?",
        a: "Reach us by phone at (310) 243-6757, email at info@restaurantsuppliesdirect.com, or through our contact form. Our team is available Monday-Friday, 8am-5pm PT."
      },
    ]
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium mb-6">
            Powered by Shure Hospitality Wholesale
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-ink-muted mb-8">
            Find answers to common questions about our products, ordering, shipping, and services.
          </p>

          <div className="space-y-8">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-heading font-bold text-ink mb-4 pb-2 border-b-2 border-black">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => (
                    <div key={qIdx} className="bg-gray-50 p-5 rounded-lg border border-border">
                      <h3 className="text-base font-heading font-semibold text-ink mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-sm text-ink-muted leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Still Have Questions?
            </h3>
            <p className="mb-6">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
