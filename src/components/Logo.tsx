/** Beeldmerk van MasterSchool: een open boek met een pijl omhoog. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 4.5 33 15h-6.2v8.2h-5.6V15H15L24 4.5Z" />
      <path d="M22.4 26.7c-3.3-2.6-8.8-4-15.1-3.7L5 24l-2 16.4 2.6-.5c5.9-1.1 12.5-.2 16.8 2.4V26.7Z" />
      <path d="M25.6 26.7c3.3-2.6 8.8-4 15.1-3.7l2.3.1 2 16.3-2.6-.5c-5.9-1.1-12.5-.2-16.8 2.4V26.7Z" />
    </svg>
  );
}

/** Volledig logo: beeldmerk plus woordmerk. */
export function Logo({
  className = "",
  variant = "navy",
}: {
  className?: string;
  variant?: "navy" | "wit";
}) {
  const kleur = variant === "wit" ? "text-white" : "text-navy";
  return (
    <span
      className={`inline-flex min-w-0 items-center gap-2 sm:gap-2.5 ${kleur} ${className}`}
    >
      <LogoMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
      <span className="truncate text-lg font-bold tracking-tight sm:text-[1.35rem]">
        Master<span className="font-semibold">School</span>
      </span>
    </span>
  );
}
