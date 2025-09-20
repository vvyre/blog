import type { NotionComponentProps } from 'types/notion-transformed.types'
import { MentionRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

export function Mention({ block }: { block: MentionRichTextItemResponse }) {
  console.log('mention', block)
  return (
    <div>
      <a href={block.href ?? ''}>
        {block.plain_text}
      </a>
    </div>
  )
}