import { Check, Info, ShieldCheck } from "lucide-react";
import { Container, Kaart, KnopLink, Section, SectionKop } from "./ui";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./Icons";
import { PaginaKop, SlotCta, VerderLezen, Vink } from "./blokken";
import type { Dienst } from "@/content/diensten";
import { prijzen, site } from "@/content/site";

/**
 * Detailpagina voor één dienst. De inhoud komt volledig uit
 * `src/content/diensten.ts`, zodat teksten op één plek staan.
 */
export function DienstDetail({ dienst }: { dienst: Dienst }) {
  const detail = dienst.detail;
  if (!detail) return null;

  return (
    <>
      <PaginaKop
        eyebrow={`Dienst · ${dienst.naam}`}
        titel={detail.titel}
        intro={detail.intro}
      />

      {/* Garantie of kernbelofte, meteen in beeld */}
      <div className="border-b border-line bg-white">
        <Container className="py-6">
          <p className="flex items-start gap-3 leading-relaxed text-navy">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
            <span>
              {dienst.garantie ? (
                <>
                  <strong className="font-semibold">Mijn afspraak: </strong>
                  <span className="text-slate-700">{dienst.garantie}</span>
                </>
              ) : (
                <>
                  <strong className="font-semibold">{dienst.belofte}</strong>{" "}
                  <span className="text-slate-700">
                    Het kennismakingsgesprek vooraf is gratis en vrijblijvend.
                  </span>
                </>
              )}
            </span>
          </p>
        </Container>
      </div>

      {/* Voor wie, met de kerngegevens ernaast */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <SectionKop titel="Voor wie is dit?" />
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {dienst.voorWie}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-navy">
              Voor wie juist niet
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-slate-600">
              {detail.nietVoorWie}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-navy">Wat u krijgt</h3>
            <ul className="mt-4 space-y-2.5">
              {dienst.bevat.map((punt) => (
                <li key={punt} className="flex gap-2.5">
                  <Check
                    className="mt-1.5 h-4 w-4 shrink-0 text-navy"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700">{punt}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={60}>
            <Kaart className="lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-navy">In het kort</h2>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
                <span className="text-3xl font-bold text-navy">
                  {dienst.prijs}
                </span>
                <span className="text-muted">{dienst.prijsDetail}</span>
              </p>
              {dienst.termijnen ? (
                <p className="mt-1 text-sm text-muted">{dienst.termijnen}</p>
              ) : null}

              <dl className="mt-5 text-sm">
                <dt className="font-medium text-muted">Duur</dt>
                <dd className="mt-0.5 text-slate-700">{dienst.duur}</dd>
              </dl>

              <h3 className="mt-6 border-t border-line pt-5 text-sm font-medium text-muted">
                Praktisch
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                {detail.praktisch.map((punt) => (
                  <li key={punt} className="flex gap-2.5">
                    <Check
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-navy"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">{punt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <KnopLink href={site.whatsapp} extern className="w-full">
                  <WhatsAppIcon className="h-5 w-5" />
                  Stel uw vraag via WhatsApp
                </KnopLink>
              </div>
              <p className="mt-3 text-center text-sm text-muted">
                Antwoord {site.reactietijd}
              </p>
            </Kaart>
          </Reveal>
        </div>
      </Section>

      {/* Het traject stap voor stap */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Zo werkt het"
            titel="Van eerste gesprek tot resultaat"
          />
        </Reveal>
        <ol className="mt-10 space-y-5">
          {detail.stappen.map((stap, i) => (
            <Reveal key={stap.titel} delay={i * 40}>
              <li className="flex gap-5 rounded-[10px] border border-line bg-white p-6">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">
                    {stap.titel}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {stap.tekst}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Eerlijkheid over een nieuwe dienst */}
      {detail.nieuweDienst ? (
        <Section>
          <Reveal>
            <div className="flex gap-4 rounded-[10px] border border-line bg-offwhite p-6">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold text-navy">
                  Eerlijk gezegd: dit is nieuw
                </h2>
                <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                  {detail.nieuweDienst}
                </p>
              </div>
            </div>
          </Reveal>
        </Section>
      ) : null}

      {/* Garantie uitgeschreven */}
      {dienst.garantie ? (
        <Section tint="offwhite">
          <Reveal>
            <div className="max-w-3xl">
              <SectionKop
                eyebrow="De afspraak"
                titel="Wat er gebeurt als het niet lukt"
              />
              <div className="mt-6 rounded-[10px] border border-line bg-white p-6 sm:p-7">
                <p className="leading-relaxed text-slate-700">
                  {dienst.garantie}
                </p>
                <h3 className="mt-6 font-semibold text-navy">
                  Wat daarvoor nodig is
                </h3>
                <ul className="mt-3 space-y-3">
                  <Vink>
                    Uw kind volgt de afgesproken sessies en komt de gemaakte
                    afspraken na.
                  </Vink>
                  <Vink>
                    Het werk tussen de sessies wordt gedaan en is aantoonbaar,
                    bijvoorbeeld met foto&apos;s.
                  </Vink>
                  <Vink>
                    We leggen vóór de start samen vast waar we het resultaat aan
                    afmeten en wanneer we evalueren.
                  </Vink>
                </ul>
                <p className="mt-6 leading-relaxed text-slate-600">
                  Wat we samen schriftelijk vastleggen gaat voor op deze algemene
                  omschrijving. De volledige voorwaarden staan in de{" "}
                  <a
                    href="/algemene-voorwaarden"
                    className="font-medium text-navy underline underline-offset-4"
                  >
                    algemene voorwaarden
                  </a>
                  .
                </p>
              </div>
              <p className="mt-4 text-sm text-muted">{prijzen.btwNotitie}</p>
              <div className="mt-8">
                <VerderLezen
                  links={[
                    { href: "/diensten", label: "Vergelijk met de andere diensten" },
                    { href: "/resultaten", label: "Bekijk resultaten van leerlingen" },
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </Section>
      ) : null}

      <SlotCta
        titel={`Benieuwd of ${dienst.naam} past?`}
        tekst="Stuur een appje met de situatie van uw kind. Ik zeg eerlijk of dit het juiste is, of dat een lichtere en goedkopere dienst voldoende is. Het kennismakingsgesprek is gratis en duurt een kwartier."
      />
    </>
  );
}
