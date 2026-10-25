export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** ISO date. Drafts should be reviewed before publication. */
  date: string;
  readingMinutes: number;
  relatedService: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const articleCategories = [
  "WordPress",
  "eCommerce",
  "Performance",
  "Technical SEO",
  "Redesign",
  "Maintenance",
];

export const articles: Article[] = [
  {
    slug: "signs-your-website-needs-a-redesign",
    title: "Seven signs your business website needs a redesign",
    description:
      "How to tell whether your website needs a refresh, a rebuild or just a few targeted fixes — before spending money on the wrong thing.",
    category: "Redesign",
    date: "2026-09-14",
    readingMinutes: 6,
    relatedService: "wordpress-development",
    body: [
      {
        paragraphs: [
          "Not every tired-looking website needs a full redesign. Sometimes a few focused fixes deliver most of the value. But some signs point to deeper problems that patches won’t solve.",
        ],
      },
      {
        heading: "1. You avoid sending people to it",
        paragraphs: [
          "If you hesitate to share your own website with a prospect, that’s a strong signal. Your site should support your sales conversations, not undermine them.",
        ],
      },
      {
        heading: "2. It’s hard to update",
        paragraphs: [
          "When changing a heading requires a developer, or edits regularly break layouts, the underlying structure is working against you.",
        ],
      },
      {
        heading: "3. It doesn’t work well on phones",
        paragraphs: [
          "Many visitors arrive on mobile. Tiny tap targets, horizontal scrolling and slow images are common signs a site was built desktop-first.",
        ],
      },
      {
        heading: "4. Your services have changed",
        paragraphs: [
          "Businesses evolve. If your navigation still reflects what you offered years ago, visitors will struggle to find what you do today.",
        ],
      },
      {
        heading: "Before you decide",
        paragraphs: [
          "Start with a short audit: what works, what doesn’t, and what your visitors need to do. That makes it much easier to choose between a refresh and a rebuild.",
        ],
        list: [
          "List the top three actions you want visitors to take",
          "Check your site on a mid-range phone over mobile data",
          "Note every page you’re embarrassed by",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-plain-english",
    title: "Core Web Vitals in plain English",
    description:
      "What LCP, INP and CLS actually measure, why they matter for visitors, and where to start improving them on a typical business site.",
    category: "Performance",
    date: "2026-08-30",
    readingMinutes: 7,
    relatedService: "website-speed-optimization",
    body: [
      {
        paragraphs: [
          "Core Web Vitals are a set of metrics Google uses to describe real-world page experience. They’re useful because they reflect what visitors feel: waiting, lag and things jumping around.",
        ],
      },
      {
        heading: "Largest Contentful Paint (LCP)",
        paragraphs: [
          "LCP measures how long the main content — often a hero image or headline — takes to appear. Oversized images and slow servers are the usual culprits.",
        ],
      },
      {
        heading: "Interaction to Next Paint (INP)",
        paragraphs: [
          "INP measures how quickly the page responds when someone taps or clicks. Heavy JavaScript, especially from third-party widgets, tends to hurt it.",
        ],
      },
      {
        heading: "Cumulative Layout Shift (CLS)",
        paragraphs: [
          "CLS measures unexpected movement. Images without dimensions, late-loading banners and web fonts swapping in can all shift content.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Check the Core Web Vitals report in Google Search Console for field data, then use PageSpeed Insights on your most important pages to find specific causes.",
        ],
      },
    ],
  },
  {
    slug: "woocommerce-checkout-friction",
    title: "Reducing friction in your WooCommerce checkout",
    description:
      "Practical, low-risk changes that make WooCommerce checkout clearer and quicker for customers.",
    category: "eCommerce",
    date: "2026-08-02",
    readingMinutes: 5,
    relatedService: "woocommerce-development",
    body: [
      {
        paragraphs: [
          "Checkout is where intent turns into revenue, and small sources of friction add up. The good news: many improvements are simple and low-risk.",
        ],
      },
      {
        heading: "Ask only for what you need",
        paragraphs: [
          "Every field is a small decision. Remove optional fields you don’t use, and avoid asking for a company name if most customers are individuals.",
        ],
      },
      {
        heading: "Show costs early",
        paragraphs: [
          "Unexpected shipping costs are a common reason people abandon carts. Display delivery options and costs before the final step.",
        ],
      },
      {
        heading: "Offer guest checkout",
        paragraphs: [
          "Forcing account creation adds a barrier. Let customers check out as guests and offer an account afterwards.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
