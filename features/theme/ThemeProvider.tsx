'use client'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'
import { createContext, type Dispatch, type ReactNode, type SetStateAction, useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'
export type ThemeContext = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
  toggleTheme: () => void
}

const initialThemeContextValue: ThemeContext = {
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
}

export const ThemeContext = createContext<ThemeContext>(initialThemeContextValue)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const localStorageKey = `SeyuInTheme`
  const localSetting = typeof window !== 'undefined' ? (localStorage.getItem(localStorageKey) as Theme | null) : null
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const [theme, setTheme] = useState<Theme>('light')

  useIsomorphicLayoutEffect(() => {
    setTheme(localSetting ?? (prefersDark ? 'dark' : 'light'))
  }, [prefersDark])

  useIsomorphicLayoutEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem(localStorageKey, theme)
  }, [theme])

  const toggleTheme = useCallback(() => setTheme(t => (t === 'light' ? 'dark' : 'light')), [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
