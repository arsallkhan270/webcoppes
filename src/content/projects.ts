import skincare from "@/assets/concept-skincare.jpg";
import architecture from "@/assets/concept-architecture.jpg";
import logistics from "@/assets/concept-logistics.jpg";

export type ProjectCategory = "Business Websites" | "eCommerce" | "Landing Pages" | "Website Redesigns";

export type Project = {
  slug: string;
  name: string;
  /** Concept projects are fictional and must stay labelled as such. Replace with real work later. */
  concept: boolean;
  industry: string;
  category: ProjectCategory;
  image: string;
  summary: string;
  challenge: string;
  scope: string[];
  approach: string;
  technologies: string[];
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "lumora-skincare-store",
    name: "Lumora",
    concept: true,
    industry: "Beauty & skincare",
    category: "eCommerce",
    image: skincare,
    summary: "A calm, editorial storefront concept for a small-batch skincare brand.",
    challenge:
      "Premium skincare buyers want reassurance about ingredients and routines before they buy. The concept explores how a store can feel considered and quiet while still guiding visitors to products quickly.",
    scope: ["Storefront design", "Product page template", "Collection layout", "Mobile shopping flow"],
    approach:
      "We paired a restrained serif with generous whitespace and product photography on neutral backgrounds. Product cards surface the benefit first, then price, keeping comparison simple on small screens.",
    technologies: ["Shopify", "Liquid sections", "Figma"],
    deliverables: ["Homepage concept", "Product and collection templates", "Mobile layouts"],
  },
  {
    slug: "veridian-architecture",
    name: "Veridian",
    concept: true,
    industry: "Architecture & interiors",
    category: "Business Websites",
    image: architecture,
    summary: "A dark, image-led portfolio concept for an architecture and interior studio.",
    challenge:
      "Architecture practices are judged on their work, so the website needs to step back and let photography lead — without becoming slow or hard to navigate.",
    scope: ["Brand-led homepage", "Project case-study template", "Studio and services pages"],
    approach:
      "A muted dark palette and spaced-out uppercase navigation give the imagery room. Case studies use a consistent structure so the studio can add new projects without design help.",
    technologies: ["WordPress", "Custom theme", "Advanced Custom Fields"],
    deliverables: ["Homepage concept", "Project template", "Editable project post type"],
  },
  {
    slug: "trackflow-saas-landing",
    name: "TrackFlow",
    concept: true,
    industry: "B2B logistics software",
    category: "Landing Pages",
    image: logistics,
    summary: "A conversion-focused landing page concept for a logistics SaaS product.",
    challenge:
      "Technical B2B products often bury their value in jargon. The concept tests how a clear headline, a simple visual metaphor and focused CTAs can explain the product in seconds.",
    scope: ["Landing page design", "Feature section system", "Sign-up CTA flow"],
    approach:
      "Route lines visualise the product without a fake dashboard. Feature blocks are short and scannable, and every section ends with a single clear next step.",
    technologies: ["Elementor Pro", "WordPress", "Figma"],
    deliverables: ["Landing page concept", "Reusable section templates"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Business Websites",
  "eCommerce",
  "Landing Pages",
  "Website Redesigns",
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
