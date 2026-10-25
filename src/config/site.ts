/**
 * Central site + SEO configuration. Edit here once real business details are confirmed.
 * Contact details are intentionally null until the owner supplies verified values —
 * components hide any field that is null.
 */
export const site = {
  name: "WebCopps",
  positioning: "Digital Design & Development Studio",
  tagline: "Websites Built for Better Business",
  url: "https://webcopps.com",
  defaultDescription:
    "WebCopps is a digital design and development studio building fast, accessible WordPress, WooCommerce and Shopify websites for growing businesses worldwide.",
  locale: "en",
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },
  social: [] as { label: string; href: string }[],
  /** Set false on staging deployments to emit noindex on every page. */
  indexable: true,
};

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;
