import { style } from '@vanilla-extract/css'
import { dp } from 'styles/dp'
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
  transform: `translateY(calc(100dvh - 100% - ${dp(6)}))`,
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

export const rightButtonGroup = style({
  display: 'flex',
  gap: dp(2),
})

export const categoryBtn = style({
  margin: 0,
  padding: dp(2),
  border: 'none',
  borderRadius: dp(6),
  backgroundColor: color.background,
  color: color.text,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 600px)': {
      padding: 0,
      color: color.text,
      backgroundColor: 'transparent',
    },
  },
})
