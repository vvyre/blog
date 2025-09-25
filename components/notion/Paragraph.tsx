import { ChildrenBlocks } from './_render/ChildrenBlocks'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import type { NotionComponentProps } from 'types/notion'
import { RichText } from './richText/RichText'
import { Youtube } from './customBlocks/Youtube'
import { hasChildren } from 'types/notion/guards'

export function Paragraph({ block }: NotionComponentProps<'paragraph'>) {
  const flattenTxt: string = block.paragraph.rich_text.map((txt: RichTextItemResponse) => txt.plain_text).join('')
  if (flattenTxt.includes('<<https://youtu.be') && flattenTxt.includes('>>')) {
    return <Youtube src={flattenTxt} />
  }

  return (
    <p>
      {block.paragraph.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <RichText key={idx} richText={txt} />
      ))}
      {hasChildren(block) && <ChildrenBlocks childrenBlocks={block.paragraph.children} />}
    </p>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
