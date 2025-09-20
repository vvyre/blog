import type { NotionComponentProps } from 'types/notion-transformed.types'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Text } from '../text/text'

export function Callout({ block }: NotionComponentProps<'callout'>) {
  return (
    <div>
      <p>
        <span>{'emoji' in block.callout.icon! && block.callout.icon.emoji}</span>
        {block.callout.rich_text.map((txt: RichTextItemResponse, idx) => (
          <Text key={idx} richText={txt} />
        ))}
      </p>
    </div>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
