import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";

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
  "Pallavi Bhaskar — Psychotherapist for High-Performing Professionals · Online Therapy from Bangalore";
const SITE_DESC =
  "Evidence-based psychotherapy for ambitious professionals in unquiet seasons. IFS, CBT, trauma-informed. Eight years of practice. Online sessions, Bangalore and globally.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Pallavi Bhaskar",
  },
  description: SITE_DESC,
  keywords: [
    "psychotherapist Bangalore",
    "online therapy India",
    "IFS therapy",
    "CBT therapy",
    "trauma-informed therapy",
    "therapy for professionals",
    "Pallavi Bhaskar",
  ],
  authors: [{ name: "Pallavi Bhaskar" }],
  creator: "Pallavi Bhaskar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Therapy for the ambitious life you're quietly exhausted by.",
    description: SITE_DESC,
    siteName: "Therapy with Pallavi",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy for the ambitious life you're quietly exhausted by.",
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
    "PGDM",
    "CBT Practitioner",
    "Internal Family Systems (IFS) — Trauma",
    "NLP Practitioner",
    "QPR Crisis Counsellor",
  ],
  email: "therapy.icp@gmail.com",
  telephone: "+91-91086-94332",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Therapy with Pallavi",
  url: SITE_URL,
  image: `${SITE_URL}/assets/og-image.jpg`,
  priceRange: "₹₹",
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  serviceType: ["Psychotherapy", "Counselling", "IFS Therapy", "CBT"],
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
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
