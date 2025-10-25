import meta from 'assets/meta'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { getCachedPostList } from 'features/notion/utils/notionFetch.util'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import RSS from 'rss'
import { ENV } from 'static/env'

dayjs.extend(utc)
dayjs.extend(timezone)

export async function GET() {
  const feed = new RSS({
    title: meta.title,
    description: meta.description,
    site_url: `${ENV.NEXT_PUBLIC_ROOT}`,
    feed_url: `${ENV.NEXT_PUBLIC_ROOT}/feed`,
    copyright: 'Seungyoon Yu',
    language: 'ko',
    pubDate: dayjs().tz('Asia/Seoul').format('YYYY-MM-DD'),
  })
  try {
    const postList = await getCachedPostList(ENV.NOTION_DATABASE_ID)
    postList.forEach(post => {
      const meta = pageMeta(post)
      feed.item({
        title: meta.title,
        description: meta.summary,
        url: `${ENV.NEXT_PUBLIC_ROOT}/${dayjs(meta.date).year()}/${meta.slug}`,
        date: meta.date,
        author: 'Seungyoon Yu',
      })
    })
    return new Response(feed.xml(), {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error(err)
    return new Response('error')
  }
}
