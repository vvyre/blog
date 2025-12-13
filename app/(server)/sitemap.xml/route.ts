import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { getCachedPostList, getNotionPageMeta } from 'features/notion'
import { getServerSideSitemap, type ISitemapField } from 'next-sitemap'
import { ENV } from 'static/env'

dayjs.extend(utc)
dayjs.extend(timezone)

export async function GET() {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)

  const postRssFields: ISitemapField[] = posts.map(post => {
    const meta = getNotionPageMeta(post)
    return {
      loc: `${ENV.NEXT_PUBLIC_ROOT}/${dayjs(meta.date).year()}/${meta.slug}`,
      lastmod: dayjs(meta.date).toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    }
  })

  const staticRssFields: ISitemapField[] = [
    {
      loc: `${ENV.NEXT_PUBLIC_ROOT}`,
      lastmod: dayjs().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: `${ENV.NEXT_PUBLIC_ROOT}/about`,
      lastmod: dayjs().toISOString(),
      changefreq: 'monthly',
      priority: 0.5,
    },
  ]

  const sitemapFields = staticRssFields.concat(postRssFields)

  return getServerSideSitemap(sitemapFields)
}
