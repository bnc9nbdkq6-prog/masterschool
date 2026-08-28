import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tint = "wit",
  id,
}: {
  children: ReactNode;
  className?: string;
  tint?: "wit" | "offwhite" | "navy";
  id?: string;
}) {
  const achtergrond =
    tint === "navy"
      ? "bg-navy text-white on-navy"
      : tint === "offwhite"
        ? "bg-offwhite"
        : "bg-white";
  return (
    <section id={id} className={`${achtergrond} py-16 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionKop({
  eyebrow,
  titel,
  intro,
  op = "licht",
  gecentreerd = false,
}: {
  eyebrow?: string;
  titel: string;
  intro?: string;
  op?: "licht" | "donker";
  gecentreerd?: boolean;
}) {
  const donker = op === "donker";
  return (
    <div className={`${gecentreerd ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold tracking-wide uppercase ${
            donker ? "text-white/70" : "text-muted"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          donker ? "text-white" : "text-navy"
        }`}
      >
        {titel}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            donker ? "text-white/85" : "text-slate-600"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type KnopVariant = "primair" | "secundair" | "primair-op-navy" | "secundair-op-navy";

const knopStijl: Record<KnopVariant, string> = {
  primair:
    "bg-navy text-white hover:bg-navy-hover active:bg-navy-hover shadow-sm hover:shadow",
  secundair:
    "bg-white text-navy border border-line-strong hover:border-navy hover:bg-offwhite",
  "primair-op-navy": "bg-white text-navy hover:bg-slate-100 shadow-sm",
  "secundair-op-navy":
    "bg-transparent text-white border border-white/45 hover:border-white hover:bg-white/10",
};

const knopBasis =
  "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-base font-semibold transition-colors duration-150 min-h-12";

export function KnopLink({
  href,
  children,
  variant = "primair",
  className = "",
  extern = false,
}: {
  href: string;
  children: ReactNode;
  variant?: KnopVariant;
  className?: string;
  extern?: boolean;
}) {
  const klassen = `${knopBasis} ${knopStijl[variant]} ${className}`;
  if (extern) {
    return (
      <a href={href} className={klassen} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={klassen}>
      {children}
    </Link>
  );
}

export function Kaart({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-[10px] border border-line bg-white p-6 sm:p-7 ${
        hover
          ? "transition-shadow duration-150 hover:shadow-[0_4px_20px_-6px_rgba(3,25,60,0.18)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
