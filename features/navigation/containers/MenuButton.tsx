'use client'
import Link from 'next/link'
import type { ComponentProps, ElementType } from 'react'
import * as css from './Navigation.css'

type MenuBtnProps<T extends ElementType> = {
  as?: T
} & Omit<ComponentProps<T>, 'as'> //Link 자체가 as props을 지원하기 때문에 제거

type ExtendedElementType = ElementType | typeof Link

export function MenuBtn<T extends ExtendedElementType = 'button'>({ as, ...props }: MenuBtnProps<T>) {
  const Comp = as ?? 'button'
  const className = css.categoryBtn

  if (Comp === Link) return <Link {...(props as unknown as ComponentProps<typeof Link>)} className={className} data-menu-trigger />

  const C = Comp as ElementType //Link를 제외하고 재타입
  return <C {...(props as ComponentProps<typeof C>)} className={className} data-menu-trigger />
}
