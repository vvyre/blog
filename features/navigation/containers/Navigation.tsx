'use client'
import { type MouseEvent, useContext } from 'react'
import { ExpandedNav } from '../components/ExpandedNav'
import { HamburgerMenu, HamburgerMenuBtn } from './HamburgerMenu'
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
  const { key, setOpenState } = useContext(NavContext)
  const handleMenuClose = () => setOpenState({ type: 'close' })
  const handleHamburgerButton = (e: MouseEvent) => {
    e.stopPropagation()
    return key === 'hamburger' ? handleMenuClose() : setOpenState({ type: 'open', key: 'hamburger' })
  }

  return (
    <>
      <div className={css.frame}>
        <HamburgerMenuBtn onClick={handleHamburgerButton} />
      </div>
      <ExpandedNav isOpen={key !== null} onClose={handleMenuClose} content={<HamburgerMenu onClose={handleMenuClose} />} />
    </>
  )
}
