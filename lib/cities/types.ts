export type Testimonial = {
  quote: string
  author: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type UseCase = {
  icon: string
  title: string
  description: string
}

export type Package = {
  emoji: string
  name: string
  price: string
  features: string[]
  popular?: boolean
}

export type CityData = {
  slug: string
  city: string
  citizenName: string
  pickupLocation: string

  hero: {
    headlinePrefix: string
    cityHighlight: string
    headlineSuffix: string
    subheadline: string
  }

  intro: {
    title: string
    paragraph: string
  }

  districts: string[]
  surrounding: string[]
  benefits: string[]

  pickupNote: {
    title: string
    paragraph: string
  }

  useCases: UseCase[]
  testimonials: Testimonial[]

  packages: Package[]
  specialOffer: {
    title: string
    description: string
  }

  faq: FAQItem[]

  metaTitle: string
  metaDescription: string
  metaKeywords: string
}
