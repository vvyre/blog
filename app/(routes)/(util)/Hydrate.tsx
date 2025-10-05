'use client'
import { postsAtom } from 'features/postList/postList.atom'
import { useSetAtom } from 'jotai'
import { PropsWithChildren, useEffect } from 'react'
import { NotionPageMeta } from 'features/notion'

interface Props extends PropsWithChildren {
  state: {
    posts: NotionPageMeta[]
  }
}

/**
 * 전역 도메인 상태는 Jotai를 사용하여 관리합니다.
 * Hydrate 컴포넌트에는 UI 상태를 포함시키지 않습니다.
 */
export function Hydrate({ state, ...props }: Props) {
  const setPosts = useSetAtom(postsAtom)
  useEffect(() => {
    setPosts(state.posts)
  }, [])
  return null
}
