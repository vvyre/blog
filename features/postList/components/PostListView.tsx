'use client'
import type { NotionPageMeta } from 'features/notion/types'
import { getNotionPageMeta } from 'features/notion/utils/meta/getNotionPageMeta'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { postsAtom } from '../postList.atom'
import * as css from './PostListView.css'

export function PostListView() {
  const posts = useAtomValue(postsAtom)

  return (
    <div className={css.postListFrame}>
      <div className={css.viewLink}>
        {posts.map((p, i) => {
          let renderYear = false
          if (i === 0) return <PostListView.Row key={p.id} meta={p} renderYear />
          const { date: prevDate } = getNotionPageMeta(posts[i - 1])
          const { date: currDate } = getNotionPageMeta(p)
          renderYear = prevDate.slice(0, 4) !== currDate.slice(0, 4)
          return <PostListView.Row key={p.id} meta={p} renderYear={renderYear} />
        })}
      </div>
    </div>
  )
}

PostListView.Row = ({ meta, renderYear }: { meta: NotionPageMeta; renderYear: boolean }) => {
  const postMeta = getNotionPageMeta(meta)
  const year = postMeta.date.slice(0, 4)
  const path = `/${year}/${postMeta.slug}`
  return (
    <li className={css.postLinkFrame}>
      <Link href={path} className={css.postLinkInner}>
        <span className={css.postLinkTitle}>{`${postMeta.title}`}</span>
      </Link>
      {renderYear && (
        <Link href={path} className={css.postLinkInner}>
          <span className={css.postLinkTitle}>{`${postMeta.date.slice(0, 4)}`}</span>
        </Link>
      )}
    </li>
  )
}
