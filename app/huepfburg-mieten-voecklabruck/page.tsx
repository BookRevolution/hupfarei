import type { Metadata } from 'next'
import RegionalPage from '@/components/regional-page'
import { voecklabruck } from '@/lib/cities/voecklabruck'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: voecklabruck.metaTitle,
  description: voecklabruck.metaDescription,
  keywords: voecklabruck.metaKeywords,
  alternates: {
    canonical: `/${voecklabruck.slug}/`,
  },
  openGraph: {
    title: voecklabruck.metaTitle,
    description: voecklabruck.metaDescription,
    url: `${SITE_URL}/${voecklabruck.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: `Hüpfburg mieten in ${voecklabruck.city} - Die Hupfarei`,
      },
    ],
  },
}

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/${voecklabruck.slug}/#localbusiness`,
    name: `Die Hupfarei - Hüpfburg Verleih ${voecklabruck.city}`,
    description: voecklabruck.metaDescription,
    url: `${SITE_URL}/${voecklabruck.slug}/`,
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
    areaServed: [
      { '@type': 'City', name: voecklabruck.city },
      ...voecklabruck.districts.map((d) => ({ '@type': 'Place', name: d })),
      ...voecklabruck.surrounding.map((s) => ({ '@type': 'City', name: s })),
    ],
    priceRange: '€€',
  }

  const faqSchema =
    voecklabruck.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: voecklabruck.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <RegionalPage data={voecklabruck} />
    </>
  )
}
