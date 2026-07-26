import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import ClownSeifenblasenExtras from '@/components/clown-seifenblasen-extras'
import { kinderfest } from '@/lib/topics/kinderfest'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: kinderfest.metaTitle,
  description: kinderfest.metaDescription,
  keywords: kinderfest.metaKeywords,
  alternates: { canonical: `/${kinderfest.slug}/` },
  openGraph: {
    title: kinderfest.metaTitle,
    description: kinderfest.metaDescription,
    url: `${SITE_URL}/${kinderfest.slug}/`,
    siteName: 'Die Hupfarei', locale: 'de_AT', type: 'website',
    images: [{ url: '/huepfburg.webp', width: 1200, height: 630, alt: 'Kinderfest mieten in Oberösterreich - Die Hupfarei' }],
  },
}

const STRESSFREI_ITEMS = [
  '1. Paket auswählen',
  '2. Termin vereinbaren',
  '3. Hüpfburg abholen',
  '4. Zuhause aufbauen',
  '5. Feiern & genießen!',
]

const INKLUSIVE_ITEMS = [
  'Hüpfburg mit Rutsche',
  'Bällebad mit 1.200 Bällen',
  'Anhänger für Transport',
  'Aufbauanleitung',
  'Alle gewählten Extras',
  'Persönliche Beratung',
]

const TESTIMONIALS = [
  { quote: 'Perfekt für unser Sommerfest im Kindergarten! Die Kinder hatten riesigen Spaß und die Organisation war super einfach!', author: 'Kindergarten Linz' },
  { quote: 'Das Komplettpaket mit Popcorn und Zuckerwatte kam super an! Alle Kinder waren begeistert.', author: 'Familie aus Wels' },
  { quote: 'Tolles Service für unser Firmenfest! Die Kinder der Mitarbeiter waren happy und wir hatten keinen Stress.', author: 'Firma aus Steyr' },
]

const PLANUNG = [
  { strong: '2-3 Wochen vorher buchen', rest: '(besonders in der Saison)' },
  { strong: 'Platz im Garten prüfen', rest: '(ca. 4x5 Meter benötigt)' },
  { strong: 'Stromanschluss sicherstellen', rest: '(für Gebläse)' },
  { strong: 'Wetter im Auge behalten', rest: '(bei Regen alternativen Plan)' },
  { strong: 'Einladungen rechtzeitig verschicken', rest: '' },
]

const FESTTAG = [
  { strong: 'Aufbau ca. 30 Min einplanen', rest: '' },
  { strong: 'Aufsichtsperson einteilen', rest: '(Erwachsener)' },
  { strong: 'Getränke bereitstellen', rest: '(Kinder haben Durst!)' },
  { strong: 'Fotos & Videos machen', rest: '(für die Erinnerung)' },
  { strong: 'Entspannen & genießen!', rest: '' },
]

export default function Page() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${SITE_URL}/${kinderfest.slug}/#service`,
    name: 'Kinderfest mieten Oberösterreich', description: kinderfest.metaDescription,
    url: `${SITE_URL}/${kinderfest.slug}/`,
    provider: {
      '@type': 'LocalBusiness', name: 'Die Hupfarei', telephone: '+43-660-9395049', email: 'office@diehupfarei.at',
      address: { '@type': 'PostalAddress', streetAddress: 'Aichgraben 8', addressLocality: 'Kirchstetten', postalCode: '4064', addressRegion: 'Oberösterreich', addressCountry: 'AT' },
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oberösterreich' },
  }
  const faqSchema = kinderfest.faq && kinderfest.faq.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: kinderfest.faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <TopicPage
        data={kinderfest}
        packagesAfter={
          <ClownSeifenblasenExtras description="Das ultimative Highlight für dein Kinderfest! Ein professioneller Clown begeistert die Kinder mit einem interaktiven Riesenseifenblasen-Workshop – die Kinder machen selbst mit und erleben pure Magie!" />
        }
      >
        {/* Section: Warum Die Hupfarei */}
        <section id="vorteile" className="scroll-mt-24 py-14 diagonal-bg">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Warum Die Hupfarei für Ihr Kinderfest?</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🎉 Stressfreie Organisation</h3>
                  <p className="text-gray-700 mb-4">Mit unserem Komplettservice wird die Organisation zum Kinderspiel! Du musst dich um nichts kümmern.</p>
                  <div className="bg-brand-mint/10 rounded-2xl p-4">
                    <p className="font-bold text-purple-700 mb-2">✅ So einfach geht&apos;s:</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {STRESSFREI_ITEMS.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">💰 Faire Komplettpreise</h3>
                  <p className="text-gray-700 mb-4">Transparente Preise ohne versteckte Kosten – alles ist im Paket enthalten!</p>
                  <div className="bg-brand-yellow/10 rounded-2xl p-4">
                    <p className="font-bold text-purple-700 mb-2">✅ Immer inklusive:</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      {INKLUSIVE_ITEMS.map((i) => <li key={i}>• {i}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">💬 Erfolgreiche Kinderfeste in OÖ</h3>
                  <div className="space-y-4">
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
          </div>
        </section>

        {/* Section: Tipps */}
        <section id="tipps" className="scroll-mt-24 py-14 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Tipps für dein perfektes Kinderfest</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-brand-pink/10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">📅 Planung & Vorbereitung</h3>
                  <ul className="space-y-3 text-gray-700">
                    {PLANUNG.map((p) => (
                      <li key={p.strong}>✅ <span className="font-semibold">{p.strong}</span> {p.rest}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-brand-yellow/20">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🎉 Am Fest-Tag</h3>
                  <ul className="space-y-3 text-gray-700">
                    {FESTTAG.map((p) => (
                      <li key={p.strong}>✅ <span className="font-semibold">{p.strong}</span> {p.rest}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TopicPage>
    </>
  )
}
