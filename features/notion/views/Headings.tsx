import type { NotionComponentProps } from 'features/notion'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { cleanUrl } from 'utils/clean-url'
import { h1, h2, h3 } from './Headings.css'

export function Heading_1({ block }: NotionComponentProps<'heading_1'>) {
  const TITLE = block.heading_1.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <>
      <a id={cleanUrl(block.heading_1.rich_text[0].plain_text)} aria-hidden="true" />

      <h2 className={h1}>{TITLE}</h2>
    </>
  )
}

export function Heading_2({ block }: NotionComponentProps<'heading_2'>) {
  const TITLE = block.heading_2.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <>
      <a id={cleanUrl(block.heading_2.rich_text[0].plain_text)} aria-hidden="true" />
      <h3 className={h2}>{TITLE}</h3>
    </>
  )
}

export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  const TITLE = block.heading_3.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <>
      <a id={cleanUrl(block.heading_3.rich_text[0].plain_text)} aria-hidden="true" />
      <h4 className={h3}>{TITLE}</h4>
    </>
  )
}
