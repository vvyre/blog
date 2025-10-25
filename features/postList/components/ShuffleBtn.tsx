'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { color } from 'styles/vars/color.css'
import { shuffleAtom } from '../postList.atom'
import * as css from './ShuffleBtn.css'

export function ShuffleBtn() {
  const s = useSetAtom(shuffleAtom)
  const shuffle = () => s(prev => prev + 1)
  const [rotating, setRotating] = useState<boolean>(false)
  const handleRotating = () => {
    setRotating(true)
    setTimeout(() => setRotating(false), 350)
  }

  const onClick = () => {
    handleRotating()
    shuffle()
  }

  return (
    <button type="button" onClick={onClick} className={clsx(css.shuffleBtn, rotating && css.rotate)}>
      <ReloadIcon color={color.notion_gray} width="18" height="18" />
    </button>
  )
}
