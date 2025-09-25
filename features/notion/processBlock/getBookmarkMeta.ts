import { ExtendedBookmarkObjectResponse } from 'types/notion'
import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { unfurl } from 'unfurl.js'
import { Metadata } from 'unfurl.js/dist/types'

export interface BookmarkMeta extends Metadata {
  url: string
}
const fetchMeta = async (url: string): Promise<BookmarkMeta> => {
  const response = await unfurl(url, {
    oembed: true,
    timeout: 2000,
  })
  return { ...response, url }
}

export const getBookmarkMetadata = async (block: BookmarkBlockObjectResponse): Promise<ExtendedBookmarkObjectResponse> => {
  const url = block.bookmark.url

  const bookmarkInfo = await fetchMeta(url)
  return {
    ...block,
    bookmarkInfo,
  }
}
