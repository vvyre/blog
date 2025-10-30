import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import type { TraversableBlock } from 'features/notion'
import pMap from 'p-map'
import { getBlurredImg } from './getBlurredImg.util'
import { getBookmarkMetadata } from './getBookmarkMeta.util'
import { groupedBlocks } from './groupedBlocks.util'

export const processBlock = async (blocks: BlockObjectResponse[]) => {
  const PROCESSED = await pMap(
    blocks,
    async block => {
      if (block.type === 'image') return (await getBlurredImg(block)) ?? block
      else if (block.type === 'bookmark') return (await getBookmarkMetadata(block)) ?? block
      else return block
    },
    {
      concurrency: 5,
    }
  )

  const LIST_GROUPPED = groupedBlocks(PROCESSED)
  return LIST_GROUPPED as TraversableBlock[]
}
