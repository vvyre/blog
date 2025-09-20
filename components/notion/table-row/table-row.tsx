import type { NotionComponentProps } from 'types/notion-transformed.types'

export function TableRow({ block }: NotionComponentProps<'table_row'>) {
  console.log(block)
}
