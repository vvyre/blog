'use client'
import Link from 'next/link'
import { type ComponentProps, type ElementType, ReactNode, useState } from 'react'
import * as css from './Navigation.css'
import { useBooleanState } from '@frfla/react-hooks'

type MenuBtnProps<T extends ElementType> = {
  as?: T
  onHoverComponent?: (hover: boolean) => ReactNode
} & Omit<ComponentProps<T>, 'as'> //Link 자체가 as props을 지원하기 때문에 제거

type ExtendedElementType = ElementType | typeof Link

export function MenuBtn<T extends ExtendedElementType = 'button'>({ as, onHoverComponent, className: _className, ...props }: MenuBtnProps<T>) {
  const [hovered, hover, exit] = useBooleanState(false)
  const Comp = as ?? 'button'
  const className = css.categoryBtn

  const handleMouseEnter = (e: any) => {
    hover()
    props.onMouseEnter?.(e)
  }

  const handleMouseLeave = (e: any) => {
    exit()
    props.onMouseLeave?.(e)
  }

  return (
    <>
      {(() => {
        if (Comp === Link) {
          return (
            <Link
              href={props.href}
              {...props}
              className={className}
              data-menu-trigger
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          )
        }
        return <Comp {...props} className={className} data-menu-trigger onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      })()}
      {onHoverComponent?.(hovered)}
    </>
  )
}
