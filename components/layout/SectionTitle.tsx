import type { ReactNode } from 'react'
import { Caption } from './Caption'
import * as css from './SectionTitle.css'

export function SectionTitle({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className={css.frame}>
      <h2 className={css.title}>{title}</h2>
      {subtitle && <Caption className={css.subtitle}>{subtitle}</Caption>}
    </div>
  )
}
