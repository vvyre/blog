import type { NotionComponentProps } from 'types/notion-transformed.types'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { cleanUrl } from 'utils/clean-url'

export function Heading_2({ block }: NotionComponentProps<'heading_2'>) {
  const TITLE = block.heading_2.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <>
      <a id={cleanUrl(block.heading_2.rich_text[0].plain_text)} aria-hidden="true" />
      <h3>{TITLE}</h3>
    </>
  )
}
