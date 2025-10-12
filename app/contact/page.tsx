import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Restaurant Supplies Direct",
  description: "Get in touch for quotes, bulk orders, custom printing, or wholesale programs. Fast response times and dedicated support.",
  keywords: ["contact restaurant supplies", "bulk order quote", "restaurant supply customer service"],
  openGraph: {
    title: "Contact Us | Restaurant Supplies Direct",
    description: "Get in touch for quotes, bulk orders, custom printing, or wholesale programs. Fast response and dedicated support.",
    type: "website",
    siteName: "Restaurant Supplies Direct",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Restaurant Supplies Direct",
    description: "Get in touch for quotes, bulk orders, custom printing, or wholesale programs.",
  },
  alternates: {
    canonical: "https://restaurantsuppliesdirect.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.svg" alt="Restaurant Supplies Direct" width={48} height={48} priority />
            <h2 className="text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </h2>
          </Link>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink mb-6 text-center">
              Get in Touch
            </h1>
            <p className="text-xl text-ink-muted text-center mb-12">
              Questions about products, pricing, or custom orders? We're here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-xl border-2 border-border text-center">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-heading font-semibold text-ink mb-2">Call Us</h3>
                <p className="text-ink-muted text-sm mb-3">Mon-Fri 8am-6pm PST</p>
                <a href="tel:1-800-555-0123" className="text-primary-600 hover:underline font-semibold">
                  1-800-555-0123
                </a>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-border text-center">
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="font-heading font-semibold text-ink mb-2">Email Us</h3>
                <p className="text-ink-muted text-sm mb-3">24hr response time</p>
                <a href="mailto:info@restaurantsuppliesdirect.com" className="text-primary-600 hover:underline font-semibold">
                  info@rsd.com
                </a>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-border text-center">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-heading font-semibold text-ink mb-2">Visit Us</h3>
                <p className="text-ink-muted text-sm">Los Angeles, CA</p>
                <Link href="/la-hospitality-supplies" className="text-primary-600 hover:underline font-semibold">
                  LA Services →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-border mb-8">
              <h2 className="text-2xl font-heading font-bold text-ink mb-6">Quick Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/custom-printing#quote" className="p-4 bg-bg-muted rounded-lg hover:bg-accent-50 transition-colors">
                  <h3 className="font-heading font-semibold text-ink mb-1">Custom Printing Quote</h3>
                  <p className="text-sm text-ink-muted">Get pricing for branded packaging</p>
                </Link>
                <Link href="/wholesale-programs#apply" className="p-4 bg-bg-muted rounded-lg hover:bg-primary-50 transition-colors">
                  <h3 className="font-heading font-semibold text-ink mb-1">Wholesale Application</h3>
                  <p className="text-sm text-ink-muted">Apply for volume pricing</p>
                </Link>
                <Link href="/la-hospitality-supplies#quote" className="p-4 bg-bg-muted rounded-lg hover:bg-primary-50 transition-colors">
                  <h3 className="font-heading font-semibold text-ink mb-1">LA Local Account</h3>
                  <p className="text-sm text-ink-muted">Same-day delivery in Los Angeles</p>
                </Link>
                <Link href="/shop" className="p-4 bg-bg-muted rounded-lg hover:bg-bg-muted transition-colors">
                  <h3 className="font-heading font-semibold text-ink mb-1">Browse Products</h3>
                  <p className="text-sm text-ink-muted">View our full catalog</p>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border-2 border-primary-600 text-center">
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">
                For Enterprise & Multi-Location
              </h3>
              <p className="text-ink-muted mb-6">
                Large orders or custom solutions? Connect directly with Shure Hospitality Wholesale for dedicated enterprise support.
              </p>
              <a
                href="https://www.shurehw.com"
                className="inline-block px-6 py-3 bg-primary-600 text-white font-heading font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Shure HW →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-ink-muted text-center">
            Restaurant Supplies Direct is powered by{" "}
            <a href="https://www.shurehw.com" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">
              Shure Hospitality Wholesale
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
