import { ChildrenBlocks } from './_render/ChildrenBlocks'
import type { NotionComponentProps } from 'types/notion'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { RichText } from './richText/RichText'
import { hasChildren } from 'types/notion/guards'

export function Quote({ block }: NotionComponentProps<'quote'>) {
  return (
    <div>
      <blockquote>
        {block.quote.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={idx} richText={txt} />
        ))}
        {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.quote.children} />}
      </blockquote>
    </div>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
