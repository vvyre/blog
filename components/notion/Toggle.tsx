import { NotionComponentProps } from 'types/notion'
import { ChildrenBlocks } from './_render/ChildrenBlocks'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { RichText } from './richText/RichText'
import { hasChildren } from 'types/notion/guards'

export function Toggle({ block }: NotionComponentProps<'toggle'>) {
  return (
    <details>
      <summary>
        {block.toggle.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <RichText key={idx} richText={txt} />
        ))}
      </summary>
      <div>{hasChildren(block) && <ChildrenBlocks childrenBlocks={block.toggle.children} />}</div>
    </details>
  )
}
