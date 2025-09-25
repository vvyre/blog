import type { NotionComponentProps } from 'types/notion'

export function TableOfContents({ block }: NotionComponentProps<'table_of_contents'>) {
  console.log(block)
}
