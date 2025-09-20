import type { NotionComponentProps } from 'types/notion-transformed.types'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { cleanUrl } from 'utils/clean-url'

export function Heading_1({ block }: NotionComponentProps<'heading_1'>) {
  const TITLE = block.heading_1.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <>
      <a id={cleanUrl(block.heading_1.rich_text[0].plain_text)} aria-hidden="true" />

      <h2>{TITLE}</h2>
    </>
  )
}
