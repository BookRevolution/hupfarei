import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import { firmenfest } from '@/lib/topics/firmenfest'
import { AB_PREISE } from '@/lib/pricing'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: firmenfest.metaTitle,
  description: firmenfest.metaDescription,
  keywords: firmenfest.metaKeywords,
  alternates: { canonical: `/${firmenfest.slug}/` },
  openGraph: {
    title: firmenfest.metaTitle,
    description: firmenfest.metaDescription,
    url: `${SITE_URL}/${firmenfest.slug}/`,
    siteName: 'Die Hupfarei', locale: 'de_AT', type: 'website',
    images: [{ url: '/huepfburg.webp', width: 1200, height: 630, alt: 'Kinderprogramm für Firmenfeste in Oberösterreich' }],
  },
}

export default function Page() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${SITE_URL}/${firmenfest.slug}/#service`,
    name: 'Kinderprogramm für Firmenfeste in Oberösterreich',
    description: firmenfest.metaDescription,
    url: `${SITE_URL}/${firmenfest.slug}/`,
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
      { '@type': 'ListItem', position: 2, name: firmenfest.topic, item: `${SITE_URL}/${firmenfest.slug}/` },
    ],
  }
  const faqSchema = firmenfest.faq && firmenfest.faq.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: firmenfest.faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <TopicPage data={firmenfest} />
    </>
  )
}
