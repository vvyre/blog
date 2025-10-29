'use client'
import type { pageMeta } from 'features/notion/utils/pageMeta.util'
import { PostInfo } from '../components/PostInfo'
import { PostTitle } from '../components/PostTitle'
import { Tags } from '../components/Tags'
import * as css from './Top.css'

export function Top({ meta }: { meta: ReturnType<typeof pageMeta> }) {
  const title = meta.title
  return (
    <div className={css.frame}>
      <PostTitle title={title} />
      <Tags tags={meta.tags} />
      <PostInfo meta={meta} />
    </div>
  )
}
