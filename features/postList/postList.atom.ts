import { atom } from 'jotai'
import { NotionPageMeta } from 'features/notion'
import dayjs from 'dayjs'

export const postsAtom = atom<NotionPageMeta[]>([])

export const postGroupByYearAtom = atom<Record<string, NotionPageMeta[]>>(get =>
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
export const yearsAtom = atom<number[]>(get => Object.keys(get(postGroupByYearAtom)).map(Number).reverse())
