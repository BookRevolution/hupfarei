import type { Metadata } from 'next'
import RegionalPage from '@/components/regional-page'
import { steyr } from '@/lib/cities/steyr'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: steyr.metaTitle,
  description: steyr.metaDescription,
  keywords: steyr.metaKeywords,
  alternates: {
    canonical: `/${steyr.slug}/`,
  },
  openGraph: {
    title: steyr.metaTitle,
    description: steyr.metaDescription,
    url: `${SITE_URL}/${steyr.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: `Hüpfburg mieten in ${steyr.city} - Die Hupfarei`,
      },
    ],
  },
}

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/${steyr.slug}/#localbusiness`,
    name: `Die Hupfarei - Hüpfburg Verleih ${steyr.city}`,
    description: steyr.metaDescription,
    url: `${SITE_URL}/${steyr.slug}/`,
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
      { '@type': 'City', name: steyr.city },
      ...steyr.districts.map((d) => ({ '@type': 'Place', name: d })),
      ...steyr.surrounding.map((s) => ({ '@type': 'City', name: s })),
    ],
    priceRange: '€€',
  }

  const faqSchema =
    steyr.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: steyr.faq.map((item) => ({
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
      <RegionalPage data={steyr} />
    </>
  )
}
