import 'server-only'
import './processor/index.server'
import { processors } from './registry.server'
import pMap from 'p-map'
import type { ExtendedBlockObjectResponse, TraversableBlock } from 'features/notion/types'
import type { BlockObjectResponse } from '@notionhq/client'
import { group } from './group.server'

export const processBlock = async (blocks: BlockObjectResponse[]): Promise<TraversableBlock[]> =>
  group(
    await pMap(
      blocks,
      async block => {
        if (block.has_children) {
          const content = (block as any)[block.type]
          if (content && Array.isArray(content.children)) {
            content.children = await processBlock(content.children)
          }
        }

        const processor = processors[block.type]
        if (processor) return (await processor(block)) as ExtendedBlockObjectResponse
        return block
      },
      { concurrency: 5 }
    )
  )
