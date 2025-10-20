'use client'
import { useAtomValue } from 'jotai'
import { PostListHeader } from '../components/PostListHeader'
import { PostListView } from '../components/PostListView'
import { randomPostsAtom } from '../postList.atom'

export function PostListContainer() {
  const randomPosts = useAtomValue(randomPostsAtom)

  return (
    <>
      <PostListHeader />
      <PostListView posts={randomPosts} />
    </>
  )
}
