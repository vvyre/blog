'use client'
import { postsAtom } from 'atom/yearGroupedPosts'
import { useSetAtom } from 'jotai'
import { PropsWithChildren, useEffect } from 'react'
import { NotionPageMeta } from 'types/notion.types'

interface Props extends PropsWithChildren {
  state: {
    posts: NotionPageMeta[]
  }
}

export function Hydrate({ state, ...props }: Props) {
  const setPosts = useSetAtom(postsAtom)
  useEffect(() => {
    setPosts(state.posts)
  }, [])
  return <>{props.children}</>
}
