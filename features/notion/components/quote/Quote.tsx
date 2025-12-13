import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion'
import { hasChildren } from 'features/notion'
import { ChildrenBlocks } from '../../containers/ChildrenBlocks'
import * as css from './Quote.css'
import { RichText } from '../_richText/RichText'

export function Quote({ block }: NotionComponentProps<'quote'>) {
  return (
    <div>
      <blockquote className={css.quoteBase}>
        {block.quote.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={`${txt.type}${idx}`} richText={txt} />
        ))}
        {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.quote.children} />}
      </blockquote>
    </div>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
