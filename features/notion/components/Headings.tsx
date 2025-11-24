import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion'
import { cleanUrl } from 'utils/clean-url'
import { h1, h2, h3 } from './Headings.css'

export function Heading_1({ block }: NotionComponentProps<'heading_1'>) {
  const TITLE = block.heading_1.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <h2 id={cleanUrl(block.heading_1.rich_text)} className={h1}>
      {TITLE}
    </h2>
  )
}

export function Heading_2({ block }: NotionComponentProps<'heading_2'>) {
  const TITLE = block.heading_2.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <h3 id={cleanUrl(block.heading_2.rich_text)} className={h2}>
      {TITLE}
    </h3>
  )
}

export function Heading_3({ block }: NotionComponentProps<'heading_3'>) {
  const TITLE = block.heading_3.rich_text.map((txt: RichTextItemResponse) => txt.plain_text)
  return (
    <h4 id={cleanUrl(block.heading_3.rich_text)} className={h3}>
      {TITLE}
    </h4>
  )
}
