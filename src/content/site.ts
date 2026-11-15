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
  
  // Aantal leerlingen dat op dit moment actief wordt begeleid.
  // Werk dit getal bij wanneer het verandert (laatst gecontroleerd: november 2026).
  actieveLeerlingen: 22,

  // Regio
  regioZonderReiskosten: ["Monnickendam", "Katwoude", "Purmerend"],
  regioOverig: ["Amsterdam", "Edam", "Volendam", "Hoorn"],

  // Wordt gebruikt voor canonical URL's, sitemap en Open Graph.
  // Zet NEXT_PUBLIC_SITE_URL in Vercel zodra het domein bekend is.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://masterschool-bijles.vercel.app",
} as const;

export const prijzen = {
  bijlesPerUur: 32,
  bijlesPerUurLabel: "€32 per uur",
  leersysteem: 349,
  leersysteemLabel: "€349 eenmalig",
  leersysteemSupport: 15,
  leersysteemSupportLabel: "€15 per maand",
  btwNotitie: "Alle genoemde prijzen zijn inclusief btw.",
} as const;

export const vakken: readonly {
  naam: string;
  beschikbaar: boolean;
  notitie?: string;
}[] = [
  { naam: "Wiskunde A", beschikbaar: true },
  { naam: "Wiskunde B", beschikbaar: true },
  { naam: "Economie", beschikbaar: true },
  { naam: "Bedrijfseconomie", beschikbaar: true },
  { naam: "Geschiedenis", beschikbaar: true },
  ]; 

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
