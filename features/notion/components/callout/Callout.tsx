import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion/types'
import { RichText } from '../richText/RichText'

export function Callout({ block }: NotionComponentProps<'callout'>) {
  return (
    <div>
      <p>
        <span>{'emoji' in block.callout.icon! && block.callout.icon.emoji}</span>
        {block.callout.rich_text.map((txt: RichTextItemResponse, idx) => (
          <RichText key={`${txt.type}${idx}`} richText={txt} />
        ))}
      </p>
    </div>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
