"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getClientGeo } from "@/lib/geo";
import { trackLABannerClick, trackLABannerDismiss, trackSHWLinkClick } from "@/lib/analytics";

export default function LABanner() {
  const [isLA, setIsLA] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user previously dismissed the banner
    const dismissed = sessionStorage.getItem("la-banner-dismissed");
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    // Detect LA location
    getClientGeo().then((geo) => {
      setIsLA(geo.isLA);
    });
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("la-banner-dismissed", "true");
    trackLABannerDismiss();
  };

  const handleCTAClick = () => {
    trackLABannerClick();
  };

  const handleSHWClick = () => {
    trackSHWLinkClick("LA Banner");
  };

  if (!isLA || !isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Serving Los Angeles Hospitality Directly</span>
            {" • "}
            Local delivery, custom packaging & wholesale programs by{" "}
            <a
              href="https://www.shurehw.com"
              className="underline hover:text-orange-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSHWClick}
            >
              Shure Hospitality Wholesale
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/la-hospitality-supplies"
            className="whitespace-nowrap text-sm font-medium bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
            onClick={handleCTAClick}
          >
            Learn More →
          </Link>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
