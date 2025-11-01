import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const frame = style({
  zIndex: 999,
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
})

export const backdrop = style({
  position: 'absolute',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.35)',
  transition: 'opacity 150ms ease',
  pointerEvents: 'auto',
})

export const base = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '1.5rem',
  margin: 0,
  height: 'calc(100dvh)',
  background: '#fff',
  borderTopLeftRadius: '0.6rem',
  borderTopRightRadius: '0.6rem',
  pointerEvents: 'auto',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 'env(safe-area-inset-bottom)',
  '@media': {
    'screen and (min-width: 600px)': {
      height: 'calc(100dvh)',
    },
  },
})

export const handleArea = style({
  width: '100%',
  textAlign: 'center',
  border: 'none',
  padding: '0.5rem 0',
  touchAction: 'none',
  cursor: 'grab',
})

export const handleBar = style({
  display: 'inline-block',
  width: '3rem',
  height: '0.25rem',
  borderRadius: '999px',
  background: 'gainsboro',
  transition: 'scale ease 0.15s',
  ':active': {
    scale: '0.85',
  },
})

export const contentFrame = style({
  padding: dp(6),
})
