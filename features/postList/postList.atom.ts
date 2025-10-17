import dayjs from 'dayjs'
import type { NotionPageMeta } from 'features/notion'
import { atom } from 'jotai'

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
