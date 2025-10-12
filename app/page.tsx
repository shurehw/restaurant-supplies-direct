"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, just simulate a successful submission
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
            Coming Soon
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-ink leading-heading">
            Shop Direct from the Source
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-ink-muted max-w-2xl mx-auto">
            Premium restaurant disposables, packaging, and custom print — shipped direct from the source.
            Nationwide fulfillment for independent operators and leading hospitality brands.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">Takeout Containers</h3>
              <p className="text-sm text-ink-muted">Bulk wholesale to-go boxes and deli containers</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">Custom Printing</h3>
              <p className="text-sm text-ink-muted">Branded cups, napkins, and packaging</p>
            </div>
            <div className="p-6 bg-bg-muted rounded-lg border border-border">
              <h3 className="text-lg font-heading font-semibold text-ink mb-2">Eco-Friendly</h3>
              <p className="text-sm text-ink-muted">Compostable and sustainable options</p>
            </div>
          </div>

          {/* Email Signup Form */}
          <div className="pt-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={status === "submitting" || status === "success"}
                    className="flex-1 px-4 py-3 border border-border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent disabled:bg-bg-muted disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === "submitting" ? "Submitting..." : status === "success" ? "Subscribed!" : "Notify Me"}
                  </button>
                </div>
              </div>
              {status === "success" && (
                <p className="text-sm text-success">
                  Thanks! We&apos;ll notify you when we launch.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
            <p className="text-sm text-ink-muted mt-4">
              Be the first to know when we launch and get exclusive early access offers.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-ink-muted text-center">
            Restaurant Supplies Direct is your trusted source for restaurant disposables, packaging, and custom print — shipped direct from the source.
            <br />
            Powered by{" "}
            <a
              href="https://www.shurehw.com"
              className="text-primary-600 hover:text-primary-700 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shure Hospitality Wholesale
            </a>
            , a national supplier serving leading hospitality brands.
          </p>
        </div>
      </footer>
    </div>
  );
}
