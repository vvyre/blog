import type { TraversableBlock } from 'features/notion'

import { atom } from 'jotai'

export const aboutPostBlockAtom = atom<TraversableBlock[]>([])
