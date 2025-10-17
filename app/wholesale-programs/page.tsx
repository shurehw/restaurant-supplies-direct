import { Metadata } from "next";
import Link from "next/link";
import { Building2, TrendingUp, Palette, Utensils, DollarSign, Users, CreditCard, BarChart3, Zap, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wholesale Restaurant Supply Programs | Powered by Shure Hospitality Wholesale",
  description: "Wholesale pricing, bulk orders, and dedicated account management for restaurant groups and high-volume operations. Custom packaging, inventory management, and nationwide delivery.",
  keywords: [
    "wholesale restaurant supplies",
    "bulk restaurant packaging",
    "restaurant supply wholesale programs",
    "wholesale food service supplies",
    "bulk disposables discount",
    "restaurant group purchasing",
  ],
  openGraph: {
    title: "Wholesale Restaurant Supply Programs | Powered by Shure Hospitality Wholesale",
    description: "Wholesale pricing, bulk orders, and dedicated account management for restaurant groups. Custom packaging and nationwide delivery.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Restaurant Supply Programs | Powered by Shure Hospitality Wholesale",
    description: "Wholesale pricing and dedicated account management for restaurant groups.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/wholesale-programs",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the minimum requirements to qualify for wholesale pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We typically work with operations spending $2,000+ per month, multi-location restaurant groups (3+ locations), or businesses with custom packaging needs. Contact us if you're close to these thresholds - we can often work with growing operations."
      }
    },
    {
      "@type": "Question",
      "name": "How much can I save with wholesale pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Volume discounts typically range from 15-30% off standard pricing, depending on order size and frequency. Larger accounts and annual commitments can access even deeper discounts through our partnership with Shure Hospitality Wholesale."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer payment terms like Net-30?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Qualified wholesale accounts can access Net-30 or Net-60 payment terms after credit approval. New accounts typically start with prepayment and transition to terms after establishing history."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle orders for multiple locations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in multi-location accounts. Your dedicated account manager will coordinate orders, manage inventory, and arrange delivery to all your locations - whether you have 3 stores or 300."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Restaurant Supplies Direct and Shure Hospitality Wholesale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restaurant Supplies Direct is powered by Shure Hospitality Wholesale. Small to medium accounts order through RSD for streamlined e-commerce. Large accounts and complex multi-location operations work directly with Shure HW for white-glove enterprise service."
      }
    }
  ]
};

export default function WholesaleProgramsPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-heading text-ink">
              Wholesale Programs Built for Growth
            </h1>
            <p className="text-xl sm:text-2xl text-ink-muted mb-8">
              Volume pricing, dedicated support, and custom solutions for restaurant groups and high-volume operations.
            </p>
            <Link
              href="#apply"
              className="inline-block px-8 py-4 bg-brand-orange text-white font-heading font-semibold text-lg rounded-lg hover:bg-brand-orange-dark transition-colors shadow-md hover:shadow-lg"
            >
              Apply for Wholesale Account
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Is Wholesale Right for You?
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Our wholesale programs are designed for operations that need more than just online ordering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Multi-Location Groups", desc: "3+ restaurant locations", Icon: Building2 },
              { title: "High-Volume Orders", desc: "$2,000+ monthly spend", Icon: TrendingUp },
              { title: "Custom Packaging Needs", desc: "Branded supplies required", Icon: Palette },
              { title: "Enterprise Catering", desc: "Large-scale operations", Icon: Utensils },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border-2 border-border text-center shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <item.Icon className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-ink-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              What You Get with Wholesale
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Volume Pricing", desc: "Save 15-30% on bulk orders with tiered discount structure", Icon: DollarSign },
              { title: "Dedicated Account Manager", desc: "Personal point of contact who knows your business", Icon: Users },
              { title: "Custom Payment Terms", desc: "Net-30 or Net-60 terms for qualified accounts", Icon: CreditCard },
              { title: "Inventory Management", desc: "Track usage, forecast needs, prevent stockouts", Icon: BarChart3 },
              { title: "Priority Production", desc: "Faster turnaround on custom printing orders", Icon: Zap },
              { title: "Same-Day Delivery (LA)", desc: "Local warehousing for urgent orders in Los Angeles", Icon: Truck },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white rounded-xl border border-border">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <item.Icon className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-ink-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHW Integration */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-6">
                Backed by Shure Hospitality Wholesale
              </h2>
              <p className="text-lg text-ink-muted mb-6">
                Our wholesale program is powered by <strong>Shure Hospitality Wholesale</strong>, a Los Angeles-based distributor trusted by premier hospitality brands nationwide.
              </p>
              <p className="text-lg text-ink-muted mb-6">
                With decades of experience serving restaurant groups, hotels, and large-scale operations, Shure HW brings enterprise-level service and logistics to your operation — whether you're running 3 locations or 300.
              </p>
              <Link
                href="https://www.shurehw.com"
                className="inline-flex items-center gap-2 text-black hover:text-zinc-900 font-semibold text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Shure HW →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-md">
              <h3 className="text-2xl font-heading font-bold text-ink mb-6">Case Study: Multi-Unit Group</h3>
              <div className="space-y-4 text-ink-muted">
                <p><strong>Challenge:</strong> 12-location fast-casual chain needed consistent packaging across all stores with custom branding.</p>
                <p><strong>Solution:</strong> Shure HW set up centralized ordering, custom printing, and regional distribution.</p>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li>23% cost reduction vs. retail suppliers</li>
                  <li>Single point of contact for all locations</li>
                  <li>Custom branded packaging in 3 weeks</li>
                  <li>Zero stockouts in 12 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-ink mb-8 text-center">
            Wholesale Program FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                What are the minimum requirements to qualify for wholesale pricing?
              </h3>
              <p className="text-ink-muted">
                We typically work with operations spending $2,000+ per month, multi-location restaurant groups (3+ locations), or businesses with custom packaging needs. Contact us if you're close to these thresholds - we can often work with growing operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                How much can I save with wholesale pricing?
              </h3>
              <p className="text-ink-muted">
                Volume discounts typically range from 15-30% off standard pricing, depending on order size and frequency. Larger accounts and annual commitments can access even deeper discounts through our partnership with Shure Hospitality Wholesale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                Do you offer payment terms like Net-30?
              </h3>
              <p className="text-ink-muted">
                Yes. Qualified wholesale accounts can access Net-30 or Net-60 payment terms after credit approval. New accounts typically start with prepayment and transition to terms after establishing history.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                Can you handle orders for multiple locations?
              </h3>
              <p className="text-ink-muted">
                Absolutely. We specialize in multi-location accounts. Your dedicated account manager will coordinate orders, manage inventory, and arrange delivery to all your locations - whether you have 3 stores or 300.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-border shadow-sm">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                What's the difference between Restaurant Supplies Direct and Shure Hospitality Wholesale?
              </h3>
              <p className="text-ink-muted">
                Restaurant Supplies Direct is powered by Shure Hospitality Wholesale. Small to medium accounts order through RSD for streamlined e-commerce. Large accounts and complex multi-location operations work directly with Shure HW for white-glove enterprise service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 sm:py-20 bg-bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Apply for Wholesale Account
            </h2>
            <p className="text-lg text-ink-muted">
              Tell us about your operation and we'll set up a call to discuss pricing and terms.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border-2 border-border">
            <p className="text-center text-ink-muted mb-6">
              Wholesale applications are handled directly by Shure Hospitality Wholesale to ensure personalized service.
            </p>
            <Link
              href="/la-hospitality-supplies#quote"
              className="block w-full px-6 py-4 bg-black text-white font-heading font-semibold text-lg rounded-lg hover:bg-zinc-900 transition-colors text-center"
            >
              Submit Wholesale Application
            </Link>
            <p className="text-sm text-ink-muted text-center mt-4">
              Or call us directly: <a href="tel:+13102436757" className="text-black hover:underline font-semibold">(310) 243-6757</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
