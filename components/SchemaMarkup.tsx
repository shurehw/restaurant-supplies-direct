export function SiteNavigationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Takeout Containers",
        "url": "https://restaurantsuppliesdirect.com/takeout-containers"
      },
      {
        "@type": "WebPage",
        "name": "Cups & Lids",
        "url": "https://restaurantsuppliesdirect.com/cups-and-lids"
      },
      {
        "@type": "WebPage",
        "name": "Napkins & Towels",
        "url": "https://restaurantsuppliesdirect.com/napkins-and-towels"
      },
      {
        "@type": "WebPage",
        "name": "Gloves & Bags",
        "url": "https://restaurantsuppliesdirect.com/gloves-and-bags"
      },
      {
        "@type": "WebPage",
        "name": "Eco-Friendly",
        "url": "https://restaurantsuppliesdirect.com/eco-friendly"
      },
      {
        "@type": "WebPage",
        "name": "Tabletop",
        "url": "https://restaurantsuppliesdirect.com/tabletop"
      },
      {
        "@type": "WebPage",
        "name": "Custom Printing",
        "url": "https://restaurantsuppliesdirect.com/custom-printing"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Restaurant Supplies Direct",
    "url": "https://restaurantsuppliesdirect.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://restaurantsuppliesdirect.com/shop?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AggregateRatingSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Restaurant Supplies Direct",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Restaurant Supplies Direct",
    "url": "https://restaurantsuppliesdirect.com",
    "logo": "https://restaurantsuppliesdirect.com/logo-full.svg",
    "description": "Wholesale restaurant disposables, takeout containers, and custom printed packaging shipped direct from the source.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-310-243-6757",
      "contactType": "Customer Service",
      "email": "info@restaurantsuppliesdirect.com",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.shurehw.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostSchema({
  title,
  description,
  datePublished,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Organization",
      "name": "Restaurant Supplies Direct"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Restaurant Supplies Direct",
      "logo": {
        "@type": "ImageObject",
        "url": "https://restaurantsuppliesdirect.com/logo-full.svg"
      }
    },
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
