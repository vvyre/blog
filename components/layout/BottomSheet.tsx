import { useEffect, useMemo, useRef, useState, type ComponentProps, type PointerEvent } from 'react'
import * as css from './BottomSheet.css'
import { clamp } from 'utils/clamp'

interface Props extends ComponentProps<'div'> {
  unmount: () => void
  size: 'full' | 'half'
}

export function BottomSheet({ size, unmount, ...props }: Props) {
  const openSnap = size === 'full' ? 1 : 0.5
  const SNAP_POINTS = useMemo(() => (size === 'full' ? [0, 1] : [0, 0.5, 1]), [size])

  const [pos, setPos] = useState<number>(0)
  const [dragging, setDragging] = useState(false)

  const sheetRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startYRef = useRef(0)
  const startPosRef = useRef(0)

  useEffect(() => {
    const id = requestAnimationFrame(() => setPos(openSnap))
    return () => cancelAnimationFrame(id)
  }, [openSnap])

  const handlePointerDown = (e: PointerEvent) => {
    setDragging(true)
    isDraggingRef.current = true
    startYRef.current = e.clientY
    startPosRef.current = pos
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setDragging(false)

    const snapped = SNAP_POINTS.reduce((acc, s) => (Math.abs(s - pos) < Math.abs(acc - pos) ? s : acc), SNAP_POINTS[0])

    if (snapped === 0) {
      setPos(0)
      unmount()
      return
    }
    setPos(snapped)
  }

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDraggingRef.current) return
    const h = sheetRef.current?.getBoundingClientRect().height ?? 1
    const dy = e.clientY - startYRef.current
    const delta = -(dy / h)
    setPos(() => clamp(0, startPosRef.current + delta, 1))
  }

  const handlePointerCancel = () => {
    isDraggingRef.current = false
    setDragging(false)
    const snapped = SNAP_POINTS.reduce((acc, s) => (Math.abs(s - pos) < Math.abs(acc - pos) ? s : acc), SNAP_POINTS[0])
    if (snapped === 0) {
      setPos(0)
      unmount()
    } else {
      setPos(snapped)
    }
  }

  return (
    <div
      className={css.frame}
      style={{
        display: pos === 0 ? 'hidden' : 'block',
      }}>
      <div
        className={css.backdrop}
        style={{
          opacity: pos,
        }}
        onClick={() => {
          setPos(0)
          unmount()
        }}
        aria-hidden>
        <div
          ref={sheetRef}
          className={css.base}
          style={{
            transform: `translateY(${(1 - pos) * 3.5}%)`,
            opacity: pos === 0 ? 0 : 1,
            transition: dragging ? 'none' : 'transform 0.15s ease, opacity 0.1s ease',
          }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          role="dialog"
          aria-modal="true">
          <div>
            <button className={css.handleArea} onPointerDown={handlePointerDown} aria-label="바텀시트 핸들">
              <span className={css.handleBar} />
            </button>
            <div className={css.contentFrame}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
