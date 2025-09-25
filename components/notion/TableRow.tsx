import type { NotionComponentProps } from 'types/notion'

export function TableRow({ block }: NotionComponentProps<'table_row'>) {
  console.log(block)
}
