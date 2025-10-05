import type { ComponentProps } from 'react'
import * as css from './Caption.css'

export function Caption(props: ComponentProps<'span'>) {
  return <span className={css.base} {...props} />
}
