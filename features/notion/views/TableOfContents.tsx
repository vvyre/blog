import type { NotionComponentProps } from 'features/notion'

export function TableOfContents({ block }: NotionComponentProps<'table_of_contents'>) {
  console.log(block)
}
