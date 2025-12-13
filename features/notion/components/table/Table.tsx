import type { NotionComponentProps } from 'features/notion/types'

export function Table({ block }: NotionComponentProps<'table'>) {
  console.log(block)
}
