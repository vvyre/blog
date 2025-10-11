'use client'
import { type ComponentProps } from 'react'
import Link from 'next/link'
import { useAtomValue } from 'jotai'
import { postGroupByYearAtom, yearsAtom } from 'features/postList/postList.atom'
import { pageMeta } from 'features/notion/utils/pageMeta.util'

export function Menu({ onClose }: { isOpen: boolean; onClose: () => void } & ComponentProps<'div'>) {
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
