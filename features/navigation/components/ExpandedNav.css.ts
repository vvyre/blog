import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'

export const wrapper = style({
  width: '100vw',
  height: '100dvh',
  backdropFilter: `blur(${dp(4)})`,
  WebkitBackdropFilter: `blur(${dp(4)})`,
  zIndex: 999,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'transform 0.15s, opacity ease-in-out 0.15s',
})

export const frame = style({
  backgroundColor: 'transparent',
  paddingTop: dp(24),
  paddingBottom: dp(12),
  width: '100%',
  height: '100%',
  '@media': {
    'screen and (min-width: 600px)': {
      height: 'auto',
    },
  },
})

export const contentFrame = style({
  display: 'flex',
  flexDirection: 'column',
  gap: dp(2),
  height: '100%',
  justifyItems: 'center',
})
