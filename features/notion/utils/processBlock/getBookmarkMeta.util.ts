import { ExtendedBookmarkObjectResponse } from 'features/notion'
import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { parseHTML } from 'linkedom'

export type BookmarkMeta = {
  url: string
  title?: string
  description?: string
  image?: string
}
const fetchMeta = async (url: string): Promise<BookmarkMeta> => {
  try {
    const response = await fetch(url)
    const html = await response.text()
    const { document } = parseHTML(html)

    const getMeta = (names: string[]) => {
      for (const name of names) {
        const el = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`)
        if (el?.getAttribute('content')) {
          return el.getAttribute('content')
        }
      }
      return null
    }

    return {
      url,
      title: getMeta(['og:title', 'twitter:title']) || document.querySelector('title')?.textContent || undefined,
      description: getMeta(['og:description', 'twitter:description', 'description']) || undefined,
      image: getMeta(['og:image', 'twitter:image']) || undefined,
    }
  } catch (error) {
    console.error(`Failed to fetch metadata for ${url}:`, error)
    return { url }
  }
}
export const getBookmarkMetadata = async (block: BookmarkBlockObjectResponse): Promise<ExtendedBookmarkObjectResponse> => {
  const url = block.bookmark.url

  const bookmarkInfo = await fetchMeta(url)
  return {
    ...block,
    bookmarkInfo,
  }
}
