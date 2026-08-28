/**
 * Reviews, cases en de eigen resultaten van Oskar.
 *
 * Regels bij het toevoegen van nieuw materiaal:
 *  1. Plaats niets zonder aantoonbare schriftelijke toestemming (`toestemming`).
 *  2. Corrigeer een review uitsluitend taalkundig; laat de strekking intact.
 *  3. Vermeld bij een resultaat altijd vak, beginsituatie, aanpak en periode.
 *  4. Publiceer geen naam, school, foto of gezondheidsgegeven van een
 *     minderjarige zonder toestemming van ouder/verzorger én leerling.
 */

export type Review = {
  id: string;
  naam: string;
  rol: string;
  quote: string;
  vervolg?: string[];
  toestemming: true;
};

export const reviews: Review[] = [
  {
    id: "finlay",
    naam: "Finlay",
    rol: "leerling vwo",
    quote:
      "Oskar heeft mij geholpen met een wiskundetoets waarvan ik eerst zeker wist dat ik hem niet zou halen, maar in één week heeft hij mij geholpen naar een 9. Hij helpt je met heel veel geduld en ziet het meteen als je een fout maakt.",
    vervolg: ["Net mijn toets binnen — gehaald op gevorderd niveau!"],
    toestemming: true,
  },
  {
    id: "chantal",
    naam: "Chantal",
    rol: "ouder van een leerling in havo 3",
    quote:
      "Oskar geeft bijles wiskunde A aan mijn dochter en zij heeft er veel baat bij. Oskar is rustig en geeft duidelijke uitleg. Heel fijn dat we van zijn diensten gebruik kunnen maken ter voorbereiding op de toetsweek.",
    toestemming: true,
  },
  {
    id: "gianni",
    naam: "Gianni",
    rol: "leerling vwo 6, inmiddels geslaagd",
    quote:
      "Tijdens mijn examenjaar van 6 vwo heeft Oskar mij nieuwe leertechnieken geleerd en uiteindelijk ook extra bijles economie en bedrijfseconomie gegeven, mijn minst goede vakken. Hierdoor heb ik mijn examens gehaald.",
    toestemming: true,
  },
  {
    id: "caro",
    naam: "Caro",
    rol: "ouder van een leerling in mavo 4, inmiddels geslaagd",
    quote:
      "Ik zocht iemand die mijn zoon bijles kon geven voor wiskunde. Een afspraak was heel snel gemaakt en mijn zoon begrijpt door de bijles de wiskundestof nu veel beter. Oskar neemt de tijd voor uitleg en geeft mijn zoon denktijd om zelf tot zijn antwoorden te komen. Kortom: heel blij met de dienstverlening.",
    vervolg: ["Een 8 voor wiskunde!"],
    toestemming: true,
  },
  {
    id: "ouder-havo-vwo-2",
    naam: "Ouder van een leerling in havo/vwo 2",
    rol: "op eigen verzoek anoniem",
    quote:
      "Ik ken Oskar van de sportschool: een fijne, rustige, nette jongen. Ik heb hem ingeschakeld voor wiskundebijles, omdat het gewoon beter is als iemand die niet dichtbij staat helpt bij het uitleggen en leren van moeilijke stof — op school krijgen ze daar tijdens de les weinig tijd voor. Mijn zoon heeft het als zeer fijn ervaren en Oskar neemt de tijd om alles rustig uit te leggen.",
    vervolg: [
      "Na één keer bijles is meteen alles duidelijk.",
      "Top man! Je legt het honderd keer beter uit dan zijn wiskundedocent.",
    ],
    toestemming: true,
  },
  {
    id: "sky",
    naam: "Sky",
    rol: "leerling mavo 4",
    quote:
      "Oskar helpt mij enorm met mijn wiskunde. Vaak begrijp ik na een uur het hele hoofdstuk. Hij zegt niks voor, hij laat je het zelf maken — dat werkt goed. Oskar kan het heel eenvoudig uitleggen, waardoor je het snel snapt. Dat is enorm fijn.",
    vervolg: [
      "Ik heb dit jaar al mijn wiskunde- en economietoetsen afgerond en daar mooie cijfers voor gehaald!",
    ],
    toestemming: true,
  },
  {
    id: "robin",
    naam: "Robin",
    rol: "leerling vwo 3 — broer van Oskar",
    quote:
      "Oskar heeft me meerdere keren geholpen, met veel succes. Ik vind wiskunde best moeilijk, maar met zijn hulp snapte ik het heel goed. En door hem weet ik nu goed hoe ik moet leren zonder hulp van docenten, want ik vind zelfstandig werken veel fijner.",
    toestemming: true,
  },
];

export type Case = {
  id: string;
  naam: string;
  vak: string;
  niveau: string;
  beginsituatie: string;
  aanpak: string;
  inzetLeerling: string;
  sessies: string;
  periode: string;
  resultaat: string;
  toestemming: true;
};

export const cases: Case[] = [
  {
    id: "case-003",
    naam: "Valentijn",
    vak: "Wiskunde",
    niveau: "havo 2",
    beginsituatie: "Een 2,6 voor de laatste toets.",
    aanpak: "Uitleg van de stof en samen oefenvragen maken onder begeleiding.",
    inzetLeerling: "Oefenvragen gemaakt en daarnaast zelfstandig geleerd.",
    sessies: "2 sessies",
    periode: "verspreid over twee weken",
    resultaat: "Een 8,6 voor de volgende toets.",
    toestemming: true,
  },
  {
    id: "case-001",
    naam: "Finlay",
    vak: "Wiskunde",
    niveau: "vwo 3 (leerjaar tijdens de begeleiding)",
    beginsituatie: "“Ik begrijp niks van dit hoofdstuk.”",
    aanpak: "Uitleg bij de stof en oefenvragen maken onder begeleiding.",
    inzetLeerling: "Zelf de oefenvragen gemaakt.",
    sessies: "2 sessies",
    periode: "5 tot 13 januari 2026",
    resultaat: "Toets gehaald op gevorderd niveau: een 9.",
    toestemming: true,
  },
  {
    id: "case-004",
    naam: "Roan",
    vak: "Wiskunde",
    niveau: "mavo 4",
    beginsituatie: "Een 4,6 gemiddeld voor wiskunde.",
    aanpak:
      "Uitleg van de stof, examens oefenen onder begeleiding en zelfstandig, oefentoetsen maken en gericht oefenen op eerder gemaakte fouten.",
    inzetLeerling: "Oefenexamens en oefentoetsen gemaakt.",
    sessies: "6 sessies",
    periode: "van eind februari tot begin juni",
    resultaat:
      "Een 8,0 voor de laatste schooltoets, een 7,5 voor het centraal examen wiskunde en geslaagd.",
    toestemming: true,
  },
  {
    id: "case-002",
    naam: "Gianni",
    vak: "Economie en bedrijfseconomie",
    niveau: "vwo 6, examenjaar",
    beginsituatie: "Een 4 voor economie, een 5 voor bedrijfseconomie en een 5 voor Frans.",
    aanpak:
      "Eerst een uur uitleg over mijn eigen leermethode met flashcards en herhaling, inclusief mijn bestaande notities. Daarna twee keer een uur bijles over de examenstof die hij nog moeilijk vond.",
    inzetLeerling:
      "Oefenopgaven gemaakt en het flashcardsysteem consequent uitgevoerd — dat was de grootste factor.",
    sessies: "2 sessies bijles en 1 sessie leermethode",
    periode: "februari en mei 2026",
    resultaat: "Geslaagd voor het vwo-diploma.",
    toestemming: true,
  },
];

/** Eigen, controleerbare resultaten van Oskar. */
export const eigenResultaten = [
  { cijfer: "8,8", label: "gemiddeld op het centraal eindexamen" },
  { cijfer: "10", label: "voor wiskunde A" },
  { cijfer: "9", label: "voor economie, bedrijfseconomie en geschiedenis" },
  { cijfer: "Cum laude", label: "vwo-diploma, 1 juli 2026" },
];

/** Vaste nuancering bij alle resultaten. Publiceer resultaten nooit zonder. */
export const resultatenDisclaimer =
  "Dit zijn werkelijke resultaten van individuele leerlingen, geplaatst met hun toestemming. Ze laten zien wat mogelijk is, maar zijn geen voorspelling van wat uw kind haalt: het resultaat hangt ook af van het startniveau, de moeilijkheid van de toets en de inzet van de leerling. Bij bijles geef ik daarom geen cijfergarantie.";
