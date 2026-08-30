/**
 * De diensten die MasterSchool aanbiedt.
 *
 * Regels bij wijzigen:
 *  1. Prijzen zijn altijd inclusief btw. Pas ook `prijzen` in site.ts aan.
 *  2. Publiceer een garantie alleen mét de voorwaarden erbij.
 *  3. Zet een dienst pas in deze lijst wanneer prijs, inhoud, duur en
 *     voorwaarden definitief zijn.
 */

export type Dienst = {
  slug: string;
  naam: string;
  /** De uitkomst voor de ouder, in één zin. */
  belofte: string;
  prijs: string;
  prijsDetail: string;
  /** Optionele gespreide betaling. */
  termijnen?: string;
  duur: string;
  voorWie: string;
  bevat: string[];
  /** Volledige garantie, inclusief voorwaarden. Weglaten als die er niet is. */
  garantie?: string;
  /** Kort label voor het garantie-badge. Alleen zinvol mét `garantie`. */
  garantieLabel?: string;
  /** Praktische kanttekening, bijvoorbeeld over de startdatum. */
  notitie?: string;
  /** Doorlink naar een detailpagina, als die bestaat. */
  href?: string;
  uitgelicht?: boolean;
};

/** Begeleiding die het hele schooljaar door loopt. */
export const dienstenJaar: Dienst[] = [
  {
    slug: "bijles",
    naam: "Bijles",
    belofte:
      "Uw kind begrijpt de stof weer en weet hoe de volgende toets in elkaar zit.",
    prijs: "€25",
    prijsDetail: "per uur, inclusief btw",
    duur: "Per les, minimaal één uur. Meestal één tot anderhalf uur",
    voorWie:
      "Voor één vak dat blijft haken, of om gericht toe te werken naar een toetsweek. Wiskunde A, economie, bedrijfseconomie of geschiedenis.",
    bevat: [
      "Individuele les, online of fysiek in Monnickendam en omgeving",
      "Uitleg net zolang tot het klopt — steeds op een andere manier",
      "Oefenen met vragen in plaats van passief herlezen",
      "Aandacht voor planning en aanpak, niet alleen voor de stof",
      "Afrekening per werkelijk uur, geen abonnement",
    ],
    garantie:
      "Vindt u de eerste bijles niet waardevol, dan betaalt u die les niet. Laat het binnen zeven dagen weten.",
    garantieLabel: "Eerste les risicovrij",
    href: "/diensten/bijles",
  },
  {
    slug: "garantiesprint",
    naam: "De Garantiesprint",
    belofte:
      "Van onvoldoende naar voldoende bij de eerstvolgende toetsweek — of ik begeleid kosteloos door.",
    prijs: "€249",
    prijsDetail: "per sprint, per vak, inclusief btw",
    duur: "4 weken · 1 uur intake plus vier sessies van 90 minuten",
    voorWie:
      "Voor één vak dat nu onvoldoende staat en snel omhoog moet. Beschikbaar voor wiskunde A, economie, bedrijfseconomie en geschiedenis.",
    bevat: [
      "Foutenanalyse-intake van een uur: waar gaat het precies mis en wat is het doel voor de volgende toetsweek",
      "Vier sessies van 90 minuten, samen naar dat doel toe",
      "Een studiemethode voor dat vak, zodat het ook zonder mij blijft werken",
      "Bijles in het vak zelf, gericht op de stof die op de toets komt",
    ],
    garantie:
      "Doet uw kind alle vier de sessies en maakt het de opdrachten, maar staat er bij de eerstvolgende toetsweek toch geen voldoende? Dan zet ik de begeleiding kosteloos voort tot het wél lukt.",
    garantieLabel: "Met resultaatgarantie",
    uitgelicht: true,
  },
  {
    slug: "leersysteem",
    naam: "MasterSchool Leersysteem",
    belofte:
      "Uw kind leert zelfstandig en effectief — voor elk vak, de rest van de schooltijd.",
    prijs: "€349",
    prijsDetail: "eenmalig, inclusief btw",
    duur:
      "6 sessies van ongeveer een uur. Loopt een sessie uit, dan kost dat niets extra",
    voorWie:
      "Voor de leerling die meer kan dan de cijfers laten zien: die uitstelt, te laat begint of veel tijd kwijt is zonder dat het loont. Niet vakgebonden — het werkt voor het hele vakkenpakket.",
    bevat: [
      "Intakegesprek van een uur met u én uw kind: wanneer bent u allebei tevreden over hoe het op school gaat",
      "Ongeveer vijf uur samen bouwen aan een compleet leersysteem voor elk vak",
      "Gebaseerd op technieken waarvan de werking goed onderbouwd is, zoals actief ophalen en spreiden in de tijd",
      "Persoonlijk gemaakt: houdt uw kind van zingen, dan schrijven we een liedje over de stof",
      "Ook wat eromheen zit: focus, concentratie en wanneer u het beste leert",
      "Afgestemd op wat uw kind daadwerkelijk bereid is te doen — een systeem dat niet wordt uitgevoerd is waardeloos",
      "Een e-book met alles wat we behandelen, om later opnieuw op te zoeken. Dat e-book is nog in de maak; zodra het klaar is krijgt u het zonder bijbetaling",
      "Als eindresultaat een concreet plan voor elke toets, toetsweek en elk examen",
    ],
    garantie:
      "Levert uw kind bewijs dat het systeem wordt uitgevoerd en blijven de onvoldoendes staan? Dan begeleid ik kosteloos door tot er wél voldoendes worden gehaald.",
    garantieLabel: "Met resultaatgarantie",
    notitie:
      "Optioneel na afloop: doorlopende WhatsApp- en belsupport voor €15 per maand, maandelijks opzegbaar.",
    href: "/diensten/leersysteem",
    uitgelicht: true,
  },
];

/** Intensieve trajecten rond examens en overgaan. */
export const dienstenExamen: Dienst[] = [
  {
    slug: "examen-squad",
    naam: "MasterSchool Examen Squad",
    belofte:
      "Tien weken naar het diploma, in een vast groepje van maximaal vier leerlingen.",
    prijs: "€595",
    prijsDetail: "per leerling, inclusief btw",
    duur:
      "10 weken · twee keer per week 90 minuten. Start half februari, tot aan de examens",
    voorWie:
      "Voor examenkandidaten die structuur en tempo missen, en die het prettig vinden om er niet alleen voor te staan.",
    bevat: [
      "Een vast groepje van maximaal vier leerlingen",
      "Twee keer per week 90 minuten onder mijn begeleiding",
      "Een eigen leersysteem, gebouwd in de eerste weken",
      "Oefenexamens maken terwijl ik meekijk en direct bijstuur",
      "Uw kind laat mij examens nakijken en krijgt te horen waar de punten blijven liggen",
      "Elke week samen een planning maken voor de dagen ertussen",
      "Bijles van mij in wiskunde A, economie, bedrijfseconomie of geschiedenis wanneer dat nodig is",
    ],
    notitie:
      "Start half februari en loopt door tot de examens. Aanmelden kan nu al; er is plek voor maximaal vier leerlingen.",
  },
  {
    slug: "overgangsboost",
    naam: "MasterSchool Overgangsboost",
    belofte:
      "Voor de leerling die dreigt te blijven zitten. Alles op alles tot de overgang rond is.",
    prijs: "€1.290",
    prijsDetail: "inclusief btw",
    termijnen: "of drie termijnen van €447",
    duur:
      "Start begin maart en loopt tot het einde van het schooljaar, zonder limiet op contact",
    voorWie:
      "Voor de leerling die er op dit moment niet goed voor staat en waarbij overgaan echt spannend wordt.",
    bevat: [
      "Eén-op-één begeleiding, zonder limiet op het aantal contactmomenten",
      "Samen een leersysteem bouwen dat past bij uw kind",
      "Een planning per week en per dag, in plaats van een vaag voornemen",
      "Elke relevante dag tien minuten bellen: hoe ging het vandaag en wat doen we morgen",
      "Altijd WhatsApp-support, ook voor één vraag over één opgave",
      "Bijles van mij in wiskunde A, economie, bedrijfseconomie of geschiedenis",
      "Aandacht voor wat eromheen zit: slaap, voeding en concentratie",
    ],
    notitie:
      "Start begin maart, zodat er nog twee volledige periodes zijn om het tij te keren, en loopt tot de overgangsvergadering. Aanmelden kan nu al.",
  },
  {
    slug: "examen-doorbraak",
    naam: "MasterSchool Examen Doorbraak",
    belofte:
      "Voor de examenkandidaat die dreigt te zakken. Dagelijks contact tot het diploma binnen is.",
    prijs: "€1.790",
    prijsDetail: "inclusief btw",
    termijnen: "of drie termijnen van €597",
    duur:
      "Start half februari en loopt tot het laatste centraal examen, zonder limiet op contact",
    voorWie:
      "Voor de examenkandidaat bij wie slagen op dit moment niet vanzelfsprekend is en waar geen tijd meer te verliezen valt.",
    bevat: [
      "Eén-op-één begeleiding, zonder limiet op het aantal contactmomenten",
      "Samen een leersysteem bouwen dat past bij uw kind",
      "Een planning per week en per dag, tot aan het laatste examen",
      "Elke relevante dag tien minuten bellen: hoe ging het vandaag en wat doen we morgen",
      "Altijd WhatsApp-support, ook voor één vraag over één opgave",
      "Bijles van mij in wiskunde A, economie, bedrijfseconomie of geschiedenis",
      "Aandacht voor wat eromheen zit: slaap, voeding en concentratie",
    ],
    notitie:
      "Start half februari en loopt tot het laatste centraal examen. Aanmelden kan nu al. Betaalt u in termijnen, dan betaalt u de tweede termijn pas nadat de eerste meetbare cijferverbetering is vastgesteld.",
    uitgelicht: true,
  },
];

export const alleDiensten: Dienst[] = [...dienstenJaar, ...dienstenExamen];

/**
 * Diensten die er wel aankomen maar nog niet te boeken zijn. Toon ze
 * uitsluitend als "binnenkort beschikbaar" en nooit met een definitieve prijs.
 */
export const toekomstigeDiensten = [
  {
    naam: "Groepsbijles",
    beschrijving:
      "Bijles in een vast groepje van maximaal vier leerlingen, op vaste tijden en een vaste locatie in Monnickendam. Dezelfde aanpak als individuele bijles, tegen een aanzienlijk lager tarief per leerling.",
    indicatie: "verwachte prijs: €12 per uur per leerling",
  },
] as const;

/** De drie diensten die op de homepage worden uitgelicht. */
export const homeDiensten: Dienst[] = dienstenJaar;

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
