import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  EB_Garamond,
  Jost,
} from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-ebgaramond",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
});

const title = "Yash — Software Developer";
const description =
  "I build modern, responsive websites for businesses, startups, and creators — at clear, honest prices. Specialising in Next.js, TypeScript and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Yash",
  },
  description,
  applicationName: "Yash Portfolio",
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  keywords: [
    "web developer",
    "freelance web developer",
    "website design",
    "Next.js developer",
    "responsive websites",
    "small business websites",
    "Jaipur web developer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yash — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F0E8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable} ${jost.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-foreground px-4 py-2 text-base font-semibold text-background transition-transform duration-200 focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}






