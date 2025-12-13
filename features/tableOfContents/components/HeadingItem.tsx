import { getHeadingId } from 'features/notion/components/heading/getHeadingId'
import { getPlainText } from 'features/notion/components/richText/getPlainText'
import { getHeadingLevel } from '../util/getHeadingLevel'
import type { TableOfContentBlock } from '../util/processHeadings'
import * as css from './TableOfContents.css'

export function HeadingItem({ heading }: { heading: TableOfContentBlock }) {
  const richText = (() => {
    switch (heading.type) {
      case 'heading_1':
        return heading.heading_1.rich_text
      case 'heading_2':
        return heading.heading_2.rich_text
      case 'heading_3':
        return heading.heading_3.rich_text
      default:
        return []
    }
  })()

  const text = getPlainText(richText)
  const href = `#${getHeadingId(richText)}`

  const className = css.listitem[getHeadingLevel(heading)]

  return (
    <li className={className}>
      <a className={css.listLink} href={href} target="_self">
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
