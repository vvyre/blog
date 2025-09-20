import { ChildrenBlocks } from '../children-blocks'

import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionComponentProps } from 'types/notion-transformed.types'
import { hasChildren } from 'types/notion-guards'
import { Text } from '../text/text'
export function BulletedListItem({ block }: NotionComponentProps<'bulleted_list_item'>) {
  return (
    <li>
      <p>
        {block.bulleted_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Text key={idx} richText={txt} />
        ))}
      </p>
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.bulleted_list_item.children} />}
    </li>
  )
}