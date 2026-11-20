import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PaginaKop } from "@/components/blokken";
import { JuridischeTekst } from "@/components/JuridischeTekst";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Hoe MasterSchool omgaat met persoonsgegevens: welke gegevens worden verzameld via het contactformulier, waarvoor ze worden gebruikt, hoe lang ze worden bewaard en welke rechten u heeft.",
  alternates: { canonical: "/privacyverklaring" },
  robots: { index: true, follow: true },
};

const bijgewerkt = "28 augustus 2026";

export default function PrivacyPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Juridisch"
        titel="Privacyverklaring"
        intro={`MasterSchool verwerkt zo min mogelijk persoonsgegevens: alleen wat nodig is om uw vraag te beantwoorden en de begeleiding te verzorgen. Laatst bijgewerkt op ${bijgewerkt}.`}
      />

      <Section>
        <JuridischeTekst>
          <h2>Wie is verantwoordelijk voor uw gegevens?</h2>
          <p>
            {site.naam}, een eenmanszaak van {site.eigenaar}, gevestigd in{" "}
            {site.adres.postcodePlaats}, is verantwoordelijk.
            voor de verwerking van persoonsgegevens zoals beschreven in deze
            verklaring. U bereikt mij via{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> of op{" "}
            {site.telefoon}.
          </p>

          <h2>Welke gegevens verzamel ik?</h2>
          <h3>Via het contactformulier</h3>
          <p>
            Alleen de gegevens die u zelf invult. Verplicht zijn uw naam, uw vraag
            en minimaal één manier om u te bereiken: een e-mailadres of een
            telefoonnummer. Optioneel zijn het schoolniveau, het leerjaar, het vak,
            de dienst waarin u geïnteresseerd bent en uw voorkeur voor online of
            fysieke begeleiding. Laat u een veld leeg, dan wordt er niets
            verzameld.
          </p>
          <h3>Via de keuzehulp in het pop-upvenster</h3>
          <p>
            De keuzehulp vraagt wie de begeleiding zoekt, waar diegene hulp bij
            wil en om het schoolniveau en leerjaar. De antwoorden blijven in uw
            browser zolang u het venster gebruikt. Ze worden pas verstuurd als u
            zelf kiest voor WhatsApp of e-mail en op de bijbehorende knop drukt.
            Bij e-mail ontvangt MasterSchool uw antwoorden in de mailbox; de
            bewaartermijn staat hieronder. Bij WhatsApp opent uw apparaat een
            bericht dat u zelf nog moet verzenden. De keuzehulp bewaart uw
            antwoorden niet op de website.
          </p>
          <p>
            In uw eigen omschrijving van de hulpvraag kunt u gegevens over uw kind
            noemen, bijvoorbeeld cijfers of hoe het op school gaat. Deel niet meer
            dan nodig is om uw vraag te kunnen beoordelen.
          </p>

          <h3>Via WhatsApp, telefoon of e-mail</h3>
          <p>
            Neemt u contact op via WhatsApp, telefoon of e-mail, dan verwerk ik de
            gegevens die u in dat gesprek deelt: uw naam, telefoonnummer of
            e-mailadres en de inhoud van uw bericht. WhatsApp is een dienst van
            Meta Platforms Ireland Limited en verwerkt uw gegevens onder de eigen
            voorwaarden van WhatsApp. Wilt u dat niet, gebruik dan het
            contactformulier, e-mail of de telefoon.
          </p>

          <h3>Tijdens de begeleiding</h3>
          <p>
            Word uw kind leerling, dan verwerk ik daarnaast de gegevens die nodig
            zijn om les te geven en te factureren: de naam van de leerling, het
            niveau en leerjaar, de vakken, gemaakte afspraken en de gegevens voor
            de facturatie.
          </p>

          <h2>Waarvoor gebruik ik uw gegevens?</h2>
          <ul>
            <li>Om te reageren op uw bericht en uw vraag te beantwoorden.</li>
            <li>
              Om een kennismakingsgesprek en vervolgafspraken te kunnen plannen.
            </li>
            <li>
              Om de begeleiding uit te voeren en af te stemmen op uw kind.
            </li>
            <li>Om facturen op te stellen en de administratie te voeren.</li>
          </ul>
          <p>
            Ik gebruik uw gegevens niet voor reclame, ik verkoop ze niet en ik
            gebruik ze niet om profielen op te bouwen.
          </p>

          <h2>Op welke grondslag?</h2>
          <p>
            Voor het beantwoorden van uw bericht en het voorbereiden van een
            mogelijke overeenkomst baseer ik mij op de uitvoering van een
            overeenkomst of de stappen daaraan voorafgaand. Voor de administratie
            en facturatie baseer ik mij op een wettelijke verplichting. Deelt u
            uit eigen beweging bijzondere gegevens, bijvoorbeeld over de
            gezondheid van uw kind, dan verwerk ik die alleen met uw uitdrukkelijke
            toestemming en uitsluitend voor zover dat nodig is voor de begeleiding.
          </p>

          <h2>Hoe lang bewaar ik gegevens?</h2>
          <ul>
            <li>
              <strong>Contactverzoeken die niet tot begeleiding leiden:</strong>{" "}
              maximaal twaalf maanden na het laatste contact.
            </li>
            <li>
              <strong>Gegevens van leerlingen en ouders:</strong> tot twaalf
              maanden na afloop van de begeleiding.
            </li>
            <li>
              <strong>Facturen en administratie:</strong> zeven jaar, omdat de
              Belastingdienst dat voorschrijft.
            </li>
          </ul>
          <p>
            Wilt u dat uw gegevens eerder worden verwijderd, laat het weten. Dat
            kan altijd, behalve voor gegevens die ik wettelijk moet bewaren.
          </p>

          <h2>Wie krijgt uw gegevens te zien?</h2>
          <p>
            Alleen ik. Ik deel uw gegevens niet met anderen, behalve met de
            partijen die nodig zijn om de website en mijn e-mail te laten werken:
          </p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong> — hosting van de website. Vercel
              verwerkt technische logbestanden, waaronder IP-adressen, om de
              website te kunnen leveren en te beveiligen.
            </li>
            <li>
              <strong>Resend</strong> — verzendt het bericht uit het
              contactformulier als e-mail naar mijn mailbox.
            </li>
            <li>
              <strong>Google (Gmail)</strong> — mijn e-mailbox, waarin uw bericht
              binnenkomt.
            </li>
            <li>
              <strong>Meta (WhatsApp)</strong> — uitsluitend wanneer u zelf via
              WhatsApp contact opneemt.
            </li>
          </ul>
          <p>
            Deze partijen verwerken gegevens deels buiten de Europese Economische
            Ruimte. Zij hanteren daarvoor de standaardcontractbepalingen van de
            Europese Commissie.
          </p>

          <h2>Cookies en meten</h2>
          <p>
            Deze website plaatst <strong>geen cookies</strong>, gebruikt geen
            analytics, geen trackingpixels en geen advertentienetwerken. De
            website gebruikt tijdelijk sessionStorage in uw browser om te
            onthouden dat de keuzehulp in dit browsertabblad al is getoond. Deze
            instelling bevat geen antwoorden of persoonsgegevens en verdwijnt
            wanneer u het tabblad sluit. Het lettertype wordt vanaf deze website
            zelf geladen, dus er gaat geen verzoek naar een externe partij. De
            hostingpartij houdt wel standaard technische logbestanden bij die
            nodig zijn om de site te laten draaien.
          </p>

          <h2>Gegevens van minderjarigen</h2>
          <p>
            De begeleiding is gericht op middelbare scholieren, van wie een deel
            jonger is dan zestien jaar. Ouders of verzorgers kunnen de
            keuzehulp en het contactformulier invullen. Een leerling jonger dan
            zestien kan de keuzehulp samen met een ouder of verzorger invullen;
            ik verwerk de antwoorden van die leerling alleen met diens medeweten
            en toestemming.
          </p>
          <p>
            Reviews, resultaten en foto&apos;s van leerlingen publiceer ik
            uitsluitend met aantoonbare schriftelijke toestemming van de leerling
            én, bij minderjarigen, van een ouder of verzorger. Die toestemming kan
            op elk moment worden ingetrokken; ik verwijder het materiaal dan zo
            snel mogelijk van de website.
          </p>

          <h2>Beveiliging</h2>
          <p>
            De website werkt volledig over een beveiligde verbinding (HTTPS).
            Berichten uit het formulier komen binnen in mijn persoonlijke,
            met een sterk wachtwoord en tweestapsverificatie beveiligde mailbox.
            Gegevens die ik lokaal bewaar, staan op een apparaat met
            schijfversleuteling en een wachtwoord.
          </p>

          <h2>Uw rechten</h2>
          <p>U heeft het recht om:</p>
          <ul>
            <li>in te zien welke gegevens ik van u verwerk;</li>
            <li>onjuiste gegevens te laten corrigeren;</li>
            <li>uw gegevens te laten verwijderen;</li>
            <li>de verwerking te beperken of daartegen bezwaar te maken;</li>
            <li>uw gegevens in een gangbaar bestandsformaat te ontvangen;</li>
            <li>een gegeven toestemming op elk moment weer in te trekken.</li>
          </ul>
          <p>
            Stuur daarvoor een bericht naar{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Ik reageer binnen
            vier weken. Komen we er samen niet uit, dan kunt u een klacht indienen
            bij de Autoriteit Persoonsgegevens via{" "}
            <a
              href="https://autoriteitpersoonsgegevens.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              autoriteitpersoonsgegevens.nl
            </a>
            .
          </p>

          <h2>Wijzigingen</h2>
          <p>
            Verandert er iets aan de manier waarop ik gegevens verwerk, dan pas ik
            deze verklaring aan. Bovenaan staat wanneer de tekst voor het laatst is
            bijgewerkt.
          </p>
        </JuridischeTekst>
      </Section>
    </>
  );
}
