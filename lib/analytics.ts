// Analytics event tracking for LA-specific features

export type AnalyticsEvent =
  | "la_banner_click"
  | "la_banner_dismiss"
  | "la_checkout_redirect"
  | "la_lead_submission"
  | "la_page_view"
  | "shw_link_click"
  | "custom_quote_submission"
  | "coming_soon_signup";

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an analytics event
 * Integrates with Google Analytics 4 via gtag
 */
export function trackEvent(event: AnalyticsEvent, properties?: EventProperties) {
  // Check if gtag is available (production only)
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event, properties);
  }

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${event}`, properties);
  }
}

/**
 * Track LA banner click
 */
export function trackLABannerClick() {
  trackEvent("la_banner_click", {
    event_category: "engagement",
    event_label: "LA Banner CTA",
  });
}

/**
 * Track LA banner dismiss
 */
export function trackLABannerDismiss() {
  trackEvent("la_banner_dismiss", {
    event_category: "engagement",
    event_label: "LA Banner Dismiss",
  });
}

/**
 * Track LA checkout redirect
 */
export function trackLACheckoutRedirect(zipCode: string, orderValue?: number) {
  trackEvent("la_checkout_redirect", {
    event_category: "conversion",
    event_label: "LA Wholesale Upgrade",
    zip_code: zipCode,
    order_value: orderValue,
  });
}

/**
 * Track LA lead submission
 */
export function trackLALeadSubmission(formData: {
  zipCode: string;
  orderType: string;
  business: string;
}) {
  trackEvent("la_lead_submission", {
    event_category: "conversion",
    event_label: "LA Lead Form",
    zip_code: formData.zipCode,
    order_type: formData.orderType,
    business_name: formData.business,
  });
}

/**
 * Track LA page view
 */
export function trackLAPageView() {
  trackEvent("la_page_view", {
    event_category: "pageview",
    event_label: "LA Hospitality Supplies",
  });
}

/**
 * Track Shure HW link click
 */
export function trackSHWLinkClick(location: string) {
  trackEvent("shw_link_click", {
    event_category: "engagement",
    event_label: location,
  });
}
