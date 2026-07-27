import type { Metadata } from 'next'
import TopicPage from '@/components/topic-page'
import { pfarrfest } from '@/lib/topics/pfarrfest'
import { AB_PREISE } from '@/lib/pricing'

const SITE_URL = 'https://www.diehupfarei.at'

export const metadata: Metadata = {
  title: pfarrfest.metaTitle,
  description: pfarrfest.metaDescription,
  keywords: pfarrfest.metaKeywords,
  alternates: { canonical: `/${pfarrfest.slug}/` },
  openGraph: {
    title: pfarrfest.metaTitle,
    description: pfarrfest.metaDescription,
    url: `${SITE_URL}/${pfarrfest.slug}/`,
    siteName: 'Die Hupfarei', locale: 'de_AT', type: 'website',
    images: [{ url: '/huepfburg.webp', width: 1200, height: 630, alt: 'Hüpfburg für Pfarrfest & Zeltfest in Oberösterreich' }],
  },
}

export default function Page() {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${SITE_URL}/${pfarrfest.slug}/#service`,
    name: 'Hüpfburg für Pfarrfest & Zeltfest in Oberösterreich',
    description: pfarrfest.metaDescription,
    url: `${SITE_URL}/${pfarrfest.slug}/`,
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
      { '@type': 'ListItem', position: 2, name: pfarrfest.topic, item: `${SITE_URL}/${pfarrfest.slug}/` },
    ],
  }
  const faqSchema = pfarrfest.faq && pfarrfest.faq.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: pfarrfest.faq.map((i) => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <TopicPage data={pfarrfest} />
    </>
  )
}
