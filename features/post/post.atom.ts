import type { TraversableBlock } from 'features/notion'
import { atom } from 'jotai'

export const currentPostAtom = atom<TraversableBlock[]>([])
