import { NumberedListItem } from './NumberedListItem'
import type { NotionComponentProps } from 'types/notion'

export function NumberedListWrapper({ block }: NotionComponentProps<'grouped_numbered_list_item'>) {
  return (
    <ol>
      {block.grouped_numbered_list_item.children.map((item, idx: number) => (
        <NumberedListItem key={idx} block={item} />
      ))}
    </ol>
  )
}
