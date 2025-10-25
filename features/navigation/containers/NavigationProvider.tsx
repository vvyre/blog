'use client'
import type { ActionDispatch, PropsWithChildren, Reducer } from 'react'
import { createContext, useMemo, useReducer } from 'react'

export type MenuKeys = 'hamburger' | 'about' | null
export type Actions = 'open' | 'close'
type ActionParams = {
  type: Actions
  key?: MenuKeys
}
type NavContextType = {
  key?: MenuKeys
  setOpenState: ActionDispatch<[action: ActionParams]>
}

export const NavContext = createContext<NavContextType>({ key: null, setOpenState: () => {} })

export function NavProvider({ children }: PropsWithChildren) {
  const [key, dispatch] = useReducer(reducer, null)
  const value = useMemo(() => ({ key, setOpenState: dispatch }), [key])

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

const reducer: Reducer<MenuKeys, ActionParams> = (_, action) => {
  switch (action.type) {
    case 'open':
      return action.key ?? null
    case 'close':
      return null
  }
}
