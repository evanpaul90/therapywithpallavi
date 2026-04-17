import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { AmbientAtmosphere } from "@/components/ambient-atmosphere";
import { GrowingFern } from "@/components/growing-fern";
import { PaperTexture } from "@/components/paper-texture";
import { CursorLeaf } from "@/components/cursor-leaf";
import { NightMode } from "@/components/night-mode";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://therapywithpallavi.com";
const SITE_TITLE =
  "Therapy with Pallavi Bhaskar \u2014 Trauma-informed Online Therapy · Bangalore & India";
const SITE_DESC =
  "Trauma-informed, evidence-based therapy to help you understand yourself more deeply, feel more grounded, and create meaningful change. Online sessions, India and globally.";
const OG_HEADLINE =
  "You deserve a space where you can feel safe \u2014 and begin to move forward.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Therapy with Pallavi",
  },
  description: SITE_DESC,
  keywords: [
    "psychotherapist Bangalore",
    "online therapy India",
    "online therapy for NRIs",
    "trauma-informed therapy",
    "IFS therapy India",
    "CBT therapy",
    "therapy for anxiety",
    "therapy for relationship patterns",
    "therapy for grief",
    "therapy for burnout",
    "Pallavi Bhaskar",
  ],
  authors: [{ name: "Pallavi Bhaskar" }],
  creator: "Pallavi Bhaskar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: OG_HEADLINE,
    description: SITE_DESC,
    siteName: "Therapy with Pallavi",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_HEADLINE,
    description: SITE_DESC,
    images: ["/assets/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pallavi Bhaskar",
  jobTitle: "Counsellor & Psychotherapist",
  url: SITE_URL,
  image: `${SITE_URL}/assets/pallavi-portrait.png`,
  description: SITE_DESC,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  knowsLanguage: ["en"],
  hasCredential: [
    "MA Clinical Psychology",
    "CBT Practitioner",
    "Internal Family Systems (IFS) \u2014 Trauma",
    "NLP Practitioner",
    "QPR Crisis Counsellor",
  ],
  email: "therapy.icp@gmail.com",
  telephone: "+91-91086-94332",
  sameAs: [
    "https://www.linkedin.com/in/pallavi-bhaskar-b76a9b32/",
    "https://www.instagram.com/therapy.with.pallavi/",
  ],
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Therapy with Pallavi",
  url: SITE_URL,
  image: `${SITE_URL}/assets/og-image.jpg`,
  priceRange: "\u20B9\u20B9",
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  serviceType: [
    "Psychotherapy",
    "Trauma-informed therapy",
    "Online counselling",
    "IFS Therapy",
    "CBT",
  ],
  founder: { "@type": "Person", name: "Pallavi Bhaskar" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        <NightMode />
        <PaperTexture />
        <ScrollProgress />
        <AmbientAtmosphere />
        <CursorLeaf />
        <SiteNav />
        <GrowingFern />
        <main className="flex-1 relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
