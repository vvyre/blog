import { Block } from './Block'
import { Fragment } from 'react'
import type { TraversableBlock } from 'features/notion/types'

export function ChildrenBlocks({ childrenBlocks }: { childrenBlocks: TraversableBlock[] }) {
  return (
    <Fragment>
      {childrenBlocks?.map((block: TraversableBlock) => {
        return <Block key={block.id} block={block} />
      })}
    </Fragment>
  )
}
