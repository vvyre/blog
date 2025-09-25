'use client'
import * as css from './PostListSection.css'
import { yearGroupedPostsAtom, yearsAtom } from 'atoms/yearGroupedPosts'
import { PostThumbnail } from 'sections/startPage/PostThumbnail'
import { useAtomValue } from 'jotai'

export function PostListSection() {
  const YEAR_GROUPED_POSTS = useAtomValue(yearGroupedPostsAtom)
  const YEARS = useAtomValue(yearsAtom)
  return YEARS.map(y => (
    <div key={y} className={css.GROUP_FRAME}>
      <div className={css.YEAR}>
        <span>{y}</span>
      </div>
      {YEAR_GROUPED_POSTS[y].map(p => (
        <PostThumbnail key={p.id} meta={p} />
      ))}
    </div>
  ))
}
