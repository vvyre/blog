'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useSetAtom } from 'jotai'
import { color } from 'styles/vars/color.css'
import { shuffleAtom } from '../postList.atom'
import * as css from './ShuffleBtn.css'

export function ShuffleBtn() {
  const s = useSetAtom(shuffleAtom)
  const shuffle = () => s(prev => prev + 1)

  return (
    <button type="button" onClick={shuffle} className={css.shuffleBtn}>
      <ReloadIcon color={color.notion_gray} width="16" height="16" />
    </button>
  )
}
