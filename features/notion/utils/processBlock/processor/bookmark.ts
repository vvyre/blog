import https, { Agent } from 'node:https'
import type { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import type { ExtendedBookmarkObjectResponse } from 'features/notion/types'
import { parseHTML } from 'linkedom'
import { cacheLife } from 'next/cache'
import { registerProcessor } from '../registry'

export type BookmarkMeta = {
  url: string
  title?: string
  description?: string
  image?: string
}

const fetchMeta = async (url: string): Promise<BookmarkMeta> => {
  'use cache'
  cacheLife('hours')

  try {
    const html = await new Promise<string>((resolve, reject) => {
      const req = https.get(
        url,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0 Safari/537.36',
            Accept: 'text/html,application/xhtml+xml',
          },
          rejectUnauthorized: false,
        },
        res => {
          let data = ''
          res.on('data', chunk => {
            data = data + chunk
          })
          res.on('end', () => resolve(data))
        }
      )
      req.on('error', reject)
    })

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

registerProcessor('bookmark', async (block: BookmarkBlockObjectResponse): Promise<ExtendedBookmarkObjectResponse> => {
  const url = block.bookmark.url

  const bookmarkInfo = await fetchMeta(url)
  return {
    ...block,
    bookmarkInfo,
  }
})
