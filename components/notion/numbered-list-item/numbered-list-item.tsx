import { ChildrenBlocks } from '../children-blocks'
import type { NotionComponentProps } from 'types/notion-transformed.types'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { hasChildren } from 'types/notion-guards'
import { Text } from '../text/text'

export function NumberedListItem({ block }: NotionComponentProps<'numbered_list_item'>) {
  return (
    <li>
      <p>
        {block.numbered_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Text key={idx} richText={txt} />
        ))}
      </p>
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.numbered_list_item.children} />}
    </li>
  )
}