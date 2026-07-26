import './globals.css'
import type { Metadata } from 'next'
import Analytics from './analytics'
import WhatsAppFloat from '@/components/whatsapp-float'

export const metadata: Metadata = {
  title: 'Die Hupfarei - Hüpfburg mieten in Oberösterreich | Linz & Umgebung',
  description: 'Hüpfburg mit Bällebad mieten in Oberösterreich! Die Hupfarei vermietet Hüpfburgen für Geburtstage, Feste & Events in Linz & Umgebung. Einfache Abholung mit Anhänger inklusive.',
  keywords: 'Hüpfburg mieten, Hüpfburg Oberösterreich, Hüpfburg Linz, Bällebad mieten, Kinderfest, Geburtstag, Hüpfburgverleih, Die Hupfarei, Hüpfburg Verleih OÖ, Kirchstetten, Oftering',
  authors: [{ name: 'Die Hupfarei Team' }],
  creator: 'Die Hupfarei',
  publisher: 'Die Hupfarei',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.diehupfarei.at'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Die Hupfarei - Hüpfburg mieten in Oberösterreich',
    description: 'Hüpfburg mit Bällebad mieten in OÖ! Einfache Abholung mit Anhänger für Geburtstage, Feste & Events in Linz & Umgebung.',
    url: 'https://www.diehupfarei.at',
    siteName: 'Die Hupfarei',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/huepfburg.webp',
        width: 1200,
        height: 630,
        alt: 'Die Hupfarei - Hüpfburg mit Bällebad für Kinderfeste',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Die Hupfarei - Hüpfburg mieten in Oberösterreich',
    description: 'Hüpfburg mit Bällebad mieten in OÖ! Einfache Abholung für Kinderfeste in Linz & Umgebung.',
    images: ['/huepfburg.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="de-AT">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#A855F7" />
        <meta name="msapplication-TileColor" content="#A855F7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Lokale Geschäfts-Metadaten */}
        <meta name="geo.region" content="AT-4" />
        <meta name="geo.placename" content="Oberösterreich" />
        <meta name="geo.position" content="48.3069;14.2858" />
        <meta name="ICBM" content="48.3069, 14.2858" />
        
        {/* Strukturierte Daten für lokales Geschäft */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.diehupfarei.at/#organization",
              "name": "Die Hupfarei",
              "alternateName": "DieHupfarei",
              "description": "Hüpfburgverleih mit Herz aus Oberösterreich. Hüpfburg mit Bällebad mieten für Kinderfeste, Geburtstage und Events.",
              "url": "https://www.diehupfarei.at",
              "telephone": "+43-660-9395049",
              "email": "office@diehupfarei.at",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Aichgraben 8",
                "addressLocality": "Kirchstetten",
                "postalCode": "4064",
                "addressRegion": "Oberösterreich",
                "addressCountry": "AT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.3069,
                "longitude": 14.2858
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.facebook.com/diehupfarei",
                "https://www.instagram.com/diehupfarei"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.3069,
                  "longitude": 14.2858
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hüpfburg Verleih Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hüpfburg mit Bällebad Verleih",
                      "description": "Hüpfburg mit integriertem Bällebad und 1.200 bunten Bällen für Kinderfeste"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "25",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
        
        {/* FAQ Strukturierte Daten */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Wie funktioniert die Abholung der Hüpfburg?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Du holst die Hüpfburg auf dem Anhänger direkt bei uns in Oftering oder Linz/Ebelsberg ab. Der Anhänger ist im Mietpreis enthalten - du brauchst nur ein Auto mit Anhängerkupplung."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Ist das Bällebad inklusive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unser integriertes Bällebad mit 1.200 bunten Bällen ist bei jeder Hüpfburg dabei! Saubere, geprüfte Bälle für maximalen Spaß – ohne Aufpreis!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "In welchen Gebieten vermietet ihr?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Wir vermieten in ganz Oberösterreich - schnell und unkompliziert für dein Kinderfest! Schwerpunkt liegt auf Linz und Umgebung."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-bg text-ink antialiased">
        <Analytics />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
