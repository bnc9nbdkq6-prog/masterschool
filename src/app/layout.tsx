import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KeuzehulpPopup } from "@/components/KeuzehulpPopup";
import { site } from "@/content/site";
import "./globals.css";

// Inter wordt door Next.js meegebouwd en vanaf het eigen domein geserveerd.
// Er gaat dus geen verzoek naar Google en er worden geen cookies geplaatst.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MasterSchool — Bijles en studiebegeleiding in Monnickendam",
    template: "%s | MasterSchool",
  },
  description:
    "Persoonlijke bijles in wiskunde A, wiskunde B, economie, bedrijfseconomie en geschiedenis voor havo- en vwo-leerlingen. In Monnickendam, de regio Waterland en online. €32 per uur, inclusief btw.",
  applicationName: "MasterSchool",
  authors: [{ name: site.eigenaar }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: "MasterSchool",
    title: "MasterSchool — Bijles en studiebegeleiding in Monnickendam",
    description:
      "Betere cijfers en minder stress op de middelbare school. Persoonlijke begeleiding door Oskar van Zadelhoff, in Monnickendam en online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MasterSchool — Bijles en studiebegeleiding in Monnickendam",
    description:
      "Betere cijfers en minder stress op de middelbare school. Persoonlijke begeleiding door Oskar van Zadelhoff.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#03193C",
};

/** Structured data over het bedrijf, voor Google en lokale vindbaarheid. */
const bedrijfsSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MasterSchool",
  url: site.url,
  email: site.email,
  telephone: "+31628926843",
  slogan: site.slogan,
  founder: { "@type": "Person", name: site.eigenaar },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.adres.straat,
    addressLocality: site.adres.postcodePlaats,
    addressCountry: "NL",
  },
  areaServed: [
    ...site.regioZonderReiskosten,
    ...site.regioOverig,
    "Waterland",
  ].map((plaats) => ({ "@type": "Place", name: plaats })),
  description:
    "Bijles en studiebegeleiding voor havo- en vwo-leerlingen in wiskunde A, wiskunde B, economie, bedrijfseconomie en geschiedenis. Fysiek in Monnickendam en omgeving, en online.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-[10px] focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
        >
          Direct naar de inhoud
        </a>
        <Header />
        <main id="hoofdinhoud">{children}</main>
        <Footer />
        <KeuzehulpPopup />
        <script
          type="application/ld+json"
          // Vaste, door onszelf opgestelde data — geen invoer van bezoekers.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bedrijfsSchema) }}
        />
      </body>
    </html>
  );
}
