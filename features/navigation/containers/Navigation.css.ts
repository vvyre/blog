import { style } from '@vanilla-extract/css'
import { dp } from 'styles/size'
import { color } from 'styles/vars/color.css'

export const frame = style({
  zIndex: 9999,
  height: dp(12),
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingInline: dp(3),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transform: 'translateY(calc(100dvh - 100%))',
  position: 'fixed',
  backgroundColor: 'transparent',
  color: color.notion_default,
  flexDirection: 'row-reverse',
  '@media': {
    'screen and (min-width: 600px)': {
      borderTop: 'none',
      height: dp(12),
      transform: 'translateY(0)',
    },
  },
})

export const categoryBtn = style({
  margin: 0,
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  color: 'lightgrey',
  width: '1.25rem',
  height: '1.5rem',
  cursor: 'pointer',
})
