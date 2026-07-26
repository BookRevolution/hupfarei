import type { Metadata } from 'next'
import RegionalPage from '@/components/regional-page'
import { linz } from '@/lib/cities/linz'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: linz.metaTitle,
  description: linz.metaDescription,
  keywords: linz.metaKeywords,
  alternates: {
    canonical: `/${linz.slug}/`,
  },
  openGraph: {
    title: linz.metaTitle,
    description: linz.metaDescription,
    url: `${SITE_URL}/${linz.slug}/`,
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: `Hüpfburg mieten in ${linz.city} - Die Hupfarei`,
      },
    ],
  },
}

export default function Page() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/${linz.slug}/#localbusiness`,
    name: `Die Hupfarei - Hüpfburg Verleih ${linz.city}`,
    description: linz.metaDescription,
    url: `${SITE_URL}/${linz.slug}/`,
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
      { '@type': 'City', name: linz.city },
      ...linz.districts.map((d) => ({ '@type': 'Place', name: d })),
      ...linz.surrounding.map((s) => ({ '@type': 'City', name: s })),
    ],
    priceRange: '€€',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: linz.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RegionalPage data={linz} />
    </>
  )
}
