import type { TransformedNotionBlocks } from '../types'
import { Block } from './Block'

export function RenderNotion({ blocks }: { blocks: TransformedNotionBlocks[] }) {
  return blocks.map(b => <Block key={b.id} block={b} />)
}
