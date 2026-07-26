import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import { riesenseifenblasen } from '@/lib/topics/riesenseifenblasen'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: riesenseifenblasen.metaTitle,
  description: riesenseifenblasen.metaDescription,
  keywords: riesenseifenblasen.metaKeywords,
  alternates: { canonical: `/${riesenseifenblasen.slug}/` },
  openGraph: {
    title: riesenseifenblasen.metaTitle,
    description: riesenseifenblasen.metaDescription,
    url: `${SITE_URL}/${riesenseifenblasen.slug}/`,
    siteName: 'Die Hupfarei', locale: 'de_AT', type: 'website',
    images: [{ url: '/huepfburg.webp', width: 1200, height: 630, alt: 'Riesenseifenblasen-Workshop in Oberösterreich - Die Hupfarei' }],
  },
}

const TESTIMONIALS = [
  { quote: 'Der Seifenblasen-Workshop war das Highlight des Geburtstags! Die Kinder waren völlig fasziniert und wollten gar nicht mehr aufhören!', author: 'Mama aus Linz' },
  { quote: 'So magisch! Der Clown hat die Kinder perfekt angeleitet und alle haben mitgemacht. Tolles Erlebnis!', author: 'Familie aus Wels' },
  { quote: 'Die Fotos mit den Riesenseifenblasen sind unbezahlbar! Ein unvergessliches Erlebnis für die ganze Familie.', author: 'Papa aus Steyr' },
]

export default function Page() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${SITE_URL}/${riesenseifenblasen.slug}/#service`,
    name: 'Riesenseifenblasen-Workshop Oberösterreich', description: riesenseifenblasen.metaDescription,
    url: `${SITE_URL}/${riesenseifenblasen.slug}/`,
    provider: {
      '@type': 'LocalBusiness', name: 'Die Hupfarei', telephone: '+43-660-9395049', email: 'office@diehupfarei.at',
      address: { '@type': 'PostalAddress', streetAddress: 'Aichgraben 8', addressLocality: 'Kirchstetten', postalCode: '4064', addressRegion: 'Oberösterreich', addressCountry: 'AT' },
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oberösterreich' },
  }
  const faqSchema = riesenseifenblasen.faq && riesenseifenblasen.faq.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: riesenseifenblasen.faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <TopicPage data={riesenseifenblasen}>
        <section id="warum" className="scroll-mt-24 py-14 diagonal-bg">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Warum Kinder Riesenseifenblasen lieben</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Das Besondere</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Riesenseifenblasen sind magisch! Kinder sind fasziniert, wenn sie selbst meterlange, schillernde Seifenblasen erschaffen.
                  </p>
                  <div className="bg-brand-yellow/10 rounded-2xl p-4">
                    <h4 className="font-bold text-purple-700 mb-2">📸 Perfekt für Fotos!</h4>
                    <p className="text-gray-700 text-sm">
                      Die schillernden Riesenseifenblasen im Sonnenlicht sind ein unvergesslicher Anblick und schaffen magische Erinnerungsfotos.
                    </p>
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
      </TopicPage>
    </>
  )
}
