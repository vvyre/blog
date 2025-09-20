import { NotionPageMeta } from 'types/notion.types'
import Link from 'next/link'
import * as css from './PostThumbnail.css'
import { pageMeta } from 'features/notion/pageMeta'

export function PostThumbnail({ meta }: { meta: NotionPageMeta }) {
  const postMeta = pageMeta(meta)
  const path = `/${postMeta.date.year()}/${postMeta.slug}`
  return (
    <li className={css.FRAME}>
      <Link href={path} className={css.LINK}>
        <span className={css.TITLE_TEXT}>{`${pageMeta(meta).title}`}</span>
      </Link>
    </li>
  )
}
