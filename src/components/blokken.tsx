import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import type { Case, Review } from "@/content/bewijs";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./Icons";
import { Container, Kaart, KnopLink, Section, SectionKop } from "./ui";

/** Kop bovenaan een binnenpagina. */
export function PaginaKop({
  eyebrow,
  titel,
  intro,
}: {
  eyebrow: string;
  titel: string;
  intro: string;
}) {
  return (
    <div className="border-b border-line bg-offwhite">
      <Container className="py-14 sm:py-16">
        <p className="text-sm font-semibold tracking-wide uppercase text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance text-navy sm:text-5xl">
          {titel}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          {intro}
        </p>
      </Container>
    </div>
  );
}

export function ReviewKaart({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-[10px] border border-line bg-white p-6 sm:p-7">
      <Quote className="h-6 w-6 shrink-0 text-navy/25" aria-hidden="true" />
      <blockquote className="mt-3 grow">
        <p className="leading-relaxed text-slate-700">{review.quote}</p>
        {review.vervolg?.map((tekst) => (
          <p key={tekst} className="mt-3 text-slate-700">
            <span className="text-muted">Later bericht: </span>
            {tekst}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4 text-sm">
        <span className="font-semibold text-navy">{review.naam}</span>
        <span className="block text-muted">{review.rol}</span>
      </figcaption>
    </figure>
  );
}

export function CaseKaart({ item }: { item: Case }) {
  // Vak en niveau staan al in de kop van de kaart.
  const regels = [
    ["Beginsituatie", item.beginsituatie],
    ["Aanpak", item.aanpak],
    ["Inzet van de leerling", item.inzetLeerling],
    ["Begeleiding", `${item.sessies}, ${item.periode}`],
  ] as const;

  return (
    <Kaart className="h-full">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-bold text-navy">{item.naam}</h3>
        <p className="text-sm text-muted">
          {item.vak} · {item.niveau}
        </p>
      </div>

      {item.van && item.naar ? (
        <div className="mt-4 rounded-[10px] border border-line bg-offwhite px-5 py-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-2xl font-semibold text-muted tabular-nums">
              {item.van}
            </span>
            <ArrowRight
              className="h-6 w-6 shrink-0 text-navy/50"
              aria-hidden="true"
            />
            <span className="text-4xl leading-none font-bold text-navy tabular-nums">
              {item.naar}
            </span>
          </div>
          <p className="mt-2.5 text-sm text-slate-600">
            {item.sessies} · {item.periode}
          </p>
        </div>
      ) : null}

      <p className="mt-4 text-lg font-semibold text-navy">{item.resultaat}</p>
      <dl className="mt-5 space-y-3 text-sm">
        {regels.map(([label, waarde]) => (
          <div key={label} className="grid grid-cols-[9.5rem_1fr] gap-3 max-sm:grid-cols-1 max-sm:gap-0.5">
            <dt className="font-medium text-muted">{label}</dt>
            <dd className="text-slate-700">{waarde}</dd>
          </div>
        ))}
      </dl>
    </Kaart>
  );
}

/** Lijstitem met vinkje. */
export function Vink({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Check className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

/** Afsluitende oproep tot contact. Staat onderaan elke pagina. */
export function SlotCta({
  titel = "Zullen we kijken wat uw kind nodig heeft?",
  tekst = "Stuur een appje met de situatie van uw kind. U krijgt gemiddeld binnen drie uur antwoord en we plannen een gratis kennismakingsgesprek van een kwartier. U zit nergens aan vast.",
}: {
  titel?: string;
  tekst?: string;
}) {
  return (
    <Section tint="navy">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionKop titel={titel} op="donker" />
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
            {tekst}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <KnopLink href={site.whatsapp} variant="primair-op-navy" extern>
              <WhatsAppIcon className="h-5 w-5" />
              Neem contact op via WhatsApp
            </KnopLink>
            <KnopLink href="/contact" variant="secundair-op-navy">
              Stuur een bericht
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </KnopLink>
          </div>
        </div>

        <div className="rounded-[10px] border border-white/20 bg-white/[0.06] p-6 sm:p-7">
          <h3 className="text-base font-semibold text-white">
            Wat u kunt verwachten
          </h3>
          <ul className="mt-4 space-y-3 text-white/85">
            <li className="flex gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Antwoord {site.reactietijd}</span>
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Een gratis kennismakingsgesprek van ongeveer 15 minuten</span>
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Starten kan {site.starttermijn}</span>
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Les bij u in de buurt, bij mij thuis of online</span>
            </li>
          </ul>
          <p className="mt-5 border-t border-white/15 pt-4 text-sm text-white/70">
            Begeleiding in Monnickendam, Katwoude, Edam, Volendam, Purmerend,
            Amsterdam en Hoorn. Online begeleiding kan overal.
          </p>
        </div>
      </div>
    </Section>
  );
}

/** Compacte verwijzing naar een andere pagina. */
export function VerderLezen({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label="Verder lezen" className="flex flex-wrap gap-x-6 gap-y-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="inline-flex items-center gap-2 font-semibold text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
        >
          {link.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
}
