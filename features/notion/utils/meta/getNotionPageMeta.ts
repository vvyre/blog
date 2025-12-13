import dayjs from 'dayjs'
import type { NotionPageMeta } from 'features/notion'
import { getPlainText } from '../../components/richText/getPlainText'

/**
 * date: YYYY-MM-DD
 */
export const getNotionPageMeta = (meta: NotionPageMeta) => ({
  title: getPlainText(meta.properties.title.title),
  tags: meta.properties.tags.multi_select,
  summary: getPlainText(meta.properties.summary.rich_text),
  slug: getPlainText(meta.properties.slug.rich_text),
  date: dayjs(meta.properties.date.date?.start).format('YYYY-MM-DD'),
})
