import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Annotations } from './RTAnnotations'

export function RichText({ richText }: { richText: RichTextItemResponse }) {
  const isLink = richText.href
  if (isLink) {
    return (
      <a href={isLink}>
        <Annotations {...richText.annotations}>{richText.plain_text}</Annotations>
      </a>
    )
  }

  return <Annotations {...richText.annotations}>{richText.plain_text}</Annotations>
}
