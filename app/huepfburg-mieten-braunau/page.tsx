import type { Metadata } from 'next'
import RegionalPage from '@/components/regional-page'
import { braunau } from '@/lib/cities/braunau'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: braunau.metaTitle,
  description: braunau.metaDescription,
  keywords: braunau.metaKeywords,
  alternates: {
    canonical: `/${braunau.slug}/`,
  },
  openGraph: {
    title: braunau.metaTitle,
    description: braunau.metaDescription,
    url: `${SITE_URL}/${braunau.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: `Hüpfburg mieten in ${braunau.city} - Die Hupfarei`,
      },
    ],
  },
}

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/${braunau.slug}/#localbusiness`,
    name: `Die Hupfarei - Hüpfburg Verleih ${braunau.city}`,
    description: braunau.metaDescription,
    url: `${SITE_URL}/${braunau.slug}/`,
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
      { '@type': 'City', name: braunau.city },
      ...braunau.districts.map((d) => ({ '@type': 'Place', name: d })),
      ...braunau.surrounding.map((s) => ({ '@type': 'City', name: s })),
    ],
    priceRange: '€€',
  }

  const faqSchema =
    braunau.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: braunau.faq.map((item) => ({
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
      <RegionalPage data={braunau} />
    </>
  )
}
