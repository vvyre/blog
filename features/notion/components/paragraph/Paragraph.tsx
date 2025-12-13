import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'features/notion'
import { hasChildren } from 'features/notion'
import { ChildrenBlocks } from '../../containers/ChildrenBlocks'
import { getPlainText } from '../../utils/getPlainText.util'
import { Youtube } from '../_customBlocks/Youtube'
import * as css from './Paragraph.css'
import { RichText } from '../richText/RichText'

export function Paragraph({ block }: NotionComponentProps<'paragraph'>) {
  const flattenTxt: string = getPlainText(block.paragraph.rich_text)
  if (flattenTxt.includes('<<https://youtu.be') && flattenTxt.includes('>>')) {
    return <Youtube src={flattenTxt} />
  }

  return (
    <p className={css.paragraph}>
      {block.paragraph.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <RichText key={`${txt.type}${idx}`} richText={txt} />
      ))}
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.paragraph.children} />}
    </p>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
