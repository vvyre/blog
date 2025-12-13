import type { TraversableBlock } from 'features/notion/types'

import { atom } from 'jotai'

export const aboutPostBlockAtom = atom<TraversableBlock[]>([])
