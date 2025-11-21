'use client'
import { useMediaQuery } from '@fische/react'
import { breakpoints } from 'styles/vars/breakpoints.css'
import { useRandomPost } from '../hooks/useRandomPost'
import * as css from './PostListHeader.css'
import { ShuffleBtn } from './ShuffleBtn'

export function PostListHeader() {
  const title = 'RANDOM 7'
  const [_, shuffle] = useRandomPost()
  const [isDesktop] = useMediaQuery(breakpoints.desktop)
  return (
    <div className={css.frame}>
      <h1 className={css.title}>
        <span>{title}</span>
        {isDesktop && <ShuffleBtn onClick={shuffle} />}
      </h1>
    </div>
  )
}
