'use client'
import { HamburgerMenuIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { About } from 'features/navigation/containers/About'
import { type MouseEvent, useContext } from 'react'
import { ExpandedNav } from '../components/ExpandedNav'
import { HamburgerMenu } from './HamburgerMenu'
import { MenuBtn } from './MenuButton'
import * as css from './Navigation.css'
import { type MenuKeys, NavContext, NavProvider } from './NavigationProvider'

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
  const handleMenuButton = (e: MouseEvent, to: MenuKeys) => {
    e.stopPropagation()
    if (key === to) handleMenuClose()
    else setOpenState({ type: 'open', key: to })
  }

  const expandedNavContent = (key?: MenuKeys) => {
    switch (key) {
      case 'hamburger':
        return <HamburgerMenu onClose={handleMenuClose} />
      case 'about':
        return <About />
      default:
        return null
    }
  }

  return (
    <>
      <div className={css.frame}>
        <MenuBtn onClick={e => handleMenuButton(e, 'hamburger')}>
          <HamburgerMenuIcon width="21" height="21" />
        </MenuBtn>
        <MenuBtn onClick={e => handleMenuButton(e, 'about')}>
          <InfoCircledIcon width="21" height="21" />
        </MenuBtn>
      </div>
      <ExpandedNav isOpen={key !== null} onClose={handleMenuClose} content={expandedNavContent(key)} />
    </>
  )
}
