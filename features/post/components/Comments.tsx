'use client'
import Giscus from '@giscus/react'
import { ThemeContext } from 'features/theme'
import { useContext } from 'react'
import * as css from './Comments.css'

export function Comments() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={css.commentFrame}>
      <Giscus
        id="comments"
        repo="vvyre/blog-comments"
        repoId="R_kgDOLR4oCg"
        category="Show and tell"
        categoryId="DIC_kwDOLR4oCs4CfA8v"
        mapping="title"
        term=""
        theme={theme}
        reactionsEnabled="1"
        inputPosition="top"
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
