import { ChildrenBlocks } from '../containers/ChildrenBlocks'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion'
import { RichText } from './richText/RichText'
import { Youtube } from './customBlocks/Youtube'
import { hasChildren } from 'features/notion'
import * as css from './Paragraph.css'

export function Paragraph({ block }: NotionComponentProps<'paragraph'>) {
  const flattenTxt: string = block.paragraph.rich_text.map((txt: RichTextItemResponse) => txt.plain_text).join('')
  if (flattenTxt.includes('<<https://youtu.be') && flattenTxt.includes('>>')) {
    return <Youtube src={flattenTxt} />
  }

  return (
    <p className={css.paragraph}>
      {block.paragraph.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <RichText key={idx} richText={txt} />
      ))}
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.paragraph.children} />}
    </p>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
