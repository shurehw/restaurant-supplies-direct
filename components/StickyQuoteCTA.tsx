"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function StickyQuoteCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white font-heading font-semibold rounded-full shadow-2xl hover:shadow-blue-600/50 hover:scale-105 transition-all"
      >
        <MessageSquare className="w-5 h-5" />
        Get Quote
      </Link>
    </div>
  );
}
