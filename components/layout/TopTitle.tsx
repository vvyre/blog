'use client'

import { useMediaQuery } from 'utils/hooks/useMediaQuery'

export function TopTitle({ title }: { title: string }) {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const txt = isMobile ? (title.length > 30 ? `${title.slice(0, 30)}...` : title) : title
  return <span>{txt}</span>
}
