import { TopicData } from './types'

export const kinderfest: TopicData = {
  slug: 'kinderfest-mieten-oberoesterreich',
  topic: 'Kinderfest',

  hero: {
    badge: '🎪 Komplettausstattung für Kinderfeste',
    headlinePrefix: 'Kinderfest mieten in',
    topicHighlight: 'Oberösterreich',
    headlineSuffix: '🎉',
    subheadline:
      'Alles für dein perfektes Kinderfest! Von der Hüpfburg bis zur Zuckerwatte – wir machen dein Event unvergesslich!',
    primaryCta: '🎉 Jetzt Kinderfest planen!',
    checks: ['Hüpfburg & Bällebad', 'Popcorn & Zuckerwatte', 'Komplettservice'],
  },

  features: {
    title: 'Was macht ein perfektes Kinderfest aus?',
    items: [
      { icon: '🎈', title: 'Hüpfburg-Action', description: 'Hüpfen, Rutschen und Toben – stundenlanger Bewegungsspaß für alle Kinder!' },
      { icon: '🎪', title: 'Bällebad-Spaß', description: '1.200 bunte Bälle zum Eintauchen, Spielen und Entdecken!' },
      { icon: '🍿', title: 'Leckere Snacks', description: 'Popcorn und Zuckerwatte für das perfekte Fest-Feeling!' },
      { icon: '😎', title: 'Rundum-Sorglos', description: 'Alles aus einer Hand – einfach abholen und Spaß haben!' },
    ],
    callout: {
      title: 'Für jede Art von Kinderfest!',
      description: 'Egal ob Geburtstag, Schulfest, Kindergarten-Sommerfest oder Vereinsfeier – mit unserer Komplettausstattung wird dein Kinderfest ein voller Erfolg!',
    },
  },

  packages: {
    title: 'Unsere Kinderfest-Pakete',
    items: [
      {
        emoji: '🎈', name: 'Basis-Kinderfest', price: 'Auf Anfrage',
        features: ['Hüpfburg mit Rutsche', 'Anhänger inklusive', 'Bällebad optional', 'Perfekt für 10-15 Kinder', 'Professionelle Beratung'],
      },
      {
        emoji: '🎪', name: 'Komplett-Kinderfest', price: 'Auf Anfrage', popular: true,
        features: ['Hüpfburg mit Bällebad', '1.200 farbenfrohe Bälle', 'Popcorn-Maschine', 'Zuckerwatte-Maschine', 'Perfekt für 15-25 Kinder'],
      },
      {
        emoji: '🎭', name: 'Clown & Seifenblasen', price: 'Auf Anfrage',
        features: ['Professioneller Clown', 'Riesenseifenblasen-Workshop', 'Interaktive Show', 'Kinder machen mit', 'Kombinierbar mit Hüpfburg'],
      },
    ],
    callout: {
      title: 'Individuelles Angebot für dein Fest!',
      description: 'Sag uns, was du brauchst – wir stellen dir das perfekte Kinderfest-Paket zusammen. Anhänger ist immer kostenlos inklusive! 🎉',
    },
  },

  contact: {
    title: 'Jetzt dein Kinderfest planen!',
    paragraph: 'Bereit für unvergessliche Kinderfest-Stimmung? Kontaktiere uns für eine unverbindliche Anfrage!',
    locationLabel: 'Ganz OÖ',
    locationValue: 'Verfügbar in ganz Oberösterreich',
  },

  faq: [
    { question: 'Für welche Kinderfest-Größen ist die Ausstattung geeignet?', answer: 'Wir haben Pakete für 10 bis 25+ Kinder. Bei größeren Festen erstellen wir gerne ein individuelles Angebot.' },
    { question: 'Liefert ihr auch in Kindergärten und Schulen?', answer: 'Selbstverständlich – wir vermieten an Privatpersonen, Kindergärten, Schulen und Vereine in ganz Oberösterreich.' },
    { question: 'Wer baut die Hüpfburg auf?', answer: 'Du baust die Hüpfburg selbst auf – das geht in ca. 10 Minuten und ist super einfach. Eine detaillierte Anleitung bekommst du von uns.' },
    { question: 'Wie funktioniert die Abholung?', answer: 'Du holst die Hüpfburg auf dem Anhänger bei uns ab – der Anhänger ist im Mietpreis enthalten.' },
  ],

  metaTitle: 'Kinderfest mieten Oberösterreich | Hüpfburg für Kinderfeste OÖ | Die Hupfarei',
  metaDescription:
    '🏆 Kinderfest-Ausstattung mieten in OÖ! ✅ Hüpfburg mit Bällebad ✅ Popcorn & Zuckerwatte ✅ Komplettpaket für unvergessliche Kinderfeste in Oberösterreich!',
  metaKeywords:
    'Kinderfest mieten Oberösterreich, Kinderfest OÖ, Kinderfest Ausstattung, Hüpfburg Kinderfest, Kinderfest Linz, Kindergartenfest mieten, Schulfest Hüpfburg',

  footerTitle: 'Kinderfest-Ausstattung mieten in Oberösterreich',
  footerSubtitle: 'Dein Komplett-Partner für unvergessliche Kinderfeste in ganz OÖ',
}
