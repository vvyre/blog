import type { NotionPageMeta } from 'features/notion'
import Link from 'next/link'
import * as css from './PostListView.css'
import { pageMeta } from 'features/notion/utils/pageMeta.util'

export function PostListView({ posts, years }: { posts: Record<number, NotionPageMeta[]>; years: number[] }) {
  return years.map(y => (
    <div key={y} className={css.viewGroupFrame}>
      <div className={css.viewYear}>
        <span className={css.yearText}>{y}</span>
      </div>
      <div>
        {posts[y].map(p => (
          <PostLink key={p.id} meta={p} />
        ))}
      </div>
    </div>
  ))
}

function PostLink({ meta }: { meta: NotionPageMeta }) {
  const postMeta = pageMeta(meta)
  const path = `/${postMeta.date.year()}/${postMeta.slug}`
  return (
    <li className={css.postLinkFrame}>
      <Link href={path} className={css.postLinkInner}>
        <span className={css.postLinkTitle}>{`${pageMeta(meta).title}`}</span>
      </Link>
    </li>
  )
}
