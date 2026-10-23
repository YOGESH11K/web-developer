/**
 * Central site configuration.
 *
 * Update `url`, `email`, and `phone` if the public contact details change.
 * `url` is read from NEXT_PUBLIC_SITE_URL at build time so production
 * metadata, sitemap, robots.txt and JSON-LD all resolve to the live domain.
 */
export const site = {
  name: "Yash",
  role: "Software developer",
  tagline: "Websites that make your business stand out.",
  description:
    "I build modern, responsive websites for businesses, startups, and creators — at clear, honest prices.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devloper-six.vercel.app",
  email: "yashuyogesh11@gmail.com",
  phoneDisplay: "+91 89231 45213",
  phoneE164: "+918923145213",
  whatsapp: "918923145213",
  location: "Jaipur, India",
  github: "https://github.com/YOGESH11K",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const quoteMessage =
  "Hi Yash, I'd like a website quote. Here's what I have in mind:";

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];




