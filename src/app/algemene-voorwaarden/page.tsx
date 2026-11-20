import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { PaginaKop } from "@/components/blokken";
import { JuridischeTekst } from "@/components/JuridischeTekst";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "De voorwaarden voor bijles en het MasterSchool Leersysteem: tarieven, betaling, afzeggen, reiskosten, de resultaatafspraak en aansprakelijkheid.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

const bijgewerkt = "28 augustus 2026";

export default function VoorwaardenPagina() {
  return (
    <>
      <PaginaKop
        eyebrow="Juridisch"
        titel="Algemene voorwaarden"
        intro={`De afspraken die gelden voor bijles en voor het MasterSchool Leersysteem. Kort en in gewone taal. Laatst bijgewerkt op ${bijgewerkt}.`}
      />

      <Section>
        <JuridischeTekst>
          <h2>1. Wie ik ben</h2>
          <p>
            {site.naam} is een eenmanszaak van {site.eigenaar}, gevestigd in{" "}
            {site.adres.postcodePlaats}. Bereikbaar via{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> en op {site.telefoon}.
            In deze voorwaarden betekent &quot;ik&quot; MasterSchool en betekent
            &quot;u&quot; de ouder, verzorger of andere opdrachtgever die de
            begeleiding afneemt.
          </p>

          <h2>2. Waarop deze voorwaarden van toepassing zijn</h2>
          <p>
            Op alle begeleiding die ik lever: individuele bijles, het MasterSchool
            Leersysteem en aanvullende begeleiding. Afspraken die ik met u
            persoonlijk maak en die afwijken van deze voorwaarden, gaan voor —
            maar alleen als die schriftelijk of via WhatsApp zijn vastgelegd.
          </p>

          <h2>3. Hoe een afspraak tot stand komt</h2>
          <p>
            Een overeenkomst ontstaat zodra u en ik een concrete afspraak
            bevestigen, bijvoorbeeld via WhatsApp of e-mail. Het
            kennismakingsgesprek is gratis en vrijblijvend; daar ontstaat nog geen
            overeenkomst uit.
          </p>

          <h2>4. Tarieven</h2>
          <ul>
            <li>
              <strong>Bijles:</strong> €32 per uur, inclusief btw. Ik reken per
              werkelijk gegeven uur, met een minimum van één uur. Duurt een les 90
              minuten, dan betaalt u anderhalf uur.
            </li>
            <li>
              <strong>MasterSchool Leersysteem:</strong> €349 eenmalig, inclusief
              btw. Daarin zitten het intakegesprek, zes sessies van ongeveer een
              uur voor het opstellen van het leersysteem, en het e-book. Loopt een
              sessie uit, dan wordt daarvoor niets extra in rekening gebracht.
            </li>
            <li>
              <strong>De Garantiesprint:</strong> €249 per sprint, per vak,
              inclusief btw. Daarin zitten de foutenanalyse-intake van een uur en
              vier sessies van 90 minuten.
            </li>
            <li>
              <strong>MasterSchool Examen Squad:</strong> €595 per leerling,
              inclusief btw, voor het volledige traject van tien weken.
            </li>
            <li>
              <strong>MasterSchool Overgangsboost:</strong> €1.290 inclusief btw,
              of drie termijnen van €447.
            </li>
            <li>
              <strong>MasterSchool Examen Doorbraak:</strong> €1.790 inclusief
              btw, of drie termijnen van €597. Bij betaling in termijnen is de
              tweede termijn pas verschuldigd nadat de eerste meetbare
              cijferverbetering is vastgesteld.
            </li>
            <li>
              <strong>Doorlopende support na het Leersysteem:</strong> €15 per
              maand, inclusief btw, maandelijks opzegbaar.
            </li>
            <li>
              <strong>Aanvullende begeleiding na het Leersysteem:</strong> €32 per uur, inclusief btw. Altijd optioneel.
            </li>
          </ul>
          <p>
            Wijzig ik mijn tarieven, dan geldt het nieuwe tarief pas voor afspraken
            die daarna worden gemaakt. Voor al ingeplande lessen verandert er
            niets.
          </p>

          <h2>5. Reiskosten</h2>
          <p>
            Binnen Monnickendam, Katwoude en Purmerend breng ik geen reiskosten in rekening.
            Voor lessen daarbuiten betaalt u alleen de werkelijke kosten van het
            openbaar vervoer. Ik reken geen kilometervergoeding en geen uurtarief
            voor reistijd. Reiskosten spreken we vooraf af.
          </p>

          <h2>6. Betaling</h2>
          <p>
            Betalen kan na elke les, of vooraf voor een aantal lessen tegelijk.
            Vooruitbetaalde lessen blijven geldig en kunnen altijd worden
            uitgebreid. U ontvangt een factuur via e-mail of WhatsApp en betaalt
            per bankoverschrijving of met iDEAL via een betaallink. De
            betaaltermijn is veertien dagen na de factuurdatum.
          </p>
          <p>
            Blijft betaling uit, dan stuur ik eerst een herinnering met een nieuwe
            termijn van veertien dagen. Wordt daarna nog niet betaald, dan mag ik
            de begeleiding opschorten.
          </p>

          <h2>7. Afzeggen en verplaatsen</h2>
          <ul>
            <li>
              Zegt u meer dan twaalf uur voor de afgesproken tijd af, dan betaalt u
              niets.
            </li>
            <li>
              Zegt u binnen twaalf uur af, dan breng ik één uur in rekening.
            </li>
            <li>
              Lag het afzeggen buiten uw invloed — bij ziekte bijvoorbeeld — dan
              breng ik niets in rekening. Ik beoordeel dat per geval en in uw
              voordeel bij twijfel.
            </li>
            <li>
              Komt de leerling niet opdagen zonder bericht, dan breng ik één uur in
              rekening.
            </li>
            <li>
              Moet ik zelf een les afzeggen, dan kost u dat niets en plannen we zo
              snel mogelijk een nieuw moment.
            </li>
          </ul>
          <p>Afzeggen kan het eenvoudigst via WhatsApp.</p>

          <h2>8. Eerste bijles</h2>
          <p>
            Heeft u na de eerste bijles niet het gevoel dat die waardevol was, dan
            betaalt u die les niet. Laat dat binnen zeven dagen na de les weten.
          </p>

          <h2>9. Resultaatafspraken</h2>
          <p>
            Bij twee diensten hoort een resultaatafspraak. Bij beide geldt: wordt
            het afgesproken resultaat niet gehaald terwijl aan de voorwaarden is
            voldaan, dan zet ik de begeleiding kosteloos voort tot het wél lukt.
            Er vindt geen terugbetaling plaats; de compensatie bestaat uit extra
            begeleiding.
          </p>

          <h3>MasterSchool Leersysteem</h3>
          <p>
            Levert de leerling bewijs dat het leersysteem wordt uitgevoerd en
            blijven de onvoldoendes staan, dan begeleid ik kosteloos door tot er
            wél voldoendes worden gehaald. Dit geldt voor{" "}
            <strong>elk vak</strong> dat onvoldoende staat, niet voor één enkel
            vak.
          </p>
          <p>Voorwaarden:</p>
          <ul>
            <li>
              De leerling voert het afgesproken leersysteem uit en toont dat aan
              met foto&apos;s als bewijs.
            </li>
            <li>
              De afgesproken momenten worden nagekomen: het intakegesprek en de
              sessies.
            </li>
            <li>
              We leggen vóór de start samen vast om welke vakken het gaat en
              wanneer we evalueren.
            </li>
            <li>
              De afspraak gaat over het wegwerken van onvoldoendes. Voor vakken
              die al voldoende staan, spreek ik geen verbetering af.
            </li>
          </ul>

          <h3>De Garantiesprint</h3>
          <p>
            Doet de leerling alle vier de sessies en maakt hij of zij de
            opdrachten, maar haalt hij of zij bij de eerstvolgende toets voor dat
            vak toch geen voldoende? Dan zet ik de begeleiding kosteloos voort tot
            die voldoende er wel is.
          </p>
          <p>Voorwaarden:</p>
          <ul>
            <li>Alle vier de sessies zijn gevolgd.</li>
            <li>De afgesproken opdrachten tussen de sessies zijn gemaakt.</li>
            <li>
              De afspraak geldt voor het vak waarvoor de sprint is afgenomen, bij
              de eerstvolgende toets voor dat vak na afloop van de sprint.
            </li>
          </ul>
          <h3>MasterSchool Examen Squad</h3>
          <p>
            Ik neem alleen leerlingen aan van wie ik meen dat slagen haalbaar is;
            dat beoordeel ik in het kennismakingsgesprek. Volgt de leerling alle
            sessies en maakt hij of zij de afgesproken opdrachten, maar slaagt
            hij of zij toch niet voor het eindexamen? Dan betaal ik het volledige
            deelnamebedrag terug. Omdat begeleiding na de examens niet meer
            zinvol is, bestaat de compensatie hier uit terugbetaling in plaats
            van extra begeleiding.
          </p>
          <p>
            Bij één gemiste sessie vervalt die sessie zonder restitutie en blijft
            de afspraak staan. Bij meerdere gemiste sessies vervalt de afspraak.
          </p>

          <h3>MasterSchool Examen Doorbraak</h3>
          <p>
            Ik neem alleen leerlingen aan van wie ik meen dat slagen haalbaar is.
            Bij betaling in termijnen is de tweede termijn pas verschuldigd nadat
            een tweede meting op een vergelijkbaar oefenexamen een hoger cijfer
            laat zien dan de nulmeting uit de eerste week. Zakt de leerling
            ondanks nakoming van alle afspraken, dan zet ik de begeleiding
            kosteloos voort tot en met het herexamen in het tweede tijdvak.
          </p>

          <h3>MasterSchool Overgangsboost</h3>
          <p>
            Ik neem alleen leerlingen aan van wie ik meen dat overgaan haalbaar
            is. Bij betaling in termijnen geldt dezelfde regel over de tweede
            meting als hierboven. Gaat de leerling ondanks nakoming van alle
            afspraken toch niet over, dan begeleid ik de eerste twee maanden van
            het overgedane schooljaar kosteloos.
          </p>

          <h3>Wat voor alle resultaatafspraken geldt</h3>
          <p>
            Onder nakoming van de afspraken versta ik: de afgesproken sessies en
            belmomenten zijn gevolgd, het werk tussen de sessies is gedaan en
            aantoonbaar, en het afgesproken leersysteem is uitgevoerd. Omdat de
            startsituatie per leerling verschilt, kan de precieze afspraak per
            leerling anders zijn. Wat we samen schriftelijk vastleggen, gaat voor
            op de algemene omschrijvingen hierboven.
          </p>

          <h2>10. Wat ik wel en niet garandeer</h2>
          <p>
            Bij individuele bijles geef ik <strong>geen</strong> garantie op
            cijfers. Wat ik toezeg, is dat ik mij volledig inzet om de leerling de
            stof te laten begrijpen en dat ik de uitleg blijf aanpassen tot dat
            lukt. Een toetsresultaat hangt daarnaast af van factoren buiten mijn
            invloed, zoals de moeilijkheid van de toets, het startniveau en de
            inzet van de leerling.
          </p>
          <p>
            Resultaten van andere leerlingen die op deze website staan, zijn
            werkelijke resultaten met toestemming geplaatst. Zij zijn geen
            voorspelling of toezegging voor uw kind.
          </p>

          <h2>11. Wat ik van u en de leerling verwacht</h2>
          <ul>
            <li>
              De leerling werkt mee, toont inzet en komt gemaakte afspraken na.
            </li>
            <li>
              De leerling legt de boeken klaar en stuurt de te behandelen stof
              vooraf op.
            </li>
            <li>
              U bent bereikbaar voor overleg over afspraken en planning.
            </li>
            <li>
              Bij lessen bij u thuis zorgt u voor een rustige werkplek.
            </li>
          </ul>

          <h2>12. Beëindigen</h2>
          <p>
            Er is geen abonnement en geen opzegtermijn. U kunt op elk moment
            stoppen; reeds gegeven lessen worden afgerekend en nog niet gebruikte
            vooruitbetaalde lessen betaal ik terug. Ook ik mag de begeleiding
            beëindigen, bijvoorbeeld wanneer samenwerken niet meer werkt. Ik meld
            dat dan tijdig en met uitleg.
          </p>

          <h2>13. Aansprakelijkheid</h2>
          <p>
            Ik span mij in om de begeleiding zo goed mogelijk te verzorgen. Ik ben
            niet aansprakelijk voor tegenvallende school- of examenresultaten. Voor
            schade die wel aan mij is toe te rekenen, is mijn aansprakelijkheid
            beperkt tot het bedrag dat u voor de betreffende begeleiding heeft
            betaald. Deze beperking geldt niet bij opzet of bewuste roekeloosheid.
          </p>

          <h2>14. Persoonsgegevens</h2>
          <p>
            Hoe ik met gegevens omga, staat in de{" "}
            <a href="/privacyverklaring">privacyverklaring</a>. Reviews,
            resultaten en foto&apos;s publiceer ik uitsluitend met aantoonbare
            toestemming en, bij minderjarigen, ook met toestemming van een ouder of
            verzorger.
          </p>

          <h2>15. Klachten en toepasselijk recht</h2>
          <p>
            Bent u ergens niet tevreden over, laat het mij dan eerst weten via{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> of via WhatsApp. Ik
            reageer binnen veertien dagen en zoek graag samen naar een oplossing.
            Op deze voorwaarden is Nederlands recht van toepassing.
          </p>

          <h2>16. Wijzigingen</h2>
          <p>
            Ik kan deze voorwaarden aanpassen. Voor lopende afspraken gelden de
            voorwaarden zoals ze waren op het moment dat de afspraak werd gemaakt.
            Bovenaan deze pagina staat wanneer de tekst voor het laatst is
            bijgewerkt.
          </p>
        </JuridischeTekst>
      </Section>
    </>
  );
}
