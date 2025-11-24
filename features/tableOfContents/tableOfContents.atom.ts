import { currentPostAtom } from 'features/post/post.atom'
import { atom } from 'jotai'
import { processHeadings, type TableOfContentBlock } from './util/processHeadings'

export const tableOfContentsAtom = atom<TableOfContentBlock[]>(get => {
  const blocks = get(currentPostAtom)
  return processHeadings(blocks)
})
