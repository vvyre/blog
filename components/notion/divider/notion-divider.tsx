import type { NotionComponentProps } from 'types/notion-transformed.types'

export function NotionDivider({ block }: NotionComponentProps<'divider'>) {
  block
  return <hr />
}