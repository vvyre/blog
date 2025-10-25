'use client'
import { aboutPostBlockAtom } from 'features/navigation/aboutPost.atom'
import type { NotionPageMeta, TraversableBlock } from 'features/notion'
import { postsAtom } from 'features/postList/postList.atom'
import { useSetAtom } from 'jotai'
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
  const setPosts = useSetAtom(postsAtom)
  const setAboutPost = useSetAtom(aboutPostBlockAtom)

  useEffect(() => {
    setPosts(state.posts)
    setAboutPost(state.about)
  }, [setPosts, setAboutPost, state])

  return null
}
