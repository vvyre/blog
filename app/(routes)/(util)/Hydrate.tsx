'use client'
import { aboutPostBlockAtom } from 'features/navigation/aboutPost.atom'
import type { NotionPageMeta, TraversableBlock } from 'features/notion'
import { postsAtom } from 'features/postList/postList.atom'
import { useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'

interface Props {
  state: {
    posts: NotionPageMeta[]
    about: TraversableBlock[]
  }
}

/**
 * 전역 도메인 상태는 Jotai를 사용하여 관리합니다.
 * Hydrate 컴포넌트에는 UI 상태를 포함시키지 않습니다.
 */
export function Hydrate({ state }: Props) {
  useHydrateAtoms([
    [postsAtom, state.posts],
    [aboutPostBlockAtom, state.about],
  ])

  return null
}
