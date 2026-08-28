import type { ReactNode } from "react";

/** Leesbare opmaak voor de privacyverklaring en de algemene voorwaarden. */
export function JuridischeTekst({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-3xl
        [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy
        [&_h2:first-child]:mt-0
        [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy
        [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-slate-600
        [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-slate-600
        [&_li]:list-disc [&_li]:leading-relaxed
        [&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-4
        [&_strong]:font-semibold [&_strong]:text-navy
      "
    >
      {children}
    </div>
  );
}
