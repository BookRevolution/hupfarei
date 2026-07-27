import { TopicData } from './types'
import { AB_PREISE, preisLabel } from '@/lib/pricing'

export const indoor: TopicData = {
  slug: 'huepfburg-indoor-winter-oberoesterreich',
  topic: 'Indoor & Winter',

  hero: {
    badge: '❄️ Auch wenn draußen niemand mehr hüpft',
    headlinePrefix: 'Hüpfburg',
    topicHighlight: 'indoor mieten',
    headlineSuffix: 'in Oberösterreich 🏠',
    subheadline: `Turnsaal, Pfarrsaal, Vereinsheim oder Halle – ab 3,5 Metern Raumhöhe funktioniert unsere Hüpfburg drinnen genauso gut. ${preisLabel(
      AB_PREISE.basis
    )} pro Tag, Anhänger inklusive.`,
    primaryCta: '❄️ Wintertermin anfragen',
    checks: [
      'Ab 3,5 m Raumhöhe',
      'Wetterunabhängig',
      'Gute Verfügbarkeit im Winter',
      'EN 14960 geprüft',
    ],
  },

  features: {
    title: 'Warum drinnen oft die bessere Idee ist',
    intro:
      'Die meisten Hüpfburgen in Oberösterreich stehen von Oktober bis April im Lager. Unsere nicht: Weil das Bällebad integriert ist und die Burg kompakt baut, passt sie in jeden halbwegs hohen Saal. Das macht Kindergeburtstage im November, Faschingsfeste und Weihnachtsfeiern erst möglich.',
    items: [
      {
        icon: '🏫',
        title: 'Turnsaal & Pfarrsaal',
        description:
          'Klassische Aufstellorte für Kindergarten- und Schulfeste. Statt Heringen wird mit Gewichten gesichert – der Boden bleibt unberührt.',
      },
      {
        icon: '🎄',
        title: 'Weihnachtsfeiern',
        description:
          'Betriebsweihnachtsfeiern und Vereinsfeiern mit Kindern. Im Dezember sind wir gut verfügbar, weil kaum ein Mitbewerber indoor anbietet.',
      },
      {
        icon: '🎭',
        title: 'Fasching & Kinderbälle',
        description:
          'Der Faschingssamstag im Vereinsheim wird mit Hüpfburg und Bällebad zum Selbstläufer. Zuckerwatte passt hier ohnehin dazu.',
      },
      {
        icon: '🎂',
        title: 'Geburtstage im Winter',
        description:
          'Winterkinder haben es schwer bei der Partyplanung. Ein gemieteter Saal plus Hüpfburg löst das Problem in einem Zug.',
      },
      {
        icon: '📏',
        title: 'Der Platzbedarf',
        description:
          'Rund 5 x 6 Meter Grundfläche, mindestens 3,5 Meter Raumhöhe, eine 230-Volt-Steckdose. Mehr braucht es nicht.',
      },
      {
        icon: '🔇',
        title: 'Das Gebläse',
        description:
          'Läuft durchgehend und ist hörbar – in einem großen Saal fällt es kaum auf, in einem kleinen Raum schon. Plant es beim Aufstellort mit ein.',
      },
    ],
    callout: {
      title: '🗓️ Nebensaison heißt bessere Termine',
      description:
        'Zwischen Oktober und April bekommt ihr fast jeden Wunschtermin – auch kurzfristig. Im Sommer sind Wochenenden dagegen oft Wochen im Voraus vergeben.',
    },
  },

  packages: {
    title: 'Pakete für Indoor-Veranstaltungen',
    subtitle: 'Startpreise pro Miettag, Anhänger inklusive',
    items: [
      {
        emoji: '🎈',
        name: 'Hüpfburg Basis',
        price: preisLabel(AB_PREISE.basis),
        features: [
          'Hüpfburg mit Rutsche',
          'Sicherung mit Gewichten statt Heringen',
          'Anhänger im Mietpreis inkl.',
          'Aufbau in ca. 10 Minuten',
          'EN 14960 geprüft',
        ],
      },
      {
        emoji: '🎪',
        name: 'Indoor-Paket',
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
          'Funktioniert auch im Saal',
          'Kinder machen selbst mit',
          'Kombinierbar mit Hüpfburg',
        ],
      },
    ],
  },

  contact: {
    title: 'Indoor-Termin anfragen',
    paragraph:
      'Sag uns, wo gefeiert wird und wie hoch der Raum ungefähr ist – dann sagen wir dir sofort, ob es passt. Am schnellsten geht das über WhatsApp.',
    locationLabel: 'Abholung',
    locationValue: 'Oftering oder Linz/Ebelsberg',
  },

  faq: [
    {
      question: 'Welche Raumhöhe braucht eine Hüpfburg drinnen?',
      answer:
        'Mindestens 3,5 Meter. Turnsäle, Pfarrsäle, Vereinsheime, Lager- und Werkshallen erfüllen das fast immer. In einem normalen Wohnzimmer mit 2,5 Metern geht es nicht.',
    },
    {
      question: 'Beschädigt die Hüpfburg den Hallenboden?',
      answer:
        'Nein. Drinnen wird sie nicht mit Heringen verankert, sondern mit Gewichten beschwert. Der Boden bleibt unberührt – wichtig bei Schwing- und Parkettböden in Turnsälen.',
    },
    {
      question: 'Kann ich die Hüpfburg auch im Winter mieten?',
      answer:
        'Ja, ganzjährig. Zwischen Oktober und April sind wir sogar deutlich besser verfügbar als in der Sommersaison, weil kaum ein Anbieter in Oberösterreich Indoor-Vermietung bewirbt.',
    },
    {
      question: 'Wie laut ist das Gebläse in einem Saal?',
      answer:
        'Es läuft durchgehend und ist deutlich hörbar, vergleichbar mit einem kräftigen Ventilator. In einem großen Saal geht es im Kindergeschrei unter, in einem kleinen Raum stört es eher.',
    },
    {
      question: 'Was kostet die Hüpfburg für ein Indoor-Fest?',
      answer: `Genau gleich viel wie draußen: ${preisLabel(
        AB_PREISE.basis
      )} pro Miettag für die Hüpfburg, ${preisLabel(
        AB_PREISE.extras
      )} für das Paket mit Bällebad, Popcorn und Zuckerwatte. Der Anhänger ist inklusive.`,
    },
  ],

  metaTitle: 'Hüpfburg indoor mieten Oberösterreich | Winter, Turnsaal & Halle | Die Hupfarei',
  metaDescription:
    'Hüpfburg für drinnen mieten in Oberösterreich: Turnsaal, Pfarrsaal, Vereinsheim oder Halle ab 3,5 m Raumhöhe. Ab € 120,- pro Tag, ganzjährig – ideal für Weihnachtsfeier, Fasching & Winter-Geburtstage.',
  metaKeywords:
    'Hüpfburg indoor mieten, Hüpfburg Winter, Hüpfburg Turnsaal, Hüpfburg Halle Oberösterreich, Weihnachtsfeier Hüpfburg, Faschingsfest Kinder, Kindergeburtstag Winter Linz, Hüpfburg Pfarrsaal',

  footerTitle: 'Hüpfburg für drinnen',
  footerSubtitle: 'Ganzjährig in Turnsälen, Pfarrsälen und Hallen in Oberösterreich',
}
