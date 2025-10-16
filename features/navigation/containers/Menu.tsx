'use client'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import { postGroupByYearAtom, yearsAtom } from 'features/postList/postList.atom'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import type { ComponentProps } from 'react'

export function Menu({ onClose }: { onClose: () => void } & ComponentProps<'ul'>) {
  const YEAR_GROUPED_POSTS = useAtomValue(postGroupByYearAtom)
  const YEARS = useAtomValue(yearsAtom)

  return (
    <ul>
      {YEARS.map(y =>
        YEAR_GROUPED_POSTS[y].map(p => (
          <li key={p.id}>
            <Link key={p.id} href={`/${y}/${pageMeta(p).slug}`} onClick={() => onClose()}>
              {pageMeta(p).title}
            </Link>
          </li>
        ))
      )}
    </ul>
  )
}
