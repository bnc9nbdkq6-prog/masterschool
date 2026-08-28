import type { Metadata } from "next";
import { Container, KnopLink } from "@/components/ui";
import { nav } from "@/content/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NietGevonden() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold tracking-wide uppercase text-muted">
        Foutcode 404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy">
        Deze pagina bestaat niet
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
        Misschien is de link verouderd of is er een typefout geslopen in het
        adres. Hieronder vindt u de weg terug.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <KnopLink href="/">Naar de homepage</KnopLink>
        <KnopLink href="/contact" variant="secundair">
          Contact opnemen
        </KnopLink>
      </div>
      <nav aria-label="Alle pagina's" className="mt-12">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
