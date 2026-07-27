import { TopicData } from './types'
import { AB_PREISE, preisLabel, PREIS_HINWEIS } from '@/lib/pricing'

export const preise: TopicData = {
  slug: 'huepfburg-preise',
  topic: 'Preise',

  hero: {
    badge: '💰 Transparent statt "auf Anfrage"',
    headlinePrefix: 'Was kostet eine',
    topicHighlight: 'Hüpfburg',
    headlineSuffix: 'in Oberösterreich? 🎈',
    subheadline: `Hüpfburg mit Rutsche ${preisLabel(
      AB_PREISE.basis
    )} pro Miettag. Mit Bällebad, Popcorn- und Zuckerwattemaschine ${preisLabel(
      AB_PREISE.extras
    )}. Der Anhänger ist immer inklusive – Lieferung kostet anderswo 50 bis 150 Euro extra.`,
    primaryCta: '🎪 Termin anfragen',
    checks: [
      'Anhänger im Preis',
      'Keine Liefergebühr',
      'Keine versteckten Kosten',
      'Fixes Angebot in wenigen Stunden',
    ],
  },

  features: {
    title: 'Was im Preis alles drin ist',
    intro:
      'Bei vielen Verleihern kommen zum Tagespreis noch Liefergebühr, Aufbaupauschale und Kaution dazu. Bei uns holst du selbst ab – dafür ist der Anhänger inklusive und der Preis, den du hier siehst, ist der Preis, über den wir reden.',
    items: [
      {
        icon: '🚚',
        title: 'Anhänger inklusive',
        description:
          'Die Hüpfburg steht fertig verpackt auf unserem Anhänger. Du brauchst ein Auto mit Anhängerkupplung und einen B-Führerschein, sonst nichts.',
      },
      {
        icon: '🚫',
        title: 'Keine Liefergebühr',
        description:
          'Andere Anbieter verrechnen für Lieferung und Abholung meist zwischen 50 und 150 Euro. Dieser Posten entfällt bei uns komplett.',
      },
      {
        icon: '🧰',
        title: 'Zubehör dabei',
        description:
          'Gebläse, Verlängerungskabel, Heringe zur Verankerung und eine bebilderte Aufbauanleitung sind immer mit an Bord.',
      },
      {
        icon: '🧼',
        title: 'Gereinigt übergeben',
        description:
          'Hüpfburg und Bälle werden zwischen den Vermietungen gereinigt, Nähte, Gebläse und Verankerung vor jeder Ausgabe kontrolliert.',
      },
      {
        icon: '🛡️',
        title: 'EN 14960 geprüft',
        description:
          'Unsere Hüpfburg entspricht der europäischen Sicherheitsnorm für aufblasbare Spielgeräte.',
      },
      {
        icon: '📅',
        title: 'Wochenendpreis',
        description:
          'Für Freitag bis Sonntag machen wir einen Paketpreis, der deutlich unter dem dreifachen Tagespreis liegt. Einfach anfragen.',
      },
    ],
    callout: {
      title: '💡 Warum "ab"?',
      description: PREIS_HINWEIS,
    },
  },

  packages: {
    title: 'Unsere Pakete im Überblick',
    subtitle: 'Startpreise pro Miettag, Anhänger immer inklusive',
    items: [
      {
        emoji: '🎈',
        name: 'Hüpfburg Basis',
        price: preisLabel(AB_PREISE.basis),
        features: [
          'Hüpfburg mit Rutsche',
          'Anhänger im Mietpreis inkl.',
          'Gebläse & Zubehör',
          'Abholung in Oftering oder Linz/Ebelsberg',
          'Bällebad optional zubuchbar',
        ],
      },
      {
        emoji: '🎪',
        name: 'Hüpfburg + Extras',
        price: preisLabel(AB_PREISE.extras),
        popular: true,
        features: [
          'Hüpfburg mit Rutsche',
          'Bällebad mit 1.200 Bällen',
          'Popcorn-Maschine',
          'Zuckerwatte-Maschine',
          'Anhänger inklusive',
        ],
      },
      {
        emoji: '🎭',
        name: 'Clown & Riesenseifenblasen',
        price: preisLabel(AB_PREISE.clown),
        features: [
          'Professioneller Clown',
          'Riesenseifenblasen-Workshop',
          'Kinder machen selbst mit',
          'Eigener Programmpunkt',
          'Perfekt kombinierbar mit Hüpfburg',
        ],
      },
    ],
    callout: {
      title: '🎁 Alles zusammen?',
      description:
        'Hüpfburg, Bällebad, beide Maschinen und der Clown an einem Tag – dafür machen wir dir ein Komplettangebot. Schreib uns einfach, was du dir vorstellst.',
    },
  },

  contact: {
    title: 'Fixes Angebot in wenigen Stunden',
    paragraph:
      'Nenn uns Termin, Ort und was du brauchst – du bekommst einen konkreten Preis, keine Rückfragen-Schleife. Am schnellsten geht es über WhatsApp.',
    locationLabel: 'Abholung',
    locationValue: 'Oftering oder Linz/Ebelsberg',
  },

  faq: [
    {
      question: 'Was kostet eine Hüpfburg in Oberösterreich?',
      answer: `Bei Die Hupfarei startet die Hüpfburg mit Rutsche bei ${preisLabel(
        AB_PREISE.basis
      )} pro Miettag. Das Paket mit Bällebad, Popcorn- und Zuckerwattemaschine kostet ${preisLabel(
        AB_PREISE.extras
      )}, Clown mit Riesenseifenblasen-Workshop ${preisLabel(
        AB_PREISE.clown
      )}. Der Anhänger für den Transport ist bei allen Paketen inklusive.`,
    },
    {
      question: 'Kommt zum Preis noch eine Liefergebühr dazu?',
      answer:
        'Nein. Du holst die Hüpfburg selbst ab, dafür stellen wir den Anhänger kostenlos zur Verfügung. Bei Anbietern mit Lieferservice kommen üblicherweise 50 bis 150 Euro Liefer- und Abholpauschale dazu.',
    },
    {
      question: 'Muss ich eine Kaution hinterlegen?',
      answer:
        'Das besprechen wir im Einzelfall bei der Buchung. Bei Vereins- und Firmenveranstaltungen läuft in der Regel alles über die Rechnung.',
    },
    {
      question: 'Was kostet ein ganzes Wochenende?',
      answer:
        'Für Freitag bis Sonntag machen wir einen Paketpreis, der klar unter dem dreifachen Tagespreis liegt. Gerade bei Zeltfesten und Familienfeiern lohnt sich das – frag einfach mit deinem Wunschtermin an.',
    },
    {
      question: 'Was passiert bei Regen mit dem Preis?',
      answer:
        'Sag uns bis spätestens zwei Tage vorher Bescheid, dann verschieben wir kostenfrei auf einen anderen Termin. Es entstehen keine Stornokosten.',
    },
  ],

  metaTitle: 'Was kostet eine Hüpfburg? Preise ab € 120,- | Oberösterreich | Die Hupfarei',
  metaDescription:
    'Hüpfburg mieten in Oberösterreich: Basis ab € 120,-, mit Bällebad, Popcorn & Zuckerwatte ab € 179,-, Clown & Riesenseifenblasen ab € 490,-. Anhänger inklusive, keine Liefergebühr.',
  metaKeywords:
    'Hüpfburg mieten Preise, was kostet eine Hüpfburg, Hüpfburg Preis Oberösterreich, Hüpfburg mieten Kosten Linz, Bällebad Preis, Zuckerwattemaschine mieten Preis, Hüpfburg Wochenende Preis',

  footerTitle: 'Preise & Pakete',
  footerSubtitle: 'Transparente Startpreise für ganz Oberösterreich – Anhänger immer inklusive',
}
