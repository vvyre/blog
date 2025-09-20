import { atom } from 'jotai'
import { NotionPageMeta } from '../types/notion.types'
import dayjs from 'dayjs'

export const postsAtom = atom<NotionPageMeta[]>([])

export const yearGroupedPostsAtom = atom<Record<string, NotionPageMeta[]>>(get =>
  get(postsAtom).reduce(
    (prev, post) => {
      const CREATED_YEAR = dayjs(post.properties.date.date?.start).year()
      return {
        ...prev,
        [CREATED_YEAR]: prev[CREATED_YEAR] ? [...prev[CREATED_YEAR], post] : [post],
      }
    },
    {} as Record<number, NotionPageMeta[]>
  )
)
export const yearsAtom = atom<number[]>(get => Object.keys(get(yearGroupedPostsAtom)).map(Number).reverse())
