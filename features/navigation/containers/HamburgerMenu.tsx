'use client'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { pageMeta } from 'features/notion/utils/pageMeta.util'
import { postGroupByYearAtom, yearsAtom } from 'features/postList/postList.atom'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import * as css from './Navigation.css'

export function HamburgerMenuBtn({ ...props }: ComponentProps<'button'>) {
  return (
    <button type="button" data-menu-trigger onClick={props.onClick} className={css.categoryBtn}>
      <HamburgerMenuIcon color="white" width="21" height="21" />
    </button>
  )
}

export function HamburgerMenu({ onClose }: { onClose: () => void } & ComponentProps<'ul'>) {
  const YEAR_GROUPED_POSTS = useAtomValue(postGroupByYearAtom)
  const YEARS = useAtomValue(yearsAtom)

  return (
    <ul className={css.menuList}>
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
