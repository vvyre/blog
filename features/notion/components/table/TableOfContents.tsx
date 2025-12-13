import type { NotionComponentProps } from 'features/notion/types'

export function TableOfContents({ block }: NotionComponentProps<'table_of_contents'>) {
  console.log(block)
}
