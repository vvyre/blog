import type { TableOfContentBlock } from '../util/processHeadings'
import { HeadingItem } from './HeadingItem'
import * as css from './TableOfContents.css'

export function RenderHeadings({ headings }: { headings: TableOfContentBlock[] }) {
  return (
    <ul className={css.listFrame}>
      {headings.map(h => (
        <HeadingItem key={h.id} heading={h} />
      ))}
    </ul>
  )
}
