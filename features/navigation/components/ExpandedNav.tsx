import { type ReactNode, useEffect } from 'react'
import * as css from './ExpandedNav.css'

export function ExpandedNav({ isOpen, content, onClose, ...props }: { isOpen: boolean; content: ReactNode; onClose: () => void }) {
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
    <div className={css.wrapper} data-open={isOpen}>
      <div data-menu-root className={css.frame} {...props}>
        <div className={css.contentFrame}>{content}</div>
      </div>
    </div>
  )
}
