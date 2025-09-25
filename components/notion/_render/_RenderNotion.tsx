import type { TransformedNotionBlocks } from 'types/notion'
import { Block } from './Block'

export default function RenderNotion({ blocks }: { blocks: TransformedNotionBlocks[] }) {
  return blocks.map(b => <Block key={b.id} block={b} />)
}
