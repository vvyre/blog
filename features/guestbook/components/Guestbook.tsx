'use client'
import Giscus from '@giscus/react'
import { ThemeContext } from 'features/theme'
import { useContext } from 'react'
import * as css from './Guestbook.css'

export function Guestbook() {
  const { theme } = useContext(ThemeContext)
  const themeName = theme === 'light' ? 'light' : 'noborder_gray'
  return (
    <div className={css.guestBookFrame}>
      <Giscus
        id="comments"
        repo="vvyre/blog-comments"
        repoId="R_kgDOLR4oCg"
        category="Show and tell"
        categoryId="DIC_kwDOLR4oCs4CfA8v"
        mapping="title"
        term=""
        theme={themeName}
        reactionsEnabled="1"
        inputPosition="top"
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
