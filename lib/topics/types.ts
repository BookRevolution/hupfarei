import { FAQItem, Package } from '@/lib/cities/types'

export type FeatureCard = {
  icon: string
  title: string
  description: string
}

export type TopicData = {
  slug: string
  topic: string

  hero: {
    badge: string
    headlinePrefix: string
    topicHighlight: string
    headlineSuffix: string
    subheadline: string
    primaryCta: string
    checks: string[]
  }

  features: {
    title: string
    intro?: string
    items: FeatureCard[]
    callout?: { title: string; description: string }
  }

  packages: {
    title: string
    subtitle?: string
    items: Package[]
    callout?: { title: string; description: string }
  }

  contact: {
    title: string
    paragraph: string
    locationLabel: string
    locationValue: string
  }

  faq?: FAQItem[]

  metaTitle: string
  metaDescription: string
  metaKeywords: string

  footerTitle: string
  footerSubtitle: string
}
