import type { NotionComponentProps } from 'features/notion'
import { ol } from './NumberedList.css'
import { NumberedListItem } from './NumberedListItem'

export function NumberedListWrapper({ block }: NotionComponentProps<'grouped_numbered_list_item'>) {
  return (
    <ol className={ol}>
      {block.grouped_numbered_list_item.children.map(item => (
        <NumberedListItem key={item.id} block={item} />
      ))}
    </ol>
  )
}
