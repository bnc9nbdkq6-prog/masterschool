import type { Metadata } from "next";
import { Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PaginaKop, SlotCta, VerderLezen, Vink } from "@/components/blokken";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Werkwijze — van eerste bericht tot betere cijfers",
  description:
    "Zo werkt begeleiding bij MasterSchool: eerst contact, dan een gratis kennismaking van een kwartier, daarna een eerste afspraak en een plan. Zonder verplichtingen vooraf.",
  alternates: { canonical: "/werkwijze" },
};

const stappen = [
  {
    titel: "U neemt contact op",
    tekst:
      "Via WhatsApp, telefoon of het contactformulier. Vertel kort om welk vak en welk leerjaar het gaat en waar het misgaat. Hoe concreter, hoe beter ik kan inschatten of ik de juiste persoon ben.",
    details: [
      `Ik reageer ${site.reactietijd}`,
      "Ook 's avonds en in het weekend bereikbaar",
      "U zit nergens aan vast",
    ],
  },
  {
    titel: "Een gratis kennismakingsgesprek",
    tekst:
      "Een telefoon- of videogesprek van ongeveer een kwartier. We bespreken de situatie van uw kind, wat u tot nu toe geprobeerd heeft en wat er nodig is. Ik zeg het eerlijk als bijles niet de beste oplossing is.",
    details: [
      "Gratis en vrijblijvend, ongeveer 15 minuten",
      "Met of zonder uw kind erbij — wat voor u prettig is",
      "U hoeft niets voor te bereiden of mee te nemen",
    ],
  },
  {
    titel: "De eerste afspraak",
    tekst:
      "We plannen een moment dat past, doorgaans binnen een week. Vooraf stuurt uw kind de stof op en legt de boeken klaar, zodat het lesuur volledig aan uitleg en oefenen opgaat.",
    details: [
      "Online, of fysiek in Monnickendam en Purmerend: bij mij thuis, bij u thuis of in de bibliotheek",
      "Minimaal een uur, meestal een tot anderhalf uur",
      "Bent u na de eerste bijles niet overtuigd, dan betaalt u die les niet",
    ],
  },
  {
    titel: "Uitvoeren en bijstellen",
    tekst:
      "Elke les begint met vaststellen wat er moet gebeuren en eindigt met de vervolgstap. Naarmate we langer bezig zijn, gaat het minder over uitleggen en meer over zelfstandig kunnen.",
    details: [
      "Een plan per les, geen standaardprogramma",
      "Soms oefenopgaven of een kort stappenplan mee naar huis",
      "Samen bepalen we hoe vaak begeleiding nodig is",
    ],
  },
];

export default function WerkwijzePagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Werkwijze"
        titel="Van eerste bericht tot een aanpak die werkt"
        intro="Geen intakeprocedures, geen contracten en geen abonnementen. Een appje is genoeg om te beginnen. Hieronder leest u precies wat er daarna gebeurt."
      />

      <Section>
        <ol className="space-y-6">
          {stappen.map((stap, i) => (
            <Reveal key={stap.titel} delay={i * 50}>
              <li className="grid gap-6 rounded-[10px] border border-line bg-white p-6 sm:p-8 md:grid-cols-[auto_1fr_1fr]">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-navy">
                    Stap {i + 1}: {stap.titel}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {stap.tekst}
                  </p>
                </div>
                <ul className="space-y-3 md:border-l md:border-line md:pl-6">
                  {stap.details.map((detail) => (
                    <Vink key={detail}>{detail}</Vink>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tint="offwhite">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <SectionKop titel="Wat ik van uw kind vraag" />
            <ul className="mt-6 space-y-3">
              <Vink>Meewerken en inzet tonen — perfect hoeft niet</Vink>
              <Vink>Gemaakte afspraken nakomen</Vink>
              <Vink>De boeken klaarleggen en de stof vooraf opsturen</Vink>
              <Vink>Eerlijk zijn over wat niet lukt. Ik oordeel niet</Vink>
            </ul>
          </Reveal>
          <Reveal delay={60}>
            <SectionKop titel="Wat ik van u als ouder vraag" />
            <ul className="mt-6 space-y-3">
              <Vink>Steun voor uw kind</Vink>
              <Vink>
                Overleg met uw kind over wat hij of zij nodig heeft en wil
              </Vink>
              <Vink>Duidelijke afspraken en goede bereikbaarheid</Vink>
              <Vink>Meer niet — de begeleiding zelf is mijn werk</Vink>
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <SectionKop
              eyebrow="Betalen en afzeggen"
              titel="Praktische afspraken"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
                <strong className="font-semibold text-navy">Betalen</strong> kan na
                elke les, of vooraf voor een aantal lessen tegelijk. Bijkopen kan
                altijd. U ontvangt een factuur via e-mail of WhatsApp en betaalt
                via bankoverschrijving of met iDEAL via een betaallink.
              </p>
              <p>
                <strong className="font-semibold text-navy">Afzeggen</strong> kan
                kosteloos tot twaalf uur voor de les. Daarna breng ik één uur in
                rekening, tenzij het afzeggen buiten uw invloed lag — bij ziekte
                bijvoorbeeld. Laat het altijd even weten via WhatsApp; ik denk
                graag mee.
              </p>
              <p>
                <strong className="font-semibold text-navy">Reiskosten</strong>{" "}
                reken ik niet binnen Monnickendam, Katwoude en Purmerend. Moet ik daarbuiten
                reizen, dan betaalt u alleen de kosten van het openbaar vervoer.
              </p>
            </div>
            <div className="mt-8">
              <VerderLezen
                links={[
                  { href: "/algemene-voorwaarden", label: "Alle voorwaarden" },
                  { href: "/diensten", label: "Bekijk de diensten en prijzen" },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </Section>

      <SlotCta />
    </>
  );
}
