/**
 * Gedeelde definitie en validatie van het contactformulier.
 * Wordt zowel in de browser als op de server gebruikt, zodat de
 * regels op beide plekken gelijk zijn.
 */

export const LEERJAREN = [
  "Leerjaar 1",
  "Leerjaar 2",
  "Leerjaar 3",
  "Leerjaar 4",
  "Leerjaar 5",
  "Leerjaar 6",
  "Anders / weet ik niet",
] as const;

export const NIVEAUS = ["Vwo", "Havo", "Mavo / vmbo-t", "Anders"] as const;

export const DIENSTEN = [
  "Bijles",
  "MasterSchool Leersysteem",
  "Weet ik nog niet",
  "Interesse in een dienst die binnenkort komt",
] as const;

export const VAKKEN = [
  "Wiskunde A",
  "Economie",
  "Bedrijfseconomie",
  "Geschiedenis",
  "Meerdere vakken",
  "Niet van toepassing",
] as const;

export const VORMEN = ["Online", "Fysiek", "Geen voorkeur"] as const;

export type ContactInvoer = {
  naam: string;
  email: string;
  telefoon: string;
  leerjaar: string;
  niveau: string;
  dienst: string;
  vak: string;
  vorm: string;
  bericht: string;
};

export const legeInvoer: ContactInvoer = {
  naam: "",
  email: "",
  telefoon: "",
  leerjaar: "",
  niveau: "",
  dienst: "",
  vak: "",
  vorm: "",
  bericht: "",
};

export type Fouten = Partial<Record<keyof ContactInvoer, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Nederlandse nummers, met of zonder spaties, streepjes of landcode.
const TELEFOON = /^\+?\d[\d\s\-()]{7,18}$/;

export function valideer(invoer: ContactInvoer): Fouten {
  const fouten: Fouten = {};

  if (!invoer.naam.trim()) {
    fouten.naam = "Vul uw naam in.";
  } else if (invoer.naam.trim().length > 100) {
    fouten.naam = "Deze naam is te lang.";
  }

  const heeftEmail = invoer.email.trim().length > 0;
  const heeftTelefoon = invoer.telefoon.trim().length > 0;

  if (!heeftEmail && !heeftTelefoon) {
    const melding =
      "Vul een e-mailadres of een telefoonnummer in, zodat ik u kan antwoorden.";
    fouten.email = melding;
    fouten.telefoon = melding;
  } else {
    if (heeftEmail && !EMAIL.test(invoer.email.trim())) {
      fouten.email = "Dit e-mailadres lijkt niet te kloppen.";
    }
    if (heeftTelefoon && !TELEFOON.test(invoer.telefoon.trim())) {
      fouten.telefoon = "Dit telefoonnummer lijkt niet te kloppen.";
    }
  }

  if (!invoer.bericht.trim()) {
    fouten.bericht = "Vertel kort waar uw kind tegenaan loopt.";
  } else if (invoer.bericht.trim().length < 10) {
    fouten.bericht = "Kunt u iets meer vertellen? Een paar zinnen is genoeg.";
  } else if (invoer.bericht.length > 4000) {
    fouten.bericht = "Dit bericht is te lang. Houd het onder 4000 tekens.";
  }

  return fouten;
}

export const VELD_LABELS: Record<keyof ContactInvoer, string> = {
  naam: "Naam",
  email: "E-mailadres",
  telefoon: "Telefoonnummer",
  leerjaar: "Leerjaar",
  niveau: "Schoolniveau",
  dienst: "Interesse in",
  vak: "Vak",
  vorm: "Voorkeur begeleiding",
  bericht: "Hulpvraag",
};
