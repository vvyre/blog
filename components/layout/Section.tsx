import type { ComponentProps } from 'react'
import * as css from './Section.css'

export function Section({ children }: ComponentProps<'section'>) {
  return <section className={css.BASE}>{children}</section>
}
