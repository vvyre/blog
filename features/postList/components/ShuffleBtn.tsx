'use client'
import { ReloadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { type ComponentProps, type MouseEventHandler, useState } from 'react'
import { color } from 'styles/vars/color.css'
import * as css from './ShuffleBtn.css'

export function ShuffleBtn({ ...props }: ComponentProps<'button'>) {
  const [spinning, setSpinning] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (spinning) return
    setSpinning(true)
    props.onClick?.(e)
  }

  const className = clsx(css.shuffleBtn, spinning && css.rotate)
  return (
    <button type="button" className={className} {...props} onClick={handleClick} onAnimationEnd={() => setSpinning(false)}>
      <ReloadIcon color={color.notion_gray} width="16" height="16" />
    </button>
  )
}
