import { ul } from './BulletedList.css'
import { BulletedListItem } from './BulletedListItem'
import { NotionComponentProps } from 'features/notion'

export function BulletedListWrapper({ block }: NotionComponentProps<'grouped_bulleted_list_item'>) {
  return (
    <ul className={ul}>
      {block.grouped_bulleted_list_item.children.map((item, idx: number) => (
        <BulletedListItem key={idx} block={item} />
      ))}
    </ul>
  )
}
