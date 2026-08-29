# Opleverdocument — MasterSchool-website

Datum: 28 augustus 2026
Opgeleverd door: Claude (Anthropic), in opdracht van Oskar van Zadelhoff
Versie: 1.1 — tekstronde verwerkt: scherpere pijnsectie, verkopender
Leersysteem-pagina met de resultaatafspraak bovenaan, en de kleine correcties
van Oskar

Dit document hoort bij de opleverchecklist. Het beschrijft wat er is gebouwd,
wat er is getest, wat er bewust is uitgesteld en welke punten nog een besluit of
actie van Oskar vragen.

---

## 1. Wat er is opgeleverd

Een complete, werkende website van elf pagina's:

| Pagina | Adres |
| --- | --- |
| Home | `/` |
| Diensten | `/diensten` |
| Bijles | `/diensten/bijles` |
| MasterSchool Leersysteem | `/diensten/leersysteem` |
| Werkwijze | `/werkwijze` |
| Resultaten en reviews | `/resultaten` |
| Over mij | `/over-mij` |
| Veelgestelde vragen | `/veelgestelde-vragen` |
| Contact | `/contact` |
| Privacyverklaring | `/privacyverklaring` |
| Algemene voorwaarden | `/algemene-voorwaarden` |

Plus een 404-pagina, een `sitemap.xml`, een `robots.txt`, een favicon en een
deelafbeelding voor sociale media.

**Code:** `~/Projects/masterschool`, git-repository met één commit op `main`.
**Lokaal starten:** zie `README.md`. Kort: `npm install` en `npm run dev`.

### Live zetten

De website staat nog niet online — daar zijn een GitHub-account en een
Vercel-account voor nodig die alleen Oskar kan koppelen. Het stappenplan staat
in `README.md` onder *Naar GitHub en Vercel*. Zodra dat is gedaan, is er een
live URL en krijgt elke pull request automatisch een eigen preview-URL.

---

## 2. Hosting, deployment en omgevingsvariabelen

| Onderdeel | Keuze |
| --- | --- |
| Code | GitHub |
| Hosting | Vercel (gratis Hobby-plan volstaat) |
| Framework | Next.js 16, App Router, TypeScript |
| Bouwcommando | `npm run build` (standaardinstelling van Vercel) |
| Deployen | Automatisch bij elke push naar `main` |
| Domein | Nog niet gekozen; koppelen via Vercel → Settings → Domains |

**Omgevingsvariabelen** (in Vercel onder Settings → Environment Variables):

| Variabele | Verplicht | Waarde |
| --- | --- | --- |
| `RESEND_API_KEY` | ja | Aan te maken op resend.com. Zonder deze sleutel kan het contactformulier geen e-mail versturen. |
| `NEXT_PUBLIC_SITE_URL` | ja | De definitieve URL, zonder slash aan het eind. |
| `CONTACT_TO` | nee | Standaard `bijlesvanoskar@gmail.com`. |
| `CONTACT_FROM` | nee | Standaard `MasterSchool <onboarding@resend.dev>`. Pas aan zodra een eigen domein bij Resend is geverifieerd. |
| `CONTACT_DEV_LOG` | nee | Uitsluitend lokaal. Niet in Vercel zetten. |

---

## 3. Gebruikte externe diensten

| Dienst | Waarvoor | Kosten |
| --- | --- | --- |
| GitHub | Opslag van de code | Gratis |
| Vercel | Hosting en automatisch deployen | Gratis (Hobby) |
| Resend | Verstuurt het contactformulier als e-mail | Gratis tot 3.000 e-mails per maand |
| Google (Gmail) | De mailbox waar aanvragen binnenkomen | Bestaand |
| Meta (WhatsApp) | De WhatsApp-link, alleen wanneer een bezoeker die zelf gebruikt | Gratis |

Er is **geen** analytics, **geen** tracking, **geen** cookiebanner en er worden
**geen** externe lettertypen of scripts geladen. Gemeten op de productiebuild
gaat er geen enkel verzoek naar een ander domein dan de website zelf. Daarom is
er ook geen toestemming voor cookies nodig.

---

## 4. Beeldmateriaal, lettertypen, iconen en licenties

| Bestand | Wat | Herkomst | Waar in gebruik |
| --- | --- | --- | --- |
| `oskar-portret.jpg` | Portretfoto (350 × 468) | Aangeleverd | Hero op de homepage |
| `oskar-diploma.jpg` | Diploma-uitreiking (613 × 1000) | Aangeleverd | Over mij |
| `oskar-oorkonde-wiskunde.jpg` | Oorkonde "Een 10 voor wiskunde" (825 × 1100) | Aangeleverd, rechtgezet | Homepage |
| `logo-vierkant.png` | Logo (512 × 512) | Aangeleverd | Reservebestand, niet in gebruik |

Alle foto's zijn omgezet naar JPEG, verkleind, gecomprimeerd en voorzien van een
beschrijvende alt-tekst. Er is geen stockfotografie gebruikt.

Het beeldmerk in de navigatie, de favicon en de deelafbeelding zijn als SVG
nagetekend naar het aangeleverde logo, zodat ze op elk scherm scherp blijven.

- **Lettertype:** Inter, SIL Open Font License, meegebouwd en vanaf het eigen
  domein geserveerd.
- **Iconen:** Lucide, ISC-licentie, vrij te gebruiken.

**De aangeleverde banner is niet gebruikt.** Daarop staat de tekst *"Leer
slimmer. Presteer beter."*, terwijl de definitieve kernzin *"Meer grip op
school. Minder stress."* is. Twee verschillende slogans naast elkaar zou
verwarrend zijn. De banner kan alsnog worden ingezet zodra hij is bijgewerkt.

---

## 5. Testverslag

Alle tests zijn uitgevoerd op de productiebuild (`npm run build` gevolgd door
`npm start`).

### Schermformaten

| Breedte | Resultaat |
| --- | --- |
| 320 px (kleine telefoon) | Geen horizontaal scrollen op alle elf pagina's, ook bij een tekstinstelling van 200% |
| 390 px (moderne telefoon) | Geen horizontaal scrollen; menu, formulier en knoppen werken |
| 768 px (tablet) | Geen horizontaal scrollen |
| 1280 px (desktop) | Volledige indeling, alle secties gecontroleerd |

### Formulier

| Test | Resultaat |
| --- | --- |
| Leeg versturen | Foutmeldingen per veld, samenvatting bovenaan, focus springt naar het eerste ontbrekende veld |
| Alleen naam ingevuld | Melding "vul een e-mailadres of telefoonnummer in" bij beide velden |
| Ongeldig e-mailadres | Duidelijke melding |
| Te kort bericht | Duidelijke melding |
| Volledig ingevuld | Bevestigingsscherm met vervolgstap en WhatsApp-knop |
| Server­validatie los getest | Geeft HTTP 422 met dezelfde meldingen |
| Spamval (verborgen veld) | Bericht wordt stil genegeerd |
| Snelheidsbegrenzing | Vanaf de zesde inzending per uur per IP-adres volgt HTTP 429 met een verwijzing naar WhatsApp |
| Storing bij de e-maildienst | Foutmelding met een directe WhatsApp-link als alternatief |

### Links en techniek

- Alle elf pagina's geven HTTP 200; een onbekend adres geeft netjes 404.
- Elke pagina heeft precies één `h1` en een koppenstructuur zonder sprongen.
- Elke pagina heeft een eigen title, meta description en canonical-URL.
- De WhatsApp-link `wa.me/message/CZG5BQHETJ6FI1` is gecontroleerd en leidt naar
  de juiste WhatsApp-pagina.
- Telefoonnummer, e-mailadres en WhatsApp staan op elke pagina.
- `sitemap.xml`, `robots.txt`, favicon en deelafbeelding werken.
- Geen console-fouten, geen ontbrekende bestanden, geen dode links.
- Geen kwetsbaarheden in de gebruikte pakketten (`npm audit`: 0).
- TypeScript en ESLint geven geen enkele melding.

### Snelheid

Gemeten op de productiebuild: 12 verzoeken, 234 kB in totaal, alles vanaf één
domein. De pagina's worden vooraf gebouwd en zijn statisch, alleen het
formulier draait op de server.

### Toegankelijkheid (WCAG 2.1 AA)

| Punt | Resultaat |
| --- | --- |
| Kleurcontrast tekst | Automatisch gecontroleerd op alle pagina's: alles haalt de norm |
| Contrast van randen | Invoervelden en omlijnde knoppen hebben een rand met minimaal 3:1 contrast |
| Toetsenbordbediening | Alle 46 interactieve elementen op de homepage bereikbaar |
| Zichtbare focus | Duidelijke focusrand van 3 px, ook op donkere achtergrond |
| Sla navigatie over | Werkt en wordt zichtbaar bij focus |
| Formulierlabels | Elk veld heeft een gekoppeld label; fouten zijn met `aria-describedby` gekoppeld |
| Alt-teksten | Alle afbeeldingen hebben een beschrijvende alt-tekst; decoratieve iconen zijn verborgen voor schermlezers |
| Grotere tekst | Getest tot 200%: geen horizontaal scrollen, de navigatie wordt netjes over twee regels verdeeld |
| Minder beweging | Animaties worden overgeslagen wanneer de bezoeker dat heeft ingesteld |
| Zonder JavaScript | Alle inhoud blijft leesbaar; de FAQ werkt met `<details>` |
| Informatie via kleur | Geen enkele boodschap hangt uitsluitend van kleur af |

**Wat niet is getest:** de website is gecontroleerd in een Chromium-browser,
waarmee Chrome en Edge zijn afgedekt. Safari en Firefox zijn niet direct
getest, omdat die in deze omgeving niet te bedienen waren. De code gebruikt
uitsluitend technieken die al jaren in alle moderne browsers werken, en waar
een nieuwere techniek wordt gebruikt (bijvoorbeeld het uitvullen van koppen)
valt die netjes terug op normaal gedrag. Een korte eigen controle in Safari op
iPhone en in Firefox is toch aan te raden vóór livegang.

---

## 6. Bewust uitgesteld

Deze onderdelen zijn in overleg met de vragenlijst buiten versie 1 gehouden.
Ze zijn nergens als beschikbaar gepresenteerd.

| Onderdeel | Reden |
| --- | --- |
| Online boekingssysteem | Nog geen dienst gekozen; contact loopt via WhatsApp en het formulier |
| Analytics | Oskar gaf aan voorlopig geen analytics te willen |
| Cookiebanner | Niet nodig: er worden geen cookies of trackers gebruikt |
| Blog of kennisbank | Pas zinvol bij structureel nieuwe inhoud |
| Downloads, e-books, pdf's | Materiaal bestaat nog niet |
| AI-tools (planning, uitleg, verslagfeedback) | Bestaan nog niet; expliciet vermeld als *niet* inbegrepen bij het Leersysteem |
| Online betalen | Betaling gaat via factuur en betaallink |
| Account, login, leerlingomgeving, dashboard | Niet nodig voor versie 1 |
| Nieuwsbrief | Geen inhoudelijke belofte, dus geen AVG-grondslag |
| Zoekfunctie en filters | Te weinig inhoud om nuttig te zijn |
| Introductievideo | Voorlopig alleen fotografie |
| Google Maps | Niet gewenst |
| Interactieve keuzehulp | Er staat een eenvoudige versie op de homepage met vier situaties; een uitgebreide keuzehulp kan later |
| CMS | Teksten staan gebundeld in `src/content/`; Oskar laat wijzigingen via Claude doen |

Toekomstige diensten (Onvoldoende ophalen, Examen Squad, Examen Doorbraak,
Brugklasbegeleiding, groepsbijles, videocursussen en examengidsen) staan op
`/diensten#binnenkort` uitsluitend als *binnenkort beschikbaar*, met de
vermelding dat prijzen indicatief en nog niet definitief zijn.

---

## 7. Openstaande punten vóór livegang

### Moet gebeuren

1. **`RESEND_API_KEY` aanmaken en in Vercel zetten.** Dit is de enige stap die
   nog nodig is om het contactformulier daadwerkelijk e-mail te laten
   versturen. Zonder die sleutel toont het formulier een nette foutmelding die
   naar WhatsApp verwijst — maar dan komt een bericht dus niet binnen.
2. **`NEXT_PUBLIC_SITE_URL` instellen** zodra het domein bekend is.
3. **Juridische controle.** De privacyverklaring en de algemene voorwaarden zijn
   volledig uitgeschreven op basis van de werkelijke gang van zaken, maar zijn
   niet door een jurist beoordeeld. De checklist vraagt daar expliciet om,
   zeker rond de resultaatafspraak bij het Leersysteem en gegevens van
   minderjarigen.
4. **Inhoudelijke goedkeuring door Oskar** van alle teksten, prijzen en
   resultaten.

### Feiten die bevestiging vragen

5. **Datum bij Valentijn (case-003).** In de vragenlijst staat
   "3 december – 15 december 2026". Die datum ligt in de toekomst. Op de site
   staat daarom "2 sessies, verspreid over twee weken" zonder jaartal. Graag
   het juiste jaar doorgeven.
6. **Periode bij Roan (case-004).** Er stond "25 feb – 5 jun" zonder jaartal;
   op de site staat "van eind februari tot begin juni". Graag het jaartal
   aanvullen.
7. **Leerjaar van Finlay.** De review vermeldt vwo 4, de case vwo 3. Op de site
   staat de review als "leerling vwo" en de case als "vwo 3". Klopt dat?
8. **Review van Caro.** Haar review bevatte de zin dat er "licht ASS speelt" bij
   haar zoon. Dat is een gezondheidsgegeven van een minderjarige. Die zin is
   **niet** geplaatst; de rest van de review staat er wel. Wilt u dat anders,
   laat het weten — daar is dan aparte, uitdrukkelijke toestemming voor nodig.

### Aanbevelingen

9. **Een scherpere portretfoto.** De aangeleverde foto is 350 × 468 pixels. Dat
    is net genoeg voor de huidige weergave, maar op een scherm met hoge
    resolutie oogt hij iets zachter dan ideaal. Een foto van minstens
    1000 pixels breed zou de hero — het belangrijkste vertrouwenselement van
    de site — merkbaar verbeteren.
10. **De banner bijwerken** met de definitieve kernzin, zodat hij alsnog
    gebruikt kan worden.
11. **Zelf even kijken in Safari op de iPhone** en in Firefox, zie het
    testverslag.

### Al ingevuld, geen actie nodig

De drie openstaande kennismakingsvragen uit de checklist zijn beantwoord en
staan op de site: het gesprek is **gratis**, duurt **ongeveer vijftien minuten**
(telefonisch of via video), mag **met of zonder de leerling** en men hoeft
**niets mee te nemen of voor te bereiden**. De slogan is definitief: *"Meer grip
op school. Minder stress."*

---

## 8. Bevestiging over de inhoud van de productieversie

- Er staat **geen testdata** in de website. Alle namen, cijfers, reviews en
  resultaten komen letterlijk uit de aangeleverde vragenlijst.
- Er staan **geen geheime sleutels** in de code. `.env.local` staat in
  `.gitignore` en is niet meegecommit; sleutels horen alleen in Vercel.
- Er staan **geen persoonsgegevens van leerlingen** op de site anders dan de
  reviews en cases waarvoor Oskar heeft bevestigd dat er toestemming is. Er
  staan geen foto's van leerlingen op de site. Op verzoek van Oskar staat bij
  de review van Robin niet vermeld dat hij zijn broer is.
- Er staat **geen onafgemaakte inhoud** op de site: geen lege secties, geen
  voorbeeldteksten, geen dode links, geen knoppen die nergens heen gaan.
- Er wordt **geen cijfergarantie** gegeven bij bijles. De resultaatafspraak bij
  het Leersysteem staat met alle voorwaarden erbij en met de vermelding dat de
  exacte afspraak per leerling wordt vastgelegd.
- Wiskunde B wordt **niet** als beschikbaar gepresenteerd; overal staat
  "nog niet beschikbaar — beschikbaar vanaf januari 2027".
- De bonussen bij het Leersysteem (AI-hulpmiddelen, e-book, verslagfeedback)
  staan expliciet vermeld als **nog niet bestaand en niet inbegrepen**.

---

## 9. Teksten en prijzen zelf wijzigen

Alles staat in vier bestanden in `src/content/`:

| Wat | Bestand |
| --- | --- |
| Contactgegevens, slogan, vakken, regio, menu | `site.ts` |
| Prijzen | `site.ts`, onderdeel `prijzen` |
| Diensten en de lijst "binnenkort" | `diensten.ts` |
| Reviews, cases en eigen resultaten | `bewijs.ts` |
| Veelgestelde vragen | `faq.ts` |

Wijzig de tekst, sla op, commit en push — Vercel zet het binnen enkele minuten
live. Een uitgebreidere handleiding met voorbeelden staat in `README.md`.

Let op bij een prijswijziging: het bedrag staat ook in een aantal lopende
zinnen. Zoek daarom na een wijziging met `grep -rn "€25" src/` of er nog een
oud bedrag ergens is blijven staan.

---

## 10. Go / no-go

Alle punten uit de checklist die door de bouwer kunnen worden afgevinkt, zijn
afgevinkt. Wat resteert zijn vier punten die alleen Oskar kan afronden: de
API-sleutel voor de e-mail, de site-URL, de juridische controle en de
inhoudelijke goedkeuring.

**Advies: go zodra punt 1 tot en met 4 uit hoofdstuk 7 zijn afgerond.**
