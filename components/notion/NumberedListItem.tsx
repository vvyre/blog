import { ChildrenBlocks } from './_render/ChildrenBlocks'
import type { NotionComponentProps } from 'types/notion'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { hasChildren } from 'types/notion/guards'
import { RichText } from './richText/RichText'

export function NumberedListItem({ block }: NotionComponentProps<'numbered_list_item'>) {
  return (
    <li>
      <p>
        {block.numbered_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={idx} richText={txt} />
        ))}
      </p>
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.numbered_list_item.children} />}
    </li>
  )
}
