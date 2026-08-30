import type { Metadata } from "next";
import {
  AlarmClock,
  CalendarX,
  HeartCrack,
  Info,
  MessageSquareWarning,
  Repeat,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { Container, Kaart, KnopLink, Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  CaseKaart,
  PaginaKop,
  ReviewKaart,
  SlotCta,
  VerderLezen,
  Vink,
} from "@/components/blokken";
import { WhatsAppIcon } from "@/components/Icons";
import { prijzen, site } from "@/content/site";
import { cases, eigenResultaten, resultatenDisclaimer, reviews } from "@/content/bewijs";

export const metadata: Metadata = {
  title: "MasterSchool Leersysteem — leren dat wél blijft hangen",
  description:
    "Een persoonlijke aanpak voor elk vak, voor toetsweken én het eindexamen. Uw kind leert zelfstandig plannen en studeren, met een resultaatafspraak vooraf. €349 eenmalig inclusief btw.",
  alternates: { canonical: "/diensten/leersysteem" },
};

const herkenning = [
  {
    icon: AlarmClock,
    titel: "Het begint pas de avond ervoor",
    tekst:
      "Er wordt wel wat gedaan voor school, maar zo laat dat er weinig tijd overblijft om de stof echt te laten landen.",
  },
  {
    icon: MessageSquareWarning,
    titel: "“Het komt wel goed”",
    tekst:
      "Uw kind zegt dat het onder controle is. De cijfers zeggen iets anders, en daar valt niet over te praten.",
  },
  {
    icon: HeartCrack,
    titel: "U weet niet of u moet ingrijpen",
    tekst:
      "Aandringen levert ruzie op, loslaten voelt onverantwoord. Wat u ook kiest, het voelt als de verkeerde keuze.",
  },
  {
    icon: CalendarX,
    titel: "Elke toetsweek dezelfde film",
    tekst:
      "Spanning, korte lontjes en nachtwerk. Daarna opluchting — tot de volgende periode begint. En het examenjaar komt er ook nog aan.",
  },
  {
    icon: TrendingDown,
    titel: "De cijfers zakken langzaam",
    tekst:
      "Op één vak is het geen ramp. Bij elkaar opgeteld wordt het spannend richting overgaan of slagen.",
  },
  {
    icon: Repeat,
    titel: "U heeft al van alles geprobeerd",
    tekst:
      "Afspraken maken, de telefoon innemen, bijles voor één vak. Het helpt even, en daarna zakt het weer terug.",
  },
];

const watVerandert = [
  "Uw kind weet bij elk vak wat het moet doen om zich voor te bereiden — op een gewone toets net zo goed als op het centraal examen — en begint daardoor eerder.",
  "Leren kost minder tijd, omdat de tijd die erin gaat ook echt blijft hangen.",
  "Uw kind doet het zelf. De planning komt van hem of haar, niet van u. Dat scheelt een hoop discussie thuis.",
  "En uw kind staat er niet alleen voor: ik houd via WhatsApp bij of het systeem daadwerkelijk wordt uitgevoerd, zodat u dat niet hoeft te controleren.",
];

const onderdelen = [
  {
    titel: "Een manier van voorbereiden per vak",
    tekst:
      "Voor elk vak in het pakket: hoe pak je een toets aan, wat doe je wanneer, en hoe weet je zeker dat je het kent. Niet één vak — het hele rooster.",
  },
  {
    titel: "Ook voor toetsweken en examens",
    tekst:
      "Hetzelfde systeem schaalt mee van één toets naar een hele toetsweek en naar het centraal examen: hoe je maanden vooruit plant, wanneer je begint met herhalen en hoe je oefenexamens inzet in plaats van alleen doorlezen.",
  },
  {
    titel: "Een planning die uw kind volhoudt",
    tekst:
      "Een planningsmethode die past bij de agenda, de concentratie en de motivatie van uw kind. Geen schema dat na een week sneuvelt.",
  },
  {
    titel: "Leertechnieken die werken",
    tekst:
      "Actief ophalen met flashcards en oefenvragen, en spreiden in de tijd. Precies de technieken waarmee ik zelf van moeizaam naar cum laude ging.",
  },
  {
    titel: "Doelen die concreet zijn",
    tekst:
      "Niet “beter worden in wiskunde”, maar “van een 5,5 naar een 7,0 in periode 3”. Ouder en leerling bepalen die doelen samen met mij.",
  },
  {
    titel: "Analyse van de huidige aanpak",
    tekst:
      "Hoe leert uw kind nu en hoeveel tijd kost dat? Hier valt vaak de meeste winst te halen: herlezen en samenvatten voelen als hard werken, terwijl oefenen met vragen aantoonbaar beter beklijft.",
  },
  {
    titel: "Zelfstandigheid als doel",
    tekst:
      "Het systeem is niet van mij, het is van uw kind. Aan het eind kan het zonder mij vooruit: zelf bepalen wat er moet gebeuren, zelf plannen en zelf zien of het klopt. Dat is precies het punt.",
  },
  {
    titel: "Iemand die het bijhoudt",
    tekst:
      "Zelfstandig betekent niet in je eentje. Uw kind stuurt mij foto's als bewijs dat het systeem is uitgevoerd. Dat werkt: je doet het nu eenmaal eerder als iemand meekijkt — en die iemand ben ik, niet u.",
  },
  {
    titel: "WhatsApp-support",
    tekst:
      "Loopt uw kind ergens tegenaan, dan kan een appje altijd. Ik antwoord gemiddeld binnen drie uur, ook op een vraag over één opgave. Na het traject kan dat doorlopen voor €15 per maand.",
  },
  {
    titel: "Een e-book om terug te lezen",
    tekst:
      "Alles wat we tijdens de sessies behandelen over leren-leren staat ook op papier. Zo kan uw kind het later opnieuw opzoeken, zonder dat het van mijn geheugen of het hunne afhangt.",
  },
];

const traject = [
  {
    titel: "Vragenlijst vooraf",
    tekst:
      "Leerling en ouder vullen apart een korte vragenlijst in: vakken, cijfers, huidige leermethode, tijdsbesteding, aankomende toetsen en examens, en wat tot nu toe het meest frustreert. Eerlijk antwoorden is belangrijker dan mooi antwoorden — ik oordeel niet.",
  },
  {
    titel: "Kort intakegesprek (ongeveer 20 minuten, telefonisch)",
    tekst:
      "We lopen de vragenlijst door en ik controleer of het Leersysteem past bij wat uw kind nodig heeft. Zo niet, dan zeg ik dat.",
  },
  {
    titel: "Startgesprek van een uur (ouder en leerling)",
    tekst:
      "Doelen vastleggen, pijnpunten doorspreken en samen bepalen waar het mis zou kunnen gaan. In dit gesprek doet uw kind meteen een eerste oefening met een leertechniek, zodat het verschil direct voelbaar is. We leggen ook de resultaatafspraak en een evaluatiemoment vast.",
  },
  {
    titel: "Het systeem bouwen",
    tekst:
      "Op basis van het gesprek stel ik het persoonlijke leersysteem samen en lopen we het samen door, in sessies van ongeveer een uur.",
  },
  {
    titel: "Follow-up",
    tekst:
      "Een belafspraak of, als het in de buurt is, een bezoek. We bespreken hoe het systeem in de praktijk uitpakt, waar het knelt en passen het aan. Dit hoort bij het traject.",
  },
];

/** Gianni werd met deze methode begeleid; zijn review en case horen hier. */
const gianniReview = reviews.find((r) => r.id === "gianni")!;
const gianniCase = cases.find((c) => c.id === "case-002")!;

export default function LeersysteemPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Dienst · MasterSchool Leersysteem"
        titel="Elke toetsweek dezelfde stress? Dat komt niet door luiheid."
        intro="Het komt er bijna altijd op neer dat niemand uw kind ooit heeft geleerd hóé je leert. Het MasterSchool Leersysteem lost precies dat op: een persoonlijke aanpak waarmee uw kind zelfstandig elk vak aanpakt — van een gewone toets tot het centraal examen. Met een resultaatafspraak die we vooraf samen op papier zetten."
      />

      {/* Resultaatafspraak, meteen in beeld */}
      <div className="border-b border-line bg-white">
        <Container className="py-6">
          <p className="flex items-start gap-3 text-lg leading-relaxed text-navy">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
            <span>
              <strong className="font-semibold">
                Haalt uw kind de afgesproken verbetering niet, dan begeleid ik
                kosteloos door tot die er wel is.
              </strong>{" "}
              <span className="text-slate-600">
                De afspraak geldt voor élk vak dat te laag staat.{" "}
                <a
                  href="#resultaatafspraak"
                  className="font-medium text-navy underline underline-offset-4"
                >
                  Lees de voorwaarden
                </a>
                .
              </span>
            </span>
          </p>
        </Container>
      </div>

      {/* Herkenning */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Herkent u dit?"
            titel="Op school leert niemand je hóé je moet leren"
            intro="Uw kind doet het dus met de methode die het ergens heeft opgepikt: doorlezen, een samenvatting maken, de avond ervoor alles nog een keer. Dat is geen onwil, en het zegt niets over hoe slim uw kind is. Er is alleen nooit iemand geweest die heeft laten zien dat het ook anders kan."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {herkenning.map((item, i) => (
            <Reveal key={item.titel} delay={i * 45}>
              <Kaart className="h-full">
                <item.icon className="h-6 w-6 text-navy" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-navy">{item.titel}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.tekst}</p>
              </Kaart>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Belofte */}
      <Section tint="offwhite">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <SectionKop
              eyebrow="Wat er verandert"
              titel="Van hopen dat het goed komt naar weten dat het goed komt"
              intro="In ongeveer zes uur bouwen we samen een systeem dat uw kind zelfstandig kan uitvoeren. Geen strenger schema en geen extra uren leren — een andere manier van werken, die minder tijd kost en meer oplevert."
            />
            <ul className="mt-8 grid gap-3">
              {watVerandert.map((punt) => (
                <Vink key={punt}>{punt}</Vink>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={60}>
            <Kaart className="h-full">
              <h2 className="text-xl font-bold text-navy">In het kort</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Prijs", "€349 eenmalig, inclusief btw"],
                  [
                    "Omvang",
                    "Zes sessies van ongeveer een uur. Loopt een sessie uit, dan kost dat niets extra",
                  ],
                  [
                    "Verdeling",
                    "Verspreid over meerdere weken, in sessies van ongeveer een uur. De precieze indeling stemmen we af",
                  ],
                  ["Betrokkenen", "Oskar, de leerling en de ouder(s)"],
                  ["Vakken", "Niet vakgebonden — werkt voor het hele vakkenpakket"],
                  [
                    "Geschikt voor",
                    "Alle leerjaren, van de eerste toetsweek tot het examenjaar",
                  ],
                  ["Vorm", "Online of fysiek in Monnickendam en omgeving"],
                  [
                    "Tijdens het traject",
                    "WhatsApp-support inbegrepen. Antwoord gemiddeld binnen drie uur",
                  ],
                  [
                    "Daarna optioneel",
                    "Doorlopende WhatsApp- en belsupport voor €15 per maand, maandelijks opzegbaar",
                  ],
                  ["Extra bijles", "€25 per uur, altijd optioneel"],
                ].map(([label, waarde]) => (
                  <div key={label}>
                    <dt className="font-medium text-muted">{label}</dt>
                    <dd className="mt-0.5 text-slate-700">{waarde}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <KnopLink href={site.whatsapp} extern className="w-full">
                  <WhatsAppIcon className="h-5 w-5" />
                  Stel uw vraag via WhatsApp
                </KnopLink>
              </div>
            </Kaart>
          </Reveal>
        </div>
      </Section>

      {/* Resultaatafspraak */}
      <Section id="resultaatafspraak">
        <Reveal>
          <div className="max-w-3xl">
            <SectionKop
              eyebrow="Resultaatafspraak"
              titel="Ik zet vooraf op papier wat het moet opleveren"
              intro="Voordat we beginnen leggen we samen vast welk resultaat we afspreken. Die afspraak is per leerling anders, omdat de startsituatie per leerling anders is — maar hij staat er wel, zwart op wit."
            />
            <div className="mt-6 rounded-[10px] border border-line bg-offwhite p-6 sm:p-7">
              <h3 className="font-semibold text-navy">Het uitgangspunt</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                Levert uw kind bewijs dat het systeem wordt uitgevoerd en blijven
                de onvoldoendes staan? Dan begeleid ik{" "}
                <strong className="font-semibold text-navy">kosteloos door</strong>{" "}
                tot er wél voldoendes worden gehaald. Dat geldt voor{" "}
                <strong className="font-semibold text-navy">elk vak</strong> dat
                onvoldoende staat, niet voor één enkel vak.
              </p>

              <p className="mt-3 leading-relaxed text-slate-600">
                Zit uw kind in het examenjaar, dan stemmen we de afspraak daarop
                af: dan gaat het over de schoolexamens en de voorbereiding op het
                centraal examen in plaats van over de eerstvolgende toets.
              </p>

              <h3 className="mt-6 font-semibold text-navy">
                Wat daarvoor nodig is
              </h3>
              <ul className="mt-3 space-y-3">
                <Vink>
                  Uw kind voert het afgesproken leersysteem uit en laat dat zien
                  met foto&apos;s als bewijs. Dat houdt de afspraak controleerbaar
                  en helpt uw kind om vol te houden.
                </Vink>
                <Vink>
                  De afgesproken momenten worden nagekomen: het startgesprek, de
                  sessies en de follow-up.
                </Vink>
                <Vink>
                  We leggen vooraf samen vast om welke vakken en welke cijfers het
                  gaat, en wanneer we evalueren.
                </Vink>
              </ul>

              <h3 className="mt-6 font-semibold text-navy">
                Wat dat concreet betekent
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                Ik blijf begeleiden tot de voldoendes er staan, zonder dat u
                daar iets extra&apos;s voor betaalt. Geen aantal sessies dat
                afloopt, geen nieuwe factuur.
              </p>

              <h3 className="mt-6 font-semibold text-navy">Wat ik niet beloof</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                Ik beloof geen specifieke eindcijfers en geen verbetering op
                vakken die al voldoende staan — van een 9 een 10 maken kan ik
                niet garanderen. De afspraak gaat over onvoldoendes wegwerken.
                Wat we precies afspreken, inclusief vakken en meetmoment, leggen
                we vóór de start samen vast. Zo weet u precies waar u aan toe
                bent.
              </p>
            </div>
            <div className="mt-8">
              <VerderLezen
                links={[
                  { href: "/algemene-voorwaarden", label: "Lees de voorwaarden" },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Bewijs */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Waarom ik dit durf af te spreken"
            titel="Deze aanpak heeft zich al bewezen — op mijzelf en op anderen"
            intro="Het Leersysteem als dienst is nieuw, maar de methode erachter niet. Ik heb er zelf mee gewerkt en ik heb er iemand mee door zijn eindexamens geholpen."
          />
        </Reveal>

        <Reveal>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eigenResultaten.map((item) => (
              <div
                key={item.label}
                className="rounded-[10px] border border-line bg-white p-5 text-center"
              >
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-navy">
                    {item.cijfer}
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-muted">
            Mijn eigen eindexamenresultaten, vwo 2026 — behaald met precies de
            technieken die in het Leersysteem zitten, na een schoolloopbaan die
            begon met de wens om ermee te stoppen.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal>
            <ReviewKaart review={gianniReview} />
          </Reveal>
          <Reveal delay={60}>
            <CaseKaart item={gianniCase} />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            {resultatenDisclaimer}
          </p>
          <div className="mt-6">
            <VerderLezen
              links={[
                { href: "/resultaten", label: "Bekijk alle resultaten en reviews" },
                { href: "/over-mij", label: "Lees mijn eigen verhaal" },
              ]}
            />
          </div>
        </Reveal>
      </Section>

      {/* Eerlijkheid over de status van de dienst */}
      <Section className="!pb-0">
        <Reveal>
          <div className="flex gap-4 rounded-[10px] border border-line bg-offwhite p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
            <div>
              <h2 className="font-semibold text-navy">
                Eerlijk gezegd: dit is een nieuwe dienst
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                Als losse dienst is het Leersysteem nieuw: ik ben het nu in de
                praktijk aan het uitvoeren en aanscherpen. De opzet hieronder
                klopt, maar de precieze duur en indeling kunnen per leerling nog
                verschillen. Ik zeg dat liever vooraf dan achteraf — en de
                resultaatafspraak hierboven staat er juist om die onzekerheid
                bij mij te leggen in plaats van bij u.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Voor wie */}
      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <SectionKop titel="Voor wie is het Leersysteem?" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Voor leerlingen die niet effectief studeren. Vaak zijn dat
                leerlingen die wel íéts doen voor school, maar geen idee hebben
                of het werkt — en die daardoor onder hun niveau presteren. Soms
                zijn het leerlingen die juist veel te lang boven de boeken zitten
                en er te weinig voor terugkrijgen.
              </p>
              <p>
                Zit uw kind in het examenjaar, dan is dit misschien wel het beste
                moment. Een examenperiode is te groot om te overzien zonder
                systeem: veel vakken, maanden vooruit plannen en stof die
                teruggaat tot leerjaar vier. Precies daarvoor is deze aanpak
                bedoeld.
              </p>
              <p>
                Minder geschikt is het voor leerlingen die geen enkele motivatie
                hebben om te leren, en voor leerlingen die al goede cijfers halen
                met een aanpak die voor hen werkt.
              </p>
            </div>

            <h3 className="mt-10 text-lg font-semibold text-navy">
              Wat uw kind eraan overhoudt
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <Vink>
                Een aanpak voor elk vak — van een gewone toets tot het centraal
                examen
              </Vink>
              <Vink>Minder tijd kwijt aan leren, met meer effect</Vink>
              <Vink>
                Zelfstandigheid: uw kind plant en leert zonder dat u erbovenop
                hoeft te zitten
              </Vink>
              <Vink>
                Een toetsweek of examenperiode die uw kind zelf kan overzien
              </Vink>
              <Vink>
                Iemand die meekijkt of het gebeurt, zodat het ook echt gebeurt
              </Vink>
              <Vink>
                Een vaardigheid die de rest van de schooltijd meegaat — en daarna
              </Vink>
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Onderdelen */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Wat zit erin"
            titel="Waaruit het leersysteem bestaat"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {onderdelen.map((item, i) => (
            <Reveal key={item.titel} delay={i * 45}>
              <Kaart className="h-full">
                <h3 className="font-semibold text-navy">{item.titel}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.tekst}</p>
              </Kaart>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-[10px] border border-line bg-white p-6 sm:p-7">
            <h3 className="font-semibold text-navy">Wat er (nog) niet bij zit</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
              U leest online vaak over bonussen als AI-hulpmiddelen voor planning
              en uitleg, of automatische feedback op verslagen. Die maak ik graag,
              maar ze bestaan nog niet. Ze zijn dus{" "}
              <strong className="font-semibold text-navy">niet inbegrepen</strong>{" "}
              en u betaalt er ook niet voor. Komen ze er, dan hoort u dat.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Traject */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Het traject"
            titel="Hoe het in de praktijk gaat"
            intro="Van vragenlijst tot follow-up. De volgorde ligt vast; het tempo bepalen we samen."
          />
        </Reveal>
        <ol className="mt-10 space-y-5">
          {traject.map((stap, i) => (
            <Reveal key={stap.titel} delay={i * 45}>
              <li className="flex gap-5 rounded-[10px] border border-line bg-white p-6">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{stap.titel}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {stap.tekst}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <p className="mt-8 text-sm text-muted">{prijzen.btwNotitie}</p>
        </Reveal>
      </Section>

      <SlotCta
        titel="Benieuwd of het Leersysteem bij uw kind past?"
        tekst="Stuur een appje of plan een gratis kennismakingsgesprek van een kwartier. Ik vertel eerlijk of dit past of dat bijles op dit moment logischer is, en welke resultaatafspraak in uw situatie realistisch is. Zit uw kind in het examenjaar, zeg dat er dan meteen bij."
      />
    </>
  );
}
