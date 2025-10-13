"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);

    // Enable analytics if user accepts
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);

    // Disable analytics if user declines
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border-2 border-black rounded-xl shadow-2xl p-6 sm:flex sm:items-start sm:justify-between sm:gap-6">
              <div className="flex-1 mb-4 sm:mb-0">
                <h3 className="text-lg font-heading font-bold text-ink mb-2">
                  We use cookies
                </h3>
                <p className="text-sm text-ink-muted">
                  We use cookies to improve your experience, analyze site traffic, and provide personalized content.
                  By clicking "Accept", you consent to our use of cookies.{" "}
                  <Link href="/privacy" className="text-black hover:underline font-semibold">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 border-2 border-border text-ink font-semibold text-sm rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-black text-white font-semibold text-sm rounded-lg hover:bg-zinc-900 transition-colors"
                >
                  Accept
                </button>
              </div>
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 text-ink-muted hover:text-ink transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
