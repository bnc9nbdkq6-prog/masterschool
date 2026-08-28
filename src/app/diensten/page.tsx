import type { Metadata } from "next";
import { ArrowRight, Clock3 } from "lucide-react";
import { Kaart, KnopLink, Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PaginaKop, SlotCta, Vink } from "@/components/blokken";
import { diensten, toekomstigeDiensten } from "@/content/diensten";
import { niveaus, prijzen, site, vakken } from "@/content/site";

export const metadata: Metadata = {
  title: "Diensten en prijzen",
  description:
    "Individuele bijles voor €25 per uur en het MasterSchool Leersysteem voor €249 eenmalig, beide inclusief btw. Voor havo- en vwo-leerlingen in Monnickendam en online.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Diensten"
        titel="Twee diensten, allebei één op één"
        intro="MasterSchool biedt op dit moment individuele bijles en het MasterSchool Leersysteem aan. Hieronder ziet u per dienst wat u krijgt, wat het kost en voor wie het bedoeld is."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {diensten.map((dienst, i) => (
            <Reveal key={dienst.slug} delay={i * 60}>
              <Kaart hover className="flex h-full flex-col">
                <h2 className="text-2xl font-bold text-navy">{dienst.naam}</h2>
                <p className="mt-1 text-lg font-semibold text-navy">
                  {dienst.prijs}{" "}
                  <span className="text-base font-normal text-muted">
                    — {dienst.prijsToelichting}
                  </span>
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">{dienst.kort}</p>
                <p className="mt-4 grow leading-relaxed text-slate-600">
                  {dienst.voorWie}
                </p>
                <div className="mt-6">
                  <KnopLink href={dienst.href}>
                    Alles over {dienst.naam}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </KnopLink>
                </div>
              </Kaart>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 grid gap-8 rounded-[10px] border border-line bg-offwhite p-6 sm:p-8 md:grid-cols-3">
            <div>
              <h2 className="font-semibold text-navy">Vakken</h2>
              <ul className="mt-3 space-y-1.5 text-slate-600">
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
                Online via videobellen, of fysiek in Monnickendam. Binnen
                Monnickendam en Katwoude zonder reiskosten; daarbuiten alleen
                vergoeding van het openbaar vervoer.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">{prijzen.btwNotitie}</p>
        </Reveal>
      </Section>

      {/* In ontwikkeling */}
      <Section tint="offwhite" id="binnenkort">
        <Reveal>
          <SectionKop
            eyebrow="In ontwikkeling"
            titel="Waar ik op dit moment aan werk"
            intro="Deze diensten zijn nog niet te boeken. Ik noem ze hier zodat u weet wat eraan komt. Prijzen zijn indicatief en nog niet definitief. Heeft u interesse, laat het weten — dan neem ik contact op zodra het beschikbaar is."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toekomstigeDiensten.map((dienst, i) => (
            <Reveal key={dienst.naam} delay={i * 45}>
              <Kaart className="h-full">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-offwhite px-3 py-1 text-xs font-semibold text-muted">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  Binnenkort beschikbaar
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {dienst.naam}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {dienst.beschrijving}
                </p>
                <p className="mt-3 text-sm text-muted">{dienst.indicatie}</p>
              </Kaart>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <KnopLink href="/contact?interesse=binnenkort" variant="secundair">
              Laat weten waarin u geïnteresseerd bent
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </KnopLink>
          </div>
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
              Bijles wordt per werkelijk uur afgerekend. Duurt een les 90 minuten,
              dan betaalt u anderhalf uur.
            </Vink>
            <Vink>
              De minimale lesduur is één uur. Gebruikelijk is één tot anderhalf
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
              Vindt u de eerste bijles niet waardevol, dan betaalt u die les niet.
            </Vink>
          </ul>
          <p className="mt-6 text-sm text-muted">
            De volledige voorwaarden staan in de{" "}
            <a
              href="/algemene-voorwaarden"
              className="font-medium text-navy underline underline-offset-4"
            >
              algemene voorwaarden
            </a>
            .
          </p>
        </Reveal>
      </Section>

      <SlotCta
        titel="Weet u niet zeker welke dienst past?"
        tekst={`Stuur een appje met de situatie van uw kind — het vak, het leerjaar en waar het misgaat. Ik denk mee en zeg het eerlijk als bijles niet de beste oplossing is. Antwoord ${site.reactietijd}.`}
      />
    </>
  );
}
