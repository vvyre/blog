'use client'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'
import { useRandomPost } from '../hooks/useRandomPost'
import * as css from './PostListFooter.css'
import { ShuffleBtn } from './ShuffleBtn'

export function PostListFooter() {
  const [_, shuffle] = useRandomPost()
  const isDesktop = useMediaQuery('(min-width: 600px)')
  return <div className={css.frame}>{!isDesktop && <ShuffleBtn onClick={shuffle} />}</div>
}
