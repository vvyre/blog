import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

export function RichText({ richText }: { richText: RichTextItemResponse }) {
  const isLink = richText.href
  if (isLink) {
    return (
      <a href={isLink} {...richText.annotations}>
        {richText.plain_text}
      </a>
    )
  }

  return <span {...richText.annotations}>{richText.plain_text}</span>
}
