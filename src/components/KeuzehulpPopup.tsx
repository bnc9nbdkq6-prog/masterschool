"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, X } from "lucide-react";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./Icons";

type Rol =
  | "Ik ben leerling"
  | "Ik ben ouder/verzorger"
  | "Ik ben docent"
  | "Ik oriënteer me";
type Hulpvraag =
  | "Ik zoek hulp bij één vak"
  | "Eén vak staat onvoldoende en de volgende toets komt eraan"
  | "Leren, plannen of motivatie gaat lastig"
  | "Meerdere vakken lopen vast, maar overgaan is nog niet direct onzeker"
  | "Overgaan is onzeker door meerdere vakken"
  | "Ik doe eindexamen en zoek structuur in een kleine groep"
  | "Ik doe eindexamen en zakken dreigt"
  | "Ik weet nog niet welke hulp past";
type Kanaal = "WhatsApp" | "E-mail";

type Antwoorden = {
  rol: Rol | "";
  hulpvraag: Hulpvraag | "";
  niveau: string;
  leerjaar: string;
  vak: string;
  naam: string;
  email: string;
  telefoon: string;
  kanaal: Kanaal;
};

const leeg: Antwoorden = {
  rol: "",
  hulpvraag: "",
  niveau: "",
  leerjaar: "",
  vak: "",
  naam: "",
  email: "",
  telefoon: "",
  kanaal: "WhatsApp",
};

const rollen: Rol[] = [
  "Ik ben leerling",
  "Ik ben ouder/verzorger",
  "Ik ben docent",
  "Ik oriënteer me",
];

const hulpvragen: Hulpvraag[] = [
  "Ik zoek hulp bij één vak",
  "Eén vak staat onvoldoende en de volgende toets komt eraan",
  "Leren, plannen of motivatie gaat lastig",
  "Meerdere vakken lopen vast, maar overgaan is nog niet direct onzeker",
  "Overgaan is onzeker door meerdere vakken",
  "Ik doe eindexamen en zoek structuur in een kleine groep",
  "Ik doe eindexamen en zakken dreigt",
  "Ik weet nog niet welke hulp past",
];

const opties = {
  niveau: ["Havo", "Vwo", "Mavo / vmbo-t", "Anders / weet ik niet"],
  leerjaar: ["1", "2", "3", "4", "5", "6", "Anders / weet ik niet"],
  vak: [
    "Wiskunde A",
    "Economie",
    "Bedrijfseconomie",
    "Geschiedenis",
    "Meerdere vakken",
    "Anders / weet ik niet",
  ],
};

const veldKlassen =
  "mt-2 w-full rounded-[10px] border border-line-strong bg-white px-4 py-3 text-base text-ink focus:border-navy";

function adviesVoor(antwoorden: Antwoorden) {
  if (antwoorden.hulpvraag === "Ik zoek hulp bij één vak") {
    return {
      dienst: "Bijles",
      href: "/diensten/bijles",
      titel: "Aanbevolen dienst: Bijles",
      tekst:
        "Bijles past wanneer één vak blijft haken en persoonlijke uitleg en gerichte oefening nodig zijn.",
      prijs: "€32 per uur, zonder abonnement",
    };
  }

  if (
    antwoorden.hulpvraag ===
    "Eén vak staat onvoldoende en de volgende toets komt eraan"
  ) {
    return {
      dienst: "De Garantiesprint",
      href: "/diensten/garantiesprint",
      titel: "Aanbevolen dienst: De Garantiesprint",
      tekst:
        "Deze vierweekse begeleiding is bedoeld voor één vak dat onvoldoende staat en snel omhoog moet: een intake en vier gerichte sessies.",
      prijs: "€249 per vak, inclusief btw",
    };
  }

  if (
    antwoorden.hulpvraag === "Leren, plannen of motivatie gaat lastig" ||
    antwoorden.hulpvraag ===
      "Meerdere vakken lopen vast, maar overgaan is nog niet direct onzeker"
  ) {
    return {
      dienst: "MasterSchool Leersysteem",
      href: "/diensten/leersysteem",
      titel: "Aanbevolen dienst: MasterSchool Leersysteem",
      tekst:
        "Dit traject richt zich op zelfstandig leren, plannen en een aanpak die werkt voor het hele vakkenpakket.",
      prijs: "€349 eenmalig, inclusief btw · zes sessies",
    };
  }

  if (antwoorden.hulpvraag === "Overgaan is onzeker door meerdere vakken") {
    return {
      dienst: "MasterSchool Overgangsboost",
      href: "/diensten/overgangsboost",
      titel: "Aanbevolen dienst: MasterSchool Overgangsboost",
      tekst:
        "Dit intensieve traject is bedoeld voor leerlingen bij wie overgaan echt spannend wordt en meerdere vakken aandacht vragen.",
      prijs: "€1.290 tot het einde van het schooljaar, inclusief btw",
    };
  }

  if (
    antwoorden.hulpvraag ===
    "Ik doe eindexamen en zoek structuur in een kleine groep"
  ) {
    return {
      dienst: "MasterSchool Examen Squad",
      href: "/diensten/examen-squad",
      titel: "Aanbevolen dienst: MasterSchool Examen Squad",
      tekst:
        "Een examentraject met structuur en begeleiding in een vast groepje van maximaal vier leerlingen.",
      prijs: "€595 per leerling, inclusief btw",
    };
  }

  if (antwoorden.hulpvraag === "Ik doe eindexamen en zakken dreigt") {
    return {
      dienst: "MasterSchool Examen Doorbraak",
      href: "/diensten/examen-doorbraak",
      titel: "Aanbevolen dienst: MasterSchool Examen Doorbraak",
      tekst:
        "Deze intensieve één-op-één begeleiding is bedoeld voor examenkandidaten bij wie slagen onzeker is en dagelijks contact nodig kan zijn.",
      prijs: "€1.790 tot het laatste centraal examen, inclusief btw",
    };
  }

  return {
    dienst: "Bijles",
    href: "/diensten/bijles",
    titel: "Aanbevolen start: Bijles",
    tekst:
      "Omdat u nog twijfelt, is losse bijles de laagdrempeligste start: u betaalt per gegeven uur. In de gratis kennismaking bekijken we of dit ook inhoudelijk de juiste dienst is.",
    prijs: "€32 per uur, zonder abonnement",
  };
}

function maakBericht(antwoorden: Antwoorden) {
  const advies = adviesVoor(antwoorden);
  return [
    "Beste Oskar, ik heb de keuzehulp op de website ingevuld.",
    "",
    `Ik vul dit in als: ${antwoorden.rol}`,
    `Dit is mijn situatie: ${antwoorden.hulpvraag}`,
    `Niveau: ${antwoorden.niveau}`,
    `Leerjaar: ${antwoorden.leerjaar}`,
    `Vak: ${antwoorden.vak}`,
    `Mijn naam: ${antwoorden.naam}`,
    antwoorden.telefoon ? `Telefoon: ${antwoorden.telefoon}` : "",
    "",
    `De keuzehulp beveelt aan: ${advies.dienst}.`,
    "Ik hoor graag of dit passend is voor mijn situatie.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function KeuzehulpPopup() {
  const [open, setOpen] = useState(false);
  const [stap, setStap] = useState(0);
  const [antwoorden, setAntwoorden] = useState<Antwoorden>(leeg);
  const [fout, setFout] = useState("");
  const [versturen, setVersturen] = useState(false);
  const [verzonden, setVerzonden] = useState(false);
  const [berichtFout, setBerichtFout] = useState("");
  const dialoogRef = useRef<HTMLDivElement>(null);
  const advies = useMemo(() => adviesVoor(antwoorden), [antwoorden]);

  useEffect(() => {
    if (window.sessionStorage.getItem("masterschool-keuzehulp-gezien")) return;

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem("masterschool-keuzehulp-gezien", "1");
      setOpen(true);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const vorigeOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => dialoogRef.current?.focus(), 0);

    function escapeSluiten(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", escapeSluiten);
    return () => {
      document.body.style.overflow = vorigeOverflow;
      document.removeEventListener("keydown", escapeSluiten);
    };
  }, [open]);

  function sluiten() {
    setOpen(false);
  }

  function volgende() {
    const ontbreekt =
      (stap === 0 && !antwoorden.rol) ||
      (stap === 1 && !antwoorden.hulpvraag) ||
      (stap === 2 && (!antwoorden.niveau || !antwoorden.leerjaar));
    if (ontbreekt) {
      setFout("Kies een antwoord om verder te gaan.");
      return;
    }
    setFout("");
    setStap((vorige) => Math.min(vorige + 1, 3));
  }

  function terug() {
    setFout("");
    setStap((vorige) => Math.max(vorige - 1, 0));
  }

  async function verzendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBerichtFout("");
    if (!antwoorden.naam.trim()) {
      setBerichtFout("Vul uw naam in.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(antwoorden.email.trim())) {
      setBerichtFout("Vul een geldig e-mailadres in.");
      return;
    }

    setVersturen(true);
    const beschrijving = [
      `Ingevuld door: ${antwoorden.rol}`,
      `Hulpvraag: ${antwoorden.hulpvraag}`,
      `Niveau: ${antwoorden.niveau}`,
      `Leerjaar: ${antwoorden.leerjaar}`,
      `Vak: ${antwoorden.vak || "Niet ingevuld"}`,
      `Aanbevolen dienst: ${advies.dienst} — ${advies.tekst}`,
      `Prijsinformatie: ${advies.prijs}`,
    ].join("\n");

    try {
      const antwoord = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam: antwoorden.naam.trim(),
          email: antwoorden.email.trim(),
          telefoon: antwoorden.telefoon.trim(),
          niveau: antwoorden.niveau,
          leerjaar: `Leerjaar ${antwoorden.leerjaar}`,
          dienst: advies.dienst,
          vak: antwoorden.vak || "Niet ingevuld",
          vorm: "Geen voorkeur",
          bericht: beschrijving,
        }),
      });
      const data = (await antwoord.json()) as { ok: boolean; melding?: string };
      if (!antwoord.ok || !data.ok) {
        setBerichtFout(
          data.melding ?? "Versturen lukte niet. Probeer WhatsApp of e-mail.",
        );
        return;
      }
      setVerzonden(true);
    } catch {
      setBerichtFout("De verbinding lukte niet. Probeer het via WhatsApp.");
    } finally {
      setVersturen(false);
    }
  }

  const whatsappNummer = site.telefoon.replace(/\D/g, "").replace(/^0/, "31");
  const waUrl = `https://wa.me/${whatsappNummer}?text=${encodeURIComponent(
    maakBericht(antwoorden),
  )}`;

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            window.sessionStorage.setItem("masterschool-keuzehulp-gezien", "1");
          }}
          className="fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy-hover sm:right-6 sm:bottom-6"
          aria-label="Open de korte keuzehulp"
        >
          <span>Vind passende begeleiding</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-navy/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-5">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Keuzehulp sluiten"
            onClick={sluiten}
          />
          <div
            ref={dialoogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="keuzehulp-titel"
            tabIndex={-1}
            onKeyDown={(event) => {
              if (event.key !== "Tab") return;
              const items = dialoogRef.current?.querySelectorAll<HTMLElement>(
                'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]',
              );
              if (!items?.length) return;
              const eerste = items[0];
              const laatste = items[items.length - 1];
              if (event.shiftKey && document.activeElement === eerste) {
                event.preventDefault();
                laatste.focus();
              } else if (!event.shiftKey && document.activeElement === laatste) {
                event.preventDefault();
                eerste.focus();
              }
            }}
            className="relative z-10 max-h-[94dvh] w-full overflow-y-auto rounded-t-[18px] border border-line bg-white p-5 shadow-2xl sm:max-h-[90vh] sm:max-w-xl sm:rounded-[18px] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted uppercase">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  1 minuut · vrijblijvend
                </p>
                <h2
                  id="keuzehulp-titel"
                  className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl"
                >
                  Welke begeleiding past bij uw situatie?
                </h2>
              </div>
              <button
                type="button"
                onClick={sluiten}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-navy transition-colors hover:bg-offwhite"
                aria-label="Sluiten"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {!verzonden ? (
              <>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Beantwoord een paar korte vragen. U ziet meteen welke dienst
                  waarschijnlijk het beste aansluit.
                </p>
                <div className="mt-5" aria-label={`Stap ${stap + 1} van 4`}>
                  <div className="flex items-center justify-between text-xs font-medium text-muted">
                    <span>Stap {stap + 1} van 4</span>
                    <span>{[25, 50, 75, 100][stap]}%</span>
                  </div>
                  <div
                    className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"
                    role="progressbar"
                    aria-valuemin={1}
                    aria-valuemax={4}
                    aria-valuenow={stap + 1}
                    aria-label="Voortgang keuzehulp"
                  >
                    <div
                      className="h-full rounded-full bg-navy transition-all"
                      style={{ width: `${[25, 50, 75, 100][stap]}%` }}
                    />
                  </div>
                </div>

                {stap === 0 ? (
                  <fieldset className="mt-6">
                    <legend className="text-lg font-semibold text-navy">
                      Voor wie zoekt u begeleiding?
                    </legend>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {rollen.map((rol) => (
                        <KeuzeKnop
                          key={rol}
                          gekozen={antwoorden.rol === rol}
                          onClick={() => setAntwoorden({ ...antwoorden, rol })}
                        >
                          {rol}
                        </KeuzeKnop>
                      ))}
                    </div>
                  </fieldset>
                ) : null}

                {stap === 1 ? (
                  <fieldset className="mt-6">
                    <legend className="text-lg font-semibold text-navy">
                      Welke situatie past het beste?
                    </legend>
                    <div className="mt-3 grid gap-2">
                      {hulpvragen.map((hulpvraag) => (
                        <KeuzeKnop
                          key={hulpvraag}
                          gekozen={antwoorden.hulpvraag === hulpvraag}
                          onClick={() =>
                            setAntwoorden({ ...antwoorden, hulpvraag })
                          }
                        >
                          {hulpvraag}
                        </KeuzeKnop>
                      ))}
                    </div>
                  </fieldset>
                ) : null}

                {stap === 2 ? (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-semibold text-navy">
                      Over welke leerling gaat het?
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="font-medium text-navy">
                        Schoolniveau
                        <select
                          className={veldKlassen}
                          value={antwoorden.niveau}
                          onChange={(event) =>
                            setAntwoorden({
                              ...antwoorden,
                              niveau: event.target.value,
                            })
                          }
                        >
                          <option value="">Kies een niveau</option>
                          {opties.niveau.map((optie) => (
                            <option key={optie}>{optie}</option>
                          ))}
                        </select>
                      </label>
                      <label className="font-medium text-navy">
                        Leerjaar
                        <select
                          className={veldKlassen}
                          value={antwoorden.leerjaar}
                          onChange={(event) =>
                            setAntwoorden({
                              ...antwoorden,
                              leerjaar: event.target.value,
                            })
                          }
                        >
                          <option value="">Kies een leerjaar</option>
                          {opties.leerjaar.map((optie) => (
                            <option key={optie} value={optie}>
                              {optie === "Anders / weet ik niet"
                                ? optie
                                : `Leerjaar ${optie}`}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="font-medium text-navy sm:col-span-2">
                        Vak <span className="font-normal text-muted">(optioneel)</span>
                        <select
                          className={veldKlassen}
                          value={antwoorden.vak}
                          onChange={(event) =>
                            setAntwoorden({
                              ...antwoorden,
                              vak: event.target.value,
                            })
                          }
                        >
                          <option value="">Kies een vak of sla over</option>
                          {opties.vak.map((optie) => (
                            <option key={optie}>{optie}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                ) : null}

                {stap === 3 ? (
                  <div className="mt-6 space-y-5">
                    <section className="rounded-[10px] border border-line bg-offwhite p-4" aria-live="polite">
                      <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                        Mijn aanbeveling
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-navy">
                        {advies.titel}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {advies.tekst}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-navy">
                        {advies.prijs}
                      </p>
                      <Link
                        href={advies.href}
                        onClick={sluiten}
                        className="mt-3 inline-flex min-h-10 items-center gap-2 font-semibold text-navy underline underline-offset-4 hover:text-navy-hover"
                      >
                        Bekijk {advies.dienst}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </section>

                    {antwoorden.rol === "Ik oriënteer me" ? (
                      <Link
                        href="/diensten"
                        onClick={sluiten}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-line-strong px-5 py-3 font-semibold text-navy hover:bg-offwhite"
                      >
                        Bekijk alle diensten en prijzen
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : null}

                    <div>
                      <p className="font-semibold text-navy">
                        Wilt u dit samen kort bespreken?
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Ik reageer gemiddeld binnen drie uur. Het gesprek is
                        gratis en vrijblijvend.
                      </p>
                    </div>

                    <form onSubmit={verzendEmail} className="space-y-4">
                      <fieldset>
                        <legend className="text-sm font-medium text-navy">
                          Hoe neemt u het liefst contact op?
                        </legend>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {(["WhatsApp", "E-mail"] as Kanaal[]).map((kanaal) => (
                            <label
                              key={kanaal}
                              className={`flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[10px] border px-3 py-2 text-sm font-medium ${
                                antwoorden.kanaal === kanaal
                                  ? "border-navy bg-navy text-white"
                                  : "border-line-strong text-navy hover:bg-offwhite"
                              }`}
                            >
                              <input
                                type="radio"
                                name="kanaal"
                                value={kanaal}
                                checked={antwoorden.kanaal === kanaal}
                                onChange={() =>
                                  setAntwoorden({ ...antwoorden, kanaal })
                                }
                                className="sr-only"
                              />
                              {kanaal === "WhatsApp" ? (
                                <WhatsAppIcon className="h-4 w-4" />
                              ) : null}
                              {kanaal}
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <label className="text-sm font-medium text-navy">
                          Naam
                          <input
                            className={veldKlassen}
                            autoComplete="name"
                            value={antwoorden.naam}
                            onChange={(event) =>
                              setAntwoorden({
                                ...antwoorden,
                                naam: event.target.value,
                              })
                            }
                            required
                          />
                        </label>
                        {antwoorden.kanaal === "E-mail" ? (
                          <label className="text-sm font-medium text-navy">
                            E-mailadres
                            <input
                              className={veldKlassen}
                              type="email"
                              autoComplete="email"
                              value={antwoorden.email}
                              onChange={(event) =>
                                setAntwoorden({
                                  ...antwoorden,
                                  email: event.target.value,
                                })
                              }
                              required
                            />
                          </label>
                        ) : (
                          <label className="text-sm font-medium text-navy">
                            Telefoonnummer <span className="font-normal text-muted">(optioneel)</span>
                            <input
                              className={veldKlassen}
                              type="tel"
                              autoComplete="tel"
                              value={antwoorden.telefoon}
                              onChange={(event) =>
                                setAntwoorden({
                                  ...antwoorden,
                                  telefoon: event.target.value,
                                })
                              }
                            />
                          </label>
                        )}
                      </div>
                      {berichtFout ? (
                        <p role="alert" className="text-sm text-red-800">
                          {berichtFout}
                        </p>
                      ) : null}

                      {antwoorden.kanaal === "WhatsApp" ? (
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-navy px-5 py-3 font-semibold text-white transition-colors hover:bg-navy-hover"
                        >
                          <WhatsAppIcon className="h-5 w-5" />
                          Open WhatsApp met mijn antwoorden
                        </a>
                      ) : (
                        <button
                          type="submit"
                          disabled={versturen}
                          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-navy px-5 py-3 font-semibold text-white transition-colors hover:bg-navy-hover disabled:opacity-60"
                        >
                          {versturen ? "Bericht versturen…" : "Stuur mijn antwoorden per e-mail"}
                          {!versturen ? (
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          ) : null}
                        </button>
                      )}
                    </form>
                    <p className="text-xs leading-relaxed text-muted">
                      Uw antwoorden worden pas verstuurd als u op de knop drukt.
                      Ik gebruik ze alleen om op uw vraag te reageren. Lees de{" "}
                      <Link
                        href="/privacyverklaring"
                        onClick={sluiten}
                        className="font-medium text-navy underline underline-offset-2"
                      >
                        privacyverklaring
                      </Link>
                      .
                    </p>
                    {antwoorden.rol === "Ik ben leerling" ? (
                      <p className="text-xs leading-relaxed text-muted">
                        Is de leerling jonger dan 16? Vraag dan een ouder of
                        verzorger om de antwoorden samen te bekijken en te
                        versturen.
                      </p>
                    ) : null}
                  </div>
                ) : null}

                {fout ? (
                  <p role="alert" className="mt-3 text-sm text-red-800">
                    {fout}
                  </p>
                ) : null}

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
                  {stap > 0 ? (
                    <button
                      type="button"
                      onClick={terug}
                      className="inline-flex min-h-11 items-center gap-2 rounded-[10px] px-3 font-semibold text-navy hover:bg-offwhite"
                    >
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                      Terug
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={sluiten}
                      className="min-h-11 rounded-[10px] px-3 text-sm text-muted underline underline-offset-4 hover:text-navy"
                    >
                      Later
                    </button>
                  )}
                  {stap < 3 ? (
                    <button
                      type="button"
                      onClick={volgende}
                      className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-navy px-5 py-2.5 font-semibold text-white hover:bg-navy-hover"
                    >
                      Verder
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : null}
                </div>
              </>
            ) : (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-navy" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-bold text-navy">
                  Dank u, uw bericht is verstuurd
                </h3>
                <p className="mt-3 text-slate-600">
                  Ik reageer {site.reactietijd}. U kunt dit venster nu sluiten.
                </p>
                <button
                  type="button"
                  onClick={sluiten}
                  className="mt-6 min-h-12 rounded-[10px] bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-hover"
                >
                  Sluiten
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function KeuzeKnop({
  children,
  gekozen,
  onClick,
}: {
  children: React.ReactNode;
  gekozen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={gekozen}
      onClick={onClick}
      className={`flex min-h-12 items-center justify-between gap-3 rounded-[10px] border px-4 py-3 text-left font-medium transition-colors ${
        gekozen
          ? "border-navy bg-offwhite text-navy"
          : "border-line-strong text-slate-700 hover:border-navy hover:bg-offwhite"
      }`}
    >
      <span>{children}</span>
      {gekozen ? (
        <CheckCircle2
          className="h-5 w-5 shrink-0 text-navy"
          aria-hidden="true"
        />
      ) : null}
    </button>
  );
}
