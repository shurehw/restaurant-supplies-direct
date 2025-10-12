import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are your business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phone support is available Monday-Friday 8am-6pm PST. Email support operates 24/7 with responses within 24 hours. LA warehouse pickup available Monday-Friday 7am-4pm."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you fulfill an urgent order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most in-stock items ship within 1-3 business days. Los Angeles area customers can qualify for same-day delivery on urgent orders. Call us for rush order availability and expedited shipping options."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide product samples?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer product samples for most items, especially for custom printing orders. Contact us with your sample request and we'll arrange to send them to you, typically at no cost for serious inquiries."
      }
    },
    {
      "@type": "Question",
      "name": "Can I visit your warehouse or showroom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Los Angeles area customers can schedule visits to our warehouse to view products, pick up orders, or meet with our team. Contact us to schedule an appointment."
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-ink mb-2">Call Us</h3>
                <p className="text-ink-muted text-sm mb-3">Mon-Fri 8am-6pm PST</p>
                <a href="tel:1-800-555-0123" className="text-primary-600 hover:underline font-semibold">
                  1-800-555-0123
                </a>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-accent-600" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-ink mb-2">Email Us</h3>
                <p className="text-ink-muted text-sm mb-3">24hr response time</p>
                <a href="mailto:info@restaurantsuppliesdirect.com" className="text-primary-600 hover:underline font-semibold">
                  info@rsd.com
                </a>
              </div>
              <div className="p-6 bg-white rounded-xl border-2 border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
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

      {/* Additional Content for SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold text-ink mb-6">
              How to Contact Restaurant Supplies Direct
            </h2>
            <p className="text-ink-muted mb-6">
              Whether you're placing your first order or managing supplies for multiple locations, our team is here to help. We offer multiple ways to connect based on your needs and timeline.
            </p>
            <p className="text-ink-muted mb-6">
              For <strong>immediate questions</strong> or urgent orders, call us at <a href="tel:1-800-555-0123" className="text-primary-600 hover:underline font-semibold">1-800-555-0123</a> during business hours (Mon-Fri 8am-6pm PST). Our phone support team can provide real-time pricing, check stock availability, and process rush orders.
            </p>
            <p className="text-ink-muted mb-6">
              For <strong>custom quotes and detailed inquiries</strong>, email us at <a href="mailto:info@restaurantsuppliesdirect.com" className="text-primary-600 hover:underline font-semibold">info@restaurantsuppliesdirect.com</a>. We respond to all emails within 24 hours and can provide detailed pricing, product recommendations, and shipping estimates.
            </p>
            <p className="text-ink-muted mb-8">
              <strong>Los Angeles area restaurants</strong> can access same-day delivery, local account management, and warehouse pickup through our partnership with Shure Hospitality Wholesale. <Link href="/la-hospitality-supplies" className="text-primary-600 hover:underline font-semibold">Learn more about LA services</Link>.
            </p>

            <h2 className="text-3xl font-heading font-bold text-ink mb-6 mt-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-bg-muted p-6 rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  What are your business hours?
                </h3>
                <p className="text-ink-muted">
                  Phone support is available Monday-Friday 8am-6pm PST. Email support operates 24/7 with responses within 24 hours. LA warehouse pickup available Monday-Friday 7am-4pm.
                </p>
              </div>
              <div className="bg-bg-muted p-6 rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  How quickly can you fulfill an urgent order?
                </h3>
                <p className="text-ink-muted">
                  Most in-stock items ship within 1-3 business days. Los Angeles area customers can qualify for same-day delivery on urgent orders. Call us for rush order availability and expedited shipping options.
                </p>
              </div>
              <div className="bg-bg-muted p-6 rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  Do you provide product samples?
                </h3>
                <p className="text-ink-muted">
                  Yes! We offer product samples for most items, especially for custom printing orders. Contact us with your sample request and we'll arrange to send them to you, typically at no cost for serious inquiries.
                </p>
              </div>
              <div className="bg-bg-muted p-6 rounded-lg border border-border">
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  Can I visit your warehouse or showroom?
                </h3>
                <p className="text-ink-muted">
                  Yes! Los Angeles area customers can schedule visits to our warehouse to view products, pick up orders, or meet with our team. Contact us to schedule an appointment.
                </p>
              </div>
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
