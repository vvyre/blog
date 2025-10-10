'use client'
import Giscus from '@giscus/react'
import * as css from './Comments.css'

export function Comments() {
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
        theme="light"
        reactionsEnabled="1"
        inputPosition="top"
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
