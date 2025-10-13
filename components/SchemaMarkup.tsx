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
