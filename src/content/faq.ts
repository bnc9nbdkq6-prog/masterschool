/**
 * Veelgestelde vragen. De antwoorden zijn gebaseerd op de werkelijke
 * antwoorden van Oskar; alleen de formulering is aangescherpt.
 * `opHome: true` toont de vraag ook in de compacte FAQ op de homepage.
 */

export type FaqItem = {
  vraag: string;
  antwoord: string;
  opHome?: boolean;
};

export type FaqCategorie = {
  titel: string;
  items: FaqItem[];
};

export const faq: FaqCategorie[] = [
  {
    titel: "Over de begeleiding",
    items: [
      {
        vraag: "Voor welke leerlingen is MasterSchool geschikt?",
        antwoord:
          "Voor middelbare scholieren die om welke reden dan ook niet tevreden zijn met hoe het op school gaat: te lage cijfers, of juist de ambitie om hoge cijfers te halen, te veel tijd kwijt zijn aan school, weinig motivatie om te leren of veel stress rond school.",
        opHome: true,
      },
      {
        vraag: "Voor welke leerlingen is MasterSchool minder geschikt?",
        antwoord:
          "Voor leerlingen die het niet beter willen doen dan nu. Er hoeft geen enorme motivatie te zijn, maar er moet wel een sprankje bereidheid zijn om samen aan de slag te gaan. Zonder die bereidheid kan ik weinig betekenen.",
      },
      {
        vraag: "Helpt u alleen havo- en vwo-leerlingen?",
        antwoord:
          "Ik richt me vooral op havo en vwo, alle leerjaren. Mavo-leerlingen kan ik in principe in dezelfde vakken helpen. De stof wijkt soms iets af, maar daar komen we altijd uit.",
        opHome: true,
      },
      {
        vraag: "Welke vakken geeft u precies?",
        antwoord:
          "Bijles geef ik in wiskunde A, economie, bedrijfseconomie en geschiedenis. Het MasterSchool Leersysteem is niet vakgebonden: dat werkt voor het hele vakkenpakket.",
        opHome: true,
      },
      {
        vraag: "Geeft u ook wiskunde B? Vanaf wanneer?",
        antwoord:
          "Nog niet. Ik werk op dit moment aan een certificaat voor wiskunde B. Bijles in wiskunde B is beschikbaar vanaf januari 2027.",
      },
      {
        vraag: "Geeft u ook online bijles?",
        antwoord:
          "Ja. Online lessen doen we meestal via een videogesprek in WhatsApp. Dat werkt prima en scheelt reistijd. Online begeleiding kan ook buiten de regio.",
      },
      {
        vraag: "Waar vinden de fysieke lessen plaats?",
        antwoord:
          "Bij mij thuis in Monnickendam, bij de leerling thuis of in de bibliotheek van Monnickendam. Wat de leerling het prettigst vindt. Op een andere locatie kan ook, mits de reiskosten worden vergoed.",
      },
      {
        vraag: "Hoe lang duurt een bijlesles?",
        antwoord:
          "Dat hangt af van de leerling en van de hoeveelheid stof: hoe lang houdt iemand zijn concentratie vast en hoeveel moet er af? Gemiddeld duurt een les een uur, vaak anderhalf. Een uur is het minimum. Langer kan, maar boven de drie uur wordt de aandacht in de praktijk te laag.",
      },
      {
        vraag: "Hoe vaak heeft mijn kind bijles nodig?",
        antwoord:
          "Daar is geen standaardantwoord op. Het hangt af van hoeveel stof er geleerd moet worden, wanneer die af moet zijn en hoe snel uw kind de stof oppikt. Vaak is één keer per week genoeg; rond een toetsweek soms vaker. We bepalen dat samen en stellen het onderweg bij.",
      },
    ],
  },
  {
    titel: "Over aanpak en resultaat",
    items: [
      {
        vraag: "Kunt u garanderen dat mijn kind hogere cijfers haalt?",
        antwoord:
          "Bij losse bijles niet, en dat wil ik ook niet beloven. Wat ik daar wél garandeer, is dat de leerling tijdens de les de stof uit het boek goed begrijpt. In verreweg de meeste gevallen leidt dat tot betere cijfers, maar een leerling kan een black-out krijgen of een toets kan sterk afwijken van het boek. Bij de Garantiesprint en het MasterSchool Leersysteem ligt dat anders: daar spreken we vooraf een resultaat af, en haalt uw kind dat niet terwijl het zich wel aan de afspraken houdt, dan begeleid ik kosteloos door tot het wél lukt.",
        opHome: true,
      },
      {
        vraag: "Wat maakt uw aanpak anders dan gewone bijles?",
        antwoord:
          "Drie dingen. Ik werk met leer- en geheugentechnieken waarvan de effectiviteit goed onderbouwd is, in plaats van alleen herlezen en samenvatten. Ik ken het school- en examensysteem van dichtbij en heb dat zelf grondig uitgeplozen: ik weet wat er doorgaans op een toets komt en hoe je een antwoord moet opschrijven. En ik sta qua leeftijd dicht bij de leerling, wat de drempel en de weerstand verlaagt.",
        opHome: true,
      },
      {
        vraag: "Wat als mijn kind niet gemotiveerd is?",
        antwoord:
          "Dat komt vaak voor en is meestal geen probleem. Ik pas me aan aan de leerling en aan wat er op dat moment nodig is. Er is wel een sprankje motivatie nodig: zolang de leerling bereid is om met mij aan tafel te gaan zitten, kan ik helpen. Ik heb zelf ooit van school af gewild, dus ik oordeel niet.",
        opHome: true,
      },
      {
        vraag: "Is bijles een teken dat mijn kind niet slim genoeg is?",
        antwoord:
          "Absoluut niet. Veel van mijn leerlingen zijn overduidelijk slim, maar missen de juiste begeleiding. Een veelgehoorde klacht is dat de uitleg op school niet aankomt. Met persoonlijke uitleg begrijpen leerlingen die “te moeilijke stof” vaak verrassend snel.",
        opHome: true,
      },
      {
        vraag: "Wat als mijn kind de stof na uw uitleg nog steeds niet begrijpt?",
        antwoord:
          "Dan ligt dat aan mij, niet aan de leerling. Ik zie het als mijn verantwoordelijkheid dat de leerling het begrijpt, dus leg ik het opnieuw uit — op een andere manier. Lukt het echt niet, dan schakel ik over op een stappenplan: precies wat de leerling moet doen als hij of zij zo'n vraag op de toets krijgt, zodat het antwoord alsnog goed komt.",
      },
      {
        vraag: "Helpt u ook met plannen en leren-leren?",
        antwoord:
          "Ja. In elke bijles zitten plannings- en leertechnieken verwerkt. Wilt u daar gericht en grondig aan werken, dan is het MasterSchool Leersysteem de betere keuze.",
      },
      {
        vraag: "Gebruikt u AI tijdens de begeleiding?",
        antwoord:
          "Alleen waar het past. Ik gebruik AI om iets te illustreren met een afbeelding en om antwoorden te controleren wanneer ik ergens niet honderd procent zeker van ben en er geen antwoordenboek is. De uitleg zelf komt van mij.",
      },
      {
        vraag: "Wat verwacht u van mij als ouder?",
        antwoord:
          "Steun voor uw kind, overleg met uw kind over wat hij of zij nodig heeft, en duidelijke afspraken met goede bereikbaarheid. Meer is niet nodig.",
      },
      {
        vraag: "Wat verwacht u van de leerling?",
        antwoord:
          "Meewerken, inzet tonen en gemaakte afspraken nakomen. Voor de les: de boeken klaarleggen en de stof vooraf naar mij sturen, zodat ik weet wat we gaan behandelen.",
      },
    ],
  },
  {
    titel: "Over prijs en voorwaarden",
    items: [
      {
        vraag: "Wat kost individuele bijles precies?",
        antwoord:
          "€25 per uur, inclusief btw. Ik reken per werkelijk uur: duurt een les 90 minuten, dan betaalt u anderhalf uur. De minimale duur is één uur.",
        opHome: true,
      },
      {
        vraag: "Wat kost het MasterSchool Leersysteem?",
        antwoord:
          "€349 eenmalig, inclusief btw. Daarvoor bouwen we in zes sessies samen het complete leersysteem, inclusief intakegesprek en een e-book om later terug te lezen. Loopt een sessie uit, dan kost dat niets extra. Wilt u daarna doorlopende WhatsApp- en belsupport, dan kan dat voor €15 per maand — maandelijks opzegbaar.",
        opHome: true,
      },
      {
        vraag: "Zijn reiskosten inbegrepen?",
        antwoord:
          "Binnen Monnickendam en Katwoude wel. Moet ik daarbuiten reizen, dan reken ik alleen de kosten van het openbaar vervoer door. Geen kilometervergoeding of uurtarief voor reistijd.",
      },
      {
        vraag: "Zijn er pakketten of kortingen?",
        antwoord:
          "Nog niet. U kunt wel vooraf een aantal lessen afnemen; bijkopen kan altijd. Pakketten met een lager tarief staan op de planning, maar zijn nog niet beschikbaar.",
      },
      {
        vraag: "Hoe kan ik betalen?",
        antwoord:
          "Na elke les, of vooraf voor een aantal lessen tegelijk. U ontvangt een factuur via e-mail of WhatsApp en betaalt via een bankoverschrijving of met iDEAL via een betaallink.",
      },
      {
        vraag: "Wat gebeurt er bij afzeggen of niet komen opdagen?",
        antwoord:
          "Zegt u meer dan twaalf uur van tevoren af, dan betaalt u niets. Daarna breng ik één uur in rekening, tenzij het afzeggen buiten uw invloed lag — bij ziekte bijvoorbeeld. Laat het altijd even weten via WhatsApp; ik denk graag mee.",
      },
      {
        vraag: "Kan ik eerst kennismaken voordat ik iets betaal?",
        antwoord:
          "Ja. Het kennismakingsgesprek is gratis en duurt ongeveer vijftien minuten, telefonisch of via video. U hoeft niets voor te bereiden of mee te nemen. Met of zonder uw kind erbij: wat voor u het prettigst is. En na de eerste bijles geldt: heeft u niet het gevoel dat die waardevol was, dan betaalt u niets.",
        opHome: true,
      },
    ],
  },
  {
    titel: "Praktisch",
    items: [
      {
        vraag: "Hoe snel kan mijn kind beginnen?",
        antwoord:
          "Doorgaans binnen een week. Neem contact op, dan hoort u meteen wat er op korte termijn mogelijk is. Ik geef op alle dagen en tijden les, dus er is vrijwel altijd een moment te vinden.",
      },
      {
        vraag: "Wat gebeurt er na mijn eerste bericht?",
        antwoord:
          "Ik reageer gemiddeld binnen drie uur. We bespreken kort waar uw kind tegenaan loopt en wat er nodig is, en daarna plannen we een eerste moment in: een kennismakingsgesprek, een eerste les of het startgesprek van het Leersysteem.",
        opHome: true,
      },
      {
        vraag: "Hoe werkt contact via WhatsApp?",
        antwoord:
          "Stuur een bericht en ik reageer zo snel mogelijk, bijna altijd binnen enkele uren. Een appje is voor de meeste ouders de makkelijkste eerste stap; bellen of het contactformulier mag natuurlijk ook.",
      },
      {
        vraag: "Neemt u op dit moment nieuwe leerlingen aan?",
        antwoord: "Ja.",
      },
    ],
  },
];

/** Alle FAQ-items als platte lijst, voor de FAQPage-structured data. */
export const faqPlat: FaqItem[] = faq.flatMap((c) => c.items);
