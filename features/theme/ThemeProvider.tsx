'use client'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'

import { createContext, type Dispatch, type ReactNode, type SetStateAction, useState } from 'react'

const theme = ['system', 'light', 'dark'] as const
type Theme = (typeof theme)[number]

export function nextTheme(current: Theme) {
  const i = theme.indexOf(current)
  return theme[(i + 1) % theme.length]
}

export type ThemeContext = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
  toggleTheme: () => void
}

const initialThemeContextValue: ThemeContext = {
  theme: 'system',
  setTheme: () => {},
  toggleTheme: () => {},
}

export const ThemeContext = createContext<ThemeContext>(initialThemeContextValue)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const localStorageKey = `YooooonBlogTheme`
  const localSetting = typeof window !== 'undefined' ? (localStorage.getItem(localStorageKey) as Theme | null) : null
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const [theme, setTheme] = useState<Theme>('system')

  const convertTheme = (theme: Theme) => (theme !== 'system' ? theme : prefersDark ? 'dark' : 'light')

  // theme이 system일 때
  useIsomorphicLayoutEffect(() => {
    if (theme === 'system') setTheme(localSetting ?? (prefersDark ? 'dark' : 'light'))
  }, [prefersDark])

  // theme, storage 동기화
  useIsomorphicLayoutEffect(() => {
    document.body.dataset.theme = convertTheme(theme)
    localStorage.setItem(localStorageKey, theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => nextTheme(prev))

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
