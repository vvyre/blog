'use client'
import { ComponentProps, useEffect, useState } from 'react'
import { FullMenu } from './FullMenu'
import * as css from './Navigation.css'
import { ArrowLeftIcon, AvatarIcon, HamburgerMenuIcon, Link2Icon } from '@radix-ui/react-icons'
import { useMediaQuery } from 'utils/hooks/useMediaQuery'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const handlePointerDownCapture = (e: PointerEvent) => {
      if (!open) return
      const el = e.target as Element
      const inside = el.closest('[data-menu-root],[data-menu-trigger]')
      if (!inside) setOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDownCapture, true)
    return () => document.removeEventListener('pointerdown', handlePointerDownCapture, true)
  }, [open])

  return (
    <>
      <div className={css.FRAME}>
        {!isMobile ? (
          <>
            <div>
              <LeftMenuGroup />
            </div>
            <div>
              <HamburgerMenuBtn
                onClick={e => {
                  e.stopPropagation()
                  setOpen(v => !v)
                }}
              />
            </div>
          </>
        ) : (
          <>
            <LeftMenuGroup />
            <HamburgerMenuBtn
              onClick={e => {
                e.stopPropagation()
                setOpen(v => !v)
              }}
            />
          </>
        )}
      </div>
      <FullMenu data-menu-root={true} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

function LeftMenuGroup() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const ICON_COLOR = isMobile ? 'grey' : 'black'
  const path = usePathname()
  const isStartPage = path === '/'
  const isAboutPage = path.startsWith('/about')

  return (
    <>
      {!isAboutPage ? (
        <button className={css.CATEGORY_BTN}>
          <Link href="/about">
            <AvatarIcon color={ICON_COLOR} />
          </Link>
        </button>
      ) : (
        <button className={css.CATEGORY_BTN}>
          <Link href="/">
            <ArrowLeftIcon color={ICON_COLOR} />
          </Link>
        </button>
      )}
      {!isStartPage && (
        <button className={css.CATEGORY_BTN}>
          <Link2Icon color={ICON_COLOR} />
        </button>
      )}
    </>
  )
}

function HamburgerMenuBtn({ ...props }: ComponentProps<'button'>) {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <button data-menu-trigger onClick={props.onClick} className={css.CATEGORY_BTN}>
      <HamburgerMenuIcon color={isMobile ? 'grey' : 'black'} />
    </button>
  )
}
