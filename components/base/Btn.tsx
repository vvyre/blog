import { clsx } from 'clsx'
import type { ComponentProps } from 'react'
import * as css from './Btn.css'

export function Btn({ className, ...props }: ComponentProps<'button'>) {
  return <button className={clsx(css.BASE, className)} {...props} />
}

export function CancelBtn({ ...props }: ComponentProps<'button'>) {
  return <Btn className={css.CANCEL} {...props} />
}

export function PrimaryBtn({ ...props }: ComponentProps<'button'>) {
  return <Btn className={css.PRIMARY} {...props} />
}
