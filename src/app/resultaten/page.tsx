import type { Metadata } from "next";
import { Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CaseKaart, PaginaKop, ReviewKaart, SlotCta } from "@/components/blokken";
import { cases, eigenResultaten, resultatenDisclaimer, reviews } from "@/content/bewijs";

export const metadata: Metadata = {
  title: "Resultaten en reviews van leerlingen en ouders",
  description:
    "Echte reviews van leerlingen en ouders, en uitgewerkte resultaten met vak, beginsituatie, aanpak en periode. Allemaal met toestemming geplaatst.",
  alternates: { canonical: "/resultaten" },
};

export default function ResultatenPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Resultaten"
        titel="Wat leerlingen en ouders zeggen"
        intro="Hieronder staan alle reviews die ik heb ontvangen en vier uitgewerkte resultaten, met de context erbij: welk vak, welke beginsituatie, welke aanpak en over welke periode."
      />

      {/* Cases */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Uitgewerkte resultaten"
            titel="Vier leerlingen, met de context erbij"
            intro="Een cijfer zonder context zegt weinig. Daarom staat er per leerling bij wat de beginsituatie was, wat we gedaan hebben, wat de leerling zelf heeft gedaan en hoe lang het duurde."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <CaseKaart item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-[10px] border border-line bg-offwhite p-6">
            <h2 className="font-semibold text-navy">
              Hoe u deze resultaten moet lezen
            </h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
              {resultatenDisclaimer}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Reviews */}
      <Section tint="offwhite">
        <Reveal>
          <SectionKop
            eyebrow="Reviews"
            titel="In hun eigen woorden"
            intro="Alle reviews hieronder zijn met schriftelijke toestemming geplaatst en uitsluitend taalkundig licht gecorrigeerd. De strekking is ongewijzigd."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 40}>
              <ReviewKaart review={review} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Eigen resultaten */}
      <Section>
        <Reveal>
          <SectionKop
            eyebrow="Mijn eigen resultaten"
            titel="Wat ik zelf haalde"
            intro="Ik vraag leerlingen om iets te doen wat ik zelf ook heb gedaan. Dit zijn mijn eigen eindexamencijfers, vwo 2026 aan het Copernicus SG in Hoorn."
          />
        </Reveal>
        <Reveal>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eigenResultaten.map((item) => (
              <div
                key={item.label}
                className="rounded-[10px] border border-line bg-white p-6 text-center"
              >
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block text-4xl font-bold text-navy">
                    {item.cijfer}
                  </span>
                  <span className="mt-2 block text-sm text-slate-600">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <SlotCta
        titel="Zullen we kijken wat er bij uw kind mogelijk is?"
        tekst="Ik beloof geen cijfer vooraf. Wel kijk ik graag eerlijk mee naar de situatie van uw kind en vertel ik wat ik realistisch acht. Dat gesprek is gratis en duurt een kwartier."
      />
    </>
  );
}
