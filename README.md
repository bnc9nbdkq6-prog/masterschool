# MasterSchool — website

De website van MasterSchool: bijles en studiebegeleiding voor havo- en
vwo-leerlingen in Monnickendam, de regio Waterland en online.

- **Framework:** Next.js 16 (App Router) met TypeScript
- **Styling:** Tailwind CSS v4
- **Iconen:** [Lucide](https://lucide.dev) (ISC-licentie)
- **Lettertype:** Inter, meegebouwd en vanaf het eigen domein geserveerd
- **Hosting:** Vercel, code in GitHub
- **E-mail vanuit het formulier:** [Resend](https://resend.com)

---

## Snel starten

```bash
npm install
cp .env.example .env.local   # vul RESEND_API_KEY in
npm run dev
```

De website draait daarna op <http://localhost:3000>.

> Node.js 22 of nieuwer is nodig. Op deze Mac staat Node in `~/.local/node/bin`
> en is die map via `~/.zprofile` aan het `PATH` toegevoegd. Controleer met
> `node -v`.

Beschikbare commando's:

| Commando | Wat het doet |
| --- | --- |
| `npm run dev` | Ontwikkelserver met automatisch herladen |
| `npm run build` | Productiebuild (draait ook de TypeScript-controle) |
| `npm start` | Draait de productiebuild lokaal |
| `npx eslint .` | Controleert de code op fouten |
| `npx tsc --noEmit` | Alleen de TypeScript-controle |

---

## Omgevingsvariabelen

Zet deze in `.env.local` (lokaal) en in Vercel onder **Settings →
Environment Variables**. `.env.local` staat in `.gitignore` en hoort nooit in
GitHub.

| Variabele | Verplicht | Waarvoor |
| --- | --- | --- |
| `RESEND_API_KEY` | ja | Zonder deze sleutel kan het contactformulier geen e-mail versturen. Gratis aan te maken op resend.com. |
| `NEXT_PUBLIC_SITE_URL` | ja | De definitieve URL zonder slash aan het eind. Wordt gebruikt voor canonical-links, de sitemap en de deelafbeelding. |
| `CONTACT_TO` | nee | Het adres waar aanvragen binnenkomen. Standaard `bijlesvanoskar@gmail.com`. |
| `CONTACT_FROM` | nee | De afzender. Standaard `MasterSchool <onboarding@resend.dev>`. Pas dit aan zodra er een eigen domein bij Resend is geverifieerd. |
| `CONTACT_DEV_LOG` | nee | Alleen lokaal: `true` toont een formulierbericht in de terminal in plaats van het te versturen. Werkt nooit in productie. Zet dit **niet** in Vercel. |

---

## Naar GitHub en Vercel

**Eenmalig, naar GitHub:**

```bash
git remote add origin https://github.com/<gebruikersnaam>/masterschool.git
git push -u origin main
```

**Eenmalig, naar Vercel:**

1. Ga naar <https://vercel.com/new> en kies de GitHub-repository.
2. Framework wordt automatisch herkend als Next.js. Laat de bouwinstellingen
   ongewijzigd.
3. Voeg onder **Environment Variables** in ieder geval `RESEND_API_KEY` en
   `NEXT_PUBLIC_SITE_URL` toe.
4. Klik op **Deploy**.

Daarna geldt: **elke push naar `main` gaat automatisch live**. Een push naar een
andere branch of een pull request krijgt een eigen preview-URL.

**Een eigen domein koppelen:** in Vercel onder **Settings → Domains**. Werk
daarna `NEXT_PUBLIC_SITE_URL` bij en zet het domein ook in Resend onder
*Domains*, zodat de e-mail van het contactformulier vanaf het eigen domein kan
worden verstuurd (`CONTACT_FROM`).

---

## Zelf teksten, prijzen en reviews aanpassen

Alle inhoud staat los van de opmaak, in vier bestanden in `src/content/`. Wijzig
daar de tekst, sla op, commit en push — Vercel zet de wijziging binnen een paar
minuten live.

| Wat u wilt wijzigen | Bestand |
| --- | --- |
| Telefoonnummer, e-mail, WhatsApp-link, adres, slogan, reactietijd, regio, vakken, menu | `src/content/site.ts` |
| Prijzen | `src/content/site.ts`, onderdeel `prijzen` |
| Dienstomschrijvingen en de lijst "binnenkort beschikbaar" | `src/content/diensten.ts` |
| Reviews, cases en eigen examenresultaten | `src/content/bewijs.ts` |
| Veelgestelde vragen | `src/content/faq.ts` |

Een paar praktische regels:

- **Prijs wijzigen:** pas `prijzen.bijlesPerUur` en `prijzen.bijlesPerUurLabel`
  samen aan. Zoek daarna met `grep -rn "€25" src/` of het bedrag nog ergens
  letterlijk in een tekst staat.
- **Review toevoegen:** kopieer een bestaand blok in `reviews`, geef het een
  eigen `id` en zet `toestemming: true` alleen wanneer u de toestemming
  aantoonbaar heeft (bijvoorbeeld een WhatsApp-bericht dat u bewaart).
- **Resultaat toevoegen:** vul in `cases` altijd vak, beginsituatie, aanpak,
  eigen inzet van de leerling en periode in. Een cijfer zonder context hoort
  niet op de site.
- **Vraag toevoegen aan de FAQ:** zet `opHome: true` als de vraag ook in de
  compacte FAQ op de homepage moet komen.
- **Dienst live zetten:** verplaats hem van `toekomstigeDiensten` naar
  `diensten` zodra prijs, inhoud, duur en voorwaarden definitief zijn.

Na elke wijziging is `npm run build` de snelste controle: die faalt bij een
typefout in de code.

---

## Structuur

```
src/
  app/                     Pagina's (App Router)
    page.tsx               Home
    diensten/              Overzicht + detailpagina's
    werkwijze/  resultaten/  over-mij/
    veelgestelde-vragen/  contact/
    privacyverklaring/  algemene-voorwaarden/
    api/contact/route.ts   Verwerkt het contactformulier
    icon.tsx               Favicon (wordt gegenereerd)
    opengraph-image.tsx    Deelafbeelding (wordt gegenereerd)
    sitemap.ts  robots.ts  not-found.tsx
    globals.css            Kleuren, typografie en animatie-instellingen
  components/              Herbruikbare onderdelen
  content/                 Alle teksten en gegevens
  lib/contact.ts           Validatieregels van het formulier
public/img/                Foto's en logo
```

---

## Techniek en keuzes

- **Geen cookies, geen analytics, geen trackers.** Daarom is er ook geen
  cookiebanner nodig. Wordt er later toch gemeten, dan moet de
  privacyverklaring worden aangepast en is toestemming mogelijk vereist.
- **Het lettertype wordt meegebouwd** en vanaf het eigen domein geserveerd, dus
  er gaat geen verzoek naar Google.
- **Alle pagina's zijn statisch** op `/api/contact` na. Dat maakt de site snel
  en goedkoop te hosten.
- **Animaties** zijn beperkt tot subtiel infaden bij scrollen. Ze worden
  overgeslagen wanneer de bezoeker in het systeem minder beweging heeft
  ingesteld, en de inhoud is ook zonder JavaScript volledig leesbaar.
- **Het contactformulier** valideert in de browser én op de server, heeft een
  onzichtbare spamval en staat maximaal vijf inzendingen per uur per IP-adres
  toe. Lukt versturen niet, dan wijst de foutmelding naar WhatsApp.

---

## Beeldmateriaal en licenties

| Bestand | Wat | Herkomst | Gebruik |
| --- | --- | --- | --- |
| `public/img/oskar-portret.jpg` | Portretfoto | Aangeleverd door Oskar | Hero op de homepage |
| `public/img/oskar-diploma.jpg` | Diploma-uitreiking | Aangeleverd door Oskar | Over mij |
| `public/img/oskar-oorkonde-wiskunde.jpg` | Oorkonde "Een 10 voor wiskunde" | Aangeleverd door Oskar | Homepage |
| `public/img/logo-vierkant.png` | Logo | Aangeleverd door Oskar | Reservebestand, niet in gebruik op de site |

Het beeldmerk in de navigatie, de favicon en de deelafbeelding zijn als SVG
nagetekend naar het aangeleverde logo, zodat ze scherp blijven op elk scherm.
Iconen komen uit Lucide (ISC-licentie, vrij te gebruiken). Inter staat onder de
SIL Open Font License. Er is geen stockfotografie gebruikt.
