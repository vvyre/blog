import meta from 'assets/meta'
import * as css from './PostListHeader.css'
export function PostListHeader() {
  return (
    <div className={css.frame}>
      <h1 className={css.title}>
        <span>{meta.title}</span>
      </h1>
    </div>
  )
}
