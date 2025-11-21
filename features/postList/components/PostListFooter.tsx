'use client'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { useRandomPost } from '../hooks/useRandomPost'
import * as css from './PostListFooter.css'
import { ShuffleBtn } from './ShuffleBtn'

export function PostListFooter() {
  const [_, shuffle] = useRandomPost()
  const isDesktop = useMediaQuery(breakpoints.desktop)
  return <div className={css.frame}>{!isDesktop && <ShuffleBtn onClick={shuffle} />}</div>
}
