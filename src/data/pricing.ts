export type Plan = {
  name: string;
  price: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter Website",
    price: "₹5,000",
    summary: "A clean one-page site to get your business online.",
    features: [
      "Single-page business website",
      "Responsive design",
      "Contact section",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business Website",
    price: "₹12,000",
    summary: "A complete website for a growing business.",
    features: [
      "Up to 5 pages",
      "Modern custom UI",
      "Mobile responsive",
      "Contact form or WhatsApp integration",
      "Basic SEO setup",
    ],
    featured: true,
  },
  {
    name: "Premium Website",
    price: "₹18,000",
    summary: "More pages, more polish, more room to tell your story.",
    features: [
      "Up to 8 pages",
      "More customized UI and animations",
      "Responsive layouts",
      "Contact form and WhatsApp integration",
      "Basic SEO setup",
    ],
  },
];





