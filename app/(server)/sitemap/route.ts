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
  const engineeringPosts = await getCachedPostList(ENV.NOTION_DATABASE_ID)

  const engineeringSlugs = engineeringPosts.map(post => {
    const meta = pageMeta(post)
    return `${ENV.NEXT_PUBLIC_ROOT}/${dayjs(meta.date).year()}/${meta.slug}`
  })

  const slugs = getSiteMapField(engineeringSlugs, 'daily')
  return getServerSideSitemap(slugs)
}

const getSiteMapField = (slugs: string[], changefreq?: ISitemapField['changefreq']): ISitemapField[] =>
  slugs.map(slug => {
    return {
      loc: slug,
      lastmod: dayjs().tz('Asia/Seoul').toISOString(),
      changefreq,
      priority: 1,
    }
  })
