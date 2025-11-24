import { getHeadingId } from 'features/notion/utils/get-heading-id'
import { getPlainText } from 'features/notion/utils/getPlainText.util'
import { getHeadingLevel } from '../util/getHeadingLevel'
import type { TableOfContentBlock } from '../util/processHeadings'
import * as css from './TableOfContents.css'

export function HeadingItem({ heading }: { heading: TableOfContentBlock }) {
  const text = (() => {
    switch (heading.type) {
      case 'heading_1':
        return getPlainText(heading.heading_1.rich_text)
      case 'heading_2':
        return getPlainText(heading.heading_2.rich_text)
      case 'heading_3':
        return getPlainText(heading.heading_3.rich_text)
    }
  })()
  const url = (() => {
    switch (heading.type) {
      case 'heading_1':
        return getHeadingId(heading.heading_1.rich_text)
      case 'heading_2':
        return getHeadingId(heading.heading_2.rich_text)
      case 'heading_3':
        return getHeadingId(heading.heading_3.rich_text)
    }
  })()

  const className = css.listitem[getHeadingLevel(heading)]

  return (
    <li className={className}>
      <a className={css.listLink} href={`#${url}`} target="_self">
        <span>{text}</span>
      </a>
      {heading.childrenHeadings.length > 0 && (
        <ul className={css.listFrame}>
          {heading.childrenHeadings.map(child => (
            <HeadingItem key={child.id} heading={child} />
          ))}
        </ul>
      )}
    </li>
  )
}
