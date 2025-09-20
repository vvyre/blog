import { getCachedPostList } from 'features/notion/fetch'
import { ENV } from 'static/env'

export async function startPageLoader() {
  const settled = await Promise.allSettled([getCachedPostList(ENV.NOTION_DATABASE_ID)])
  settled.filter(r => r.status === 'rejected').forEach(r => console.warn(r.reason))

  const [posts] = settled.map(r => (r.status === 'fulfilled' ? r.value : []))
  return { posts }
}
