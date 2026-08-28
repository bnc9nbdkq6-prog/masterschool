import type { Metadata } from "next";
import { Section, SectionKop } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PaginaKop, SlotCta } from "@/components/blokken";
import { faq, faqPlat } from "@/content/faq";
import { prijzen } from "@/content/site";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over bijles en studiebegeleiding",
  description:
    "Antwoorden op de vragen die ouders het vaakst stellen: over vakken, niveaus, prijzen, online lessen, afzeggen, resultaat en de eerste kennismaking.",
  alternates: { canonical: "/veelgestelde-vragen" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPlat.map((item) => ({
    "@type": "Question",
    name: item.vraag,
    acceptedAnswer: { "@type": "Answer", text: item.antwoord },
  })),
};

export default function FaqPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Veelgestelde vragen"
        titel="Antwoord op de vragen die ouders het vaakst stellen"
        intro="Staat uw vraag er niet bij? Stuur gerust een appje — ik antwoord gemiddeld binnen drie uur."
      />

      {faq.map((categorie, index) => (
        <Section key={categorie.titel} tint={index % 2 === 0 ? "wit" : "offwhite"}>
          <Reveal>
            <SectionKop titel={categorie.titel} />
            <div className="mt-8">
              <FaqAccordion items={categorie.items} />
            </div>
          </Reveal>
        </Section>
      ))}

      <Section>
        <p className="text-sm text-muted">{prijzen.btwNotitie}</p>
      </Section>

      <SlotCta
        titel="Staat uw vraag er niet bij?"
        tekst="Stuur een appje. Geen vraag is te klein, en u zit nergens aan vast."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
