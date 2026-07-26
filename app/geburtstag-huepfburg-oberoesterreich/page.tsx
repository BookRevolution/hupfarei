import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import ClownSeifenblasenExtras from '@/components/clown-seifenblasen-extras'
import { geburtstag } from '@/lib/topics/geburtstag'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: geburtstag.metaTitle,
  description: geburtstag.metaDescription,
  keywords: geburtstag.metaKeywords,
  alternates: { canonical: `/${geburtstag.slug}/` },
  openGraph: {
    title: geburtstag.metaTitle,
    description: geburtstag.metaDescription,
    url: `${SITE_URL}/${geburtstag.slug}/`,
    siteName: 'Die Hupfarei', locale: 'de_AT', type: 'website',
    images: [{ url: '/huepfburg.webp', width: 1200, height: 630, alt: 'Kindergeburtstag mit Hüpfburg in Oberösterreich - Die Hupfarei' }],
  },
}

const CHECKLIST = [
  { title: 'Termin festlegen', description: 'Wähle das Datum – am besten 2-3 Wochen im Voraus buchen' },
  { title: 'Paket auswählen', description: 'Entscheide dich für Hüpfburg pur oder mit Extras (Popcorn, Zuckerwatte)' },
  { title: 'Gäste einladen', description: 'Verschicke die Einladungen – verrate ruhig das Highlight „Hüpfburg"!' },
  { title: 'Abholen & Aufbauen', description: 'Hüpfburg am Vortag oder am Morgen abholen, Aufbau dauert nur 10 Minuten' },
  { title: 'Feiern & genießen!', description: 'Lass die Kinder hüpfen und genieße den entspannten Geburtstag! 🎉' },
]

const TIPS = [
  { icon: '🎈', title: 'Deko-Tipp:', description: 'Luftballons in den gleichen Farben wie die Bälle – sieht super aus!' },
  { icon: '🍕', title: 'Essen-Tipp:', description: 'Einfaches Fingerfood – Pizza, Würstchen, Obst. Die Kinder wollen eh nur hüpfen!' },
  { icon: '⏰', title: 'Zeit-Tipp:', description: 'Plane 2-3 Stunden ein. Perfekte Zeiten: 14-17 Uhr oder 15-18 Uhr' },
  { icon: '👨‍👩‍👧', title: 'Aufsichts-Tipp:', description: 'Immer einen Erwachsenen als Aufsicht einplanen – Sicherheit geht vor!' },
  { icon: '☀️', title: 'Wetter-Tipp:', description: 'Plan B haben! Bei Regen kann die Hüpfburg auch überdacht aufgebaut werden' },
  { icon: '📸', title: 'Foto-Tipp:', description: 'Mach viele Fotos! Die strahlenden Gesichter sind unbezahlbar 📷' },
]

const TESTIMONIALS = [
  { quote: 'Der beste 6. Geburtstag ever! Die Hüpfburg war das absolute Highlight. Alle Kinder waren begeistert.', author: 'Mama aus Linz' },
  { quote: 'So entspannt war noch kein Kindergeburtstag! Die Kinder waren beschäftigt und wir konnten einfach genießen.', author: 'Papa aus Wels' },
  { quote: 'Meine Tochter ist 8 geworden und wollte unbedingt eine Hüpfburg. Es war perfekt und absolut empfehlenswert!', author: 'Familie aus Steyr' },
]

export default function Page() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${SITE_URL}/${geburtstag.slug}/#service`,
    name: 'Kindergeburtstag mit Hüpfburg', description: geburtstag.metaDescription,
    url: `${SITE_URL}/${geburtstag.slug}/`,
    provider: {
      '@type': 'LocalBusiness', name: 'Die Hupfarei', telephone: '+43-660-9395049', email: 'office@diehupfarei.at',
      address: { '@type': 'PostalAddress', streetAddress: 'Aichgraben 8', addressLocality: 'Kirchstetten', postalCode: '4064', addressRegion: 'Oberösterreich', addressCountry: 'AT' },
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oberösterreich' },
  }
  const faqSchema = geburtstag.faq && geburtstag.faq.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: geburtstag.faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <TopicPage
        data={geburtstag}
        packagesAfter={
          <ClownSeifenblasenExtras description="Der absolute Geburtstags-Knaller! Ein professioneller Clown führt die Kinder durch einen magischen Riesenseifenblasen-Workshop – die Kinder dürfen selbst riesige Seifenblasen machen!" />
        }
      >
        <section id="ablauf" className="scroll-mt-24 py-14 diagonal-bg">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">So läuft der perfekte Geburtstag ab</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 Deine Checkliste</h3>
                  <div className="space-y-4">
                    {CHECKLIST.map((c, i) => (
                      <div key={c.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">{i + 1}</div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{c.title}</h4>
                          <p className="text-gray-700 text-sm">{c.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Unsere Geburtstags-Tipps</h3>
                  <div className="space-y-3">
                    {TIPS.map((t) => (
                      <div key={t.title} className="bg-brand-yellow/5 rounded-xl p-3">
                        <h4 className="font-bold text-gray-800">{t.icon} {t.title}</h4>
                        <p className="text-gray-700 text-sm">{t.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl mt-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">💬 Das sagen Eltern</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={t.author} className={`${['bg-brand-purple/5', 'bg-brand-yellow/5', 'bg-brand-mint/5'][i]} rounded-2xl p-4`}>
                      <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
                      <p className="text-gray-700 italic text-sm mb-2">&ldquo;{t.quote}&rdquo;</p>
                      <p className="text-xs text-gray-500 font-semibold">- {t.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </TopicPage>
    </>
  )
}
