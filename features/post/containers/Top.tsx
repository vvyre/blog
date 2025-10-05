'use client'
import { PostInfo } from '../views/PostInfo'
import { PostTitle } from '../views/PostTitle'
import { Tags } from '../views/Tags'
import * as css from './Top.css'
import { pageMeta } from 'features/notion/utils/pageMeta.util'

export function Top({ meta }: { meta: ReturnType<typeof pageMeta> }) {
  const title = meta.title
  return (
    <div className={css.frame}>
      <Tags tags={meta.tags} />
      <PostInfo meta={meta} />
      <PostTitle title={title} />
    </div>
  )
}
