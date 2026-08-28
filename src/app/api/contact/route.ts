import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  legeInvoer,
  valideer,
  VELD_LABELS,
  type ContactInvoer,
} from "@/lib/contact";
import { site } from "@/content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Eenvoudige snelheidsbegrenzing per IP-adres. Houdt geen gegevens vast
 * na een herstart en is bedoeld om spamgolven af te remmen, niet als
 * volwaardige beveiliging.
 */
const VENSTER_MS = 60 * 60 * 1000;
const MAX_PER_VENSTER = 5;
const verzoeken = new Map<string, number[]>();

function magVerzenden(ip: string): boolean {
  const nu = Date.now();
  const recent = (verzoeken.get(ip) ?? []).filter((t) => nu - t < VENSTER_MS);
  if (recent.length >= MAX_PER_VENSTER) {
    verzoeken.set(ip, recent);
    return false;
  }
  recent.push(nu);
  verzoeken.set(ip, recent);
  // Voorkomt dat de map onbeperkt groeit.
  if (verzoeken.size > 500) {
    for (const [sleutel, tijden] of verzoeken) {
      if (tijden.every((t) => nu - t >= VENSTER_MS)) verzoeken.delete(sleutel);
    }
  }
  return true;
}

function tekst(waarde: unknown): string {
  return typeof waarde === "string" ? waarde.trim() : "";
}

/** Voorkomt dat inhoud uit het formulier als HTML wordt uitgevoerd. */
function escape(waarde: string): string {
  return waarde
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let ruw: Record<string, unknown>;
  try {
    ruw = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, melding: "Het bericht kon niet worden gelezen." },
      { status: 400 },
    );
  }

  // Honeypot: alleen geautomatiseerde invullers vullen dit veld.
  if (tekst(ruw.website)) {
    return NextResponse.json({ ok: true });
  }

  const invoer: ContactInvoer = {
    ...legeInvoer,
    naam: tekst(ruw.naam),
    email: tekst(ruw.email),
    telefoon: tekst(ruw.telefoon),
    leerjaar: tekst(ruw.leerjaar),
    niveau: tekst(ruw.niveau),
    dienst: tekst(ruw.dienst),
    vak: tekst(ruw.vak),
    vorm: tekst(ruw.vorm),
    bericht: tekst(ruw.bericht),
  };

  const fouten = valideer(invoer);
  if (Object.keys(fouten).length > 0) {
    return NextResponse.json({ ok: false, fouten }, { status: 422 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "onbekend";
  if (!magVerzenden(ip)) {
    return NextResponse.json(
      {
        ok: false,
        melding:
          "Er zijn kort achter elkaar veel berichten verstuurd. Probeer het over een uur nog eens, of stuur een appje via WhatsApp.",
      },
      { status: 429 },
    );
  }

  const apiSleutel = process.env.RESEND_API_KEY;
  const afzender = process.env.CONTACT_FROM ?? "MasterSchool <onboarding@resend.dev>";
  const ontvanger = process.env.CONTACT_TO ?? site.email;

  // Alleen tijdens lokale ontwikkeling: zonder API-sleutel het bericht in de
  // terminal tonen in plaats van versturen, zodat het formulier te testen is.
  // Werkt nooit in productie.
  if (
    !apiSleutel &&
    process.env.NODE_ENV !== "production" &&
    process.env.CONTACT_DEV_LOG === "true"
  ) {
    console.log("[contactformulier — alleen lokaal, niet verstuurd]", invoer);
    return NextResponse.json({ ok: true });
  }

  if (!apiSleutel) {
    console.error(
      "RESEND_API_KEY ontbreekt. Het contactformulier kan geen e-mail versturen.",
    );
    return NextResponse.json(
      {
        ok: false,
        melding:
          "Het versturen lukt op dit moment niet door een technische storing. Stuur uw bericht alstublieft via WhatsApp of mail naar " +
          site.email +
          ".",
      },
      { status: 503 },
    );
  }

  const velden: (keyof ContactInvoer)[] = [
    "naam",
    "email",
    "telefoon",
    "leerjaar",
    "niveau",
    "dienst",
    "vak",
    "vorm",
  ];

  const regels = velden
    .filter((veld) => invoer[veld])
    .map((veld) => `${VELD_LABELS[veld]}: ${invoer[veld]}`);

  const platteTekst = [
    "Nieuw bericht via het contactformulier op de MasterSchool-website.",
    "",
    ...regels,
    "",
    "Hulpvraag:",
    invoer.bericht,
  ].join("\n");

  const html = [
    "<h2>Nieuw bericht via het contactformulier</h2>",
    "<ul>",
    ...velden
      .filter((veld) => invoer[veld])
      .map(
        (veld) =>
          `<li><strong>${escape(VELD_LABELS[veld])}:</strong> ${escape(invoer[veld])}</li>`,
      ),
    "</ul>",
    "<h3>Hulpvraag</h3>",
    `<p>${escape(invoer.bericht).replace(/\n/g, "<br>")}</p>`,
  ].join("");

  try {
    const resend = new Resend(apiSleutel);
    const { error } = await resend.emails.send({
      from: afzender,
      to: [ontvanger],
      subject: `Nieuwe aanvraag via de website — ${invoer.naam}`,
      text: platteTekst,
      html,
      ...(invoer.email ? { replyTo: invoer.email } : {}),
    });

    if (error) {
      console.error("Verzenden via Resend mislukt:", error);
      return NextResponse.json(
        {
          ok: false,
          melding:
            "Het versturen lukte niet. Probeer het nog eens, of stuur een appje via WhatsApp.",
        },
        { status: 502 },
      );
    }
  } catch (fout) {
    console.error("Onverwachte fout bij verzenden:", fout);
    return NextResponse.json(
      {
        ok: false,
        melding:
          "Het versturen lukte niet. Probeer het nog eens, of stuur een appje via WhatsApp.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
