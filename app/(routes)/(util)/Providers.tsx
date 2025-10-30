import { ThemeProvider } from 'features/theme'
import { OverlayProvider } from 'overlay-kit'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </ThemeProvider>
  )
}
