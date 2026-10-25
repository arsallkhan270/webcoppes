import {
  Code2,
  LayoutTemplate,
  ShoppingCart,
  Store,
  Figma,
  Gauge,
  Search,
  ShieldCheck,
  Wrench,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  includes: string[];
  problems: { title: string; body: string }[];
  forWho: string[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "wordpress-development",
    title: "WordPress Website Development",
    short: "Custom, maintainable WordPress websites your team can update with confidence.",
    icon: Code2,
    metaTitle: "WordPress Website Development",
    metaDescription:
      "Custom WordPress website development: tailored layouts, child themes, accessible responsive builds and modernisation of existing sites.",
    headline: "WordPress websites built properly, from the theme up.",
    intro:
      "WordPress powers a large share of the web because it is flexible and easy to edit. That flexibility is also why many WordPress sites become slow, fragile and hard to change. We build WordPress websites with a clear structure, sensible plugins and clean code, so the site stays reliable long after launch.",
    includes: [
      "Business websites",
      "Custom page layouts and functionality",
      "Theme customisation and child themes",
      "Responsive, accessible website development",
      "Website restructuring and modernisation",
    ],
    problems: [
      {
        title: "Your current site is hard to edit",
        body: "We set up editing patterns that match how your team actually works, so updating a page doesn’t risk breaking the layout.",
      },
      {
        title: "Too many plugins doing too little",
        body: "We replace overlapping plugins with focused functionality, reducing conflicts, update headaches and page weight.",
      },
      {
        title: "The site no longer reflects the business",
        body: "We restructure content and navigation around what you offer today, not what you offered when the site was first built.",
      },
    ],
    forWho: [
      "Service businesses that need a credible, lead-generating website",
      "Companies with an outdated WordPress site that needs rebuilding",
      "Teams who want to manage content without calling a developer",
    ],
    deliverables: [
      "Sitemap and page structure",
      "Custom or child-theme implementation",
      "Responsive templates for key page types",
      "Editor-friendly content blocks",
      "Pre-launch QA across devices and browsers",
      "Handover guide for your team",
    ],
    faqs: [
      {
        q: "Will I own the website and its code?",
        a: "Yes. Once the project is paid for, the theme, content and hosting accounts belong to you. We avoid locking you into proprietary tools.",
      },
      {
        q: "Do you use page builders or custom themes?",
        a: "It depends on who will edit the site and how often. We’ll recommend the approach that balances flexibility, performance and maintenance cost for your situation.",
      },
    ],
    related: ["elementor-development", "website-maintenance", "website-speed-optimization"],
  },
  {
    slug: "elementor-development",
    title: "Elementor Website Design",
    short: "Polished Elementor layouts that stay fast and easy for your team to edit.",
    icon: LayoutTemplate,
    metaTitle: "Elementor Website Design & Development",
    metaDescription:
      "Custom Elementor page design, Elementor Pro builds, conversion-focused landing pages and performance-conscious redesigns.",
    headline: "Elementor sites that look custom — and load like it.",
    intro:
      "Elementor makes visual editing accessible, but it’s easy to end up with heavy pages and inconsistent styling. We design Elementor websites around global styles and reusable templates, so pages stay visually consistent and you can build new ones without starting from scratch.",
    includes: [
      "Custom Elementor page design",
      "Elementor Pro implementation when appropriate",
      "Landing pages and conversion-focused layouts",
      "Existing website redesigns",
      "Performance-conscious Elementor development",
    ],
    problems: [
      {
        title: "Every page looks slightly different",
        body: "We configure global colours, typography and spacing so the whole site follows one system.",
      },
      {
        title: "Pages feel heavy on mobile",
        body: "We limit nested containers, unused widgets and add-on bloat that often slow Elementor sites down.",
      },
      {
        title: "Landing pages take too long to produce",
        body: "We create reusable section templates so your team can assemble campaign pages quickly.",
      },
    ],
    forWho: [
      "Businesses already invested in Elementor who want a better result",
      "Marketing teams that publish landing pages regularly",
      "Owners who want visual editing without a cluttered site",
    ],
    deliverables: [
      "Global style kit (colours, type, spacing)",
      "Header, footer and theme-builder templates",
      "Reusable section and landing-page templates",
      "Mobile and tablet layout refinements",
      "Editing walkthrough for your team",
    ],
    faqs: [
      {
        q: "Do I need Elementor Pro?",
        a: "Not always. Pro is useful for theme-builder templates, forms and dynamic content. We’ll tell you honestly if the free version covers your needs.",
      },
      {
        q: "Can you redesign my existing Elementor site?",
        a: "Yes. We usually audit the current setup first, then decide whether to refine it or rebuild key templates cleanly.",
      },
    ],
    related: ["wordpress-development", "website-speed-optimization", "figma-to-website"],
  },
  {
    slug: "woocommerce-development",
    title: "WooCommerce Development",
    short: "Online stores built on WordPress with a smoother path from product to checkout.",
    icon: ShoppingCart,
    metaTitle: "WooCommerce Development & Store Optimisation",
    metaDescription:
      "WooCommerce store setup, product and category page customisation, checkout improvements and payment gateway integration.",
    headline: "WooCommerce stores that make buying straightforward.",
    intro:
      "WooCommerce gives you full control over your store, but the default experience rarely fits a specific brand or product range. We shape product pages, categories and checkout around how your customers shop, and connect the payment and shipping tools you need.",
    includes: [
      "Online store setup",
      "Product and category page customisation",
      "Cart and checkout improvements",
      "Payment gateway integrations",
      "Store functionality and user experience improvements",
    ],
    problems: [
      {
        title: "Customers drop off at checkout",
        body: "We simplify checkout fields, clarify shipping and payment options, and remove unnecessary steps.",
      },
      {
        title: "Products are hard to find",
        body: "We improve category structure, filtering and search so shoppers reach the right product faster.",
      },
      {
        title: "Product pages don’t answer questions",
        body: "We design product templates that present specifications, variations and delivery information clearly.",
      },
    ],
    forWho: [
      "Retailers launching their first online store",
      "Existing WooCommerce stores that feel dated or clunky",
      "Brands that need flexibility beyond hosted platforms",
    ],
    deliverables: [
      "Store setup and configuration",
      "Custom product, category and cart templates",
      "Checkout review and improvements",
      "Payment and shipping integration",
      "Test orders and launch checklist",
    ],
    faqs: [
      {
        q: "WooCommerce or Shopify — which is better?",
        a: "Neither is universally better. WooCommerce offers more control and no platform fees; Shopify is simpler to run. We’ll compare both against your product range and team.",
      },
      {
        q: "Which payment gateways can you set up?",
        a: "Common options include Stripe, PayPal and regional gateways. Availability depends on your country and business type, which we confirm during planning.",
      },
    ],
    related: ["shopify-development", "integrations-and-custom-functionality", "website-speed-optimization"],
  },
  {
    slug: "shopify-development",
    title: "Shopify Store Design & Customization",
    short: "Shopify storefronts styled for your brand and tuned for a clean shopping flow.",
    icon: Store,
    metaTitle: "Shopify Store Design & Customisation",
    metaDescription:
      "Shopify store setup, theme styling and section customisation, product and collection page improvements and responsive storefront design.",
    headline: "Shopify storefronts that feel like your brand, not a template.",
    intro:
      "Shopify takes care of hosting, security and payments, which lets you focus on selling. We customise themes and sections so your store looks distinctive, presents products well and stays easy for you to manage from the Shopify admin.",
    includes: [
      "Shopify store setup and customisation",
      "Theme styling and section customisation",
      "Product page and collection improvements",
      "Responsive storefront design",
      "User experience improvements",
    ],
    problems: [
      {
        title: "Your store looks like every other theme",
        body: "We adapt typography, layout and custom sections so the storefront reflects your brand.",
      },
      {
        title: "Collections are hard to browse",
        body: "We refine collection layouts, filters and merchandising so customers can compare products easily.",
      },
      {
        title: "Theme edits keep breaking",
        body: "We make changes in a maintainable way that survives theme updates where possible.",
      },
    ],
    forWho: [
      "Direct-to-consumer brands launching on Shopify",
      "Merchants outgrowing a stock theme",
      "Teams that want a simple, reliable admin experience",
    ],
    deliverables: [
      "Theme selection or customisation plan",
      "Custom sections and templates",
      "Product and collection page refinements",
      "App review and setup recommendations",
      "Launch QA on mobile and desktop",
    ],
    faqs: [
      {
        q: "Do you build custom Shopify themes from scratch?",
        a: "Most projects get better value from customising a solid theme. A fully custom theme makes sense for specific requirements, and we’ll explain the trade-offs.",
      },
      {
        q: "Can you migrate my store to Shopify?",
        a: "Yes. Product, customer and order migration is planned carefully, with redirects to protect existing search traffic.",
      },
    ],
    related: ["woocommerce-development", "website-migration-and-bug-fixing", "technical-seo"],
  },
  {
    slug: "figma-to-website",
    title: "Figma to Website Development",
    short: "Approved designs turned into accurate, responsive, functional websites.",
    icon: Figma,
    metaTitle: "Figma to Website Development",
    metaDescription:
      "Accurate Figma to website development with responsive desktop, tablet and mobile layouts and consistent typography and spacing.",
    headline: "Your Figma designs, built with care for every breakpoint.",
    intro:
      "A great design can lose its quality during development — spacing drifts, fonts change and mobile layouts are improvised. We implement Figma designs faithfully, ask questions where the design is ambiguous, and fill responsive gaps thoughtfully rather than guessing.",
    includes: [
      "Accurate design implementation",
      "Responsive desktop, tablet and mobile layouts",
      "Consistent typography, spacing and visual hierarchy",
      "Functional implementation of approved designs",
    ],
    problems: [
      {
        title: "Built sites never match the design",
        body: "We work from your design tokens and components, comparing builds against the source frames.",
      },
      {
        title: "Only desktop was designed",
        body: "We propose tablet and mobile adaptations that respect the design intent and confirm them with you.",
      },
      {
        title: "Interactions are unclear",
        body: "We clarify states — hover, focus, error, empty — before building, so nothing is left to chance.",
      },
    ],
    forWho: [
      "Design studios that need a reliable development partner",
      "In-house designers handing off to development",
      "Businesses with approved designs ready to build",
    ],
    deliverables: [
      "Design review and clarification list",
      "Responsive build on your chosen platform",
      "Reusable components matching the design system",
      "Cross-browser and device QA",
    ],
    faqs: [
      {
        q: "Which platforms can you build Figma designs on?",
        a: "Typically WordPress (custom theme or Elementor), Shopify, or a modern front-end stack. The right choice depends on who edits the site afterwards.",
      },
      {
        q: "What do you need from the designer?",
        a: "Organised Figma files with styles or variables, the fonts used, exported assets and any prototype notes for interactions.",
      },
    ],
    related: ["wordpress-development", "elementor-development", "shopify-development"],
  },
  {
    slug: "website-speed-optimization",
    title: "Website Speed Optimization",
    short: "Measured performance work focused on real loading speed and Core Web Vitals.",
    icon: Gauge,
    metaTitle: "Website Speed Optimisation & Core Web Vitals",
    metaDescription:
      "Website performance audits, image and asset optimisation, caching configuration and Core Web Vitals improvements for WordPress and Shopify.",
    headline: "Faster pages, measured properly.",
    intro:
      "Slow websites frustrate visitors and can affect how search engines assess your pages. We start with measurement — lab tests and, where available, real-user data — then fix the specific bottlenecks that matter most for your site.",
    includes: [
      "Performance audits",
      "Image and asset optimisation",
      "Caching and browser caching configuration where appropriate",
      "Core Web Vitals improvements",
      "Removal of unnecessary scripts and performance bottlenecks",
    ],
    problems: [
      {
        title: "Large images slowing every page",
        body: "We resize, compress and serve modern formats, with correct dimensions to prevent layout shift.",
      },
      {
        title: "Third-party scripts piling up",
        body: "We review tracking, chat and widget scripts and delay or remove those that aren’t earning their place.",
      },
      {
        title: "Hosting or caching misconfiguration",
        body: "We check server response times and caching layers, and advise when hosting itself is the limit.",
      },
    ],
    forWho: [
      "Sites with poor PageSpeed Insights or Search Console reports",
      "Stores where slow pages may be costing sales",
      "Owners who tried caching plugins without real improvement",
    ],
    deliverables: [
      "Baseline performance report",
      "Prioritised list of fixes",
      "Implemented optimisations",
      "Before-and-after measurements",
      "Recommendations to keep the site fast",
    ],
    faqs: [
      {
        q: "Can you guarantee a 100 PageSpeed score?",
        a: "No, and we’d be wary of anyone who does. Scores vary by page, device and test conditions. We aim for meaningful, measurable improvements.",
      },
      {
        q: "Will optimisation break anything?",
        a: "We test changes on a staging copy where possible and roll out carefully, checking key pages and forms afterwards.",
      },
    ],
    related: ["technical-seo", "website-maintenance", "wordpress-development"],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO & On-Page SEO",
    short: "Solid technical foundations so search engines can crawl and understand your site.",
    icon: Search,
    metaTitle: "Technical SEO & On-Page SEO Services",
    metaDescription:
      "Technical and on-page SEO: metadata, heading structure, internal linking, sitemaps, canonical URLs, structured data and indexability checks.",
    headline: "Make your website easy for search engines to understand.",
    intro:
      "Good content can underperform if search engines struggle to crawl, index or interpret it. We fix the technical foundations and on-page structure that support visibility. We don’t promise rankings — no honest provider can — but we remove the obstacles that hold good pages back.",
    includes: [
      "Technical SEO foundations",
      "Metadata and heading structure",
      "Internal linking",
      "XML sitemap and robots.txt configuration",
      "Canonical URLs and indexability checks",
      "Structured data where relevant",
      "Image alt text and content structure",
      "Search performance monitoring recommendations",
    ],
    problems: [
      {
        title: "Important pages aren’t indexed",
        body: "We check robots rules, canonicals, noindex tags and sitemaps that may be excluding pages unintentionally.",
      },
      {
        title: "Titles and headings are inconsistent",
        body: "We give each page a clear topic, a unique title and a logical heading structure.",
      },
      {
        title: "Pages compete with each other",
        body: "We identify overlapping content and consolidate or differentiate it with internal links.",
      },
    ],
    forWho: [
      "New websites that need a clean SEO foundation",
      "Sites that lost traffic after a redesign or migration",
      "Businesses preparing to invest in content",
    ],
    deliverables: [
      "Technical SEO audit",
      "Metadata and heading recommendations or implementation",
      "Sitemap, robots.txt and canonical setup",
      "Structured data implementation",
      "Search Console setup guidance",
    ],
    faqs: [
      {
        q: "Will this get me to the first page of Google?",
        a: "We can’t guarantee rankings. Technical SEO removes barriers; rankings also depend on content, competition and authority.",
      },
      {
        q: "Do you write SEO content?",
        a: "We focus on structure and technical quality. We can advise on content plans and work with your writers.",
      },
    ],
    related: ["website-speed-optimization", "website-migration-and-bug-fixing", "wordpress-development"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Security",
    short: "Updates, backups and security hardening so your site stays healthy.",
    icon: ShieldCheck,
    metaTitle: "WordPress Maintenance & Security",
    metaDescription:
      "WordPress maintenance and security: core, plugin and theme updates, backups, security hardening and compatibility checks.",
    headline: "Keep your website secure, updated and dependable.",
    intro:
      "Websites need regular care. Outdated plugins are a common entry point for security problems, and untested updates can break layouts or forms. We handle updates carefully, keep reliable backups and harden your setup so small issues don’t become emergencies.",
    includes: [
      "WordPress updates",
      "Backup configuration",
      "Security hardening",
      "Plugin and theme compatibility checks",
      "Ongoing maintenance plans where available",
    ],
    problems: [
      {
        title: "Updates feel risky",
        body: "We test updates and check key pages afterwards, so you’re not discovering broken forms from customers.",
      },
      {
        title: "No reliable backups",
        body: "We configure automated off-site backups and confirm they can actually be restored.",
      },
      {
        title: "Security is an afterthought",
        body: "We apply sensible hardening: strong access controls, limited admin accounts and removal of unused plugins.",
      },
    ],
    forWho: [
      "Businesses without an in-house developer",
      "Sites that have been hacked or nearly hacked",
      "Owners who want predictable, ongoing support",
    ],
    deliverables: [
      "Initial health and security check",
      "Backup setup and restore test",
      "Scheduled updates with checks",
      "Security hardening",
      "Summary reports of work completed",
    ],
    faqs: [
      {
        q: "Do you offer monthly plans?",
        a: "Maintenance can be arranged as an ongoing agreement. Scope and pricing depend on your site’s size and needs — ask for a tailored estimate.",
      },
      {
        q: "Can you help if my site has been hacked?",
        a: "Yes. We help clean up, restore from backups where possible and close the vulnerabilities that were exploited.",
      },
    ],
    related: ["website-migration-and-bug-fixing", "website-speed-optimization", "wordpress-development"],
  },
  {
    slug: "website-migration-and-bug-fixing",
    title: "Website Bug Fixing & Migration",
    short: "Careful troubleshooting and migrations that protect your content and traffic.",
    icon: Wrench,
    metaTitle: "Website Bug Fixing & Migration",
    metaDescription:
      "WordPress troubleshooting, broken layout and functionality fixes, migration planning, redirect management and hosting configuration.",
    headline: "Fix what’s broken. Move what needs moving — safely.",
    intro:
      "A broken checkout, a contact form that stops sending, or a migration that loses pages can quietly cost a business. We diagnose issues methodically, fix root causes rather than symptoms, and plan migrations with redirects and checks so nothing important is lost.",
    includes: [
      "WordPress troubleshooting",
      "Broken layouts and functionality fixes",
      "Migration planning and implementation",
      "Redirect management",
      "Hosting and configuration troubleshooting",
    ],
    problems: [
      {
        title: "Something broke after an update",
        body: "We trace conflicts between plugins, themes and server versions, and resolve them cleanly.",
      },
      {
        title: "Moving hosts or domains",
        body: "We plan the move, copy everything, test on the new server and switch over with minimal downtime.",
      },
      {
        title: "Old URLs now lead nowhere",
        body: "We map old to new URLs with permanent redirects to preserve links and search visibility.",
      },
    ],
    forWho: [
      "Sites with urgent issues affecting leads or sales",
      "Businesses changing hosting, domain or platform",
      "Teams inheriting a website with unknown problems",
    ],
    deliverables: [
      "Issue diagnosis and explanation",
      "Fixes with before-and-after checks",
      "Migration plan and redirect map",
      "Post-migration verification",
    ],
    faqs: [
      {
        q: "How quickly can you fix an issue?",
        a: "It depends on the problem and access. Once we’ve looked at it, we’ll give you a realistic estimate rather than a guess.",
      },
      {
        q: "Will migration affect my SEO?",
        a: "Any migration carries some risk. Correct redirects, preserved metadata and post-launch monitoring keep that risk low.",
      },
    ],
    related: ["website-maintenance", "technical-seo", "integrations-and-custom-functionality"],
  },
  {
    slug: "integrations-and-custom-functionality",
    title: "Integrations & Custom Functionality",
    short: "Forms, email delivery, payments and APIs connected properly.",
    icon: Plug,
    metaTitle: "Website Integrations & Custom Functionality",
    metaDescription:
      "Contact forms and WPForms, SMTP email delivery, payment integrations, API integrations and Advanced Custom Fields development.",
    headline: "Connect your website to the tools your business runs on.",
    intro:
      "Websites rarely work alone. Leads need to reach your inbox, orders need to reach your systems and content often needs custom structure. We build reliable integrations and custom functionality, with attention to security and error handling.",
    includes: [
      "Contact forms and WPForms",
      "SMTP and email delivery configuration",
      "Payment integrations",
      "API integrations when technically appropriate",
      "Advanced Custom Fields and custom WordPress functionality",
    ],
    problems: [
      {
        title: "Form emails go to spam — or nowhere",
        body: "We configure authenticated SMTP and test deliverability so enquiries reliably arrive.",
      },
      {
        title: "Manual copying between systems",
        body: "We connect your site to CRMs, email platforms or internal tools through their APIs where available.",
      },
      {
        title: "Content doesn’t fit standard pages",
        body: "We create custom fields and post types for structured content like team members, locations or listings.",
      },
    ],
    forWho: [
      "Businesses that rely on web forms for leads",
      "Teams wanting to automate repetitive data entry",
      "Sites needing structured, custom content types",
    ],
    deliverables: [
      "Integration requirements review",
      "Implementation and secure credential handling",
      "Testing with real-world scenarios",
      "Documentation of how it works",
    ],
    faqs: [
      {
        q: "Can you integrate with any API?",
        a: "Most well-documented APIs can be integrated. We review documentation and limits first and tell you if something isn’t practical.",
      },
      {
        q: "How do you handle API keys?",
        a: "Secret credentials stay on the server and are never exposed in front-end code.",
      },
    ],
    related: ["woocommerce-development", "wordpress-development", "website-maintenance"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
