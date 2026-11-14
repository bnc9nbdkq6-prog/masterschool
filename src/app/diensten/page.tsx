import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Users } from "lucide-react";
import { Container, Kaart, KnopLink, Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  CaseKaart,
  PaginaKop,
  ReviewKaart,
  SlotCta,
  Vink,
} from "@/components/blokken";
import {
  dienstenExamen,
  dienstenJaar,
  toekomstigeDiensten,
  type Dienst,
} from "@/content/diensten";
import { niveaus, prijzen, site, vakken } from "@/content/site";
import { cases, resultatenDisclaimer, reviews } from "@/content/bewijs";

export const metadata: Metadata = {
  title: "Diensten en prijzen",
  description:
    "Van bijles voor €32 per uur tot intensieve examenbegeleiding. Bij de Garantiesprint en het MasterSchool Leersysteem geldt: haalt uw kind het niet, dan begeleid ik kosteloos door.",
  alternates: { canonical: "/diensten" },
};

/** Situaties waarmee een ouder binnenkomt, met de dienst die daarbij hoort. */
const keuzehulp = [
  {
    situatie: "Eén vak loopt niet lekker",
    advies: "Bijles",
    anker: "#bijles",
  },
  {
    situatie: "Eén vak staat onvoldoende en moet snel omhoog",
    advies: "De Garantiesprint",
    anker: "#garantiesprint",
  },
  {
    situatie: "Mijn kind weet niet hóé het moet leren",
    advies: "MasterSchool Leersysteem",
    anker: "#leersysteem",
  },
  {
    situatie: "Mijn kind doet eindexamen en heeft structuur nodig",
    advies: "Examen Squad",
    anker: "#examen-squad",
  },
  {
    situatie: "Overgaan wordt spannend",
    advies: "Overgangsboost",
    anker: "#overgangsboost",
  },
  {
    situatie: "Slagen is op dit moment niet vanzelfsprekend",
    advies: "Examen Doorbraak",
    anker: "#examen-doorbraak",
  },
];

/** Bezwaren die ouders daadwerkelijk hebben genoemd. */
const bezwaren = [
  {
    vraag: "Is dit niet veel, zo aan het begin van het schooljaar?",
    antwoord:
      "Dat is een terechte vraag, en ik hoor hem vaker. Toch is het begin van het jaar juist het moment waarop begeleiding het meeste oplevert: er is nog geen achterstand in te halen en elke toets die daarna komt profiteert ervan. Wachten tot het misgaat betekent dat we eerst een gat moeten dichten en pas daarna aan de aanpak kunnen werken. Wilt u toch klein beginnen, neem dan losse bijles voor het vak waar het nu het meeste knelt — dat kan altijd worden uitgebreid.",
  },
  {
    vraag:
      "Mijn kind heeft afgelopen jaar al stappen gezet. Heeft dit dan nog meerwaarde?",
    antwoord:
      "Misschien niet, en dan zeg ik dat gewoon. In het gratis kennismakingsgesprek van een kwartier vraag ik door op hoe uw kind nu leert. Werkt dat al goed, dan is het Leersysteem zonde van uw geld en zeg ik dat hardop. Zie ik dingen die beter kunnen, dan noem ik ze concreet, zodat u zelf kunt beoordelen of het de investering waard is. U zit nergens aan vast.",
  },
  {
    vraag: "Wat als mijn kind er niet aan meewerkt?",
    antwoord:
      "Er is een sprankje bereidheid nodig — meer niet. Ik bouw het systeem samen met uw kind en houd rekening met wat het daadwerkelijk gaat doen. Een perfect systeem dat niet wordt uitgevoerd, is waardeloos. Daarom vraag ik in het intakegesprek hardop om akkoord op iets concreets, bijvoorbeeld tien minuten herhalen per dag. Ik heb zelf ooit van school af gewild, dus ik oordeel niet.",
  },
  {
    vraag: "Waarom zou ik u vertrouwen? U bent zelf net van school.",
    antwoord:
      "Dat is precies het punt. Ik deed in 2026 eindexamen en slaagde cum laude met een 8,8 gemiddeld op het centraal examen en een 10 voor wiskunde A — met dezelfde technieken die ik nu overdraag. Ik ken het systeem van binnenuit en van dit jaar nog, niet van twintig jaar geleden. En bij twee van de drie jaardiensten staat een garantie: haalt uw kind het niet, dan begeleid ik kosteloos door.",
  },
  {
    vraag: "Kan ik ergens tussenin instappen of stoppen?",
    antwoord:
      "Bij bijles altijd: geen abonnement, geen opzegtermijn, u betaalt per gegeven uur. De trajecten hebben een vaste omvang omdat ze naar een doel toewerken, maar u begint altijd met een gratis kennismakingsgesprek waarin we bepalen of het past.",
  },
];

function PrijsBlok({ dienst }: { dienst: Dienst }) {
  return (
    <p className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className="text-2xl font-bold text-navy">{dienst.prijs}</span>
      <span className="text-muted">{dienst.prijsDetail}</span>
      {dienst.termijnen ? (
        <span className="text-muted">— {dienst.termijnen}</span>
      ) : null}
    </p>
  );
}

function DienstBlok({ dienst }: { dienst: Dienst }) {
  return (
    <article
      id={dienst.slug}
      className={`scroll-mt-24 rounded-[10px] border bg-white p-6 sm:p-8 ${
        dienst.uitgelicht
          ? "border-navy/35 shadow-[0_4px_24px_-10px_rgba(3,25,60,0.22)]"
          : "border-line"
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          {dienst.garantieLabel ? (
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {dienst.garantieLabel}
            </p>
          ) : null}

          <h3 className="text-2xl font-bold text-navy sm:text-3xl">
            {dienst.naam}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-slate-700">
            {dienst.belofte}
          </p>

          <PrijsBlok dienst={dienst} />

          <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-medium text-muted">Duur</dt>
              <dd className="mt-0.5 text-slate-700">{dienst.duur}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted">Voor wie</dt>
              <dd className="mt-0.5 text-slate-700">{dienst.voorWie}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <KnopLink href={site.whatsapp} extern>
              <WhatsAppIcon className="h-5 w-5" />
              {dienst.naam} aanvragen
            </KnopLink>
            {dienst.href ? (
              <KnopLink href={dienst.href} variant="secundair">
                Alle details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </KnopLink>
            ) : null}
          </div>
        </div>

        <div className="lg:border-l lg:border-line lg:pl-8">
          <h4 className="text-sm font-semibold tracking-wide uppercase text-muted">
            Wat u krijgt
          </h4>
          <ul className="mt-4 space-y-2.5">
            {dienst.bevat.map((punt) => (
              <li key={punt} className="flex gap-2.5 text-sm">
                <Check
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-navy"
                  aria-hidden="true"
                />
                <span className="text-slate-700">{punt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {dienst.garantie ? (
        <div className="mt-7 flex gap-3 rounded-[10px] border border-navy/20 bg-offwhite p-5">
          <ShieldCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-navy"
            aria-hidden="true"
          />
          <p className="text-slate-700">
            <strong className="font-semibold text-navy">Mijn afspraak: </strong>
            {dienst.garantie}
          </p>
        </div>
      ) : null}

      {dienst.notitie ? (
        <p className="mt-4 text-sm text-muted">{dienst.notitie}</p>
      ) : null}
    </article>
  );
}

export default function DienstenPagina() {
  const uitgelichteReviews = reviews.filter((r) =>
    ["gianni", "finlay", "chantal"].includes(r.id),
  );

  return (
    <>
      <PaginaKop
        eyebrow="Diensten en prijzen"
        titel="Kies de begeleiding die past bij wat er nú speelt"
        intro="Van één vak dat blijft haken tot een compleet examenjaar. Bij de Garantiesprint en het Leersysteem geldt bovendien: haalt uw kind het afgesproken resultaat niet, dan begeleid ik kosteloos door tot het wél lukt."
      />

      {/* Bewijs, meteen in beeld */}
      <div className="on-navy border-b border-navy-hover bg-navy">
        <Container className="py-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-white">8,8 gemiddeld</p>
              <p className="mt-1 text-sm text-white/75">
                op mijn eigen centraal examen, met een 10 voor wiskunde A
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Cum laude</p>
              <p className="mt-1 text-sm text-white/75">
                geslaagd voor het vwo in 2026 — met precies de technieken die ik
                nu overdraag
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">2,6 → 8,6</p>
              <p className="mt-1 text-sm text-white/75">
                bij Valentijn, in twee sessies. Gianni ging van een 4 en twee
                vijven naar zijn vwo-diploma
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Keuzehulp */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Waar begint u?"
            titel="Wat past bij uw situatie?"
            intro="Weet u het niet zeker? Stuur een appje met de situatie van uw kind. Ik denk mee en zeg eerlijk wanneer een goedkopere dienst volstaat."
          />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {keuzehulp.map((item, i) => (
            <Reveal key={item.situatie} delay={i * 35}>
              <Link
                href={item.anker}
                className="group flex h-full flex-col justify-between gap-3 rounded-[10px] border border-line bg-white p-5 transition-colors hover:border-navy/40 hover:bg-offwhite"
              >
                <span className="font-medium text-navy">
                  “{item.situatie}”
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  {item.advies}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Hele jaar door */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Het hele jaar door"
            titel="Begeleiding die altijd kan starten"
            intro="Drie manieren, van licht en flexibel tot een complete verandering in hoe uw kind leert."
          />
        </Reveal>
        <div className="mt-10 space-y-6">
          {dienstenJaar.map((dienst, i) => (
            <Reveal key={dienst.slug} delay={i * 50}>
              <DienstBlok dienst={dienst} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Examen en overgaan */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Examens en overgaan"
            titel="Als er echt iets op het spel staat"
            intro="Intensieve trajecten voor leerlingen die dreigen te blijven zitten of te zakken. Hier gaat het niet om één toets, maar om het hele jaar."
          />
        </Reveal>
        <div className="mt-10 space-y-6">
          {dienstenExamen.map((dienst, i) => (
            <Reveal key={dienst.slug} delay={i * 50}>
              <DienstBlok dienst={dienst} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* In ontwikkeling */}
      <Section tint="offwhite" id="binnenkort">
        <Reveal>
          <SectionKop
            eyebrow="In ontwikkeling"
            titel="Waar ik op dit moment aan werk"
            intro="Nog niet te boeken. Ik noem het hier zodat u weet wat eraan komt; de prijs is een verwachting en nog niet definitief. Heeft u interesse, laat het weten — dan neem ik contact op zodra het beschikbaar is."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {toekomstigeDiensten.map((dienst, i) => (
            <Reveal key={dienst.naam} delay={i * 45}>
              <Kaart className="h-full">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-muted">
                  <Users className="h-3.5 w-3.5" aria-hidden="true" />
                  Binnenkort beschikbaar
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {dienst.naam}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {dienst.beschrijving}
                </p>
                <p className="mt-3 text-sm text-muted">{dienst.indicatie}</p>
                <div className="mt-5">
                  <KnopLink
                    href="/contact?interesse=binnenkort"
                    variant="secundair"
                  >
                    Houd mij op de hoogte
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </KnopLink>
                </div>
              </Kaart>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bewijs */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Resultaten"
            titel="Wat leerlingen tot nu toe hebben bereikt"
            intro="Echte leerlingen, met toestemming geplaatst en met de context erbij."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {uitgelichteReviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 50}>
              <ReviewKaart review={review} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {cases.slice(0, 2).map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <CaseKaart item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            {resultatenDisclaimer}
          </p>
          <div className="mt-6">
            <KnopLink href="/resultaten" variant="secundair">
              Bekijk alle resultaten en reviews
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </KnopLink>
          </div>
        </Reveal>
      </Section>

      {/* Vakken en praktisch */}
      <Section tint="offwhite">
        <Reveal>
          <div className="grid gap-8 rounded-[10px] border border-line bg-white p-6 sm:p-8 md:grid-cols-3">
            <div>
              <h2 className="font-semibold text-navy">Vakken</h2>
              <ul className="mt-3 space-y-2 text-slate-600">
                {vakken.map((vak) => (
                  <li key={vak.naam} className="flex flex-wrap items-center gap-2">
                    <span className={vak.beschikbaar ? "" : "text-muted"}>
                      {vak.naam}
                    </span>
                    {vak.beschikbaar ? null : (
                      <span className="rounded-full border border-line bg-white px-2.5 py-0.5 text-xs font-semibold text-muted">
                        Nog niet beschikbaar — {vak.notitie}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Het MasterSchool Leersysteem is niet vakgebonden en werkt voor het
                hele vakkenpakket.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-navy">Niveaus en leerjaren</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{niveaus}</p>
            </div>
            <div>
              <h2 className="font-semibold text-navy">Waar</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Online via videobellen, of fysiek in Monnickendam of Purmerend. Binnen Monnickendam, Katwoude en Purmerend zonder reiskosten; daarbuiten alleen
                vergoeding van het openbaar vervoer.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">{prijzen.btwNotitie}</p>
        </Reveal>
      </Section>

      {/* Voorwaarden in het kort */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Praktisch"
            titel="Afspraken, betalen en afzeggen"
          />
          <ul className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
            <Vink>
              Bijles wordt per werkelijk uur afgerekend, met een minimum van één
              uur.
            </Vink>
            <Vink>
              Betalen kan na elke les, of vooraf voor een aantal lessen. U krijgt
              een factuur via e-mail of WhatsApp.
            </Vink>
            <Vink>
              Meer dan twaalf uur van tevoren afzeggen kost niets. Daarna één uur,
              tenzij het buiten uw invloed lag.
            </Vink>
            <Vink>
              Het kennismakingsgesprek is gratis en duurt ongeveer een kwartier.
            </Vink>
            <Vink>
              Trajecten worden vooraf of in termijnen betaald; dat spreken we
              samen af.
            </Vink>
            <Vink>
              Bij een traject leggen we vóór de start schriftelijk vast wat we als
              resultaat afspreken.
            </Vink>
          </ul>
          <p className="mt-6 text-sm text-muted">
            De volledige voorwaarden staan in de{" "}
            <Link
              href="/algemene-voorwaarden"
              className="font-medium text-navy underline underline-offset-4"
            >
              algemene voorwaarden
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      {/* Bezwaren */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Twijfels"
            titel="Wat ouders mij eerlijk hebben teruggegeven"
            intro="Dit zijn vragen die ik werkelijk heb gekregen, inclusief van ouders die uiteindelijk nee zeiden."
          />
          <div className="mt-10">
            <FaqAccordion items={bezwaren} />
          </div>
        </Reveal>
      </Section>

      <SlotCta
        titel="Niet zeker welke dienst past?"
        tekst={`Stuur een appje met de situatie van uw kind: het leerjaar, de vakken en waar het misgaat. Ik denk mee en zeg eerlijk wanneer een goedkopere dienst voldoende is — of wanneer begeleiding op dit moment niet zinvol is. Antwoord ${site.reactietijd}.`}
      />
    </>
  );
}
