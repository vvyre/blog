'use client'
import type { TraversableBlock } from 'features/notion/types'
import { currentPostAtom } from 'features/post/post.atom'
import { useHydrateAtoms } from 'jotai/utils'

interface Props {
  state: {
    currentPost: TraversableBlock[]
  }
}

export function Hydrate({ state }: Props) {
  useHydrateAtoms([[currentPostAtom, state.currentPost]])

  return null
}
