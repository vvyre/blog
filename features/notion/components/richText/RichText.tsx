import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Annotations } from './RTAnnotations'
import * as css from './RTLink.css'

export function RichText({ richText }: { richText: RichTextItemResponse }) {
  const isLink = richText.href
  if (isLink) {
    return (
      <a href={isLink} className={css.link} target="_blank" rel="noreferrer">
        <Annotations richText={richText}>{richText.plain_text}</Annotations>
      </a>
    )
  }

  return <Annotations richText={richText}>{richText.plain_text}</Annotations>
}
