import { ChildrenBlocks } from '../containers/ChildrenBlocks'
import type { NotionComponentProps } from 'features/notion'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { RichText } from './richText/RichText'
import { hasChildren } from 'features/notion'
import * as css from './Quote.css'

export function Quote({ block }: NotionComponentProps<'quote'>) {
  return (
    <div>
      <blockquote className={css.quoteBase}>
        {block.quote.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={idx} richText={txt} />
        ))}
        {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.quote.children} />}
      </blockquote>
    </div>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
