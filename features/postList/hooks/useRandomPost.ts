/** biome-ignore-all lint/correctness/useExhaustiveDependencies: random shuffle needs external force-render state */

import dayjs from 'dayjs'
import type { NotionPageMeta } from 'features/notion'
import { useAtom, useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import { pick } from 'utils/pick'
import { postsAtom, randomPostsAtom } from '../postList.atom'

const pickRandomPosts = (posts: NotionPageMeta[], select: number) => {
  if (posts.length === 0) return []
  const cnt = Math.min(select, posts.length)

  return pick(cnt, [0, posts.length - 1])
    .map(i => posts[i])
    .sort((p1, p2) => dayjs(p2.properties.date.date?.start).diff(dayjs(p1.properties.date.date?.start)))
}

export function useRandomPost(): [NotionPageMeta[], () => void] {
  const posts = useAtomValue(postsAtom)
  const [randomPosts, setRandomPosts] = useAtom(randomPostsAtom)

  const [c, s] = useState<number>(0)
  const shuffle = () => s(p => p + 1)

  useEffect(() => {
    const p = pickRandomPosts(posts, 7)
    setRandomPosts(p)
  }, [posts, c])

  return [randomPosts, shuffle]
}
