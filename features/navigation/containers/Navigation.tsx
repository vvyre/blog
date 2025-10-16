'use client'
import { HamburgerMenuIcon, Link2Icon } from '@radix-ui/react-icons'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, useContext } from 'react'
import { ExpandedNav } from '../components/ExpandedNav'
import { Menu } from './Menu'
import * as css from './Navigation.css'
import { NavContext, NavProvider } from './NavigationProvider'

export function Navigation() {
  return (
    <NavProvider>
      <NavigationContent />
    </NavProvider>
  )
}

function NavigationContent() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const { isOpen, setOpenState } = useContext(NavContext)

  return (
    <>
      <div className={css.frame}>
        {!isMobile ? (
          <div>
            <HamburgerMenuBtn
              onClick={e => {
                e.stopPropagation()
                setOpenState({ type: 'toggle' })
              }}
            />
          </div>
        ) : (
          <HamburgerMenuBtn
            onClick={e => {
              e.stopPropagation()
              setOpenState({ type: 'toggle' })
            }}
          />
        )}
      </div>
      <ExpandedNav
        isOpen={isOpen}
        onClose={() => setOpenState({ type: 'close' })}
        content={<Menu onClose={() => setOpenState({ type: 'close' })} />}
      />
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
      <button type="button" className={css.categoryBtn}>
        <Link href="/">
          <Image unoptimized src="" alt="logo" />
        </Link>
      </button>

      {!isStartPage && (
        <button type="button" className={css.categoryBtn}>
          <Link2Icon color={ICON_COLOR} />
        </button>
      )}
    </>
  )
}

function HamburgerMenuBtn({ ...props }: ComponentProps<'button'>) {
  return (
    <button type="button" data-menu-trigger onClick={props.onClick} className={css.categoryBtn}>
      <HamburgerMenuIcon color="white" width="21" height="21" />
    </button>
  )
}
