/**
 * Diensten die MasterSchool nu daadwerkelijk aanbiedt, plus de diensten
 * die in ontwikkeling zijn. Alleen `beschikbaar: true` mag als leverbaar
 * worden gepresenteerd.
 */

export type Dienst = {
  slug: string;
  naam: string;
  kort: string;
  prijs: string;
  prijsToelichting: string;
  voorWie: string;
  href: string;
};

export const diensten: Dienst[] = [
  {
    slug: "bijles",
    naam: "Bijles",
    kort:
      "Individuele bijles in wiskunde A, economie, bedrijfseconomie en geschiedenis. Uw kind begrijpt de stof en weet hoe het de volgende toets aanpakt.",
    prijs: "€25 per uur",
    prijsToelichting: "inclusief btw, per werkelijk uur",
    voorWie:
      "Voor leerlingen die vastlopen op één of twee vakken, of die zich gericht willen voorbereiden op een toets of examen.",
    href: "/diensten/bijles",
  },
  {
    slug: "leersysteem",
    naam: "MasterSchool Leersysteem",
    kort:
      "Samen bouwen we een persoonlijk leersysteem: hoe uw kind zelfstandig plant, leert en zich voorbereidt op elke toets en op het examen, voor elk vak. Met een resultaatafspraak op papier.",
    prijs: "€249 eenmalig",
    prijsToelichting: "inclusief btw",
    voorWie:
      "Voor leerlingen die niet weten hoe ze moeten leren: die uitstellen, te laat beginnen en daardoor onder hun niveau presteren.",
    href: "/diensten/leersysteem",
  },
];

/**
 * In ontwikkeling. Deze diensten worden uitsluitend als 'binnenkort
 * beschikbaar' getoond. Prijzen zijn indicatief en nog niet definitief.
 */
export const toekomstigeDiensten = [
  {
    naam: "Onvoldoende ophalen",
    beschrijving:
      "Een korte, gerichte sprint van vier lesuren om een onvoldoende voor wiskunde, economie, bedrijfseconomie of geschiedenis om te buigen naar een voldoende.",
    indicatie: "indicatie: €249 per sprint, per vak",
  },
  {
    naam: "MasterSchool Examen Squad",
    beschrijving:
      "Examenbegeleiding in een klein groepje van maximaal vier leerlingen: twee keer per week 90 minuten, van februari tot en met de examens. Met leersysteem, examentraining, planning en bijles.",
    indicatie: "prijs nog niet vastgesteld",
  },
  {
    naam: "MasterSchool Examen Doorbraak",
    beschrijving:
      "Intensieve één-op-één begeleiding richting het eindexamen: planning per dag, uitleg per vak, aandacht voor slaap en concentratie en dagelijks kort contact.",
    indicatie: "prijs nog niet vastgesteld",
  },
  {
    naam: "Brugklas-overgangsbegeleiding",
    beschrijving:
      "Begeleiding voor leerlingen die net beginnen op de middelbare school, zodat ze meteen met een werkende aanpak starten.",
    indicatie: "prijs nog niet vastgesteld",
  },
  {
    naam: "Groepsbijles",
    beschrijving:
      "Bijles in een klein groepje, tegen een lager tarief per leerling dan individuele begeleiding.",
    indicatie: "prijs nog niet vastgesteld",
  },
  {
    naam: "Videocursussen en examengidsen",
    beschrijving:
      "Digitale cursussen over de start op de middelbare school en over leren-leren voor het examen, plus examengidsen per vak.",
    indicatie: "indicatie: €12,99 tot €49,99",
  },
] as const;

/** Vakken waarin nu bijles wordt gegeven, met korte toelichting. */
export const bijlesVakken = [
  {
    naam: "Wiskunde A",
    toelichting: "Van formules en grafieken tot statistiek en examenopgaven.",
  },
  {
    naam: "Economie",
    toelichting: "Begrippen, verbanden en rekenopgaven, ook op examenniveau.",
  },
  {
    naam: "Bedrijfseconomie",
    toelichting: "Van balans en resultatenrekening tot investeringsvraagstukken.",
  },
  {
    naam: "Geschiedenis",
    toelichting: "Tijdvakken, oorzaak-gevolg en het beantwoorden van bronvragen.",
  },
] as const;
