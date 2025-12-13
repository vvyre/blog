import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { registerProcessor } from '../registry.server'
import type { ExtendedImageBlockObjectResponse } from 'features/notion/types'

export const getBlurredImg = async (block: ImageBlockObjectResponse): Promise<ExtendedImageBlockObjectResponse> => {
  //vercel fn timeout으로 인해 임시 기능 삭제
  return {
    ...block,
    blurDataURL: '',
  }
}

registerProcessor('image', async block => await getBlurredImg(block))
