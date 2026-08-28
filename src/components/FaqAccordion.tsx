import type { FaqItem } from "@/content/faq";

/**
 * FAQ met <details>/<summary>: werkt zonder JavaScript, is met het
 * toetsenbord te bedienen en wordt door schermlezers correct aangekondigd.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-[10px] border border-line bg-white">
      {items.map((item) => (
        <details key={item.vraag} className="group px-5 sm:px-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
            <span>{item.vraag}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-2xl leading-none font-normal text-muted transition-transform duration-150 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-5 leading-relaxed text-slate-700">{item.antwoord}</p>
        </details>
      ))}
    </div>
  );
}
