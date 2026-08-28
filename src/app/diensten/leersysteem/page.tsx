import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Kaart, KnopLink, Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PaginaKop, SlotCta, VerderLezen, Vink } from "@/components/blokken";
import { WhatsAppIcon } from "@/components/Icons";
import { prijzen, site } from "@/content/site";

export const metadata: Metadata = {
  title: "MasterSchool Leersysteem — een persoonlijke manier van leren",
  description:
    "Een persoonlijk leersysteem voor uw kind: doelen, planning en leerstrategieën die aantoonbaar werken, voor elk vak. €249 eenmalig inclusief btw.",
  alternates: { canonical: "/diensten/leersysteem" },
};

const onderdelen = [
  {
    titel: "Doelen die concreet zijn",
    tekst:
      "Niet “beter worden in wiskunde”, maar bijvoorbeeld “van een 5,5 naar een 7,0 in periode 3”. Ouder en leerling bepalen die doelen samen met mij.",
  },
  {
    titel: "Analyse van de huidige aanpak",
    tekst:
      "Hoe leert uw kind nu, hoeveel tijd kost dat en wat levert het op? Vaak zit hier de grootste winst: veel leerlingen herlezen en samenvatten, terwijl dat weinig blijft hangen.",
  },
  {
    titel: "Een manier van voorbereiden per vak",
    tekst:
      "Voor elk vak in het pakket: hoe pak je een toets aan, wat doe je wanneer, en hoe controleer je of je het écht kent.",
  },
  {
    titel: "Een planning die uw kind volhoudt",
    tekst:
      "Een planningsmethode die past bij de agenda, de concentratie en de motivatie van uw kind — niet een schema dat na een week sneuvelt.",
  },
  {
    titel: "Leertechnieken die werken",
    tekst:
      "Onder andere actief ophalen met flashcards en oefenvragen, en spreiden in de tijd. Dezelfde technieken waarmee ik zelf van moeizaam naar cum laude ging.",
  },
  {
    titel: "WhatsApp-support en opvolging",
    tekst:
      "Vragen tussendoor kunnen altijd via WhatsApp. Daarnaast houden we bij of het systeem echt wordt uitgevoerd, met foto's als bewijs — dat helpt uw kind om vol te houden.",
  },
];

const traject = [
  {
    titel: "Vragenlijst vooraf",
    tekst:
      "Leerling en ouder vullen apart een korte vragenlijst in: vakken, cijfers, huidige leermethode, tijdsbesteding, aankomende toetsen en wat tot nu toe het meest frustreert. Eerlijk antwoorden is belangrijker dan mooi antwoorden — ik oordeel niet.",
  },
  {
    titel: "Kort intakegesprek (ongeveer 20 minuten, telefonisch)",
    tekst:
      "We lopen de vragenlijst door en ik controleer of het Leersysteem past bij wat uw kind nodig heeft.",
  },
  {
    titel: "Startgesprek van een uur (ouder en leerling)",
    tekst:
      "Doelen vastleggen, pijnpunten doorspreken en samen bepalen waar het mis zou kunnen gaan. In dit gesprek doet uw kind meteen een eerste oefening met een leertechniek, zodat het verschil direct voelbaar is. We leggen ook de afspraken en een evaluatiemoment vast.",
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

export default function LeersysteemPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Dienst · MasterSchool Leersysteem"
        titel="Een manier van leren die bij uw kind past — voor elk vak"
        intro="Bijles lost één vak op. Het Leersysteem lost de manier van leren op. Samen bouwen we een persoonlijk systeem waarmee uw kind elke toets en elk examen zelfstandig kan aanpakken."
      />

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
                Het MasterSchool Leersysteem is gebaseerd op de aanpak waarmee ik
                zelf cum laude slaagde en waarmee ik een vriend door zijn
                eindexamens heb geholpen. Als losse dienst is het nieuw: ik ben
                het nu in de praktijk aan het uitvoeren en aanscherpen. Dat
                betekent dat de opzet hieronder klopt, maar dat de precieze duur
                en indeling per leerling nog kunnen verschillen. Ik zeg dat liever
                vooraf dan achteraf.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Voor wie */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <SectionKop titel="Voor wie is het Leersysteem?" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Voor leerlingen die niet effectief studeren — om wat voor reden
                dan ook. Vaak zijn dat leerlingen die wél hun best doen: uren
                boven de boeken, en toch een tegenvallend cijfer. Of leerlingen
                die niet weten waar ze moeten beginnen en daardoor uitstellen.
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
              <Vink>Een aanpak voor elk vak, niet voor één toets</Vink>
              <Vink>Minder tijd kwijt aan leren, met meer effect</Vink>
              <Vink>Zelfstandig een toetsweek of examenperiode kunnen plannen</Vink>
              <Vink>Een vaardigheid die de rest van de schooltijd meegaat</Vink>
            </ul>
          </Reveal>

          <Reveal delay={60}>
            <Kaart className="lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-navy">In het kort</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Prijs", "€249 eenmalig, inclusief btw"],
                  [
                    "Omvang",
                    "Naar verwachting ongeveer zes uur in totaal, inclusief intake, startgesprek en follow-up",
                  ],
                  [
                    "Verdeling",
                    "Verspreid over meerdere weken, in sessies van ongeveer een uur. De precieze indeling stemmen we af",
                  ],
                  ["Betrokkenen", "Oskar, de leerling en de ouder(s)"],
                  ["Vakken", "Niet vakgebonden — werkt voor het hele vakkenpakket"],
                  ["Vorm", "Online of fysiek in Monnickendam en omgeving"],
                  [
                    "WhatsApp-support",
                    "Inbegrepen, voorlopig zonder einddatum. Antwoord gemiddeld binnen drie uur",
                  ],
                  ["Aanvullende begeleiding", "€25 per uur, altijd optioneel"],
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
            <h3 className="font-semibold text-navy">
              Wat er (nog) niet bij zit
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
              U leest online vaak over bonussen als AI-hulpmiddelen voor planning
              en uitleg, feedback op verslagen of een e-book met leerstrategieën.
              Die maak ik graag, maar ze bestaan nog niet. Ze zijn dus{" "}
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
      </Section>

      {/* Resultaatafspraak */}
      <Section tint="offwhite">
        <Reveal>
          <div className="max-w-3xl">
            <SectionKop
              eyebrow="Resultaatafspraak"
              titel="Wat ik met u afspreek over het resultaat"
              intro="Bij het Leersysteem leg ik vóór de start met u vast wat we als resultaat afspreken. Die afspraak is per leerling anders, omdat de startsituatie per leerling anders is."
            />
            <div className="mt-6 rounded-[10px] border border-line bg-white p-6 sm:p-7">
              <h3 className="font-semibold text-navy">Het uitgangspunt</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                Voor de rapportcijfers die te laag zijn, gaan we uit van een
                verbetering van minimaal 1,0 punt bij de eerstvolgende toets voor
                dat vak. Staat uw kind bijvoorbeeld een 5 voor geschiedenis, dan
                is de afspraak minimaal een 6.
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
                Wordt de afspraak niet gehaald?
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                Dan blijf ik kosteloos begeleiden tot de afgesproken verbetering
                er wel is.
              </p>

              <h3 className="mt-6 font-semibold text-navy">
                Wat ik niet beloof
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                Ik beloof geen vaste eindcijfers en geen verbetering op cijfers
                die al goed zijn — van een 9 een 10 maken kan ik niet garanderen.
                De exacte afspraak, inclusief vakken en voorwaarden, leggen we
                daarom persoonlijk vast vóór de start. Zo weet u precies waar u
                aan toe bent.
              </p>
            </div>
            <div className="mt-8">
              <VerderLezen
                links={[
                  { href: "/algemene-voorwaarden", label: "Lees de voorwaarden" },
                  { href: "/resultaten", label: "Bekijk resultaten van leerlingen" },
                ]}
              />
            </div>
            <p className="mt-6 text-sm text-muted">{prijzen.btwNotitie}</p>
          </div>
        </Reveal>
      </Section>

      <SlotCta
        titel="Benieuwd of het Leersysteem past?"
        tekst="Stuur een appje of plan een gratis kennismakingsgesprek van een kwartier. Ik vertel eerlijk of dit past bij uw kind of dat bijles op dit moment logischer is."
      />
    </>
  );
}
