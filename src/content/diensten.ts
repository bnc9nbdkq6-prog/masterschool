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
  /** Inhoud van de detailpagina. Alleen aanwezig als er een pagina is. */
  detail?: DienstDetail;
};

export type DienstDetail = {
  metaTitel: string;
  metaOmschrijving: string;
  /** Kop van de detailpagina; mag scherper zijn dan de naam van de dienst. */
  titel: string;
  intro: string;
  /** Eerlijk benoemen voor wie het niet werkt. Verkoopt de rest geloofwaardiger. */
  nietVoorWie: string;
  /** Het traject van begin tot eind. */
  stappen: { titel: string; tekst: string }[];
  /** Losse praktische feiten: locatie, betaling, afzeggen. */
  praktisch: string[];
  /**
   * Eerlijkheidsnotitie wanneer de dienst nog niet eerder is verkocht.
   * Laat weg zodra er wél klanten mee zijn geholpen.
   */
  nieuweDienst?: string;
};

/** Begeleiding die het hele schooljaar door loopt. */
export const dienstenJaar: Dienst[] = [
  {
    slug: "bijles",
    naam: "Bijles",
    belofte:
      "Uw kind begrijpt de stof weer en weet hoe de volgende toets in elkaar zit.",
    prijs: "€32",
    prijsDetail: "per uur, inclusief btw",
    duur: "Per les, minimaal één uur. Meestal één tot anderhalf uur",
    voorWie:
      "Voor één vak dat blijft haken, of om gericht toe te werken naar een toetsweek. Wiskunde A, wiskunde B, economie, bedrijfseconomie of geschiedenis.",
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
      "Van onvoldoende naar voldoende bij de eerstvolgende toets — of ik begeleid kosteloos door.",
    prijs: "€249",
    prijsDetail: "per sprint, per vak, inclusief btw",
    duur: "4 weken · 1 uur intake plus vier sessies van 90 minuten",
    voorWie:
      "Voor één vak dat nu onvoldoende staat en snel omhoog moet. Beschikbaar voor wiskunde A, economie, bedrijfseconomie en geschiedenis. Twee sprints voor twee vakken tegelijk kan.",
    bevat: [
      "Foutenanalyse-intake van een uur: waar gaat het precies mis en wat is het doel voor de volgende toets",
      "Vier sessies van 90 minuten die u zelf inplant, samen naar dat doel toe",
      "Een studiemethode voor dat vak, zodat het ook zonder mij blijft werken",
      "Bijles in het vak zelf, gericht op de stof die op de toets komt",
    ],
    garantie:
      "Doet uw kind alle vier de sessies en maakt het de opdrachten, maar haalt het bij de eerstvolgende toets voor dat vak toch geen voldoende? Dan zet ik de begeleiding kosteloos voort tot die voldoende er wél is.",
    garantieLabel: "Met resultaatgarantie",
    uitgelicht: true,
    href: "/diensten/garantiesprint",
    detail: {
      metaTitel: "De Garantiesprint — van onvoldoende naar voldoende",
      metaOmschrijving:
        "Vier weken gerichte begeleiding voor één vak dat onvoldoende staat. €249 inclusief btw. Haalt uw kind geen voldoende bij de eerstvolgende toets, dan begeleid ik kosteloos door.",
      titel: "Eén vak dat onvoldoende staat. Vier weken. Eén voldoende.",
      intro:
        "Soms is er niets mis met hoe uw kind leert, en loopt er gewoon één vak vast. Dan hoeft u geen heel traject: dan hoeft u alleen dat vak recht te trekken. Daar is de Garantiesprint voor, en u weet vooraf waar u aan toe bent.",
      nietVoorWie:
        "Minder geschikt wanneer het vak al voldoende staat, of wanneer er op meerdere vakken tegelijk iets misgaat. Loopt het overal vast, dan zit het probleem meestal in de manier van leren en is het MasterSchool Leersysteem logischer. Dat zeg ik ook gewoon als ik het zie.",
      stappen: [
        {
          titel: "Kennismaking van een kwartier",
          tekst:
            "Gratis en vrijblijvend, telefonisch of via video. We bespreken om welk vak het gaat en wanneer de volgende toets is. Denk ik dat een sprint hier niet het juiste is, dan zeg ik dat.",
        },
        {
          titel: "Foutenanalyse-intake van een uur",
          tekst:
            "Hier zoeken we uit waar het precies misgaat — want “wiskunde gaat niet goed” is geen diagnose. We praten door de stof heen en maken samen wat opgaven, zodat ik zie waar het vastloopt. Neem mee wat er is: het boek, de toetsstof en oude toetsen als u ze nog heeft. Aan het eind van dit uur staat het doel voor de volgende toets vast.",
        },
        {
          titel: "Vier sessies van 90 minuten",
          tekst:
            "U plant ze zelf in; meestal één per week in de vier weken voor de toets. In elke sessie: uitleg van de stof die nog niet zit, oefenen onder mijn begeleiding, en een manier om dit vak voortaan aan te pakken.",
        },
        {
          titel: "Werk tussen de sessies",
          tekst:
            "Uw kind krijgt oefenopgaven of flashcards mee, afgestemd op het vak. Dit is geen vrijblijvend advies: het uitvoeren hiervan is een voorwaarde voor de garantie.",
        },
        {
          titel: "De toets",
          tekst:
            "Staat er een voldoende, dan zijn we klaar. Zo niet, en heeft uw kind zich aan de afspraken gehouden, dan gaan we kosteloos door tot die voldoende er wel is.",
        },
      ],
      praktisch: [
        "Vier lessen tegoed die u zelf inplant, plus het intakeuur",
        "Online, bij mij thuis in Monnickendam, bij uw kind thuis of in de bibliotheek",
        "Buiten Monnickendam, Katwoude en Purmerend betaalt u alleen de kosten van het openbaar vervoer",
        "Twee sprints voor twee verschillende vakken tegelijk kan",
        "Factuur na het intakegesprek; betalen in één keer of in termijnen",
        "Stopt u tussentijds, dan betaalt u alleen de sessies die zijn gegeven",
      ],
      nieuweDienst:
        "De Garantiesprint is een nieuw pakket. De onderdelen niet: dit is de bijles die ik al geef, alleen strakker georganiseerd en met een resultaat eraan gekoppeld. Dat u nog geen andere sprintklanten op deze pagina ziet, klopt dus — en juist daarom neem ik het risico met de garantie op mij.",
    },
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
    garantie:
      "Ik neem alleen leerlingen aan van wie ik geloof dat slagen haalbaar is. Volgt uw kind alle sessies en maakt het de afgesproken opdrachten, maar slaagt het toch niet? Dan krijgt u het volledige bedrag terug. Na de examens kan ik niet doorbegeleiden, dus dan is teruggeven het enige wat eerlijk is.",
    garantieLabel: "Geld terug bij zakken",
    notitie:
      "Start half februari en loopt door tot de examens. Aanmelden kan nu al; er is plek voor maximaal vier leerlingen.",
    href: "/diensten/examen-squad",
    detail: {
      metaTitel: "MasterSchool Examen Squad — tien weken examentraining",
      metaOmschrijving:
        "Tien weken examentraining in een groepje van maximaal vier leerlingen in Monnickendam. Twee keer per week 90 minuten, €595 per leerling inclusief btw.",
      titel: "Tien weken examentraining, in een groepje van vier",
      intro:
        "Twee keer per week samen aan het werk, met mij ernaast. Geen klassikale les waarin iedereen hetzelfde doet, maar begeleid zelfstandig werken: elke leerling werkt aan zijn eigen vakken en ik help om de beurt. Zo kunnen vier leerlingen met vier verschillende vakkenpakketten toch in één groep zitten.",
      nietVoorWie:
        "Minder geschikt voor wie echt één-op-één nodig heeft, of voor wie in een groepje niet aan het werk komt. Staat het er op alle fronten slecht voor en is er dagelijks contact nodig, dan is de Examen Doorbraak passender — die is duurder, maar dan krijgt u wel wat er nodig is.",
      stappen: [
        {
          titel: "Kennismaking van een kwartier",
          tekst:
            "Gratis en vrijblijvend. We bespreken welke vakken lastig zijn, hoe uw kind er nu voor staat en of werken in een klein groepje bij hem of haar past.",
        },
        {
          titel: "De eerste weken: een leersysteem",
          tekst:
            "We beginnen niet met stampen maar met een aanpak. Uw kind bouwt in de eerste weken een eigen leersysteem: hoe je een examen aanpakt, wanneer je wat doet en hoe je controleert of je het echt kent.",
        },
        {
          titel: "Elke sessie: werken met hulp binnen handbereik",
          tekst:
            "Iedereen werkt aan zijn eigen vakken; ik loop rond en help om de beurt. Loopt uw kind vast op een opgave wiskunde A, economie, bedrijfseconomie of geschiedenis, dan leg ik het gewoon uit. Dat is het verschil met thuis alleen achter de boeken zitten.",
        },
        {
          titel: "Examens oefenen en nakijken",
          tekst:
            "Uw kind maakt oefenexamens onder mijn begeleiding en levert ze bij mij in. Ik kijk ze na en laat zien waar de punten blijven liggen — vaak zit dat niet in de kennis maar in hoe het antwoord is opgeschreven.",
        },
        {
          titel: "Elke week een planning voor de dagen ertussen",
          tekst:
            "Aan het eind van de week staat op papier wat er thuis gebeurt. Zo is de tijd tussen de sessies geen zwart gat.",
        },
      ],
      praktisch: [
        "Maximaal vier leerlingen per groep; havo, vwo en mavo mogen door elkaar",
        "In Monnickendam. De dagen en tijden stem ik af met de groep zodra die compleet is",
        "Er is geen minimum aantal aanmeldingen: de Squad gaat door, ook met twee leerlingen",
        "Mist uw kind een sessie, dan vervalt die en is er geen restitutie",
        "Factuur bij de start; betalen in één keer of in twee termijnen",
        "Stopt u tussentijds, dan betaalt u alleen de weken die zijn geweest",
      ],
      nieuweDienst:
        "De Examen Squad draait dit jaar voor het eerst. De onderdelen zijn niet nieuw — het leersysteem, de examentraining en de bijles doe ik al — maar deze vorm wel. Daarom staat er nog geen oud-deelnemer op deze pagina.",
    },
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
    garantie:
      "Ik neem alleen leerlingen aan van wie ik geloof dat overgaan haalbaar is. Betaalt u in termijnen, dan is de tweede termijn pas verschuldigd nadat er een meetbare cijferverbetering is. En gaat uw kind ondanks volledige medewerking toch niet over, dan begeleid ik de eerste twee maanden van het overgedane jaar kosteloos.",
    garantieLabel: "Met vangnet",
    href: "/diensten/overgangsboost",
    detail: {
      metaTitel: "MasterSchool Overgangsboost — als overgaan spannend wordt",
      metaOmschrijving:
        "Intensieve één-op-één begeleiding tot de overgangsvergadering, met dagelijks contact. €1.290 inclusief btw of drie termijnen van €447.",
      titel: "Als overgaan dit jaar echt spannend wordt",
      intro:
        "Er zijn situaties waarin een uurtje bijles per week het niet meer gaat redden. Te veel vakken, te weinig tijd, en een leerling die het overzicht kwijt is. Dan is er iets nodig dat elke dag doorgaat in plaats van één keer per week.",
      nietVoorWie:
        "Niet voor de leerling die er redelijk voor staat en zelf denkt dat het wel goed komt. Dit traject is intensief en duur; als er geen echte zorg is over overgaan, is bijles of het Leersysteem verstandiger en veel goedkoper. Dat zeg ik in het kennismakingsgesprek gewoon.",
      stappen: [
        {
          titel: "Kennismaking van een kwartier",
          tekst:
            "Gratis en vrijblijvend. We bespreken hoe uw kind er nu voor staat, wat er al is geprobeerd en wat er nog moet gebeuren. Ik neem alleen leerlingen aan van wie ik geloof dat het haalbaar is — ziet u mij twijfelen, dan zeg ik dat.",
        },
        {
          titel: "Nulmeting",
          tekst:
            "In de eerste week maakt uw kind een oefentoets of oefenexamen. Dat cijfer is het vertrekpunt: het laat zien hoe groot het gat is en waar de punten precies blijven liggen. Zonder nulmeting is “het gaat beter” een gevoel in plaats van een feit.",
        },
        {
          titel: "Samen een leersysteem bouwen",
          tekst:
            "Een aanpak per vak, een manier om te plannen en een manier om te controleren of het echt zit. Afgestemd op wat uw kind daadwerkelijk gaat doen, niet op wat er mooi uitziet op papier.",
        },
        {
          titel: "Elke dag tien minuten bellen",
          tekst:
            "Hoe ging het vandaag, wat is er af, en wat doen we morgen. Tien minuten, elke relevante dag — ook in het weekend. Dit is het onderdeel waar het meeste effect vandaan komt: er is geen dag waarop het stilletjes kan instorten.",
        },
        {
          titel: "Bijles waar dat nodig is",
          tekst:
            "Loopt het op wiskunde A, economie, bedrijfseconomie of geschiedenis inhoudelijk vast, dan geef ik gewoon les. Dat zit erbij; u betaalt daar niet apart voor.",
        },
        {
          titel: "Slaap, voeding en leefritme",
          tekst:
            "Ik deel wat er bekend is over eten, slapen en leven in een periode waarin u cognitief moet presteren, en pas dat toe op de situatie van uw kind. Het blijft informatie waar uw kind zelf iets mee doet; het is geen medisch of voedingskundig advies.",
        },
        {
          titel: "Tweede meting",
          tekst:
            "Na een aantal weken oefenen maakt uw kind opnieuw een vergelijkbare toets. Ligt dat cijfer hoger, dan is de verbetering vastgesteld en weten we dat de aanpak werkt.",
        },
      ],
      praktisch: [
        "Eén-op-één, zonder limiet op het aantal contactmomenten",
        "Online, bij mij thuis in Monnickendam, bij uw kind thuis of in de bibliotheek",
        "Buiten Monnickendam, Katwoude en Purmerend betaalt u alleen de kosten van het openbaar vervoer",
        "WhatsApp-support zonder limiet; ik antwoord gemiddeld binnen drie uur, ook in het weekend",
        "In een vakantieweek kan het rustiger zijn, maar bereikbaar blijf ik",
        "Stopt u tussentijds, dan betaalt u alleen de periode die is geweest",
        "€1.290 in één keer, of drie termijnen van €447",
        "Betaalt u in termijnen, dan is de tweede termijn pas verschuldigd nadat de tweede meting een hoger cijfer laat zien",
      ],
      nieuweDienst:
        "Dit traject is nieuw; ik heb er nog geen leerling mee begeleid. De onderdelen ken ik wel: het leersysteem, de planning en de bijles doe ik al, en ik weet uit eigen ervaring wat dagelijkse structuur doet. Dat u hier nog geen oud-leerling ziet staan, klopt dus — en daarom staat het vangnet hierboven er ook.",
    },
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
      "Start half februari en loopt tot het laatste centraal examen. Aanmelden kan nu al.",
    garantie:
      "Ik neem alleen leerlingen aan van wie ik geloof dat slagen haalbaar is. Betaalt u in termijnen, dan is de tweede termijn pas verschuldigd nadat er een meetbare cijferverbetering is. En zakt uw kind ondanks volledige medewerking, dan begeleid ik kosteloos door naar het herexamen in het tweede tijdvak.",
    garantieLabel: "Met vangnet",
    uitgelicht: true,
    href: "/diensten/examen-doorbraak",
    detail: {
      metaTitel: "MasterSchool Examen Doorbraak — als slagen niet zeker is",
      metaOmschrijving:
        "Intensieve één-op-één examenbegeleiding met dagelijks contact tot het laatste centraal examen. €1.790 inclusief btw of drie termijnen van €597.",
      titel: "Als slagen op dit moment niet vanzelfsprekend is",
      intro:
        "Een examenjaar laat zich niet inhalen met een uurtje per week. Als het er nu slecht voor staat, is er iets nodig dat elke dag doorgaat: een plan per dag, iemand die controleert of het gebeurt, en uitleg op het moment dat het vastloopt. Dat is dit traject.",
      nietVoorWie:
        "Niet voor de examenkandidaat die er redelijk voor staat en weinig stress heeft. Dit is het zwaarste en duurste dat ik aanbied; als slagen niet echt in gevaar is, bent u met bijles of de Examen Squad beter en veel goedkoper uit. Ik zeg dat in het kennismakingsgesprek gewoon.",
      stappen: [
        {
          titel: "Kennismaking van een kwartier",
          tekst:
            "Gratis en vrijblijvend. We bespreken hoe uw kind er nu voor staat, wat er al is geprobeerd en wat er nog moet gebeuren. Ik neem alleen leerlingen aan van wie ik geloof dat slagen haalbaar is — ziet u mij twijfelen, dan zeg ik dat.",
        },
        {
          titel: "Nulmeting",
          tekst:
            "In de eerste week maakt uw kind een oefenexamen. Dat cijfer is het vertrekpunt: het laat zien hoe groot het gat is en waar de punten precies blijven liggen. Zonder nulmeting is “het gaat beter” een gevoel in plaats van een feit.",
        },
        {
          titel: "Samen een leersysteem bouwen",
          tekst:
            "Een aanpak per vak, een manier om te plannen en een manier om te controleren of het echt zit. Afgestemd op wat uw kind daadwerkelijk gaat doen, niet op wat er mooi uitziet op papier.",
        },
        {
          titel: "Examenspecifieke begeleiding",
          tekst:
            "Dit is waar dit traject zich onderscheidt. Hoe is het examen voor dit vak opgebouwd, wat voor vraagtypen komen terug, hoe wordt er nagekeken en hoe schrijf je een antwoord op dat de punten ook echt oplevert. Ik heb dat vorig jaar zelf tot in detail uitgezocht.",
        },
        {
          titel: "Elke dag tien minuten bellen",
          tekst:
            "Hoe ging het vandaag, wat is er af, en wat doen we morgen. Tien minuten, elke relevante dag — ook in het weekend. Hier komt het meeste effect vandaan: er is geen dag waarop het stilletjes kan instorten.",
        },
        {
          titel: "Bijles waar dat nodig is",
          tekst:
            "Loopt het op wiskunde A, economie, bedrijfseconomie of geschiedenis inhoudelijk vast, dan geef ik gewoon les. Dat zit erbij; u betaalt daar niet apart voor.",
        },
        {
          titel: "Slaap, voeding en leefritme",
          tekst:
            "Ik deel wat er bekend is over eten, slapen en leven in een periode waarin u cognitief moet presteren, en pas dat toe op de situatie van uw kind. Het blijft informatie waar uw kind zelf iets mee doet; het is geen medisch of voedingskundig advies.",
        },
        {
          titel: "Tweede meting",
          tekst:
            "Na een aantal weken oefenen maakt uw kind opnieuw een vergelijkbaar examen. Ligt dat cijfer hoger, dan is de verbetering vastgesteld — en pas dan wordt bij gespreide betaling de tweede termijn opeisbaar.",
        },
      ],
      praktisch: [
        "Eén-op-één, zonder limiet op het aantal contactmomenten",
        "Online, bij mij thuis in Monnickendam, bij uw kind thuis of in de bibliotheek",
        "Buiten Monnickendam, Katwoude en Purmerend betaalt u alleen de kosten van het openbaar vervoer",
        "WhatsApp-support zonder limiet; ik antwoord gemiddeld binnen drie uur, ook in het weekend",
        "In een vakantieweek kan het rustiger zijn, maar bereikbaar blijf ik",
        "€1.790 in één keer, of drie termijnen van €597",
        "Stopt u tussentijds, dan betaalt u alleen de periode die is geweest",
      ],
      nieuweDienst:
        "Dit traject is nieuw; ik heb er nog geen examenkandidaat mee begeleid. De onderdelen ken ik wel: het leersysteem, de examenaanpak en de bijles doe ik al, en ik deed vorig jaar zelf eindexamen met een 8,8 gemiddeld. Dat u hier nog geen oud-leerling ziet staan, klopt dus — en daarom staat het vangnet hierboven er ook.",
    },
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
    naam: "Wiskunde B",
    toelichting: "Van functies en meetkunde tot differentiëren en integreren.",
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
