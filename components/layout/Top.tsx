'use client'
import type { ReactNode } from 'react'
import { TopBar } from './TopBar'
import { Caption } from './Caption'
import * as css from './Top.css'

/**
 * @prop `(icon)` 이모지를 권장합니다
 * @prop `(title)` 한 줄을 권장하며, 두 줄까지 허용합니다
 * @prop `(subtitle)` 두 줄까지 허용합니다
 */
export function Top({
  icon,
  title,
  subtitle,
}: {
  icon?: string
  title?: string
  subtitle?: ReactNode
}) {
  return (
    <div className={css.FRAME}>
      <TopBar title={title} />

      <div className={css.ICON_WRAPPER}>
        <span className={css.ICON}>{icon}</span>
      </div>

      {subtitle && (
        <div>
          <Caption className={css.SUBTITLE}>{subtitle}</Caption>
        </div>
      )}
    </div>
  )
}
