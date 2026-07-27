import { TopicData } from './types'
import { AB_PREISE, preisLabel } from '@/lib/pricing'

export const pfarrfest: TopicData = {
  slug: 'huepfburg-pfarrfest-zeltfest-oberoesterreich',
  topic: 'Pfarrfest & Zeltfest',

  hero: {
    badge: '⛪ Für Pfarren, Vereine & Feuerwehren',
    headlinePrefix: 'Hüpfburg für',
    topicHighlight: 'Pfarrfest & Zeltfest',
    headlineSuffix: 'in Oberösterreich 🎪',
    subheadline: `Das Kinderprogramm, das euer Fest zum Familienfest macht. Hüpfburg mit Bällebad, Popcorn und Zuckerwatte – ${preisLabel(
      AB_PREISE.basis
    )} pro Tag, Anhänger inklusive.`,
    primaryCta: '🎪 Termin anfragen',
    checks: [
      'Anhänger im Preis inkludiert',
      'EN 14960 geprüft',
      'Aufbau in ca. 10 Minuten',
      'Ganz Oberösterreich',
    ],
  },

  features: {
    title: 'Warum ein Kinderprogramm euer Fest rettet',
    intro:
      'Ein Pfarrfest oder Zeltfest steht und fällt damit, ob Familien bleiben. Solange die Kinder beschäftigt sind, bleiben die Eltern sitzen, essen und trinken noch etwas – und die Kassa freut sich. Eine Hüpfburg mit Bällebad ist dafür die einfachste Lösung, die es gibt.',
    items: [
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Familien bleiben länger',
        description:
          'Kinder, die hüpfen, wollen nicht heim. Eltern, die sitzen bleiben, konsumieren weiter – das rechnet sich für jedes Vereinsfest.',
      },
      {
        icon: '💪',
        title: 'Kein Aufwand für euch',
        description:
          'Ihr holt die Hüpfburg am Anhänger ab, rollt sie aus, steckt das Gebläse an. In zehn Minuten steht alles. Kein Techniker, kein Kran, kein Spezialwissen.',
      },
      {
        icon: '💰',
        title: 'Planbare Kosten',
        description: `Ab ${preisLabel(
          AB_PREISE.basis
        )} pro Tag – inklusive Anhänger. Bei mehrtägigen Festen machen wir euch gerne einen Wochenendpreis.`,
      },
      {
        icon: '🎪',
        title: 'Auch im Festzelt',
        description:
          'Ab 3,5 Metern Raumhöhe funktioniert die Hüpfburg auch im Zelt oder in der Halle. Regen ist damit kein Absagegrund mehr.',
      },
      {
        icon: '🍿',
        title: 'Popcorn & Zuckerwatte',
        description:
          'Beide Maschinen dazubuchbar – als Attraktion oder als eigene Einnahmequelle für den Verein. Erfahrungsgemäß zahlen sie sich an einem Festtag selbst.',
      },
      {
        icon: '🎭',
        title: 'Clown & Riesenseifenblasen',
        description:
          'Für größere Feste: ein professioneller Clown mit Riesenseifenblasen-Workshop, bei dem die Kinder selbst mitmachen. Das ist der Programmpunkt, über den danach geredet wird.',
      },
    ],
    callout: {
      title: '📅 Früh anfragen zahlt sich aus',
      description:
        'Pfarrfeste und Zeltfeste ballen sich in Oberösterreich zwischen Mai und September auf denselben Wochenenden. Wer seinen Termin früh fixiert, bekommt ihn auch.',
    },
  },

  packages: {
    title: 'Pakete für Vereinsfeste',
    subtitle: 'Startpreise pro Miettag, Anhänger immer inklusive',
    items: [
      {
        emoji: '🎈',
        name: 'Hüpfburg Basis',
        price: preisLabel(AB_PREISE.basis),
        features: [
          'Hüpfburg mit Rutsche',
          'Anhänger im Mietpreis inkl.',
          'Abholung in Oftering oder Linz/Ebelsberg',
          'Aufbauanleitung',
          'EN 14960 geprüft',
        ],
      },
      {
        emoji: '🎪',
        name: 'Festpaket',
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
          'Perfekt kombinierbar mit Hüpfburg',
          'Auf Anfrage auch mehrstündig',
        ],
      },
    ],
    callout: {
      title: '🤝 Mehrtägige Feste',
      description:
        'Zeltfeste gehen selten nur einen Tag. Sag uns, von wann bis wann ihr feiert – für Freitag bis Sonntag machen wir einen Paketpreis, der deutlich unter dem dreifachen Tagespreis liegt.',
    },
  },

  contact: {
    title: 'Termin für euer Fest sichern',
    paragraph:
      'Schreib uns kurz, wann euer Fest stattfindet und mit wie vielen Kindern ihr rechnet. Am schnellsten geht es über WhatsApp – meist antworten wir innerhalb weniger Stunden.',
    locationLabel: 'Abholung',
    locationValue: 'Oftering oder Linz/Ebelsberg',
  },

  faq: [
    {
      question: 'Was kostet eine Hüpfburg für ein Pfarrfest?',
      answer: `Die Hüpfburg mit Rutsche startet bei ${preisLabel(
        AB_PREISE.basis
      )} pro Miettag, das Festpaket mit Bällebad, Popcorn- und Zuckerwattemaschine bei ${preisLabel(
        AB_PREISE.extras
      )}. Der Anhänger ist immer inklusive. Für mehrtägige Zeltfeste gibt es einen Wochenendpreis.`,
    },
    {
      question: 'Wer baut die Hüpfburg beim Fest auf?',
      answer:
        'Ihr selbst – und das ist einfacher, als es klingt. Ausrollen, Gebläse anstecken, aufblasen, mit Heringen oder Gewichten sichern. Zwei Personen brauchen dafür rund zehn Minuten. Die Anleitung bekommt ihr bei der Abholung.',
    },
    {
      question: 'Braucht die Hüpfburg Strom am Festgelände?',
      answer:
        'Ja, eine normale 230-Volt-Steckdose in Reichweite genügt. Das Gebläse läuft durchgehend, solange gehüpft wird. Bei Festzelten ist meist ohnehin ein Stromverteiler vorhanden.',
    },
    {
      question: 'Wer haftet, wenn beim Fest etwas passiert?',
      answer:
        'Während der Mietzeit ist der Veranstalter für die Aufsicht verantwortlich – wie bei jeder Attraktion am Festgelände. Es muss durchgehend eine erwachsene Person beaufsichtigen. Die Hüpfburg selbst entspricht der Sicherheitsnorm EN 14960 und wird vor jeder Vermietung kontrolliert.',
    },
    {
      question: 'Funktioniert die Hüpfburg auch im Festzelt?',
      answer:
        'Ab etwa 3,5 Metern Raumhöhe ja. Im Zelt oder in der Halle wird sie statt mit Heringen mit Gewichten gesichert. Das macht euer Kinderprogramm wetterunabhängig.',
    },
    {
      question: 'Wie früh sollten wir für unser Vereinsfest buchen?',
      answer:
        'So früh wie möglich. Die Wochenenden zwischen Mai und September sind in Oberösterreich stark nachgefragt, weil sich Pfarrfeste, Zeltfeste und Feuerwehrfeste auf dieselben Termine drängen.',
    },
  ],

  metaTitle: 'Hüpfburg für Pfarrfest & Zeltfest mieten | Oberösterreich | Die Hupfarei',
  metaDescription:
    'Kinderprogramm für Pfarrfest, Zeltfest & Vereinsfest in Oberösterreich: Hüpfburg mit Bällebad ab € 120,-, Popcorn & Zuckerwatte dazubuchbar. Anhänger inklusive, EN 14960 geprüft.',
  metaKeywords:
    'Hüpfburg Pfarrfest, Hüpfburg Zeltfest, Kinderprogramm Vereinsfest, Hüpfburg mieten Verein, Feuerwehrfest Kinderprogramm, Gemeindefest Hüpfburg, Pfarrfest Oberösterreich, Zeltfest Kinderattraktion',

  footerTitle: 'Hüpfburg für Pfarr- und Zeltfeste',
  footerSubtitle: 'Das Kinderprogramm für Vereinsfeste in ganz Oberösterreich',
}
