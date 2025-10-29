'use client'
import type { NotionPageMeta } from 'features/notion'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { postsAtom } from '../postList.atom'
import * as css from './PostListView.css'

export function PostListView() {
  const posts = useAtomValue(postsAtom)
  return (
    <div className={css.postListFrame}>
      <div className={css.viewLink}>
        {posts.map(p => (
          <PostLink key={p.id} meta={p} />
        ))}
      </div>
    </div>
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
