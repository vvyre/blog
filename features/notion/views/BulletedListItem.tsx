import { ChildrenBlocks } from '../containers/ChildrenBlocks'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion'
import { hasChildren } from 'features/notion'
import { RichText } from './richText/RichText'
import { li } from './NumberedList.css'
export function BulletedListItem({ block }: NotionComponentProps<'bulleted_list_item'>) {
  return (
    <li>
      <p className={li}>
        {block.bulleted_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={idx} richText={txt} />
        ))}
      </p>
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.bulleted_list_item.children} />}
    </li>
  )
}
