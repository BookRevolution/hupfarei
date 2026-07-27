// Zentrale Preis-Anker. Hier ändern = überall auf der Website geändert.
// null bedeutet: "Auf Anfrage" wird angezeigt.

export const AB_PREISE = {
  basis: 120,
  extras: 179,
  clown: 490,
} as const

/** Formatiert einen Ab-Preis, z. B. 120 -> "ab € 120,-" */
export function preisLabel(betrag: number | null | undefined): string {
  if (betrag == null) return 'Auf Anfrage'
  return `ab € ${betrag},-`
}

/** Nackte Zahl für strukturierte Daten (schema.org Offer) */
export function preisWert(betrag: number | null | undefined): string | null {
  if (betrag == null) return null
  return String(betrag)
}

export const PREIS_HINWEIS =
  'Alle Preise verstehen sich als Startpreise pro Miettag inkl. Anhänger. Der genaue Preis hängt von Mietdauer, Termin und gewählten Extras ab – wir melden uns meist innerhalb weniger Stunden mit einem fixen Angebot.'
