'use client'
import { useRandomPost } from '../hooks/useRandomPost'
import * as css from './PostListHeader.css'
import { ShuffleBtn } from './ShuffleBtn'

export function PostListHeader() {
  const title = 'RANDOM 7'
  const [_, shuffle] = useRandomPost()
  return (
    <div className={css.frame}>
      <h1 className={css.title}>
        <span>{title}</span>
        <ShuffleBtn onClick={shuffle} />
      </h1>
    </div>
  )
}
