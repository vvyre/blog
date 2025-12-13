import type { NotionComponentProps } from 'features/notion/types'

export function TableRow({ block }: NotionComponentProps<'table_row'>) {
  console.log(block)
}
