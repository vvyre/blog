'use client'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { HamburgerMenuIcon, InfoCircledIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { About } from 'features/navigation/containers/About'
import { ThemeContext } from 'features/theme'
import { type MouseEvent, useContext, useState } from 'react'
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
  const { theme, toggleTheme } = useContext(ThemeContext)
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

  //Theme Hydration Error 방지
  const [mounted, setMounted] = useState(false)
  useIsomorphicLayoutEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <div className={css.frame}>
        <div className={css.rightButtonGroup}>
          <MenuBtn onClick={toggleTheme}>
            {(() => {
              switch (theme) {
                case 'dark':
                  return <SunIcon width="21" height="21" />
                case 'light':
                  return <MoonIcon width="21" height="21" />
              }
            })()}
          </MenuBtn>
          <MenuBtn onClick={e => handleMenuButton(e, 'hamburger')}>
            <HamburgerMenuIcon width="21" height="21" />
          </MenuBtn>
        </div>
        <MenuBtn onClick={e => handleMenuButton(e, 'about')}>
          <InfoCircledIcon width="21" height="21" />
        </MenuBtn>
      </div>
      <ExpandedNav isOpen={key !== null} onClose={handleMenuClose} content={expandedNavContent(key)} />
    </>
  )
}
