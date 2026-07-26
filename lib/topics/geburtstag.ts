import { TopicData } from './types'

export const geburtstag: TopicData = {
  slug: 'geburtstag-huepfburg-oberoesterreich',
  topic: 'Geburtstag',

  hero: {
    badge: '🎂 Der perfekte Kindergeburtstag!',
    headlinePrefix: 'Kindergeburtstag mit',
    topicHighlight: 'Hüpfburg',
    headlineSuffix: 'in OÖ 🎉',
    subheadline:
      'Mach den Geburtstag deines Kindes zu einem unvergesslichen Erlebnis! Mit Hüpfburg, Bällebad und vielen Extras!',
    primaryCta: '🎉 Jetzt Geburtstag planen!',
    checks: ['Hüpfburg & Bällebad', 'Perfekt für 3-12 Jahre', 'Rundum-Sorglos-Paket'],
  },

  features: {
    title: 'Warum eine Hüpfburg den perfekten Geburtstag macht',
    items: [
      { icon: '🎈', title: 'Actionreicher Spaß', description: 'Hüpfen, Springen, Rutschen – die Kinder sind beschäftigt und haben riesigen Spaß!' },
      { icon: '🎪', title: 'Bällebad-Paradies', description: '1.200 bunte Bälle – ein Traum für jedes Geburtstagskind!' },
      { icon: '😌', title: 'Entspannte Eltern', description: 'Die Kinder sind beschäftigt – du kannst den Geburtstag entspannt genießen!' },
      { icon: '🍿', title: 'Leckere Extras', description: "Mit Popcorn und Zuckerwatte wird's noch festlicher!" },
      { icon: '🏡', title: 'Zuhause feiern', description: 'Gemütlich im eigenen Garten – keine teuren Locations nötig!' },
      { icon: '📸', title: 'Tolle Erinnerungen', description: 'Unvergessliche Momente und strahlende Kinderaugen – perfekt für Fotos!' },
    ],
    callout: {
      title: 'Für jedes Alter perfekt!',
      description: 'Egal ob 3 oder 12 Jahre – unsere Hüpfburg mit Bällebad ist perfekt für jeden Kindergeburtstag. Die Kinder lieben es, sich auszutoben und gemeinsam Spaß zu haben!',
    },
  },

  packages: {
    title: 'Geburtstags-Pakete',
    items: [
      {
        emoji: '🎈', name: 'Geburtstag Basis', price: 'Auf Anfrage',
        features: ['Hüpfburg mit Rutsche', 'Anhänger inklusive', 'Bällebad optional', 'Aufbauanleitung', 'Perfekt für 8-12 Kinder'],
      },
      {
        emoji: '🎂', name: 'Geburtstag Deluxe', price: 'Auf Anfrage', popular: true,
        features: ['Hüpfburg mit Bällebad', '1.200 Bälle', 'Popcorn-Maschine', 'Zuckerwatte-Maschine', 'Perfekt für 12-20 Kinder'],
      },
      {
        emoji: '🎭', name: 'Clown & Seifenblasen', price: 'Auf Anfrage',
        features: ['Professioneller Clown', 'Riesenseifenblasen-Workshop', 'Interaktive Geburtstags-Show', 'Unvergesslich für Kinder', 'Kombinierbar mit allen Paketen'],
      },
    ],
    callout: {
      title: 'Spezielles Geburtstags-Angebot!',
      description: 'Für jedes Geburtstagskind gibt\'s eine kleine Überraschung dazu! Frag uns nach unseren Geburtstags-Sonderkonditionen. 🎁',
    },
  },

  contact: {
    title: 'Jetzt Geburtstag planen!',
    paragraph: 'Bereit für den unvergesslichen Geburtstag? Kontaktiere uns für eine unverbindliche Anfrage!',
    locationLabel: 'Ganz OÖ',
    locationValue: 'Verfügbar in ganz Oberösterreich',
  },

  faq: [
    { question: 'Wie viel Platz brauche ich für die Hüpfburg?', answer: 'Unsere Hüpfburg passt in fast jeden Garten – ca. 4x5 Meter freie Fläche reichen aus.' },
    { question: 'Wie früh sollte ich buchen?', answer: 'Wir empfehlen, 2-3 Wochen vorher zu buchen, an Wochenenden im Sommer auch gerne früher.' },
    { question: 'Kann ich Clown und Hüpfburg kombinieren?', answer: 'Ja! Mit dem Paket „Clown & Seifenblasen" bekommst du beides – die perfekte Geburtstags-Kombination!' },
    { question: 'Was wenn es regnet?', answer: 'Bei starkem Regen kann die Hüpfburg auch in einer überdachten Fläche oder Halle aufgebaut werden. Wir beraten dich gern!' },
  ],

  metaTitle: 'Kindergeburtstag mit Hüpfburg OÖ | Geburtstag Hüpfburg mieten | Die Hupfarei',
  metaDescription:
    '🏆 Unvergesslicher Kindergeburtstag mit Hüpfburg in OÖ! ✅ Bällebad mit 1.200 Bällen ✅ Popcorn & Zuckerwatte ✅ Perfekt für 3-12 Jahre. Jetzt buchen!',
  metaKeywords:
    'Kindergeburtstag Hüpfburg, Geburtstag Hüpfburg mieten, Kindergeburtstag Oberösterreich, Geburtstag feiern Kinder, Hüpfburg Geburtstag Linz',

  footerTitle: 'Kindergeburtstag mit Hüpfburg in Oberösterreich',
  footerSubtitle: 'Dein Partner für unvergessliche Kindergeburtstage – Hüpfburg, Bällebad und mehr in ganz OÖ',
}
