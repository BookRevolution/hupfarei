import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import { clown } from '@/lib/topics/clown'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: clown.metaTitle,
  description: clown.metaDescription,
  keywords: clown.metaKeywords,
  alternates: { canonical: `/${clown.slug}/` },
  openGraph: {
    title: clown.metaTitle,
    description: clown.metaDescription,
    url: `${SITE_URL}/${clown.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: '/huepfburg.webp', width: 1200, height: 630, alt: `${clown.topic} mieten in Oberösterreich - Die Hupfarei` }],
  },
}

const PROGRAMM = [
  { title: 'Begrüßung & Kennenlernen', description: 'Der Clown stellt sich vor und bricht das Eis mit lustigen Gags' },
  { title: 'Interaktive Spiele', description: 'Lustige Spiele, bei denen alle Kinder mitmachen können' },
  { title: 'Ballonmodellage', description: 'Jedes Kind bekommt ein tolles Ballon-Kunstwerk' },
  { title: 'Zaubertricks', description: 'Verblüffende Zaubertricks, die Kinder staunen lassen' },
  { title: 'Große Finale', description: 'Abschluss-Show mit Tricks und Überraschungen!' },
]

const TESTIMONIALS = [
  { quote: 'Der Clown war der absolute Hit! Alle Kinder waren begeistert und haben gelacht ohne Ende!', author: 'Familie M. aus Linz' },
  { quote: 'So ein lustiger und liebevoller Clown! Die Kinder konnten gar nicht genug bekommen!', author: 'Sarah aus Wels' },
  { quote: 'Mein Sohn ist 6 geworden und der Clown hat ihm den schönsten Tag bereitet!', author: 'Papa aus Steyr' },
]

export default function Page() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${SITE_URL}/${clown.slug}/#service`,
    name: 'Clown mieten Oberösterreich',
    description: clown.metaDescription,
    url: `${SITE_URL}/${clown.slug}/`,
    provider: {
      '@type': 'LocalBusiness', name: 'Die Hupfarei',
      telephone: '+43-660-9395049', email: 'office@diehupfarei.at',
      address: { '@type': 'PostalAddress', streetAddress: 'Aichgraben 8', addressLocality: 'Kirchstetten', postalCode: '4064', addressRegion: 'Oberösterreich', addressCountry: 'AT' },
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oberösterreich' },
  }
  const faqSchema = clown.faq && clown.faq.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: clown.faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <TopicPage data={clown}>
        <section id="ablauf" className="scroll-mt-24 py-14 diagonal-bg">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">So läuft eine Clown-Show ab</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">🎪 Das Programm</h3>
                  <div className="space-y-4">
                    {PROGRAMM.map((p, i) => (
                      <div key={p.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">{i + 1}</div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-800 mb-1">{p.title}</h4>
                          <p className="text-gray-700 text-sm">{p.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">💬 Das sagen Eltern</h3>
                  <div className="space-y-4">
                    {TESTIMONIALS.map((t, i) => (
                      <div key={t.author} className={`${['bg-brand-purple/5', 'bg-brand-yellow/5', 'bg-brand-mint/5'][i]} rounded-2xl p-5`}>
                        <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
                        <p className="text-gray-700 italic mb-2">&ldquo;{t.quote}&rdquo;</p>
                        <p className="text-sm text-gray-500 font-semibold">- {t.author}</p>
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
