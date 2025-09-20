'use client'
import * as css from './TopBar.css'
import { TopTitle } from './TopTitle'

export function TopBar({ title }: { title?: string }) {
  return (
    <>
      <div className={css.FRAME}>
        <div className={css.TITLE_WRAPPER}>
          <h1 className={css.TITLE}>
            <TopTitle title={title ?? ''} />
          </h1>
        </div>
        <div />
      </div>
    </>
  )
}
