import { OverlayProvider } from 'overlay-kit'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <OverlayProvider>{children}</OverlayProvider>
    </>
  )
}
