import type { NotionComponentProps } from 'features/notion/types'
import { ul } from './BulletedList.css'
import { BulletedListItem } from './BulletedListItem'

export function BulletedListWrapper({ block }: NotionComponentProps<'grouped_bulleted_list_item'>) {
  return (
    <ul className={ul}>
      {block.grouped_bulleted_list_item.children.map(item => (
        <BulletedListItem key={item.id} block={item} />
      ))}
    </ul>
  )
}
