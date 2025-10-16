'use client'
import type { ActionDispatch, PropsWithChildren, Reducer } from 'react'
import { createContext, useReducer } from 'react'

type Actions = 'open' | 'close' | 'toggle'
type NavContextType = {
  isOpen: boolean
  setOpenState: ActionDispatch<
    [
      action: {
        type: Actions
      },
    ]
  >
}

export const NavContext = createContext<NavContextType>({ isOpen: false, setOpenState: () => {} })

export function NavProvider({ children }: PropsWithChildren) {
  const [isOpen, setOpenState] = useReducer(reducer, false)

  return <NavContext.Provider value={{ isOpen, setOpenState }}>{children}</NavContext.Provider>
}

const reducer: Reducer<boolean, { type: Actions }> = (prev, action) => {
  switch (action.type) {
    case 'open':
      return true
    case 'close':
      return false
    case 'toggle':
      return !prev
  }
}
