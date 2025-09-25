import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints'

export const getBlurredImg = async (block: GetBlockResponse) => {
  if ('image' in block) {
    return {
      ...block,
      image: {
        ...block.image,
        blurDataURL: '',
      },
    }
  }
}
