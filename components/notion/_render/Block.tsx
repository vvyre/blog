import { blockComponentMap } from './componentMap'

import type { ExtendedBlockTypes, NotionBlockComponent, TransformedNotionBlock } from 'types/notion'

export function Block<T extends ExtendedBlockTypes>({ block }: { block: TransformedNotionBlock<T> }) {
  const Component = blockComponentMap[block.type] as NotionBlockComponent<T> | null
  if (!Component) return <></>
  return <Component block={block} />
}
