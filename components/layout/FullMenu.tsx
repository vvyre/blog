'use client'
import { type ComponentProps } from 'react'
import * as css from './FullMenu.css'
import Link from 'next/link'
import { useMediaQuery } from 'utils/hooks/useMediaQuery'
import { useAtomValue } from 'jotai'
import { yearGroupedPostsAtom, yearsAtom } from 'atoms/yearGroupedPosts'
import { pageMeta } from 'features/notion/pageMeta'

export function FullMenu({ open, ...props }: { open: boolean; onClose: () => void } & ComponentProps<'div'>) {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const YEAR_GROUPED_POSTS = useAtomValue(yearGroupedPostsAtom)
  const YEARS = useAtomValue(yearsAtom)
  return (
    <div
      {...props}
      className={css.FRAME}
      style={{
        display: open ? 'block' : 'hidden',
        translate: open ? 0 : '100%',
        transform: open ? 'translateY(0)' : isMobile ? 'translateY(5%)' : 'translateX(5%)',
        opacity: open ? 1 : 0,
      }}>
      <div className={css.CONTENT_WRAPPER}>
        <ul>
          {YEARS.map(y => (
            <div key={y}>
              {YEAR_GROUPED_POSTS[y].map(p => (
                <div key={p.id}>
                  <Link key={p.id} href={`/${y}/${pageMeta(p).slug}`} onClick={() => props.onClose()}>
                    {pageMeta(p).title}
                  </Link>
                  <br />
                </div>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
