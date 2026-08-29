import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, prijzen, site } from "@/content/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="on-navy border-t border-navy-hover bg-navy text-white">
      <Container className="py-14">
        {/* min-w-0 op de kolommen: anders houdt het woordmerk, dat niet
            afbreekt, de kolom breder dan het scherm bij een grote
            tekstinstelling. */}
        <div className="grid gap-10 [&>*]:min-w-0 md:grid-cols-3">
          <div>
            <Logo variant="wit" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              {site.slogan} Persoonlijke bijles en studiebegeleiding voor havo- en
              vwo-leerlingen, in Monnickendam en online.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-white/70">
              Pagina&apos;s
            </h2>
            {/* Loopt met flex-wrap netjes over, ook bij een grote
                tekstinstelling waar twee vaste kolommen niet meer passen. */}
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-sm">
              <li className="min-w-[7ch]">
                <Link href="/" className="text-white/85 hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href} className="min-w-[7ch]">
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-white/70">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-white/85 hover:text-white hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp — {site.reactietijd}
                </a>
              </li>
              <li>
                <a
                  href={site.telefoonHref}
                  className="inline-flex items-center gap-2.5 text-white/85 hover:text-white hover:underline"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.telefoon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 break-all text-white/85 hover:text-white hover:underline"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {site.adres.straat}, {site.adres.postcodePlaats}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="text-sm text-white/65">{prijzen.btwNotitie}</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.naam} — {site.eigenaar}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacyverklaring" className="hover:text-white hover:underline">
                Privacyverklaring
              </Link>
              <Link
                href="/algemene-voorwaarden"
                className="hover:text-white hover:underline"
              >
                Algemene voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
