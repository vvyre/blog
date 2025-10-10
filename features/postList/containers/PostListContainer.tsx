'use client'
import { postGroupByYearAtom, yearsAtom } from '../postList.atom'
import { PostListView } from '../components/PostListView'
import { useAtomValue } from 'jotai'

export function PostListContainer() {
  const YEAR_GROUPED_POSTS = useAtomValue(postGroupByYearAtom)
  const YEARS = useAtomValue(yearsAtom)
  return <PostListView posts={YEAR_GROUPED_POSTS} years={YEARS} />
}
