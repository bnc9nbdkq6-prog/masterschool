import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CalendarClock,
  ClipboardList,
  Clock,
  Compass,
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  Laptop,
  MessageSquare,
  Target,
  TrendingDown,
} from "lucide-react";
import { Container, Kaart, KnopLink, Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  ActieveLeerlingen,
  CaseKaart,
  ReviewKaart,
  SlotCta,
  VerderLezen,
  Vink,
} from "@/components/blokken";
import { niveaus, prijzen, site, vakken } from "@/content/site";
import { dienstenExamen, homeDiensten } from "@/content/diensten";
import { cases, eigenResultaten, resultatenDisclaimer, reviews } from "@/content/bewijs";
import { faqPlat } from "@/content/faq";

export const metadata: Metadata = {
  title: "Bijles en studiebegeleiding in Monnickendam — MasterSchool",
  description:
    "Betere cijfers en minder stress op de middelbare school. Persoonlijke bijles in wiskunde A, wiskunde B, economie, bedrijfseconomie en geschiedenis voor havo en vwo. Monnickendam, Purmerend en online, €32 per uur inclusief btw.",
  alternates: { canonical: "/" },
};

const herkenning = [
  {
    icon: TrendingDown,
    titel: "Een onvoldoende op het rapport",
    tekst:
      "Het cijfer valt tegen, en niemand kan precies aanwijzen waar het misgaat. Uw kind zelf ook niet.",
  },
  {
    icon: Clock,
    titel: "Uren leren, en toch een vijf",
    tekst:
      "De tijd gaat erin, maar er komt te weinig uit. Dat sloopt het zelfvertrouwen sneller dan een slecht cijfer.",
  },
  {
    icon: BookOpenCheck,
    titel: "Eén vak dat blijft haken",
    tekst:
      "Wiskunde, economie of geschiedenis wil maar niet landen — hoe vaak het op school ook wordt uitgelegd.",
  },
  {
    icon: CalendarClock,
    titel: "De toetsweek hangt boven het huis",
    tekst:
      "Te veel stof, geen plan, korte lontjes. En daarna opluchting, tot de volgende periode begint.",
  },
  {
    icon: Target,
    titel: "Zorgen over overgaan of slagen",
    tekst:
      "U ligt er wakker van, uw kind zegt dat het wel goed komt. En u weet niet wanneer u moet ingrijpen.",
  },
  {
    icon: MessageSquare,
    titel: "Elke week discussie over school",
    tekst:
      "U wilt helpen, maar het gesprek loopt steeds uit op ruzie. Daar wordt thuis niemand blij van.",
  },
];

const voordelen = [
  {
    icon: HeartHandshake,
    titel: "Eén op één, in het tempo van uw kind",
    tekst:
      "Geen klas van dertig. Ik leg net zo lang op een andere manier uit tot het klopt. Begrijpt uw kind het niet, dan ligt dat aan mijn uitleg — niet aan uw kind.",
  },
  {
    icon: BrainCircuit,
    titel: "Leertechnieken die aantoonbaar werken",
    tekst:
      "Actief ophalen, spreiden en oefenen met vragen in plaats van herlezen en samenvatten. Uw kind leert niet alleen de stof, maar ook hoe je leert.",
  },
  {
    icon: GraduationCap,
    titel: "Ik ken het systeem van dichtbij",
    tekst:
      "Ik deed zelf in 2026 eindexamen. Ik weet hoe toetsen en examens in elkaar zitten, wat er doorgaans gevraagd wordt en hoe je een antwoord moet opschrijven.",
  },
  {
    icon: Compass,
    titel: "Verder dan één toets",
    tekst:
      "Naast de vakstof kijken we naar planning, aanpak en concentratie. Zodat uw kind ook zonder mij verder kan.",
  },
];

const stappen = [
  {
    nummer: "1",
    titel: "U neemt contact op",
    tekst:
      "Via WhatsApp, telefoon of het contactformulier. U vertelt kort waar uw kind tegenaan loopt. Ik reageer gemiddeld binnen drie uur.",
  },
  {
    nummer: "2",
    titel: "Gratis kennismaking",
    tekst:
      "Een telefoon- of videogesprek van ongeveer een kwartier. We bespreken de situatie en of ik de juiste persoon ben. Met of zonder uw kind erbij.",
  },
  {
    nummer: "3",
    titel: "Eerste afspraak en plan",
    tekst:
      "We plannen een moment — doorgaans binnen een week. Ik bepaal per les wat er moet gebeuren en hoe we dat aanpakken.",
  },
  {
    nummer: "4",
    titel: "Uitvoeren en bijstellen",
    tekst:
      "Na elke les bepalen we de vervolgstap: zelf oefenen, een volgende afspraak of een planning richting de toets.",
  },
];

const keuzehulp = [
  {
    vraag: "Mijn kind loopt vast op één vak",
    antwoord: "Individuele bijles in wiskunde A, wiskunde B, economie, bedrijfseconomie of geschiedenis.",
    href: "/diensten/bijles",
    label: "Bekijk bijles",
  },
  {
    vraag: "Mijn kind weet niet hoe het moet leren",
    antwoord:
      "Uitstellen, de avond ervoor beginnen, hopen dat het goed komt. Met het MasterSchool Leersysteem krijgt uw kind een aanpak die wél werkt — voor elk vak, de rest van de schooltijd.",
    href: "/diensten/leersysteem",
    label: "Bekijk het Leersysteem",
  },
  {
    vraag: "Mijn kind staat voor examens",
    antwoord:
      "Nu al mogelijk met bijles gericht op de examenstof. Aparte examentrajecten volgen binnenkort.",
    href: "/diensten#binnenkort",
    label: "Bekijk de mogelijkheden",
  },
  {
    vraag: "Ik wil eerst gewoon even kennismaken",
    antwoord: "Een gratis gesprek van een kwartier. U hoeft niets voor te bereiden.",
    href: "/contact",
    label: "Plan een kennismaking",
  },
];

/** FAQ-vragen die ook op de homepage staan. */
const homeFaq = faqPlat.filter((item) => item.opHome);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.vraag,
    acceptedAnswer: { "@type": "Answer", text: item.antwoord },
  })),
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="border-b border-line bg-offwhite">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase text-muted">
                {site.slogan}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-navy sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                Betere cijfers en minder stress op de middelbare school
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Met een aanpak die past bij uw kind. Persoonlijke bijles en
                studiebegeleiding voor havo- en vwo-leerlingen, in Monnickendam,
                de regio Waterland en online. Door Oskar van Zadelhoff —
                studiecoach, bijlesdocent en zelf pas geslaagd.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <KnopLink href={site.whatsapp} extern>
                  <WhatsAppIcon className="h-5 w-5" />
                  Neem contact op via WhatsApp
                </KnopLink>
                <KnopLink href="/diensten" variant="secundair">
                  Bekijk het aanbod
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </KnopLink>
              </div>

              <ul className="mt-8 flex flex-col gap-y-2 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
                <li>{prijzen.bijlesPerUurLabel}, inclusief btw</li>
                <li
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-line sm:block"
                />
                <li>Gratis kennismaking van 15 minuten</li>
                <li
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-line sm:block"
                />
                <li>Antwoord {site.reactietijd}</li>
                <li
                  aria-hidden="true"
                  className="hidden h-4 w-px bg-line sm:block"
                />
                <li>
                  Op dit moment {site.actieveLeerlingen} leerlingen in
                  begeleiding
                </li>
              </ul>
            </div>

            <div className="lg:justify-self-end">
              {/* Niet breder dan de bronfoto (350px), anders wordt hij zacht. */}
              <figure className="max-w-[320px]">
                <div className="overflow-hidden rounded-[10px] border border-line bg-white shadow-[0_10px_40px_-20px_rgba(3,25,60,0.45)]">
                  <Image
                    src="/img/oskar-portret.jpg"
                    alt="Oskar van Zadelhoff, oprichter van MasterSchool"
                    width={650}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 55vw, 320px"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-4 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-navy">
                    Oskar van Zadelhoff
                  </span>{" "}
                  — in juli 2026 cum laude geslaagd voor het vwo, met een 8,8
                  gemiddeld op het centraal eindexamen.
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </div>

      {/* Herkenning */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Herkent u dit?"
            titel="Waar ouders mij meestal voor bellen"
            intro="Meestal is er niet één groot probleem, maar een optelsom van dingen die niet meer lopen — en het gevoel dat u er als ouder weinig aan kunt doen. Herkent u een van deze situaties, dan zit u hier goed."
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

        <Reveal>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-slate-600">
            Voor uw kind voelt het van binnenuit meestal anders dan het van
            buitenaf lijkt. Niet weten waar je moet beginnen, het idee hebben dat
            je gewoon te dom bent voor dit vak, en dan maar uitstellen tot het
            niet meer kan. Dat zit er bijna altijd onder. Daar begin ik.
          </p>
        </Reveal>
      </Section>

      {/* Oplossing en voordelen */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="De aanpak"
            titel="Eerst begrijpen wat er misgaat, dan pas oefenen"
            intro="Ik begin nooit met een standaardprogramma. We kijken eerst waar het vastloopt: is het de stof zelf, de manier van leren, de planning of het vertrouwen? Daarna pakken we precies dát aan — met technieken waarvan de werking goed onderbouwd is."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {voordelen.map((item, i) => (
            <Reveal key={item.titel} delay={i * 45}>
              <Kaart className="h-full">
                <item.icon className="h-6 w-6 text-navy" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {item.titel}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.tekst}</p>
              </Kaart>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Persoonlijke introductie */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <figure>
              <Image
                src="/img/oskar-oorkonde-wiskunde.jpg"
                alt="Oskar van Zadelhoff met zijn oorkonde 'Een 10 voor wiskunde' van Platform Wiskunde Nederland"
                width={825}
                height={1100}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full rounded-[10px] border border-line"
              />
              <figcaption className="mt-3 text-sm text-slate-600">
                De oorkonde van Platform Wiskunde Nederland voor een 10 voor
                wiskunde A op het centraal eindexamen 2026.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={60}>
            <SectionKop
              eyebrow="Even voorstellen"
              titel="Ik ben Oskar, en ik wilde ooit zelf van school af"
            />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                In vwo 3 was ik er klaar mee. Ik zag het nut van school niet,
                verzamelde tientallen onvoldoendes en wilde zo snel mogelijk weg
                naar het mbo. Mijn afdelingsleidster praatte me daaruit: zij zag
                meer in mij dan ik op dat moment zelf.
              </p>
              <p>
                In vwo 4 ben ik, met hulp van een paar leraren die in mij
                bleven geloven, meer inspanning gaan tonen — en sloegen mijn
                cijfers om. Ik ging me verdiepen in hoe leren eigenlijk werkt en
                stapte over op flashcards en oefenvragen in plaats van eindeloos
                herlezen. In juli 2026
                slaagde ik cum laude voor mijn vwo aan het Copernicus SG in Hoorn,
                met een 8,8 gemiddeld op het centraal eindexamen.
              </p>
              <p>
                Tijdens die examenperiode hoorde ik van klasgenoten hoeveel stress
                ze hadden en hoeveel tijd ze kwijt waren aan leren. Daar zat
                het verschil
                niet in slimheid, maar in aanpak. Dat is precies wat ik nu
                overdraag: MasterSchool bestaat zodat leerlingen de baas worden
                over school, in plaats van andersom.
              </p>
            </div>
            <ActieveLeerlingen className="mt-8" />
            <div className="mt-8">
              <VerderLezen
                links={[{ href: "/over-mij", label: "Lees mijn hele verhaal" }]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Diensten */}
      <Section tint="offwhite" id="diensten">
        <Reveal>
          <SectionKop
            eyebrow="Wat ik aanbied"
            titel="Drie manieren waarop ik uw kind help"
            intro="Van losse bijles voor één vak tot een complete verandering in hoe uw kind leert. Bij twee ervan geldt: haalt uw kind het afgesproken resultaat niet, dan begeleid ik kosteloos door."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {homeDiensten.map((dienst, i) => (
            <Reveal key={dienst.slug} delay={i * 60}>
              <Kaart hover className="flex h-full flex-col">
                <h3 className="text-xl font-bold text-navy">{dienst.naam}</h3>
                <p className="mt-1 font-semibold text-navy">
                  {dienst.prijs}{" "}
                  <span className="font-normal text-muted">
                    {dienst.prijsDetail}
                  </span>
                </p>
                <p className="mt-4 grow leading-relaxed text-slate-600">
                  {dienst.belofte}
                </p>
                {dienst.garantieLabel ? (
                  <p className="mt-4 flex gap-2 border-t border-line pt-4 text-sm text-slate-600">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-navy"
                      aria-hidden="true"
                    />
                    {dienst.garantieLabel}
                  </p>
                ) : null}
                <div className="mt-6">
                  <KnopLink
                    href={dienst.href ?? `/diensten#${dienst.slug}`}
                    variant="secundair"
                  >
                    Meer hierover
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </KnopLink>
                </div>
              </Kaart>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[10px] border border-line bg-white p-6">
            <p className="max-w-xl leading-relaxed text-slate-600">
              <strong className="font-semibold text-navy">
                Staat er meer op het spel?
              </strong>{" "}
              Voor leerlingen die dreigen te blijven zitten of te zakken zijn er
              intensieve trajecten:{" "}
              {dienstenExamen.map((d) => d.naam.replace("MasterSchool ", "")).join(", ")}.
            </p>
            <KnopLink href="/diensten#examen-squad" variant="secundair">
              Bekijk de examentrajecten
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </KnopLink>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 grid gap-5 rounded-[10px] border border-line bg-white p-6 sm:grid-cols-2 sm:p-7">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-navy">
                <ClipboardList className="h-5 w-5" aria-hidden="true" />
                Vakken en niveaus
              </h3>
              <ul className="mt-3 space-y-1.5 text-slate-600">
                {vakken.map((vak) => (
                  <li key={vak.naam} className="flex flex-wrap items-center gap-2">
                    <span className={vak.beschikbaar ? "" : "text-muted"}>
                      {vak.naam}
                    </span>
                    {vak.beschikbaar ? null : (
                      <span className="rounded-full border border-line bg-offwhite px-2.5 py-0.5 text-xs font-semibold text-muted">
                        Nog niet beschikbaar — {vak.notitie}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-600">{niveaus}</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-navy">
                <Laptop className="h-5 w-5" aria-hidden="true" />
                Waar de lessen plaatsvinden
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Online via videobellen, of fysiek in Monnickendam en Purmerend: bij mij thuis in Monnickendam, bij uw kind thuis of in de bibliotheek van Monnickendam. Binnen Monnickendam, Katwoude en Purmerend reken ik geen reiskosten; daarbuiten alleen de kosten van het openbaar vervoer.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Keuzehulp */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Waar begint u?"
            titel="Wat past bij de situatie van uw kind?"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {keuzehulp.map((item, i) => (
            <Reveal key={item.vraag} delay={i * 45}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-[10px] border border-line bg-white p-6 transition-colors hover:border-navy/40 hover:bg-offwhite"
              >
                <h3 className="text-lg font-semibold text-navy">
                  “{item.vraag}”
                </h3>
                <p className="mt-2 grow leading-relaxed text-slate-600">
                  {item.antwoord}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-navy">
                  {item.label}
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

      {/* Bewijs */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Resultaten"
            titel="Wat leerlingen en ouders zeggen"
            intro="Alle reviews en resultaten hieronder zijn echt en met toestemming geplaatst."
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
            De eigen eindexamenresultaten van Oskar, vwo 2026.
          </p>
        </Reveal>

        <Reveal>
          <ActieveLeerlingen className="mt-10" />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <Reveal key={review.id} delay={i * 60}>
              <ReviewKaart review={review} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cases.slice(0, 2).map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <CaseKaart item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            {resultatenDisclaimer}
          </p>
          <div className="mt-6">
            <VerderLezen
              links={[
                {
                  href: "/resultaten",
                  label: "Bekijk alle reviews en resultaten",
                },
              ]}
            />
          </div>
        </Reveal>
      </Section>

      {/* Werkwijze */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Zo werkt het"
            titel="Van eerste appje tot eerste les"
            intro="Vier stappen, zonder verplichtingen vooraf."
          />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stappen.map((stap, i) => (
            <Reveal key={stap.nummer} delay={i * 60}>
              <li className="h-full border-t-2 border-navy pt-5">
                <span className="text-sm font-bold text-muted">
                  Stap {stap.nummer}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {stap.titel}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">{stap.tekst}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="mt-10">
            <VerderLezen
              links={[
                { href: "/werkwijze", label: "Lees de werkwijze in detail" },
              ]}
            />
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Veelgestelde vragen"
            titel="Waar ouders meestal naar vragen"
          />
        </Reveal>
        <Reveal>
          <div className="mt-10">
            <FaqAccordion items={homeFaq} />
          </div>
          <div className="mt-8">
            <VerderLezen
              links={[
                {
                  href: "/veelgestelde-vragen",
                  label: "Alle veelgestelde vragen",
                },
              ]}
            />
          </div>
        </Reveal>
      </Section>

      <SlotCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
