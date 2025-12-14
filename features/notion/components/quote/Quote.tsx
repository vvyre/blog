import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion/types'
import { hasChildren } from 'features/notion/types'
import { ChildrenBlocks } from '../../containers/ChildrenBlocks'
import * as css from './Quote.css'
import { RichText } from '../richText/RichText'

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
