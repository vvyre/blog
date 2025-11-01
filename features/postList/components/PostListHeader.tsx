import dayjs from 'dayjs'
import { cacheLife } from 'next/cache'
import * as css from './PostListHeader.css'

export async function PostListHeader() {
  'use cache' // deterministic render by react.cache()
  cacheLife('days')
  const day = dayjs().day()
  const eyes = ['∗', 'O', '@', '+', '×', '⌃', 'Θ']
  const index = (day + 6) % 7 // monday -> 0
  const eye = eyes[index]
  const date = dayjs().date()
  const title = `${eye}${'＿'.repeat(date)}${eye}`

  return (
    <div className={css.frame}>
      <h1 className={css.title}>
        <span>{title}</span>
      </h1>
    </div>
  )
}
