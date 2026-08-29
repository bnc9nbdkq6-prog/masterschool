/**
 * Centrale bedrijfsgegevens van MasterSchool.
 *
 * Pas hier prijzen, contactgegevens, vakken en regio aan.
 * Alle pagina's lezen uit dit bestand, zodat een wijziging overal doorwerkt.
 */

export const site = {
  naam: "MasterSchool",
  slogan: "Meer grip op school. Minder stress.",
  eigenaar: "Oskar van Zadelhoff",
  rol: "studiecoach, bijlesdocent en ex-leerling",

  // Contact
  telefoon: "0628926843",
  telefoonHref: "tel:+31628926843",
  email: "bijlesvanoskar@gmail.com",
  whatsapp: "https://wa.me/message/CZG5BQHETJ6FI1",

  // Vestiging
  adres: {
    straat: "Dissel 51",
    postcodePlaats: "Monnickendam",
    land: "Nederland",
  },

  // Beloften die feitelijk kloppen en zijn bevestigd
  reactietijd: "gemiddeld binnen 3 uur",
  starttermijn: "doorgaans binnen een week",

  // Regio
  regioZonderReiskosten: ["Monnickendam", "Katwoude"],
  regioOverig: ["Amsterdam", "Edam", "Volendam", "Purmerend", "Hoorn"],

  // Wordt gebruikt voor canonical URL's, sitemap en Open Graph.
  // Zet NEXT_PUBLIC_SITE_URL in Vercel zodra het domein bekend is.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://masterschool-bijles.vercel.app",
} as const;

export const prijzen = {
  bijlesPerUur: 25,
  bijlesPerUurLabel: "€25 per uur",
  leersysteem: 249,
  leersysteemLabel: "€249 eenmalig",
  btwNotitie: "Alle genoemde prijzen zijn inclusief btw.",
} as const;

export const vakken = [
  { naam: "Wiskunde A", beschikbaar: true },
  { naam: "Economie", beschikbaar: true },
  { naam: "Bedrijfseconomie", beschikbaar: true },
  { naam: "Geschiedenis", beschikbaar: true },
  {
    naam: "Wiskunde B",
    beschikbaar: false,
    notitie: "beschikbaar vanaf januari 2027",
  },
] as const;

export const niveaus =
  "Havo en vwo, alle leerjaren. Mavo-leerlingen kan ik in principe in dezelfde vakken helpen.";

/** Navigatie-items in volgorde. */
export const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/resultaten", label: "Resultaten" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/veelgestelde-vragen", label: "Veelgestelde vragen" },
  { href: "/contact", label: "Contact" },
] as const;
