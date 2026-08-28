"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import {
  DIENSTEN,
  LEERJAREN,
  NIVEAUS,
  VAKKEN,
  VORMEN,
  legeInvoer,
  valideer,
  type ContactInvoer,
  type Fouten,
} from "@/lib/contact";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./Icons";

type Status = "invullen" | "verzenden" | "verzonden" | "fout";

const veldKlassen =
  "mt-2 w-full rounded-[10px] border border-line-strong bg-white px-4 py-3 text-base text-ink transition-colors hover:border-navy focus:border-navy";
const foutKlassen = "border-red-700 hover:border-red-700";

function Fout({ id, tekst }: { id: string; tekst?: string }) {
  if (!tekst) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm text-red-800">
      <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      {tekst}
    </p>
  );
}

export function ContactForm() {
  const params = useSearchParams();
  const [invoer, setInvoer] = useState<ContactInvoer>(() => ({
    ...legeInvoer,
    dienst:
      params.get("interesse") === "binnenkort"
        ? "Interesse in een dienst die binnenkort komt"
        : "",
  }));
  const [fouten, setFouten] = useState<Fouten>({});
  const [status, setStatus] = useState<Status>("invullen");
  const [melding, setMelding] = useState("");
  const [website, setWebsite] = useState("");
  const succesRef = useRef<HTMLDivElement>(null);
  const foutRef = useRef<HTMLDivElement>(null);

  const zet = (veld: keyof ContactInvoer) => (waarde: string) => {
    setInvoer((vorig) => ({ ...vorig, [veld]: waarde }));
    // Verwijder de foutmelding zodra de bezoeker het veld aanpast.
    // E-mail en telefoon delen één regel ("vul minimaal een van beide in"),
    // dus wordt de melding bij beide velden weggehaald.
    const samen: (keyof ContactInvoer)[] =
      veld === "email" || veld === "telefoon" ? ["email", "telefoon"] : [veld];
    setFouten((vorig) => {
      if (!samen.some((v) => vorig[v])) return vorig;
      const volgende = { ...vorig };
      for (const v of samen) delete volgende[v];
      return volgende;
    });
  };

  async function verstuur(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const gevonden = valideer(invoer);
    setFouten(gevonden);
    if (Object.keys(gevonden).length > 0) {
      const eerste = Object.keys(gevonden)[0];
      document.getElementById(eerste)?.focus();
      return;
    }

    setStatus("verzenden");
    setMelding("");

    try {
      const antwoord = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...invoer, website }),
      });
      const data = (await antwoord.json()) as {
        ok: boolean;
        fouten?: Fouten;
        melding?: string;
      };

      if (antwoord.ok && data.ok) {
        setStatus("verzonden");
        setInvoer(legeInvoer);
        window.setTimeout(() => succesRef.current?.focus(), 50);
        return;
      }

      if (data.fouten) {
        setFouten(data.fouten);
        setStatus("invullen");
        document.getElementById(Object.keys(data.fouten)[0])?.focus();
        return;
      }

      setStatus("fout");
      setMelding(
        data.melding ??
          "Het versturen lukte niet. Probeer het nog eens of stuur een appje.",
      );
      window.setTimeout(() => foutRef.current?.focus(), 50);
    } catch {
      setStatus("fout");
      setMelding(
        "Er ging iets mis met de verbinding. Controleer uw internetverbinding of stuur een appje via WhatsApp.",
      );
      window.setTimeout(() => foutRef.current?.focus(), 50);
    }
  }

  if (status === "verzonden") {
    return (
      <div
        ref={succesRef}
        tabIndex={-1}
        role="status"
        className="rounded-[10px] border border-navy/20 bg-offwhite p-7"
      >
        <CheckCircle2 className="h-8 w-8 text-navy" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold text-navy">
          Bedankt, uw bericht is verstuurd
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          Ik heb uw bericht ontvangen en reageer {site.reactietijd}, meestal
          sneller. In dat antwoord stel ik een moment voor een kort
          kennismakingsgesprek voor.
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          Heeft u haast of hoort u niets? Stuur dan gerust een appje — dan zie ik
          het zeker.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 font-semibold text-white transition-colors hover:bg-navy-hover"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Ook even appen
          </a>
          <button
            type="button"
            onClick={() => setStatus("invullen")}
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-line-strong bg-white px-6 py-3.5 font-semibold text-navy transition-colors hover:border-navy hover:bg-offwhite"
          >
            Nog een bericht sturen
          </button>
        </div>
      </div>
    );
  }

  const aantalFouten = Object.keys(fouten).length;

  return (
    <form onSubmit={verstuur} noValidate className="space-y-6">
      {status === "fout" ? (
        <div
          ref={foutRef}
          tabIndex={-1}
          role="alert"
          className="rounded-[10px] border border-red-300 bg-red-50 p-5"
        >
          <h2 className="flex items-center gap-2 font-semibold text-red-900">
            <TriangleAlert className="h-5 w-5" aria-hidden="true" />
            Het versturen is niet gelukt
          </h2>
          <p className="mt-2 text-red-900">{melding}</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-red-900 underline underline-offset-4"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Stuur uw bericht via WhatsApp
          </a>
        </div>
      ) : null}

      {aantalFouten > 0 ? (
        <p role="alert" className="text-sm text-red-800">
          Er {aantalFouten === 1 ? "ontbreekt nog iets" : "ontbreken nog een paar dingen"} in
          het formulier. De velden hieronder zijn gemarkeerd.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="naam" className="font-medium text-navy">
            Uw naam <span aria-hidden="true">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            autoComplete="name"
            required
            value={invoer.naam}
            onChange={(e) => zet("naam")(e.target.value)}
            aria-invalid={fouten.naam ? true : undefined}
            aria-describedby={fouten.naam ? "naam-fout" : undefined}
            className={`${veldKlassen} ${fouten.naam ? foutKlassen : ""}`}
          />
          <Fout id="naam-fout" tekst={fouten.naam} />
        </div>

        <div>
          <label htmlFor="email" className="font-medium text-navy">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={invoer.email}
            onChange={(e) => zet("email")(e.target.value)}
            aria-invalid={fouten.email ? true : undefined}
            aria-describedby={`bereikbaar-uitleg${fouten.email ? " email-fout" : ""}`}
            className={`${veldKlassen} ${fouten.email ? foutKlassen : ""}`}
          />
          <Fout id="email-fout" tekst={fouten.email} />
        </div>

        <div>
          <label htmlFor="telefoon" className="font-medium text-navy">
            Telefoonnummer
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={invoer.telefoon}
            onChange={(e) => zet("telefoon")(e.target.value)}
            aria-invalid={fouten.telefoon ? true : undefined}
            aria-describedby={`bereikbaar-uitleg${fouten.telefoon ? " telefoon-fout" : ""}`}
            className={`${veldKlassen} ${fouten.telefoon ? foutKlassen : ""}`}
          />
          <Fout id="telefoon-fout" tekst={fouten.telefoon} />
        </div>

        <p id="bereikbaar-uitleg" className="-mt-1 text-sm text-muted sm:col-span-2">
          Vul minimaal een van beide in, zodat ik u kan antwoorden.
        </p>

        <div>
          <label htmlFor="niveau" className="font-medium text-navy">
            Schoolniveau
          </label>
          <select
            id="niveau"
            name="niveau"
            value={invoer.niveau}
            onChange={(e) => zet("niveau")(e.target.value)}
            className={veldKlassen}
          >
            <option value="">Kies een niveau</option>
            {NIVEAUS.map((optie) => (
              <option key={optie} value={optie}>
                {optie}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="leerjaar" className="font-medium text-navy">
            Leerjaar
          </label>
          <select
            id="leerjaar"
            name="leerjaar"
            value={invoer.leerjaar}
            onChange={(e) => zet("leerjaar")(e.target.value)}
            className={veldKlassen}
          >
            <option value="">Kies een leerjaar</option>
            {LEERJAREN.map((optie) => (
              <option key={optie} value={optie}>
                {optie}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="dienst" className="font-medium text-navy">
            Waar heeft u interesse in?
          </label>
          <select
            id="dienst"
            name="dienst"
            value={invoer.dienst}
            onChange={(e) => zet("dienst")(e.target.value)}
            className={veldKlassen}
          >
            <option value="">Kies een dienst</option>
            {DIENSTEN.map((optie) => (
              <option key={optie} value={optie}>
                {optie}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="vak" className="font-medium text-navy">
            Om welk vak gaat het?
          </label>
          <select
            id="vak"
            name="vak"
            value={invoer.vak}
            onChange={(e) => zet("vak")(e.target.value)}
            className={veldKlassen}
          >
            <option value="">Kies een vak</option>
            {VAKKEN.map((optie) => (
              <option key={optie} value={optie}>
                {optie}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="font-medium text-navy">
            Voorkeur voor de begeleiding
          </legend>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
            {VORMEN.map((optie) => (
              <label
                key={optie}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 text-slate-700"
              >
                <input
                  type="radio"
                  name="vorm"
                  value={optie}
                  checked={invoer.vorm === optie}
                  onChange={(e) => zet("vorm")(e.target.value)}
                  className="h-5 w-5 accent-navy"
                />
                {optie}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="bericht" className="font-medium text-navy">
            Waar loopt uw kind tegenaan? <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="bericht"
            name="bericht"
            rows={6}
            required
            value={invoer.bericht}
            onChange={(e) => zet("bericht")(e.target.value)}
            aria-invalid={fouten.bericht ? true : undefined}
            aria-describedby={`bericht-hulp${fouten.bericht ? " bericht-fout" : ""}`}
            className={`${veldKlassen} ${fouten.bericht ? foutKlassen : ""}`}
          />
          <p id="bericht-hulp" className="mt-2 text-sm text-muted">
            Bijvoorbeeld: welk cijfer staat er nu, wanneer is de volgende toets en
            wat is er al geprobeerd. Een paar zinnen is genoeg.
          </p>
          <Fout id="bericht-fout" tekst={fouten.bericht} />
        </div>
      </div>

      {/* Spamval: onzichtbaar voor bezoekers en voor schermlezers. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="website">Laat dit veld leeg</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <p className="text-sm leading-relaxed text-muted">
        <span aria-hidden="true">*</span> Verplicht. Ik gebruik uw gegevens
        uitsluitend om te reageren op uw bericht en om de begeleiding af te
        stemmen. Ze worden niet gedeeld met anderen. Lees hoe ik daarmee omga in de{" "}
        <a
          href="/privacyverklaring"
          className="font-medium text-navy underline underline-offset-4"
        >
          privacyverklaring
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "verzenden"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-navy px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "verzenden" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Bezig met versturen…
          </>
        ) : (
          "Verstuur mijn bericht"
        )}
      </button>
      <p aria-live="polite" className="sr-only">
        {status === "verzenden" ? "Het bericht wordt verstuurd." : ""}
      </p>
    </form>
  );
}
