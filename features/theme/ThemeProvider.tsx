'use client'
import { useIsomorphicLayoutEffect, useMediaQuery } from '@fische/react'
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
  appliedTheme: Exclude<Theme, 'system'>
}

const initialThemeContextValue: ThemeContext = {
  theme: 'system',
  setTheme: () => {},
  toggleTheme: () => {},
  appliedTheme: 'light',
}

export const ThemeContext = createContext<ThemeContext>(initialThemeContextValue)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const localStorageKey = `YooooonBlogTheme`
  const localSetting = typeof window !== 'undefined' ? (localStorage.getItem(localStorageKey) as Theme | null) : null
  const [prefersDark] = useMediaQuery('(prefers-color-scheme: dark)')

  const [theme, setTheme] = useState<Theme>('system')
  const appliedTheme: Theme = theme !== 'system' ? theme : prefersDark ? 'dark' : 'light'

  // 처음 렌더링될 때
  useIsomorphicLayoutEffect(() => {
    theme === 'system' && setTheme(localSetting ?? appliedTheme)
  }, [prefersDark])

  // theme, storage 동기화
  useIsomorphicLayoutEffect(() => {
    document.body.dataset.theme = appliedTheme
    localStorage.setItem(localStorageKey, theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => nextTheme(prev))

  return (
    <ThemeContext.Provider
      value={{
        theme,
        appliedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
