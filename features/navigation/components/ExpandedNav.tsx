import { useMediaQuery } from 'hooks/useMediaQuery.hook'
import { type ReactNode, useEffect } from 'react'
import * as css from './ExpandedNav.css'

export function ExpandedNav({ isOpen, content, onClose, ...props }: { isOpen: boolean; content: ReactNode; onClose: () => void }) {
  const isMobile = useMediaQuery('(max-width: 600px)')
  useEffect(() => {
    if (!isOpen) return

    const handleClick = (e: PointerEvent) => {
      const target = e.target as Element
      const inside = target.closest('[data-menu-root], [data-menu-trigger]')
      if (!inside) onClose()
    }

    document.addEventListener('pointerdown', handleClick, true)
    return () => document.removeEventListener('pointerdown', handleClick, true)
  }, [isOpen, onClose])

  return (
    <div
      className={css.wrapper}
      style={{
        visibility: isOpen ? 'visible' : 'hidden',
        pointerEvents: isOpen ? 'auto' : 'none',
        translate: isOpen ? 0 : '100%',
        transform: isOpen ? 'translateY(0)' : isMobile ? 'translateY(5%)' : 'translateY(-5%)',
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div data-menu-root className={css.frame} {...props}>
        <div className={css.contentFrame}>{content}</div>
      </div>
    </div>
  )
}
