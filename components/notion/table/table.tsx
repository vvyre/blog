import type { NotionComponentProps } from 'types/notion-transformed.types'

export function Table({ block }: NotionComponentProps<'table'>) {
  console.log(block)
}
