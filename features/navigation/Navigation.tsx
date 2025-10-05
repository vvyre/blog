'use client'
import { ComponentProps, useEffect, useState } from 'react'
import { FullMenu } from './FullMenu'
import * as css from './Navigation.css'
import { ArrowLeftIcon, AvatarIcon, HamburgerMenuIcon, Link2Icon } from '@radix-ui/react-icons'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

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
      <div className={css.frame}>
        {!isMobile ? (
          <>
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

  return (
    <>
      <button className={css.categoryBtn}>
        <Link href="/">
          <Image unoptimized src="" alt="logo" />
        </Link>
      </button>

      {!isStartPage && (
        <button className={css.categoryBtn}>
          <Link2Icon color={ICON_COLOR} />
        </button>
      )}
    </>
  )
}

function HamburgerMenuBtn({ ...props }: ComponentProps<'button'>) {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <button data-menu-trigger onClick={props.onClick} className={css.categoryBtn}>
      <HamburgerMenuIcon color="white" width="21" height="21" />
    </button>
  )
}
