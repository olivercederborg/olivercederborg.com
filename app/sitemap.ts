import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://olivercederborg.com'

  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/side-projects`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/tsks`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/miinto`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/project/100-days-of-ui`,
      lastModified: new Date(),
    },
  ]
}
