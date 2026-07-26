import type { Metadata } from 'next'
import RegionalPage from '@/components/regional-page'
import { gmunden } from '@/lib/cities/gmunden'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: gmunden.metaTitle,
  description: gmunden.metaDescription,
  keywords: gmunden.metaKeywords,
  alternates: {
    canonical: `/${gmunden.slug}/`,
  },
  openGraph: {
    title: gmunden.metaTitle,
    description: gmunden.metaDescription,
    url: `${SITE_URL}/${gmunden.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: `Hüpfburg mieten in ${gmunden.city} - Die Hupfarei`,
      },
    ],
  },
}

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/${gmunden.slug}/#localbusiness`,
    name: `Die Hupfarei - Hüpfburg Verleih ${gmunden.city}`,
    description: gmunden.metaDescription,
    url: `${SITE_URL}/${gmunden.slug}/`,
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
      { '@type': 'City', name: gmunden.city },
      ...gmunden.districts.map((d) => ({ '@type': 'Place', name: d })),
      ...gmunden.surrounding.map((s) => ({ '@type': 'City', name: s })),
    ],
    priceRange: '€€',
  }

  const faqSchema =
    gmunden.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: gmunden.faq.map((item) => ({
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
      <RegionalPage data={gmunden} />
    </>
  )
}
