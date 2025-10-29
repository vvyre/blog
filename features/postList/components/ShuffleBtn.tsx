'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import { color } from 'styles/vars/color.css'
import * as css from './ShuffleBtn.css'

export function ShuffleBtn() {
  return (
    <button type="button" className={css.shuffleBtn}>
      <ReloadIcon color={color.notion_gray} width="16" height="16" />
    </button>
  )
}
