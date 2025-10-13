"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function CustomPrintingQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    productType: "",
    quantity: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/submit-custom-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      setStatus("success");
      trackEvent("custom_quote_submission", {
        product_type: formData.productType,
        business: formData.business,
      });

      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        productType: "",
        quantity: "",
        details: "",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === "success") {
    return (
      <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-heading font-bold text-ink mb-3">
          Quote Request Received!
        </h3>
        <p className="text-ink-muted mb-6">
          Thank you for your interest in custom printing. A member of our team will review your request and send you a detailed quote within 1 business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-orange-500 hover:text-orange-600 font-medium underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-bg-muted disabled:cursor-not-allowed"
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
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-bg-muted disabled:cursor-not-allowed"
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
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-bg-muted disabled:cursor-not-allowed"
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
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-bg-muted disabled:cursor-not-allowed"
          />
        </div>
      </div>

      <div>
        <label htmlFor="productType" className="block text-sm font-medium text-ink mb-2">
          What would you like to print? *
        </label>
        <select
          id="productType"
          name="productType"
          required
          value={formData.productType}
          onChange={handleChange}
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white disabled:bg-bg-muted disabled:cursor-not-allowed"
        >
          <option value="">Select a product type</option>
          <option value="cups">Custom Printed Cups</option>
          <option value="napkins">Logo Napkins</option>
          <option value="boxes">Branded Takeout Boxes</option>
          <option value="bags">Custom Shopping Bags</option>
          <option value="multiple">Multiple Products</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-ink mb-2">
          Estimated Quantity Needed
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="e.g., 5,000 cups, 10,000 napkins"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-bg-muted disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-ink mb-2">
          Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          disabled={status === "submitting"}
          placeholder="Tell us about your design needs, timeline, and any specific requirements..."
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none disabled:bg-bg-muted disabled:cursor-not-allowed"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-4 bg-orange-500 text-white font-heading font-semibold text-lg rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Request Quote"}
      </button>

      {status === "error" && (
        <p className="text-sm text-error text-center">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <p className="text-xs text-ink-muted text-center">
        By submitting, you agree to be contacted regarding your custom printing inquiry.
        We typically respond within 1 business day.
      </p>
    </form>
  );
}
