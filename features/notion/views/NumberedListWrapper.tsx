import { ol } from './NumberedList.css'
import { NumberedListItem } from './NumberedListItem'
import type { NotionComponentProps } from 'features/notion'

export function NumberedListWrapper({ block }: NotionComponentProps<'grouped_numbered_list_item'>) {
  return (
    <ol className={ol}>
      {block.grouped_numbered_list_item.children.map((item, idx: number) => (
        <NumberedListItem key={idx} block={item} />
      ))}
    </ol>
  )
}
