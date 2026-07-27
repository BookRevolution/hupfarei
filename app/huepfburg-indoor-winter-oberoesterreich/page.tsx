import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import { indoor } from '@/lib/topics/indoor'
import { AB_PREISE } from '@/lib/pricing'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: indoor.metaTitle,
  description: indoor.metaDescription,
  keywords: indoor.metaKeywords,
  alternates: { canonical: `/${indoor.slug}/` },
  openGraph: {
    title: indoor.metaTitle,
    description: indoor.metaDescription,
    url: `${SITE_URL}/${indoor.slug}/`,
    siteName: 'Die Hupfarei', locale: 'de_AT', type: 'website',
    images: [{ url: '/huepfburg.webp', width: 1200, height: 630, alt: 'Hüpfburg indoor mieten in Oberösterreich' }],
  },
}

export default function Page() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${SITE_URL}/${indoor.slug}/#service`,
    name: 'Hüpfburg indoor mieten in Oberösterreich',
    description: indoor.metaDescription,
    url: `${SITE_URL}/${indoor.slug}/`,
    serviceType: 'Hüpfburgverleih',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Oberösterreich' },
    offers: [
      { '@type': 'Offer', name: 'Hüpfburg Basis', price: String(AB_PREISE.basis), priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Hüpfburg + Extras', price: String(AB_PREISE.extras), priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Clown & Riesenseifenblasen', price: String(AB_PREISE.clown), priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
    ],
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: indoor.topic, item: `${SITE_URL}/${indoor.slug}/` },
    ],
  }
  const faqSchema = indoor.faq && indoor.faq.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: indoor.faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <TopicPage data={indoor} />
    </>
  )
}
