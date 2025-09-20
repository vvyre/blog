import type { NotionComponentProps } from 'types/notion-transformed.types'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { cleanUrl } from 'utils/clean-url'
export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  const TITLE = block.heading_3.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <>
      <a id={cleanUrl(block.heading_3.rich_text[0].plain_text)} aria-hidden="true" />
      <h4>{TITLE}</h4>
    </>
  )
}
