import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { getCachedPostList } from 'features/notion/utils/notionFetch.util'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import { getServerSideSitemap, type ISitemapField } from 'next-sitemap'
import { ENV } from 'static/env'

dayjs.extend(utc)
dayjs.extend(timezone)

export async function GET() {
  const posts = await getCachedPostList(ENV.NOTION_DATABASE_ID)

  const rssFields: ISitemapField[] = posts.map(post => {
    const meta = pageMeta(post)
    return {
      loc: `${ENV.NEXT_PUBLIC_ROOT}/${dayjs(meta.date).year()}/${meta.slug}`,
      lastmod: dayjs(meta.date).toISOString(),
      changefreq: 'daily',
      priority: 0.8,
    }
  })

  return getServerSideSitemap(rssFields)
}
