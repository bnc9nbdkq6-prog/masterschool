import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PaginaKop, SlotCta, VerderLezen, Vink } from "@/components/blokken";
import { eigenResultaten } from "@/content/bewijs";

export const metadata: Metadata = {
  title: "Over Oskar van Zadelhoff",
  description:
    "Oskar van Zadelhoff (18) is studiecoach en bijlesdocent. Hij slaagde in 2026 cum laude voor zijn vwo met een 8,8 gemiddeld op het centraal eindexamen — na een moeizame start.",
  alternates: { canonical: "/over-mij" },
};

export default function OverMijPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Over mij"
        titel="Ik ben Oskar, en ik weet hoe het is om school niet te zien zitten"
        intro="Ik ben 18 jaar, opgegroeid in Monnickendam en in juli 2026 cum laude geslaagd voor mijn vwo. Dat had er lange tijd niet naar uitgezien."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600">
              <h2 className="text-2xl font-bold text-navy">
                Vwo 1 tot en met 3: ik wilde weg
              </h2>
              <p>
                De eerste drie jaar van het vwo gingen moeizaam. Ik zag het nut
                van school niet, dus leren voor toetsen deed ik gewoon niet. Dat
                zag je terug op mijn rapport: tientallen onvoldoendes, jaar na
                jaar. Niet omdat het te moeilijk was, maar omdat ik er niets voor
                deed.
              </p>
              <p>
                In vwo 3 was ik er klaar mee. Ik geloofde niet meer in school, ik
                zag de waarde er niet van in en ik wilde naar het mbo — zo snel
                mogelijk een diploma en dan werken. Mijn afdelingsleidster heeft
                me daaruit gepraat. Zij zei dat ze meer in mij zag: een slimme
                jongen die zijn draai nog moest vinden. Dat gesprek heeft me op
                school gehouden.
              </p>

              <h2 className="pt-4 text-2xl font-bold text-navy">
                Vwo 4: het ging om
              </h2>
              <p>
                Ik weet niet precies waardoor het kwam, maar in vwo 4 veranderde
                ik. Ik ging wél leren voor toetsen, en belangrijker nog: ik ging
                me verdiepen in hoe leren eigenlijk werkt. Ik stapte over op
                flashcards en oefenvragen in plaats van herlezen en samenvatten.
                Ik maakte er een wedstrijd van om zo hoog mogelijke cijfers te
                halen. Toen mijn docent Engels zei dat cum laude haalbaar was,
                werd dat mijn doel.
              </p>
              <p>
                Op 1 juli 2026 haalde ik mijn vwo-diploma cum laude aan het
                Copernicus SG in Hoorn, met een 8,8 gemiddeld op het centraal
                eindexamen en een 10 voor wiskunde A.
              </p>

              <h2 className="pt-4 text-2xl font-bold text-navy">
                Waarom ik MasterSchool ben begonnen
              </h2>
              <p>
                Tijdens mijn examenperiode hoorde ik van klasgenoten hoeveel
                stress ze hadden en hoeveel uren ze in hun voorbereiding staken.
                Bij mij pakte dat anders uit, en dat kwam niet doordat ik slimmer
                was — het kwam door mijn aanpak. Ik had een routine en een
                methode, en dat scheelde enorm veel tijd en spanning.
              </p>
              <p>
                Daar zag ik een gat. Veel leerlingen weten simpelweg niet hoe je
                effectief leert: waar je moet beginnen, wat je op welk moment
                doet, en welke leermethodes wel en niet blijven hangen. Die kennis
                wilde ik delen. Dat is MasterSchool geworden.
              </p>
              <p>
                Ik ben in november 2025 begonnen met bijles geven, in wiskunde en
                economie. Daarnaast geef ik basketbaltraining — ook daar leer je
                iets uitleggen aan iemand die het nog niet kan. Mijn missie is
                simpel: leerlingen een plezierigere middelbareschooltijd geven,
                met minder stress en meer vrije tijd.
              </p>

              <h2 className="pt-4 text-2xl font-bold text-navy">
                Wat de naam MasterSchool betekent
              </h2>
              <p>
                Ik wil dat leerlingen de meester worden over school, in plaats van
                dat school de baas is over hen. Dat ze de technieken en de
                vaardigheden hebben om zelf te bepalen hoe het gaat — op hun eigen
                voorwaarden.
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="space-y-8 lg:sticky lg:top-24">
              <figure>
                <Image
                  src="/img/oskar-diploma.jpg"
                  alt="Oskar van Zadelhoff tekent zijn vwo-diploma tijdens de diploma-uitreiking"
                  width={613}
                  height={1000}
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className="h-auto w-full rounded-[10px] border border-line"
                />
                <figcaption className="mt-3 text-sm text-slate-600">
                  De diploma-uitreiking, juli 2026.
                </figcaption>
              </figure>

              <div className="rounded-[10px] border border-line bg-offwhite p-6">
                <h2 className="font-semibold text-navy">
                  Mijn eigen eindexamenresultaten
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {eigenResultaten.map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <dt className="w-24 shrink-0 font-bold text-navy">
                        {item.cijfer}
                      </dt>
                      <dd className="text-slate-600">{item.label}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
                  Vwo, Copernicus SG Hoorn, 2026.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tint="offwhite">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <SectionKop
              titel="Wat mij volgens mijzelf een goede begeleider maakt"
            />
            <ul className="mt-6 space-y-3">
              <Vink>Geduld. Ik leg het opnieuw uit, en nog een keer anders</Vink>
              <Vink>
                Ik sta dichter bij de leerling in leeftijd, wat de drempel
                verlaagt
              </Vink>
              <Vink>
                Ik ken het school- en examensysteem van heel dichtbij, van dit
                jaar nog
              </Vink>
              <Vink>
                Ik heb zelf van school af gewild, dus ik oordeel niet over een
                leerling die het even niet ziet zitten
              </Vink>
            </ul>
          </Reveal>

          <Reveal delay={60}>
            <SectionKop titel="Wat ik juist wil voorkomen" />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
                Dat een leerling het gevoel krijgt niet goed genoeg te zijn, of
                het niet aan te kunnen. Dat gebeurt sneller dan u denkt, en het
                werkt averechts.
              </p>
              <p>
                Ook een generieke aanpak wil ik voorkomen. Wat voor de ene
                leerling werkt, werkt voor de volgende niet. Daarom begint elke
                begeleiding met kijken wat er in dít geval nodig is.
              </p>
              <p>
                Waar ik nu aan werk: nieuwe diensten ontwikkelen, mijn methodes
                verbeteren en nieuwe vakken leren om in te kunnen begeleiden — om
                te beginnen wiskunde B.
              </p>
            </div>
            <div className="mt-8">
              <VerderLezen
                links={[
                  { href: "/resultaten", label: "Bekijk resultaten en reviews" },
                  { href: "/werkwijze", label: "Zo werkt de begeleiding" },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <SlotCta
        titel="Even kennismaken?"
        tekst="Een gesprek van een kwartier is genoeg om te weten of het klikt en of ik iets voor uw kind kan betekenen. Gratis en zonder verplichtingen."
      />
    </>
  );
}
