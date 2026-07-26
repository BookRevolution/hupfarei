import type { Metadata } from 'next'
import RegionalPage from '@/components/regional-page'
import { wels } from '@/lib/cities/wels'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: wels.metaTitle,
  description: wels.metaDescription,
  keywords: wels.metaKeywords,
  alternates: {
    canonical: `/${wels.slug}/`,
  },
  openGraph: {
    title: wels.metaTitle,
    description: wels.metaDescription,
    url: `${SITE_URL}/${wels.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: `Hüpfburg mieten in ${wels.city} - Die Hupfarei`,
      },
    ],
  },
}

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/${wels.slug}/#localbusiness`,
    name: `Die Hupfarei - Hüpfburg Verleih ${wels.city}`,
    description: wels.metaDescription,
    url: `${SITE_URL}/${wels.slug}/`,
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
      { '@type': 'City', name: wels.city },
      ...wels.districts.map((d) => ({ '@type': 'Place', name: d })),
      ...wels.surrounding.map((s) => ({ '@type': 'City', name: s })),
    ],
    priceRange: '€€',
  }

  const faqSchema =
    wels.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: wels.faq.map((item) => ({
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
      <RegionalPage data={wels} />
    </>
  )
}
