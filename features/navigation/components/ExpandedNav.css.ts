import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
import { color } from 'styles/vars/color.css'

export const wrapper = style({
  width: '100vw',
  backgroundColor: color.background_opacity95,
  zIndex: 9,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'transform .2s cubic-bezier(.4, 0, .4, 1), opacity .2s cubic-bezier(.4, 0, .4, 1)',
})

export const frame = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  paddingTop: dp(12),
  overflow: 'hidden',
})

export const contentFrame = style({
  height: `calc(100dvh - ${dp(12)})`,
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  marginBottom: dp(6),
})
