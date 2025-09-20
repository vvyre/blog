import { NotionComponentProps } from 'types/notion-transformed.types'
import { ChildrenBlocks } from '../children-blocks'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { Text } from '../text/text'

export function Toggle({ block }: NotionComponentProps<'toggle'>) {
  return (
    <details>
      <summary>
        {block.toggle.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Text key={idx} richText={txt} />
        ))}
      </summary>
      <div>{block.toggle.children && <ChildrenBlocks childrenBlocks={block.toggle.children} />}</div>
    </details>
  )
}

// 'icon' in block.callout && 'emoji' in block.callout.icon! && block.callout.icon.emoji
