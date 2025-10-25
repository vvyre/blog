import * as css from './PostListHeader.css'
import { ShuffleBtn } from './ShuffleBtn'
export function PostListHeader() {
  return (
    <div className={css.frame}>
      <h1 className={css.title}>
        <span>RANDOM 5</span>
      </h1>
      <ShuffleBtn />
    </div>
  )
}
