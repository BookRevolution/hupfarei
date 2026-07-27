import { MetadataRoute } from 'next'
import { linz } from '@/lib/cities/linz'
import { wels } from '@/lib/cities/wels'
import { steyr } from '@/lib/cities/steyr'
import { gmunden } from '@/lib/cities/gmunden'
import { voecklabruck } from '@/lib/cities/voecklabruck'
import { braunau } from '@/lib/cities/braunau'
import { baellebad } from '@/lib/topics/baellebad'
import { clown } from '@/lib/topics/clown'
import { geburtstag } from '@/lib/topics/geburtstag'
import { kinderfest } from '@/lib/topics/kinderfest'
import { riesenseifenblasen } from '@/lib/topics/riesenseifenblasen'
import { preise } from '@/lib/topics/preise'
import { pfarrfest } from '@/lib/topics/pfarrfest'
import { firmenfest } from '@/lib/topics/firmenfest'
import { indoor } from '@/lib/topics/indoor'

export const dynamic = 'force-static'

const SITE = 'https://www.diehupfarei.at'
const CITIES = [linz, wels, steyr, gmunden, voecklabruck, braunau]
const TOPICS = [preise, pfarrfest, firmenfest, indoor, baellebad, clown, geburtstag, kinderfest, riesenseifenblasen]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...CITIES.map((c) => ({
      url: `${SITE}/${c.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...TOPICS.map((t) => ({
      url: `${SITE}/${t.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
