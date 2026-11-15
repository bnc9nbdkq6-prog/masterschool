import { Suspense } from "react";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, Kaart, Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PaginaKop, Vink } from "@/components/blokken";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/Icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — bijles aanvragen of kennismaken",
  description:
    "Neem contact op via WhatsApp, telefoon of het contactformulier. Antwoord gemiddeld binnen drie uur. Het kennismakingsgesprek is gratis en duurt ongeveer een kwartier.",
  alternates: { canonical: "/contact" },
};

export default function ContactPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Contact"
        titel="Laten we kijken wat uw kind nodig heeft"
        intro="Een appje met een korte beschrijving van de situatie is genoeg om te beginnen. U krijgt gemiddeld binnen drie uur antwoord en zit nergens aan vast."
      />

      {/* Directe contactmogelijkheden */}
      <div className="border-b border-line bg-white">
        <Container className="py-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-[10px] border border-line bg-white p-5 transition-colors hover:border-navy/40 hover:bg-offwhite"
            >
              <WhatsAppIcon className="h-6 w-6 shrink-0 text-navy" />
              <span className="min-w-0">
                <span className="block font-semibold text-navy">WhatsApp</span>
                <span className="block text-sm text-slate-600">
                  De snelste manier — {site.reactietijd}
                </span>
              </span>
            </a>
            <a
              href={site.telefoonHref}
              className="flex items-center gap-4 rounded-[10px] border border-line bg-white p-5 transition-colors hover:border-navy/40 hover:bg-offwhite"
            >
              <Phone className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-semibold text-navy">Bellen</span>
                <span className="block text-sm text-slate-600">{site.telefoon}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-[10px] border border-line bg-white p-5 transition-colors hover:border-navy/40 hover:bg-offwhite"
            >
              <Mail className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-semibold text-navy">E-mail</span>
                <span className="block text-sm break-all text-slate-600">
                  {site.email}
                </span>
              </span>
            </a>
          </div>
        </Container>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionKop
              titel="Of stuur een bericht via het formulier"
              intro="Hoe concreter u de situatie beschrijft, hoe beter ik kan inschatten wat er nodig is. Alleen uw naam, een manier om u te bereiken en uw vraag zijn verplicht."
            />
            <div className="mt-8">
              <Suspense
                fallback={
                  <p className="text-slate-600">Het formulier wordt geladen…</p>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <Reveal delay={60}>
            <div className="space-y-6 lg:sticky lg:top-24">
              <Kaart>
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                  Wat er daarna gebeurt
                </h2>
                <ol className="mt-4 space-y-4 text-slate-600">
                  <li>
                    <span className="font-semibold text-navy">1. Ik reageer</span>
                    <br />
                    Gemiddeld binnen drie uur, ook &apos;s avonds en in het
                    weekend.
                  </li>
                  <li>
                    <span className="font-semibold text-navy">
                      2. Kort kennismakingsgesprek
                    </span>
                    <br />
                    Gratis, ongeveer een kwartier, telefonisch of via video. Met
                    of zonder uw kind erbij. U hoeft niets voor te bereiden of mee
                    te nemen.
                  </li>
                  <li>
                    <span className="font-semibold text-navy">
                      3. We plannen een eerste moment
                    </span>
                    <br />
                    Doorgaans binnen een week. Ik geef op alle dagen en tijden
                    les.
                  </li>
                </ol>
              </Kaart>

              <Kaart>
                <h2 className="text-lg font-bold text-navy">Goed om te weten</h2>
                <ul className="mt-4 space-y-3">
                  <Vink>Het kennismakingsgesprek is gratis en vrijblijvend</Vink>
                  <Vink>
                    Vindt u de eerste bijles niet waardevol, dan betaalt u die les
                    niet
                  </Vink>
                  <Vink>Er is geen abonnement en geen opzegtermijn</Vink>
                  <Vink>
                    Liever geen formulier? Een appje of telefoontje mag altijd
                  </Vink>
                </ul>
              </Kaart>

              <Kaart>
                <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  Waar ik lesgeef
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Fysiek in Monnickendam (bij mij thuis, bij uw kind thuis of in de bibliotheek) en in Purmerend. Zonder reiskosten binnen Monnickendam, Katwoude en Purmerend; daarbuiten — bijvoorbeeld Edam, Volendam, Amsterdam of Hoorn — alleen de kosten van het openbaar vervoer.
                </p>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Online lessen kunnen overal en gaan meestal via videobellen in
                  WhatsApp.
                </p>
                <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
                  {site.naam} · {site.eigenaar}
                  <br />
                  {site.adres.straat}, {site.adres.postcodePlaats}
                </p>
              </Kaart>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
