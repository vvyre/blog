'use client'
import type { pageMeta } from 'features/notion/utils/pageMeta.util'
import * as css from './PostInfo.css'

export function PostInfo({ meta }: { meta: ReturnType<typeof pageMeta> }) {
  return (
    <div className={css.postInfoFrame}>
      <span className={css.postInfoText}>{meta.date}</span>
    </div>
  )
}
