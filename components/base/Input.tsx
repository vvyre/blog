'use client'
import { type ComponentProps, type ReactNode } from 'react'
import * as css from './Input.css'

/**
 *
 * @prop `(icon)` 세로 20px 크기의 아이콘을 사용하세요
 */
export function Input({ icon, ...props }: { icon?: ReactNode } & ComponentProps<'input'>) {
  return (
    <div className={css.FRAME}>
      <span className={css.ICON_WRAPPER}>{icon}</span>
      <input type="text" {...props} className={icon ? css.BASE.withIcon : css.BASE.default} />
    </div>
  )
}
