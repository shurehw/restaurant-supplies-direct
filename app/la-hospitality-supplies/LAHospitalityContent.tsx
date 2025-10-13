"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// JSON-LD Schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shure Hospitality Wholesale",
  "url": "https://www.shurehw.com",
  "logo": "https://restaurantsuppliesdirect.com/logo-full.svg",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "geoRadius": "50000",
    "description": "Los Angeles Metropolitan Area"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Restaurant Supplies Direct",
    "url": "https://restaurantsuppliesdirect.com"
  },
  "serviceType": [
    "Restaurant Supply Wholesale",
    "Custom Packaging",
    "Restaurant Disposables",
    "Same-Day Delivery"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "addressCountry": "US"
  }
};

export default function LAHospitalityContent() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    zipCode: "",
    orderType: "takeout-packaging",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/submit-la-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        zipCode: "",
        orderType: "takeout-packaging",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.svg"
              alt="Restaurant Supplies Direct"
              width={48}
              height={48}
              priority
            />
            <h2 className="text-2xl font-heading font-bold text-ink leading-heading">
              Restaurant Supplies Direct
            </h2>
          </Link>
          <div className="text-sm text-ink-muted">
            📍 Los Angeles, CA
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-medium">
              Los Angeles Area Only
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink leading-heading">
              Local Partner. National Power.
            </h1>
            <p className="text-xl sm:text-2xl text-ink-muted max-w-3xl mx-auto">
              Same-day delivery and custom packaging for Los Angeles hospitality venues — powered by{" "}
              <a
                href="https://www.shurehw.com"
                className="text-blue-600 hover:text-blue-700 underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shure Hospitality Wholesale
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why Shure HW for LA Operators */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink text-center mb-12">
            Why Shure HW for LA Operators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-bg-muted rounded-xl border border-border">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                Local Warehousing
              </h3>
              <p className="text-ink-muted">
                Los Angeles-based inventory means same-day delivery for urgent orders. No waiting for cross-country shipping.
              </p>
            </div>
            <div className="p-8 bg-bg-muted rounded-xl border border-border">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                Personal Account Reps
              </h3>
              <p className="text-ink-muted">
                Dedicated support who understand LA hospitality. Get custom quotes, bulk pricing, and flexible payment terms.
              </p>
            </div>
            <div className="p-8 bg-bg-muted rounded-xl border border-border">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                Custom Printing
              </h3>
              <p className="text-ink-muted">
                In-house design and production for branded cups, napkins, and takeout packaging. Local turnaround times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 sm:py-20 bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Local Delivery Map
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Same-day and next-day delivery available throughout Los Angeles County and surrounding areas.
            </p>
          </div>

          {/* Service Area Visual */}
          <div className="bg-white rounded-xl p-8 sm:p-12 border border-border max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center space-y-4">
                <div className="text-6xl">🗺️</div>
                <p className="text-lg font-medium text-ink">Service Radius: Los Angeles County</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-ink-muted mt-6">
                  <div>Downtown LA</div>
                  <div>West LA</div>
                  <div>San Fernando Valley</div>
                  <div>South Bay</div>
                  <div>Santa Monica</div>
                  <div>Pasadena</div>
                  <div>Long Beach</div>
                  <div>Culver City</div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-ink-muted mt-6">
              ZIP codes 900xx–902xx • Same-day delivery available for orders placed before 2 PM
            </p>
          </div>
        </div>
      </section>

      {/* Get a Quote Form */}
      <section className="py-16 sm:py-20 bg-white" id="quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-4">
              Request Local Account
            </h2>
            <p className="text-lg text-ink-muted">
              Get wholesale pricing, custom packaging quotes, and same-day delivery for your LA venue.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-heading font-bold text-ink mb-3">
                Thank You!
              </h3>
              <p className="text-ink-muted mb-6">
                A Shure Hospitality Wholesale account manager will contact you within 1 business day to discuss your needs.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-blue-600 hover:text-blue-700 font-medium underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-bg-muted p-8 rounded-xl border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-ink mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-ink mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    pattern="[0-9]{5}"
                    placeholder="90001"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="orderType" className="block text-sm font-medium text-ink mb-2">
                    Primary Interest *
                  </label>
                  <select
                    id="orderType"
                    name="orderType"
                    required
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                  >
                    <option value="takeout-packaging">Takeout Containers</option>
                    <option value="custom-printing">Custom Printing</option>
                    <option value="eco-friendly">Eco-Friendly Supplies</option>
                    <option value="cups-lids">Cups & Lids</option>
                    <option value="napkins-towels">Napkins & Towels</option>
                    <option value="gloves-bags">Gloves & Bags</option>
                    <option value="full-program">Full Supply Program</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Order volume, custom printing requirements, delivery frequency, etc."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-6 py-4 bg-blue-600 text-white font-heading font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Submitting..." : "Request Account"}
              </button>

              <p className="text-xs text-ink-muted text-center">
                By submitting, you agree to be contacted by Shure Hospitality Wholesale regarding your inquiry.
                We typically respond within 1 business day.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
            Trusted by Leading LA Hospitality Brands
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            From independent cafes to multi-unit restaurant groups, we power LA&apos;s best hospitality venues with reliable supplies and custom packaging.
          </p>
          <Link
            href="https://www.shurehw.com"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium text-lg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Shure Hospitality Wholesale →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
