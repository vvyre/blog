import { useEffect, type ReactNode } from 'react'
import * as css from './ExpandedNav.css'
import { useMediaQuery } from 'hooks/useMediaQuery.hook'

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
      data-menu-root
      className={css.wrapper}
      style={{
        display: isOpen ? 'block' : 'hidden',
        translate: isOpen ? 0 : '100%',
        transform: isOpen ? 'translateY(0)' : isMobile ? 'translateY(5%)' : 'translateY(-5%)',
        opacity: isOpen ? 1 : 0,
      }}>
      <div className={css.frame} style={{}} {...props}>
        <div className={css.contentFrame}>{content}</div>
      </div>
    </div>
  )
}
