import type { ReactNode } from 'react'
import { Caption } from './Caption'
import * as css from './SectionTitle.css'

export function SectionTitle({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className={css.FRAME}>
      <h2 className={css.TITLE}>{title}</h2>
      {subtitle && <Caption className={css.SUBTITLE}>{subtitle}</Caption>}
    </div>
  )
}
