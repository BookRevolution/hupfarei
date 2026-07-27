import { TopicData } from './types'
import { AB_PREISE, preisLabel } from '@/lib/pricing'

export const firmenfest: TopicData = {
  slug: 'firmenfest-kinderprogramm-oberoesterreich',
  topic: 'Firmenfest & Betriebsfeier',

  hero: {
    badge: '🏢 Für Unternehmen & Betriebe',
    headlinePrefix: 'Kinderprogramm für',
    topicHighlight: 'Firmenfest & Familientag',
    headlineSuffix: 'in Oberösterreich 🎈',
    subheadline: `Damit der Betriebsausflug für die ganze Familie funktioniert. Hüpfburg mit Bällebad ${preisLabel(
      AB_PREISE.basis
    )}, Rundum-Paket ${preisLabel(AB_PREISE.extras)} – Rechnung inklusive.`,
    primaryCta: '📋 Angebot anfordern',
    checks: [
      'Auf Rechnung',
      'EN 14960 geprüft',
      'Auch indoor möglich',
      'Planbare Fixkosten',
    ],
  },

  features: {
    title: 'Was ein Kinderprogramm für euer Firmenfest bringt',
    intro:
      'Familientage und Betriebsfeiern scheitern selten am Buffet, sondern daran, dass Mitarbeiter mit kleinen Kindern früh gehen. Ein Kinderprogramm hält die Familien am Gelände – und macht aus einer Pflichtveranstaltung ein Fest, über das im Betrieb noch geredet wird.',
    items: [
      {
        icon: '👨‍👩‍👧',
        title: 'Mitarbeiter bleiben mit Familie',
        description:
          'Wer weiß, dass die Kinder beschäftigt sind, kommt mit der ganzen Familie – und bleibt länger als bis zum Kaffee.',
      },
      {
        icon: '🧾',
        title: 'Auf Rechnung, planbar',
        description:
          'Wir stellen eine ordentliche Rechnung. Fixer Preis, keine Nachverrechnung, keine Überraschungen für die Buchhaltung.',
      },
      {
        icon: '🏭',
        title: 'Auch am Betriebsgelände',
        description:
          'Parkplatz, Innenhof, Lagerhalle oder Werkshalle – wo genug Platz und eine Steckdose ist, steht die Hüpfburg. Ab 3,5 Metern Raumhöhe auch drinnen.',
      },
      {
        icon: '📅',
        title: 'Ganzjährig',
        description:
          'Sommerfest, Familientag, Weihnachtsfeier, Tag der offenen Tür. Gerade im Winter sind wir gut verfügbar, weil kaum jemand indoor anbietet.',
      },
      {
        icon: '🍿',
        title: 'Popcorn & Zuckerwatte',
        description:
          'Zwei Maschinen, die aus einem Firmengelände einen Jahrmarkt machen. Erfahrungsgemäß der Fotomotiv-Magnet des Tages.',
      },
      {
        icon: '🎭',
        title: 'Clown & Riesenseifenblasen',
        description:
          'Für größere Veranstaltungen mit vielen Kindern: ein professioneller Clown mit interaktivem Seifenblasen-Workshop als eigener Programmpunkt.',
      },
    ],
    callout: {
      title: '🗓️ Weihnachtsfeiern werden im Oktober geplant',
      description:
        'Wenn ihr eine Betriebsweihnachtsfeier mit Kinderprogramm plant, meldet euch im Herbst. Indoor-Termine im Dezember sind begrenzt, aber deutlich einfacher zu bekommen als Sommer-Wochenenden.',
    },
  },

  packages: {
    title: 'Pakete für Firmenveranstaltungen',
    subtitle: 'Startpreise pro Miettag, Anhänger inklusive, Rechnung selbstverständlich',
    items: [
      {
        emoji: '🎈',
        name: 'Hüpfburg Basis',
        price: preisLabel(AB_PREISE.basis),
        features: [
          'Hüpfburg mit Rutsche',
          'Anhänger im Mietpreis inkl.',
          'Abholung in Oftering oder Linz/Ebelsberg',
          'EN 14960 geprüft',
          'Rechnung an die Firma',
        ],
      },
      {
        emoji: '🎪',
        name: 'Familientag-Paket',
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
          'Kombinierbar mit Hüpfburg',
        ],
      },
    ],
    callout: {
      title: '📞 Größere Veranstaltung?',
      description:
        'Ab etwa 50 Kindern oder bei mehrtägigen Events macht ein individuelles Angebot mehr Sinn als ein Paket von der Stange. Schreibt uns kurz Rahmen und Termin.',
    },
  },

  contact: {
    title: 'Angebot für euer Firmenfest',
    paragraph:
      'Nennt uns Termin, ungefähre Kinderzahl und ob drinnen oder draußen gefeiert wird – dann bekommt ihr ein konkretes Angebot, das ihr intern weiterreichen könnt.',
    locationLabel: 'Abholung',
    locationValue: 'Oftering oder Linz/Ebelsberg',
  },

  faq: [
    {
      question: 'Was kostet ein Kinderprogramm für ein Firmenfest?',
      answer: `Die Hüpfburg startet bei ${preisLabel(
        AB_PREISE.basis
      )} pro Miettag, das Familientag-Paket mit Bällebad, Popcorn und Zuckerwatte bei ${preisLabel(
        AB_PREISE.extras
      )}. Clown mit Riesenseifenblasen-Workshop ab ${preisLabel(
        AB_PREISE.clown
      )}. Anhänger und Rechnung sind immer inklusive.`,
    },
    {
      question: 'Bekommen wir eine Rechnung für die Buchhaltung?',
      answer:
        'Ja. Die Hupfarei ist Kleinunternehmer gemäß § 6 Abs 1 Z 27 UStG, die Rechnung wird also ohne ausgewiesene Umsatzsteuer ausgestellt. Für die Betriebsausgabe ist das unproblematisch.',
    },
    {
      question: 'Können wir die Hüpfburg in einer Halle aufstellen?',
      answer:
        'Ab etwa 3,5 Metern Raumhöhe ja. Statt Heringen wird die Hüpfburg dann mit Gewichten gesichert. Werkshallen, Lagerhallen und Turnsäle funktionieren gut.',
    },
    {
      question: 'Wer holt die Hüpfburg ab?',
      answer:
        'Jemand aus eurem Team – die Hüpfburg steht fertig verpackt auf unserem Anhänger bereit, der im Mietpreis enthalten ist. Nötig sind nur ein Fahrzeug mit Anhängerkupplung und ein Führerschein der Klasse B.',
    },
    {
      question: 'Wie viel Platz braucht das Ganze?',
      answer:
        'Rund 5 x 6 Meter ebene Fläche plus etwa einen Meter Sicherheitsabstand ringsum, dazu eine 230-Volt-Steckdose in Reichweite für das Gebläse.',
    },
  ],

  metaTitle: 'Firmenfest mit Kinderprogramm | Hüpfburg mieten Oberösterreich | Die Hupfarei',
  metaDescription:
    'Kinderprogramm für Firmenfest, Familientag & Betriebsweihnachtsfeier in Oberösterreich. Hüpfburg mit Bällebad ab € 120,-, auf Rechnung, auch indoor. Jetzt Angebot anfordern.',
  metaKeywords:
    'Firmenfest Kinderprogramm, Familientag Firma Hüpfburg, Betriebsfeier Kinder, Hüpfburg mieten Firma Oberösterreich, Weihnachtsfeier Kinderprogramm, Tag der offenen Tür Hüpfburg, Betriebsausflug Kinder',

  footerTitle: 'Kinderprogramm für Firmenfeste',
  footerSubtitle: 'Familientage, Betriebsfeiern und Weihnachtsfeiern in ganz Oberösterreich',
}
