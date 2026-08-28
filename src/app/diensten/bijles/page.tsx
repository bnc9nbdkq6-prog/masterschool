import type { Metadata } from "next";
import { Kaart, KnopLink, Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PaginaKop, SlotCta, VerderLezen, Vink } from "@/components/blokken";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppIcon } from "@/components/Icons";
import { bijlesVakken } from "@/content/diensten";
import { niveaus, prijzen, site, vakken } from "@/content/site";
import { faqPlat } from "@/content/faq";

export const metadata: Metadata = {
  title: "Bijles wiskunde, economie, bedrijfseconomie en geschiedenis",
  description:
    "Individuele bijles voor havo- en vwo-leerlingen in wiskunde A, economie, bedrijfseconomie en geschiedenis. €25 per uur inclusief btw, in Monnickendam of online.",
  alternates: { canonical: "/diensten/bijles" },
};

const relevanteVragen = [
  "Hoe lang duurt een bijlesles?",
  "Hoe vaak heeft mijn kind bijles nodig?",
  "Zijn reiskosten inbegrepen?",
  "Wat gebeurt er bij afzeggen of niet komen opdagen?",
  "Kunt u garanderen dat mijn kind hogere cijfers haalt?",
];

const les = [
  {
    titel: "1. Vaststellen wat er moet gebeuren",
    tekst:
      "Welke stof komt op de toets, wanneer is die toets, en waar loopt het vast? Dat bepalen we aan het begin van de les — of vooraf, als de stof al is opgestuurd.",
  },
  {
    titel: "2. Een plan voor deze les",
    tekst:
      "Op basis daarvan bepaal ik wat we dit uur doen: uitleg, oefenen, of een combinatie. Zo gaat er geen tijd verloren aan zoeken.",
  },
  {
    titel: "3. Uitleggen en zelf laten doen",
    tekst:
      "Ik leg uit en laat uw kind het daarna zelf maken, terwijl ik meekijk. Zo zie ik direct waar het misgaat. Landt de uitleg niet, dan probeer ik het op een andere manier.",
  },
  {
    titel: "4. Bepalen hoe verder",
    tekst:
      "We sluiten af met een vervolgstap: zelf oefenen, een planning tot de toets of een volgende afspraak. Soms krijgt uw kind oefenopgaven of een kort stappenplan mee — dat verschilt per situatie.",
  },
];

export default function BijlesPagina() {
  const vragen = faqPlat.filter((item) => relevanteVragen.includes(item.vraag));

  return (
    <>
      <PaginaKop
        eyebrow="Dienst · Bijles"
        titel="Bijles die verder gaat dan de volgende toets"
        intro="Individuele begeleiding in wiskunde A, economie, bedrijfseconomie en geschiedenis. Uw kind begrijpt de stof, weet hoe de toets is opgebouwd en leert onderweg een manier van leren die ook bij andere vakken werkt."
      />

      {/* Kerngegevens */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <SectionKop titel="Voor wie is het?" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Voor leerlingen die op één of twee vakken vastlopen, die zich
                gericht willen voorbereiden op een toetsweek of examen, of die de
                uitleg op school niet goed kunnen volgen.
              </p>
              <p>
                {niveaus} Er is geen grote motivatie nodig — wel de bereidheid om
                samen aan tafel te gaan zitten.
              </p>
            </div>

            <h3 className="mt-10 text-lg font-semibold text-navy">
              Wat u van mij kunt verwachten
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <Vink>Uitleg net zolang tot het klopt, op steeds een andere manier</Vink>
              <Vink>Oefenen met vragen in plaats van passief herlezen</Vink>
              <Vink>Aandacht voor planning en aanpak, niet alleen voor de stof</Vink>
              <Vink>Een eerlijk oordeel als bijles niet de beste oplossing is</Vink>
            </ul>
          </Reveal>

          <Reveal delay={60}>
            <Kaart className="lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-navy">In het kort</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Prijs", "€25 per uur, inclusief btw"],
                  ["Afrekening", "Per werkelijk uur, minimaal één uur"],
                  ["Gebruikelijke duur", "Eén tot anderhalf uur per les"],
                  [
                    "Maximale duur",
                    "Geen harde grens; in de praktijk werkt langer dan drie uur niet meer goed",
                  ],
                  ["Frequentie", "Vaak één keer per week, rond een toetsweek soms vaker"],
                  ["Niveau", "Havo en vwo, alle leerjaren. Mavo in principe ook"],
                  ["Online", "Ja, meestal via videobellen in WhatsApp"],
                  [
                    "Fysiek",
                    "Bij mij thuis in Monnickendam, bij uw kind thuis of in de bibliotheek van Monnickendam",
                  ],
                  [
                    "Reiskosten",
                    "Geen binnen Monnickendam en Katwoude; daarbuiten alleen de kosten van het openbaar vervoer",
                  ],
                  ["Starten", `Doorgaans binnen een week`],
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
                  Bijles aanvragen
                </KnopLink>
              </div>
            </Kaart>
          </Reveal>
        </div>
      </Section>

      {/* Vakken */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Vakken"
            titel="Waarin ik lesgeef"
            intro="Dit zijn de vakken waarin ik zelf eindexamen deed en waarin ik nu bijles geef."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bijlesVakken.map((vak, i) => (
            <Reveal key={vak.naam} delay={i * 45}>
              <Kaart className="h-full">
                <h3 className="font-semibold text-navy">{vak.naam}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {vak.toelichting}
                </p>
              </Kaart>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">
            <strong className="font-semibold text-navy">Wiskunde B:</strong> ik
            werk op dit moment aan een certificaat voor wiskunde B.{" "}
            {vakken.find((v) => v.naam === "Wiskunde B")?.notitie
              ? "Bijles in wiskunde B is beschikbaar vanaf januari 2027."
              : null}{" "}
            Tot die tijd geef ik er geen bijles in.
          </p>
        </Reveal>
      </Section>

      {/* Zo ziet een les eruit */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Zo ziet een les eruit"
            titel="Van begin tot eind"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {les.map((stap, i) => (
            <Reveal key={stap.titel} delay={i * 50}>
              <div className="h-full border-t-2 border-navy pt-5">
                <h3 className="text-lg font-semibold text-navy">{stap.titel}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{stap.tekst}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-[10px] border border-line bg-offwhite p-6 sm:p-7">
            <h3 className="font-semibold text-navy">
              Wat uw kind vooraf doet
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
              Twee dingen: de boeken klaarleggen en de stof vooraf naar mij
              sturen. Dan weet ik precies wat we gaan behandelen en kan ik me
              voorbereiden, zodat het lesuur volledig aan uitleg en oefenen
              opgaat.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Over resultaat */}
      <Section tint="offwhite">
        <Reveal>
          <div className="max-w-3xl">
            <SectionKop
              eyebrow="Eerlijk over resultaat"
              titel="Wat ik wel en niet beloof"
            />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Ik garandeer bij bijles geen cijfers. Wat ik wél garandeer, is dat
                uw kind tijdens de les de stof uit het boek goed begrijpt. In
                verreweg de meeste gevallen leidt dat tot betere cijfers.
              </p>
              <p>
                Maar een leerling kan een black-out krijgen, en een toets kan
                sterk afwijken van de stof in het boek. Daar kan ik geen garantie
                tegenover zetten, hoe vervelend dat ook is. Ik beloof liever iets
                dat ik waar kan maken.
              </p>
              <p>
                Wel geldt: vindt u de eerste bijles niet waardevol, dan betaalt u
                die les niet.
              </p>
            </div>
            <div className="mt-8">
              <VerderLezen
                links={[
                  { href: "/resultaten", label: "Bekijk resultaten van leerlingen" },
                  {
                    href: "/diensten/leersysteem",
                    label: "Bekijk het MasterSchool Leersysteem",
                  },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <Reveal>
          <SectionKop titel="Vragen over bijles" />
          <div className="mt-8">
            <FaqAccordion items={vragen} />
          </div>
          <p className="mt-6 text-sm text-muted">{prijzen.btwNotitie}</p>
        </Reveal>
      </Section>

      <SlotCta
        titel="Bijles aanvragen"
        tekst="Stuur een appje met het vak, het leerjaar en waar het misgaat. Dan hoort u meteen of het past en wanneer we kunnen starten."
      />
    </>
  );
}
