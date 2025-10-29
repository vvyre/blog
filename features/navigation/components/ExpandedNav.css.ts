import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'

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
  paddingTop: dp(12),
  width: '100%',
  height: '100%',
})

export const contentFrame = style({
  paddingTop: dp(12),
  overflowY: 'auto',
  height: '100%',
})
