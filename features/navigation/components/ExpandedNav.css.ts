import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const wrapper = style({
  width: '100vw',
  height: '100dvh',
  background: `rgba(255, 255, 255, 0.51)`,
  boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
  backdropFilter: `blur(4.1px)`,
  WebkitBackdropFilter: `blur(4.1px)`,
  zIndex: 999,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: 'transform 0.15s, opacity ease-in-out 0.15s',
})

export const frame = style({
  backgroundColor: color.notion_default,
  color: color.white,
  paddingTop: dp(24),
  paddingInline: dp(6),
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
  gap: '0.5rem',
  height: '100%',
  justifyItems: 'center',
})
