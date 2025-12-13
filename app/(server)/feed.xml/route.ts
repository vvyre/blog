import siteMeta from 'assets/meta'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { getCachedPostList } from 'features/notion/remote/notionFetch.server'
import { getNotionPageMeta } from 'features/notion/utils/meta/getNotionPageMeta'
import RSS from 'rss'
import { ENV } from 'static/env'

dayjs.extend(utc)
dayjs.extend(timezone)

export async function GET() {
  const feed = new RSS({
    title: siteMeta.title,
    description: siteMeta.description,
    site_url: `${ENV.NEXT_PUBLIC_ROOT}`,
    feed_url: `${ENV.NEXT_PUBLIC_ROOT}/feed.xml`,
    copyright: siteMeta.author,
    language: 'ko',
    pubDate: dayjs().tz('Asia/Seoul').format('YYYY-MM-DD'),
  })
  try {
    const postList = await getCachedPostList(ENV.NOTION_DATABASE_ID)
    postList.forEach(post => {
      const meta = getNotionPageMeta(post)
      feed.item({
        title: meta.title,
        description: meta.summary,
        url: `${ENV.NEXT_PUBLIC_ROOT}/${dayjs(meta.date).year()}/${meta.slug}`,
        date: meta.date,
        author: siteMeta.author,
      })
    })

    return new Response(feed.xml(), {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    })
  } catch (err) {
    return new Response(`rss: internal server error \n ${err} \n`, { status: 500 })
  }
}
