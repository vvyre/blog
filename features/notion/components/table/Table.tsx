import type { NotionComponentProps } from 'features/notion'

export function Table({ block }: NotionComponentProps<'table'>) {
  console.log(block)
}
