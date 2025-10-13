"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  inquiryType: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "general",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-contact", {
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
        email: "",
        phone: "",
        company: "",
        message: "",
        inquiryType: "general",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl border-2 border-black text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-ink mb-2">Message Sent!</h3>
        <p className="text-ink-muted mb-6">
          We'll get back to you within 24 hours. Usually much faster.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-zinc-900 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl border-2 border-border space-y-6"
    >
      <div>
        <h2 className="text-2xl font-heading font-bold text-ink mb-2">Send Us a Message</h2>
        <p className="text-sm text-ink-muted">We'll respond within 24 hours</p>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="john@restaurant.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-ink mb-2">
            Restaurant/Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="Your Restaurant Name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm font-semibold text-ink mb-2">
          I'm interested in *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
        >
          <option value="general">General Inquiry</option>
          <option value="bulk-order">Bulk Order Quote</option>
          <option value="custom-printing">Custom Printing</option>
          <option value="wholesale">Wholesale Program</option>
          <option value="la-delivery">LA Same-Day Delivery</option>
          <option value="support">Product Support</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-4 bg-black text-white font-semibold rounded-lg hover:bg-zinc-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-ink-muted text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-ink">
          Privacy Policy
        </a>
      </p>
    </motion.form>
  );
}
