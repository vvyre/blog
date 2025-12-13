import { getCachedPostList, getPost } from 'features/notion/remote/notionFetch.server'
import { processBlock } from 'features/notion/utils/processBlock/index.server'

import { ENV } from 'static/env'

export async function startPageLoader() {
  const settled = await Promise.allSettled([getCachedPostList(ENV.NOTION_DATABASE_ID), getPost(ENV.NOTION_POST_ID_ABOUT)])
  settled
    .filter(r => r.status === 'rejected')
    .forEach(r => {
      console.warn(r.reason)
    })

  const posts = settled[0].status === 'fulfilled' ? settled[0].value : []
  const aboutResponse = settled[1].status === 'fulfilled' ? settled[1].value : []
  const aboutBlocks = await processBlock(aboutResponse)
  return { posts, about: aboutBlocks }
}
