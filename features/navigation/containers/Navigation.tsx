'use client'
import { ComponentProps, useContext, useEffect, useState } from 'react'
import { Menu } from './Menu'
import * as css from './Navigation.css'
import { HamburgerMenuIcon, Link2Icon } from '@radix-ui/react-icons'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { NavContext, NavProvider } from './NavigationProvider'
import { ExpandedNav } from '../components/ExpandedNav'

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
          <>
            <div>
              <HamburgerMenuBtn
                onClick={e => {
                  e.stopPropagation()
                  setOpenState({ type: 'toggle' })
                }}
              />
            </div>
          </>
        ) : (
          <>
            <HamburgerMenuBtn
              onClick={e => {
                e.stopPropagation()
                setOpenState({ type: 'toggle' })
              }}
            />
          </>
        )}
      </div>
      <ExpandedNav
        isOpen={isOpen}
        onClose={() => setOpenState({ type: 'close' })}
        content={<Menu isOpen={isOpen} onClose={() => setOpenState({ type: 'close' })} />}
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
  return (
    <button data-menu-trigger onClick={props.onClick} className={css.categoryBtn}>
      <HamburgerMenuIcon color="white" width="21" height="21" />
    </button>
  )
}
