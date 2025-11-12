'use client'
import { Spacing } from 'components/base/Spacing'
import type { NotionPageMeta } from 'features/notion'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import Link from 'next/link'
import { dp } from 'styles/dp'
import { useRandomPost } from '../hooks/useRandomPost'
import * as css from './PostListView.css'

export function PostListView() {
  const [randomPosts] = useRandomPost()

  return (
    <div className={css.postListFrame}>
      <Spacing size={dp(8)} />
      <div className={css.viewLink}>
        {randomPosts.map(p => (
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
