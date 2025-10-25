import type { pageMeta } from 'features/notion/utils/pageMeta.util'
import * as css from './Tags.css'

type Tag = ReturnType<typeof pageMeta>['tags'][number]
export function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div className={css.tagsFrame}>
      {tags.map(t => (
        <Tag key={t.id} tag={t} />
      ))}
    </div>
  )
}

function Tag({ tag }: { tag: Tag }) {
  return <span className={css.tag}>{tag.name}</span>
}
