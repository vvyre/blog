import { Block } from './NotionBlock'
import { Fragment } from 'react'
import { TraversableBlock } from 'types/notion-transformed.types'

export function ChildrenBlocks({ childrenBlocks }: { childrenBlocks: TraversableBlock[] }) {
  return (
    <Fragment>
      {childrenBlocks?.map((block: TraversableBlock) => {
        return <Block key={block.id} block={block} />
      })}
    </Fragment>
  )
}
