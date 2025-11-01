import dayjs, { type Dayjs } from 'dayjs'
import { cacheLife } from 'next/cache'
import * as css from './PostListHeader.css'

export async function PostListHeader() {
  const dailySiteTitle = (now: Dayjs) => {
    'use cache' // deterministic render by react.cache()
    cacheLife('days')

    const date = now.date()
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
