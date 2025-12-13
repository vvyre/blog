'use client'
import type { getNotionPageMeta } from 'features/notion/utils/meta/getNotionPageMeta'
import * as css from './PostInfo.css'

export function PostInfo({ meta }: { meta: ReturnType<typeof getNotionPageMeta> }) {
  return (
    <div className={css.postInfoFrame}>
      <span className={css.postInfoText}>{meta.date}</span>
    </div>
  )
}
