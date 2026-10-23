import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { site } from "@/data/site";

const offers = [
  {
    "@type": "Offer",
    name: "Starter Website",
    price: "5000",
    priceCurrency: "INR",
  },
  {
    "@type": "Offer",
    name: "Business Website",
    price: "12000",
    priceCurrency: "INR",
  },
  {
    "@type": "Offer",
    name: "Premium Website",
    price: "18000",
    priceCurrency: "INR",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.role,
      description: site.description,
      url: site.url,
      image: `${site.url}/og.png`,
      email: site.email,
      telephone: site.phoneE164,
      sameAs: [site.github],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      knowsLanguage: ["en", "hi"],
      knowsAbout: [
        "Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "UI Design",
        "SEO",
      ],
      makesOffer: offers,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} — Web Developer in Jaipur`,
      description: site.description,
      url: site.url,
      image: `${site.url}/og.png`,
      email: site.email,
      telephone: site.phoneE164,
      priceRange: "₹₹",
      founder: { "@id": `${site.url}/#person` },
      areaServed: [
        { "@type": "City", name: "Jaipur" },
        { "@type": "State", name: "Rajasthan" },
        { "@type": "Country", name: "India" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website development services",
        itemListElement: offers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          price: offer.price,
          priceCurrency: offer.priceCurrency,
        })),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Work />
      <Services />
      <Pricing />
      <Process />
      <Contact />
    </>
  );
}






