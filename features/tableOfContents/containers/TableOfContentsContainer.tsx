'use client'
import { useAtomValue } from 'jotai'
import { RenderHeadings } from '../components/RenderHeadings'
import { tableOfContentsAtom } from '../tableOfContents.atom'
import * as css from './TableOfContentsContainer.css'

export function TableOfContentsContainer() {
  const headings = useAtomValue(tableOfContentsAtom)

  return (
    headings.length > 0 && (
      <div className={css.frame}>
        <h2 className={css.title}>목차</h2>
        <div className={css.tocFrame}>
          <RenderHeadings headings={headings} />
        </div>
      </div>
    )
  )
}
