'use client'
import { Spacing } from 'components/base/Spacing'
import type { NotionPageMeta } from 'features/notion'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import Link from 'next/link'
import { dp } from 'styles/dp'
import * as css from './PostListView.css'
import { postsAtom } from '../postList.atom'
import { useAtomValue } from 'jotai'
import { color } from 'styles/vars/color.css'
import { useEffect, useState } from 'react'

export function PostListView() {
  const posts = useAtomValue(postsAtom)

  return (
    <div className={css.postListFrame}>
      <Spacing size={dp(8)} />
      <div className={css.viewLink}>{posts.map((p, i) => (i === 0 ? <FirstPostLink key={p.id} meta={p} /> : <PostLink key={p.id} meta={p} />))}</div>
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

function FirstPostLink({ meta }: { meta: NotionPageMeta }) {
  const postMeta = pageMeta(meta)
  const year = postMeta.date.slice(0, 4)
  const path = `/${year}/${postMeta.slug}`

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      const i = Math.floor(Math.random() * COLORS.length) === COLORS.length ? COLORS.length - 1 : Math.floor(Math.random() * COLORS.length)
      setIndex(i)
    }, 800)

    return () => clearInterval(id)
  }, [])

  return (
    <li className={css.postLinkFrame}>
      <Link href={path} className={css.postLinkInner}>
        <span className={css.firstPostLinkTitle} style={{ color: COLORS[index] }}>{`${pageMeta(meta).title}`}</span>
      </Link>
    </li>
  )
}

const EXCLUDED_NOTION_KEYS = new Set<keyof typeof color>(['notion_default', 'notion_gray'])
const isNotionColor = (key: keyof typeof color) => key.startsWith('notion') && !key.startsWith('notion_background') && !EXCLUDED_NOTION_KEYS.has(key)
const COLORS = (Object.keys(color) as (keyof typeof color)[]).filter(isNotionColor).map(key => color[key])
