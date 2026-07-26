import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import { baellebad } from '@/lib/topics/baellebad'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: baellebad.metaTitle,
  description: baellebad.metaDescription,
  keywords: baellebad.metaKeywords,
  alternates: { canonical: `/${baellebad.slug}/` },
  openGraph: {
    title: baellebad.metaTitle,
    description: baellebad.metaDescription,
    url: `${SITE_URL}/${baellebad.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: `${baellebad.topic} mieten in Oberösterreich - Die Hupfarei`,
      },
    ],
  },
}

const TESTIMONIALS = [
  {
    quote: 'Die Kinder haben das Bällebad geliebt! Sie wollten gar nicht mehr raus. Top Qualität und so viele Bälle!',
    author: 'Familie aus Linz',
  },
  {
    quote: 'Das integrierte Bällebad ist genial! Hüpfen UND Bälle – doppelter Spaß auf einer Fläche!',
    author: 'Mama aus Wels',
  },
  {
    quote: 'Saubere Bälle in tollen Farben. Die Kinder waren begeistert. Absolut empfehlenswert!',
    author: 'Papa aus Steyr',
  },
]

const REGIONS = [
  { title: 'Linz & Umgebung', description: 'Linz, Urfahr, Ebelsberg, Leonding, Traun', color: 'bg-brand-pink' },
  { title: 'Wels & Wels-Land', description: 'Wels, Marchtrenk, Gunskirchen, Thalheim', color: 'bg-brand-yellow' },
  { title: 'Steyr & Ennstal', description: 'Steyr, Garsten, Sierning, Bad Hall', color: 'bg-brand-mint' },
  { title: 'Ganz OÖ', description: 'Gmunden, Vöcklabruck, Braunau & mehr', color: 'bg-brand-blue' },
]

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${baellebad.slug}/#service`,
    name: 'Bällebad mieten Oberösterreich',
    description: baellebad.metaDescription,
    url: `${SITE_URL}/${baellebad.slug}/`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Die Hupfarei',
      telephone: '+43-660-9395049',
      email: 'office@diehupfarei.at',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Aichgraben 8',
        addressLocality: 'Kirchstetten',
        postalCode: '4064',
        addressRegion: 'Oberösterreich',
        addressCountry: 'AT',
      },
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oberösterreich' },
  }

  const faqSchema = baellebad.faq && baellebad.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: baellebad.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <TopicPage data={baellebad}>
        {/* Custom: Vorteile für Kinderfest */}
        <section id="vorteile-baellebad" className="scroll-mt-24 py-14 diagonal-bg">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              Vorteile für Ihr Kinderfest
            </h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🎂 Perfekt für Kindergeburtstage</h3>
                  <p className="text-gray-700 mb-4">
                    Ein Bällebad ist das Highlight auf jedem Kindergeburtstag! Die Kinder lieben es, in die bunten Bälle zu springen und darin zu tauchen.
                  </p>
                  <div className="bg-brand-yellow/10 rounded-2xl p-4">
                    <p className="font-bold text-purple-700 mb-2">✅ Warum Kinder Bällebäder lieben:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Sensorisches Erlebnis</li>
                      <li>• Motorische Entwicklung</li>
                      <li>• Soziales Spielen</li>
                      <li>• Unbegrenzter Spaß</li>
                      <li>• Sicheres Spielen</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🏡 Für jeden Garten geeignet</h3>
                  <p className="text-gray-700 mb-4">
                    Das Bällebad ist integriert in unsere kompakte Hüpfburg – perfekt für jeden Garten in Oberösterreich!
                  </p>
                  <div className="bg-brand-mint/10 rounded-2xl p-4">
                    <p className="font-bold text-purple-700 mb-2">✅ Einfache Handhabung:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Aufbau in 10 Minuten</li>
                      <li>• Platzsparend</li>
                      <li>• Leicht zu reinigen</li>
                      <li>• Anhänger inklusive</li>
                      <li>• Komplette Ausstattung</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">💬 Das sagen Eltern</h3>
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

        {/* Custom: Verfügbar in OÖ */}
        <section id="verfuegbarkeit" className="scroll-mt-24 py-14 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
              Verfügbar in ganz Oberösterreich
            </h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {REGIONS.map((r) => (
                  <div key={r.title} className="bg-gradient-to-br from-brand-pink/5 to-brand-purple/5 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transition-all">
                    <div className={`w-16 h-16 ${r.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-3xl">📍</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">{r.title}</h4>
                    <p className="text-gray-600 text-sm">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </TopicPage>
    </>
  )
}
