import { FAQItem } from '@/lib/cities/types'
import { AB_PREISE, preisLabel } from '@/lib/pricing'

// Zentrale FAQ – wird für strukturierte Daten und für die Preisseite verwendet.
// Antworten bewusst kurz, konkret und mit Zahlen: so werden sie von Google und
// KI-Systemen als direkte Antwort übernommen.
export const HOME_FAQ: FAQItem[] = [
  {
    question: 'Was kostet es, eine Hüpfburg zu mieten?',
    answer: `Bei Die Hupfarei startet die Hüpfburg mit Rutsche bei ${preisLabel(
      AB_PREISE.basis
    )} pro Miettag, das Paket mit Bällebad, Popcorn- und Zuckerwattemaschine bei ${preisLabel(
      AB_PREISE.extras
    )}. Der Anhänger für den Transport ist immer inklusive – anderswo kostet die Lieferung meist 50 bis 150 Euro extra.`,
  },
  {
    question: 'Wie funktioniert die Abholung der Hüpfburg?',
    answer:
      'Du holst die Hüpfburg fertig verpackt auf unserem Anhänger in Oftering oder Linz/Ebelsberg ab. Der Anhänger ist im Mietpreis enthalten – du brauchst nur ein Auto mit Anhängerkupplung und einen Führerschein der Klasse B.',
  },
  {
    question: 'Wie lange dauert der Aufbau der Hüpfburg?',
    answer:
      'Etwa 10 Minuten. Hüpfburg ausrollen, Gebläse anstecken, aufblasen, mit Heringen sichern – fertig. Eine bebilderte Anleitung bekommst du bei der Abholung mit.',
  },
  {
    question: 'Wie viel Platz brauche ich für die Hüpfburg?',
    answer:
      'Rechne mit rund 5 x 6 Metern ebener Fläche plus etwa einem Meter Sicherheitsabstand ringsum. Der Untergrund kann Wiese, Asphalt oder ein Hallenboden sein. Für das Gebläse brauchst du eine normale 230-Volt-Steckdose in Reichweite.',
  },
  {
    question: 'Ist die Hüpfburg sicherheitsgeprüft?',
    answer:
      'Ja. Unsere Hüpfburg entspricht der europäischen Sicherheitsnorm EN 14960 für aufblasbare Spielgeräte und wird vor und nach jeder Vermietung gereinigt und auf Nähte, Gebläse und Verankerung kontrolliert.',
  },
  {
    question: 'Ab welchem Alter ist die Hüpfburg geeignet?',
    answer:
      'Sie ist für Kinder von etwa 2 bis 12 Jahren ausgelegt. Kleinkinder und größere Kinder sollten nicht gleichzeitig hüpfen, und eine erwachsene Aufsichtsperson muss während der gesamten Nutzung dabei sein.',
  },
  {
    question: 'Ist das Bällebad inklusive?',
    answer:
      'Das integrierte Bällebad mit 1.200 bunten Bällen buchst du als Zusatzoption dazu. Im Paket mit Extras ist es bereits enthalten. Die Bälle werden zwischen den Vermietungen gereinigt.',
  },
  {
    question: 'Was passiert bei Regen?',
    answer:
      'Sag uns bis spätestens zwei Tage vor dem Termin Bescheid, dann verschieben wir kostenfrei auf einen anderen Tag. Bei starkem Wind ab etwa 38 km/h darf die Hüpfburg aus Sicherheitsgründen nicht betrieben werden.',
  },
  {
    question: 'Kann die Hüpfburg auch drinnen aufgebaut werden?',
    answer:
      'Ja. Turnsäle, Vereinsheime, Pfarrsäle und Lagerhallen funktionieren gut – nötig ist eine Raumhöhe von mindestens 3,5 Metern. Gerade für Weihnachtsfeiern, Faschingsfeste und Kindergartenfeste im Winter ist das eine beliebte Lösung.',
  },
  {
    question: 'In welchen Orten in Oberösterreich vermietet ihr?',
    answer:
      'In ganz Oberösterreich – Schwerpunkt Linz, Linz-Land, Wels, Steyr, Vöcklabruck, Gmunden und Braunau. Abgeholt wird in Oftering oder Linz/Ebelsberg, gefahren wird dann von dir selbst.',
  },
  {
    question: 'Wie schnell bekomme ich eine Antwort?',
    answer:
      'Am schnellsten geht es über WhatsApp – meist innerhalb weniger Stunden, oft binnen Minuten. Telefonisch erreichst du uns unter +43 660 9395049.',
  },
  {
    question: 'Wie früh sollte ich buchen?',
    answer:
      'In der Hauptsaison von Mai bis September sind Wochenenden oft zwei bis drei Wochen im Voraus vergeben. Für Pfarrfeste, Zeltfeste und Firmenfeiern lohnt sich eine Anfrage schon deutlich früher.',
  },
]
