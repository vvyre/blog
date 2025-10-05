import { ChildrenBlocks } from '../containers/ChildrenBlocks'
import type { NotionComponentProps } from 'features/notion'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { hasChildren } from 'features/notion'
import { RichText } from './richText/RichText'
import { PARAGRAPH } from './Paragraph.css'

export function NumberedListItem({ block }: NotionComponentProps<'numbered_list_item'>) {
  return (
    <li>
      <p className={PARAGRAPH}>
        {block.numbered_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={idx} richText={txt} />
        ))}
      </p>
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.numbered_list_item.children} />}
    </li>
  )
}
