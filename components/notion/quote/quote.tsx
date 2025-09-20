import { ChildrenBlocks } from '../children-blocks'
import type { NotionComponentProps } from 'types/notion-transformed.types'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Text } from '../text/text'

export function Quote({ block }: NotionComponentProps<'quote'>) {
  return (
    <div>
      <blockquote>
        {block.quote.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Text key={idx} richText={txt} />
        ))}
        {block.quote.children && <ChildrenBlocks childrenBlocks={block.quote.children} />}
      </blockquote>
    </div>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
