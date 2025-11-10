import dayjs, { type Dayjs } from 'dayjs'
import { cacheLife } from 'next/cache'
import * as css from './PostListHeader.css'

export async function PostListHeader() {
  'use cache'
  cacheLife('days')

  const dailySiteTitle = (now: Dayjs) => {
    const date = now.date() // 'use cache' 로 서버에서 렌더 상황이 결정되기 때문에 hydration error가 발생하지 않습니다
    const day = now.day()
    const eyes = ['∗', 'O', '@', '+', '×', '⌃', 'Θ']
    const index = (day + 6) % 7 // monday -> 0
    const eye = eyes[index]

    return `${eye}${'＿'.repeat(date)}${eye}`
  }

  const title = dailySiteTitle(dayjs())

  return (
    <div className={css.frame}>
      <h1 className={css.title}>
        <span>{title}</span>
      </h1>
    </div>
  )
}
