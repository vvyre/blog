import { Block } from './NotionBlock'
import { BlockObjectResponse } from '@notionhq/client'

export default function NotionPage({ blocks }: { blocks: BlockObjectResponse[] }) {
  return blocks.map((b: BlockObjectResponse) => <Block key={b.id} block={b} />)
}
