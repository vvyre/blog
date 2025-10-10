import type { NotionComponentProps } from 'features/notion'

export function TableRow({ block }: NotionComponentProps<'table_row'>) {
  console.log(block)
}
