'use client'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import { postGroupByYearAtom, yearsAtom } from 'features/postList/postList.atom'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import * as css from './HamburgerMenu.css'

export function HamburgerMenu({ onClose }: { onClose: () => void } & ComponentProps<'ul'>) {
  const YEAR_GROUPED_POSTS = useAtomValue(postGroupByYearAtom)
  const YEARS = useAtomValue(yearsAtom)

  return (
    <ul className={css.menuList}>
      {YEARS.map(y => (
        <div key={y}>
          <li className={css.year}>{y}</li>
          <ul className={css.articleList}>
            {YEAR_GROUPED_POSTS[y].map(p => (
              <li key={p.id} className={css.articleListRow}>
                <Link key={p.id} href={`/${y}/${pageMeta(p).slug}`} onClick={() => onClose()}>
                  {pageMeta(p).title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  )
}
