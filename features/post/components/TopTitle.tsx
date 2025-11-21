'use client'

import { useMediaQuery } from '@fische/react'
import { breakpoints } from 'styles/vars/breakpoints.css'

export function TopTitle({ title }: { title: string }) {
  const [isDesktop] = useMediaQuery(breakpoints.desktop)
  const txt = !isDesktop ? (title.length > 30 ? `${title.slice(0, 30)}...` : title) : title
  return <span>{txt}</span>
}
