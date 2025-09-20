import { blockComponentMap } from './block-component-map'
import type { ExtendedBlockTypes, NotionBlock, NotionBlockComponent } from 'types/notion.types'

export function Block<T extends ExtendedBlockTypes>({ block }: { block: NotionBlock<T> }) {
  const Component = blockComponentMap[block.type] as NotionBlockComponent<T> | null
  if (!Component) return <></>
  return <Component block={block} />
}
