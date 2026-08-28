"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { Container } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const knopRef = useRef<HTMLButtonElement>(null);

  // Escape sluit het menu en geeft de focus terug aan de knop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        knopRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActief = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-[2px]">
      <Container>
        {/* Wrapt naar een tweede regel wanneer de bezoeker een grote
            tekstinstelling gebruikt, zodat er nooit horizontaal gescrold
            hoeft te worden. */}
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-x-3 gap-y-2 py-2">
          <Link
            href="/"
            className="min-w-0 rounded"
            aria-label="MasterSchool — naar de homepage"
          >
            <Logo />
          </Link>

          <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActief(item.href) ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-[0.95rem] font-medium transition-colors hover:bg-offwhite hover:text-navy ${
                      isActief(item.href)
                        ? "text-navy underline decoration-navy decoration-2 underline-offset-8"
                        : "text-slate-700"
                    }`}
                  >
                    {item.label === "Veelgestelde vragen" ? "Vragen" : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neem contact op via WhatsApp"
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[10px] bg-navy px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-hover min-[380px]:px-3.5 sm:px-4"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
              {/* Onder 380px past alleen het icoon; de naam komt uit aria-label. */}
              <span className="hidden min-[380px]:inline">WhatsApp</span>
            </a>

            <button
              ref={knopRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobiel-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line text-navy transition-colors hover:bg-offwhite lg:hidden"
            >
              <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id="mobiel-menu"
          className="border-t border-line bg-white lg:hidden"
        >
          <Container>
            <nav aria-label="Hoofdnavigatie mobiel" className="py-3">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActief(item.href) ? "page" : undefined}
                      className={`block border-b border-line/70 py-3.5 text-base font-medium ${
                        isActief(item.href) ? "text-navy" : "text-slate-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={site.telefoonHref}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-base font-medium text-slate-700"
                  >
                    Bellen: {site.telefoon}
                  </a>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
