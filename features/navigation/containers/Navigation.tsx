'use client'
import { HamburgerMenuIcon, HomeIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { ThemeContext } from 'features/theme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const path = usePathname()
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
      default:
        return null
    }
  }

  return (
    <>
      <div className={css.frame}>
        <div className={css.buttonGroup}>
          <MenuBtn>
            {(() => {
              switch (path) {
                case '/about':
                  return (
                    <Link href="/">
                      <HomeIcon width="21" height="21" />
                    </Link>
                  )
                default:
                  return (
                    <Link href="/about">
                      <InfoCircledIcon width="21" height="21" />
                    </Link>
                  )
              }
            })()}
          </MenuBtn>
        </div>
        <div className={css.buttonGroup}>
          <MenuBtn onClick={e => handleMenuButton(e, 'hamburger')}>
            <HamburgerMenuIcon width="21" height="21" />
          </MenuBtn>
          <MenuBtn onClick={toggleTheme}>
            {(() => {
              switch (theme) {
                case 'dark':
                  return '🌞'
                case 'light':
                  return '🌚'
              }
            })()}
          </MenuBtn>
        </div>
      </div>
      <ExpandedNav isOpen={key !== null} onClose={handleMenuClose} content={expandedNavContent(key)} />
    </>
  )
}
