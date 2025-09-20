import { NotionPageMeta } from 'types/notion.types'
import dayjs from 'dayjs'

export const pageMeta = (meta: NotionPageMeta) => ({
  title: meta.properties.title.title.map(t => t.plain_text).join(''),
  tags: meta.properties.tags.multi_select,
  summary: meta.properties.summary.rich_text.map(t => t.plain_text).join(''),
  slug: meta.properties.slug.rich_text.map(t => t.plain_text).join(''),
  date: dayjs(meta.properties.date.date?.start),
})
