import type { NotionComponentProps } from 'types/notion'

export function Table({ block }: NotionComponentProps<'table'>) {
  console.log(block)
}
