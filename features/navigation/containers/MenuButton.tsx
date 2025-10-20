import type { ComponentProps } from 'react'
import * as css from './Navigation.css'

export function MenuBtn({ ...props }: ComponentProps<'button'>) {
  return (
    <button type="button" data-menu-trigger onClick={props.onClick} className={css.categoryBtn}>
      {props.children}
    </button>
  )
}
