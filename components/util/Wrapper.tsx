import { cloneElement, JSX, type ReactNode } from 'react'

export function Wrapper({
  as,
  condition = true,
  children,
}: {
  as: () => ReactNode & JSX.Element
  condition?: boolean
  children?: ReactNode
}) {
  if (!condition) return children
  else return cloneElement(as(), {}, children)
}
