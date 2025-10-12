import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
};

export default function WholesaleProgramsPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.svg" alt="Restaurant Supplies Direct" width={48} height={48} priority />
            <span className="text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-ink-muted hover:text-ink transition-colors">Shop</Link>
            <Link href="/custom-printing" className="text-ink-muted hover:text-ink transition-colors">Custom Printing</Link>
            <Link href="#apply" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Apply Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Powered by Shure Hospitality Wholesale
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-heading">
              Wholesale Programs Built for Growth
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Volume pricing, dedicated support, and custom solutions for restaurant groups and high-volume operations.
            </p>
            <Link
              href="#apply"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-heading font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply for Wholesale Account
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 sm:py-20 bg-white">
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
              { title: "Multi-Location Groups", desc: "3+ restaurant locations", icon: "🏢" },
              { title: "High-Volume Orders", desc: "$2,000+ monthly spend", icon: "📈" },
              { title: "Custom Packaging Needs", desc: "Branded supplies required", icon: "🎨" },
              { title: "Enterprise Catering", desc: "Large-scale operations", icon: "🍽️" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-bg-muted rounded-xl border-2 border-border text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
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
              { title: "Volume Pricing", desc: "Save 15-30% on bulk orders with tiered discount structure", icon: "💰" },
              { title: "Dedicated Account Manager", desc: "Personal point of contact who knows your business", icon: "🤝" },
              { title: "Custom Payment Terms", desc: "Net-30 or Net-60 terms for qualified accounts", icon: "💳" },
              { title: "Inventory Management", desc: "Track usage, forecast needs, prevent stockouts", icon: "📊" },
              { title: "Priority Production", desc: "Faster turnaround on custom printing orders", icon: "⚡" },
              { title: "Same-Day Delivery (LA)", desc: "Local warehousing for urgent orders in Los Angeles", icon: "🚚" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white rounded-xl border border-border">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center text-3xl">
                  {item.icon}
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
      <section className="py-16 sm:py-20 bg-white">
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
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Shure HW →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border-2 border-primary-600">
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
              className="block w-full px-6 py-4 bg-primary-600 text-white font-heading font-semibold text-lg rounded-lg hover:bg-primary-700 transition-colors text-center"
            >
              Submit Wholesale Application
            </Link>
            <p className="text-sm text-ink-muted text-center mt-4">
              Or call us directly: <a href="tel:1-800-555-0123" className="text-primary-600 hover:underline font-semibold">1-800-555-0123</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-ink-muted text-center">
            Restaurant Supplies Direct is your trusted source for restaurant disposables, packaging, and custom print — shipped direct from the source.
            <br />
            Powered by{" "}
            <a href="https://www.shurehw.com" className="text-primary-600 hover:text-primary-700 transition-colors underline" target="_blank" rel="noopener noreferrer">
              Shure Hospitality Wholesale
            </a>
            , a national supplier serving leading hospitality brands.
          </p>
        </div>
      </footer>
    </div>
  );
}
