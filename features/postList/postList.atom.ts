import dayjs from 'dayjs'
import type { NotionPageMeta } from 'features/notion'
import { atom } from 'jotai'
import { pick } from 'utils/pick'

export const postsAtom = atom<NotionPageMeta[]>([])

export const postGroupByYearAtom = atom<Record<string, NotionPageMeta[]>>(get =>
  get(postsAtom).reduce(
    (prev, post) => {
      const year = dayjs(post.properties.date.date?.start).year()
      if (!prev[year]) prev[year] = []
      prev[year].push(post)
      return prev
    },
    {} as Record<number, NotionPageMeta[]>
  )
)
export const yearsAtom = atom<number[]>(get => Object.keys(get(postGroupByYearAtom)).map(Number).reverse())

export const shuffleAtom = atom(0)
export const randomPostsAtom = atom<NotionPageMeta[]>(get => {
  const posts = get(postsAtom)
  if (!posts.length) return []
  get(shuffleAtom)
  const selected = pick(5, [0, posts.length - 1])
  return selected.map(num => posts[num]).sort((p1, p2) => dayjs(p2.properties.date.date?.start).year() - dayjs(p1.properties.date.date?.start).year())
})
