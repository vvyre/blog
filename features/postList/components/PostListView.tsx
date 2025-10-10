import type { NotionPageMeta } from 'features/notion'
import Link from 'next/link'
import * as css from './PostListView.css'
import { pageMeta } from 'features/notion/utils/pageMeta.util'

export function PostListView({ posts, years }: { posts: Record<number, NotionPageMeta[]>; years: number[] }) {
  return (
    <>
      <div className={css.postListFrame}>
        {years.map(y => (
          <div key={y} className={css.viewGroupFrame}>
            <div className={css.viewYear}>
              <div className={css.yearText}>{y}</div>
            </div>
            <div className={css.viewLink}>
              {posts[y].map(p => (
                <PostLink key={p.id} meta={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function PostLink({ meta }: { meta: NotionPageMeta }) {
  const postMeta = pageMeta(meta)
  const year = postMeta.date.slice(0, 4)
  const path = `/${year}/${postMeta.slug}`
  return (
    <li className={css.postLinkFrame}>
      <Link href={path} className={css.postLinkInner}>
        <span className={css.postLinkTitle}>{`${pageMeta(meta).title}`}</span>
      </Link>
    </li>
  )
}
