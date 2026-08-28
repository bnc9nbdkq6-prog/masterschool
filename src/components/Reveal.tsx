"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
 * Eén gedeelde waarnemer voor alle blokken op de pagina, in plaats van één
 * per blok. Dat scheelt werk in de browser.
 *
 * Belangrijk: inhoud mag nooit onzichtbaar blijven doordat een animatie niet
 * loopt. Daarom zijn er drie vangnetten:
 *   1. Blokken worden alleen verborgen wanneer JavaScript draait, de bezoeker
 *      geen voorkeur voor minder beweging heeft en het blok nog buiten beeld
 *      staat.
 *   2. Voert de browser de waarnemer niet uit, dan wordt na 1,5 seconde
 *      alsnog alles getoond.
 *   3. In de CSS staat een regel die bij "minder beweging" alles zichtbaar
 *      maakt, ook zonder JavaScript.
 */

const wachtenden = new Set<HTMLElement>();
let waarnemer: IntersectionObserver | null = null;
let waarnemerWerkt = false;
let noodrem: number | null = null;

function toon(el: HTMLElement) {
  el.classList.remove("reveal-init");
  el.classList.add("reveal-in");
  wachtenden.delete(el);
  waarnemer?.unobserve(el);
}

function meldAan(el: HTMLElement) {
  if (!waarnemer) {
    waarnemer = new IntersectionObserver(
      (entries) => {
        waarnemerWerkt = true;
        for (const entry of entries) {
          if (entry.isIntersecting) toon(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
  }

  wachtenden.add(el);
  waarnemer.observe(el);

  if (noodrem === null) {
    noodrem = window.setTimeout(() => {
      if (waarnemerWerkt) return;
      for (const wachtende of [...wachtenden]) toon(wachtende);
    }, 1500);
  }
}

/** Laat een blok subtiel verschijnen zodra het in beeld scrollt. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Wat al in beeld staat animeren we niet; dat zou alleen maar flikkeren.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-init");
    if (delay) el.style.transitionDelay = `${delay}ms`;
    meldAan(el);

    return () => {
      wachtenden.delete(el);
      waarnemer?.unobserve(el);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
